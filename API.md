# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultiTenantPreTokenGeneration <a name="MultiTenantPreTokenGeneration" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration"></a>

#### Initializers <a name="Initializers" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer"></a>

```typescript
import { MultiTenantPreTokenGeneration } from 'saas-on-aws-cdk'

new MultiTenantPreTokenGeneration(scope: Construct, id: string, props: MultiTenantPreTokenGenerationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.props">props</a></code> | <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGenerationProps">MultiTenantPreTokenGenerationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.Initializer.parameter.props"></a>

- *Type:* <a href="#saas-on-aws-cdk.MultiTenantPreTokenGenerationProps">MultiTenantPreTokenGenerationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.isConstruct"></a>

```typescript
import { MultiTenantPreTokenGeneration } from 'saas-on-aws-cdk'

MultiTenantPreTokenGeneration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGeneration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="saas-on-aws-cdk.MultiTenantPreTokenGeneration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### MultiTenantTableV2 <a name="MultiTenantTableV2" id="saas-on-aws-cdk.MultiTenantTableV2"></a>

#### Initializers <a name="Initializers" id="saas-on-aws-cdk.MultiTenantTableV2.Initializer"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

new MultiTenantTableV2(scope: Construct, id: string, props?: TablePropsV2)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_dynamodb.TablePropsV2</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.TablePropsV2

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy associated with this file system. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grant">grant</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantFullAccess">grantFullAccess</a></code> | Permits an IAM principal to all DynamoDB operations ('dynamodb:*') on this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantReadData">grantReadData</a></code> | Permits an IAM principal all data read operations on this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantReadWriteData">grantReadWriteData</a></code> | Permits an IAM principal to all data read/write operations on this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantStream">grantStream</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantStreamRead">grantStreamRead</a></code> | Adds an IAM policy statement associated with this table to an IAM principal's policy. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantTableListStreams">grantTableListStreams</a></code> | Permits an IAM principal to list streams attached to this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantWriteData">grantWriteData</a></code> | Permits an IAM principal all data write operations on this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metric">metric</a></code> | Return the given named metric for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricConditionalCheckFailedRequests">metricConditionalCheckFailedRequests</a></code> | Metric for the conditional check failed requests for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricConsumedReadCapacityUnits">metricConsumedReadCapacityUnits</a></code> | Metric for the consumed read capacity units for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricConsumedWriteCapacityUnits">metricConsumedWriteCapacityUnits</a></code> | Metric for the consumed write capacity units for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricSuccessfulRequestLatency">metricSuccessfulRequestLatency</a></code> | Metric for the successful request latency for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrors">metricSystemErrors</a></code> | Metric for the system errors this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrorsForOperations">metricSystemErrorsForOperations</a></code> | Metric for the system errors for this table. This will sum errors across all possible operations. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequests">metricThrottledRequests</a></code> | How many requests are throttled on this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperation">metricThrottledRequestsForOperation</a></code> | How many requests are throttled on this table for the given operation. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperations">metricThrottledRequestsForOperations</a></code> | How many requests are throttled on this table. This will sum errors across all possible operations. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.metricUserErrors">metricUserErrors</a></code> | Metric for the user errors for this table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.addGlobalSecondaryIndex">addGlobalSecondaryIndex</a></code> | Add a global secondary index to the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.addLocalSecondaryIndex">addLocalSecondaryIndex</a></code> | Add a local secondary index to the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.addReplica">addReplica</a></code> | Add a replica table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.replica">replica</a></code> | Retrieve a replica table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantTenantRead">grantTenantRead</a></code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.grantTenantWrite">grantTenantWrite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="saas-on-aws-cdk.MultiTenantTableV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="saas-on-aws-cdk.MultiTenantTableV2.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="saas-on-aws-cdk.MultiTenantTableV2.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="saas-on-aws-cdk.MultiTenantTableV2.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(statement: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy associated with this file system.

A resource policy will be automatically created upon the first call to `addToResourcePolicy`.

Note that this does not work with imported file systems.

###### `statement`<sup>Required</sup> <a name="statement" id="saas-on-aws-cdk.MultiTenantTableV2.addToResourcePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The policy statement to add.

---

