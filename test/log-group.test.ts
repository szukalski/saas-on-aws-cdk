import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { SoaLogGroup } from '../src';

describe('SoaLogGroup', () => {
  test('creates log group with default properties', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    new SoaLogGroup(stack, 'TestLogGroup');

    // THEN
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Logs::LogGroup', {
      RetentionInDays: RetentionDays.ONE_DAY,
    });
  });

  test('allows overriding default properties', () => {
    // GIVEN
    const app = new App();
    const stack = new Stack(app, 'TestStack');

    // WHEN
    new SoaLogGroup(stack, 'TestLogGroup', {
      retention: RetentionDays.ONE_WEEK,
      logGroupName: 'custom-log-group-name',
    });

    // THEN
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Logs::LogGroup', {
      RetentionInDays: RetentionDays.ONE_WEEK,
      LogGroupName: 'custom-log-group-name',
    });
  });
});
