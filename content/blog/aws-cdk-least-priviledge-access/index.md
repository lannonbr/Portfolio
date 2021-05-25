---
title: 'Least-priviledge access for AWS Resources using AWS CDK'
date: '2021-05-24'
description: 'How to secure permissions quickly in AWS CDK Stacks with least-priviledge access'
status: fully-grown
---

When setting up access to resources on your AWS account for other portions of an AWS application, there is a variety of methods to do such. At the most extreme, admin / root accounts can create a personal access token which allows it to do almost anything with AWS. The issue with such is if that token gets in the wrong hands, a malicious actor could modify any existing resoures or spin up any type of resource and run up your monthly bill. To mitigate this, AWS suggest as on their best practices guide on the AWS IAM docs to [Grant least priviledge](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege). By doing this, it can prevent security breaches for your AWS account and make sure that applications have only access to what they need and nothing more. Doing this with IAM in the web console can be a bit complex, but with AWS CDK, it can be done solely with a single function call.

## Scenario: Lambda read-only access to DynamoDB table

For an example, let's set up a CDK stack that creates a function that can read from a DynamoDB table as well as an IAM user with token access to the same table.

```js highlight={33,45}
const cdk = require('@aws-cdk/core')
const dynamo = require('@aws-cdk/aws-dynamodb')
const lambda = require('@aws-cdk/aws-lambda')
const iam = require('@aws-cdk/aws-iam')

class SampleCDKStack extends cdk.stack {
  constructor(app, id) {
    super(app, id)

    // Create the table
    const database = new dynamo.Table(this, 'dynamoTable', {
      tableName: 'dynamoTable',
      partitionKey: {
        name: 'timestamp',
        type: dynamo.AttributeType.NUMBER,
      },
      billingMode: dynamo.BillingMode.PAY_PER_REQUEST,
    })

    // Create the function
    const readFn = new lambda.Function(this, 'read-function', {
      code: new lambda.AssetCode('functionLocation'),
      functionName: `read-function`,
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.seconds(10),
      environment: {
        DYNAMO_TABLE_NAME: database.tableName,
      },
    })

    // Give read access to function
    database.grantReadData(saveFn)

    // Create the IAM user
    const user = new iam.User(this, 'readTableUser', {
      userName: 'read-table-user',
    })

    const accessKey = new iam.CfnAccessKey(this, 'readTableTOken', {
      userName: user.userName,
    })

    // Give read access to IAM user
    database.grantReadData(user)

    new cdk.CfnOutput(this, 'accessToken', { value: accessKey.ref })
    new cdk.CfnOutput(this, 'secretAccessToken', {
      value: accessKey.attrSecretAccessKey,
    })
  }
}
```

Twice in this file we call `database.grantReadData()` which sets up IAM roles for CDK to generate when the app is deployed. This gives solely read-only access to the table and nothing else. If the access tokens for the IAM user were to be exposed, they would have no access to your general AWS account, they can't create any new resources, and they can't delete any data from that table. On top of this, with some CloudWatch alerts, you coud setup alerts to check for excessive read counts on the particular table so you could be notified if the token may have been leaked.

Finally, given everything is managed by CDK, rather than needing to delete the table, function, IAM roles, and IAM user, a single `cdk destroy` call will clear out all of the various resources (Other than the Dynamo table which by default will persist the data when the stack is torn down).
