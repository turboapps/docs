### Turbo Client

In the following pages you will learn about how to use the Turbo Client and Turbo Launcher.

#### Install the Plugin

End-users must download and install the Turbo Client prior to launching Turbo applications for the first time.

If you already have the Turbo Client and are installing an update Turbo automatically uninstalls older versions if they have been idle for more than 30 days. 

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
            <p> <strong>--silent</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client silently. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> <strong>--all-users</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client under the <strong>All Users</strong> profile, so it is available to all profiles on the machine.</p>
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

The Turbo Launcher is what end-users see when they select the Turbo icon from the system tray. Users are able to launch applications from the Hub they are connected to.

- Turbo Launcher automatically runs on Microsoft Windows startup and runs in the background until manually shut-down. The process is represented in the Microsoft Windows systray by a Turbo icon. Select the icon brings up a more detailed window from which all other settings are available. Closing this window does not end the background activity; only choosing **Shut Down** from the **Options** menu shuts down background activity.

- Any Turbo user can sign in to a host using the Turbo Launcher. This includes users with turbo.net accounts and users with accounts on private Turbo Hub Servers.

- To be "signed in" means that applications will run without prompting for a username and a password, application settings data are saved, and settings for that user can be viewed and edited.

- Multiple Turbo users can be signed in on the same machine.

- Only one Turbo user per host can be signed in at the same time. 

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
