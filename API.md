# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SoaLogGroup <a name="SoaLogGroup" id="saas-on-aws-cdk.SoaLogGroup"></a>

#### Initializers <a name="Initializers" id="saas-on-aws-cdk.SoaLogGroup.Initializer"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

new SoaLogGroup(scope: Construct, id: string, props?: LogGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_logs.LogGroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.LogGroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.addMetricFilter">addMetricFilter</a></code> | Create a new Metric Filter on this Log Group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.addStream">addStream</a></code> | Create a new Log Stream for this Log Group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.addSubscriptionFilter">addSubscriptionFilter</a></code> | Create a new Subscription Filter on this Log Group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.extractMetric">extractMetric</a></code> | Extract a metric from structured log events in the LogGroup. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.grant">grant</a></code> | Give the indicated permissions on this log group and all streams. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.grantRead">grantRead</a></code> | Give permissions to read and filter events from this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.grantWrite">grantWrite</a></code> | Give permissions to create and write to streams in this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.logGroupPhysicalName">logGroupPhysicalName</a></code> | Public method to get the physical name of this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.metric">metric</a></code> | Creates a CloudWatch metric for this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.metricIncomingBytes">metricIncomingBytes</a></code> | Creates a CloudWatch metric for the volume of incoming log data in bytes to this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.metricIncomingLogEvents">metricIncomingLogEvents</a></code> | Creates a CloudWatch metric for the number of incoming log events to this log group. |

---

##### `toString` <a name="toString" id="saas-on-aws-cdk.SoaLogGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="saas-on-aws-cdk.SoaLogGroup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="saas-on-aws-cdk.SoaLogGroup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addMetricFilter` <a name="addMetricFilter" id="saas-on-aws-cdk.SoaLogGroup.addMetricFilter"></a>

```typescript
public addMetricFilter(id: string, props: MetricFilterOptions): MetricFilter
```

Create a new Metric Filter on this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.addMetricFilter.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.addMetricFilter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.MetricFilterOptions

Properties for creating the MetricFilter.

---

##### `addStream` <a name="addStream" id="saas-on-aws-cdk.SoaLogGroup.addStream"></a>

```typescript
public addStream(id: string, props?: StreamOptions): LogStream
```

Create a new Log Stream for this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.addStream.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.addStream.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.StreamOptions

Properties for creating the LogStream.

---

##### `addSubscriptionFilter` <a name="addSubscriptionFilter" id="saas-on-aws-cdk.SoaLogGroup.addSubscriptionFilter"></a>

```typescript
public addSubscriptionFilter(id: string, props: SubscriptionFilterOptions): SubscriptionFilter
```

Create a new Subscription Filter on this Log Group.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.addSubscriptionFilter.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in its parent.

---

###### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.addSubscriptionFilter.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_logs.SubscriptionFilterOptions

Properties for creating the SubscriptionFilter.

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="saas-on-aws-cdk.SoaLogGroup.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy associated with this log group.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Any ARN Principals inside of the statement will be converted into AWS Account ID strings
because CloudWatch Logs Resource Policies do not accept ARN principals.

###### `statement`<sup>Required</sup> <a name="statement" id="saas-on-aws-cdk.SoaLogGroup.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The policy statement to add.

---

##### `extractMetric` <a name="extractMetric" id="saas-on-aws-cdk.SoaLogGroup.extractMetric"></a>

```typescript
public extractMetric(jsonField: string, metricNamespace: string, metricName: string): Metric
```

Extract a metric from structured log events in the LogGroup.

Creates a MetricFilter on this LogGroup that will extract the value
of the indicated JSON field in all records where it occurs.

The metric will be available in CloudWatch Metrics under the
indicated namespace and name.

###### `jsonField`<sup>Required</sup> <a name="jsonField" id="saas-on-aws-cdk.SoaLogGroup.extractMetric.parameter.jsonField"></a>

- *Type:* string

JSON field to extract (example: '$.myfield').

---

###### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="saas-on-aws-cdk.SoaLogGroup.extractMetric.parameter.metricNamespace"></a>

- *Type:* string

Namespace to emit the metric under.

---

###### `metricName`<sup>Required</sup> <a name="metricName" id="saas-on-aws-cdk.SoaLogGroup.extractMetric.parameter.metricName"></a>

- *Type:* string

Name to emit the metric under.

---

##### `grant` <a name="grant" id="saas-on-aws-cdk.SoaLogGroup.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Give the indicated permissions on this log group and all streams.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.SoaLogGroup.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="saas-on-aws-cdk.SoaLogGroup.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantRead` <a name="grantRead" id="saas-on-aws-cdk.SoaLogGroup.grantRead"></a>

```typescript
public grantRead(grantee: IGrantable): Grant
```

Give permissions to read and filter events from this log group.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.SoaLogGroup.grantRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWrite` <a name="grantWrite" id="saas-on-aws-cdk.SoaLogGroup.grantWrite"></a>

```typescript
public grantWrite(grantee: IGrantable): Grant
```

Give permissions to create and write to streams in this log group.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.SoaLogGroup.grantWrite.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `logGroupPhysicalName` <a name="logGroupPhysicalName" id="saas-on-aws-cdk.SoaLogGroup.logGroupPhysicalName"></a>

```typescript
public logGroupPhysicalName(): string
```

Public method to get the physical name of this log group.

##### `metric` <a name="metric" id="saas-on-aws-cdk.SoaLogGroup.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Creates a CloudWatch metric for this log group.

###### `metricName`<sup>Required</sup> <a name="metricName" id="saas-on-aws-cdk.SoaLogGroup.metric.parameter.metricName"></a>

- *Type:* string

The name of the metric to create.

---

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Additional properties to configure the metric.

---

##### `metricIncomingBytes` <a name="metricIncomingBytes" id="saas-on-aws-cdk.SoaLogGroup.metricIncomingBytes"></a>

```typescript
public metricIncomingBytes(props?: MetricOptions): Metric
```

Creates a CloudWatch metric for the volume of incoming log data in bytes to this log group.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.metricIncomingBytes.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Configuration options for the metric.

---

##### `metricIncomingLogEvents` <a name="metricIncomingLogEvents" id="saas-on-aws-cdk.SoaLogGroup.metricIncomingLogEvents"></a>

```typescript
public metricIncomingLogEvents(props?: MetricOptions): Metric
```

Creates a CloudWatch metric for the number of incoming log events to this log group.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.SoaLogGroup.metricIncomingLogEvents.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

Optional.

Configuration options for the metric.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.fromLogGroupArn">fromLogGroupArn</a></code> | Import an existing LogGroup given its ARN. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.fromLogGroupName">fromLogGroupName</a></code> | Import an existing LogGroup given its name. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="saas-on-aws-cdk.SoaLogGroup.isConstruct"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

SoaLogGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="saas-on-aws-cdk.SoaLogGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="saas-on-aws-cdk.SoaLogGroup.isOwnedResource"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

SoaLogGroup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.SoaLogGroup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="saas-on-aws-cdk.SoaLogGroup.isResource"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

SoaLogGroup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.SoaLogGroup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLogGroupArn` <a name="fromLogGroupArn" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupArn"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

SoaLogGroup.fromLogGroupArn(scope: Construct, id: string, logGroupArn: string)
```

Import an existing LogGroup given its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupArn.parameter.id"></a>

- *Type:* string

---

###### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupArn.parameter.logGroupArn"></a>

- *Type:* string

---

##### `fromLogGroupName` <a name="fromLogGroupName" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupName"></a>

```typescript
import { SoaLogGroup } from 'saas-on-aws-cdk'

SoaLogGroup.fromLogGroupName(scope: Construct, id: string, logGroupName: string)
```

Import an existing LogGroup given its name.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupName.parameter.id"></a>

- *Type:* string

---

###### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="saas-on-aws-cdk.SoaLogGroup.fromLogGroupName.parameter.logGroupName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | The ARN of this log group. |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name of this log group. |

---

##### `node`<sup>Required</sup> <a name="node" id="saas-on-aws-cdk.SoaLogGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="saas-on-aws-cdk.SoaLogGroup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="saas-on-aws-cdk.SoaLogGroup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="saas-on-aws-cdk.SoaLogGroup.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

The ARN of this log group.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="saas-on-aws-cdk.SoaLogGroup.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The name of this log group.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.SoaLogGroup.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="saas-on-aws-cdk.SoaLogGroup.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---




