### Hub Server Administration

The Turbo Hub Server Administration Site enables you to manage and control all aspects of your Turbo Hub Server. 

The default location of the Administration Site is: http://localhost:80/admin, and consists of the following links:

- **Hub**: This page lists all applications repositories on your Turbo Hub Server. From here **Federation** can be configured to source application repositories from turbo.net hub. **API Keys** can be defined to allow access to your hub without using a password (useful for automation, tooling, and other similar scenarios). For more information refer to [Managing Hub server](/docs/server/hub-server#hub-server-administration-managing-hub).

- **Users**: This page list all users and groups on your Turbo Hub Server. From here **Directory Services** can be configured to import users from LDAP or Active Directory. **Authentication Method** allows you to configure how users will authenticate with the Turbo Hub Server. **Device Keys** allows you to manage all registered devices. For more information refer to [Managing Users and Authentication](/docs/server/hub-server#hub-server-administration-managing-users-and-authentication).

- **Servers**: This page lists all servers that are included as part of the current Turbo Hub Server installation. Server settings such as roles, web service bindings, and SSL certificates may be configured here. For more information refer to [Managing Servers](/docs/server/hub-server#hub-server-administration-managing-servers).

- **Workspaces**: This page lists all workspaces on your Turbo Hub Server. From here workspaces may be added, configured, and deleted. For more information refer to [Managing Workspaces](/docs/server/hub-server#hub-server-administration-managing-workspaces).

- **Reports**: This page provides preconfigured customizable analytics reports, sorted according to Administration, Hub, and Users. For more information refer to [Reports](/docs/server/hub-server#hub-server-administration-reports).

- **General**: This page contains a summary of your Turbo Hub Server license, and information and options for configuring Turbo Hub Server. For more information refer to [Configuration and Customization](/docs/server/hub-server#hub-server-administration-configuration-and-customization).

#### Managing Hub

![](/docs/server/hub_server/admin-hub.png)

All application repositories on Turbo Hub Server are managed from the **Hub** page of the Administration Site. 

##### Application Repositories

Each new application repository is added to Turbo Hub Server in the form of a Turbo container image, or SVM, which are pushed to the hub using the Turbo Client command line tools.  For more information about SVMs and Turbo Virtualization Technology refer to [Turbo Server Technology](/docs/server/overview#technology).

##### Adding a Container Image

![](/docs/server/hub_server/admin-hub-push-cli.png)

Complete the following steps to add a new application image to Turbo Hub Server:

1. Install the Turbo Client for Windows platform.

2. Connect the client to your hub server using the `turbo config` command. See [Config Command](/docs/reference#config) for more information.

```
> turbo config --hub=http://[hubserver]
```

3. Log in as a hub administrator account or use a **system** API key. This is done using the `turbo login` command. See [Login Command](/docs/reference#login) for more information.

```
> turbo login admin-user
-OR-
> turbo login --api-key=6g8BwsIlU7ezl_CMIZ_0PYBwK6WVAUZdx1mxYO1WFOg
```

4. Create your container image. See [Building Containers](/docs/building) for more information on ways to create container images.

As an example, we will make a create an empty container that executes the native notepad.exe application.

```
> turbo new clean -n=test-container
(exit the container window that is shown)
> turbo commit test-container test/notepad:1.0 --no-base --startup-file=notepad.exe
> turbo push test/notepad:1.0
```

You will now see your test image in your hub list in the administration site. This image will be accessible to all users who are defined to have access to the hub server. 

**NOTE:** If you do not specify a namespace in the image name (ex, "test" in "test/notepad") then the image will be pushed to the user's private namespace. This image will only be accessible by the user who pushed it and it will not show in the hub list on the administration site.

##### Troubleshooting

The push command is denied with following error message:

```
> turbo push mozilla/firefox-base:68.0.1
Pushing image mozilla/firefox-base:68.0.1 to mozilla/firefox-base:68.0.1
Error: Push failed. This user may not be authorized to push to the mozilla repository.
```
The current logged in user may not be an administrator of the Hub server. Add the user to the administrators group. For more information refer to [Managing Users and Authentication](/docs/server/hub-server#hub-server-administration-managing-users-and-authentication).

**NOTE:** If you add the user to the administrators group after already attempting to push an image to the Hub server, you may have to wait up to 5 minutes for the prermissions to propagate to the Hub server. Either switch to an API key based login, or restart the Hub server process and try again.

##### Managing Repositories

![](/docs/server/hub_server/admin-repos-edit.png)

On the repository edit page, a repository display name can be modified. This shows up in the hub administration page list. The repository ID field cannot be modified and is assigned when the first container image is pushed to the hub. The **versions** list shows all available images that are available for this repository. They can be referenced by their tag or their ID (ex, "mozilla/firefox:64.0" or "mozilla/firefox#44397e23bf46a08a8a567ba13b2c215668d451c9dde41b030706779dc977cc02"). Accessing a repository without a tag or ID will use the latest available image (ex, "mozilla/firefox"). Note that any repository updates may take up to 24hrs to be automatically retrieved by the Turbo Client.

##### Managing Repository Federation

![](/docs/server/hub_server/admin-federated-repos.png)

With the Federation feature in Turbo Hub Server, you can configure application repositories to be sourced and automatically updated from the Turbo.net Hub. Since repositories in the Turbo.net Hub are automatically built as updates become available, you can remove the burden of maintaining images yourself.

![](/docs/server/hub_server/admin-federation-settings.png)

When first using Federation, you must configure the API key that is used to access the Turbo.net Hub. This API key can be retrieved in your [Turbo.net Account Settings](https://turbo.net/settings/devices-and-api-keys). You can also set how frequently the Turbo.net Hub is queried for new version of federated repositories. The default frequency is every 24-hours. If **Automatic Forwarding** is enabled, any image request to your hub instance that cannot be satisfied will automatically be forwarded on to Turbo.net Hub with the returned repository being cached in your hub. This effectively federates the entire Turbo.net Hub library and uses your instance as a local cache for your users.

![](/docs/server/hub_server/admin-federated-repos-add.png)

To add a new federated repository, click the **Add** button and enter the full name of the Turbo.net repository that you want to federate. Set the **Revision History Length** field to the number of past revisions to import during a sync. Since repositories on Turbo.net are updated automatically, some may have hundreds of images available. The default value is 10 revisions. After setting the properties, click **Save**. You will now see your new federated repo listed and the initial sync with Turbo.net Hub will be in progress. After the sync is complete you will see the new repository in your main repository list on the Hub administration page.

##### Managing API Keys

![](/docs/server/hub_server/admin-api-keys.png)

API Keys allow you to login to your hub with a code other than with a username/password. This is useful when configuring automation or in other scenarios where a plain text password is not desirable. If an API Key has been compromised, it can be refreshed to a new value or deleted to immediately revoke access. 

![](/docs/server/hub_server/admin-api-keys-add.png)

When adding an API Key, give it a name that describes the general usage of the key. It is also recommended to have distinct keys for distinct usages so that if one is compromised or updated, all usages will not require update. **Run as System** controls whether the key is given administrative privileges to push new images or delete repositories. Without this setting, the API key will only have read access to repositories.

#### Managing Users and Authentication

![](/docs/server/hub_server/admin-users.png)

Turbo Hub Server users are tracked and managed via the Administration Site. Users are entered manually or via automated import from LDAP or Active Directory directory services. Users and user groups can be viewed and managed on the **Users** page. From this page you can view user directories, status, and available actions. Displayed above the user list is the total number of licenses available and the number of licenses currently in use.

##### Managing Users

![](/docs/server/hub_server/admin-users-user.png)

To manage a user, select the user name from the list on the **Users** page. The following fields are displayed on the page:

- **Name**: Full name of the user.

- **Login Name**: The unique login name for the user.

- **Enabled**: Determines whether a user can access Turbo Hub Server. After a user is disabled he no longer consumes a seat.

##### Managing User Groups

![](/docs/server/hub_server/admin-users-group.png)

To create a user group select **Add Group**. The **Add User Group** screen displays. This screen contains the following fields:

- **Name**: The group name that displayed on the user screen.

- **Description**: A group description (optional).

- **Members**: Users and groups that are members of this group. Users and groups are inherited when including other groups as members. Add users or other groups by selecting **Add Members**.


There are three special groups that are created automatically, **Administrators**, **Anonymous Users**, and **Everyone**:

- **Administrators**: This group will be able to log into the administration site and push shared images. Note that changes to the **Administrators** group will require a service restart before they are honored by the hub services. Access to the administration site will be honored immediately. 

- **Anonymous**: This group automatically includes any user discovered when the authentication mode is set to **Anonymous**.

- **Everyone**: This group automatically includes all users regardless of authentication mode.

##### Adding an External Directory Service

![](/docs/server/hub_server/admin-users-directory-service.png)

Using Turbo Hub Server you can add an external directory service, such as Active Directory. This enables you to manage users with the touch of a button and easily import existing users and groups into Turbo Hub Server. Complete the following steps to add an external directory service:

1. Open a Turbo Server administration site page in your web browser.

2. Choose the **Users** category from the top navigation bar.

3. Select **Manage Directory Services**.

4. Select **Add Service**. The **Add Directory Service** screen displays.

5. Enter your specific settings into Turbo Server. Each section is detailed below.

**Note**: When synchronizing external directory-services containing of over 5,000 users, the command-line administration utility should be used instead of the Administrator web site. For more information on using the administration utility, see *Manage Turbo Server from the Command Line*.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Section</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Description</p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p><strong>Name</strong></p>
         </td>
         <td>
            <p>This field indicates which service is being added or controlled by the entry. The <strong>Name</strong> field must not be the same as the service or server you are using.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Description<br></strong></p>
         </td>
         <td>
            <p>(Optional) <br>Administrators can include a description of the directory service being added, which can be helpful in recording notes about the service.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><strong>Login Prefix</strong></td>
         <td colspan="1">
            <p>Login prefixes are given to each user in the directory service to use when they log into the server and are helpful in distinguishing users across different directories. For example, if the directory's login prefix is "acme" and the users name is "aaron", they would log on using the full name "acme\aaron." Once this login prefix is chosen for a directory, it cannot be changed. If you must change the login prefix, the directory service can be deleted and a new one added for the same directory; settings for all users from that directory are lost.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><strong>Type</strong></td>
         <td colspan="1">In the <strong>Type</strong> section you can choose the type of the directory service from which to import users and groups. <br> There is variability in location, security, and schema settings for directory services. Turbo Hub Server provides two templates: <strong>Active Directory</strong> and <strong>Other LDAP</strong>. The local Active Directory can be found by selecting <strong>Try Local.</strong> When found, working connection settings are set automatically. <br class="atl-forced-newline"> To synchronize with the local Microsoft Windows domain's Active Directory service, select <strong>Try Local</strong>. This loads default settings into the <strong>Connection</strong> and <strong>Directory Schema</strong> fields. For large directories this can take several minutes. <br class="atl-forced-newline"> If the operation is unsuccessful, continue to the <strong>Choosing Your Connection Settings</strong> section. <br class="atl-forced-newline"> If the operation is successful, continue to the <strong>Choosing the Directories to Synchronize</strong> section.</td>
      </tr>
      <tr>
         <td colspan="1"><strong>Server</strong></td>
         <td colspan="1">
            <p>This section can be used to specify your connection settings to the LDAP directory you are trying to connect to.</p>
            <p>For more on this section, scroll down on this page to <strong>Choosing Your Connection Settings</strong></p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><strong>Binding Type</strong></td>
         <td colspan="1">
            <p>This field is used to specify the form of security being employed by the LDAP server you are connecting to.</p>
            <p>If "Default" is chosen for <strong>Port</strong> in the <strong>Server</strong> section, changing the <strong>Binding Type</strong> will automatically change the port to the standard LDAP port number for that setting.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><strong>Synchronization Account</strong></td>
         <td colspan="1">This field specifies the account to use when synchronizing users with the directory services. For more information, scroll down on this page to <strong>Choosing Your Connection Settings</strong>.</td>
      </tr>
      <tr>
         <td colspan="1"><strong>Directory Schema</strong></td>
         <td colspan="1">&nbsp;Allows the administrator to specify which names in the LDAP directory will be imported into the Turbo Hub Server user information. For more information, see <strong>Directory Schema</strong>, further down this page</td>
      </tr>
      <tr>
         <td colspan="1"><strong>Synchronized Items</strong></td>
         <td colspan="1">Used to identify items in the directory tree that should be synchronized with Turbo Hub Server. For more information, see <strong>Choosing Items to Synchronize</strong>, further down this page.</td>
      </tr>
</table>  
&nbsp;

**Choosing Your Connection Settings**

Complete the following steps to choose your connection settings:

1. Enter the settings for the **Server** section. The **Host**, **Port**, and **Top directory** are initialized with typical values, but you can customize them to match your directory service settings. They are best discovered using the management tools for the application that hosts them, such as *Microsoft Windows* or *Apache Directory Services*.

	- The **Top directory** should be specified to avoid potential login issues that are difficult to troubleshoot.

2. Set the **Binding Type**. Changing the **Binding Type** will change the **Port** to the standard LDAP port number for that setting, if you have not specified another port number.

	- Choosing the **Simple** binding type is not recommended if you are binding to Active Directory, but it can be useful while on the page in diagnosing connection problems via the **Test** button.

3. Enter your credentials at the **Synchronization Account** section. To connect with a specific account in the **Synchronization Account** section, specify the username:

	- **Active Directory**: The domain login (e.g. acme\aaron)

	- **Generic LDAP**: The distinguished name (e.g. uid=aaron,ou=acme,ou=system)

4. To test these settings, click on the **Test** button.

5. Once the test is successful, proceed to the **Directory Schema** section.

**Directory Schema**

Directory schema settings are customizable within any directory service; you can change these settings to match the names in your directory service. The most common schema values are tried by selecting **Discover**. You can select **Discover** when you are not satisfied with the result in the **Synchronized Directories** section. Complete the following steps to use the **Discover** functionality:

1. Select **Refresh** from the **Synchronized Directories** section and inspect the results. If the users and groups shown there are accurate, leave the directory schema settings as they are.

2. If the **Synchronized Directories** does not accurately depict the users and groups you expect, select **Discover** and wait for the schema settings text boxes to fill with the recommended values. Test these values at any time from using **Refresh** in the **Synchronized Directories** section.

3. If you know the correct schema name for the given properties, you can enter it manually. If there are more than one name for the same value you can  enter each name separated by a semicolon. Each is searched during synchronization.

4. To reset the settings to the Turbo Server default, select Defaults.

**Choosing Items to Synchronize**

You may limit the scope of users and groups that will be synchronized from your directory service, either by choosing specific directories within the service, or by selecting the user groups in which you are interested.

*Choosing directories*

Your directory service might contain some subdirectories that have useful information and others that contain unwanted information. You can choose which subdirectories to synchronize using **Synchronized Items**, selecting the **Directories** option. Complete the following steps to use **Synchronized Items**:

1. Select **Refresh** to use the current connection and directory schema settings to scan your directory service. Information about discovered sub-directories is available via **tooltip popups**. For large directories this operation can take several seconds to complete.

2. To narrow the scope of your synchronization to specific directories complete the following:

	a. Uncheck **Include All**.

	b. Check directories to include.

*Choosing groups*

You may have a specific subset of existing users that will use Turbo Server, in a group or groups native to your directory service. You can choose which groups to synchronize using **Synchronized Items**, selecting the **Groups** option. Complete the following steps to use **Synchronized Items**:

1. Select **Refresh** to use the current connection and directory schema settings to scan your directory service. Information about discovered group is available via **tooltip popups**. For large directories this operation can take several seconds to complete.

2. To narrow the scope of your synchronization to specific groups complete the following:

	a. Uncheck **Include All**.

	b. Check groups to include. All members of that group will be synchronized, including contained groups and all of their members.

When you are satisfied with your settings, select **Save**. At this point, the users and groups in your directory service are not synchronized with Turbo Server. From the **Manage Directory Services** page, click the synchronization button and verify there are positive counts for users and/or groups when it has finished. For large directories this can take several seconds.

##### Authentication Method

![](/docs/server/hub_server/admin-users-authentication-method.png)

The **Authentication Method** page configures which Authentication Method is used when an end-user logs into the Hub Site and Turbo Client. The supported methods are:

- **Anonymous**: Anonymous authentication allows users to access the Portal without logging in. All anonymous users are added to the **Anonymous Users** group.

- **Username and Password**: Username and Password authentication requires users to provide their username and password in order to log in. Passwords may be managed from the user settings page.

- **Single Sign-On**: Single Sign-On authentication allows users to login to external directory services such as Azure AD. For more information on configuring SSO, refer to [Configure Azure AD](/docs/server/hub-server#azure-active-directory-integration-configure-azure-ad)

##### Device Keys

![](/docs/server/hub_server/admin-users-device-keys.png)

The **Device Keys** page lists all devices that are registered to the Hub Server. Devices are automatically registered with the Hub Server when subscribing or installing applications. Device Keys may be deleted in order to immediately revoke that device's access to the Hub Server.

#### Managing Servers

![](/docs/server/hub_server/admin-servers.png)

The **Servers** page lists all servers that are included as part of the current Turbo Server installation, along with their current status. Clicking a server name will navigate to the server configuration page.

##### Configuring a Server

![](/docs/server/hub_server/admin-servers-edit.png)

- **Name**: A display name for the server, shown in the Administration Site.

- **Role**: The roles for which this server is responsible, including: [Hub Server](/docs/server/hub-server), Hub Site (Portal), and [Application Server](/docs/server/application-server). Changing the server role will trigger a service restart which may take a few minutes to complete.

- **Use Advanced Video Coding**: Enables the use of Advanced Video Coding (H.264) for remote application streaming if the Application Server supports it. This setting is only available for servers with the Application role enabled.

- **Web Service Root**: Configures the web service bindings for where the hub, portal, broker, and public web services will be hosted. This setting is only available for servers with the Hub or Portal role enabled.

- **Web Service SSL Certificate**: Configures the SSL certificate files that are used for HTTPS web service bindings. The provided file paths must point to permanent locations that are available to the service account.


#### Managing Workspaces

![](/docs/server/hub_server/admin-workspaces.png)

A workspace defines a set of applications and user permissions. These workspaces are shown on the Turbo Streaming Server portal and on the Turbo Clients to users with sufficient permissions. By default there is a single **Default Workspace** with User permissions granted to the **Everyone** user group, allowing access to all users. Applications, permissions, and analytics can be managed from the the Workspace Administration page.

Server Administrators, as well as users with Administrator permissions to the workspace, may click the **Manage** button to access the Workspace Administration site.

##### Workspace Administration Dashboard

![](/docs/server/hub_server/admin-workspaces-admin-dashboard.png)

The **Dashboard** page shows application usage analytics for the workspace. The analytics are separated into 4 sections:

- **Application Launch Volume**: A graph visualizing the application launch volume for the past week.

- **Key Statistics**: A summary of the unique applications, launches, users, and devices for the past week. 

- **Usage Summary**: A table grouped by application summarizing each application's launch volume for the past week.

- **Recent Activity**: A table detailing the last 100 application launches.

##### Workspace Administration Applications

![](/docs/server/hub_server/admin-workspaces-admin-applications.png)

The **Applications** page lists all applications that have been added to this workspace and provides management options such as adding, editing, and deleting workspace applications. Applications added to the workspace will be displayed on the portal to users will sufficient permissions and will be available for launch.

##### Editing a Workspace Application

![](/docs/server/hub_server/admin-workspaces-admin-applications-edit.png)

The **Application Settings** page provides configuration options for a variety of application settings. These settings affect the application's display settings, launch settings and more. For more information on these settings refer to the [Repository Settings](/docs/hub/repositories#repository-settings).

##### Workspace Administration Users

![](/docs/server/hub_server/admin-workspaces-admin-users.png)

The **Users** page lists all user and user group permissions that have been added to the workspace and provides management options such as adding and deleting permissions. Granting **User** permissions will allow that user or user group to access the workspace, while granting **Administrator** permissions will allow that user or user group to access the workspace administration site.

#### Reports

![](/docs/server/hub_server/admin-reports.png)

The **Reports** page provides pre-configured, detailed analytic reports, broken-down into categories. Selecting a report takes you to the **Report** page, which consists of a **Date Range** control and the **Report Viewer**. Use the **Date Range** control to adjust the time period for the selected report.

Note that if the server uses Anonymous login mode, the user name in the reports will display the Windows login profile name. This applies even for logged in users with cached credentials.

##### Administration Reports

- **Session Logs Report**: Provides a detailed record of all session events, including launching or stopping an application.

- **Alert Report**: Presents a record of all Turbo Hub Server alerts. Common alerts include errors and administrative changes.

##### Hub Reports

- **Repository Session Report**: Presents a detailed record of each repository session.

- **Repository Usage Report**: Provides a detailed breakdown and comparison of the usage for each repository.

##### User Reports

- **User Usage Report**: Presents a detailed breakdown and comparison of application usage for each user

- **User Session Report**: Provides a detailed record of each application session, broken-down by user.

##### Report Viewer

![](/docs/server/hub_server/admin-reports-view.png)

Use the toolbar located at the top of the **Report Viewer** to perform the following tasks:

- Navigate through report pages using the left and right arrows.

- Export the report to a file in any of the following formats:
	- Adobe Acrobat (PDF) file
	- Microsoft Excel
	- Microsoft Word

- Refresh the report.

- Print the report.

#### Configuration and Customization

![](/docs/server/hub_server/admin-general.png)

The **General** page provides options to configure and customize Turbo Hub Server. The page contains the following sections:

- **License**: Provides an overview of information associated with the current Turbo Server license, including number of seats, allowed portals, computer name, and machine identifier. If server users are licensed to run applications on more than one machine, this number is reflected here. This section also contains a link to add a **New License**; you can use this to update an existing license as well.

- **Administrator Email**: Users are directed to this email address if they encounter any errors or issues while using Turbo Hub Server.

##### Appearance

![](/docs/server/hub_server/admin-general-appearance.png)

The **Appearance** page provides customization options for the Turbo Streaming Server portal, such as icons and background images. Some settings may require the portal to restart before taking affect.

##### Cloud Storage

![](/docs/server/hub_server/admin-general-files.png)

The **Cloud Storage** page provides configuration options for integration with Cloud Storage providers such as OneDrive and Dropbox. This allows users to be able to access their files from these providers while running applications. For more information refer to the [Cloud Storage Integration](/docs/server/hub-server#cloud-storage-integration) section.