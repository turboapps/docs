### Azure Active Directory Integration

Turbo Server can be configured to allow users to log in using Azure Active Directory single sign on (AD SSO). Navigate to the /admin/users/authenticationmethod.aspx page. Change the authentication method to *Single Sign-On*. Select the *Azure AD* directory service. Fill in the required fields and press *Save*.

Azure AD SSO requires all servers in the farm to use https in order to keep users data secure. Make sure SSL is enabled during installation or install SSL from the /admin/servers/ page.

#### Configure Azure AD

The following section describes how to enable Azure AD SSO using the Azure Portal.

To enable Single Sign-On authentication with Azure AD, a new application must be registered in Azure AD with an appropriate **Home Page URL** and **Reply URL**.

The URLs will be of the form:

- Home Page URL: `https://{Web Service Root}`
- Reply URL: `https://{Web Service Root}/auth/openid/return`

Although it is possible to use the Service Principal account for authentication, we stongly recommend creation of a separate application with permissions only to authenticate users against Azure AD.

It is also necessary to generate a secret for the application. The generated **Application ID**, **Directory (Tenant) ID**, and **Client Secret** should be entered into /admin/users/authenticationmethod.aspx. (Note: The term **Tenant ID** and **Directory ID** are used interchangeably. It may be specified either by an alias or in the form of a UUID.)

To allow Portal to authenticate Azure AD users, the registered application requires the Microsoft Graph **Sign in and read user profile** permissions.

Turbo supports customization of portal items based on Active Directory group membership. To access this information, Turbo uses the [**memberOf** method of the Microsoft Graph API](https://docs.microsoft.com/en-us/graph/api/user-list-memberof?view=graph-rest-1.0). This method requires the **Read directory data** permission in the Microsoft Graph namespace.

To create the application:

* Log into [Azure Portal](https://portal.azure.com).
* Click **All services** in the leftmost menu. Then click **Azure Active Directory** under the Identity section.
* Click **App registrations** on the left menu and choose **New registration**.
* Enter a friendly name for the application, for example `Turbo.net`. 
* Select **Supported account types**: `Accounts in this organizational directory only (Turbo.net only - Single tenant)`.
* Add a **Redirect URI** with the same address as the **Reply URL** in the web app. In our example, this would be `https://{Web Service Root}/auth/openid/return`.
* Click on **Register** to create the application. You will be redirected to the **Overview** section of the new application.
* In the **Overview** page, enter the **Application (client) ID** and **Directory (tenant) ID** values to /admin/users/authenticationmethod.aspx.

Next, we need to configure permissions for this new application:

* Click **Authentication** in the left menu and scroll to Advanced settings > Implicit grant. Check the `ID tokens` checkbox. Click Save to apply the setting.
* Click **API permissions** in the left menu and ensure the **Microsoft Graph > User.Read** permission exists exists.
* If it does not exist, you can add it under **Add a permission > Microsoft Graph > Delegated permissions > User > User.Read**.
* If you would like to enable group based permissions to the workspace, add **Microsoft Graph > Delegated permissions > Directory > Directory.Read.All**.
* Click **Grant admin consent** to propagate permissions.

To generate the client secret:

* Click **Certificates & secrets** in the left menu. 
* Click **New client secret**. Enter a description and expiration and press **Add**. After adding, the **Client Secret** value will be displayed. Send the **Client Secret** to turbo.

Finally, we need to grant an administrator consent for the application:

* Go to **Enterprise applications** on the Azure Active Directory tab and find the `Turbo.net` application.
* Choose **Permissions** and then **Grant admin consent for Turbo.net**. If you don't want users to accept the consent for the web application, grant the consent on this application also.

In summary the registered application should have permissions:
* **Microsoft Graph > User.Read**
* **Microsoft Graph > Directory.Read.All**

With Authentication setting:
* **Implicit grant > ID tokens**

The values required:
* **Application (client) ID**
* **Directory (tenant) ID**
* **Client Secret**

#### Configure Azure AD for Moble Clients

To enable SSO from mobile clients you must register an Azure AD native client application. It is recommended that this application is separate from the Azure AD web application registration. The permissions required to set up the native application is the same as the web application in the above section. 

To check that the application is a native application, navigate to the Azure Portal app registration manifest and verify the manifest has the field `"allowPublicClient": true`.

Set the registered native application's Application ID on the authentication method page under **Application ID (mobile and desktop clients)**.

#### Troubleshooting Azure AD App Registration Permissions

You may review which permissions the app registration requires by forcing the consent dialog to appear during login. To do so, please consult to Microsoft docs: [https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-user-consent#force-user-consent-through-a-url-request](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-user-consent#force-user-consent-through-a-url-request)