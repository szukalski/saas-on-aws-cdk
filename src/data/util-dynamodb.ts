import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { AwsCredentialIdentity } from '../token-vending-machine/util-token-vending-machine';

export function createDocClient(credentials?: AwsCredentialIdentity): DynamoDBDocumentClient {
  const config: DynamoDBClientConfig = {
    credentials: credentials,
  };
  return DynamoDBDocumentClient.from(new DynamoDBClient(config), { marshallOptions: { convertClassInstanceToMap: true } });
}