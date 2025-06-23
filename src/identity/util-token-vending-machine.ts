/**
 * AWS credential identity interface compatible with Smithy types
 */
export interface AwsCredentialIdentity {
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