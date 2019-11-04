## Hub Server Advanced Topics

This section describes advanced topics you may encounter when implementing Turbo Server.

### Manually Configure Turbo Hub Server

Turbo Hub Server enables you to manually configure settings during setup. Using this process you can control the database connection strings used by Turbo Hub Server and the domain names for the Administration and Hub Sites. Turbo Hub Server supports the use of any connection string format used by Microsoft SQL Server.

Complete the following steps to install Turbo Server:

1. Download the Turbo Hub Server setup file and save it locally.

2. Open a Microsoft Windows Command Prompt and navigate to the directory of the saved setup file.

3. Enter the following command: `Setup.exe /noprovision`. This brings up a file installation wizard. Navigate through the prompts until file installation is complete, and then select **Finish**.

Complete the following steps to manually configure Turbo Server:

1. Return to the Microsoft Windows Command Prompt and navigate to the directory where the installation files are saved. You specified this location in the previous step; the default location is **C:\Program Files\Turbo Server**.

2. To manually configure Turbo Hub Server, type the command: **Server.exe /provision [ADMINISTRATOR EMAIL]**. Add any of the optional command-line arguments from the following table. Omitting any command-line arguments causes the default setting to apply.

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
            <p>Configures the connection string for the library database where settings and user information is stored.</p>
         </td>
      </tr>
      <tr>
         <td style="white-space: nowrap">
            <p><code>/dbmanager "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Manager;"</code></p>
         </td>
         <td>
            <p>Configures the connection string for the manager database where usage information is stored.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>/wwwsite <span class="nolink">http://www.[MYSITE].com:[PORT]</span></code></p>
         </td>
         <td>
            <p>Assigns the port and fully qualified domain name for the hub site.</p>
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
	
```
server.exe /provision admin@acme.com /dblibrary "Integrated Security=true;Data Source=acme;Initial Catalog=Library;" /dbmanager "Integrated Security=true;Data Source=acme;Initial Catalog=Manager;" /wwwsite http://www.acme.com /adminsite http://www.acme.com:81
```

**Note**: The Microsoft SQL Server connection string will depend on the Microsoft SQL Server configuration. For more information about the connection string, contact the database administrator. Before configuring the Turbo Server, confirm that the running user for the Windows service has appropriate access rights to the database. The service runs under the Local System account by default but the running user can be changed in the Windows services settings.

Select **Enter** to submit the command and choose **Y** to proceed.

Fully-qualified domain names can be specified on the **Servers** page of the Administration Site. For more information about modifying servers refer to Managing Servers.

### Configure Turbo Hub Server Security

This section explains how to configure Turbo Server's security settings on common Microsoft Windows platforms. These settings restrict external connections to the Administration Site as well as enable external connections to the Hub Site.

**Note:** To enable remote administration for external connections apply the instructions below.

To secure the Turbo Hub Server Administration Site, enable Microsoft Windows Firewall with Advanced Security. The default settings of Microsoft Windows Firewall with Advanced Security block all external connections to the Administration Site (assigned to port 81 by default) and the Hub Site (assigned to port 80 by default). After Microsoft Windows Firewall with Advanced Security is enabled, add exceptions to the default settings to provide licensed users with access the Hub Site.

Complete the following steps to enable Microsoft Windows Firewall with Advanced Security for access to the Hub Site:

1. Open the **Control Panel** and select **System and Security**.

2. Open **Administrative Tools**, then select **Windows Firewall with Advanced Security**.

3. Select **Inbound Rules** and choose **New Rule**.

4. Select **Port**.

5. Select TCP and Specific local ports. Add the port assigned to the Portal Site during installation (the default is port 80).

6. Select **Allow the Connection**.

7. Select the domain, private, and public profiles.

8. Add a name and description.

### Manage Turbo Hub Server from the Command Line

The Turbo Hub Server executable, **server.exe**, is located in the installation directory of Turbo Hub Server (usually **C:\Program Files\Turbo Server**). It has many administrative options that are accessible by using command line parameters.

When using the Turbo Hub Server command line administrative tools, it is important to remember the following:

- Run the command window as Administrator (right-click **Run as Administrator**).

- When working in the command window place quotation marks around parameters and paths that include a space.

