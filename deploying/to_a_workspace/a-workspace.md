
## To a Workspace

Turbo Workspaces allow organizations to publish applications to users from a central portal. Applications can be run from the cloud or on users' own devices. 

### Overview

This section provides an overview of Turbo Workspaces user experience and architecture.

End users can authenticate using Single Sign-On (SSO) over a wide variety of providers, including Azure AD, ADFS, and existing on-premises Active Directory and LDAP providers.

![Turbo Workspace](/docs/deploying/to_a_workspace/dashboard.png)

Each Workspace contains a set of applications determined by administrator-defined entitlements. The application launches after a click on its icon. There are three ways to run an application:

- **Cloud (Browser)**: Runs in the cloud and the application window renders in a new tab in the browser
- **Cloud (Windowed)**: Runs in the cloud with the application rendered in a new window outside the browser, similarly to a native application
- **My Machine**: Runs on the end user device inside a Turbo container

The **Windowed** modes require a Turbo native client on the end user device. The **My Machine** mode is only available on PCs with the Turbo for PC client installed.

When an application launches, the Portal initiates the session and handles the connection to either Turbo Launcher or Elastic Cloud Controller. Turbo Launcher is a part of the Turbo Client installation and is responsible for controlling the native and windowed launch. The Elastic Cloud Controller handles the remote sessions and initiates the connection between Compute Pod and the user machine. 

#### Components Description

The following diagram gives an overview of the components that build DW:

![Components diagram](/docs/deploying/to_a_workspace/architecture-diagram.png)

**Compute Pods** are Windows Virtual Machines which run user applications (or rather application images). **Elastic Cloud Controller** (or Cloud Controller) is composed of several applications and scripts, which are responsible for managing connections with Compute Pods, as well as administering Compute Pods themselves (scaling them out/in depending on the current load, installing updates, or collecting performance metrics). **Hub** is the central place for application images. Finally, **Portal** authenticates users, keeps information about their profiles, and allows users to interact with the workspaces.

#### Azure Resources

The lists below describe resources required to host DW in Azure in a recommended configuration. We can add additional components to the base configuration if needed. Example of such a situation could be adding an NV6 Compute Pod for engineering applications.

Virtual Machines:

- Central Cache Server (one instance): Standard DS2 v2 (2 cores 7GB RAM)
- Compute Pod (one or more instances):  Standard D3 v2 (4 cores 14 GB RAM)
- Elastic Cloud Controller (one instance): Basic A3 (4 cores 7GB RAM)

Storage:

- Each Compute Pod: 128GB Standard_LRS system disk
- Elastic Cloud Controller: 32GB Standard_LRS system disk
- Central Cache Server: 128GB Standard_LRS system disk + 256GB or 512GB Premium_LRS data disk

Network:

- Elastic Cloud Controller: one fixed public IP
- Each Compute Pod: one fixed public IP
- One Virtual Network with one or more subnets (possible to set up a Site2Site connection)

The ArmViz diagram shows a minimal DW deployment:

![ArmViz diagram of a minimal DW with information about IPs and NSGs](/docs/deploying/to_a_workspace/armviz-architecture-diagram-with-ips-nsg.png)

#### Deployment Plan

We deploy DW in the following steps:

1. Create Portal and school profile on Turbo central servers [4h]
2. Add DNS addresses to point to the new servers (the convention is to use the school name and then .start.turbo.net) [<0.5h]
3. Prepare the Azure account settings (subscriptions with all the required Resource Providers, Service Principal account, Resource Group(s) for stage and prod) [2h]
4. Prepare infrastructure configuration files [1h]
5.  Run the deployment on stage and production. The whole deployment for one environment takes about 2h, but usually, there are some problems in Azure, which will make it longer (3-4h / per environment)
6.  When the infrastructure is ready, we can access Portal and run some sample apps. Moreover, it’s time to customize the workspace and add app images. In this step, we also start preparing custom images which the school requested.

As you can see, the deployment should be finished within one day. Starting from this point students will be able to access the workspaces and run the applications.

### Requirements

This section lists all the requirements needed to deploy the Digital Workspace in Azure successfully. For simplicity's sake, let's assume that we are configuring a production environment for a Demo University (unidemo). The university homepage is https://unidemo.edu and Portal will be available at the https://unidemo.start.turbo.net address. Students and staff members authenticate through Azure AD.

#### Azure Subscription

The subscription on which we deploy DW needs to have the following [Resource Providers](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services) registered:

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

We recommend creating a separate Resource Group (for example turbo-unidemo-prod) for the DW deployment. It makes it easier to manage resources and avoids risks of interference between DW elements and your current configuration. 

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

If you would like to use your **own certificates to configure HTTPS** on the `start.turbo.net` domain, please request them before starting the deployment. You may later save them in the Azure Key Vault and give read access to the Service Principal account.

