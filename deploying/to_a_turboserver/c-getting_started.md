### Getting Started

In this section you will learn about system requirements and instructions for installing, configuring and running TurboServer.

#### System Requirements

For small to medium size deployments (less than 200 concurrent users), the minimum recommended machine specifications are:

- A supported operating system (see Supported Platforms)
- At least 4 GB of RAM
- 2.5 GHz or greater processor with at least 2MB L2 cache
- 32-bit or 64-bit chipset

Larger enterprise deployments may require additional processing power, memory, and disk space. For sizing and technical guidance, contact Turbo at support@turbo.net.

#### Database Requirements

TurboServer is installed with an embedded SQL Express database. However, we recommend this database only be used for demonstration or testing purposes. When using TurboServer in production, we recommend connecting TurboServer to an external SQL database.

#### Disk Space Requirements

The initial installation of TurboServer requires 1.05 GB of free space on your hard drive.

The amount of disk space required varies based on how many applications your server hosts as well as how many users you have. We recommend using the following guidelines when planning how much disk space you will require:

1. For each application hosted on Server, allocate three times the storage necessary for the application SVM. This additional storage is used to store an application's adaptive delivery model.
2. If user file storage (sync) is enabled, allocate the amount of storage budgeted to each user, multiplied by your number of users. 

Turbo DB uses data deduplication to minimize storage consumption when multiple copies of the same data are stored on the server, so your exact needs may vary based on the content being stored.

#### Setup

In this section you will learn how to use the Setup Wizard to automatically configure TurboServer. For details regarding manual configuration of TurboServer, refer to Manually Configuring TurboServer.

Complete the following steps to set up TurboServer:

1. Run the TurboServer setup application.

2. Select **Next** to start the installation wizard.

3. Read the End User License Agreement, check the box and select **Next**.

4. Use **Destination Folder** to choose where TurboServer files are installed and select Install.

5. After the installation process completes, choose the following configuration options:

    a. **Administrator email address**: This is typically the TurboServer system administrator's email address. Users are directed to this email address if they encounter any errors or issues while using TurboServer.

    b. **Port assignments**:

    **Administration site**: The port used to access the Administration Site.  For more information, refer to the Administration Site topic.

	**Portal site**: The port used to access the Portal Site.  For more information, refer to the Portal Site topic. If Microsoft IIS is already on the machine port 80 is already in use. Verify that the ports assigned to the Administration and Portal sites are not already in use.
		
    c. Click the **Advanced** button to specify connection information to an external SQL Server Database. When using an external SQL Server Database, be sure that the "Log On" user for the TurboServer Windows Service has the appropriate access to the database. It may be necessary to modify the Log On user for the service by editing the service details after installing TurboServer.
    
	**Note:** TurboServer supports all versions of Microsoft SQL Server 2005 or newer. Any connection string format supported by Microsoft SQL Server may be used.

6. Select **Setup** to begin configuring TurboServer.

7. After setup is complete the Administration Site automatically opens and displays a web page where you can apply your license. Both evaluation and retail licenses are applied here. To obtain an evaluation license, login or create an account on http://turbo.net. For information on purchasing a retail license, refer to the Licensing topic. When purchasing or activating a retail license, note the Machine Identifier displayed on the License section of the Administration tab. This is necessary to complete license activation.

8. Open the ports for the Administration and Portal sites (the Microsoft Windows Firewall blocks external connections to TurboServer by default). For instructions on opening the ports, and for recommendations on how to best secure TurboServer, refer to Configuring TurboServer Security.

9. Start using TurboServer!

#### Licensing

The standard TurboServer license, **TurboServer Enterprise Edition**, consists of a server license and a custom number of unique or simultaneous end-users or devices. The standard license enables an unlimited number of applications to be hosted on TurboServer.

Users are typically accounted for with a username and password. However, you can use anonymous users. In this case, each user is defined by the domain of the hosted TurboServer and a specific username, such as SomeCompany\SomeUser. Any user may access the system on any number of machines within the same domain as the hosted TurboServer without using additional user licenses. A separate license is used each time an application launches from a new machine outside of the domain with the hosted TurboServer, regardless of the user login.

A user can only run applications from one device at a time.

**Tip:** Minimize the number of seats consumed by having users login with the same domain as your TurboServer.

The TurboServer administrator can activate and deactivate users as needed, or add additional allowed users or devices by upgrading the license. For more information about managing users refer to Managing Users. For instructions on applying a new license to TurboServer, refer to Configuration and Customization.

Turbo offers discounts for qualified educational customers (K-12, university, and trade schools) and non-profit organizations, as well as custom licensing options. For more information about Turbo licensing and pricing, or to purchase your own TurboServer license, visit http://turbo.net/server/ or contact us at sales@turbo.net.

#### Administration Site

TurboServer has an administration site interface that enables TurboServer administrators to manage and control all aspects of a TurboServer instance, including:

- Licensing
- Applications
- Application categories
- Users
- Servers
- Customization

The Administration Site also provides detailed application usage analytics via pre-configured reports and a full-featured dashboard. The administration site is automatically configured during TurboServer setup, and is assigned to port 81 by default. For more information about how to administer TurboServer, refer to TurboServer Administration.

