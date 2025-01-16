## Turbo Studio in Azure

A preconfigured application capture environment can be deployed to Azure via the Turbo Studio Azure Marketplace Image (AMI). A Turbo Studio AMI deployed instance has Turbo Studio and Turbo Client preinstalled on a clean machine to allow for accurate application captures whether the Setup Capture or Snapshot method is used.

Users will need the following to deploy the Turbo Server AMI:

- Azure subscription
- Feee Turbo.net account

The Remote Desktop Protocol (port 3389) is open by default once the Turbo Studio AMI is deployed. 

Note: While there are no extra charges to deploy the Turbo Studio AMI, the Azure subscription will still be charged for any usage.

#### Deployment

To deploy the Turbo Studio AMI go to [portal.azure.com](https://portal.azure.com "Azure Portal"), click **Create a resource**, search for "Turbo Studio", select the desired plan, and click **Create**.

The following information will be needed to deploy the Turbo Studio AMI:

- **Resource group**: Resource group to deploy the AMI
- **Region**: Azure region to deploy the AMI
- **Virtual Machine Name**: Hostname of the VM
- **Username and password**: Local administrative account on the VM

Click **Create** when all the required information is added to the deployment and the review step passes validation.

When the deployment completes, open a Remote Desktop Protocol (RDP) conection top the VM using the **Public IP address** from the **Overview** page of the deployed Turbo Studio AMI VM in the Azure Portal.

The deployed Turbo Studio AMI can now be used to capture applications using the [Setup Capture](https://app.turbo.net/docs/studio/working-with-turbo-studio/setup-capture "Setup Capture") or [Snapshot](https://app.turbo.net/docs/studio/working-with-turbo-studio/snapshots "Snapshot") methods.
