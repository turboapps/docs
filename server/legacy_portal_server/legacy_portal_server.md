## Legacy Portal Server

Turbo Portal Server is an on-premise application delivery solution. In this section you will learn about system requirements and instructions for installing, configuring and running Turbo Portal Server.

**NOTE that Turbo Portal Server has been deprecated in the 2019 version.** It is recommended that you migrate your environment to use Turbo Hub Server and/or Turbo Streaming Server depending on your requirements. 

#### System Requirements

For small to medium size deployments (less than 200 concurrent users), the minimum recommended machine specifications are:

- A supported operating system (see Supported Platforms)
- At least 4 GB of RAM
- 2.5 GHz or greater processor with at least 2MB L2 cache
- 32-bit or 64-bit chipset

Larger enterprise deployments may require additional processing power, memory, and disk space. For sizing and technical guidance, contact Turbo at support@turbo.net.

#### Database Requirements

Turbo Server is installed with an embedded SQL Express database. However, we recommend this database only be used for demonstration or testing purposes. When using Turbo Server in production, we recommend connecting Turbo Server to an external SQL database.

#### Disk Space Requirements

The initial installation of Turbo Server requires 1.05 GB of free space on your hard drive.

The amount of disk space required varies based on how many applications your server hosts as well as how many users you have. We recommend using the following guidelines when planning how much disk space you will require:

1. For each application hosted on Server, allocate three times the storage necessary for the application SVM. This additional storage is used to store an application's adaptive delivery model.
2. If user file storage (sync) is enabled, allocate the amount of storage budgeted to each user, multiplied by your number of users. 

Turbo DB uses data deduplication to minimize storage consumption when multiple copies of the same data are stored on the server, so your exact needs may vary based on the content being stored.

#### Setup

In this section you will learn how to use the Setup Wizard to automatically configure Turbo Server. For details regarding manual configuration of Turbo Server, refer to Manually Configuring Turbo Server.

Complete the following steps to set up Turbo Server:

1. Run the Turbo Server setup application.

2. Select **Next** to start the installation wizard.

3. Read the End User License Agreement, check the box and select **Next**.

4. Use **Destination Folder** to choose where Turbo Server files are installed and select Install.

5. After the installation process completes, choose the following configuration options:

    a. **Administrator email address**: This is typically the Turbo Server system administrator's email address. Users are directed to this email address if they encounter any errors or issues while using Turbo Server.

    b. **Port assignments**:

    **Administration site**: The port used to access the Administration Site.  For more information, refer to the Administration Site topic.

	**Portal site**: The port used to access the Portal Site.  For more information, refer to the Portal Site topic. If Microsoft IIS is already on the machine port 80 is already in use. Verify that the ports assigned to the Administration and Portal sites are not already in use.
		
    c. Click the **Advanced** button to specify connection information to an external SQL Server Database. When using an external SQL Server Database, be sure that the "Log On" user for the Turbo Server Windows Service has the appropriate access to the database. It may be necessary to modify the Log On user for the service by editing the service details after installing Turbo Server.
    
	**Note:** Turbo Server supports all versions of Microsoft SQL Server 2005 or newer. Any connection string format supported by Microsoft SQL Server may be used.

6. Select **Setup** to begin configuring Turbo Server.

7. After setup is complete the Administration Site automatically opens and displays a web page where you can apply your license. Both evaluation and retail licenses are applied here. To obtain an evaluation license, login or create an account on http://turbo.net. For information on purchasing a retail license, refer to the Licensing topic. When purchasing or activating a retail license, note the Machine Identifier displayed on the License section of the Administration tab. This is necessary to complete license activation.

8. Open the ports for the Administration and Portal sites (the Microsoft Windows Firewall blocks external connections to Turbo Server by default). For instructions on opening the ports, and for recommendations on how to best secure Turbo Server, refer to Configuring Turbo Server Security.

9. Start using Turbo Server!

#### Licensing

The standard Turbo Server license, **Turbo Server Enterprise Edition**, consists of a server license and a custom number of unique or simultaneous end-users or devices. The standard license enables an unlimited number of applications to be hosted on Turbo Server.

Users are typically accounted for with a username and password. However, you can use anonymous users. In this case, each user is defined by the domain of the hosted Turbo Server and a specific username, such as SomeCompany\SomeUser. Any user may access the system on any number of machines within the same domain as the hosted Turbo Server without using additional user licenses. A separate license is used each time an application launches from a new machine outside of the domain with the hosted Turbo Server, regardless of the user login.

A user can only run applications from one device at a time.

**Tip:** Minimize the number of seats consumed by having users login with the same domain as your Turbo Server.

The Turbo Server administrator can activate and deactivate users as needed, or add additional allowed users or devices by upgrading the license. For more information about managing users refer to Managing Users. For instructions on applying a new license to Turbo Server, refer to Configuration and Customization.

Turbo offers discounts for qualified educational customers (K-12, university, and trade schools) and non-profit organizations, as well as custom licensing options. For more information about Turbo licensing and pricing, or to purchase your own Turbo Server license, visit http://turbo.net/server/ or contact us at sales@turbo.net.

#### Administration Site

Turbo Server has an administration site interface that enables Turbo Server administrators to manage and control all aspects of a Turbo Server instance, including:

- Licensing
- Applications
- Application categories
- Users
- Servers
- Customization

The Administration Site also provides detailed application usage analytics via pre-configured reports and a full-featured dashboard. The administration site is automatically configured during Turbo Server setup, and is assigned to port 81 by default. For more information about how to administer Turbo Server, refer to Turbo Server Administration.

#### Portal Site

The Turbo Server portal site is users access and stream applications from. After applications are published they are displayed on the Portal Site, giving users one-click access to your entire application library. The Portal Site automatically configures during Turbo Server setup and can be customized via the Administration Site. The Portal Site is assigned to port 80 by default.

##### Logging In

If the server has an Authentication Type that enables anonymous access, users can launch applications without logging in. If the server requires users to log in with a username and password, however, users must provide valid credentials to access the portal.

If you are a user and need to log in but do not know your username and password, contact an your Administrator to retrieve your credentials.

If the Turbo Server has more than one directory service, the directory prefix must be specified as part of the username. For exmaple, if a user is under the Acme Directory Service with login prefix "ACME" and a username "aaron," the would use the following login:

- Username: ACME\aaron
- Password: *******

##### Using the Homepage

On the homepage for the Portal Site users see the Turbo Web Desktop, which contains available published applications and (if they are an authenticated user) their synchronized folders. Users can navigate the web desktop through the links on the side panel. Users must install the Turbo Client. For more information refer to Install the Turbo Client.

Turbo Web Desktop contains the following links:

- All Apps: Lists applications you can launch as a user. Select any application to launch it.
- Named Categories: In the All Apps section of the desktop, you will see a list of categories: select that category to view applications in the category.
- Synced Folders: Lists Synchronized folders. Select the folders you want to access. You can download those files.

##### Logging Out

Authenticated users can logout of the Turbo Server Portal Site by selecting Logout in the upper right corner of the webpage.
 
##### Signing In and Out via Turbo Launcher

Users can also log in or out via the Turbo Launcher after it is installed on their local machine. Users can bring up the Turbo Launcher by either going to the System Tray or hitting the keys "Alt + Windows." If the user is not logged in already, a login form will be available. If logged in, the user can click on the arrow in the lower-left corner of the Console and select "Sign Out" or "Exit." 

When specifying the server URL in the login form, use one of the conventions, below, as appropriate:

- Using http on the default port (80): http://<server>
- Using http on any other port: http://<server>:<port>
- Using https (SSL) on the default port (443): https://<server>
- Using https (SSL) on any other port: https://<server>:<port>

#### Quick Start

Turbo Server includes free, preconfigured applications that are immediately available from the Portal Site after setup is complete. Prior to launching Turbo applications for the first time, end-users must download and install the Turbo Client.

##### Installing the Turbo Client

The Turbo Client interacts with the Turbo VM kernel to enable container streaming. The Portal Site automatically prompts users to download the plugin when they select an application.

Complete the following steps to install the Turbo Client:

1. Select an application visible in the Turbo Web Desktop. A window displays will display that indicates you do not have the plugin installed.
2. Select OK to begin downloading and installing the Turbo Client.
3. Your browser will ask you to Run or Save the executable.  Select Run. Save the executable to your computer and then run it to launch the Turbo Client installer. 

If you are updating the Turbo Client on your machine, Turbo automatically uninstalls older versions if they have been idle for more than thirty days.

After the Turbo Client is installed on your device, complete the following steps to launch an application:

1. Navigate to the Portal Site in a web browser.
2. Select any application in the Portal Site and it will instantly stream to your desktop. Once the application is buffered, it launches automatically.
3. After you finish using the application, close it as you would a natively-installed application.

**Note:** The Turbo-Sandbox.exe process manages sandboxes of any running containers launched with the plugin. This must run continuously; if that process is closed, all applications launched with the plugin close.

##### Proxy Settings

The Turbo Client has limited support for proxy settings. The Plugin uses proxy settings of the local device on which it is installed by default. These proxy settings can need to be changed to enable compatibility with the Turbo Client. End-users running Microsoft Internet Explorer can change proxy settings for the host device directly from within the browser. Users of other browsers must change proxy settings on the host device itself.

Complete the following steps to change system proxy settings on the host device:

1. Navigate to the Control Panel in your windows Start Menu.
2. Select the Internet Options icon.
3. Select the Connections tab, then LAN Settings.
4. Enter the proxy settings specified by your network administrator.

#### Upgrading

The new version of Turbo Server includes a new Turbo Server Console, an updated Portal Site, and many other new features.

Database settings and application information will be migrated from the previous Turbo Server. To make changes to these settings, a fresh install is recommended.

When upgrading Turbo Server, the Windows service will restart. Be sure to alert users that the system is under maintenance before upgrading.

After upgrading, the previous Turbo Launcher must also be uninstalled. Applications that are registered to users’ desktops with the old console are not compatible with the new console. When the old console is uninstalled these applications will be unregistered, removing old shortcuts, and will need to be registered from the new console. With the new console this process can be automated on application launch by enabling Desktop Registration > Register on Launch on the Application Detail page from the Administrator Site.

**Note:** After upgrading, all preexisting applications need to be updated with a new application version for Windows 8 compatibility. This does not require a new SVM file to be packaged in Turbo Studio -- a new application version with the same SVM file is sufficient.

## Turbo Server

Turbo Server is an application deployment tool that enables you to launch applications instantly from websites, portals and client desktops. Unlike traditional deployment methods, applications streamed from Turbo Server do not require download, installation, rebooting, administrative privileges, or separate setup steps. Applications hosted on Turbo Server launch after less than ten percent of the application is transferred. Turbo Server's speed and efficiency are possible thanks to two technologies: Virtualization and Predictive Streaming.

#### Technology

##### Turbo Containers

Unlike other virtualization solutions that require an entire copy of the host operating system, Turbo's container technology only emulates the features required to run application. Turbo containers have the same performance characteristics as native applications, but without any changes to system infrastructure.

