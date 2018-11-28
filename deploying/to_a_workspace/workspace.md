
## To a Workspace

Student Digitial Workspace (or SDW) is a platform which allows schools and universities to publish their application portfolio and let students run the applications on their own devices (Windows, MacOS, Android, iOS). 

### Architecture Overview

Each student authenticates using his/her school account and accesses the application workspace:

![Digital workspace for the Demo University](/docs/deploying/to_a_workspace/dashboard.png)

Each workspace contains a set of applications chosen explicitly for a given course. The application launches after a click on its icon. There are three ways how the application could be run:

- **Cloud (Browser)** - runs on the cloud machine (Compute Pod) and the application window renders in a new tab in the browser
- **Cloud (Windowed)** - runs on the cloud machine (Compute Pod) but the application executes outside the browser, in a fashion similar to a native application
- **My Machine** - runs on the student machine inside the Turbo VM

The Windowed and My Machine modes require Turbo Client to be installed on the student's device.

When an application launches, Portal initiates the session and handles the connection to either Turbo Launcher or Cloud Controller. Turbo Launcher is a part of the Turbo Client installation and is responsible for controlling the native and windowed launch. Cloud Controller handles the remote sessions and initiates the connection between Compute Pod and the user machine. Currently, Portal is hosted on a server located in the US and owned by Turbo. However, it will be soon possible to publish it in the client location as well.

#### Components Description

The following diagram gives an overview of the components that build SDW:

![Components diagram](/docs/deploying/to_a_workspace/architecture-diagram.png)

**Compute Pods** are Windows Virtual Machines which run user applications (or rather application images). **Elastic Cloud Controller** (or Cloud Controller) is composed of several applications and scripts, which are responsible for managing connections with Compute Pods, as well as administering Compute Pods themselves (scaling them out/in depending on the current load, installing updates, or collecting performance metrics). **Hub** is the central place for application images. Finally, **Portal** authenticates users, keeps information about their profiles, and allows users to interact with the workspaces.

#### Azure Resources

The lists below describe resources required to host SDW in Azure in a recommended configuration. We can add additional components to the base configuration if needed. Example of such a situation could be adding an NV6 Compute Pod for engineering applications.

**VMs**:

- Central Cache Server (one instance): Standard DS2 v2 (2 cores 7GB RAM)
- Compute Pod (one or more instances):  Standard D3 v2 (4 cores 14 GB RAM)
- Elastic Cloud Controller (one instance): Basic A3 (4 cores 7GB RAM)

**Storage**:

- Each Compute Pod: 128GB Standard_LRS system disk
- Elastic Cloud Controller: 32GB Standard_LRS system disk
- Central Cache Server: 128GB Standard_LRS system disk + 256GB or 512GB Premium_LRS data disk

**Network**:

- Elastic Cloud Controller: one fixed public IP
- Each Compute Pod: one fixed public IP
- One Virtual Network with one or more subnets (possible to set up a Site2Site connection)

The ArmViz diagram shows a minimal SDW deployment:

![ArmViz diagram of a minimal SDW with information about IPs and NSGs](/docs/deploying/to_a_workspace/armviz-architecture-diagram-with-ips-nsg.png)

#### Deployment Plan

We deploy SDW in the following steps:

1. Create Portal and school profile on Turbo central servers [4h]
2. Add DNS addresses to point to the new servers (the convention is to use the school name and then .start.turbo.net) [<0.5h]
3. Prepare the Azure account settings (subscriptions with all the required Resource Providers, Service Principal account, Resource Group(s) for stage and prod) [2h]
4. Prepare infrastructure configuration files [1h]
5.  Run the deployment on stage and production. The whole deployment for one environment takes about 2h, but usually, there are some problems in Azure, which will make it longer (3-4h / per environment)
6.  When the infrastructure is ready, we can access Portal and run some sample apps. Moreover, it’s time to customize the workspace and add app images. In this step, we also start preparing custom images which the school requested.

As you can see, the deployment should be finished within one day. Starting from this point students will be able to access the workspaces and run the applications.

### Requirements