##### `grant` <a name="grant" id="saas-on-aws-cdk.MultiTenantTableV2.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="saas-on-aws-cdk.MultiTenantTableV2.grant.parameter.actions"></a>

- *Type:* ...string[]

the set of actions to allow (i.e., 'dynamodb:PutItem', 'dynamodb:GetItem', etc.).

---

##### `grantFullAccess` <a name="grantFullAccess" id="saas-on-aws-cdk.MultiTenantTableV2.grantFullAccess"></a>

```typescript
public grantFullAccess(grantee: IGrantable): Grant
```

Permits an IAM principal to all DynamoDB operations ('dynamodb:*') on this table.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantFullAccess.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantReadData` <a name="grantReadData" id="saas-on-aws-cdk.MultiTenantTableV2.grantReadData"></a>

```typescript
public grantReadData(grantee: IGrantable): Grant
```

Permits an IAM principal all data read operations on this table.

Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantReadData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantReadWriteData` <a name="grantReadWriteData" id="saas-on-aws-cdk.MultiTenantTableV2.grantReadWriteData"></a>

```typescript
public grantReadWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal to all data read/write operations on this table.

Actions: BatchGetItem, GetRecords, GetShardIterator, Query, GetItem, Scan, BatchWriteItem, PutItem, UpdateItem,
DeleteItem, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantReadWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantStream` <a name="grantStream" id="saas-on-aws-cdk.MultiTenantTableV2.grantStream"></a>

```typescript
public grantStream(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Note: If `encryptionKey` is present, appropriate grants to the key needs to be added
separately using the `table.encryptionKey.grant*` methods.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantStream.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal (no-op if undefined).

---

###### `actions`<sup>Required</sup> <a name="actions" id="saas-on-aws-cdk.MultiTenantTableV2.grantStream.parameter.actions"></a>

- *Type:* ...string[]

the set of actions to allow (i.e., 'dynamodb:DescribeStream', 'dynamodb:GetRecords', etc.).

---

##### `grantStreamRead` <a name="grantStreamRead" id="saas-on-aws-cdk.MultiTenantTableV2.grantStreamRead"></a>

```typescript
public grantStreamRead(grantee: IGrantable): Grant
```

Adds an IAM policy statement associated with this table to an IAM principal's policy.

Actions: DescribeStream, GetRecords, GetShardIterator, ListStreams.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantStreamRead.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantTableListStreams` <a name="grantTableListStreams" id="saas-on-aws-cdk.MultiTenantTableV2.grantTableListStreams"></a>

```typescript
public grantTableListStreams(grantee: IGrantable): Grant
```

Permits an IAM principal to list streams attached to this table.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantTableListStreams.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `grantWriteData` <a name="grantWriteData" id="saas-on-aws-cdk.MultiTenantTableV2.grantWriteData"></a>

```typescript
public grantWriteData(grantee: IGrantable): Grant
```

Permits an IAM principal all data write operations on this table.

Actions: BatchWriteItem, PutItem, UpdateItem, DeleteItem, DescribeTable.

Note: Appropriate grants will also be added to the customer-managed KMS keys associated with this
table if one was configured.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantTableV2.grantWriteData.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

the principal to grant access to.

---

##### `metric` <a name="metric" id="saas-on-aws-cdk.MultiTenantTableV2.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `metricName`<sup>Required</sup> <a name="metricName" id="saas-on-aws-cdk.MultiTenantTableV2.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConditionalCheckFailedRequests` <a name="metricConditionalCheckFailedRequests" id="saas-on-aws-cdk.MultiTenantTableV2.metricConditionalCheckFailedRequests"></a>

```typescript
public metricConditionalCheckFailedRequests(props?: MetricOptions): Metric
```

Metric for the conditional check failed requests for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricConditionalCheckFailedRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedReadCapacityUnits` <a name="metricConsumedReadCapacityUnits" id="saas-on-aws-cdk.MultiTenantTableV2.metricConsumedReadCapacityUnits"></a>

```typescript
public metricConsumedReadCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed read capacity units for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricConsumedReadCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricConsumedWriteCapacityUnits` <a name="metricConsumedWriteCapacityUnits" id="saas-on-aws-cdk.MultiTenantTableV2.metricConsumedWriteCapacityUnits"></a>

```typescript
public metricConsumedWriteCapacityUnits(props?: MetricOptions): Metric
```

Metric for the consumed write capacity units for this table.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricConsumedWriteCapacityUnits.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSuccessfulRequestLatency` <a name="metricSuccessfulRequestLatency" id="saas-on-aws-cdk.MultiTenantTableV2.metricSuccessfulRequestLatency"></a>

