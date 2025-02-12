# Turbo Client

### Turbo Client Installation

The latest Turbo Client may be downloaded from [https://turbo.net/download](https://turbo.net/download).

**Installing Turbo Client for a Single User**

To install the Turbo Client using default settings, double-click on the installer. This will configure the client for the current user and place the client components in the **%LOCALAPPDATA%\Turbo** user directory. Shortcuts will be added to the Start Menu in the **Turbo.net** folder for quick access to the **Turbo.net Preferences**. In addition, shortcuts will be added to the Startup folder to automatically start the Turbo Client.

The Turbo Client launches applications from the workspace portal using the **turbo://** protocol, so a browser extension is not required for application launches.

**Installing Turbo Client for All Users**

The Turbo Client can be installed for all users on the machine with the `--all-users` flag, which will place the client components in the **%PROGRAMFILES(x86)%\turbo** directory and register the shortcuts for all users on the system.

Note that if users on the machine already have the Turbo Client installed in their user directories, then their single user installs will be overridden by the all user install. Additional updates to the Turbo Client will occur for the all users installation even if the `--all-users` flag is omitted. If the Turbo Sandbox Manager detects that an instance for all users has been installed while running as single user, it will automatically remove itself to avoid any potential version conflicts.

**Turbo Client Unattended Installation**

Pass the `--silent` flag to the client installer to suppress the UI popups that may block unattended installs.

**Passing Config Flags to Turbo Client Installer**

Pass [turbo config](https://turbo.net/docs/reference/command-line/config) flags to the Turbo Client installer to configure the client at install time, such as setting the Turbo Server as the Domain URL and a trusted source.

```
# Install Turbo Client with a configured Domain URL and trusted source.
> Turbo-Plugin.exe --all-users --silent --domain=https://my.turboserver/ --add-trusted-source=https://my.turboserver/
```

If you are using the MSI installer, pass the config flags in CMDLINE:

```
# Install Turbo Client MSI with a configured Domain URL and trusted source.
> msiexec /i Turbo-Plugin.msi cmdline="--domain=https://my.turboserver/ --add-trusted-source=https://my.turboserver/" /qn
```

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
       <td><p><strong>--app-server</strong></p></td>
       <td><p>Installs client and provisions the server to be used as an Application Server in an onpremise streaming pool.</p></td>
    </tr>
    <tr>
       <td><p><strong>--all-users</strong></p></td>
       <td><p>Installs the Turbo Client to <strong>%PROGRAMFILES(x86)%\turbo</strong> so that it is accessible for all users on the machine. This is required for running certain Turbo command for all users (such as `subscribe` or `installi`)</p></td>
    </tr>
    <tr>
       <td><p><strong>--hide-gui</strong></p></td>
       <td><p>Disables the Turbo Desktop Preferences shortcut.</p></td>
    </tr>
    <tr>
       <td><p><strong>--no-auto-start</strong></p></td>
       <td><p>Stops the per-user SandboxManager process from starting on logon.</p></td>
    </tr>
    <tr>
       <td><p><strong>--no-auto-update</strong></p></td>
       <td><p>Disables the check to see if new versions of the client are available.</p></td>
    </tr>
    <tr>
       <td><p><strong>--no-redirector</strong></p></td>
       <td><p>Deprecated. </p></td>
    </tr>
    <tr>
       <td><p><strong>--no-shell-ext</strong></p></td>
       <td><p>Disables the Turbo Launcher from being visible.</p></td>
    </tr>
    <tr>
       <td><p><strong>--offline</strong></p></td>
       <td><p>Forces Turbo commands to run in offline mode, if possible. Any command that requires access to online resources will fail.</p></td>
    </tr>
    <tr>
       <td><p><strong>--shutdown-period</strong></p></td>
       <td><p>Specifies the number of minutes that the Turbo Sandbox Manager is idle before shutting down.</p></td>
    </tr>
    <tr>
       <td><p><strong>--silent</strong></p></td>
       <td><p>Turbo Client installs without any UI popups.</p></td>
    </tr>
    <tr>
       <td><p><strong>turbo config flags</strong></p></td>
       <td><p>Turbo Client installs with the specified turbo config setting. See turbo config for available flags.</p></td>
      </tr>
</table>

**Exit Codes**

When using the uninstall command, SandboxManager.exe will return one of the following exit codes:

<table>
      <tr>
         <th>
            <p>Exit Code</p>
         </th>
         <th>
            <p>Description</p>
         </th>
      </tr>
      <tr>
         <td>
            <p>0</p>
         </td>
         <td>
            <p>Success - The operation completed successfully</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>1</p>
         </td>
         <td>
            <p>Unknown Error - An unexpected error occurred</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>2</p>
         </td>
         <td>
            <p>Elevation Error - The operation requires administrator privileges</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>3</p>
         </td>
         <td>
            <p>Install Error - An error occurred during installation</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>4</p>
         </td>
         <td>
            <p>Uninstall Error - An error occurred during uninstallation</p>
         </td>
      </tr>
</table>

Note: When uninstalling with administrator privileges, ensure all containers are stopped and no Turbo processes are running to avoid potential uninstallation issues.

### Uninstalling the Turbo Client

**Uninstalling Turbo Client via Control Panel**

You can uninstall the Turbo Client or the TurboLauncher specifically from the Windows **Uninstall or change a program** screen (previously called **Add/Remove Programs**).

**Uninstalling Turbo Client via the Command Line**

To uninstall the Turbo.net Sandbox Manager, you may pass the `/uninstall` flag to the TurboSandbox.exe in the **%LOCALAPPDATA%\turbo\[client-version]** directory for single user installs or **%PROGRAMFILES(x86)%\turbo\[client-version]** for all user installs.

```
# Uninstall for single user
C:\> "%LOCALAPPDATA%\Turbo\[client-version]\TurboSandbox.exe" /uninstall /silent

# Uninstall for all users
C:\> "C:\Program Files (x86)\Turbo\[client-version]\TurboSandbox.exe" /uninstall /silent
```

For unattended or scripted uninstalls, pass the `/silent` flag in addition.

Note that if the client is installed for all users, you would have to run from an elevated command prompt or the command will fail with insufficient privileges.

**TurboSandbox.exe Uninstall Flags**

Pass the following flags to the TurboSandbox.exe to uninstall specific components or the whole Turbo Client.

<table>
      <tr>
         <th>
            <p>Parameter</p>
         </th>
         <th>
            <p>Behavior</p>
         </th>
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