#### Server.exe Command Format

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
            <p><code>Server.exe /provision</code> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Required parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;[turbo admin email address] <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Optional parameters:<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/dblibrary&nbsp;</code>[library database connection]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/dbmanager&nbsp;</code>[manager database connection]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/adminsite&nbsp;</code>[administration site URL]<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/wwwsite&nbsp;&nbsp;&nbsp;</code>[hub site URL] (creates a new Turbo deployment originating from this server)<br> &nbsp;&nbsp;&nbsp;&nbsp;<code>/silent&nbsp;&nbsp;&nbsp;&nbsp;</code>(installs Turbo without user prompt)</p>
         </td>
         <td>
            <p>Creates the Turbo Hub Server data and sites.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>Server.exe /uninstall</code></p>
         </td>
         <td>
            <p>Uninstalls Turbo Hub Server.</p>
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

#### Server.exe admin Command Format

Server.exe can also be used to create and update applications, as well as to manage other server settings. This is done by specifying any of the given topics after the Server.exe admin command.
  
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

	Server.exe admin /client 

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


**Server.exe admin /hub**

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
            <p>Prints the current hub settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>keys</code></p>
         </td>
         <td>
            <p>Prints the current set of API keys.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>key create &lt;name&gt; &lt;type&gt;</code></p>
         </td>
         <td>
            <p>Creates an API key with the given name. Specify "system" or "user" for the type of key to create.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>key renew &lt;name&gt;</code></p>
         </td>
         <td>
            <p>Regenerates the value of the API key with the given name.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>key delete &lt;name&gt;</code></p>
         </td>
         <td>
            <p>Deletes the API key with the given name.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>configsvc</code></p>
         </td>
         <td>
            <p>Prints the launch configuration service settings.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>configsvc enable [authentication-key]</code></p>
         </td>
         <td>
            <p>Enables the launch configuration web service. The authentication key is required to be passed in the header of all POST requests to the web service. The service is disabled by default.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>configsvc disable</code></p>
         </td>
         <td>
            <p>Disables the launch configuration service.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>configsvc timeout [value]</code></p>
         </td>
         <td>
            <p>Sets the length of time (in minutes) that a launch configuration is available after last use. Default is 1-hour.</p>
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

- **Print the current settings**:

	Server.exe admin /hub print

- **Add an API key**:

	Server.exe admin /hub key create "Test Lab Key"

- **Enable launch configuration service**:

	Server.exe admin /hub configsvc enable C68480F0BD594684A90EEB889118CEB6


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


### Using the Launch Configuration Web Service

The **launch configuration web service** is an optional component which can be used to allow executing containers from a Turbo Hub Server instance on a custom web portal. If Turbo Streaming Server is used as your application portal, this service is not necessary. 

1. Enable the web service using the administration tool
    
    ```
    > server.exe admin /hub configsvc enable F207AC681BBD40A0BF56ECF95B344EBC
    ```
    
    In this example, the authentication key is set to "F207AC681BBD40A0BF56ECF95B344EBC". This value is required to be passed to all POST requests to the service in the **X-Config-Api-Key** HTTP header. The authentication key can be any string value but should be something long and randomly generated.
    
    **NOTE:** It is important that this authentication key be kept secret to prevent unauthorized users from generating malicious launch configurations. Any usage of the key or the code to submit a configuration must be done on the web portal's **server side** code (not in the browser client where a user can retrieve the key).
    
    Enabling the service will require npm (Node Package Manager) to be executed to download the required NodeJS libraries for your environment. This may fail in environments where the server has the network blocked. In this case, you will need to temporarily enable network access to complete the configuration process.
    
2. Create a launch configuration and submit it to the service
    
    ```
    // create a launch configuration object. this example assumes that there is a hub image called "test/test".
    // this launch configuration will result in the turbo command: turbo try test/test --isolate=full
    var launchConfig = {
        v: 1,
        verb: "try",
        repoId: "test/test",
        isolation: "full"
    }
    
    // submit the launch configuration to the service
    var request = new XMLHttpRequest();
    request.open("POST", "http://[hub-server]/config");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("X-Config-Api-Key", "F207AC681BBD40A0BF56ECF95B344EBC");
    request.send(JSON.stringify(launchConfig));
    request.onreadystatechange = function () {
      if(request.readyState === 4) {
        if(request.status === 200) {
            console.log(request.responseText);
        }
        else {
            console.log("request failed with status code: " + request.status);
        }
      }
    };
    ```
    
    Submit a POST request to the web service with the configuration json string. The response text is the hash of the configuration file on the server (ex: "sha256:66a123724dd6f8fb5ee050644a5494795fed2a1901d0c56def4030d8a6a26175"). This hash is used later to retrieve the configuration from the web service. Note the required request headers of "Content-Type" and "X-Config-Api-Key".
    
    Once submitted, the configuration will be available to retrieve for the configured timeout period. This can be set with the "/hub configsvc timeout" command (the default is 1-hour). The timeout is reset whenever the configuration is retrieved.
        
