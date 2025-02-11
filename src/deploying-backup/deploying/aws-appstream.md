## AWS AppStream 2.0

Turbo supports deploying applications to [Amazon AppStream 2.0](https://aws.amazon.com/appstream2/). AppStream 2.0 provides cloud-based Windows desktops hosted in the AWS cloud.

AppStream 2.0 offers two deployment models: **Always-On/On-Demand** and **Elastic** fleets.

With Always-On and On-Demand fleets, one creates a golden image that includes the Turbo client configured as you would any other VDI environment. In this case, Turbo allows applications to be dynamically deployed without modifications to the base image.

With Elastic fleets, it is necessary to have a way to rapidly provision applications on the clean base image provided by AWS as well as run applications that may not originally be designed for portable use or for execution in the specific Windows environment provided by AWS. Turbo containers address all of these issues in a single, efficient solution.

### Before Starting

Before starting the AppStream 2.0 setup, please note the following information:

* URL of the Turbo Hub Server
* API Key to access the Hub Server

The API key can be generated from the Turbo Server administration console under **Hub** / **API Keys**. Press **Add Key** and enter a key name such as ``aws-appstream``. Leave the **Run as system** option unselected.

It is strongly recommended that a dedicated API key be used for the AppStream 2.0 fleet.

For the best performance, it is recommended that the Hub Server run in the same AWS Availability Zone as the AppStream 2.0 fleet. This also minimizes costs associated with data transfer. If necessary, the AWS Hub instance can federate respositories from an external Turbo Hub such as an on-premises Hub.

### AppStream 2.0 Setup

Turbo AppStream 2.0 setup consists of:

1. Configuring an AppStream 2.0 Stack and Fleet
2. Setting up the Turbo App Block
3. Adding applications

#### Stack and Fleet Setup
Prior to configuring Turbo in AppStream, it is necessary to create an AppStream 2.0 **Stack** and **Fleet**. These provide the computate infrastructure that will run applications.

Instructions on configuration can be found in the AWS AppStream 2.0 documentation:

[Create an AppStream 2.0 Fleet and Stack](https://docs.aws.amazon.com/appstream2/latest/developerguide/set-up-stacks-fleets.html)

AppStream 2.0 includes the ability to use **Elastic Fleets** which are a very cost effective way to launch and stream Turbo applications to end users. Since elastic fleet VMs are provisioned from a ready-to-use pool of instances, provisioning is fast, yet customers are only charged for actual time used, exclusive of "standby" time. 

#### App Block
An AppStream **App Block** provides shared setup for a set of AppStream applications. When using Turbo to deploy on AppStream, a single App Block is used to deploy the Turbo Client, which can then run any Turbo-packaged application.

For convenience, the Turbo Client is available in VHD form from the Turbo Downloads page:

[Turbo Client Downloads](https://turbo.net/download)

A setup script is provided that handles mounting of the VHD and setup of the Turbo Client. The setup script is available in the Turbo GitHub repository: 

[Turbo VHD Setup Script](https://github.com/turboapps/aws/blob/main/setup-turbo-client.ps1)

The setup script accepts a single parameter indicating the Hub server to be used.

The Turbo Client VHD and setup script must be copied into an S3 bucket in the same zone as the AppStream 2.0 fleet. AppStream 2.0 must also have permissions to access the S3 bucket.

For more information on S3 bucket configuration, see the document:

[Store Application Icon, Setup Script, and VHD in S3 Bucket](https://docs.aws.amazon.com/appstream2/latest/developerguide/store-s3-bucket.html)

The following App Block settings should be used:

| Field      | Value      |
| ---------- | ---------- |
| Name        | turbo-client       |
| VHD Object  | Select ``turbo-client.vhd`` from S3       |
| Setup script object      | Select ``setup-turbo-client.ps1`` from S3  | 
| Setup script executable       | ``C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe``       |
| Setup script executable arguments       | ``C:\AppStream\AppBlocks\turbo-client\setup-turbo-client.ps1 https://your.hub.url``       |

### Adding Applications

Once the App Block is configured, any Turbo application can be launched within the AppStream 2.0 interface.

Prior to adding the application, the application icon should be added to the connected S3 bucket.

The following Application settings should be used:

| Field      | Value     |
| ---------- | ---------- |
| Application icon object       | Select ``app-icon.png`` from S3       |
| Application executable launch path       | ``c:\program files (x86)\turbo\cmd\turboplay.exe``       |
| Application launch parameters       | ``turbo run appspec --api-key=abcd1234-abcd1234``       |
| App block | Select App Block created above |

Note that each application must be associated to a fleet before the application will be available.

### Launching Applications
To test applications, select the applicable AppStream 2.0 Stack and press **Action** / **Create Streaming URL**. This creates a one-time URL that will launch AppStream as the specified user.