```typescript
public metricSuccessfulRequestLatency(props?: MetricOptions): Metric
```

Metric for the successful request latency for this table.

By default, the metric will be calculated as an average over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricSuccessfulRequestLatency.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### ~~`metricSystemErrors`~~ <a name="metricSystemErrors" id="saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrors"></a>

```typescript
public metricSystemErrors(props?: MetricOptions): Metric
```

Metric for the system errors this table.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSystemErrorsForOperations` <a name="metricSystemErrorsForOperations" id="saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrorsForOperations"></a>

```typescript
public metricSystemErrorsForOperations(props?: SystemErrorsForOperationsMetricOptions): IMetric
```

Metric for the system errors for this table. This will sum errors across all possible operations.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricSystemErrorsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.SystemErrorsForOperationsMetricOptions

---

##### ~~`metricThrottledRequests`~~ <a name="metricThrottledRequests" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequests"></a>

```typescript
public metricThrottledRequests(props?: MetricOptions): Metric
```

How many requests are throttled on this table.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequests.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottledRequestsForOperation` <a name="metricThrottledRequestsForOperation" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperation"></a>

```typescript
public metricThrottledRequestsForOperation(operation: string, props?: OperationsMetricOptions): IMetric
```

How many requests are throttled on this table for the given operation.

By default, the metric will be calculated as an average over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `operation`<sup>Required</sup> <a name="operation" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperation.parameter.operation"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperation.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.OperationsMetricOptions

---

##### `metricThrottledRequestsForOperations` <a name="metricThrottledRequestsForOperations" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperations"></a>

```typescript
public metricThrottledRequestsForOperations(props?: OperationsMetricOptions): IMetric
```

How many requests are throttled on this table. This will sum errors across all possible operations.

By default, each individual metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricThrottledRequestsForOperations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.OperationsMetricOptions

---

##### `metricUserErrors` <a name="metricUserErrors" id="saas-on-aws-cdk.MultiTenantTableV2.metricUserErrors"></a>

```typescript
public metricUserErrors(props?: MetricOptions): Metric
```

Metric for the user errors for this table.

Note: This metric reports user errors across all the tables in the account and region the table
resides in.

By default, the metric will be calculated as a sum over a period of 5 minutes.
You can customize this by using the `statistic` and `period` properties.

###### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.metricUserErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addGlobalSecondaryIndex` <a name="addGlobalSecondaryIndex" id="saas-on-aws-cdk.MultiTenantTableV2.addGlobalSecondaryIndex"></a>

```typescript
public addGlobalSecondaryIndex(props: GlobalSecondaryIndexPropsV2): void
```

Add a global secondary index to the table.

Note: Global secondary indexes will be inherited by all replica tables.

###### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.addGlobalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.GlobalSecondaryIndexPropsV2

the properties of the global secondary index.

---

##### `addLocalSecondaryIndex` <a name="addLocalSecondaryIndex" id="saas-on-aws-cdk.MultiTenantTableV2.addLocalSecondaryIndex"></a>

```typescript
public addLocalSecondaryIndex(props: LocalSecondaryIndexProps): void
```

Add a local secondary index to the table.

Note: Local secondary indexes will be inherited by all replica tables.

###### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.addLocalSecondaryIndex.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.LocalSecondaryIndexProps

the properties of the local secondary index.

---

##### `addReplica` <a name="addReplica" id="saas-on-aws-cdk.MultiTenantTableV2.addReplica"></a>

```typescript
public addReplica(props: ReplicaTableProps): void
```

Add a replica table.

Note: Adding a replica table will allow you to use your table as a global table.

###### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantTableV2.addReplica.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.ReplicaTableProps

the properties of the replica table to add.

---

