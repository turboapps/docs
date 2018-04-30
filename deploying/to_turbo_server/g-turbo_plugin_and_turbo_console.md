### Turbo Plugin and Console

In the following pages you will learn about how to use Turbo Plugin and the Turbo Launcher.

#### Install the Plugin

End-users must download and install the Turbo Plugin prior to launching Turbo applications for the first time.

To install the Turbo Plugin, click the "Run" button for an application on the Turbo.net website. A window will open indicating the plugin is not installed. Select **OK** to download and install the Turbo Plugin. Select **Run**, or **Save** the executable to your computer and then run it to launch the Turbo Plugin installer. 

If you already have the Turbo Plugin and are installing an update Turbo automatically uninstalls older versions if they have been idle for more than 30 days. If there are mutiple instances of the Sandbox Manager, you can manually uninstall older versions of the plugin from Programs and Features from the Control Panel.

After the Turbo Plugin is installed complete the following steps to launch an application:

1. Select any application and it will begin streaming to your desktop. Once the application buffers it launches automatically.

2. After you finish using the application close it as you would a natively installed application.

The Turbo Plugin will continue to run in the background to optimize the launch of Turbo applications. The Turbo-Sandbox.exe process manages the sandboxes of any running virtual applications launched with the plugin. If that process closes, all Turbo applications will also close.

##### Command line flags

When installing the Turbo plugin for a managed environment, there are command line flags that may be useful.

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
            <p> Installs the Turbo plugin silently. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> <strong>/AllUsers</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo plugin under the <strong>All Users</strong> profile, so it is available to all profiles on the machine.  This is only available if the running user has administrator rights on the machine. </p>
         </td>
      </tr>
</table>

##### Proxy Settings

The Turbo Plugin uses the proxy settings of the local device by default. End-users using Microsoft Internet Explorer can change proxy settings from within the browser. Users of other browsers must change proxy settings on the host device itself.

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

If the Turbo Plugin was installed for all users, the install location is in one of the following locations.

- For x86 platforms: **C:\Program Files\Turbo**

- For x64 platforms: **C:\Program Files (x86)\Turbo**

If the plugin is installed for a single user profile, the install location is in the following locations: **C:\Users\<profile>\AppData\Local\Turbo**

##### Command line flags

The Turbo Plugin installs an application called Turbo Sandbox Manager that runs on startup. This application can be found in the install directory of the Turbo Plugin. There is a command line interface for this application.

**Spoon-Sandbox.exe [Option]**

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
            <p>Uninstalls the Turbo Plugin. Close all web browsers before uninstalling.</p>
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

- Location when installed by SpoonReg: @APPDATALOCAL@\Spoon\XLaunch\_version_\XLaunch.exe 
- Location when installed by Turbo plugin: @APPDATALOCAL@\Spoon\Client\Components\_version_\XLaunch.exe

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

- Applications registered with SpoonReg: @APPDATALOCAL@\Spoon\Client\5\Default.xclient

- Applications registered from standalone streaming server: @APPDATALOCAL@\Spoon\Servers\<server>\Users\[_username_|Anonymous]\Desktops\Default\Client\Default.xclient

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