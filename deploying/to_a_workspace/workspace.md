## To a Workspace

Student Digitial Workspace (or SDW) is a platform which allows schools and universities to publish their application portfolio and let students run the applications on their own devices (Windows, MacOS, Android, iOS). 

### Architecture Overview

Each student authenticates using his/her school account and accesses the application workspace:

![](/docs/deploying/to_a_workspace/workspace1.png)

Each workspace contains a set of applications chosen explicitly for a given course. The application launches after a click on its icon. There are three ways how the application could be run:

* **Cloud (Browser)** - Runs on the cloud machine (Compute Pod) and the application window renders in a new tab in the browser.
* **Cloud (Windowed)** - Runs on the cloud machine (Compute Pod) but the application executes outside the browser, in a fashion similar to a native application.
* **My Machine** - Runs on the student machine inside the Turbo VM.

The Windowed and My Machine modes require Turbo Client to be installed on the student’s device.

When an application launches, Portal initiates the session and handles the connection to either Turbo Launcher or Cloud Controller. Turbo Launcher is a part of the Turbo Client installation and is responsible for controlling the native and windowed launch. Cloud Controller handles the remote sessions and initiates the connection between Compute Pod and the user machine. Currently, Portal is hosted on a server located in the US and owned by Turbo. However, it will be soon possible to publish it in the client location as well.

#### Components Description

The following diagram gives an overview of the components that build SDW:

![](/docs/deploying/to_a_workspace/workspace2.png)

**Compute Pods** are Windows Virtual Machines which run user applications (or rather application images). **Elastic Cloud Controller** (or Cloud Controller) is composed of several applications and scripts, which are responsible for managing connections with Compute Pods, as well as administering Compute Pods themselves (scaling them out/in depending on the current load, installing updates, or collecting performance metrics). **Hub** is the central place for application images. Finally, **Portal** authenticates users, keeps information about their profiles, and allows users to interact with the workspaces.

#### Azure Resources

The lists below describe resources required to host SDW in Azure in a recommended configuration. We can add additional components to the base configuration if needed. Example of such a situation could be adding an NV6 Compute Pod for engineering applications.

##### VMs

* Central Cache Server (one instance): Standard DS2 v2 (2 cores 7GB RAM)
* Compute Pod (one or more instances): Standard D3 v2 (4 cores 14 GB RAM)
* Elastic Cloud Controller (one instance): Basic A3 (4 cores 7GB RAM)

##### Storage

* Each Compute Pod: 128GB Standard_LRS system disk
* Elastic Cloud Controller: 32GB Standard_LRS system disk
* Central Cache Server: 128GB Standard_LRS system disk + 256GB or 512GB Premium_LRS data disk

##### Network

* Elastic Cloud Controller: one fixed public IP
* Each Compute Pod: one fixed public IP
* One Virtual Network with one or more subnets (possible to set up a Site2Site connection)

The ArmViz diagram shows a minimal SDW deployment:

![](/docs/deploying/to_a_workspace/workspace3.png)

#### Deployment Plan

We deploy SDW in the following steps:

1. Create Portal and school profile on Turbo central servers [4h]
2. Add DNS addresses to point to the new servers (the convention is to use the school name and then .start.turbo.net) [<0.5h]
3. Prepare the Azure account settings (subscriptions with all the required Resource Providers, Service Principal account, Resource Group(s) for stage and prod) [2h]
4. Prepare infrastructure configuration files [1h]
5. Run the deployment on stage and production. The whole deployment for one environment takes about 2h, but usually, there are some problems in Azure, which will make it longer (3-4h / per environment)
6. When the infrastructure is ready, we can access Portal and run some sample apps. Moreover, it’s time to customize the workspace and add app images. In this step, we also start preparing custom images which the school requested.

As you can see, the deployment should be finished within one day. Starting from this point students will be able to access the workspaces and run the applications.

### Requirements

This section lists all the requirements needed to deploy the Student Digital Workspace in Azure successfully. For simplicity’s sake, let’s assume that we are configuring a production environment for a Demo University (unidemo). The university homepage is https://unidemo.edu and Portal will be available at the https://unidemo.start.turbo.net address. Students and staff members authenticate through Azure AD.

#### Azure Subscription

The subscription on which we deploy SDW needs to have the following Resource Providers registered:

