import { randomUUID } from 'crypto';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export function nextUuid() {
  return randomUUID();
}

export function extractJwt(event: APIGatewayProxyEventV2): string {
  const token = event.headers.Authorization?.replace('Bearer ', '');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
}

interface MyJwtPayload extends JwtPayload {
  tenant_id: string;
}

export function extractTenantId(token: string): string {
  const decoded = jwtDecode<MyJwtPayload>(token);
  return decoded.tenant_id;
}
