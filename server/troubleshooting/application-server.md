## Application Server Troubleshooting

### Group Policy Settings

A common point of failure is due to the group policy applied to the application server. In a typical enterprise scenario the administrator has applied Microsoft's security baseline group policies on Windows servers. There are some group policies that will prevent the application server from functioning. Some of these policies may not appear in your Group Policy editor if the template is missing from your Windows Policy folder, but must be changed to install correctly. Ensure the following group policies are either unconfigured or set to the following values in the table:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Path</p>
            </div>
         </th>
         <th data-column="1">
           <div>
             <p>Setting</p>
          </div>
         <th data-column="2">
            <div>
               <p>Value</p>
            </div>
         </th>
         <th data-column="3">
           <div>
             <p>Comment</p>
           </div>
         </th>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security</td>
        <td colspan="1">Always prompt for password upon connection</td>
        <td colspan="1">Disabled</td>
        <td colspan="1">A login prompt will prevent remoteapp applications from launching.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Require use of specific security layer for remote (RDP) connections</td>
        <td colspan="1">Enabled (SSL) or not configured</td>
        <td colspan="1">Enhances security by requiring TLS 1.0 to authenticate the RD Session Host server during RDP connections.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Require user authentication for remote connections by using Network Level Authentication</td>
        <td colspan="1">Enabled or not configured</td>
        <td colspan="1">Enhances security by requiring user authentication earlier in the remote connection process. Some clients may require NLA authentication to login.</td>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections</td>
        <td colspan="1">Allow users to connect remotely by using Remote Desktop Services</td>
        <td colspan="1">Enabled or not configured</td>
        <td colspan="1">If this is not configured and users are able to connect then it may be left as not configured.</td>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Device and Resource Redirection</td>
        <td colspan="1">Do no allow drive redirection</td>
        <td colspan="1">Disabled or not configured (Recommended)</td>
        <td colspan="1">Disables the mapping of client drives when streaming remote applications.</td>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Session Time Limits</td>
        <td colspan="1">Set time limit for active Remote Desktop Services sessions</td>
        <td colspan="1">21600000 (Recommended)</td>
        <td colspan="1">The maximum amount of time that a Remote Desktop Services session can be active before it is automatically disconnected.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Set time limit for active but idle Remote Desktop Services sessions</td>
        <td colspan="1">21600000 (Recommended)</td>
        <td colspan="1">The maximum amount of time that a Remote Desktop Services session can be active before it is automatically disconnected.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Set time limit for disconnected sessions</td>
        <td colspan="1">300000 (Recommended)</td>
        <td colspan="1">The maximum amount of time that a disconnected session remains active on the server.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Set time limit for logoff of RemoteApp sessions</td>
        <td colspan="1">600000 (Recommended)</td>
        <td colspan="1">How long a user's RemoteApp session will remain in a disconnected state after closing all RemoteApp programs before the session is logged off from the RD Session Host server.</td>
      </tr>
      <tr>
        <td colspan="1">Windows Settings > Security Settings > Local Policies > User Rights Assignment</td>
        <td colspan="1">Deny access to this computer from the network</td>
        <td colspan="1">Remove Local account</td>
        <td colspan="1">Local users must be able to remote into application server to run applications and configure the machine using the --app-server install. This is not required if using active directory authentication.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Deny log on through Remote Desktop Services</td>
        <td colspan="1">Remove Local account</td>
        <td colspan="1">Local users must be able to remote into application server to run applications. This is not required if using active directory authentication.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Allow log on through Remote Desktop Services</td>
        <td colspan="1">Add Users</td>
        <td colspan="1">Click object types and check "groups" then add the object "Users".</td>
      </tr>
      <tr>
        <td colspan="1">Windows Settings > Security Settings > Application Control Policies > AppLocker > Executable Rules</td>
        <td colspan="1">Allow Everyone</td>
        <td colspan="1">%OSDRIVE%\PROGRAMDATA\TURBO\*</td>
        <td colspan="1">Turbo VM images may be cached in the PROGRAMDATA folder.</td>
      </tr>
      <tr>
        <td colspan="1">Windows Settings > Security Settings > Application Control Policies > AppLocker > Executable Rules</td>
        <td colspan="1">Allow Everyone</td>
        <td colspan="1">%OSDRIVE%\USERS\*\APPDATA\LOCAL\TURBO\*</td>
        <td colspan="1">Turbo Container Sandboxes may be cached in the user's local AppData folder.</td>
      </tr>
      <tr>
        <td colspan="1">Windows Settings > Security Settings > Local Policies > Security Options</td>
        <td colspan="1">Interactive Logon: Machine inactivity limit</td>
        <td colspan="1">0 or Not Defined</td>
        <td colspan="1">Prompts user to login after idle timeout. Use Admin > General > Streaming settings instead.</td>
      </tr>
