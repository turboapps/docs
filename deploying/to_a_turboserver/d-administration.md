### Administration

The TurboServer Administration Site enables you to manage and control all aspects of your TurboServer. The default location of the Administration Site is: http://localhost:81, and consists of the following links:

- **Home**: This is the default page for the TurboServer Administration Site and also is the TurboServer Dashboard. For more information refer to TurboServer Dashboard.

- **Apps**: This page lists all applications currently on your TurboServer, enables you to add new applications and application versions, and manage categories. For more information refer to Managing Applications and Managing Categories.

- **Users**: This page provides a list of active and inactive users on your TurboServer, along with a license summary. For more information refer to Managing Users.

- **Servers**: This page lists all servers associated with TurboServer, including the primary server as well as any additional external sites or third party web collaboration portals. For more information refer to Managing Servers.

- **Reports**: This page provides preconfigured customizable analytics reports, sorted according to Administration, Apps, and Users. For more information refer to Reports.

- **Admin**: This page contains a summary of your TurboServer license, and information and options for configuring TurboServer. For more information refer to Configuration and Customization.

#### Administrator Dashboard

The TurboServer Dashboard provides an overview of the TurboServer over a given time period. You can adjust this time period using **Date Range Control**. The dashboard is split into five sections: Top Apps, Volume, Key Statistics, Usage Breakdown, and Recent Activity. You can locate the dashboard by selecting the **Home** link from the Administration Site (it is also the default page for the Administration Site).

##### Volume

The Volume graph charts the total number of launches for your TurboServer over a specific date range. These are broken down into one day periods on the horizontal axis. Launches for unpublished application versions are not included.

##### Key Statistics

Key Statistics displays the following statistics for a selected date range:

- **Apps**: The number of unique application versions that were launched.

- **Launches**: The total number of application launches.

- **Users**: The number of unique users to launch an application.

- **Devices**: The number of unique devices used to launch an application.

##### Usage Breakdown

Usage Breakdown provides detailed statistics for the top ten application versions over a selected date range, ranked by total launches, including:

- **Launches**: Total launches for that application version, followed by the total launches for that application version as a percentage of the total application launches. All launches, including those from the administrative portal, are counted in the number of launches.

- **Users**: Number of unique users who launched that application version, followed by the number of unique users who launched that application version as a percentage of the total unique users.

- **Devices**: Number of unique devices used to launch that application version, followed by the number of unique devices used to launch that application version as a percentage of the total devices used.

##### Recent Activity

Recent Activity provides a log of the most recent application launches, including the following:

- **User**: The user who launched the application.

- **Application**: The application that was launched, including the version number.

- **Started**: The date and time the user started using the application.

- **Ended**: The date and time the user closed the application.

#### Manage Applications

All applications on TurboServer are managed from the **Applications** page of the Administration Site. Each new application is added to TurboServer in the form of a Turbo Virtual Machine, or SVM. For more information about SVMs and Turbo Virtualization Technology refer to TurboServer Technology.

##### Applications and Application Versions

TurboServer manages Turbo Virtual Machines (**SVMs**) using two entities: **applications** and **application versions**. Each application can contain one or more application versions. For example, Firefox can have child application versions for Firefox 3, Firefox 3.5 and Firefox 4. Each application version corresponds to a specific **SVM**.

##### Adding an Application

Complete the following steps to add a new application to TurboServer:

1. Navigate to the **Applications** page of the Administration Site.

2. Select **Add Application**.

3. Enter the following information for the application:

    - **Display Name**: Application name visible to users.

    - **Summary**: Brief summary of the application.

    - **Description**: Detailed description of the application.

    - **Icon**: This is a 90 x 90 pixel JPG, GIF or PNG image representing the application displayed to end-users. If this field is left blank a default icon is applied. If an image is not 90 x 90 it is adjusted to fit the required dimensions.

    - **Permissions**: The default access level of the application. You can override this setting by user or group access.

    - **Licensing**: Restrictions on the number of users or devices that can execute the application. By default, users are only allowed to run an application on one device at a time.

    - **Expiration**: Restrictions on the time that users are permitted to execute this application.

    - **Categories**: Select the categories in which you would like the application to appear. For more information refer to Managing Categories.

    - **Desktop Registration**: Select "Enabled" to give end-user the option to add the application to their Start Menu. Select "Register on Launch" to add the application to the end-users' Start Menu automatically when the application is launched.

    - **Shared Sandboxes**: Select "Enabled" to keep existing application settings when new versions of the application are published. This is required for automatic updates to registered (added to Start Menu) applications.

