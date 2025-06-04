import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Dave Roberts',
  authorAddress: 'davjrob@amazon.de',
  cdkVersion: '2.200.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'saas-on-aws-cdk',
  projenrcTs: true,
  repositoryUrl: 'szukalski.github.com:szukalski/saas-on-aws-cdk',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();