</table>

### Diagnosing WinRM Errors (LEGACY)

The following group policies enables WinRM for legacy (prior to version 2019.7.26) Turbo Broker:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Path</p>
            </div>
         </th>
         <th data-column="1">
           <div>
             <p>Setting</p>
          </div>
         <th data-column="2">
            <div>
               <p>Value</p>
            </div>
         </th>
         <th data-column="3">
           <div>
             <p>Comment</p>
           </div>
         </th>
      </tr>
	  <tr>
         <td colspan="1">Administrative Templates > SCM: Pass the Hash Mitigations</td>
         <td colspan="1">Apply UAC restrictions to local accounts on network logons</td>
         <td colspan="1">Disabled or not configured</td>
         <td colspan="1">Security baseline will enable this value. If the policy path is missing, locate the ptH.admx and add it in your group policy templates folder.</td>
      </tr>
      <tr>
         <td colspan="1">Administrative Templates > Windows Components > Windows Remote Management > WinRM Client</td>
         <td colspan="1">Allow Basic authentication</td>
         <td colspan="1">Enabled or not configured</td>
         <td colspan="1">Security baseline default value is not configured.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Allow unencrypted traffic</td>
         <td colspan="1">Enabled or not configured</td>
         <td colspan="1">Security baseline will set this to disabled. The winrm command will test the connection using basic http.</td>
      </tr>
      <tr>
         <td colspan="1">Administrative Templates > Windows Components > Windows Remote Management > WinRM Service</td>
         <td colspan="1">Allow remote server management through WinRM</td>
         <td colspan="1">Enabled or not configured</td>
         <td colspan="1">Application server provision requires WinRM. If enabled, make sure you set the IPv4 and IPv6 filters correctly.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Allow Basic authentication</td>
         <td colspan="1">Enabled</td>
         <td colspan="1">Application server provision requires WinRM.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Allow unencrypted traffic</td>
        <td colspan="1">Enabled</td>
        <td colspan="1">Application server provision requires WinRM.</td>
      </tr>
	  <tr>
        <td colspan="1">Windows Settings > Security Settings > Local Policies > User Rights Assignment</td>
        <td colspan="1">Deny access to this computer from the network</td>
        <td colspan="1">Remove Local account</td>
        <td colspan="1">Application server provision requires WinRM potentially over the local administrator account.</td>
      </tr>
</table>

In a command prompt on the application server, issue the following command:

```
>winrm identify -r:http://localhost:5985 -auth:basic -u:{adminuser} -p:{password} -encoding:utf-8
```

The command should be an IndentifyResponse. If command fails and you have checked the group policies have been properly set, try the `winrm quickconfig` command. Note that the quickconfig command will request LocalAccountTokenFilterPolicy. Turbo does not require that setting to be enabled.

```
>winrm quickconfig
WinRM service is already running on this machine.
WinRM is not set up to allow remote access to this machine for management.
The following changes must be made:

Configure LocalAccountTokenFilterPolicy to grant administrative rights remotely to local users.

Make these changes [y/n]? y

WinRM has been updated for remote management.

Configured LocalAccountTokenFilterPolicy to grant administrative rights remotely to local users.

>winrm quickconfig
WinRM service is already running on this machine.
WinRM is already set up for remote management on this computer.
```

### RemoteApp Registry Settings

