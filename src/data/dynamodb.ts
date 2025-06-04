import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, TablePropsV2, TableV2 } from 'aws-cdk-lib/aws-dynamodb';
import { Effect, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class SoaTableV2 extends TableV2 {
  constructor(scope: Construct, id: string, props?: TablePropsV2) {
    super(scope, id, {
      partitionKey: {
        name: 'pk',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'sk',
        type: AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props,
    });
  }
  grantTenantRead(role: Role) {
    role.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:BatchGetItem',
          'dynamodb:ConditionCheckItem',
          'dynamodb:DescribeTable',
          'dynamodb:GetItem',
          'dynamodb:Query',
          'dynamodb:Scan',
        ],
        resources: [
          this.tableArn,
        ],
        conditions: {
          'ForAllValues:StringEquals': {
            'dynamodb:LeadingKeys': [
              '${aws:PrincipalTag/tenantId}',
            ],
          },
        },
      }),
    );
  }
  grantTenantWrite(role: Role) {
    role.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:BatchGetItem',
          'dynamodb:BatchWriteItem',
          'dynamodb:ConditionCheckItem',
          'dynamodb:DeleteItem',
          'dynamodb:DescribeTable',
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:Query',
          'dynamodb:Scan',
          'dynamodb:UpdateItem',
        ],
        resources: [
          this.tableArn,
        ],
        conditions: {
          'ForAllValues:StringEquals': {
            'dynamodb:LeadingKeys': [
              '${aws:PrincipalTag/tenantId}',
            ],
          },
        },
      }),
    );
  }
}