3. Retrieve a launch configuration
    
    ```
    // hash that is returned from POST request
    var hash = "sha256:66a123724dd6f8fb5ee050644a5494795fed2a1901d0c56def4030d8a6a26175";
    
    // make GET request
    var url = "http://[hub-server]/config?hash=" + hash;
    request.open("GET", url);
    request.send();
    request.onreadystatechange = function () {
      if(request.readyState === 4) {
        if(request.status === 200) {
            console.log(request.responseText);
        }
        else {
            console.log("request failed with status code: " + request.status);
        }
      }
    };
    ```
    
    The request will retrieve the configuration that was previously POSTed to the service. If the configuration has expired the response will be a status code of 404, file not found. 
    
4. Executing a launch configuration
    
    ```
    // url to config:
    // http://[hub-server]/config?hash=sha256:66a123724dd6f8fb5ee050644a5494795fed2a1901d0c56def4030d8a6a26175
    
    // open turbourl to config
    var url = "turbo://[hub-server]/config?t=config&v=1&h=sha256:66a123724dd6f8fb5ee050644a5494795fed2a1901d0c56def4030d8a6a26175";
    window.open(url);
    ```
    
    To execute a submitted configuration file, you must construct a turbo protocol url. Your web portal can make an attempt to open these turbo urls to execute the configuration. The turbo protocol is handled by the Turbo Client if installed and will execute the configuration that it points to. 
    
    The first time you attempt to open a turbo url, the browser will show a security message like the following (each browser is different). The user can choose to hide future messages for turbo urls.
    
    ![](/docs/server/hub_server/hub-configsvc-1.png)
    
    After the turbo url is allowed by the browser, a security message from the Turbo Client will be shown (see below). This message is to ensure that the user trusts the hub that the container is coming from. It is important that user do not execute containers from untrusted hubs. The user can choose to run this instance or trust all instances from the same hub.
    
    ![](/docs/server/hub_server/hub-configsvc-2.png)
    
    After this the user will be prompted to login if necessary. Once logged in (or if login is not necessary), the container will execute.
    
#### Launch Configuration JSON Format

```
{
    // The configuration JSON format version. Must be 1.
    "v":1

    // The turbo command used to execute the app. Possible values are "try", "run", and "new". Must be specified.
    "verb":"try",
    
    // The repository ID of the image to execute. Must be specified.
    "repoId":"spoonbrew/base",
    
    // The isolation mode to run in. These are the same as those that can be passed to turbo run commands with `--isolate` flag. Default is "full".
    "isolation":"full",
    
    // Whether network isolation is enabled in the container. Optional, default is false.
    "isolateNetwork":false,
    
    // A list of network mappings. Optional.
    // Example: routes:[{"rule":"ip","type":"deny"},{"rule":"ip://*.turbo.net","type":"allow"}],
    "routes":[],
    
    // Command line parameters that are passed to the startup file of the container. Optional.
    // Example: cmdLineArgs: "echo Args",
    "cmdLineArgs":"",
    
    // A list of additional image repository IDs that are permanently layered in to the container. Optional.
    // Example: layers: [{"repoId":"npp/notepadplusplus","enabled":true}],
    "layers":[],
    
    // A list of additional image repository IDs that are temporarily layered in to the container. Optional.
    // Example: using: ["gnu/wget"]
    "using":[]
}
```


### Testing HTTPS (SSL) with a Self-Signed Certificate

Follow these steps to test Turbo Hub Server with SSL enabled using a self-signed certificate.

1. Configure the container server to use HTTPS/SSL with the Turbo Hub Server command line administration utility.

    ```
    # change hub url to use https
    > server.exe admin /server web-address https://[hub-server-host]
    
    # set certificate files
    > server.exe admin /server ssl-certificate-file [path to .crt file]
    > server.exe admin /server ssl-certificate-key-file [path to .key file]
    
    # optionally set the certificate key chain file
    > server.exe admin /server ssl-certificate-chain-file [path to chain file]
    ```

2. On the client machine, double-click on your certificate.crt file to install it in the "Trusted Root Certification Authorities for Windows"
	
3. Access the hub using the Turbo Client command line tools, Turbo Launcher, or connected Turbo Streaming Server portal.
