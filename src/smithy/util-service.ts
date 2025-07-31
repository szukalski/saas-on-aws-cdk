export function getOpenApiPath(serviceName: string): string {
  return `./src/smithy/${serviceName}/openapi/${serviceName}.openapi.json`;
}