4. Select **Next**. You will be brought to the **Add Application Version** page to create the first version for this application.

5. Follow the steps under the "Adding an Application Version" section below. Test and/or profile your new application version, and press **Save** to commit your changes.

6. You can change the information on an application by selecting the display name of the application you wish to edit on the **Applications** page.

##### Managing an Application

You can manage an existing application by selecting the display name on the **Applications** page. This page enables you to revise the display name, summary, description, swatch, permissions, and categories for an application. This page also displays and links all versions that exist for the application. To delete an application, select the red X located to the right of the application on the Applications page.

##### Adding an Application Version

A new application version must be added to an existing application. During this process you are required to upload an **SVM**; for information about how to create **SVMs** refer to Creating Applications.

Complete the following steps to add an application version to an existing application:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the green + to Add Application Version, located to the right of the existing application. You can also add an application version on the details page of an application selecting Add at the bottom of the page in the versions section.

3. Enter the following information for the application version:

    - **Version**: The application version in Major.Minor.Build.Revision format. Only Major.Minor is required.

    - **Summary**: Brief summary of the application version; this defaults to the parent application summary if left blank.

    - **Description**: Detailed description of the application version; this defaults to the parent application description if left blank.

    - **Icon**: This is a 90 x 90 pixel JPG, GIF or PNG image representing the application version displayed to users. If this field is left blank, it defaults to the swatch for the parent application.

    - **Turbo VM File**: Upload the Turbo Virtual Machine file (SVM) for this application version. For information about how to create SVMs, refer to  Creating Applications.

    - **Sandbox Sync**: This feature automatically synchronizes application settings and state across client computers. This option is only for authenticated users.

4. Select **Next**. If you chose an SVM file for the application version, this starts the upload process.

**Note:** When uploading SVM files, upload time is heavily dependent on file size. For any files over 500MB, there may be a long delay at the end of the upload process. For files over 2GB, the file will be too large to upload through the web interface. For these larger SVM files, use the command-line interface to upload the file (see Manage TurboServer from the Command Line).

5. Another application version configuration page will appear, where you can test, optimize and publish your application version. See "Managing an Application Version" for more information.

6. This application version now appears next to the application on the **Applications** page. The application version is not visible to users accessing the Portal Site until published. You can change the information on an application version by selecting the version number on the **Applications** page, or by selecting the version number in the details page for the parent application.

##### Managing an Application Version

Application versions are managed by selecting the application version link located on the **Applications** page. This page enables you to revise the summary, description, swatch and Turbo VM file for an application version.

This page also contains the following sections:

- **Entry Points**: This is where you specify the entry points of the container you want to expose. The entry points are defined in the **SVM** file uploaded for the application version. Refer to **Managing an Entry Point** for details on customizing the appearance of an entry point.

- **Sandbox Sync**: This feature automatically synchronizes application settings and state across client computers. This option is only for authenticated users.

- **Published**: This controls whether the application version is visible to users on the Portal Site. You can have multiple versions of the same application simultaneously visible on the Portal Site; unpublish unwanted application versions.

- **Test Launch**: Selecting the **Test** link opens a new window which displays a link named **Run** for each entry point within the application, or a single link to launch the application version if no entry points exist. Selecting this link launches the application version. Use this feature to test application versions before publishing.

- **Adaptive Delivery**: This feature enables you to optimize delivery of an application version by configuring streaming. For detailed instructions on how to optimize an application version, refer to **Optimizing an Application Version**. Turbo recommends optimizing all application versions over ten megabytes. An optimized application version typically launches five to twenty times faster than a non-optimized application version.

- **Embed**: When this HTML code is embedded on an external webpage, it creates a Turbo Feed button to launch the application version. For more information on customizing the Turbo Feed refer to Turbo JavaScript API.

**Note:** The "Spoon_Id" JavaScript variable is composed from the following, *<Application Slug>-<Major Version Number>-<Minor Version Number>*.

**Note:** The embed code may not be backwards compatible between versions of TurboServer. Please update and test the embed code for existing applications that are embedded on other sites when upgrading TurboServer.

- **Recent Activity**: Provides a log of recent activity associated with the application version.

To delete an application version, select the red **X** located to the right of the application version in the details page of the parent application. You can also delete the application by selecting **Delete** at the bottom of the details page for the application version.