##### `replica` <a name="replica" id="saas-on-aws-cdk.MultiTenantTableV2.replica"></a>

```typescript
public replica(region: string): ITableV2
```

Retrieve a replica table.

Note: Replica tables are not supported in a region agnostic stack.

###### `region`<sup>Required</sup> <a name="region" id="saas-on-aws-cdk.MultiTenantTableV2.replica.parameter.region"></a>

- *Type:* string

the region of the replica table.

---

##### `grantTenantRead` <a name="grantTenantRead" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantRead"></a>

```typescript
public grantTenantRead(role: Role, prefix?: string): void
```

###### `role`<sup>Required</sup> <a name="role" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantRead.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantRead.parameter.prefix"></a>

- *Type:* string

---

##### `grantTenantWrite` <a name="grantTenantWrite" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantWrite"></a>

```typescript
public grantTenantWrite(role: Role, prefix?: string): void
```

###### `role`<sup>Required</sup> <a name="role" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantWrite.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.Role

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="saas-on-aws-cdk.MultiTenantTableV2.grantTenantWrite.parameter.prefix"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.fromTableArn">fromTableArn</a></code> | Creates a Table construct that represents an external table via table ARN. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.fromTableAttributes">fromTableAttributes</a></code> | Creates a Table construct that represents an external table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.fromTableName">fromTableName</a></code> | Creates a Table construct that represents an external table via table name. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="saas-on-aws-cdk.MultiTenantTableV2.isConstruct"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="saas-on-aws-cdk.MultiTenantTableV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="saas-on-aws-cdk.MultiTenantTableV2.isOwnedResource"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.MultiTenantTableV2.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="saas-on-aws-cdk.MultiTenantTableV2.isResource"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.MultiTenantTableV2.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromTableArn` <a name="fromTableArn" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableArn"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.fromTableArn(scope: Construct, id: string, tableArn: string)
```

Creates a Table construct that represents an external table via table ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableArn.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableArn.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `tableArn`<sup>Required</sup> <a name="tableArn" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableArn.parameter.tableArn"></a>

- *Type:* string

the table's ARN.

---

##### `fromTableAttributes` <a name="fromTableAttributes" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableAttributes"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.fromTableAttributes(scope: Construct, id: string, attrs: TableAttributesV2)
```

Creates a Table construct that represents an external table.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableAttributes.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_dynamodb.TableAttributesV2

attributes of the table.

---

##### `fromTableName` <a name="fromTableName" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableName"></a>

```typescript
import { MultiTenantTableV2 } from 'saas-on-aws-cdk'

MultiTenantTableV2.fromTableName(scope: Construct, id: string, tableName: string)
```

Creates a Table construct that represents an external table via table name.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableName.parameter.scope"></a>

- *Type:* constructs.Construct

the parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableName.parameter.id"></a>

- *Type:* string

the construct's name.

---

###### `tableName`<sup>Required</sup> <a name="tableName" id="saas-on-aws-cdk.MultiTenantTableV2.fromTableName.parameter.tableName"></a>

- *Type:* string

the table's name.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.tableArn">tableArn</a></code> | <code>string</code> | The ARN of the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.tableName">tableName</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption key for the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.tableStreamArn">tableStreamArn</a></code> | <code>string</code> | The stream ARN of the table. |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.resourcePolicy">resourcePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The resource policy for the table. |

---

##### `node`<sup>Required</sup> <a name="node" id="saas-on-aws-cdk.MultiTenantTableV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="saas-on-aws-cdk.MultiTenantTableV2.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="saas-on-aws-cdk.MultiTenantTableV2.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="saas-on-aws-cdk.MultiTenantTableV2.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

The ARN of the table.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="saas-on-aws-cdk.MultiTenantTableV2.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the table.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="saas-on-aws-cdk.MultiTenantTableV2.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS encryption key for the table.

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="saas-on-aws-cdk.MultiTenantTableV2.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table.

---

##### `tableStreamArn`<sup>Optional</sup> <a name="tableStreamArn" id="saas-on-aws-cdk.MultiTenantTableV2.property.tableStreamArn"></a>

```typescript
public readonly tableStreamArn: string;
```

- *Type:* string

The stream ARN of the table.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="saas-on-aws-cdk.MultiTenantTableV2.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The resource policy for the table.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantTableV2.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="saas-on-aws-cdk.MultiTenantTableV2.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### MultiTenantUserPool <a name="MultiTenantUserPool" id="saas-on-aws-cdk.MultiTenantUserPool"></a>

#### Initializers <a name="Initializers" id="saas-on-aws-cdk.MultiTenantUserPool.Initializer"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

new MultiTenantUserPool(scope: Construct, id: string, props?: UserPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_cognito.UserPoolProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="saas-on-aws-cdk.MultiTenantUserPool.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addClient">addClient</a></code> | Add a new app client to this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addDomain">addDomain</a></code> | Associate a domain to this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addGroup">addGroup</a></code> | Add a new group to this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addResourceServer">addResourceServer</a></code> | Add a new resource server to this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addTrigger">addTrigger</a></code> | Add a lambda trigger to a user pool operation. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.grant">grant</a></code> | Adds an IAM policy statement associated with this user pool to an IAM principal's policy. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.registerIdentityProvider">registerIdentityProvider</a></code> | Register an identity provider with this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addMultiTenantClient">addMultiTenantClient</a></code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.addOidcProvider">addOidcProvider</a></code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.getOidcPrincipal">getOidcPrincipal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="saas-on-aws-cdk.MultiTenantUserPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="saas-on-aws-cdk.MultiTenantUserPool.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="saas-on-aws-cdk.MultiTenantUserPool.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClient` <a name="addClient" id="saas-on-aws-cdk.MultiTenantUserPool.addClient"></a>

