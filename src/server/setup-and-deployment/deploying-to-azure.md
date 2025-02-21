# Deploying to Azure

In addition to on-premises deployment, a preconfigured Turbo Server instance can be deployed via the Turbo Server Azure Marketplace Image (AMI). The Turbo Server AMI has multiple plans which are preconfigured with the following components:

- Hub and Portal
- Hub, Portal, and Application
- Application

Users will need the following to deploy the Turbo Server AMI:

- Azure subscription
- Purchased or trial Turbo Server license

The following network ports are open by default once the Turbo Server AMI is deployed. These can be adjusted as necessary via the Azure Portal when the deployment is complete.

- 3389: RDP
- 80: HTTP
- 443: HTTPS

Note: While there are no extra charges to deploy the Turbo Server AMI, the Azure subscription will still be charged for any usage.

## Hub and Portal Role Deployment

To deploy a Turbo Server AMI that includes the hub and portal roles go to [portal.azure.com](https://portal.azure.com "Azure Portal"), click **Create a resource**, search for "Turbo Server", select a desired plan which includes the hub and portal roles, and click **Create**.

The following information is required to deploy Turbo Server AMIs prior to version 21.7:

- **Resource group:** New resource group to deploy the AMI
- **Region:** Azure region to deploy the AMI
- **Virtual machine name:** Hostname of the VM
- **Administrative username and password:** Local administrative account on the VM
- **Database username and password:** SQL account that will be used to access the SQL databases
- **DNS prefix:** Prefix of the DNS record automatically created during deployment
- **Turbo Server license:** Valid Turbo Server license to apply during deployment of the AMI

The following additional information is required if deploying version 21.7+ of the Turbo Server AMIs:

- **Turbo Server administrative username and password:** Administrative account for the Turbo Server instance
- **Database username and password:** SQL account that will be used to create and access the Azure SQL databases

Note: The virtual machine size can be altered prior to deployment. On the **Virtual Machine Settings** tab click **Change size** to select a different virtual machine size.

Click **Create** when all the required information is added to the deployment and the review step passes validation.

It takes about 10 minutes to complete the deployment. When it is complete, go to the administrative URL of the deployed Turbo Server AMI. This is the **DNS name** from the **Overview** page of the deployed Turbo Server AMI VM in the Azure Portal.

### Configure administrative user

Note: This step is not needed if deploying version 21.7+ of the Turbo Server AMIs.

The Turbo Server instance is deployed without an administrative account. To setup an administrative account go to the administrative URL of the deployed Turbo Server AMI. This is the **DNS name** from the **Overview** page of the deployed Turbo Server AMI VM in the Azure Portal.

To get to the administrative portal add "/admin" to the URL.

From the administrative portal go to **Users**.

![users-page](/images/users-page.png)

Select "administrator", add a new password, and click **Save**.

![administrator-account](/images/administrator-account.png)

Next step is to add the "administrator" user to the **Server Administrators** group. This will grant Turbo Server administrative permissions to the "administrator" user. From the administrative portal go to **Users**.

![users-page](/images/users-page.png)

Open the **Server Administrators** group, click **Add Members**, select the "administrator" account, and click **Save** twice.

![add-admin-serveradmins-group](/images/add-admin-serveradmins-group.png)

This will add the administrator user to the **Server Administrators** group. This will also cause the Turbo Server Service to restart to complete the changes. Once the restart is complete you will be redirected to the sign-in page. Sign-in with the "administrator" user to verify access.

![signin-page](/images/signin-page.png)

The required post deployment steps for the hub and portal roles are complete if the sign-in was successful. However, for security reasons, it is strongly recommended to switch the portal to HTTPS. Please check the [Managing a Server](/server/administration/domain.html#managing-a-server) section to setup HTTPS.

## App Role Deployment

To deploy a Turbo Server App AMI go to [portal.azure.com](https://portal.azure.com "Azure Portal"), click **Create a resource**, search for "Turbo Server", select the App plan, and click **Create**.

Note: An existing Turbo Server AMI with the Hub and Portal roles is required to deploy the App role AMI.

The following information is required to deploy Turbo Server App AMI prior to version 21.7:

- **Resource group:** New resource group to deploy the AMI
- **Region:** Azure region to deploy the AMI. It is required to deploy to the same region as the existing Hub and Portal VM.
- **Virtual machine name:** Hostname of the VM
- **Administrative username and password:** Local administrative account on the VM
- **Hub server address:** Internal hostname or IP address of the Hub and Portal AMI the App AMI will be attached to
- **Database username and password:** Existing SQL account from the Hub and Portal AMI the App AMI will be attached to
- **Turbo Server license:** Valid Turbo Server license to apply during deployment of the AMI

The following additional information is required if deploying version 21.7+ of the Turbo Server App AMI:

- **Azure SQL Private Endpoint URL:** Private endpoint URL for the Azure SQL instance created for the Hub and Portal AMI. To find this URL go to the resource group of the Hub and Portal AMI, open the **Private endpoint** resource and click **DNS configuration**. The required URL is the FQDN listed under **config1**. It will look similiar to **random-string.privatelink.database.windows.net**
- **Database username and password:** SQL account that will be used to create and access the Azure SQL databases

The same virtual network and subnet for the Hub and Portal AMI is required on the App AMI. This is the **Virtual network/subnet** from the **Overview page** of the deployed Hub and Portal AMI VM in the Azure Portal. Apply the same virtual network and subnet to the App AMI on the **Virtual Machine Settings** tab.

Note: The virtual machine size can be altered prior to deployment. On the **Virtual Machine Settings** tab click **Change size** to select a different virtual machine size.

Click **Create** when all the required information is added to the deployment and the review step passes validation.

Additional configuration steps to setup Turbo Server:

- Add applications to the [Hub](/server/administration/hub)
- Configure [Users, Directory Services, and Groups](/server/administration/users)
- Configure [Workspaces](/server/administration/workspaces)
