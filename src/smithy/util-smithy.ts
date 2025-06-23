import { AwsCredentialIdentity } from '../token-vending-machine/util-token-vending-machine';

export interface SmithyContext {
  readonly credentials: AwsCredentialIdentity;
}
