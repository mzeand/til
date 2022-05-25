import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class RootStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    cdk.Tags.of(this).add("Environment", "example", { priority: 300 })
    cdk.Tags.of(this).add("Project", "cdk-study", { priority: 300 })
    cdk.Tags.of(this).add("Title", "nested-stack", { priority: 300 })
    
    // 👇 grab the VPC from the nested stack
    const {vpc} = new VpcNestedStack(this, 'nested-stack');

    const webserverSG = new ec2.SecurityGroup(this, 'webserver-sg', {
      vpc,
    });

    webserverSG.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(80),
      'allow HTTP traffic from anywhere',
    );

    const ec2Instance = new ec2.Instance(this, 'ec2-instance', {
      // 👇 use the VPC from the nested stack
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      securityGroup: webserverSG,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE2,
        ec2.InstanceSize.MICRO,
      ),
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2022,
      }),
    });

    ec2Instance.addUserData(
      'sudo su',
      'yum install -y httpd',
      'systemctl start httpd',
      'systemctl enable httpd',
      'echo "<h1>It works :)</h1>" > /var/www/html/index.html',
    );
  }
}

class VpcNestedStack extends cdk.NestedStack {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    cdk.Tags.of(this).add("Nest", "vpc")

    this.vpc = new ec2.Vpc(this, 'nested-stack-vpc', {
      cidr: '10.0.0.0/16',
      natGateways: 0,
      maxAzs: 1,
      subnetConfiguration: [
        {
          name: 'public-subnet-1',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        // 👇 added isolated subnet group
        {
          name: 'isolated-subnet-1',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });
  }
}