##### Optimizing an Application Version (Optional)

Optimizing an application version enables you to launch five to twenty times faster than an application version without optimization. Optimization determines the best order for an application version's bytes to be transferred. Turbo recommends optimizing all application versions over ten megabytes.

Complete the following steps to optimize an application version:

1. Navigate to the **Application Version** page for the given application version.

2. Select the **Optimize** link located in the **Adaptive Delivery** section.

3. Select **Profile App**; this opens a new window that contains links to profile all entry points for the application version, or a single link for the application version if no entry points exist. Select **Run** and the application version will launch. Use the application as a typical user would for about one minute, then close the application. For best performance results, the duration of the profile (how long you use the application) should vary depending on the size of the **SVM**. As a general rule, the duration of a profile should be approximately equal to three seconds for each megabyte of the SVM. For example, one minute for a twenty megabyte **SVM**.

**Note:** Any processes that are started by the application need to be shut down in order for the profile to complete and be recorded.

4. At least one profile should be taken from each platform users will run the application version from **(optional)**.  For example, if users are launching applications only on Microsoft Windows 7 and Microsoft Vista machines, at least one profile should be taken on each of those platforms. Repeat the first three steps on various platforms as needed.

**Note:** When uploading SVM files, upload time is heavily dependent on file size. For any files over 500MB, there may be a long delay at the end of the upload process. For files over 2GB, the file will be too large to upload through the web interface. For these larger SVM files, use the command-line interface to upload the file (see Manage TurboServer from the Command Line).

5. Once all profiles are completed, navigate back to the **Optimize** page.

6. All profiles created are now visible in Profiles section of the page. These profiles are sorted by the various platforms they were taken on. Select the **Update Model** link to create a model and optimize the application version.

After the Model Status changes to **Requested** the model can take a few minutes to complete. When the Model Status reads **Complete**, this indicates that the application version has successfully optimized and will automatically stream to users when launched from the Portal.

**Note**: In order for an application to be profiled, the entire SVM package must be cached on the system where the profile is being created. This is not a concern for applications that do not have a streaming model because the entire SVM will be downloaded and cached. However, for applications that have a streaming model, they will launch before the full SVM is cached. In this case, the application must be run long enough for the full SVM to be downloaded and cached in the background. At that point, the application should be closed and a new profile can be created.

##### Managing an Entry Point

The initial set of entry points corresponds the the **Shortcuts** specified in the application configuration before building the **SVM** package. Although specific entry points available to an application are determined when creating an **SVM** file, the appearance of the entry point can be managed in TurboServer.

Complete the following steps to manage an entry point:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the application version link that contains the entry point next to the parent application.

3. Select the entry point link in the **Entry Points** section of the application version page.

4. The page contains the following sections:

    a. **Name**: Choose the entry point name that will be visible to users.

    b. **Icon**: This is a 90 x 90 pixel JPG, GIF or PNG image representing the application version displayed to users. When this field is left blank it defaults to the swatch for the parent application version.

	c. **Embed**: When this HTML code is embedded on an external webpage, it creates a Turbo Feed button to launch this entry point. For more information on customizing the Turbo Feed, refer to Turbo JavaScript API.

5. Select **OK** to save any changed information.

6. The entry point can be tested from the **Test** link on the application version page.

You can expose or hide an entry point by selecting the check box under the **Enabled** column of the **Entry Points** section, then saving the application version.

##### Managing Application Categories

Categories control the display and segregation of applications on the Portal Site. All categories are displayed on the left navigation bar of the Portal Site.

###### Adding a Category

Complete the following steps to add a new category:

1. Navigate to the **Apps** page and click the **Add Category** button on the bottom of the page.

2. Enter the following information:

	- **Name**: Category name displayed to users.

	- **Description**: Brief description of the category.
	
	- **Members**: List of applications in the category. Selecting the Delete icon removes the application from the category but does not delete it entirely. Use the Add button to add any applications to this category. Adds and removes do not take effect until after you select **Save**.
	
3. Select **Save**.

4. It may take up to ten (10) minutes for category updates to be visible on the Portal Site.

###### Managing Categories

Categories can be managed at the bottom of the **Apps** page. To revise the name or description of a category, select the category name in the listing. To delete a category select the **Delete** link in the category listing. Deleting a category does not delete or unpublish any applications associated with that category.

#### Manage Users

