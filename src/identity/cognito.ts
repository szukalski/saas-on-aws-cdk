import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { ClientAttributes, FeaturePlan, LambdaVersion, StringAttribute, UserPool, UserPoolClient, UserPoolOperation, UserPoolProps } from 'aws-cdk-lib/aws-cognito';
import { OpenIdConnectPrincipal, OpenIdConnectProvider, PrincipalBase } from 'aws-cdk-lib/aws-iam';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

// Cognito user pool with username only for testing purposes, probably want something different for production..
export class MultiTenantUserPool extends UserPool {
  constructor(scope: Construct, id: string, props?: UserPoolProps) {
    super(scope, id, {
      featurePlan: FeaturePlan.ESSENTIALS,
      selfSignUpEnabled: false,
      signInAliases: {
        username: true,
        email: true,
        phone: false,
      },
      standardAttributes: {
        email: { required: false, mutable: true },
        phoneNumber: { required: false, mutable: true },
      },
      customAttributes: {
        tenantId: new StringAttribute({ minLen: 1, maxLen: 36, mutable: false }), // Don't let anyone change the tenantId after creation!
        role: new StringAttribute({ minLen: 1, maxLen: 36, mutable: true }),
      },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props,
    });
  }
  addMultiTenantClient(): UserPoolClient {
    return this.addClient('UserPoolClient', {
      authFlows: { userPassword: true },
      readAttributes: new ClientAttributes()
        .withCustomAttributes(...['tenantId', 'role']),
      writeAttributes: new ClientAttributes()
        .withCustomAttributes(...['tenantId', 'role']),
      accessTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(60),
      refreshTokenValidity: Duration.days(30),
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

export interface MultiTenantPreTokenGenerationProps {
  readonly domainPrefix: string;
  readonly userPool: UserPool;
}

export class MultiTenantPreTokenGeneration extends Construct {
  constructor(scope: Construct, id: string, props: MultiTenantPreTokenGenerationProps) {
    super(scope, id);
    const { domainPrefix, userPool } = props;
    userPool.addDomain(domainPrefix, {
      cognitoDomain: {
        domainPrefix: domainPrefix,
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
              role: [userAttributes['custom:role']],
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
    });
    userPool.addTrigger(UserPoolOperation.PRE_TOKEN_GENERATION_CONFIG, preTokenGenerationFn, LambdaVersion.V2_0);
  }
}