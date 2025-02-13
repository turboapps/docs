# Command Line Management

The Turbo Server executable, **server.exe**, is located in the installation directory of Turbo Hub Server (usually **C:\Program Files (x86)\Turbo Server**). It has many administrative options that are accessible by using command line parameters.

When using the Turbo Server command line administrative tools, it is important to remember the following:

- Run the command window as Administrator (right-click **Run as Administrator**).

- When working in the command window place quotation marks around parameters and paths that include a space.

### Server.exe Command Format

`Server.exe` can be used with the following arguments to manage provisioning, uninstall, upgrade, and service recycling:

| Option | Description |
|--------|------------|
| `Server.exe /provision` | Creates the Turbo Hub Server data and sites. For additional details use `Server.exe /help`. |
| `Server.exe /uninstall` | Uninstalls Turbo Hub Server. |
| `Server.exe /restart-apache-service` <br> **Required parameters:** <br> [Apache process Id] | Restarts Apache web service gracefully. |
| `Server.exe /install-services` <br> **Required parameters:** <br> [comma-separated service names] | Installs native services. Valid options include: api, admin |
| `Server.exe /uninstall-services` <br> **Required parameters:** <br> [comma-separated service names] | Uninstalls native services. Valid options include: api, admin |
| `Server.exe /?, -?, ?, /help, -help, help` | Prints this usage information. |

#### install-services command

The install-services command installs the specified services, such as the API and Admin site IIS Express servers, onto the native environment. By default these services run in the virtual environment, however they can be installed natively to resolve certain issues such as antivirus incompatibility.

When a service is installed, the files required to run the service are copied out of the virtual environment and into a native service installation folder parallel to the Turbo Server installation folder. For example, if Turbo Server is installed at `E:\Turbo Server`, the native services will be installed at `E:\Turbo Server Native`.

Please note that it may take a couple minutes for these changes to take affect.

### Server.exe admin Command Format

Server.exe can also be used to create and update applications, as well as to manage other server settings. This is done by specifying any of the given topics after the Server.exe admin command.

**Server.exe admin --directory-services**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current list of directory services. |
| `new <login prefix>` | Creates a new directory service with default settings. |
| `delete <login prefix>` | Deletes the given service. |
| `help` | Prints help information. |

Examples:

- **Print the current directory services**:

	Server.exe admin --directory-services

- **Create a new directory service with prefix "loc"**:

	Server.exe admin --directory-services new loc

- **Delete the "loc" directory service**:

	Server.exe admin --directory-services delete loc

**Server.exe admin --directory-service**

| Option | Description |
|--------|------------|
| `discover-local-ad` | Attempts to connect to local Active Directory. If it succeeds, the connection and schema settings are printed. |

**Server.exe admin --directory-service &lt;login prefix&gt;**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current settings for the directory service. |
| `<property>` | Prints the current value of `<property>`. |
| `<property> <value>` | Sets the value of `<property>` to `<value>`. |
| `set [<file>]` | Imports the settings from a file, or standard input if no file is specified. Settings files are in the same format as the output of the print function. |
| `discover-local-ad` | Attempts to connect to local Active Directory. If it succeeds, the connection and schema settings are printed. |
| `discover` | Scans the directory service for recommended schema settings. |
| `directories` | Prints the subdirectories within this directory service. |
| `groups` | Prints the user groups within this directory service. |
| `sync` | Synchronizes users and groups from the directory service. |
| `items` | Prints the current synchronized items. |
| `items add (Group\|Subdirectory) <distinguished name>` | Adds an item to be synchronized. |
| `items clear` | Deletes all sync items. |
| `help` | Prints help information. |

An external directory service may have particular configurations which a directory service must accommodate. In addition to standard settings like name and description, there are the following important categories of options:

- Connection settings: host, port, binding type, username, password

- Schema settings: user and group attribute names used by the external directory service

- Synchronized items: if the entire external directory should not be imported, the items commands should be employed to add specific user groups or LDAP directories to include

The following examples describe a typical set of steps to set up a directory service for the local Active Directory.

- **Print the settings of directory service "ad"**:

	Server.exe admin --directory-service ad

- **Change the name of directory service "ad"**:

	Server.exe admin --directory-service ad name "Local Active Directory"

- **Dump the settings of directory service "ad" to a file**:

	Server.exe admin --directory-service ad print > ad-settings.txt

- **Discover the schema of directory service "ad"**:

	Server.exe admin --directory-service ad discover

- Copy/paste the recommended schema from the console to the ad-settings.txt file.

- **Print all the groups found in "ad"**:

	Server.exe admin --directory-service ad groups

- **Specify a user group to be synchronized**:

	Server.exe admin --directory-service ad items add Group "cn=All,dc=acme,dc=com"

- **Set all the settings of "ad" from a file**:

	Server.exe admin --directory-service ad set ad-settings.txt

**Server.exe admin --global**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current global settings. |
| `<property>` | Prints the current value of `<property>`. |
| `<property> <value>` | Sets the value of `<property>` to `<value>`. |
| `help` | Prints help information. |

Examples:

- **Print the current settings**:

	Server.exe admin --global