TurboServer users are tracked and managed via the Administration Site. Users are entered manually or via automated import from LDAP or Active Directory directory services. Users can be viewed and managed on the **Users** page. You can also place users into groups to assign application permissions to multiple users at once. The **Users** page contains a list of existing users and user groups. From this page you can view user directories, status, recent activity and available actions. Displayed above the user list is the total number of licenses available and the number of licenses currently in use.

##### Managing Users

To manage a user, select the user name from the list on the **Users** page. The following fields are displayed on the page:

- **Name**: Full name of the user.

- **Login Name**: The unique login name for the user.

- **Directory Information**: Information about the directory service for the user if the user was imported from an external directory service.

- **Enabled**: Determines whether a user can launch applications from TurboServer. After a user is disabled he no longer consumes a seat.

- **Quota**: Determines the maximum amount of data which can be stored by this user. For the given user, this setting will override the default quota setting for all users.

- **Permissions**: Special application permissions for the user.

- **Licenses**: Any licenses the user has acquired for applications with unique user limits.

- **Recent Activity**: A log of recent application usage.

##### Managing User Groups

To create a user group select **Add Group**.  The **Add User Group** screen displays. This screen contains the following fields:

- **Name**: The group name that displayed on the user screen.

- **Description**: A group description (optional).

- **Members**: Users and groups that are members of this group. Users and groups are inherited when including other groups as members. Add users or other groups by selecting Add.

- **Permissions**: Special permissions associated with this group. Add permissions by selecting Add.

TurboServer automatically creates an Anonymous Users group. Users discovered when the authentication mode is set to Anonymous are added to the Anonymous Users group. You can assign special permissions to these users by selecting **Manage Anonymous Users** at the top of the **Users** page.

##### Managing User Permissions

**User Permissions** enable you to allow or block users from running certain applications. These rules override default permissions. For example, you can block Firefox by default but allow user John Doe to launch the application. TurboServer also supports nested groups: permissions for one group apply to users and groups within that group.

You can manage permissions from the user's or the group's Details page. Navigate to the Details page by selecting the user or group name on the Users page. Complete the following steps to manage permissions:

1. Locate the **Permissions** section on the appropriate Details page.

2. **Create New Permissions**:

	a. Select **Add**. A new page displays listing all applications and categories without existing permissions.
	
	b. Select **Permit** for applications or application categories you want the user or group to use. **Note**: This makes a blocked application available to this user or group, unless overridden by another block permission for that application.

	c. Select **Block** for applications or application categories you wish to block the user or group from using. **Note**: This overrides permissions for that user or group.

	d. Leave **None** selected for applications or application categories to use the default permission behavior.

	e. Select **OK**.

**Note**: Permissions are not saved until you select **Save**.

To **Delete** existing permissions select the red **X** next to existing permissions. This resets permissions to their defaults for that application or application category. These changes are not saved until you select **Save**.

Permissions for users and groups prioritize blocks over permits. If a user is blocked anywhere in their group hierarchy, he is blocked even if you permit him specifically.

##### Managing User Licenses

User Licenses record how many unique users are using your applications. Licenses are only used for applications that have their **Licensing** set to a number of Unique Users. In the **User Detail** page, you can see a list of licenses that the User obtained. You can delete these licenses so other users can take a license and be one of the unique users allowed to use the application. Complete the following steps to delete a user license:

1. Select the red **X** adjacent to the license on the User **Detail** page.

2. Select **Save**.

To delete all user licenses for an application, navigate to the application page, then update the licensing settings to no longer use a unique number of users.

##### Adding an External Directory Service

Using TurboServer you can add an external directory service, such as Active Directory. This enables you to manage users with the touch of a button and easily import existing users and groups into TurboServer. Complete the following steps to add an external directory service:

1. Open a TurboServer administration site page in your web browser.

2. Choose the **Users** category from the top navigation bar.

3. Select **Manage Directory Services**.

4. Select **Add Service**. The **Add Directory Service** screen displays.

5. Enter your specific settings into TurboServer. Each section is detailed below.