Another option is to use the [**Let's Encrypt**](https://letsencrypt.org/) certificate. In this scenario, the configuration script will prepare all the necessary files.

#### Test Account

While it is not required, we strongly recommend creation of a test account for Turbo support in the client's domain. This account allows Turbo support to assure portal authentication and other integrations are working properly.

### User Authentication

#### Using Azure AD

To enable Single Sign-On authentication with Azure AD, a new application must be registered in Azure AD with an appropriate **Home Page URL** and **Reply URL**. These addresses will be provided by Turbo.

For an org named `unidemo`, the URLs will be of the form:

* Home Page URL: `https://unidemo.start.turbo.net`
* Reply URL: `https://unidemo.start.turbo.net/auth/openid/return`

Although it is possible to use the Service Principal account for authentication, we stongly recommend creation of a separate application with permissions only to authenticate users against Azure AD.

It is also necessary to generate a secret for the application. The generated **client\_id**, **secret**, and **App ID URI** should be provided to your Turbo implementation specialist, who will finalize integration of authentication settings.

These accounts may be created manually as described below, or using a [bash script](/docs/deploying/to_a_workspace/azure-create-app-accounts.sh).

**Create accounts with a bash script**

The bash script requires [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) and may be run from any Linux machine or from WSL (Windows Subsystem for Linux).

After downloading it from [our GitHub](/docs/deploying/to_a_workspace/azure-create-app-accounts.sh), run it in bash providing as parameters the subscription id, the resource group name, the Azure location, and the tenant's name. For example:

```
./azure-create-app-accounts.sh
  --subscription aaaaaaaa-cccc-1111-3333-bbbbbbbbbbbb
  --resource-group turbo-prod
  --location eastus
  --tenant unidemo
```

Copy the output and share it with your implementation specialist through a secure channel. We recommend Azure Key Vault or OneDrive for this purposex.

Finally, go to the Azure portal and grant the **admin consent** to the newly created applications. Go to **Enterprise applications** on the Azure Active Directory tab and find the **Turbo.net-Client** and **Turbo.net-Web** applications. Choose **Permissions** and then **Grant admin consent**. 

**Create accounts manually**

To allow Portal to authenticate domain users, the authentication application requires the **Sign in and read user profile** permission in the client's Azure AD.

Turbo supports customization of portal items based on Active Directory group membership. To access this information, Turbo uses the [**memberOf** method of the Microsoft Graph API](https://docs.microsoft.com/en-us/graph/api/user-list-memberof?view=graph-rest-1.0). This method requires the **Read directory data** permission in the Microsoft Graph namespace.

In addition to the **web app/API** application, Turbo also requires a native application to allow native clients to run. It will be bound to the **web app/API** application.

To create the client application:

* Click on **App registrations** and choose **New application registration**.
* Enter a friendly name for the application, for example **Turbo.net-Client**. Select **Native** as the **Application Type**.
* Set the **RedirectURI** to the same address as the **Reply URL** in the web app. In our example, this would be `https://unidemo.start.turbo.net/auth/openid/return`.
* Click on **Create** to create the application.
* In the next page, find the **Application ID** value and send it to Turbo.

Next, we need to configure permissions for this new application:

* Click **Setting** and choose the **Required permissions** section.
* Click on **Add**. Then click **Select an API** and enter the name of your **web app / api** app. Select the app from the results and click the **Select** button.
* Click on **Select Permissions** and select the **Access [name of app]** permission. Click the **Select** button again to close this screen.
* Click on **Done** to finish adding the permission.
* When you are back on the **Permissions** screen, select **Windows Azure Active Directory** and make sure the delegated **Sign in and read user profile** permission is selected. Then select **Microsoft Graph** and select the delegated **Read directory data** permission.

Finally, we need to grant an adminisrator consent for the native application:

* Go to **Enterprise applications** on the Azure Active Directory tab and find the **Turbo.net-Client** application.
* Choose **Permissions** and then **Grant admin consent for Turbo.net-Client**. If you don't want users to accept the consent for the web application, grant the consent on this application also.

#### Using ADFS

This section describes the steps required to configure authentication against an ADFS server. Turbo currently supporst ADFS2 and ADFS3 protocols.

On the ADFS server open the ADFS management window and go to **Trust Relationships** > **Relying Party Trusts** settings. Then right-click on the **Relying Party Trusts** and add a new Relying Party:

![](/docs/deploying/to_a_workspace/adfs-add-rp.png)

In the Wizard choose **Enter data about the relying party manually** setting and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-manual.png)

Fill the Display Name with a meaningful name, for instance, `Turbo Portal`, and click **Next**.

Later, choose **AD FS profile** as we will be using SAML tokens to authenticate and click **Next**.

Leave the token encryption certificate data empty and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-nocert.png)

Set the service URLs for WS-Federation and SAML 2.0 to the value provided by us and click **Next**.

![](/docs/deploying/to_a_workspace/adfs-enable-saml.png)

Use the same URL as the relying party trust identifier and click **Add**. Add one more identifier that is unbound to SAML or WS-Federation to be used by the Turbo Client. Click **Add** and then **Next**.

![](/docs/deploying/to_a_workspace/adfs-id.png)

Click **Next** through the rest of the wizard and **Close** at the end.

The **Edit Claim Rules for Turbo Portal** window should appear. We need to add two claim rules to pass the user's name and AD groups to the Turbo Portal.

