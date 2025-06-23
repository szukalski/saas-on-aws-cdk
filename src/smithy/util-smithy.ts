import { AwsCredentialIdentity } from '../identity/util-token-vending-machine';

export interface SmithyContext {
  readonly credentials: AwsCredentialIdentity;
}