This section lists all the requirements needed to deploy the Student Digital Workspace in Azure successfully. For simplicity's sake, let's assume that we are configuring a production environment for a Demo University (unidemo). The university homepage is https://unidemo.edu and Portal will be available at the https://unidemo.start.turbo.net address. Students and staff members authenticate through Azure AD.

#### Azure Subscription

The subscription on which we deploy SDW needs to have the following [Resource Providers](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services) registered:

- Microsoft.Compute
- Microsoft.Network
- Microsoft.OperationalInsights
- Microsoft.ResourceHealth
- Microsoft.Storage
- Microsoft.Security
- Microsoft.Authorization
- Microsoft.Resources
- Microsoft.Features

Please also check the "Usage + quotas" settings for your subscription, and make sure the quotas are higher or equal to the minimum values presented below:

- Total Regional vCPUs: 14
- Basic A Family vCPUs: 4
- Standard Dv2 Family vCPUs: 8
- Standard DSv2 Family vCPUs: 2
- Virtual Machines: 4

#### Azure Resource Group

We recommend creating a separate Resource Group (for example turbo-unidemo-prod) for the SDW deployment. It makes it easier to manage resources and avoids risks of interference between SDW elements and your current configuration. 

#### Azure Service Principal Account

The Service Principal account is the account we will use to run the deployment. You may [register it in the portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal) or use [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest). Please write down and share with Turbo the following data:

- the subscription id
- the resource group name
- the Azure AD domain name
- the Service Principal client id
- the Service Principal secret

Finally, we need to give the Service Principal permissions to modify the Azure resources. The quickest solution is to assign a Contributor role to the whole turbo-unidemo-prod Resource Group to the Service Principal. To use a more limited set of permissions you can add a unique role in the Azure AD. For this purpose, you need to create a turbo-custom-role.json file with the following JSON data (replace `<subscription-id>` and `<resource-group-name>` with data taken from your subscription):

```json
{
  "Name": "Turbo Custom Role",
  "Id": "9d2ba02b-2dc7-462f-9607-003f18b786ae",
  "IsCustom": true,
  "Description": "Custom role with permissions required for Turbo.net deployment",
  "Actions": [
    "Microsoft.Authorization/*/read",
    "Microsoft.Compute/locations/*",
    "Microsoft.Compute/virtualMachines/*",
    "Microsoft.Compute/disks/*",
    "Microsoft.Compute/images/*",
    "Microsoft.Insights/alertRules/*",
    "Microsoft.Insights/diagnosticSettings/*",
    "Microsoft.Network/*",
    "Microsoft.ResourceHealth/availabilityStatuses/read",
    "Microsoft.Storage/storageAccounts/*",
    "Microsoft.Resources/deployments/*",
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Resources/subscriptions/resourcegroups/write"
  ],
  "NotActions": [
  ],
  "AssignableScopes": [
    "/subscriptions/<subscription-id>/resourceGroups/<turbo-resource-group-name>"
  ]
}
```

Create the role in Azure and assign it to the Service Principal: 

```bash
az role definition create --role-definition /mnt/d/temp/sp-permissions/turbo-custom-role.json

az role assignment create --assignee unidemo-sp --role "Turbo Custom Role"
```

#### Certificate for HTTPS Connections 

If you would like to use your **own certificates to configure HTTPS** on the .start.turbo.net domain, please request them before starting the deployment. You may later save them in the Azure Key Vault and give read access to the Service Principal account.