```typescript
public addClient(id: string, options?: UserPoolClientOptions): UserPoolClient
```

Add a new app client to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.addClient.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="saas-on-aws-cdk.MultiTenantUserPool.addClient.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolClientOptions

---

##### `addDomain` <a name="addDomain" id="saas-on-aws-cdk.MultiTenantUserPool.addDomain"></a>

```typescript
public addDomain(id: string, options: UserPoolDomainOptions): UserPoolDomain
```

Associate a domain to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.addDomain.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="saas-on-aws-cdk.MultiTenantUserPool.addDomain.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolDomainOptions

---

##### `addGroup` <a name="addGroup" id="saas-on-aws-cdk.MultiTenantUserPool.addGroup"></a>

```typescript
public addGroup(id: string, options: UserPoolGroupOptions): UserPoolGroup
```

Add a new group to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.addGroup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="saas-on-aws-cdk.MultiTenantUserPool.addGroup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolGroupOptions

---

##### `addResourceServer` <a name="addResourceServer" id="saas-on-aws-cdk.MultiTenantUserPool.addResourceServer"></a>

```typescript
public addResourceServer(id: string, options: UserPoolResourceServerOptions): UserPoolResourceServer
```

Add a new resource server to this user pool.

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.addResourceServer.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="saas-on-aws-cdk.MultiTenantUserPool.addResourceServer.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolResourceServerOptions

---

##### `addTrigger` <a name="addTrigger" id="saas-on-aws-cdk.MultiTenantUserPool.addTrigger"></a>

```typescript
public addTrigger(operation: UserPoolOperation, fn: IFunction, lambdaVersion?: LambdaVersion): void
```

Add a lambda trigger to a user pool operation.

> [https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html)

###### `operation`<sup>Required</sup> <a name="operation" id="saas-on-aws-cdk.MultiTenantUserPool.addTrigger.parameter.operation"></a>

- *Type:* aws-cdk-lib.aws_cognito.UserPoolOperation

---

###### `fn`<sup>Required</sup> <a name="fn" id="saas-on-aws-cdk.MultiTenantUserPool.addTrigger.parameter.fn"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

###### `lambdaVersion`<sup>Optional</sup> <a name="lambdaVersion" id="saas-on-aws-cdk.MultiTenantUserPool.addTrigger.parameter.lambdaVersion"></a>

- *Type:* aws-cdk-lib.aws_cognito.LambdaVersion

---

