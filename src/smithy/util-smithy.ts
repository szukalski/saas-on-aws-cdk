import { AwsCredentialIdentity } from '@aws-sdk/types';

export interface SmithyContext {
  credentials: AwsCredentialIdentity;
}
