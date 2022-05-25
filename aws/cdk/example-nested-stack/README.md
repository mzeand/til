# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


# Notes


```
$ aws-vault exec me -- cdk bootstrap

:
2:33:14 | CREATE_FAILED        | AWS::IAM::Role        | ImagePublishingRole
The security token included in the request is invalid (Service: AmazonIdentityManagement; Status Cod
e: 403; Error Code: InvalidClientTokenId; Request ID: a4f46e98-260b-4608-96cc-49697159d99d; Proxy: n
ull)
:

```