##### `grant` <a name="grant" id="saas-on-aws-cdk.MultiTenantUserPool.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: ...string[]): Grant
```

Adds an IAM policy statement associated with this user pool to an IAM principal's policy.

###### `grantee`<sup>Required</sup> <a name="grantee" id="saas-on-aws-cdk.MultiTenantUserPool.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="saas-on-aws-cdk.MultiTenantUserPool.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `registerIdentityProvider` <a name="registerIdentityProvider" id="saas-on-aws-cdk.MultiTenantUserPool.registerIdentityProvider"></a>

```typescript
public registerIdentityProvider(provider: IUserPoolIdentityProvider): void
```

Register an identity provider with this user pool.

###### `provider`<sup>Required</sup> <a name="provider" id="saas-on-aws-cdk.MultiTenantUserPool.registerIdentityProvider.parameter.provider"></a>

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolIdentityProvider

---

##### `addMultiTenantClient` <a name="addMultiTenantClient" id="saas-on-aws-cdk.MultiTenantUserPool.addMultiTenantClient"></a>

```typescript
public addMultiTenantClient(): UserPoolClient
```

##### `addOidcProvider` <a name="addOidcProvider" id="saas-on-aws-cdk.MultiTenantUserPool.addOidcProvider"></a>

```typescript
public addOidcProvider(oidcEndpoint: string, userPoolClientId: string): OpenIdConnectProvider
```

###### `oidcEndpoint`<sup>Required</sup> <a name="oidcEndpoint" id="saas-on-aws-cdk.MultiTenantUserPool.addOidcProvider.parameter.oidcEndpoint"></a>

- *Type:* string

---

###### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="saas-on-aws-cdk.MultiTenantUserPool.addOidcProvider.parameter.userPoolClientId"></a>

- *Type:* string

---

##### `getOidcPrincipal` <a name="getOidcPrincipal" id="saas-on-aws-cdk.MultiTenantUserPool.getOidcPrincipal"></a>

```typescript
public getOidcPrincipal(oidcProvider: OpenIdConnectProvider, userPoolClientId: string): PrincipalBase
```

###### `oidcProvider`<sup>Required</sup> <a name="oidcProvider" id="saas-on-aws-cdk.MultiTenantUserPool.getOidcPrincipal.parameter.oidcProvider"></a>

- *Type:* aws-cdk-lib.aws_iam.OpenIdConnectProvider

---

###### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="saas-on-aws-cdk.MultiTenantUserPool.getOidcPrincipal.parameter.userPoolClientId"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolArn">fromUserPoolArn</a></code> | Import an existing user pool based on its ARN. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolId">fromUserPoolId</a></code> | Import an existing user pool based on its id. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="saas-on-aws-cdk.MultiTenantUserPool.isConstruct"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

MultiTenantUserPool.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="saas-on-aws-cdk.MultiTenantUserPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="saas-on-aws-cdk.MultiTenantUserPool.isOwnedResource"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

MultiTenantUserPool.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.MultiTenantUserPool.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="saas-on-aws-cdk.MultiTenantUserPool.isResource"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

MultiTenantUserPool.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="saas-on-aws-cdk.MultiTenantUserPool.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromUserPoolArn` <a name="fromUserPoolArn" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolArn"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

MultiTenantUserPool.fromUserPoolArn(scope: Construct, id: string, userPoolArn: string)
```

Import an existing user pool based on its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolArn.parameter.id"></a>

- *Type:* string

---

###### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolArn.parameter.userPoolArn"></a>

- *Type:* string

---

##### `fromUserPoolId` <a name="fromUserPoolId" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolId"></a>

```typescript
import { MultiTenantUserPool } from 'saas-on-aws-cdk'

MultiTenantUserPool.fromUserPoolId(scope: Construct, id: string, userPoolId: string)
```

Import an existing user pool based on its id.

###### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolId.parameter.id"></a>

- *Type:* string

---

###### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="saas-on-aws-cdk.MultiTenantUserPool.fromUserPoolId.parameter.userPoolId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.identityProviders">identityProviders</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPoolIdentityProvider[]</code> | Get all identity providers registered with this user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | The ARN of the user pool. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.userPoolId">userPoolId</a></code> | <code>string</code> | The physical ID of this user pool resource. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.userPoolProviderName">userPoolProviderName</a></code> | <code>string</code> | User pool provider name. |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.userPoolProviderUrl">userPoolProviderUrl</a></code> | <code>string</code> | User pool provider URL. |

---

##### `node`<sup>Required</sup> <a name="node" id="saas-on-aws-cdk.MultiTenantUserPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="saas-on-aws-cdk.MultiTenantUserPool.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="saas-on-aws-cdk.MultiTenantUserPool.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="saas-on-aws-cdk.MultiTenantUserPool.property.identityProviders"></a>

```typescript
public readonly identityProviders: IUserPoolIdentityProvider[];
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPoolIdentityProvider[]

