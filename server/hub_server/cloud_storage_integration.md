## Cloud Storage Integration

### Setting up OneDrive SSO

To allow users to connect their OneDrive accounts and access them while running their applications, you must first configure a OneDrive app registration. This OneDrive app controls the permissions, branding, and routing for the OneDrive SSO.  

The settings should be entered into your Turbo Server Administration site at /admin/general/files.aspx.

1. Follow the [Microsoft docs](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/app-registration) to set up a OneDrive app registration.  

2. Add the following Redirect URLs:  
    * `https://{Web Service Root}/oauth/onedrive/callback/login`  
    * `https://{Web Service Root}/oauth/onedrive/callback/logout`  

3. Enable the following Delegated Permissions:  
    * `Files.ReadWrite.All`  
    * `offline_access`  

4. On the Turbo Server Administration site, enter your **Application Id** into the corresponding **OneDrive Client Id** field.  

5. On the Turbo Server Administration site, enter your **Application Secret** into the corresponding **OneDrive Secret** field.  

6. **[Required for Server < 20.3.1722.0]** Manually update the Turbo Server's OneDrive Redirect URL:  

    1. Open an administrator command prompt on your Turbo Hub Server and cd into your install directory:  
    `C:\Users\Administrator>cd "C:\Program Files (x86)\Turbo Server"`
    2. Open the virtual file system:  
    `C:\Program Files (x86)\Turbo Server>Server.exe /XShellEx=cmd`
    3. Open the config.ini.&lt;version&gt;.template file in the new command prompt:  
    `C:\Windows\System32>notepad C:\portal\src\props\config.ini.<version>.template`
    4. Set the cloudStorageManager to https://{Web Service Root}, then save and close. This should match the host of the Redirect URI in Azure:  
    `cloudStorageManager = https://example.turbo.net`
    5. Restart the Turbo service from the Task Manager.

Once configured, users may connect their OneDrive account from the portal dashboard Files tab.

### Setting up Dropbox SSO

To allow users to connect their Dropbox accounts and access them while running their applications, you must first configure a Dropbox app registration. This Dropbox app controls the permissions, branding, and routing for the Dropbox SSO.  

The settings should be entered into your Turbo Server Administration site at /admin/general/files.aspx.

1. Create a [Dropbox app registration](https://www.dropbox.com/developers/apps).  

2. Add the following Redirect URI:  
    * `https://{Web Service Root}/oauth/dropbox/callback/login`  

3. Set the Permission type to: `Full Dropbox`  

4. On the Turbo Server Administration site, enter your **App key** into the corresponding **Dropbox Client Id** field.  

5. On the Turbo Server Administration site, enter your **App secret** into the corresponding **Dropbox Secret** field.  

6. **[Required for Server < 20.3.1722.0]** Manually update the Turbo Server's Dropbox Redirect URI:  

    1. Open an administrator command prompt on your Turbo Hub Server and cd into your install directory:  
    `C:\Users\Administrator>cd "C:\Program Files (x86)\Turbo Server"`
    2. Open the virtual file system:  
    `C:\Program Files (x86)\Turbo Server>Server.exe /XShellEx=cmd`
    3. Open the config.ini.&lt;version&gt;.template file in the new command prompt:  
    `C:\Windows\System32>notepad C:\portal\src\props\config.ini.<version>.template`
    4. Set the cloudStorageManager to https://{Web Service Root}, then save and close. This should match the host of the Redirect URI in Azure:  
    `cloudStorageManager = https://example.turbo.net`
    5. Restart the Turbo service from the Task Manager.

Once configured, users may connect their Dropbox account from the portal dashboard Files tab.

### Troubleshooting

The following section contains solutions for issues with regards to setting up cloud storage.

Issue: 

User sign in results in error message "[The Azure Application] is not configured as a multi-tenant application. Usage of the /common endpoint is not supported for such applications created after ‘[Some date]’. Use a tenant-specific endpoint of configure the application to be multi-tenant."

Solution:

The user is trying to log in with their external OneDrive account which requires a multi-tenant app registration. Ensure that the application registration is multi-tenant and separate from the application used for SSO.

Issue:

When the user is prompted to grant permission they’re warned about the domain being "unverified".

Solution:

This document explains how to resolve the unverified message:

[How to: Configure an application's publisher domain](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-configure-publisher-domain)

The setting is located in Azure Portal > App registrations > Branding > Publisher Domain

Issue:

User sign in results in error message "AADSTS50011: The reply url specified in the request does not match the reply urls configured for the application: '[Application ID]`."

Solution:

Ensure the correct Redirect URI is set. The setting is located in Azure Portal > App registrations > Authentication > Redirect URIs.

