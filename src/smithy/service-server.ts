import { readFileSync } from 'fs';
import { Aws, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { ApiDefinition, EndpointType, LogGroupLogDestination, MethodLoggingLevel, SpecRestApi, SpecRestApiProps } from 'aws-cdk-lib/aws-apigateway';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { ILogGroup } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { SoaLogGroup } from '../log-group/log-group';

export interface ServiceServerProps {
  readonly openApiPath: string;
  readonly serviceFunction: IFunction;
  readonly serviceName: string;
  readonly logGroup?: ILogGroup;
  readonly serviceAuthorizer?: IFunction;
  readonly specRestApiProps?: SpecRestApiProps;
}

export class ServiceServer extends Construct {
  api: SpecRestApi;
  serviceFunction: IFunction;
  serviceAuthorizer?: IFunction;
  constructor(scope: Construct, id: string, props: ServiceServerProps) {
    super(scope, id);
    const { openApiPath, serviceName } = props;
    this.serviceAuthorizer = props.serviceAuthorizer ?? undefined;
    this.serviceFunction = props.serviceFunction;

    // Create a log group for the service
    const logGroup = props.logGroup ?? new SoaLogGroup(this, 'LogGroup');

    // Create API using OpenAPI spec generated from Smithy model
    const apiDefinition = JSON.parse(readFileSync(openApiPath, 'utf8'));
    this.api = new SpecRestApi(this, `${serviceName}Api`, {
      apiDefinition: ApiDefinition.fromInline(apiDefinition),
      cloudWatchRoleRemovalPolicy: RemovalPolicy.DESTROY,
      deployOptions: {
        accessLogDestination: new LogGroupLogDestination(logGroup),
        loggingLevel: MethodLoggingLevel.INFO,
      },
      endpointTypes: [EndpointType.REGIONAL],
      ...props.specRestApiProps,
    });

    // Give permission to the API to invoke the service function
    const apiRole = new Role(this, `${serviceName}ApiRole`, {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
    });
    this.serviceFunction.grantInvoke(apiRole);

    // Update the OpenAPI definition to add the Lambda integration URI from the service function
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
        integration.uri = `arn:${Aws.PARTITION}:apigateway:${Aws.REGION}:lambda:path/2015-03-31/functions/${this.serviceFunction.functionArn}/invocations`;
        integration.credentials = apiRole.roleArn;
      }
    }

    // Update the OpenAPI definition to add the authorizer URI if it exists
    if (this.serviceAuthorizer) {
      this.serviceAuthorizer.grantInvoke(apiRole);
      for (const securityScheme in apiDefinition.components.securitySchemes) {
        const scheme = apiDefinition.components.securitySchemes[securityScheme];
        const authorizer = scheme['x-amazon-apigateway-authorizer'];
        if (!authorizer) {
          continue;
        }
        authorizer.authorizerUri = `arn:${Aws.PARTITION}:apigateway:${Aws.REGION}:lambda:path/2015-03-31/functions/${this.serviceAuthorizer.functionArn}/invocations`;
        authorizer.authorizerCredentials = apiRole.roleArn;
      }
    }

    new CfnOutput(this, `${serviceName}ApiUrl`, {
      key: `${serviceName}ApiUrl`,
      value: this.api.url,
    });
  }
}