The core of Turbo Virtualization Technology is the Turbo Virtual Machine (VM) kernel. Occupying less than a megabyte of storage and almost zero performance overhead, Turbo kernel is a lightweight implementation of core operating system APIs, including file system, registry, process, and threading subsystems. Turbo kernel is implemented entirely within the user-mode space, meaning Turbo applications can run without any driver installation or administrative privileges.

Turbo containers interact with a virtualized file system, registry, and process environment contained in the kernel, rather than directly with the host device operating system. Requests are handled internally within the virtualized environment, but can also be redirected or overridden based on your configuration.

##### Turbo Streaming

Turbo's unique predictive streaming technology enables you to launch containers five to twenty times faster than traditional downloadable applications.

Turbo enables you to break down containers into smaller functional and data units. Turbo then identifies a prefetch (the application's vital data components for launch) and transfers the units first, enabling deployment when only a fraction of the total application is loaded. Once the prefetch is transferred, the application launches immediately. This occurs without any streaming servers or specialized protocols.

You can register applications to the local device after transfers complete. Registration moves content to a permanent location on your local device (making it available offline), and creates all application related Start Menu icons, Desktop shortcuts, and file associations.

#### Features

Turbo Server enables you to accomplish the following goals:

- Host containers on the web. You can stream Turbo containers from the Turbo Server portal site, custom external sites via HTML, or third-party collaborative web portals such as Microsoft SharePoint, IBM WebSphere, and Novell Teaming.

- Provide your organization with a single access point to your application portfolio. Instead of moving desktop-to-desktop to upgrade or install software, you can publish an application to Turbo Server's portal site; this provides licensed end-users with immediate access and full functionality.

- Launch applications faster over the Internet and intranets. Turbo streamed applications launch five to twenty times faster than traditional downloadable applications. Turbo Stream does not require any special ports or proprietary protocols.

- Empower a mobile workforce. Turbo containers require no installation or administrative privileges, meaning they can launch from anywhere, even on secure, locked-down desktops such as airport and hotel kiosks.

- Run multiple versions of applications side-by-side without conflicts or dependencies. Turbo containers run in isolated sandboxed environments. This enables you to avoid conflicts and dependency issues associated with natively-installed applications.

- Migrate with confidence to Microsoft Windows 8. Turbo enables you to run legacy applications as they stand on newer operating systems, including Microsoft Windows 7 and 8/8.1, without the need to recode, retest, or reinstall.

#### Supported Platforms

Turbo Server is compatible with the following platforms:

- Microsoft Windows Server 2016
- Microsoft Windows Server 2012 R2
- Microsoft Windows Server 2012
- Microsoft Windows 2008 R2
- Microsoft Windows 10
- Microsoft Windows 8.1
- Microsoft Windows 8
- Microsoft Windows 7 (all editions)

Turbo Server supports x86 (32-bit) and x64 (64-bit) processor architectures. End-users can access Turbo Server from Microsoft Windows Vista, Microsoft Windows 7, Microsoft Windows 8, and Microsoft Windows 8.1 platforms. Turbo Server supports Microsoft Internet Explorer, Firefox, Safari, Google Chrome, Opera, and all other browsers built with the Gecko API.

**Note:** Versions of Internet Explorer prior to Internet Explorer 8 are not supported. If you are accessing the Portal Site with a newer version of Internet Explorer, but experiencing problems, be sure to disable compatibility mode. This feature is enabled automatically for intranet sites and serves to emulate Internet Explorer 7 which is not supported by the Portal Site.

### Basic Walkthrough

#### Create a Virtual Application

Adding an Application to Turbo Server requires you to create a virtual version of the Application using the Turbo Studio packaging tool.

To create a Turbo Virtual Machine (SVM) for your Application using the Turbo Studio:

- Visit https://turbo.net/studio to learn about how your enterprise can obtain a license for Turbo Studio.

- Use the Turbo Studio to create an SVM using the snapshot or template process. Refer to the Turbo IDE help documentation for detailed instructions on creating virtual Applications.

The evaluation version of Turbo Studio creates time trial containers. To create containers that do not expire, obtain a retail license for the Turbo Studio.

#### Add the Application to Turbo Server

After the **SVM** is created add the Application to Turbo Server. For more information on managing Applications and Application versions in Turbo Server, refer to Managing Applications. Complete the following steps to add a new Application to Turbo Server:

1. Navigate to the **Applications** page of the Administration Site.

2. Select **Add Application**.

3. Enter the following information for the Application:

	- **Display Name**: Application name that visible to users.
	
	- **Summary**: Brief summary of the Application.

	- **Description**: Detailed description of the Application.
	
	- **Icon**: A 90 x 90 pixel JPG, GIF or PNG image that represents the Application displayed to end users. If this field is left blank a default icon is Applicationlied to the Application. In the image is not 90 x 90, it is adjusted to fit the required dimensions.

	- **Permissions**: The default access level to the Application. You can override this setting by explicit user or group access.

	- **Licensing**: Restrictions on the number of users or devices that can run the Application.

	- **Default Expiration Date**: Restrictions on the time that users are permitted to execute this Application.

	- **Categories**: Select the categories you want the Application to Applicationear in on the Portal Site. For more information about managing categories, refer to Managing Categories.

4. Select **Save**.

After the Application is added to Turbo Server, create a specific Application version and upload the SVM. Complete the following steps to upload the SVM file as a new Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the plus symbol (Add Application version).

3. Enter the following information for the Application version:

	- **Version**: The Application version in Major.Minor.Build.Revision format. Only Major.Minor is required.

	- **Summary**: Brief summary of the Application version; defaults to parent Application summary if left blank.

	- **Description**: Detailed description of the Application version; defaults to parent Application description if left blank.

	- **Icon**: A  90 x 90 pixel JPG, GIF or PNG image that represents the Application version displayed to users. If this field is left blank, it defaults to the swatch for the parent Application.

	- **Turbo VM File**: Upload the Turbo Virtual Machine file (SVM) for this Application version. For information about creating SVMs, refer to Creating Virtual Applications.

	- **Sandbox Sync**: Automatically synchronizes Application settings and state across client computers. This is only Applicationlicable to authenticated users.

4. Select **Save**. The **SVM** file will upload to Turbo Server. Depending on the size of the Application this can take several minutes.

#### Optimize the Application Version (Optional)

Optimizing an Application version typically results in a five to twenty times faster launch. Optimization determines the best order for bytes to be transferred. Turbo recommends optimizing all Application versions over ten megabytes.

Complete the following steps to optimize an Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select **Name** from the **Applications** list.

3. Navigate to **Versions** and select your Application version.

4. Select **Optimize**, located under **Adaptive Delivery**.

5. Select **Profile Application** to open a new window with a **Run** link for each Application entry point.

6. Choose a **Run** link and use the Application as a typical user for about one minute, then close the Application. For the best performance results, the duration of the profile should vary depending on the size of the **SVM**. The duration of a profile should be approximately equal to three seconds for each MB of the **SVM**. For example, one minute for a twenty megabyte **SVM**.

7. Turbo recommends taking a profile from each platform that users will run. For example, if users are launching Applications on Microsoft Windows 7 and Microsoft Vista machines, at least one profile should be taken on each of those platforms. Repeat steps 1-3 on various platforms as needed.

8. Once all profiles are complete navigate back to the **Optimize** page.

9. All created profiles should be visible in the **Profiles** section of the page. These profiles are sorted according to the platforms they were taken on. Select **Update Model** to create a model and optimize the Application version.

10. After the model status changes to **Requested** it typically takes a few minutes to complete. When the model status reads **Complete**, this indicates that the Application version is successfully optimized and will automatically stream to users when launched from the Portal Site. You must refresh the **Optimize** page to view updates to model status.

To add additional profiles to the model, simply navigate back to the **Optimize** page, and click the **Profile Application** link. Any new profiles that are taken will show up in the **Profiles** section as *Unused*. Clicking the **Update Model** link will apply these profiles to the model.

#### Publish the Application

Turbo Server enables administrators to test Application versions prior to publishing. Complete the following to test the Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the Application **Name** from the Applications list.

3. Navigate to the **Versions** section and select your Application version.

4. Select **Test** to open a new window with a Run link for each Application entry point.

5. Choose a **Run** link and the Application version will launch. This behavior is identical to the end user experience.

6. To make the Application visible on the Portal Site, publish the Application version by selecting the **Published** box on the Application version page, then **Save**.

### Administration

The Turbo Server Administration Site enables you to manage and control all aspects of your Turbo Server. The default location of the Administration Site is: http://localhost:81, and consists of the following links:

- **Home**: This is the default page for the Turbo Server Administration Site and also is the Turbo Server Dashboard. For more information refer to Turbo Server Dashboard.

- **Apps**: This page lists all applications currently on your Turbo Server, enables you to add new applications and application versions, and manage categories. For more information refer to Managing Applications and Managing Categories.

- **Users**: This page provides a list of active and inactive users on your Turbo Server, along with a license summary. For more information refer to Managing Users.

- **Servers**: This page lists all servers associated with Turbo Server, including the primary server as well as any additional external sites or third party web collaboration portals. For more information refer to Managing Servers.

- **Reports**: This page provides preconfigured customizable analytics reports, sorted according to Administration, Apps, and Users. For more information refer to Reports.

- **Admin**: This page contains a summary of your Turbo Server license, and information and options for configuring Turbo Server. For more information refer to Configuration and Customization.

#### Administrator Dashboard

The Turbo Server Dashboard provides an overview of the Turbo Server over a given time period. You can adjust this time period using **Date Range Control**. The dashboard is split into five sections: Top Apps, Volume, Key Statistics, Usage Breakdown, and Recent Activity. You can locate the dashboard by selecting the **Home** link from the Administration Site (it is also the default page for the Administration Site).

##### Volume

The Volume graph charts the total number of launches for your Turbo Server over a specific date range. These are broken down into one day periods on the horizontal axis. Launches for unpublished application versions are not included.

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

All applications on Turbo Server are managed from the **Applications** page of the Administration Site. Each new application is added to Turbo Server in the form of a Turbo Virtual Machine, or SVM. For more information about SVMs and Turbo Virtualization Technology refer to Turbo Server Technology.

##### Applications and Application Versions

Turbo Server manages Turbo Virtual Machines (**SVMs**) using two entities: **applications** and **application versions**. Each application can contain one or more application versions. For example, Firefox can have child application versions for Firefox 3, Firefox 3.5 and Firefox 4. Each application version corresponds to a specific **SVM**.

##### Adding an Application

Complete the following steps to add a new application to Turbo Server:

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

**Note:** When uploading SVM files, upload time is heavily dependent on file size. For any files over 500MB, there may be a long delay at the end of the upload process. For files over 2GB, the file will be too large to upload through the web interface. For these larger SVM files, use the command-line interface to upload the file (see Manage Turbo Server from the Command Line).

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

**Note:** The "Turbo_Id" JavaScript variable is composed from the following, *<Application Slug>-<Major Version Number>-<Minor Version Number>*.

**Note:** The embed code may not be backwards compatible between versions of Turbo Server. Please update and test the embed code for existing applications that are embedded on other sites when upgrading Turbo Server.

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

**Note:** When uploading SVM files, upload time is heavily dependent on file size. For any files over 500MB, there may be a long delay at the end of the upload process. For files over 2GB, the file will be too large to upload through the web interface. For these larger SVM files, use the command-line interface to upload the file (see Manage Turbo Server from the Command Line).

5. Once all profiles are completed, navigate back to the **Optimize** page.

6. All profiles created are now visible in Profiles section of the page. These profiles are sorted by the various platforms they were taken on. Select the **Update Model** link to create a model and optimize the application version.

After the Model Status changes to **Requested** the model can take a few minutes to complete. When the Model Status reads **Complete**, this indicates that the application version has successfully optimized and will automatically stream to users when launched from the Portal.

**Note**: In order for an application to be profiled, the entire SVM package must be cached on the system where the profile is being created. This is not a concern for applications that do not have a streaming model because the entire SVM will be downloaded and cached. However, for applications that have a streaming model, they will launch before the full SVM is cached. In this case, the application must be run long enough for the full SVM to be downloaded and cached in the background. At that point, the application should be closed and a new profile can be created.

##### Managing an Entry Point

The initial set of entry points corresponds the the **Shortcuts** specified in the application configuration before building the **SVM** package. Although specific entry points available to an application are determined when creating an **SVM** file, the appearance of the entry point can be managed in Turbo Server.

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

#### Managing Application Categories

Categories control the display and segregation of applications on the Portal Site. All categories are displayed on the left navigation bar of the Portal Site.

##### Adding a Category

Complete the following steps to add a new category:

1. Navigate to the **Apps** page and click the **Add Category** button on the bottom of the page.

2. Enter the following information:

	- **Name**: Category name displayed to users.

	- **Description**: Brief description of the category.
	
	- **Members**: List of applications in the category. Selecting the Delete icon removes the application from the category but does not delete it entirely. Use the Add button to add any applications to this category. Adds and removes do not take effect until after you select **Save**.
	
3. Select **Save**.

4. It may take up to ten (10) minutes for category updates to be visible on the Portal Site.

##### Managing Categories

Categories can be managed at the bottom of the **Apps** page. To revise the name or description of a category, select the category name in the listing. To delete a category select the **Delete** link in the category listing. Deleting a category does not delete or unpublish any applications associated with that category.

#### Manage Users

Turbo Server users are tracked and managed via the Administration Site. Users are entered manually or via automated import from LDAP or Active Directory directory services. Users can be viewed and managed on the **Users** page. You can also place users into groups to assign application permissions to multiple users at once. The **Users** page contains a list of existing users and user groups. From this page you can view user directories, status, recent activity and available actions. Displayed above the user list is the total number of licenses available and the number of licenses currently in use.

To manage a user, select the user name from the list on the **Users** page. The following fields are displayed on the page:

- **Name**: Full name of the user.

- **Login Name**: The unique login name for the user.

- **Directory Information**: Information about the directory service for the user if the user was imported from an external directory service.

- **Enabled**: Determines whether a user can launch applications from Turbo Server. After a user is disabled he no longer consumes a seat.

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

Turbo Server automatically creates an Anonymous Users group. Users discovered when the authentication mode is set to Anonymous are added to the Anonymous Users group. You can assign special permissions to these users by selecting **Manage Anonymous Users** at the top of the **Users** page.

##### Managing User Permissions

**User Permissions** enable you to allow or block users from running certain applications. These rules override default permissions. For example, you can block Firefox by default but allow user John Doe to launch the application. Turbo Server also supports nested groups: permissions for one group apply to users and groups within that group.

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

Using Turbo Server you can add an external directory service, such as Active Directory. This enables you to manage users with the touch of a button and easily import existing users and groups into Turbo Server. Complete the following steps to add an external directory service:

1. Open a Turbo Server administration site page in your web browser.

2. Choose the **Users** category from the top navigation bar.

3. Select **Manage Directory Services**.

4. Select **Add Service**. The **Add Directory Service** screen displays.

5. Enter your specific settings into Turbo Server. Each section is detailed below.

**Note**: When synchronizing external directory-services containing of over 5,000 users, the command-line utility, Server.exe, should be used instead of the Administrator web site. For more information on using Server.exe, see Manage Turbo Server from the Command Line.

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
         <td colspan="1">In the <strong>Type</strong> section you can choose the type of the directory service from which to import users and groups. <br> There is variability in location, security, and schema settings for directory services. Turbo Server provides two templates: <strong>Active Directory</strong> and <strong>Other LDAP</strong>. The local Active Directory can be found by selecting <strong>Try Local.</strong> When found, working connection settings are set automatically. <br class="atl-forced-newline"> To synchronize with the local Microsoft Windows domain's Active Directory service, select <strong>Try Local</strong>. This loads default settings into the <strong>Connection</strong> and <strong>Directory Schema</strong> fields. For large directories this can take several minutes. <br class="atl-forced-newline"> If the operation is unsuccessful, continue to the <strong>Choosing Your Connection Settings</strong> section. <br class="atl-forced-newline"> If the operation is successful, continue to the <strong>Choosing the Directories to Synchronize</strong> section.</td>
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
         <td colspan="1">&nbsp;Allows the administrator to specify which names in the LDAP directory will be imported into the Turbo Server user information. For more information, see <strong>Directory Schema</strong>, further down this page</td>
      </tr>
      <tr>
         <td colspan="1"><strong>Synchronized Items</strong></td>
         <td colspan="1">Used to identify items in the directory tree that should be synchronized with Turbo Server. For more information, see <strong>Choosing Items to Synchronize</strong>, further down this page.</td>
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

#### Manage Servers

Depending on the scope of your Turbo Server implementation you can add additional servers to distribute the workload and improve performance. If you are deploying applications from an external site on another server, you must add that server to Turbo Server.

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

- **Alert Report**: Presents a record of all Turbo Server alerts. Common alerts include errors, creation of applications, application versions, categories.

##### Application Reports

- **App Inventory Report**: Provides detailed information for each application in your Turbo Server.

- **App Session Report**: Presents a detailed record of each application session.

- **App Usage Report**: Provides a detailed breakdown and comparison of the usage for each application.

##### User Reports

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

The **Admin** page provides options to configure and customize Turbo Server. The page is divided into the following sections:

- **License**: Provides an overview of information associated with the current Turbo Server license, including number of seats, allowed portals,  computer name, and machine identifier. If server users are licensed to run applications on more than one machine, this number is reflected here. This section also contains a link to add a **New License**; you can use this to update an existing license as well.

- **Sync**: Configures client synchronization settings.

- **Administrator Email**: Users are directed to this email address if they encounter any errors or issues while using Turbo Server.

- **Administrators**: The administrative web pages can be restricted to a subset of the users known to the Turbo Server. If no users are contained in this group, access will be open to anyone able to access the port of the administration site. When at least one user is contained in the group, a login form is presented to any user who hasn't already been authenticated from his browser. Only the members of the administrators group (including members of groups that are members of the administrators group) are allowed access. Note that this group appears in the standard user groups list and is editable from there as well. SSL access to the administration site can be enabled by editing the primary server settings, exactly as it is done for a portal site.

- **Logo**: This image appears at the top of the Portal site. The image is resized to a width of 185 pixels (with the aspect ratio maintained), and is converted to .PNG format.

- **Authentication Type**:  Authentication type that users must supply to access applications. Folder sync and app sync are not available to anonymous users.

##### Synchronization

Synchronization settings are found by selecting **Sync Settings** on the **Administrative Settings** page. There are two options which are available to configure:

- **Storage Path**: the physical location where sync data is stored on the web server. This directory must be accessible from the primary portal web server. The value can be a local path or a path to a UNC share, such as \\myhost\sharename.

- **Quota**: the amount of sync data users can keep on the server. The default is 100MB, but can be any value up to 2,000,000,000MB. When the quota is reached the user is notified and they can longer upload files to the server.

### Manage Applications

In this section you'll learn how to manage containers and deploy them with Turbo Server.

#### Create Applications

In this section you will learn how to create Turbo applications that can deploy from Turbo Server. Turbo applications are created from existing applications by converting them into **SVM** file format.

##### Virtualize Application with Turbo Studio

To be hosted on Turbo Server applications must be converted into Turbo containers (**SVM** files) using the Turbo Studio. The Turbo Studio monitors the installation of your application, analyzes the installation, and constructs a virtual package which you can upload to Turbo Server. Experienced users can convert most applications for Turbo in minutes.

To create an **SVM** using Turbo Studio, Project Type must be set to **Component**. containers with compressed payloads **cannot** be optimized for streaming using Turbe Server. To build a streaming container, **Compress Payload** in Settings must remain unchecked during the build process.

Refer to the Turbo Studio help documentation for detailed instructions on how to create a Turbo application.

#### Export Application from Turbo.net Hub

Turbo.net Hub provides preconfigured images that can be exported to **SVM** files for use in your Turbo Server using the Turbo CLI.

```
# Pull the desired image from the repository
> turbo pull firefox
Downloading image firefox:61.0.2 from https://turbo.net/users/mozilla
Using image firefox-base:61.0.2 from local
Pull complete

# Export the image to svm 
> turbo export --type=svm firefox c:\images\firefox.svm
Using image firefox:61.0.2 from local
Output image: c:\images\firefox.svm
```

#### Publish Applications

In this section you will learn about deploying applications to users with Turbo Server.

##### Publish to the Turbo Server Portal

The Turbo Server Portal Site is the default mechanism for delivering streaming applications to your users. The Portal Site automatically configures during Turbo Server setup and can be customized via the Administration Site.The default location of the site is: http://localhost/.

To make an application visible on the Portal Site, publish an application version on the Administration Site. For more information refer to Managing Applications.

##### Publish to an External Site

Turbo Server supports delivery from custom external websites with additional license certification. Standard Turbo Server licenses allow two sites by default: the Administration and Portal Sites. You can upgrade license certificates to enable application delivery from external sites: contact your Turbo sales representative at sales@turbo.net.

When adding a portal site hosted on another server, you must add that server on the Servers page of the Administration Site. The role of the new server must be set to Portal. When sending users the link to an external site, verify that the link matches the web address entered. For more information about adding a new server refer to Managing Servers.

**Utilizing Embed Code**

After creating an application version, you will find HTML code located on the application version page in the Embed section. A Turbo Feed can be set up for any Turbo Server running in anonymous mode (see Configuration and Customization) with a valid license and published apps. Like the turbo.net live feed, the Server feed can be added to any website by adding a few lines of HTML. An example use of the feed is below.

    <script type="text/javascript">
    Turbo_PortalRoot = 'http://[SERVER]:[PORT]/';
    Turbo_Id = 'Firefox-5.0.0.0';
    </script>
    <script language="javascript" type="text/javascript" src="http://[SERVER]:[PORT]/feed"></script>

**Auto-Launch Applications from the Portal Site**

Applications can be auto-launched on the Portal site by passing an additional parameter in the URL. The standard URL for the application detail page is *http://[Server]/apps/[Application Slug]*. To have the application auto-launch, simply append the **?run=true** parameter to the end of the URL. For example: *http://[Server]/apps/[Application Slug]?run=true*.

**Turbo Parameters**

This section outlines the possible parameters for the Turbo Feed.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Parameter Name</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Javascript Type</p>
            </div>
         </th>
         <th data-column="2">
            <div>
               <p>Required</p>
            </div>
         </th>
         <th data-column="3">
            <div>
               <p>Description</p>
            </div>
         </th>
         <th data-column="4">
            <div>
               <p>Notes</p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_PortalRoot<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p><span style="color: rgb(51,51,51);">Yes</span></p>
         </td>
         <td>
            <p>This is the Portal Site URL</p>
         </td>
         <td>
            <p>Non.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_Id<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>Yes</p>
         </td>
         <td>
            <p>This is the Application identifier</p>
         </td>
         <td>
            <p>This is the value that is seen in the portal under the apps root. For example, if the application's URL is <em><a href="http://portal/apps/notepad-7.6" class="external-link" rel="nofollow">http://portal/apps/notepad-7.6</a></em>, the Turbo_Id is notepad-7.6.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_BackgroundColor</strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>No</p>
         </td>
         <td>
            <p>Specifies what the background color of the frame should be</p>
         </td>
         <td>
            <p>String value hex encoded in the form "rrggbb" (default = "ffffff", white).</p>
         </td>
      </tr>
</table>
<br>

##### Publish Using Third-Party Software

You can integrate Turbo Server third-party web collaboration tools and portal software, such as:

- Microsoft Office SharePoint Server

- Novell Teaming

- IBM WebSphere

Publishing an application to a third-party web portal requires the same license certificate upgrade required for publishing to a custom external site. For more information about license upgrades needed to publish on an external site and how to utilize Turbo embed code refer to Publishing to an External Site. 

### Advanced Topics

This section describes advanced topics you may encounter when implementing Turbo Server.

#### Running Applications when Offline

Applications can be enabled to be run offline through the **Desktop Registration** setting in an application's settings page on the Turbo Server Administrator portal. To enable **Desktop Registration**, see the instructions at Manage Applications.

For an application to be registered to the user's machine, either the **Register on Launch** check-box must be checked in the **Desktop Registration** setting for the given application; or the user must register the application themselves in the Turbo Launcher. If an application is set to **Register on Launch**, then the first time a user opens the application it will be registered to the user's machine and added to their Windows Start Menu. If this setting is not enabled, the user must register the application to the desktop from the console. This can be done by following the steps, below:

1. Sign into the Turbo Server from the plug-in.

2. Navigate to **All Applications**

3. Click on the desired application. Application details should open on the right panel of the Console

4. Right-click on the version of the application that should be registered.

5. The context menu will state whether the application is **Available Offline** or **Online Only**.

	a. If the application is already available offline, no further steps need to be taken

	b. If the application is available **Online Only**, proceed to step 6

6. If the option **Add to Start Menu** is available, select **Add to Start Menu**

In order for an application to be available offline, it must be registered to the desktop and left open for enough time that the entire application can be streamed and cached to the user's local machine. To ensure that this is the case, leave the application open after completing the above steps. Smaller applications will cache relatively quickly, while larger applications may take several minutes.

To check that the application has been fully cached:

1. Navigate to **All Applications** in the Turbo Launcher.

2. Click on the desired application.

3. Right-click on the version of the application. 

The context menu should show Available Offline. If this is not the case, reopen the application or continue to leave it open.

#### Manually Configure Turbo Server

Turbo Server enables you to manually configure settings during setup. Using this process you can control the database connection strings used by Turbo Server and the domain names for the Administration and Portal Sites. Turbo Server supports the use of any connection string format used by Microsoft SQL Server.

Complete the following steps to install Turbo Server:

1. Download the Turbo Server setup file and save it locally.

2. Open a Microsoft Windows Command Prompt and navigate to the directory of the saved setup file.

3. Enter the following command: **Setup.exe /noprovision**. This brings up a file installation wizard. Navigate through the prompts until file installation is complete, and then select **Finish**.

Complete the following steps to manually configure Turbo Server:

1. Return to the Microsoft Windows Command Prompt and navigate to the directory where the installation files are saved. You specified this location in the previous step; the default location is C:\Program Files\Turbo Server.

2. To manually configure Turbo Server, type the command: **Server.exe /provision [ADMINISTRATOR EMAIL]**. Add any of the optional command-line arguments from the following table. Omitting any command-line arguments causes the default setting to apply.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Command Line Argument</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Setting</p>
            </div>
         </th>
      </tr>
      <tr>
         <td style="white-space: nowrap">
            <p><code>/dblibrary "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Library;"</code></p>
         </td>
         <td>
            <p>Configures the connection string for the library database.</p>
         </td>
      </tr>
      <tr>
         <td style="white-space: nowrap">
            <p><code>/dbmanager "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Manager;"</code></p>
         </td>
         <td>
            <p>Configures the connection string for the manager database.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>/wwwsite <span class="nolink">http://www.[MYSITE].com:[PORT]</span></code></p>
         </td>
         <td>
            <p>Assigns the port and fully qualified domain name for the portal site.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>/adminsite <span class="nolink">http://www.[MYSITE].com:[PORT]</span></code></p>
         </td>
         <td>
            <p>Assigns the port and fully qualified domain name for administration site.</p>
         </td>
      </tr>
</table>
<br>
The following is a sample command to set all four settings:
	
	server.exe /provision admin@acme.com /dblibrary "Integrated Security=true;Data Source=acme;Initial Catalog=Library;" /dbmanager "Integrated Security=true;Data Source=acme;Initial Catalog=Manager;" /wwwsite http://www.acme.com /adminsite http://www.acme.com:81

**Note**: The Microsoft SQL Server connection string will depend on the Microsoft SQL Server configuration. For more information about the connection string, contact the database administrator. Before configuring the Turbo Server, confirm that the running user for the Windows service has appropriate access rights to the database. The service runs under the Local System account by default but the running user can be changed in the Windows services settings.

Select **Enter** to submit the command and choose **Y** to proceed.

Fully-qualified domain names can be specified on the **Servers** page of the Administration Site. For more information about modifying servers refer to Managing Servers.

#### Configure Turbo Server Security

This section explains how to configure Turbo Server's security settings on common Microsoft Windows platforms. These settings restrict external connections to the Administration Site, enable external connections to the Portal Site and enable the Turbo JavaScript API for use with external web portals.

**Note**: To enable remote administration for external connections apply the instructions below.

##### Microsoft Windows Vista

To configure Turbo Server security on Microsoft Windows Vista, you must enable Microsoft Windows Firewall. The default settings of Microsoft Windows Firewall block all external connections to the Administration Site (assigned to port 81 by default) and Portal Site (assigned to port 80 by default). After Microsoft Windows Firewall is enabled, you must add exceptions to the default settings to provide licensed users access the Portal Site and the Turbo JavaScript API.

Complete the following steps to enable Microsoft Windows Firewall with licensed access to the Portal Site:

1. Open the **Control Panel** and select **Microsoft Windows Firewall**.

2. Turn Microsoft Windows Firewall on.

3. Open the **Exceptions** tab.

4. Click **Add Port**.

5. Assign a name to the exception and set **Port** to the Portal Site port assigned during installation (the default is port 80).

##### Microsoft Windows Server 2008 and Microsoft Windows 7

To secure the Turbo Server Administration Site on Microsoft Windows Server 2008 and Microsoft Windows 7, enable Microsoft Windows Firewall with Advanced Security. The default settings of Microsoft Windows Firewall with Advanced Security block all external connections to the Administration Site (assigned to port 81 by default) and the Portal Site (assigned to port 80 by default). After Microsoft Windows Firewall with Advanced Security is enabled, add exceptions to the default settings to provide licensed users with access the Portal Site and the Turbo JavaScript API.

Complete the following steps to enable Microsoft Windows Firewall with Advanced Security on Microsoft Windows Server 2008 with licensed access to the Portal Site:

1. Open the **Control Panel** and select **System and Security**.

2. Open **Administrative Tools**, then select **Windows Firewall with Advanced Security**.

3. Select **Inbound Rules** and choose **New Rule**.

4. Select **Port**.

5. Select TCP and Specific local ports. Add the port assigned to the Portal Site during installation (the default is port 80).

6. Select **Allow the Connection**.

7. Select the domain, private, and public profiles.

8. Add a name and description.

#### Manage Turbo Server from the Command Line

`Server.exe`, located in the installation directory of Turbo Server (usually C:\Program Files\Turbo Server), can be used as a command-line tool by specifying the admin option. This tool enables you to add and update applications to the Turbo Server library from the command line, and add large applications (over 2GB) to the Turbo Server. The Turbo Server administrator portal does not support uploading SVM files over 2GB.

##### Requirements for Using Server.exe

- Run the command window as Administrator (right-click Run as Administrator).

- Each application must be uniquely named. This prevents a naming collision.

- Application version numbers must be in the correct format [major].[minor].[buld].[revision].

- Not all languages are supported at this time.

- Valid architecture specifications include x86, x64, and AnyCpu

- When working in the command window place quotation marks around paths that include a space.

##### Server.exe Command Format

`Server.exe` can be used with the following arguments to manage provisioning, uninstall, upgrade, and service recycling:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>Server.exe /provision</code> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;[turbo admin email address] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Optional parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/dblibrary&nbsp;</code>[library database connection]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/dbmanager&nbsp;</code>[manager database connection]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/adminsite&nbsp;</code>[administration site URL]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/wwwsite&nbsp;&nbsp;&nbsp;</code>[portal site URL] (creates a new Turbo deployment originating from this server)<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/silent&nbsp;&nbsp;&nbsp;&nbsp;</code>(installs Turbo without user prompt)</p>
         </td>
         <td>
            <p>Creates the Turbo Server data and sites.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>Server.exe /uninstall</code></p>
         </td>
         <td>
            <p>Uninstalls Turbo from this server.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>Server.exe /restart</code> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;[Apache process Id]</p>
         </td>
         <td>
            <p>Restarts Apache web service gracefully.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>Server.exe /?, -?, ?, /help, -help, help</code></p>
         </td>
         <td>
            <p>Prints this usage information.</p>
         </td>
      </tr>
</table>
<br>

##### Server.exe admin Command Format

Server.exe can also be used to create and update applications, as well as to manage other server settings. This is done by specifying any of the given topics after the Server.exe admin command.

**Server.exe admin /create**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>Server.exe admin /create</code> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[app display name] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters for new version:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[full path to .svm or .turbo file] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required for .svm files:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[app version] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Optional for .svm files:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/lang&nbsp;&nbsp;&nbsp;</code>[IETF code like "en-us"] (default is system language)<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/sku&nbsp;&nbsp;&nbsp;&nbsp;</code>[SKU name] (default is "Default")<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/arch&nbsp;&nbsp;&nbsp;</code>[architecture like <code>x86</code> or <code>x64</code>] (default is <code>AnyCpu</code>)</p>
         </td>
         <td>
            <p>Creates a new application or a new application version. In order to create an application version the application must be created first.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Create a new application (must do this before creating an application version)**:

	Server.exe admin /create /a "My Application"

- **Create a new application version**:
	
	Server.exe admin /create /a "My Application" /v 1.0.0.0 /f

- **Create a new application with a version from a .turbo file**:

	Server.exe admin /create /f "D:\Installation Files\myapplication.turbo"


**Server.exe admin /update**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>Server.exe admin /update</code> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/f&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[full path to .svm or .turbo file] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required for .svm files:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[app display name] <br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>[app version] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Optional for .svm files:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/lang&nbsp;&nbsp;&nbsp;</code>[IETF code like "en-us"] (default is system language)<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/sku&nbsp;&nbsp;&nbsp;&nbsp;</code>[SKU name] (default is "Default")<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/arch&nbsp;&nbsp;&nbsp;</code>[architecture like <code>x86</code> or <code>x64</code>] (default is <code>AnyCpu</code>)</p>
         </td>
         <td>
            <p>Creates a new application version using the given SVM file.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Update an application version**:  
  
```	 
  Server.exe admin /update /a "My Application" /v 1.0.0.0 /f "D:\Installation Files\myapplication.svm" /lang "en-us" /sku "Premier Edition" /arch "x86"
```  
  
- **Update to latest version of Turbo VM**:  
The latest official Turbo VM release may be obtained from the Turbo Hub using the turbo.exe command utility from Turbo Client.
```  
  # Pull latest Turbo VM from Hub
  turbo pull xvm
  
  # Export the latest Turbo VM to a file
  turbo export xvm c:\path\to\xvm.exe
```  
It is strongly recommended that the existing applications are tested against the new Turbo VM before updating server to avoid any unexpected incompatibilities. This can be done from the command line by running:
```  
  # Test your application using the new VM
  C:\path\to\xvm.exe /XEntry=c:\path\to\your-app.svm
```  
Use the admin tool to update the Turbo VM used to run applications from Turbo Server.
```  
  Server.exe admin /update /xvm c:\path\to\xvm.exe
```  
Applications will use the Turbo VM version from when the SVM image is pushed to Turbo Server. Re-upload the application SVM file using the administration portal or server admin /update command to apply the updated Turbo VM to your existing applications.
  
**Server.exe admin /client**  

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current settings for the client.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code><code>hide</code></code></p>
         </td>
         <td>
            <p>Hides the console for users when installed</p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><code>show</code></td>
         <td colspan="1">
            <p>Shows the console for users when installed</p>
            <p>Note: "show" is the default setting for the client</p>
         </td>
      </tr>
      <tr>
         <td colspan="1"><code>help</code></td>
         <td colspan="1">Prints help information</td>
      </tr>
</table>
<br>
Examples:

- **Print the current console settings**:

	Server.exe admin /client hide

- **Hide the console on user computers**:

	Server.exe admin /client hide

- **Show the console on user computers**:

	Server.exe admin /client show


**Server.exe admin /directory-services**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current list of directory services.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>new &lt;login prefix&gt;</code></p>
         </td>
         <td>
            <p>Creates a new directory service with default settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>delete &lt;login prefix&gt;</code></p>
         </td>
         <td>
            <p>Deletes the given service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print the current directory services**:

	Server.exe admin /directory-services

- **Create a new directory service with prefix "loc"**:

	Server.exe admin /directory-services new loc

- **Delete the "loc" directory service**:

	Server.exe admin /directory-services delete loc


**Server.exe admin /directory-service**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>discover-local-ad</code></p>
         </td>
         <td>
            <p>Attempts to connect to local Active Directory. If it succeeds, the connection and schema settings are printed.</p>
         </td>
      </tr>
</table>
<br>

**Server.exe admin /directory-service &lt;login prefix&gt;**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current settings for the directory service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt;</code></p>
         </td>
         <td>
            <p>Prints the current value of &lt;property&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt; &lt;value&gt;</code></p>
         </td>
         <td>
            <p>Sets the value of &lt;property&gt; to &lt;value&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>set [&lt;file&gt;]</code></p>
         </td>
         <td>
            <p>Imports the settings from a file, or standard input if no file is specified. Settings files are in the same format as the output of the print function.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>discover-local-ad</code></p>
         </td>
         <td>
            <p>Attempts to connect to local Active Directory. If it succeeds, the connection and schema settings are printed.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>discover</code></p>
         </td>
         <td>
            <p>Scans the directory service for recommended schema settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>directories</code></p>
         </td>
         <td>
            <p>Prints the subdirectories within this directory service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>groups</code></p>
         </td>
         <td>
            <p>Prints the user groups within this directory service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>sync</code></p>
         </td>
         <td>
            <p>Synchronizes users and groups from the directory service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>items</code></p>
         </td>
         <td>
            <p>Prints the current synchronized items.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>items add (Group|Subdirectory) &lt;distinguished name&gt;</code></p>
         </td>
         <td>
            <p>Adds an item to be synchronized.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>items clear</code></p>
         </td>
         <td>
            <p>Deletes all sync items.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
An external directory service may have particular configurations which a directory service must accommodate. In addition to standard settings like name and description, there are the following important categories of options:

- Connection settings: host, port, binding type, username, password

- Schema settings: user and group attribute names used by the external directory service

- Synchronized items: if the entire external directory should not be imported, the items commands should be employed to add specific user groups or LDAP directories to include

The following examples describe a typical set of steps to set up a directory service for the local Active Directory.

- **Print the settings of directory service "ad"**:

	Server.exe admin /directory-service ad

- **Change the name of directory service "ad"**:

	Server.exe admin /directory-service ad name "Local Active Directory"

- **Dump the settings of directory service "ad" to a file**:

	Server.exe admin /directory-service ad print > ad-settings.txt

- **Discover the schema of directory service "ad"**:

	Server.exe admin /directory-service ad discover

- Copy/paste the recommended schema from the console to the ad-settings.txt file.

- **Print all the groups found in "ad"**:

	Server.exe admin /directory-service ad groups

- **Specify a user group to be synchronized**:

	Server.exe admin /directory-service ad items add Group "cn=All,dc=acme,dc=com"

- **Set all the settings of "ad" from a file**:

	Server.exe admin /directory-service ad set ad-settings.txt


**Server.exe admin /license**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current license.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>set &lt;file&gt;</code></p>
         </td>
         <td>
            <p>Sets the license to the contents of the given text file.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print the current license**:

	Server.exe admin /license print

- **Set the current license**:

	Server.exe admin /license set ss-license.txt


**Server.exe admin /server**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current primary server settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt;</code></p>
         </td>
         <td>
            <p>Prints the current value of &lt;property&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt; &lt;value&gt;</code></p>
         </td>
         <td>
            <p>Sets the value of &lt;property&gt; to &lt;value&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print the current primary server settings**:

	Server.exe admin /server

- **Print the current primary server IP address**:

	Server.exe admin /server ip-address

- **Set the current primary server web address**:

	Server.exe admin /server web-address https://acme/turbo

- **Set the SSL certificate file path**:

	Server.exe admin /server ssl-certificate-file c:\programdata\acme\cert.txt


**Server.exe admin /sync**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current sync settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt;</code></p>
         </td>
         <td>
            <p>Prints the current value of &lt;property&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt; &lt;value&gt;</code></p>
         </td>
         <td>
            <p>Sets the value of &lt;property&gt; to &lt;value&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>

There are 2 properties associated with the **/sync** command:

1. **storage-path**: This is the physical path to the location where sync data will be stored. For example, `\\myhost\sync\`

2. **quota-megabytes**: The default maximum amount of sync data which can be stored, per user, in megabytes.

Examples:

- **Print the sync settings**:

	Server.exe admin /sync

- **Print the value of property "storage-path"**:

	Server.exe admin /sync storage-path

- **Set the user quota to 2 GB**:

	Server.exe admin /sync quota-megabytes 2000


**Server.exe admin /users**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current users and groups.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>authentication-type (Anonymous|Forms)</code></p>
         </td>
         <td>
            <p>Changes the current authentication type.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>ticket-timeout</code></p>
         </td>
         <td>
            <p>Gets or sets the number of minutes that a login ticket is valid when "remember me" is selected. The default is 1-week (10,080 minutes).</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print information about current users and groups**:

	Server.exe admin /users

- **Change the authentication type to "Forms"**:

	Server.exe admin /users authentication-type Forms
        

- **Change the login timeout duration to four weeks**:

	Server.exe admin /users ticket-timeout 40320


**Server.exe admin /user-groups**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current list of user groups.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>new &lt;name&gt;</code></p>
         </td>
         <td>
            <p>Creates a new user group with default settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>delete &lt;id&gt;</code></p>
         </td>
         <td>
            <p>Deletes the given group.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print the current groups**:

	Server.exe admin /user-groups

- **Create a new group with name "Power Users"**:

	Server.exe admin /user-groups new "Power Users"

- **Delete group 2**:

	Server.exe admin /user-groups delete 2


**Server.exe admin /user-group <id>**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Option</p>
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
            <p><code>print, (none)</code></p>
         </td>
         <td>
            <p>Prints the current settings for the user group.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt;</code></p>
         </td>
         <td>
            <p>Prints the current value of &lt;property&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>&lt;property&gt; &lt;value&gt;</code></p>
         </td>
         <td>
            <p>Sets the value of &lt;property&gt; to &lt;value&gt;.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>set [&lt;file&gt;]</code></p>
         </td>
         <td>
            <p>Imports settings from a file, or standard input if no file is specified. Settings files are in the same format as the output of the print function.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>clear</code></p>
         </td>
         <td>
            <p>Removes all members from the group.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>help, h, ?, -?, /?, etc.</code></p>
         </td>
         <td>
            <p>Prints help information.</p>
         </td>
      </tr>
</table>
<br>
Examples:

- **Print the settings of group 2**:

	Server.exe admin /user-group 2

- **Print the properties and members of group 2**:

	Server.exe admin /user-group 2 print

- **Remove all members from group 2**:

	Server.exe admin /user-group 2 clear

#### Turbo JavaScript API

When publishing applications to external sites, Turbo provides a JavaScript API to enable control over the Turbo Client installation, launching applications and deploying applications to the desktop. The following table lists and describes the method calls available in the JavaScript API.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Method Call</p>
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
            <p><strong>SpoonEntry.RunApp (string ConfigUrl, boolean Register, string BrandingUrl)</strong></p>
         </td>
         <td>
            <p>Launches an application based on a string which denotes the absolute URL to an application configuration. <br>There is an optional Boolean parameter which indicates whether or not the application should be deployed to the users' desktop. <br>Example configuration URL:</p>
            <pre><code>http://[SERVER_NAME]/Config/?a=[APPLICATION_NAME]&amp;v=[VERSION_NUMBER]&amp;e=[ENTRY_POINT_NAME]</code></pre>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>SpoonEntry.IsPluginInstalled (callback)</strong></p>
         </td>
         <td>
            <p>Checks whether the Turbo Client is installed on the client machine.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>SpoonEntry.RedirectToInstaller ()</strong></p>
         </td>
         <td>
            <p>Prompts user to install the Turbo Client.</p>
         </td>
      </tr>
</table>
<br>
Use the following code to reference the Turbo JavaScript API:

	<script language="javascript" src="http://[SERVER]/Plugin/Api/" type="text/javascript"></script>
	
**Example**: Create a link which launches 7-Zip.

	<script language="javascript" src="http://[SERVER]/Plugin/Api/" type="text/javascript"></script>
	<a href="#" onclick="(new SpoonEntry()).RunApp('http://[SERVER]/Config/?a=7Zip'); return false;">Launch 7-Zip</a>
	
**Example**: Create a link which launches 7-Zip, registers a Start Menu shortcut and uses a branding URL.

	<script language="javascript" src="http://[SERVER]/Plugin/Api/" type="text/javascript"></script>
	<a href="#" onclick="(new SpoonEntry()).RunApp('http://[SERVER]/Config/?a=7Zip', true, 'http://url.to.branding/graphic.gif'); return false;">Launch 7-Zip</a>
	
**Example**: Create a link which launches Firefox version 5.0.0.0.

	<script language="javascript" src="http://[SERVER]/Plugin/Api/" type="text/javascript"></script>
	<a href="#" onclick="(new SpoonEntry()).RunApp('http://[SERVER]/Config/?a=Firefox5&v=5.0.0.0'); return false;">Launch Firefox</a>
	
**Example**: Prompt the user to install the Turbo Client if it is not already installed on the machine.

	<script language="javascript" src="http://[SERVER]/Plugin/Api/" type="text/javascript"></script>
	<script language="javascript" type="text/javascript">
		SpoonEntry.IsPluginInstalled(function(isInstalled){if(!isInstalled) SpoonEntry.RedirectToInstaller()})
	</script>
	
##### Turbo Feed

The Turbo Feed provides a separate JavaScript API to embed a button within a webpage. This API enables user control over which application to launch and  button appearance. The following table lists and describes the variables that define the Turbo Feed:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Parameter Name:</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Javascript Type:</p>
            </div>
         </th>
         <th data-column="2">
            <div>
               <p>Required:</p>
            </div>
         </th>
         <th data-column="3">
            <div>
               <p>Description:</p>
            </div>
         </th>
         <th data-column="4">
            <div>
               <p>Notes:</p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_PortalRoot<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p><span style="color: rgb(51,51,51);">Yes</span></p>
         </td>
         <td>
            <p>This is the Portal Site URL</p>
         </td>
         <td>
            <p>Non.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_Id<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>Yes</p>
         </td>
         <td>
            <p>This is the Application identifier</p>
         </td>
         <td>
            <p>This is the value that is seen in the portal under the apps root. For example, if the application's URL is <em>http://portal/apps/notepad-7.6</em>, the Turbo_Id is notepad-7.6.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_BackgroundColor</strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>No</p>
         </td>
         <td>
            <p>Specifies what the background color of the frame should be</p>
         </td>
         <td>
            <p>String value hex encoded in the form "rrggbb" (default = "ffffff", white).</p>
         </td>
      </tr>
</table>
<br>
To embed a Turbo Feed, you must first initialize the Turbo Variables above to the correct values with javascript:

	<script type="text/javascript">
	Turbo_PortalRoot = 'http://[SERVER]:[PORT]/';
	Turbo_Id = '7-zip-9.20';
	</script>
	
After the Turbo Variables are set, use the following code to embed the Turbo Feed in an iframe:

	<script language="javascript" type="text/javascript" src="http://[SERVER]:[PORT]/feed"></script>
	
**Example**: Embed a Button to Launch Firefox 5.0.0.0.

	<script type="text/javascript">
	Turbo_PortalRoot = 'http://[SERVER]:[PORT]/';
	Turbo_Id = 'Firefox-5.0.0.0';
	</script>
	<script language="javascript" type="text/javascript" src="http://[SERVER]:[PORT]/feed"></script>
	
**Note**: Embedding a Turbo Feed is only available if the server Authentication Type is set to "Anonymous" (see Configuration and Customization).

#### Using Installed and Registered containers Together

When an application is added to the Start Menu, it should function as if it were natively installed. If it is not working, troubleshooting steps should be taken, such as verifying file associations in the registry.

For example: If you are using local version of Microsoft Office Outlook and a virtual browser, selecting a link in an email should open the link in the virtual browser as long as the file associations in the registry for .htm, .html etc. are set to use the virtual browser. If these are correct, the protocols (http, https) also need to be set to use the correct program. To verify this, complete the following steps:

- First, ensure the application has been added to the Start menu

	- Click on the Turbo icon in the task bar

	- Click **Applications**

	- Click the name of the selected application
	
	- You should see **Remove from Start Menu**. This means the application has been registered to the desktop.

- Next check the registry keys

	- Open the Start menu

	- In the Search box, type regedit

	- Search for any of the file extension or protocol values, such as http or.html

	- In the *HKEY_CURRENT_USER\Software\Classes* section of the registry each of the extensions and protocols will be listed.

		- In each item, there will be a registry entry titled (Default). The Data, or value, of the key should reflect the container title. For example, if you are using Firefox as your default, the value would be FirefoxHTML
		
		**Note**: The value reflects what is called a Program ID. You can find the correct Program ID in the configuration file by searching for the section labeled ProgID.
		
#### Turbo Server Authorization Web Service

When integrating with existing permissions systems, Turbo provides a web service for granting and revoking access to applications. The web service is available as a REST API with the following capabilities:

- **View** access to an application or category for a user or group

- **Grant** access to an application or category for a user or group

- **Revoke** access to an application or category for a user or group

<table>
      <tr>
         <th data-column="0">
            <div>Service Call</div>
         </th>
         <th data-column="1">
            <div>REST-API</div>
         </th>
      </tr>
      <tr>
         <td>View Application Access</td>
         <td>
            <p><u>HTTP GET</u><br>URL: <em><span>http://[SERVER]:[PORT]/0.1/lib/app/[APPLICATION]/permissions</span></em></p>
            <p><u>HTTP HEADERS</u><br>X-Spoon-User: [Turbo Server Administrator]<br> X-Spoon-Password: [Password]</p>
         </td>
      </tr>
      <tr>
         <td>View Category Access</td>
         <td>
            <p><u>HTTP GET</u><br>URL:<em> <span>http://[SERVER]:[PORT]/0.1/lib/cat/[CATEGORY]/permissions</span></em></p>
            <p><u>HTTP HEADERS</u><br>X-Spoon-User: [Turbo Server Administrator]<br> X-Spoon-Password: [Password]</p>
         </td>
      </tr>
      <tr>
         <td>Grant Application Access</td>
         <td>
            <p><u>HTTP POST<br></u>URL: <em>h<span>ttp://[SERVER]:[PORT]/0.1/lib/app/[APPLICATION]/permissions</span></em></p>
            <p><u>HTTP HEADERS<br></u>X-Spoon-User: [<span class="confluence-link">Turbo Server Administrator</span>]<br>X-Spoon-Password: [Password]</p>
            <p><u>HTTP BODY</u><br>{"_id":"[LOGIN].[DIRECTORY PREFIX]","permitted":"true"}</p>
         </td>
      </tr>
      <tr>
         <td>Grant Category Access</td>
         <td>
            <p><u>HTTP POST</u> <br>URL: <em><span>http://[SERVER]:[PORT]/0.1/lib/cat/[CATEGORY]/permissions</span></em></p>
            <p><u>HTTP HEADERS</u> <br>X-Spoon-User: [Turbo Server Administrator] <br>X-Spoon-Password: [Password]</p>
            <p><u>HTTP BODY</u> <br>{"_id":"[LOGIN].[DIRECTORY PREFIX]","permitted":"true"}</p>
         </td>
      </tr>
      <tr>
         <td>Revoke Application Access</td>
         <td>
            <p><u>HTTP POST</u> <br>URL: <a rel="nofollow">http://[SERVER]:[PORT]/0.1/lib/app/[APPLICATION]/permissions</a></p>
            <p><u>HTTP HEADERS</u> <br>X-Spoon-User: [Turbo Server Administrator]<br> X-Spoon-Password: [Password]</p>
            <p><u>HTTP BODY</u><br> {"_id":"[LOGIN].[DIRECTORY PREFIX]","permitted":"false"}</p>
         </td>
      </tr>
      <tr>
         <td>Revoke Category Access</td>
         <td>
            <p><u>HTTP POST</u> <br>URL: <em><span>http://[SERVER]:[PORT]/0.1/lib/cat/[CATEGORY]/permissions</span></em></p>
            <p><u>HTTP HEADERS</u> <br>X-Spoon-User: [Turbo Server Administrator]<br> X-Spoon-Password: [Password]</p>
            <p><u>HTTP BODY<br></u>{"_id":"[LOGIN].[DIRECTORY PREFIX]","permitted":"false"}</p>
         </td>
      </tr>
</table>
<br>

**Note**: [CATEGORY] refers to the Slug field in the "Category Details" page on the Turbo Server administrator portal. [APPLICATION] refers to the Slug field on "Application Details" page on the Turbo Server administrator portal.

#### Migrating Sync Data When Changing the Storage Path

When specifying a new storage path for sync data, the existing data is not automatically migrated.

In order to migrate existing data, follow the steps, below:

1. Log onto the Turbo Server Administrator portal

2. Click on the **Admin** button at the top of the portal

	a. Click **Sync Settings**

	b. Update the **Storage path** field with the new storage path

	c. Click **Save**

3. Stop Turbo Server. This can be done by opening a Windows Command Prompt as an adminstrator, and entering the command **net stop turbo**

4. Copy all of the data from the current storage path to the new storage path.

5. Restart Turbo Server. This can be done by opening a Windows Command Prompt as an administrator and entering the command **net start turbo**

#### Testing HTTPS (SSL) with a Self-Signed Certificate

Follow these steps to test Turbo Server with SSL enabled using a self-signed certificate.

1. Configure the container server to use HTTPS/SSL:

	a. Log into the Turbo Server Administrator portal and navigate to the "Servers" page

	b. Click on the name of the server HTTPS/SSL will be enabled on.

	c. In the "Web Address" section, change http:// to http**s**://

	d. In the "Administration Site Address" section, change http:// to http**s**://

		- The "Certificate file" and "Certificate key file" fields in the "SSL Certificate" section should now be editable

	e. In the "SSL Certificate" section:

		- Set the "Certificate file" field to the path of the certificate, .crt, file

		- Set the "Certificate key file" field to the path of the certificate key, .key, file

2. On the client machine, double-click on your certificate.crt file to install it in the "Trusted Root Certification Authorities for Windows"

3. Install the latest Java Runtime Environment (see https://java.com/getjava)

4. Add the certificate file to the Java trust store

	a. To do this, open a new Command Prompt and enter the following command (substituting your own information, where applicable)
	
		[path-to-java]\bin\keytool.exe -import -alias [ALIAS] -file [PATH-TO-CRT-FILE] -keystore [PATH-TO-CACERTS] -storepass changeit

	b. After entering this command, a prompt will appear: **Trust this certificate [no]?**

	Type **yes**

	c. A printout should appear: **Certificate was added to keystore**
	
5. If applicable, install the Turbo Launcher

6. Run an application with **Sandbox Sync** enabled to verify that the application streams and synchronizes over HTTPS/SSL

An example case of expected Command Prompt printouts is included, below:


	# Example Command Prompt for Adding a Certificate file to the Java Trust Store

	"c:\Program Files (x86)\Java\jre7\bin\keytool.exe" -import -alias VirtualAppServer -file C:\Users\testuser\Desktop\certificate.crt -keystore "C:\Program Files (x86)\Java\jre7\lib\security\cacerts" -storepass changeit


	Owner: EMAILADDRESS=test@turbo.net, CN=myturboserver, OU=Testing, O=TurboQA, L=Seattle, ST=Washington, C=US

	Issuer: EMAILADDRESS=test@turbo.net, CN=myturboserver, OU=Testing, O=TurboQA, L=Seattle, ST=Washington, C=US

	Serial number: c4ba0e7be87ff2a5

	Valid from: Wed Oct 16 10:40:41 PDT 2013 until: Thu Oct 16 10:40:41 PDT 2014

	Certificate fingerprints:

			MD5:  66:C6:4F:7A:35:BE:52:4D:A4:20:65:5E:6B:A7:0B:66

			SHA1: 71:BF:C2:38:DA:2D:96:9E:7A:91:8B:CD:D2:A8:39:F8:50:01:92:CD

			SHA256: 50:32:10:DB:1D:1D:D4:EF:5D:2A:43:FB:76:EB:87:71:4A:4F:5B:81:52:F7:97:AA:A4:E9:DA:97:8C:7B:F6:CC

			Signature algorithm name: SHA1withRSA

			Version: 1

	Trust this certificate? [no]:  yes

	Certificate was added to keystore
	
### Turbo Client and Console

In the following pages you will learn about how to use Turbo Client and the Turbo Launcher.

#### Install the Plugin

End-users must download and install the Turbo Client prior to launching Turbo applications for the first time.

To install the Turbo Client, click the "Run" button for an application on the Turbo.net website. A window will open indicating the plugin is not installed. Select **OK** to download and install the Turbo Client. Select **Run**, or **Save** the executable to your computer and then run it to launch the Turbo Client installer. 

If you already have the Turbo Client and are installing an update Turbo automatically uninstalls older versions if they have been idle for more than 30 days. If there are mutiple instances of the Sandbox Manager, you can manually uninstall older versions of the plugin from Programs and Features from the Control Panel.

After the Turbo Client is installed complete the following steps to launch an application:

1. Select any application and it will begin streaming to your desktop. Once the application buffers it launches automatically.

2. After you finish using the application close it as you would a natively installed application.

The Turbo Client will continue to run in the background to optimize the launch of Turbo applications. The Turbo-Sandbox.exe process manages the sandboxes of any running virtual applications launched with the plugin. If that process closes, all Turbo applications will also close.

##### Command line flags

When installing the Turbo Client for a managed environment, there are command line flags that may be useful.

**Turbo-plugin.exe [Option]**

<table>
      <tr>
         <td>
            <p> <strong><span style="text-decoration: underline;">Parameter</span></strong> </p>
         </td>
         <td>
            <p> <strong><span style="text-decoration: underline;">Behavior</span></strong> </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> <strong>/Silent</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client silently. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> <strong>/AllUsers</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client under the <strong>All Users</strong> profile, so it is available to all profiles on the machine.  This is only available if the running user has administrator rights on the machine. </p>
         </td>
      </tr>
</table>

##### Proxy Settings

The Turbo Client uses the proxy settings of the local device by default. End-users using Microsoft Internet Explorer can change proxy settings from within the browser. Users of other browsers must change proxy settings on the host device itself.

Complete the following steps to change system proxy settings on the host device:

1. Navigate to the **Control Panel** in your windows **Start Menu**.

2. Select the **Internet Options** icon.

3. Select the **Connections** tab, then **LAN Settings**.

4. Enter the proxy settings specified by your network administrator.

#### Using the Turbo Launcher

##### The Turbo Launcher 

The Turbo Launcher is what end-users see when they select the Turbo icon from the system tray. From here users can log in or out of accounts, register applications to the desktop, synchronize files and folders across desktops, add credit card information, and shut-down the plugin. Note the following Turbo Launcher features:

- Turbo Launcher automatically runs on Microsoft Windows startup and runs in the background until manually shut-down. The process is represented in the Microsoft Windows systray by a Turbo icon. Select the icon brings up a more detailed window from which all other settings are available. Closing this window does not end the background activity; only choosing **Shut Down** from the **Options** menu shuts down background activity.

- To restart a shut-down Turbo Launcher, select **Start > All Programs > Startup > Turbo Sandbox Manager**, and then the most recent version. Launching an application from a Turbo host via a web browser restarts the Turbo Launcher.

- Any Turbo user can sign in to a host using the Turbo Launcher. This includes users with turbo.net accounts and users with accounts on private Turbo Servers.

- To be "signed in" means that applications will run without prompting for a username and a password, application settings data are saved, and settings for that user can be viewed and edited.

- Multiple Turbo users can be signed in on the same machine.

- Only one Turbo user per host can be signed in at the same time. 

- Folder synchronization occurs in the name of, and under the quota of, one Turbo account. That user must sign in to this account to enable folder synchronization.

- Connecting the local device enables it to be seen by Turbo Launchers on other machines signed in to the same Turbo account. Disconnecting it removes it from view, although files are still uploaded to the synchronization account's server.

##### Console Overview

**Status**

The status bar shows whether a user is signed in, when Turbo is synchronizing data, or if the Plugin is running Idle in the background the user's usage data. Users must be signed in to view status. As you navigate through the six options in the console, the status section will show you a selectable list, or breadcrumb, listing to your location in the console.

**Main Console**

The Turbo Launcher contains links to the logged in user's favorite applications and files and folders that have been synchronized to their Turbo.net account.

Users can click on **All Applications** to open the application list. Users can click on the application name to open a new menu that allows them to launch the application as well as add or remove the applications from the start menu. Users can return to the main console menu by clicking the **Home** link at the top of the console.

When launching an application hosted on Turbo Server that has been added to the start menu, the Turbo Launcher will check to see if there is a new version available. If a new version is available, the user will be prompted for which version they would like to start.

Clicking on any of the **Documents**, **Desktop**, **Music**, **Pictures** or **Videos** folder names will open the folder access menu. Users can add or remove the folders from their current device from this menu. Clicking on a device name will open the folder and allow the user to add, copy or remove files from that folder on the named device upon the next synchronization if the folder is synchronized on all devices. If the folder is only synchronized from one device, the folder will open in the user's web browser, either on their Turbo.net account or in the Turbo Server instance the plugin is connected to.

**Note**: When viewing the files and folders connected via the Turbo Launcher, the browser's Internet Security settings can effect what is displayed on the web desktop. More restrictive settings can prevent files and folders from displaying and synchronizing.

#### Advanced Plugin Topics

##### Install location

If the Turbo Client was installed for all users, the install location is in one of the following locations.

- For x86 platforms: **C:\Program Files\Turbo**

- For x64 platforms: **C:\Program Files (x86)\Turbo**

If the plugin is installed for a single user profile, the install location is in the following locations: **C:\Users\<profile>\AppData\Local\Turbo**

##### Command line flags

The Turbo Client installs an application called Turbo Sandbox Manager that runs on startup. This application can be found in the install directory of the Turbo Client. There is a command line interface for this application.

**Turbo-Sandbox.exe [Option]**

<table>
      <tr>
         <td>
            <p>Parameter</p>
         </td>
         <td>
            <p>Behavior</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/uninstall</p>
         </td>
         <td>
            <p>Uninstalls the Turbo Client. Close all web browsers before uninstalling.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/silent</p>
         </td>
         <td>
            <p>Used with /uninstall to perform a silent uninstall.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/delete-user-data</p>
         </td>
         <td>
            <p>Used with /uninstall and /silent to remove user container data during uninstall.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/uninstall-launcher</p>
         </td>
         <td>
            <p>Uninstalls the TurboLauncher but leaves the rest of the client.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/uninstall-redirector</p>
         </td>
         <td>
            <p>Uninstalls the TurboRedirector but leaves the rest of the client.</p>
         </td>
      </tr>
</table>

##### XLaunch

XLaunch is an internal application used to execute virtual applications that have been registered to the desktop by SpoonReg or through the Turbo Sync Console.

**Install location**

- Location when installed by SpoonReg: @APPDATALOCAL@\Turbo\XLaunch\_version_\XLaunch.exe 
- Location when installed by Turbo Client: @APPDATALOCAL@\Turbo\Client\Components\_version_\XLaunch.exe

**Command line reference**

	XLaunch.exe <Path to default.xclient> <RegistrationId> [<Shell Execute Info>|/XUninstall|/XUninstallQuiet]
	
<table>
      <tr>
         <th data-column="0">
            <div>
               <p> Option </p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p> Description </p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p>Path to default.xclient</p>
         </td>
         <td>
            <p> This is the path to the xclient file where the app was registered. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p>RegistrationId</p>
         </td>
         <td>
            <p> This is the uniquely identifying guid of the virtual application specified on the SpoonReg.exe command line using the /id parameter. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Shell Execute Info:<br class="atl-forced-newline">
               &lt;verb&gt; &lt;path&gt; [&lt;additional parameters&gt;]
            </p>
         </td>
         <td>
            <p>verb: the verb used to shell execute the application or document, e.g. <em>open, edit, print</em><br class="atl-forced-newline">
               path: the path to the application or document to execute, may be use path variables (like <code>@PROGRAMFILES@</code>) or not.<br class="atl-forced-newline">
               additional parameters: any additional parameters to pass to the application being executed. 
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/XUninstall</p>
         </td>
         <td>
            <p> Uninstalls the application and informs the user when the uninstall is complete </p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/XUninstallQuiet</p>
         </td>
         <td>
            <p> Uninstalls the application with no user feedback </p>
         </td>
      </tr>
</table>

##### XClient file

The XClient file is an XML file that provides information about applications that are registered to the user's machine. Registering and applications can be done using the SpoonReg command line tool (Register Virtual Applications in the Windows Shell), through the Turbo Launcher by clicking "Add to Start Menu" (Using the Turbo Launcher), or through the Turbo JavaScript API.

**File location**

- Applications registered with SpoonReg: @APPDATALOCAL@\Turbo\Client\5\Default.xclient

- Applications registered from standalone streaming server: @APPDATALOCAL@\Turbo\Servers\<server>\Users\[_username_|Anonymous]\Desktops\Default\Client\Default.xclient

**XML file format**

<table>
      <tr>
         <th data-column="0">
            <div>
               <p> Element </p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p> Description </p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p> ConfigReferences </p>
         </td>
         <td>
            <p> List of all external configurations from which this configuration inherits </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> KnownServers </p>
         </td>
         <td>
            <p> List of any portals the Turbo Client has logged into. Also contains a recentServer element that lists the last portal the console was logged in to.  The sub elements for each Server are:</p>
            <ul>
               <li><strong>name</strong> - Name of the portal</li>
               <li><strong>portalUrl</strong> - Address of the portal</li>
               <li><strong>portalSecureUrl</strong> - Address of the portal if SSL is enabled</li>
               <li><strong>syncUrl</strong> - Address of the synchronization service</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <p> Sandboxes </p>
         </td>
         <td>
            <p> Every time an application is launched, a sandbox is created.  This element lists the location of each sandbox for the user account. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> Folders </p>
         </td>
         <td>
            <p> This element contains information for the My Documents, Desktop, Music, Pictures, or Videos folders the user has synchronized to their account. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> SyncSettings </p>
         </td>
         <td>
            <p> Contains the settings used by the synchronization service. Sub-elements of SyncSettings are:</p>
            <ul>
               <li><strong>BandwidthManager</strong> -  Controls the <strong>Upload Throttling</strong> feature of the console</li>
               <li><strong>SyncUser</strong> - Contains the name, server, and url of the primary user's Synchronization service</li>
            </ul>
         </td>
      </tr>
</table>

### Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while using Turbo Server.

#### Common Issues

The following table lists common issues/questions and their solutions:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Issue/Question</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Solution</p>
            </div>
         </th>
      </tr>
      <tr>
         <td colspan="1">There is an error during installation: Turbo Server installation failed, please contact the administrator.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Server service.</td>
      </tr>
      <tr>
         <td colspan="1">The Turbo Server service fails to start.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to Control Panel &gt; Administrative Tools &gt; Services and try restarting the Turbo Server service.</td>
      </tr>
      <tr>
         <td>
            <p>I am unable to access the Administration Site or Portal Site from another machine.</p>
         </td>
         <td>
            <p>Microsoft Windows security settings might be restricting external connections to the ports assigned to the Administration and/or Portal sites. For information about configuring Turbo Server security settings, refer to&nbsp;Configuring Turbo Server Security.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application does not appear on the Portal Site.</p>
         </td>
         <td>
            <p>Verify that the application has a published application version. Application versions are not published by default. For more information about publishing application versions, refer to&nbsp;Managing Applications. Check the application details page to ensure that the application is not blocked to users.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application will not launch from my external portal site.</p>
         </td>
         <td>
            <p>You may see the following warning message: <em>The application is not available from this web site.</em> If this site is hosted on external server, verify that the server is added to the&nbsp;<strong>Servers</strong>&nbsp;page on the Administration Site. For more information about adding servers refer to <a href="#administration-manage-servers">Managing Servers</a>. After adding a new server verify that you are accessing the site with the specified server web address. If the application still does not launch Turbo Server might be unable to resolve the host name for the external server. To make the host name fully resolvable, add an entry to the <strong>hosts</strong> file on the machine hosting Turbo Server. The host file can be found at C:\Windows\System32\drivers\etc\hosts, and should be in the format: [external server IP address] [external server host name] somename.somecompany.com If the application still does not launch, verify that the security settings for Turbo Server are correctly configured. Improper security settings can restrict access to the Turbo JavaScript API. For more information about how to configure security settings, refer to <a href="#advanced-topics-configure-turboserver-security"><span style="text-decoration: underline;">Configuring Turbo Server Security</a></span>.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application runs when I access Portal Site using the machine name, but not when I use the fully qualified domain name.</p>
         </td>
         <td>
            <p>You may see the following warning message: <em>The application is not available from this web site.</em>&nbsp;On the&nbsp;<strong>Servers</strong>&nbsp;page of the Administration Site, select the <strong>Primary</strong> server and change the Web Address to the fully qualified domain name.&nbsp;It can take up to one minute for the change to take effect. Verify that the domain name is included in the list of allowed portals for your license; this can be verified in the License section on the&nbsp;<strong>Admin</strong>&nbsp;page.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Where do I install a new license?</p>
         </td>
         <td>
            <p>New licenses can be applied by clicking the&nbsp;<strong>New License</strong>&nbsp;link found on the&nbsp;<strong>Admin</strong>&nbsp;page in the Administration Site.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>I am unable to optimize an application version.</p>
         </td>
         <td>
            <p>After attempting to update a model, you might see the model status change to: <em>Error: The layer is compressed.</em> This error message indicates that the&nbsp;<strong>SVM</strong>&nbsp;was built with the <strong>Compress</strong> <strong>Payload</strong> option set, prohibiting optimization. Rebuilding&nbsp;<strong>SVM</strong>&nbsp;without this option set.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1">Turbo Server is no longer accessible after making a Network Configuration change</td>
         <td colspan="1">Turbo Server may need to be restarted after making a network configuration change. This can be done through the command line tool, Server.exe, as described here.</td>
      </tr>
      <tr>
         <td colspan="1">I am unable to add an application to the Start Menu.</td>
         <td colspan="1">
            <p>Verify that <strong>Desktop Registration</strong> is enabled on the Turbo Server administrator site.</p>
            <p>Verify that the user is logging into the Turbo Launcher with the exact server name that is specified under "Servers" on the administrator site.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1">The portal site fails to load.</td>
         <td colspan="1">
            <p>This may be due to an out of memory error in the Java runtime. To verify this, look for the following error in the Jetty logs (see Locating Log Files):</p>
            <pre>
				<code>java.lang.OutOfMemoryError: Java heap space</code>
			</pre>            
            <p>To increase the memory available, one must add a new "PortalJavaParams" parameter to the settings.xml file located in C:\ProgramData\Turbo Server. This parameter will set the maximum heap size for the Java process. For an example, see below:</p>
            <pre>
				<code class="java plain">
					&lt;Settings&gt;
						&lt;PortalJavaParams&gt;-Xmx1200M&lt;/PortalJavaParams&gt;
					&lt;/Settings&gt;
				</code>
			</pre>
         </td>
      </tr>
      <tr>
         <td colspan="1">Turbo Server installer process hangs immediately.</td>
         <td colspan="1">
            <p>
				This may be due to a partially downloaded Turbo Server installer. Redownload the Turbo Server installer and try again. If the issue continues, it may be due to fault tolerant heap shim being applied to the process. Make sure fault tolerant heap shim is disabled for the Turbo Server installer.
			</p>
         </td>
      </tr>
	  
</table>

#### Enable Diagnostic Mode

Enabling diagnostic mode generates debug output logs. These can be used to help the Turbo support staff diagnose and debug issues.

##### Turbo Client

When troubleshooting an issue related to launching applications from the web, Turbo recommends enabling diagnostic mode for the Turbo Client. Complete the following steps to enable diagnostic mode and capture debug output logs for the Turbo Client:

1. Download and run the DebugView application from: http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx

2. Run **Regedit.exe**, the Microsoft Windows default registry editor tool.

3. Add the following **String** value to the registry key: HKEY_CURRENT_USER\Software\Code Systems\Turbo with the name set to TraceLevel, and the value set to Debug.

4. Restart the Turbo Client by selecting **Start > All Programs > Startup > Turbo Sandbox Manager** ***n.nn***. If multiple versions of the Turbo Sandbox Manager exist, restart each.

5. When the application is launched again with Turbo, the DbgView Output displays debugging logs.

##### Turbo Server

When troubleshooting an issue related to the general administration of Turbo Server, enable diagnostic mode for Turbo Server. Complete the following steps to enable diagnostic mode for Turbo Server:

1. Open a Windows Command Prompt as an administrator (cmd.exe).

2. Enter the following command: **net stop turbo**

3. Navigate to **C:\ProgramData\Turbo Server** and open **settings.xml** with Notepad or another text editor.

4. Add a new element called **TraceLevel** with value **Debug** as a child element to **Settings**; after adding this element the file should resemble the following:

	<?xml version="1.0" encoding="utf-8"?>
	<settings>
		<InstallPath>[Path]</InstallPath>
		<InstalledVersion>[Version]</InstalledVersion>
		<DbLibraryConnection>embedded</DbLibraryConnection>
		<DbManagerConnection>embedded</DbManagerConnection>
		<TraceLevel>Debug</TraceLevel>
	</settings>

5. Enter the following command: **net start turbo**

6. Upon restarting Turbo Server (with the previous command), debug logs are written to a text file located at **C:\Program Files\Turbo Server**. This log file is assigned a name based on the date and time when Turbo Server restarted. A new log file is created on subsequent restarts of Turbo Server.

#### Locating Log Files

There are several types of logs available for Turbo Server, including logs for the installation process, Apache, and SQL Server. The log file locations are dependent on the install location of Turbo Server. The default location is "C:\Program Files\Turbo Server".

**Turbo Server Installation Logs**

- __Install Directory_\logs\Setup.log_

**Turbo Server Runtime Logs**

- __Install Directory_\logs\*.log*_
- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Turbo Server\Web\logs\*.log_

**Turbo Server Jetty Logs**

- __Install Directory_\Sandbox\roaming\modified\@PROGRAMFILESX86@\Turbo Server\jetty\logs_

**SQL Server Logs (Embedded SQL Server Express)**

- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Microsoft SQL Server\MSSQL.1\MSSQL\LOG_

**Apache Logs**

- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Apache Software Foundation\Apache2.2\logs\error.log_

#### Starting and Stopping the Turbo Server Service

Oftentimes, troubleshooting and fixing problems in Turbo Server requires the Turbo Server service be restarted.

There are currently two ways of doing this, through either the Control Panel or the Command Prompt. Each method is listed, below:

1. Through the **Control Panel**

	a. Navigate to *Control Panel > Administrative Tools > Services* or *Control Panel > System and Security > Administrative Tools > Services*

	b. Restart the **Turbo Server** service

2. Via the **Command Prompt** using the **net** command

	a. Run a new command prompt (cmd.exe) as Administrator
	
	b. Type the command net stop turbo to stop the Turbo Server service
	
	The expected output for this command is:
	
		The Turbo Server service is stopping.
		The Turbo Server service was stopped successfully.
		
	c. Type the command net start turbo to start the Turbo Server service

	The expected output for this command is:

		The Turbo Server service is starting.
		The Turbo Server service was started successfully.
		
#### Windows Event Viewer

The Windows Event Viewer is another useful source of information. If there is an issue starting the Windows service for Turbo Server there may be information reported in the Window Event Viewer to help diagnose the problem.