**Note**: When synchronizing external directory-services containing of over 5,000 users, the command-line utility, Server.exe, should be used instead of the Administrator web site. For more information on using Server.exe, see Manage TurboServer from the Command Line.

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
         <td colspan="1">In the <strong>Type</strong> section you can choose the type of the directory service from which to import users and groups. <br> There is variability in location, security, and schema settings for directory services. TurboServer provides two templates: <strong>Active Directory</strong> and <strong>Other LDAP</strong>. The local Active Directory can be found by selecting <strong>Try Local.</strong> When found, working connection settings are set automatically. <br class="atl-forced-newline"> To synchronize with the local Microsoft Windows domain's Active Directory service, select <strong>Try Local</strong>. This loads default settings into the <strong>Connection</strong> and <strong>Directory Schema</strong> fields. For large directories this can take several minutes. <br class="atl-forced-newline"> If the operation is unsuccessful, continue to the <strong>Choosing Your Connection Settings</strong> section. <br class="atl-forced-newline"> If the operation is successful, continue to the <strong>Choosing the Directories to Synchronize</strong> section.</td>
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
         <td colspan="1">&nbsp;Allows the administrator to specify which names in the LDAP directory will be imported into the TurboServer user information. For more information, see <strong>Directory Schema</strong>, further down this page</td>
      </tr>
      <tr>
         <td colspan="1"><strong>Synchronized Items</strong></td>
         <td colspan="1">Used to identify items in the directory tree that should be synchronized with TurboServer. For more information, see <strong>Choosing Items to Synchronize</strong>, further down this page.</td>
      </tr>
</table>

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

4. To reset the settings to the TurboServer default, select Defaults.

**Choosing Items to Synchronize**

You may limit the scope of users and groups that will be synchronized from your directory service, either by choosing specific directories within the service, or by selecting the user groups in which you are interested.

*Choosing directories*

Your directory service might contain some subdirectories that have useful information and others that contain unwanted information. You can choose which subdirectories to synchronize using **Synchronized Items**, selecting the **Directories** option. Complete the following steps to use **Synchronized Items**:

1. Select **Refresh** to use the current connection and directory schema settings to scan your directory service. Information about discovered sub-directories is available via **tooltip popups**. For large directories this operation can take several seconds to complete.

2. To narrow the scope of your synchronization to specific directories complete the following:

	a. Uncheck **Include All**.

	b. Check directories to include.

*Choosing groups*

You may have a specific subset of existing users that will use TurboServer, in a group or groups native to your directory service. You can choose which groups to synchronize using **Synchronized Items**, selecting the **Groups** option. Complete the following steps to use **Synchronized Items**:

1. Select **Refresh to use the current connection and directory schema settings to scan your directory service. Information about discovered group is available via **tooltip popups**. For large directories this operation can take several seconds to complete.

2. To narrow the scope of your synchronization to specific groups complete the following:

	a. Uncheck **Include All**.

	b. Check groups to include. All members of that group will be synchronized, including contained groups and all of their members.

When you are satisfied with your settings, select **Save**. At this point, the users and groups in your directory service are not synchronized with TurboServer. From the **Manage Directory Services** page, click the synchronization button and verify there are positive counts for users and/or groups when it has finished. For large directories this can take several seconds.

#### Manage Servers

Depending on the scope of your TurboServer implementation you can add additional servers to distribute the workload and improve performance. If you are deploying applications from an external site on another server, you must add that server to TurboServer.

##### Adding a Server

Complete the following steps to add a new server:

1. Navigate to the **Servers** page.

2. Select **Add Server**.

3. Enter the following information for the server:

	- **Name**: A name for the server. This does not have to match the machine's network name.

	- **Role**: The role the server plays in the network. Choose from the following:

		- **Content**: Hosts application files.

		- **Manager**: Hosts administration web pages, web services, and databases.

		- **Portal**: Provides access to applications through a web interface.

	- **Web Address**: The root URL for accessible files. Be sure to put HTTPS for SSL implementations.

	- **File Path**: The file path mapped to by the web address. For example, \\myhost\mysiteroot\.

4. Select **Save**.

##### Managing Servers

Servers are listed on the **Servers** page. Select the server name in the listing to revise the name, web address, or admin site address. You can add or edit the location of the SSL certificate files on the manager server. For example, *c:\ssl\certificate.crt* and *c:\ssl\certificate.key*.

The file path cannot be revised; in order to specify a different file path, you must delete the server and add a new one with the correct file path. To delete a server, select the **Delete** icon in the server list. You cannot delete the server named **Primary**.

##### Configuring a Content Server

Application files are hosted by the Manager Server and synchronized to any Content Servers that have been created. This synchronization is handled by the Turbo service running on the Management Server which runs under the Local System account by default. In order for the synchronization process to work, the Management Server machine account must be given access to the specified folder on the Content Server machine. Below are the steps to accomplish this:

**Share the folder on the Content Server where the application files will be stored**