The application server provisioner should make the required changes to enable RemoteApp execution. Ensure these registry settings were applied properly:

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Path</p>
            </div>
         </th>
         <th data-column="1">
           <div>
             <p>Setting</p>
          </div>
         <th data-column="2">
            <div>
               <p>Value</p>
            </div>
         </th>
         <th data-column="3">
           <div>
             <p>Comment</p>
           </div>
         </th>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services</td>
         <td colspan="1">fDenyTSConnections</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1">Enables Terminal Services.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">fResetBroken</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1"></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">fDisableCam</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1">Enables audio.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">DisablePasswordSaving</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1"></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">fPromptForPassword</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1"></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">fEncryptRPCTraffic</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1"></td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">MinEncryptionLevel</td>
         <td colspan="1">absent</td>
         <td colspan="1">Remove this value.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Shadow</td>
         <td colspan="1">1</td>
         <td colspan="1">Enable admin session shadowing.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">fSingleSessionPerUser</td>
         <td colspan="1">0</td>
         <td colspan="1">Allows the user to run multiple applications in separate sessions.</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Policies\Microsoft\Internet Explorer\Main</td>
         <td colspan="1">DisableFirstRunCustomize</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Disable IE first run dialog</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\Software\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\1</td>
         <td colspan="1">2500</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1">Enable IE Protected mode for local intratet, avoiding warning on first use</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\Software\Policies\Microsoft\Windows\Windows Error Reporting</td>
         <td colspan="1">DontShowUI</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Disable crash report UI</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\Software\Policies\Microsoft\Windows\WindowsUpdate</td>
         <td colspan="1">ElevateNonAdmins</td>
         <td colspan="1">0 (DWORD)</td>
         <td colspan="1">Disable Windows Update UI for non-admins</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Ext</td>
         <td colspan="1">RestrictToList</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Disable IE addons dialogs</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList</td>
         <td colspan="1">fDisabledAllowList</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Enables the RemoteApp allowed program list.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">CustomRDPSettings</td>
         <td colspan="1">authentication level:i:2 (String)</td>
         <td colspan="1">Specifies RemoteApp custom settings such as the authentication level.</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList\Applications\turboplay</td>
         <td colspan="1">Path</td>
         <td colspan="1">C:\Program Files (x86)\Turbo\Cmd\turboplay.exe (String)</td>
         <td colspan="1">Make sure turboplay is allowed.</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList\Applications\turbo</td>
         <td colspan="1">Path</td>
         <td colspan="1">C:\Program Files (x86)\Turbo\Cmd\turbo.exe (String)</td>
         <td colspan="1">Make sure turbo is allowed.</td>
      </tr>
      <tr>
         <td colspan="1">HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp</td>
         <td colspan="1">SecurityLayer</td>
         <td colspan="1">2 (DWORD)</td>
         <td colspan="1">Require TLS 1.0 to authenticate the RD Session Host server.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">UserAuthentication</td>
         <td colspan="1">1 (DWORD)</td>
         <td colspan="1">Enable Network Level Authentication.</td>
      </tr>
</table>

### Windows Updates

The following Windows updates are required to establish secure connections between the client and RD Session Host. Not installing the following updates on the application server may prevent connections between the client and application server from functioning:

<table>
   <tr>
      <th data-column="0">
         <div>
            <p>Operating System</p>
         </div>
      </th>
      <th data-column="2">
         <div>
            <p>Update</p>
         </div>
      </th>
      <th data-column="3">
         <div>
            <p>Comment</p>
         </div>
      </th>
   </tr>
   <tr>
      <td colspan="1">Windows Server 2012</td>
      <td colspan="1">KB4103730 or KB4103726</td>
      <td colspan="1">Security update for Remote Desktop connections.</td>
   </tr>
   <tr>
      <td colspan="1">Windows Server 2016</td>
      <td colspan="1">KB4103723</td>
      <td colspan="1">Security update for Remote Desktop connections.</td>
   </tr>
</table>

### Windows Update Notifications

Disable Automatic Updates if Windows Update notifications are being shown on remote sessions:

First open the Local Group Policy Editor:

```
> gpedit.msc
```

Set **Configure Automatic Updates** to disabled under **Computer Configuration/Administrative Templates/Windows Components/Windows Update**.

### Application Launch Issues

**The remote application failed to launch**

There is a 20 second interval when the Turbo Server service is starting where the communication between the Broker and Application Server is out of sync. The application launch should succeed once the interval has elapsed.

**Application Server performance is poor**

Ensure that background processes such as Windows updates is disabled when the Application Server is expected to be in use. Log in as administrator and open Task Manager. If the TiWorker.exe is running with high CPU usage then it indicates that a Windows update is in progress.

### Application Server is unavailable

**The broker logs indicate the application server is unavailable**