#### Portal Site

The TurboServer portal site is users access and stream applications from. After applications are published they are displayed on the Portal Site, giving users one-click access to your entire application library. The Portal Site automatically configures during TurboServer setup and can be customized via the Administration Site. The Portal Site is assigned to port 80 by default.

##### Logging In

If the server has an Authentication Type that enables anonymous access, users can launch applications without logging in. If the server requires users to log in with a username and password, however, users must provide valid credentials to access the portal.

If you are a user and need to log in but do not know your username and password, contact an your Administrator to retrieve your credentials.

If the TurboServer has more than one directory service, the directory prefix must be specified as part of the username. For exmaple, if a user is under the Acme Directory Service with login prefix "ACME" and a username "aaron," the would use the following login:

- Username: ACME\aaron
- Password: *******

##### Using the Homepage

On the homepage for the Portal Site users see the Turbo Web Desktop, which contains available published applications and (if they are an authenticated user) their synchronized folders. Users can navigate the web desktop through the links on the side panel. Users must install the Turbo Plugin. For more information refer to Install the Turbo Plugin.

Turbo Web Desktop contains the following links:

- All Apps: Lists applications you can launch as a user. Select any application to launch it.
- Named Categories: In the All Apps section of the desktop, you will see a list of categories: select that category to view applications in the category.
- Synced Folders: Lists Synchronized folders. Select the folders you want to access. You can download those files.

##### Logging Out

Authenticated users can logout of the TurboServer Portal Site by selecting Logout in the upper right corner of the webpage.
 
##### Signing In and Out via Turbo Console

Users can also log in or out via the Turbo Console after it is installed on their local machine. Users can bring up the Turbo Console by either going to the System Tray or hitting the keys "Alt + Windows." If the user is not logged in already, a login form will be available. If logged in, the user can click on the arrow in the lower-left corner of the Console and select "Sign Out" or "Exit." 

When specifying the server URL in the login form, use one of the conventions, below, as appropriate:

- Using http on the default port (80): http://<server>
- Using http on any other port: http://<server>:<port>
- Using https (SSL) on the default port (443): https://<server>
- Using https (SSL) on any other port: https://<server>:<port>

#### Quick Start

TurboServer includes free, preconfigured applications that are immediately available from the Portal Site after setup is complete. Prior to launching Turbo applications for the first time, end-users must download and install the Turbo Plugin.

##### Installing the Turbo Plugin

The Turbo Plugin interacts with the Turbo VM kernel to enable container streaming. The Portal Site automatically prompts users to download the plugin when they select an application.

Complete the following steps to install the Turbo Plugin:

1. Select an application visible in the Turbo Web Desktop. A window displays will display that indicates you do not have the plugin installed.
2. Select OK to begin downloading and installing the Turbo Plugin.
3. Your browser will ask you to Run or Save the executable.  Select Run. Save the executable to your computer and then run it to launch the Turbo Plugin installer. 

If you are updating the Turbo Plugin on your machine, Turbo automatically uninstalls older versions if they have been idle for more than thirty days.

After the Turbo Plugin is installed on your device, complete the following steps to launch an application:

1. Navigate to the Portal Site in a web browser.
2. Select any application in the Portal Site and it will instantly stream to your desktop. Once the application is buffered, it launches automatically.
3. After you finish using the application, close it as you would a natively-installed application.

**Note:** The Turbo-Sandbox.exe process manages sandboxes of any running containers launched with the plugin. This must run continuously; if that process is closed, all applications launched with the plugin close.

##### Proxy Settings

The Turbo Plugin has limited support for proxy settings. The Plugin uses proxy settings of the local device on which it is installed by default. These proxy settings can need to be changed to enable compatibility with the Turbo Plugin. End-users running Microsoft Internet Explorer can change proxy settings for the host device directly from within the browser. Users of other browsers must change proxy settings on the host device itself.

Complete the following steps to change system proxy settings on the host device:

1. Navigate to the Control Panel in your windows Start Menu.
2. Select the Internet Options icon.
3. Select the Connections tab, then LAN Settings.
4. Enter the proxy settings specified by your network administrator.

#### Upgrading

The new version of TurboServer includes a new TurboServer Console, an updated Portal Site, and many other new features.

Database settings and application information will be migrated from the previous TurboServer. To make changes to these settings, a fresh install is recommended.

When upgrading TurboServer, the Windows service will restart. Be sure to alert users that the system is under maintenance before upgrading.

After upgrading, the previous Turbo Console must also be uninstalled. Applications that are registered to users’ desktops with the old console are not compatible with the new console. When the old console is uninstalled these applications will be unregistered, removing old shortcuts, and will need to be registered from the new console. With the new console this process can be automated on application launch by enabling Desktop Registration > Register on Launch on the Application Detail page from the Administrator Site.

**Note:** After upgrading, all preexisting applications need to be updated with a new application version for Windows 8 compatibility. This does not require a new SVM file to be packaged in Turbo Studio -- a new application version with the same SVM file is sufficient.

**Note:** If your TurboServer was previously set to access an external database, your connection to the database will have to be manually reset after upgrading. For information on how to reset your connection to an external database, see Manually Configure TurboServer.