Get all identity providers registered with this user pool.

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="saas-on-aws-cdk.MultiTenantUserPool.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

The ARN of the user pool.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="saas-on-aws-cdk.MultiTenantUserPool.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The physical ID of this user pool resource.

---

##### `userPoolProviderName`<sup>Required</sup> <a name="userPoolProviderName" id="saas-on-aws-cdk.MultiTenantUserPool.property.userPoolProviderName"></a>

```typescript
public readonly userPoolProviderName: string;
```

- *Type:* string

User pool provider name.

---

##### `userPoolProviderUrl`<sup>Required</sup> <a name="userPoolProviderUrl" id="saas-on-aws-cdk.MultiTenantUserPool.property.userPoolProviderUrl"></a>

```typescript
public readonly userPoolProviderUrl: string;
```

- *Type:* string

User pool provider URL.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantUserPool.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="saas-on-aws-cdk.MultiTenantUserPool.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

### ServiceServer <a name="ServiceServer" id="saas-on-aws-cdk.ServiceServer"></a>

#### Initializers <a name="Initializers" id="saas-on-aws-cdk.ServiceServer.Initializer"></a>

```typescript
import { ServiceServer } from 'saas-on-aws-cdk'

new ServiceServer(scope: Construct, id: string, props: ServiceServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.ServiceServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.ServiceServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.ServiceServer.Initializer.parameter.props">props</a></code> | <code><a href="#saas-on-aws-cdk.ServiceServerProps">ServiceServerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="saas-on-aws-cdk.ServiceServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="saas-on-aws-cdk.ServiceServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="saas-on-aws-cdk.ServiceServer.Initializer.parameter.props"></a>

- *Type:* <a href="#saas-on-aws-cdk.ServiceServerProps">ServiceServerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.ServiceServer.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="saas-on-aws-cdk.ServiceServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#saas-on-aws-cdk.ServiceServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="saas-on-aws-cdk.ServiceServer.isConstruct"></a>

```typescript
import { ServiceServer } from 'saas-on-aws-cdk'

ServiceServer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="saas-on-aws-cdk.ServiceServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.ServiceServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#saas-on-aws-cdk.ServiceServer.property.api">api</a></code> | <code>aws-cdk-lib.aws_apigateway.SpecRestApi</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.ServiceServer.property.lambda">lambda</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="saas-on-aws-cdk.ServiceServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `api`<sup>Required</sup> <a name="api" id="saas-on-aws-cdk.ServiceServer.property.api"></a>

```typescript
public readonly api: SpecRestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.SpecRestApi

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="saas-on-aws-cdk.ServiceServer.property.lambda"></a>

```typescript
public readonly lambda: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


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

## Structs <a name="Structs" id="Structs"></a>

### AwsCredentialIdentity <a name="AwsCredentialIdentity" id="saas-on-aws-cdk.AwsCredentialIdentity"></a>

AWS credential identity interface compatible with Smithy types.

#### Initializer <a name="Initializer" id="saas-on-aws-cdk.AwsCredentialIdentity.Initializer"></a>