To check if an application server is running and accessible, logon to the Portal server and try opening a browser tab to `http://{app-server-host}/server/`, replacing `{app-server-host}` with the internal hostname of your application server (**Internal Hostname or IP Address** in your domain server settings). A successful response will show a page listing the server version:

![Application Server Status](https://hub.turbo.net/images/docs/appserver-status.png)

If this page return a **IIS 404** error page, then uninstall IIS from the server. If IIS is using the same port as the Application server, then the Application server will not be reachable.

If this page returns a **Not Found (404)** response code, then the application server may be down or the internal hostname may be incorrect. To verify that the application server is running, logon to the application server and check that the **Turbo.AppServer** service is running.

If this page returns a **Connection Timeout**, then there may be a Windows firewall issue. To verify your Windows firewall configuration, please refer to the [Firewall and Security](https://hub.turbo.net/docs/server/setup-and-deployment/prerequisites#firewall-and-security) documentation. If the firewall appears to be configured correctly, restart the Turbo service.

If this page returns a **Service Unavailable (503)** response code, then the application server is most likely restarting. Please wait a few minutes and try again. If the failure persists, please contact support.

### Application Issues

If the application itself is encountering errors or hangs, the first step to troubleshoot the issue is to log into the application server directly and attempt to run it there using the turbo command line interface (ie. `turbo run [app]`). If the problem reproduces in this way then see application troubleshooting suggestions [here](https://hub.turbo.net/docs/vm/troubleshooting/troubleshooting).

### Run in Cloud launch mode shows prompt to Select a session to reconnect to

Users will encounter the **Select a session to reconnect to** dialog when they use a Run in Cloud launch mode and the following conditions are met:

- The applications launched use the **Ask for Credentials** profile mode.
- The Windows user has more than one disconnected session on the application server.

If the user selects the correct session for the application, they will successfully reconnect to the session.

If the user selects the wrong session for the application, they will be switched to the correct session. However, the switch requires them to enter their password again.

If this is a new application launch, then the new application will be launched in the selected session. In this case, the user would see both the new application and the old application from the disconnected session in the same session.

This issue does not apply to applications configured with a **Temporary Profile** mode, because a unique session is created for each application.

The user may also avoid this dialog by completely exitting their applications before closing the browser tab, which closes the sessions instead of leaving them running in a disconnected state.

![Select a session to reconnect to dialog](https://hub.turbo.net/images/docs/disconnected_session.png)

### Run in Cloud launch mode shows another application in the same session

Users may see another application when they use a Run in Cloud launch mode and the following conditions are met:

- The applications launched use the **Ask for Credentials** profile mode.
- The Windows user has a disconnected session on the application server.

When this occurs, the user will reconnect to the disconnected session to launch the new application. They would also see the already running application from the disconnected session.

This issue does not apply to applications configured with a **Temporary Profile** mode, because a unique session is created for each application.

The user may also avoid this dialog by completely exitting their applications before closing the browser tab, which closes the sessions instead of leaving them running in a disconnected state.

### Application window disappears (Windowed) or shows lock screen (HTML5) after idling

If users report that their application window disappears when using the Run in Cloud (Windowed) launch mode or shows the lock screen when the Run in Cloud (HTML5) launch mode and the portal shows that the application is still active and connected, the application server may have the following group policy configured:
**Windows Settings > Security Settings > Local Policies > Security Options > Interactive Logon: Machine inactivity limit**.

To resolve this issue, set the Interactive Logon: Machine inactivity limit to 0 and use the [Streaming](https://hub.turbo.net/docs/server/administration/general#streaming) settings to control the application session length.

### Application server is online but is not servicing application launches

If an application server configured as part of your Turbo Server topology is online but is not servicing any application launches, there may be a fatal error that is preventing workloads from being assigned to that server. For example, an application server may not be properly configured to accept RDP connections.

The Turbo Server administrator should check the [Server Dashboard](https://hub.turbo.net/docs/server/administration/domain#managing-a-server-server-dashboard) on the Turbo Server administration site to see if there are any Fatal errors under the **Alerts** section. Fatal errors indicate that the server is unable to perform its assigned role and requires manual fixes.

If a Fatal alert is present, please follow the action recommended in Event column to repair the server then click the **Clear** action to restore server operation once you have confirmed the fix.