- **Print the Default Launch Mode settings**:

	Server.exe admin --global default-launch-mode

- **Set the Default Launch Mode settings**:

	Server.exe admin --global default-launch-mode 2

**Server.exe admin --hub**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current hub settings. |
| `keys` | Prints the current set of API keys. |
| `key create <name> <type>` | Creates an API key with the given name. Specify "system" or "user" for the type of key to create. |
| `key renew <name>` | Regenerates the value of the API key with the given name. |
| `key delete <name>` | Deletes the API key with the given name. |
| `import <option> <type> <path>` | Builds an image from the specified file and adds it to the local repository. |
| `help` | Prints help information. |

Examples:

- **Print the current settings**:

	Server.exe admin --hub print

- **Add an API key**:

	Server.exe admin --hub key create "Test Lab Key" system

**Server.exe admin --license**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current license. |
| `set <file>` | Sets the license to the contents of the given text file. |
| `help` | Prints help information. |

Examples:

- **Print the current license**:

	Server.exe admin --license print

- **Set the current license**:

	Server.exe admin --license set ss-license.txt

**Server.exe admin --server**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current primary server settings. |
| `<property>` | Prints the current value of `<property>`. |
| `<property> <value>` | Sets the value of `<property>` to `<value>`. |
| `help` | Prints help information. |

Examples:

- **Print the current primary server settings**:

	Server.exe admin --server

- **Print the root web address**:

	Server.exe admin --server &lt;server-name&gt; web-root

- **Set the root web address**:

	Server.exe admin --server &lt;server-name&gt; web-root https://acme/turbo

- **Set the SSL certificate file path**:

	Server.exe admin --server &lt;server-name&gt; ssl-certificate-file c:\programdata\acme\cert.txt

**Server.exe admin --users**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current users and groups. |
| `authentication-type (Anonymous|Forms)` | Changes the current authentication type. |
| `ticket-timeout` | Gets or sets the number of days that a login ticket is valid when "remember me" is selected. The default is 1 week. The minimum value is 1 day. The maximum value is 200 years (73000 days). |
| `help` | Prints help information. |

Examples:

- **Print information about current users and groups**:

	Server.exe admin --users

- **Change the authentication type to "Forms"**:

	Server.exe admin --users authentication-type Forms

- **Change the login timeout duration to four weeks**:

	Server.exe admin --users ticket-timeout 40320

**Server.exe admin --user-groups**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current list of user groups. |
| `new <name>` | Creates a new user group with default settings. |
| `delete <id>` | Deletes the given group. |
| `help` | Prints help information. |

Examples:

- **Print the current groups**:

	Server.exe admin --user-groups

- **Create a new group with name "Power Users"**:

	Server.exe admin --user-groups new "Power Users"

- **Delete group 2**:

	Server.exe admin --user-groups delete 2

**Server.exe admin --user-group &lt;id&gt;**

| Option | Description |
|--------|------------|
| `print`, *(none)* | Prints the current settings for the user group. |
| `<property>` | Prints the current value of `<property>`. |
| `<property> <value>` | Sets the value of `<property>` to `<value>`. |
| `set [<file>]` | Imports settings from a file, or standard input if no file is specified. Settings files are in the same format as the output of the print function. |
| `clear` | Removes all members from the group. |
| `help` | Prints help information. |

Examples:

- **Print the settings of group 2**:

	Server.exe admin --user-group 2

- **Print the properties and members of group 2**:

	Server.exe admin --user-group 2 print

- **Remove all members from group 2**:

	Server.exe admin --user-group 2 clear

**Server.exe admin workspace app add [repoId] [workspace] --isolate=[isolation]**

Adds application with repoId namespace/name:release to workspace. If workspace is ommited, then server attempts to add the application to the default workspace. Accepted values for the optional isolation flag are `full`, `write-copy` or `merge`.

**Server.exe admin workspace app remove [repoId] [workspace]**

Removes all applications with repoId namespace/name:release from the workspace. If workspace is ommited, then server attempts to remove all matching applications from the default workspace.

**Server.exe admin workspace app list [workspace]**

Lists applications in a workspace. Lists the default workspace if `workspace` is ommited. The workspace application ID and display name is printed.

```
> Server.exe admin workspace app list default
32 Adobe Reader
33 Chrome
34 Firefox
35 Microsoft Excel
36 Microsoft Word
37 Microsoft Project
38 Power BI Desktop
40 qBittorrent
41 Explorer
42 Chrome
44 Paint
```

**Server.exe admin workspace app settings [appId]**

Set and prints settings for a workspace application. Ommit flags to print the current settings. Use the numerical application ID.

```
> Server.exe workspace app settings 32 --persistence=false --isolation=full --app-title="Adobe Reader" --ad-groups=sales,engineering --components=google/chrome --mounts=c:\users\demo\downloads=c:\users\demo\downloads,c:\temp=c:temp
  Application settings for application ID 32:
  ad-groups=sales,engineering
  app-title=Adobe Reader
  components=google/chrome
  isolation=full
  mounts=c:\users\demo\downloads=c:\users\demo\downloads,c:\temp=c:temp
  persistence=False
```