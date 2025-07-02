import { AwsCredentialIdentity } from '../token-vending-machine/util-token-vending-machine';

export function getCredentials(context: SmithyContext): AwsCredentialIdentity {
  return {
    ...context,
  };
}

export interface SmithyContext {
  /**
   * AWS access key ID
   */
  readonly accessKeyId: string;

  /**
   * AWS secret access key
   */
  readonly secretAccessKey: string;

  /**
   * AWS session token (optional)
   */
  readonly sessionToken?: string;

  /**
   * Credential expiration time (optional)
   */
  readonly expiration?: Date;

  /**
   * Credential provider name (optional)
   */
  readonly credentialScope?: string;
}
