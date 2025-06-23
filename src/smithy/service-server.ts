import { readFileSync } from 'fs';
import { Aws, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { ApiDefinition, LogGroupLogDestination, SpecRestApi, SpecRestApiProps } from 'aws-cdk-lib/aws-apigateway';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { SoaLogGroup } from '../log-group/log-group';

function readOpenApiDefinition(serviceName: string) {
  const openApiPath = `./src/smithy/${serviceName}/openapi/${serviceName}.openapi.json`;
  return JSON.parse(readFileSync(openApiPath, 'utf8'));
}

export interface ServiceServerProps {
  readonly serviceName: string;
  readonly nodejsFunctionProps?: NodejsFunctionProps;
  readonly specRestApiProps?: SpecRestApiProps;
}

export class ServiceServer extends Construct {
  api: SpecRestApi;
  lambda: NodejsFunction;
  constructor(scope: Construct, id: string, props: ServiceServerProps) {
    super(scope, id);
    const logGroup = new SoaLogGroup(this, props.serviceName+'LogGroup');
    this.lambda = new NodejsFunction(this, `${props.serviceName}Function`, {
      entry: `./src/${props.serviceName}/${props.serviceName}.function.ts`,
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
      logGroup: logGroup,
      bundling: {
        nodeModules: ['re2-wasm'],
      },
      ...props.nodejsFunctionProps,
    });
    const apiDefinition = readOpenApiDefinition(props.serviceName);
    this.api = new SpecRestApi(this, `${props.serviceName}Api`, {
      apiDefinition: ApiDefinition.fromInline(apiDefinition),
      cloudWatchRoleRemovalPolicy: RemovalPolicy.DESTROY,
      deployOptions: {
        accessLogDestination: new LogGroupLogDestination(logGroup),
      },
      ...props.specRestApiProps,
    });

    const apiRole = new Role(this, `${props.serviceName}ApiRole`, {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
    });
    this.lambda.grantInvoke(apiRole);
    // Update the OpenAPI definition to add the Lambda integration URI.
    for (const path in apiDefinition.paths) {
      for (const operation in apiDefinition.paths[path]) {
        const op = apiDefinition.paths[path][operation];
        const integration = op['x-amazon-apigateway-integration'];
        if (!integration) {
          throw new Error(
            `No x-amazon-apigateway-integration for ${op.operationId}. Make sure API Gateway integration is configured in the Smithy model.`,
          );
        }
        // Don't mess with mock integrations.
        if (integration.type === 'mock') {
          continue;
        }
        integration.uri = `arn:${Aws.PARTITION}:apigateway:${Aws.REGION}:lambda:path/2015-03-31/functions/${this.lambda.functionArn}/invocations`;
        integration.credentials = apiRole.roleArn;
      }
    }

    new CfnOutput(this, `${props.serviceName}ApiUrl`, {
      key: `${props.serviceName}ApiUrl`,
      value: this.api.url,
    });
  }
}