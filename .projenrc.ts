import { awscdk } from 'projen';
const cdkVer = '2.232.2';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Dave Roberts',
  authorAddress: 'szukalski@gmail.com',
  cdkVersion: cdkVer,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'saas-on-aws-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com:szukalski/saas-on-aws-cdk',
  release: true,
  releaseToNpm: true,

  deps: [
  ],
  bundledDeps: [
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/client-sts',
    '@aws-sdk/lib-dynamodb',
    '@aws-sdk/types',
    'aws-lambda',
    'jwt-decode',
  ],
  devDeps: [
    '@types/aws-lambda',
  ],
  peerDeps: [
  ],
  gitignore: [
    'yarn.lock',
  ],
});
project.synth();