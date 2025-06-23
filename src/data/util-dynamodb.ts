import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { SmithyContext } from '../smithy/util-smithy';

export function createDocClient(context: SmithyContext): DynamoDBDocumentClient {
  const config: DynamoDBClientConfig = {
    credentials: context.credentials,
  };
  return DynamoDBDocumentClient.from(new DynamoDBClient(config), { marshallOptions: { convertClassInstanceToMap: true } });
}