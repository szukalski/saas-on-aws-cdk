import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts';
import { AwsCredentialIdentity } from './util-token-vending-machine';
import { extractTenantId } from '../identity/util-jwt';

export interface TokenVendingMachineProps { }

export class TokenVendingMachine {
  private stsClient: STSClient;

  constructor() {
    this.stsClient = new STSClient({});
  }

  async getCredentialsWithAssumeRole(jwt: string, roleArn: string): Promise<AwsCredentialIdentity> {
    try {
      const tenantId = extractTenantId(jwt);

      // Create a unique session name for this tenant
      const sessionName = `tenant-${tenantId}-${Date.now()}`;

      // Assume role with session tagging of tenant ID
      const assumeRoleCommand = new AssumeRoleCommand({
        RoleArn: roleArn,
        RoleSessionName: sessionName,
        DurationSeconds: 3600, // 1 hour
        Tags: [
          {
            Key: 'tenantId',
            Value: tenantId,
          },
        ],
      });

      const response = await this.stsClient.send(assumeRoleCommand);

      if (!response.Credentials) {
        throw new Error('Failed to assume role - no credentials returned');
      }

      return {
        accessKeyId: response.Credentials.AccessKeyId!,
        secretAccessKey: response.Credentials.SecretAccessKey!,
        sessionToken: response.Credentials.SessionToken!,
        expiration: response.Credentials.Expiration,
      };
    } catch (error) {
      console.error('Error in token vending machine:', error);
      throw new Error(`Failed to get credentials for tenant: ${error}`);
    }
  }
}