1. Go to the **Content Server** folder that will be shared

2. Right click and select **Properties**

3. Go to **Sharing -> Advanced Sharing ...**

4. Click on **Permissions**

5. Click **Add** under ***Group or user names***

6. Click **Object Types**, select **Computers** and click **OK**

7. Enter the machine name of the **Manager Server** in the ***Enter the object names to select*** section

8. Click **Check Names** to confirm that the machine can be found on the domain

9. Click **OK**

10. Select the machine name for the Management Server in the ***Group or user names*** section

11. Select **Full control** under the **Allow** column in the **Permission for** section

12. Click **OK**

**Set permissions to the folder on the Content Server where the application files will be stored**

1. Go to the **Content Server** folder that has been shared

2. Right click and select **Properties**

3. Go to **Security**

4. Click **Edit** under ***Group or user names***

5. Click **Add** under ***Group or user names***

6. Click **Object Types**, select **Computers** and click **OK**

7. Enter the machine name of the **Manager Server** in the ***Enter the object names*** to select section

8. Click **Check Names** to confirm that the machine can be found on the domain

9. Click **OK**

10. Select the machine name for the Management Server in the ***Group or user names*** section

11. Select **Full** control under the **Allow** column in the ***Permission for*** section

12. Click **OK**

#### Reports

The **Reports** page provides pre-configured, detailed analytic reports, broken-down into categories. Selecting a report takes you to the **Report** page, which consists of a **Date Range** control and the **Report Viewer**. Use the **Date Range** control to adjust the time period for the selected report.

##### Administration Reports

- **Session Logs Report**: Provides a detailed record of all session events, including launching or stopping an application.

- **Alert Report**: Presents a record of all TurboServer alerts. Common alerts include errors, creation of applications, application versions, categories.

##### Application Reports

- **App Inventory Report**: Provides detailed information for each application in your TurboServer.

- **App Session Report**: Presents a detailed record of each application session.

- **App Usage Report**: Provides a detailed breakdown and comparison of the usage for each application.

#####User Reports

- **User App Usage Report**: Provides a record of all application usage, broken-down by user.

- **User Usage Report**: Presents a detailed breakdown and comparison of application usage for each user

- **User Session Report**: Provides a detailed record of each application session, broken-down by user.

##### Report Viewer

Use the toolbar located at the top of the **Report Viewer** to perform the following tasks:

- Navigate through report pages using the left and right arrows.

- Export the report to a file in any of the following formats:
	- Adobe Acrobat (PDF) file
	- CSV (comma delimited)
	- Microsoft Excel
	- Rich Text Format
	- TIFF File
	- Web Archive

- Refresh the report.
- Print the report.

#### Configuration and Customization

The **Admin** page provides options to configure and customize TurboServer. The page is divided into the following sections:

- **License**: Provides an overview of information associated with the current TurboServer license, including number of seats, allowed portals,  computer name, and machine identifier. If server users are licensed to run applications on more than one machine, this number is reflected here. This section also contains a link to add a **New License**; you can use this to update an existing license as well.

- **Sync**: Configures client synchronization settings.

- **Administrator Email**: Users are directed to this email address if they encounter any errors or issues while using TurboServer.

- **Administrators**: The administrative web pages can be restricted to a subset of the users known to the TurboServer. If no users are contained in this group, access will be open to anyone able to access the port of the administration site. When at least one user is contained in the group, a login form is presented to any user who hasn't already been authenticated from his browser. Only the members of the administrators group (including members of groups that are members of the administrators group) are allowed access. Note that this group appears in the standard user groups list and is editable from there as well. SSL access to the administration site can be enabled by editing the primary server settings, exactly as it is done for a portal site.

- **Logo**: This image appears at the top of the Portal site. The image is resized to a width of 185 pixels (with the aspect ratio maintained), and is converted to .PNG format.

- **Authentication Type**:  Authentication type that users must supply to access applications. Folder sync and app sync are not available to anonymous users.

##### Synchronization

Synchronization settings are found by selecting **Sync Settings** on the **Administrative Settings** page. There are two options which are available to configure:

- **Storage Path**: the physical location where sync data is stored on the web server. This directory must be accessible from the primary portal web server. The value can be a local path or a path to a UNC share, such as \\myhost\sharename.

- **Quota**: the amount of sync data users can keep on the server. The default is 100MB, but can be any value up to 2,000,000,000MB. When the quota is reached the user is notified and they can longer upload files to the server.