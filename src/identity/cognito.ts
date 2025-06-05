import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { ClientAttributes, LambdaVersion, StringAttribute, UserPool, UserPoolClient, UserPoolClientOptions, UserPoolOperation, UserPoolProps } from 'aws-cdk-lib/aws-cognito';
import { OpenIdConnectPrincipal, OpenIdConnectProvider, PrincipalBase } from 'aws-cdk-lib/aws-iam';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { SoaLogGroup } from '../log-group/log-group';

export class SoaUserPool extends UserPool {
  constructor(scope: Construct, id: string, props?: UserPoolProps) {
    super(scope, id, {
      userPoolName: id,
      selfSignUpEnabled: false,
      autoVerify: { email: true },
      signInAliases: { email: true, username: true },
      customAttributes: {
        tenantId: new StringAttribute({ minLen: 1, maxLen: 36, mutable: false }), // Don't let anyone change the tenantId after creation!
        tenantRole: new StringAttribute({ minLen: 1, maxLen: 36, mutable: true }),
      },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props,
    });
    const logGroup = new SoaLogGroup(this, 'LogGroup', {
      logGroupName: '/' + id + '/' + this.userPoolId,
    });
    this.addDomain(id, {
      cognitoDomain: {
        domainPrefix: id.toLowerCase() + '-auth',
      },
    });
    const preTokenGenerationFn = new NodejsFunction(this, 'PreTokenGenerationFn', {
      code: Code.fromInline(`
export const handler = function(event: any, context: any) {
  const userAttributes = event.request.userAttributes;
  event.response = {
    claimsAndScopeOverrideDetails: {
      idTokenGeneration: {
        claimsToAddOrOverride: {
          'https://aws.amazon.com/tags': {
            principal_tags: {
              tenantId: [userAttributes['custom:tenantId']],
              tenantRole: [userAttributes['custom:tenantRole']],
            },
          },
        },
      },
    },
  };
  context.done(null, event);
};
      `),
      runtime: Runtime.NODEJS_LATEST,
      handler: 'handler',
      timeout: Duration.seconds(30),
      logGroup: logGroup,
    });
    this.addTrigger(UserPoolOperation.PRE_TOKEN_GENERATION_CONFIG, preTokenGenerationFn, LambdaVersion.V2_0);
  }
  addTenantClient(id: string, options?: UserPoolClientOptions): UserPoolClient {
    return this.addClient('UserPoolClient', {
      userPoolClientName: id,
      authFlows: { userPassword: true },
      readAttributes: new ClientAttributes()
        .withStandardAttributes({ email: true })
        .withCustomAttributes(...['tenantId', 'tenantRole']),
      writeAttributes: new ClientAttributes()
        .withStandardAttributes({ email: true })
        .withCustomAttributes(...['tenantId', 'tenantRole']),
      accessTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(60),
      refreshTokenValidity: Duration.days(30),
      ...options,
    });
  }
  addOidcProvider(oidcEndpoint: string, userPoolClientId: string): OpenIdConnectProvider {
    return new OpenIdConnectProvider(this, 'MyOidcProvider', {
      url: oidcEndpoint,
      clientIds: [
        userPoolClientId,
      ],
    });
  }
  getOidcPrincipal(oidcProvider: OpenIdConnectProvider, userPoolClientId: string): PrincipalBase {
    const oidcPrincipal = new OpenIdConnectPrincipal(oidcProvider)
      .withConditions({
        'ForAllValues:StringEquals': {
          'cognito-identity.amazonaws.com:aud': userPoolClientId,
        },
      });
    return oidcPrincipal.withSessionTags();
  }
}