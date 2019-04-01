## Turbo Client

### Turbo Client Installation

The latest Turbo Client may be downloaded from [https://turbo.net/download](https://turbo.net/download).

**Installing Turbo Client for a Single User**

To install the Turbo Client using default settings, double-click on the installer. This will configure the client for the current user and place the client components in the **%LOCALAPPDATA%\Turbo** user directory. Shortcuts will be added to the Start Menu in the **Turbo.net** folder for quick access to the **TurboLauncher** and **TurboShell**. In addition, shortcuts will be added to the Startup folder to automatically start the Turbo Client.

The Turbo.net Extension is required when using the client with the Chrome browser. It may be found in the Chrome Web Store at [https://chrome.google.com/webstore/detail/turbonet-extension/ldibmiofagdkgiphkcokpooepankmacl] (https://chrome.google.com/webstore/detail/turbonet-extension/ldibmiofagdkgiphkcokpooepankmacl).

**Installing Turbo Client for All Users**

The Turbo Client can be installed for all users on the machine with the `--all-users` flag, which will place the client components in the **%PROGRAMFILES(x86)%\turbo** directory and register the shortcuts for all users on the system.

Note that if users on the machine already have the Turbo Client installed in their user directories, then their single user installs will be overriden by the all user install. Additional updates to the Turbo Client will occur for the all users installation even if the `--all-users` flag is omitted.

For all user installs in environments using the Chrome browser, the Turbo.net Extension may be enabled via group policy. See the [Enable the Turbo.net Extension for All Chrome Users] (https://blog.turbo.net/deploying-turbo-browser-url-redirection-via-group-policy/) section on the Turbo.net Blog.

**Turbo Client Unattended Installation**

Pass the `--silent` flag to the client installer to suppress the UI popups that may block unattended installs.

**Turbo Client Installer Flags**

Running the Turbo Client installer with these command line flags can change the install behavior.

<table>
    <tr>
       <th data-column="0">
          <div><p>Flag</p></div>
       </th>
       <th data-column="1">
          <div><p>Behavior</p></div>
       </th>
    </tr>
    <tr>
       <td><p><strong>--all-users</strong></p></td>
       <td><p>Installs the Turbo Client to <strong>%PROGRAMFILES(x86)%\turbo</strong> so that it is accessible for all users on the machine. This is required for running certain Turbo command for all users (such as `subscribe` or `installi`)</p></td>
    </tr>
    <tr>
       <td><p><strong>--no-auto-start</strong></p></td>
       <td><p>Stops the Turbo Sandbox Manager from starting in the background when logging into your machine. If this flag is used, other components or your web browser will have to start the process on demand and may reduce performance.</p></td>
    </tr>
    <tr>
       <td><p><strong>--server</strong></p></td>
       <td><p>Sets the default server for Client component login. This is used in environments with Turbo Server.</p></td>
    </tr>
    <tr>
       <td><p><strong>--shutdown-period</strong></p></td>
       <td><p>Specifies the number of minutes that the Turbo Sandbox Manager is idle before shutting down.</p></td>
    </tr>
    <tr>
       <td><p><strong>--silent</strong></p></td>
       <td><p>Turbo Client installs without any UI popups.</p></td>
    </tr>
</table>

### Uninstalling the Turbo Client

**Uninstalling Turbo Client via Control Panel**

You can uninstall the Turbo Client or the TurboLauncher specifically from the Windows **Uninstall or change a program** screen (previously called **Add/Remove Programs**).

**Uninstalling Turbo Client via the Command Line**

To uninstall the Turbo.net Sandbox Manager, you may pass the `/uninstall` flag to the Turbo-Sandbox.exe in the **%LOCALAPPDATA%\turbo\[client-version]** directory for single user installs or **%PROGRAMFILES(x86)%\turbo\[client-version]** for all user installs.

```
# Uninstall for single user
C:\> "%LOCALAPPDATA%\Turbo\[client-version]\Turbo-Sandbox.exe" /uninstall /silent

# Uninstall for all users
C:\> "C:\Program Files (x86)\Turbo\[client-version]\Turbo-Sandbox.exe" /uninstall /silent
```

For unattended or scripted uninstalls, pass the `/silent` flag in addition.

Note that if the client is installed for all users, you would have to run from an elevated command prompt or the command will fail with insufficient privileges.

**Turbo-Sandbox.exe Uninstall Flags**

Pass the following flags to the Turbo-Sandbox.exe to uninstall specific components or the whole Turbo Client.

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
