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
	
	Server.exe admin /update /a "My Application" /v 1.0.0.0 /f "D:\Installation Files\myapplication.svm" /lang "en-us" /sku "Premier Edition" /arch "x86"


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
            <p><strong>Spoon_PortalRoot<br></strong></p>
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
            <p><strong>Spoon_Id<br></strong></p>
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
            <p>This is the value that is seen in the portal under the apps root. For example, if the application's URL is <em>http://portal/apps/notepad-7.6</em>, the Spoon_Id is notepad-7.6.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Spoon_BackgroundColor</strong></p>
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
	Spoon_PortalRoot = 'http://[SERVER]:[PORT]/';
	Spoon_Id = '7-zip-9.20';
	</script>
	
After the Turbo Variables are set, use the following code to embed the Turbo Feed in an iframe:

	<script language="javascript" type="text/javascript" src="http://[SERVER]:[PORT]/feed"></script>
	
**Example**: Embed a Button to Launch Firefox 5.0.0.0.

	<script type="text/javascript">
	Spoon_PortalRoot = 'http://[SERVER]:[PORT]/';
	Spoon_Id = 'Firefox-5.0.0.0';
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


	Owner: EMAILADDRESS=test@turbo.net, CN=myspoonserver, OU=Testing, O=SpoonQA, L=Seattle, ST=Washington, C=US

	Issuer: EMAILADDRESS=test@turbo.net, CN=myspoonserver, OU=Testing, O=SpoonQA, L=Seattle, ST=Washington, C=US

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
	