Click on the **Add Rule...** button, choose the **Send LDAP Attributes as Claims** option, and click **Next**. Set **Attribute store** to **Active Directory**, add the Claim Rules from the table below, and click **Finish**:

LDAP Attribute                          | Outgoing Claim Type
----------------------------------------|---------------------
Display-Name                            | Name
User-Principal-Name                     | UPN
Token-Groups - Qualified by Domain Name | Group
E-Mail-Addresses                        | E-Mail Address
Token-Groups as SIDs                    | Group SID

Confirm Global Authentication Policy settings from the **Authentication Policies** administration panel.

![](/docs/deploying/to_a_workspace/adfs-global-policy-1.png)

**Forms Authentication** must be enabled for both Extranet and Intranet.

![](/docs/deploying/to_a_workspace/adfs-global-policy-2.png)

Add Native Client App access to ADFS. Do this with the **Add-AdfsClient** powershell cmdlet.

```
(ps)> Add-AdfsClient -ClientId <CLIENT_ID> -Name <APP_NAME> -RedirectUri <REDIRECT_URI>
```

- **CLIENT_ID** is a GUID. Used guidgen.exe or other method to generate a new value.
- **APP_NAME** is the name of the app. This can be anything but must be unique.
- **REDIRECT_URI** is an unused but required value. This can be anything but must be unique.

```
(ps)> Add-AdfsClient -ClientId 54707E09-E6A2-4F22-9C73-638610AFE38A -Name Turbo-Client -RedirectUri http://turbo.net
```

#### On Premises ADFS Configuration

In this section we go over the required settings changes to configure your on premises installation for ADFS login. The following instructions are for the Ubuntu installation steps:

1. We use the ADFS Token-Signing Certificate to verify that ADFS authentication responses are signed by your ADFS. On your ADFS, export the Token-Signing Certificate as a Base-64 encoded X.509 .CER file.
2. Rename the file to `adfs.crt`.
3. On your Ubuntu machine, add `adfs.crt` to the `turbo.net` directory.
4. Next update or run the Ubuntu setup instructions. On the Ubuntu 16.04 machine extract the turbo.net.tar.gz.
    
        tar -xzvf turbo-net.tar.gz
        cd turbo.net

5. Ensure the ADFS related fields in `config.yml` are filled.

        nano config.yml 
		
   `login_mode` The login mode used to access the portal, use the value `ADFS`

   `adfs_issuer` The ADFS relying party's identifier.
   
   `adfs_entry_point` The ADFS relying party's endpoint.
   
   `adfs_logout_url` The ADFS relying party's logout endpoint.
   
   `adfs_signing_cert_thumb` The ADFS Token-Signing Certificate's thumbprint.
   
   `adfs_signing_cert_cn` The ADFS Token-Signing Certificate's common name.

   `adfs_cert_file` The ADFS Token-Signing Certificate, in PEM format.

6. Run:
 
        sudo ./setup.sh
		

If you would like to manually edit the configuration file for an already configured Turbo Portal, open the /props/config.ini file. If you are running Turbo Portal in a Windows Turbo Container, run the following command `turbo run turbo/portal --startup-file=c:\websites\portal\src\props\config.ini`. Fill in the following fields:

```
# Controls what mode of login this portal uses
# ADFS: Login to ADFS with SAML auth
loginMode = ADFS

# Controls which ADFS you SSO into
#Obtained from your ADFS relying party client- / app-id
ADFSAppId=
# Obtained from your ADFS relying party identifier
ADFSIssuer =
# Obtained from your ADFS relying party endpoints
ADFSEntryPoint =
# Obtained from your ADFS relying party endpoints
ADFSLogoutUrl =
# Obtained from your ADFS token-signing certificate
ADFSSigningCertThumb =
# Obtained from your ADFS token-signing certificate
ADFSSigningCertCN =
```

### Managing workspaces and repositories

To manage the workspace, you need to use your personal Turbo account. Make sure that this account has administrative rights in the organization. After signing in to https://turbo.net, click the profile icon (in the right upper corner) and you should see a list of workspaces to which you have access. Your workspace should be there too. After switching to it, you may search for new images and add them to the workspace, or remove the ones that are already there (hover over the image and click on the gear icon).

When you publish a new university app image to the hub, you should use the organization namespace, for example, **turbo push unidemo.edu/myapp:2.0**. Publishing an image under the unidemo.edu namespace makes it accessible only to the @unidemo.edu accounts. As an administrator of the organization, you may configure settings for each image under the unidemo.edu namespace. If you click the gear icon on an image, you may select the "Go to Repository" option:

![](/docs/deploying/to_a_workspace/go-to-repo.png)

On the settings tab, two most important sections are the **Launch Configuration** panel and the **Admin** panel:

![](/docs/deploying/to_a_workspace/admin-settings.png)
 
The **File Isolation** defines the default isolation mode for the image (that’s what we will use to make the native Office365 visible). The **Using** textbox allows you to specify which other images (layers) should turbo import before running the main image (this could be 7zip or/and Adobe Reader, for example). Finally, the **Official** switch makes an image available for the cloud runs, and **Launch Location** configures possible ways of running the image.
