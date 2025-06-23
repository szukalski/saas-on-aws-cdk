import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Dave Roberts',
  authorAddress: 'szukalski@gmail.com',
  cdkVersion: '2.200.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'saas-on-aws-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com:szukalski/saas-on-aws-cdk',

  // Release configuration
  release: true,
  releaseToNpm: true,

  deps: [
    'aws-lambda',
    'jwt-decode',
  ],
  bundledDeps: [
    'aws-lambda',
    'jwt-decode',
  ],
  devDeps: [
    '@types/aws-lambda',
  ],
  gitignore: [
    'yarn.lock',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();