Another option is to use the [**Let's Encrypt**](https://letsencrypt.org/) certificate. In this scenario, the configuration script will prepare all the necessary files.

#### Test Account in the Client's Domain

It is not obligatory but will help a lot if we have a test account in the client's domain. With it, we will be able to test the portal authentication and make sure everything works correctly. 

### User Authentication

#### Using Azure AD

If users should authenticate against the university Azure AD, you need to register a new application in the Azure AD and set its Home Page URL and Reply URL to addresses provided by Turbo (for example, for unidemo the Home Page URL would be https://unidemo.start.turbo.net and the Reply URL: https://unidemo.start.turbo.net/auth/openid/return). Although it is possible to use the Service Principal account for authentication, we recommend creating a separate application with permissions only to authenticate users against Azure AD. You will also need to generate a secret for the application. Later, provide the application client\_id, secret, and App ID URI to Turbo so we could update the authentication settings in the Portal.

If you plan to use Azure AD groups to customize the workspaces, make sure the newly created application has the permission to read the Active Directory data (Microsoft Graph > Read directory data).

Next to the "web app/API" application we also need a native application to make the native clients work. It will be bound to the "web app/API" application.  Steps to register it are as follows:

1. Click on "App registrations" and choose "New application registration".
2. Enter a friendly name for the application, for example "Turbo.net-Client", and select "Native" as the Application Type. Set the RedirectURI to the same address as the Reply URL in the web app (for example: https://unidemo.start.turbo.net/auth/openid/return). Click on "Create" to create the application.
3. In the succeeding page, find the "Application ID" value and share it with Turbo
4. Next, we’ll need to configure the permissions of this new application.  
  a. Click "Setting" and choose the "Required permissions" section
  b. Click on "Add", then "Select an API", and type in the textbox the name of your "web app / api" app that we’re linking to and hit enter.  Select the app from the results and click the "Select" button.
  c. Click on "Select Permissions" and select the "Access [name of app]" permission. Click the "Select" button again to close this screen.  Click on Done to finish adding the permission.

#### Using ADFS

This paragraph lists the step required to configure SDW authentication against your ADFS server.

On the ADFS server open the ADFS management window and go to **Trust Relationships** > **Relying Party Trusts** settings. Then right-click on the **Relying Party Trusts** and add a new Relying Party:

![](/docs/deploying/to_a_workspace/adfs-add-rp.png)

In the Wizard choose **Enter data about the relying party manually** setting and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-manual.png)

Fill the Display Name with a meaningful name, for instance, 'Turbo Portal', and click **Next**.

Later, choose **AD FS profile** as we will be using SAML tokens to authenticate and click **Next**.

Leave the token encryption certificate data empty and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-nocert.png)

Set the service URLs for WS-Federation and SAML 2.0 to the value provided by us and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-enable-saml.png)

Use the same URL as the relying party trust identifier, click **Add** and then **Next**.

Click **Next** through the rest of the wizard and **Close** at the end.

The **Edit Claim Rules for Turbo Portal** window should appear. We need to add two claim rules to pass the user's name and AD groups to the Turbo Portal.

Click on the **Add Rule...** button, choose the **Send LDAP Attributes as Claims** option, and click **Next**. Fill the Claim Rule dialog as on the image below and click **Finish**.

![](/docs/deploying/to_a_workspace/adfs-claim-rules.png)

### Managing workspaces and repositories

To manage the workspace, you need to use your personal Turbo account. Make sure that this account has administrative rights in the organization. After signing in to https://turbo.net, click the profile icon (in the right upper corner) and you should see a list of workspaces to which you have access. Your workspace should be there too. After switching to it, you may search for new images and add them to the workspace, or remove the ones that are already there (hover over the image and click on the gear icon).

When you publish a new university app image to the hub, you should use the organization namespace, for example, **turbo push unidemo.edu/myapp:2.0**. Publishing an image under the unidemo.edu namespace makes it accessible only to the @unidemo.edu accounts. As an administrator of the organization, you may configure settings for each image under the unidemo.edu namespace. If you click the gear icon on an image, you may select the "Go to Repository" option:

![](/docs/deploying/to_a_workspace/go-to-repo.png)

On the settings tab, two most important sections are the **Launch Configuration** panel and the **Admin** panel:

![](/docs/deploying/to_a_workspace/admin-settings.png)
 
The **File Isolation** defines the default isolation mode for the image (that’s what we will use to make the native Office365 visible). The **Using** textbox allows you to specify which other images (layers) should turbo import before running the main image (this could be 7zip or/and Adobe Reader, for example). Finally, the **Official** switch makes an image available for the cloud runs, and **Launch Location** configures possible ways of running the image.