```typescript
import { AwsCredentialIdentity } from 'saas-on-aws-cdk'

const awsCredentialIdentity: AwsCredentialIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | AWS access key ID. |
| <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | AWS secret access key. |
| <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity.property.credentialScope">credentialScope</a></code> | <code>string</code> | Credential provider name (optional). |
| <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity.property.expiration">expiration</a></code> | <code>Date</code> | Credential expiration time (optional). |
| <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity.property.sessionToken">sessionToken</a></code> | <code>string</code> | AWS session token (optional). |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="saas-on-aws-cdk.AwsCredentialIdentity.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

AWS access key ID.

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="saas-on-aws-cdk.AwsCredentialIdentity.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

AWS secret access key.

---

##### `credentialScope`<sup>Optional</sup> <a name="credentialScope" id="saas-on-aws-cdk.AwsCredentialIdentity.property.credentialScope"></a>

```typescript
public readonly credentialScope: string;
```

- *Type:* string

Credential provider name (optional).

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="saas-on-aws-cdk.AwsCredentialIdentity.property.expiration"></a>

```typescript
public readonly expiration: Date;
```

- *Type:* Date

Credential expiration time (optional).

---

##### `sessionToken`<sup>Optional</sup> <a name="sessionToken" id="saas-on-aws-cdk.AwsCredentialIdentity.property.sessionToken"></a>

```typescript
public readonly sessionToken: string;
```

- *Type:* string

AWS session token (optional).

---

### MultiTenantPreTokenGenerationProps <a name="MultiTenantPreTokenGenerationProps" id="saas-on-aws-cdk.MultiTenantPreTokenGenerationProps"></a>

#### Initializer <a name="Initializer" id="saas-on-aws-cdk.MultiTenantPreTokenGenerationProps.Initializer"></a>

```typescript
import { MultiTenantPreTokenGenerationProps } from 'saas-on-aws-cdk'

const multiTenantPreTokenGenerationProps: MultiTenantPreTokenGenerationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGenerationProps.property.domainPrefix">domainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.MultiTenantPreTokenGenerationProps.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.UserPool</code> | *No description.* |

---

##### `domainPrefix`<sup>Required</sup> <a name="domainPrefix" id="saas-on-aws-cdk.MultiTenantPreTokenGenerationProps.property.domainPrefix"></a>

```typescript
public readonly domainPrefix: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="saas-on-aws-cdk.MultiTenantPreTokenGenerationProps.property.userPool"></a>

```typescript
public readonly userPool: UserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPool

---

### ServiceServerProps <a name="ServiceServerProps" id="saas-on-aws-cdk.ServiceServerProps"></a>

#### Initializer <a name="Initializer" id="saas-on-aws-cdk.ServiceServerProps.Initializer"></a>

```typescript
import { ServiceServerProps } from 'saas-on-aws-cdk'

const serviceServerProps: ServiceServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.ServiceServerProps.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.ServiceServerProps.property.nodejsFunctionProps">nodejsFunctionProps</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunctionProps</code> | *No description.* |
| <code><a href="#saas-on-aws-cdk.ServiceServerProps.property.specRestApiProps">specRestApiProps</a></code> | <code>aws-cdk-lib.aws_apigateway.SpecRestApiProps</code> | *No description.* |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="saas-on-aws-cdk.ServiceServerProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `nodejsFunctionProps`<sup>Optional</sup> <a name="nodejsFunctionProps" id="saas-on-aws-cdk.ServiceServerProps.property.nodejsFunctionProps"></a>

```typescript
public readonly nodejsFunctionProps: NodejsFunctionProps;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunctionProps

---

##### `specRestApiProps`<sup>Optional</sup> <a name="specRestApiProps" id="saas-on-aws-cdk.ServiceServerProps.property.specRestApiProps"></a>

```typescript
public readonly specRestApiProps: SpecRestApiProps;
```

- *Type:* aws-cdk-lib.aws_apigateway.SpecRestApiProps

---

### SmithyContext <a name="SmithyContext" id="saas-on-aws-cdk.SmithyContext"></a>

#### Initializer <a name="Initializer" id="saas-on-aws-cdk.SmithyContext.Initializer"></a>

```typescript
import { SmithyContext } from 'saas-on-aws-cdk'

const smithyContext: SmithyContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#saas-on-aws-cdk.SmithyContext.property.credentials">credentials</a></code> | <code><a href="#saas-on-aws-cdk.AwsCredentialIdentity">AwsCredentialIdentity</a></code> | *No description.* |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="saas-on-aws-cdk.SmithyContext.property.credentials"></a>

```typescript
public readonly credentials: AwsCredentialIdentity;
```

- *Type:* <a href="#saas-on-aws-cdk.AwsCredentialIdentity">AwsCredentialIdentity</a>

---