* Microsoft.Compute
* Microsoft.Network
* Microsoft.OperationalInsights
* Microsoft.ResourceHealth
* Microsoft.Storage
* Microsoft.Security
* Microsoft.Authorization
* Microsoft.Resources
* Microsoft.Features

Please also check the “Usage + quotas” settings for your subscription, and make sure the
quotas are higher or equal to the minimum values presented below:
* Total Regional vCPUs: 14
* Basic A Family vCPUs: 4
* Standard Dv2 Family vCPUs: 8
* Standard DSv2 Family vCPUs: 2
* Virtual Machines: 4

#### Azure Resource Group

We recommend creating a separate Resource Group (for example turbo-unidemo-prod) for the SDW deployment. It makes it easier to manage resources and avoids risks of interference between SDW elements and your current configuration.

#### Azure Service Principal Account

The Service Principal account is the account we will use to run the deployment. You may register it in the portal or use Azure CLI. Please write down and share with Turbo the following data:

* the subscription id
* the resource group name
* the Azure AD domain name
* the Service Principal client id
* the Service Principal secret

Finally, we need to give the Service Principal permissions to modify the Azure resources. The quickest solution is to assign a Contributor role to the whole turbo-unidemo-prod Resource Group to the Service Principal. To use a more limited set of permissions you can add a unique role in the Azure AD. For this purpose, you need to create a turbo-customrole.json file with the following JSON data (replace <subscription-id> and <resourcegroup-name> with data taken from your subscription):

```
{
 "Name": "Turbo Custom Role",
 "Id": "9d2ba02b-2dc7-462f-9607-003f18b786ae",
 "IsCustom": true,
 "Description": "Custom role with permissions required for Turbo.net
deployment",
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
 "/subscriptions/<subscription-id>/resourceGroups/<turbo-resource-groupname>"
 ]
}
```

Create the role in Azure and assign it to the Service Principal:

```
az role definition create --role-definition /mnt/d/temp/sp-permissions/turbocustom-role.json
az role assignment create --assignee unidemo-sp --role "Turbo Custom Role"
```

#### Certificate for HTTPS Connections

If you would like to use your own certificates to configure HTTPS on the .start.turbo.net domain, please request them before starting the deployment. You may later save them in the Azure Key Vault and give read access to the Service Principal account. Another option is to use the **Let’s Encrypt** certificate. In this scenario, the configuration script will prepare all the necessary files.

#### User Authentication

##### Using Azure AD

If users should authenticate against the university Azure AD, you need to register a new application in the Azure AD and set its Home Page URL and Reply URL to addresses provided by Turbo (for example, for unidemo the Home Page URL would be https://unidemo.start.turbo.net and the Reply URL: https://unidemo.start.turbo.net/auth/openid/return). Although it is possible to use the Service Principal account for authentication, we recommend creating a separate application with permissions only to authenticate users against Azure AD. You will also need to generate a secret for the application. Later, provide the application client_id and secret to Turbo so we could update the authentication settings in the Portal.

If you plan to use Azure AD groups to customize the workspaces, make sure the newly created application has the permission to read the Active Directory data (Microsoft Graph > Read directory data).

#### Using ADFS

On the ADFS server open the ADFS management window and go to Trust Relationships > Relying Party Trusts settings. Then right-click on the Relying Party Trusts and add a new Relying Party:

![](/docs/deploying/to_a_workspace/workspace4.png)

In the Wizard choose **Enter data about the relying party manually** setting and click **Next**.

![](/docs/deploying/to_a_workspace/workspace5.png)

Fill the Display Name with a meaningful name, for instance, ‘Turbo Portal’, and click **Next**.

Later, choose **AD FS profile** as we will be using SAML tokens to authenticate and click **Next**.

Leave the token encryption certificate data empty and click **Next**.

![](/docs/deploying/to_a_workspace/workspace6.png)

Set the service URLs for WS-Federation and SAML 2.0 to the value provided by us and click *Next**.

![](/docs/deploying/to_a_workspace/workspace7.png)

Use the same URL as the relying party trust identifier, click **Add** and then **Next**.

Click **Next** through the rest of the wizard and **Close** at the end.

The **Edit Claim Rules for Turbo Portal** window should appear. We need to add two claim rules to pass the user’s name and AD groups to the Turbo Portal.

Click on the **Add Rule...** button, choose the **Send LDAP Attributes as Claims** option, and click **Next**. Fill the Claim Rule dialog as on the image below and click **Finish**.

![](/docs/deploying/to_a_workspace/workspace8.png)