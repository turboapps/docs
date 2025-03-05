# Application Server Troubleshooting

## Group Policy Settings

A common point of failure is due to the group policy applied to the application server. In a typical enterprise scenario the administrator has applied Microsoft's security baseline group policies on Windows servers. There are some group policies that will prevent the application server from functioning. Some of these policies may not appear in your Group Policy editor if the template is missing from your Windows Policy folder, but must be changed to install correctly. Ensure the following group policies are either unconfigured or set to the following values in the table:

| Path | Setting | Value | Comment |
|------|---------|-------|---------|
| Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security | Always prompt for password upon connection | Disabled | A login prompt will prevent remoteapp applications from launching. |
| | Require use of specific security layer for remote (RDP) connections | Enabled (SSL) or not configured | Enhances security by requiring TLS 1.0 to authenticate the RD Session Host server during RDP connections. |
| | Require user authentication for remote connections by using Network Level Authentication | Enabled or not configured | Enhances security by requiring user authentication earlier in the remote connection process. Some clients may require NLA authentication to login. |
| Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections | Allow users to connect remotely by using Remote Desktop Services | Enabled or not configured | If this is not configured and users are able to connect then it may be left as not configured. |
| Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Device and Resource Redirection | Do no allow drive redirection | Disabled or not configured (Recommended) | Disables the mapping of client drives when streaming remote applications. |
| Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Session Time Limits | Set time limit for active Remote Desktop Services sessions | 21600000 (Recommended) | The maximum amount of time that a Remote Desktop Services session can be active before it is automatically disconnected. |
| | Set time limit for active but idle Remote Desktop Services sessions | 21600000 (Recommended) | The maximum amount of time that a Remote Desktop Services session can be active before it is automatically disconnected. |
| | Set time limit for disconnected sessions | 300000 (Recommended) | The maximum amount of time that a disconnected session remains active on the server. |
| | Set time limit for logoff of RemoteApp sessions | 600000 (Recommended) | How long a user's RemoteApp session will remain in a disconnected state after closing all RemoteApp programs before the session is logged off from the RD Session Host server. |
| Windows Settings > Security Settings > Local Policies > User Rights Assignment | Deny access to this computer from the network | Remove Local account | Local users must be able to remote into application server to run applications and configure the machine using the --app-server install. This is not required if using active directory authentication. |
| | Deny log on through Remote Desktop Services | Remove Local account | Local users must be able to remote into application server to run applications. This is not required if using active directory authentication. |
| | Allow log on through Remote Desktop Services | Add Users | Click object types and check "groups" then add the object "Users". |
| Windows Settings > Security Settings > Application Control Policies > AppLocker > Executable Rules | Allow Everyone | %OSDRIVE%\PROGRAMDATA\TURBO\* | Turbo VM images may be cached in the PROGRAMDATA folder. |
| Windows Settings > Security Settings > Application Control Policies > AppLocker > Executable Rules | Allow Everyone | %OSDRIVE%\USERS\*\APPDATA\LOCAL\TURBO\* | Turbo Container Sandboxes may be cached in the user's local AppData folder. |
| Windows Settings > Security Settings > Local Policies > Security Options | Interactive Logon: Machine inactivity limit | 0 or Not Defined | Prompts user to login after idle timeout. Use Admin > General > Streaming settings instead. |

## Diagnosing WinRM Errors (LEGACY)

The following group policies enables WinRM for legacy (prior to version 2019.7.26) Turbo Broker:

| Path | Setting | Value | Comment |
|------|---------|-------|---------|
| Administrative Templates > SCM: Pass the Hash Mitigations | Apply UAC restrictions to local accounts on network logons | Disabled or not configured | Security baseline will enable this value. If the policy path is missing, locate the ptH.admx and add it in your group policy templates folder. |
| Administrative Templates > Windows Components > Windows Remote Management > WinRM Client | Allow Basic authentication | Enabled or not configured | Security baseline default value is not configured. |
| | Allow unencrypted traffic | Enabled or not configured | Security baseline will set this to disabled. The winrm command will test the connection using basic http. |
| Administrative Templates > Windows Components > Windows Remote Management > WinRM Service | Allow remote server management through WinRM | Enabled or not configured | Application server provision requires WinRM. If enabled, make sure you set the IPv4 and IPv6 filters correctly. |
| | Allow Basic authentication | Enabled | Application server provision requires WinRM. |
| | Allow unencrypted traffic | Enabled | Application server provision requires WinRM. |
| Windows Settings > Security Settings > Local Policies > User Rights Assignment | Deny access to this computer from the network | Remove Local account | Application server provision requires WinRM potentially over the local administrator account. |

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

## RemoteApp Registry Settings

The application server provisioner should make the required changes to enable RemoteApp execution. Ensure these registry settings were applied properly:

| Path | Setting | Value | Comment |
|------|---------|-------|---------|
| HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services | fDenyTSConnections | 0 (DWORD) | Enables Terminal Services. |
| | fResetBroken | 1 (DWORD) | |
| | fDisableCam | 0 (DWORD) | Enables audio. |
| | DisablePasswordSaving | 0 (DWORD) | |
| | fPromptForPassword | 0 (DWORD) | |
| | fEncryptRPCTraffic | 0 (DWORD) | |
| | MinEncryptionLevel | absent | Remove this value. |
| | Shadow | 1 | Enable admin session shadowing. |
| | fSingleSessionPerUser | 0 | Allows the user to run multiple applications in separate sessions. |
| HKLM:\SOFTWARE\Policies\Microsoft\Internet Explorer\Main | DisableFirstRunCustomize | 1 (DWORD) | Disable IE first run dialog |
| HKLM:\Software\Policies\Microsoft\Windows\CurrentVersion\Internet Settings\Zones\1 | 2500 | 0 (DWORD) | Enable IE Protected mode for local intratet, avoiding warning on first use |
| HKLM:\Software\Policies\Microsoft\Windows\Windows Error Reporting | DontShowUI | 1 (DWORD) | Disable crash report UI |
| HKLM:\Software\Policies\Microsoft\Windows\WindowsUpdate | ElevateNonAdmins | 0 (DWORD) | Disable Windows Update UI for non-admins |
| HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Ext | RestrictToList | 1 (DWORD) | Disable IE addons dialogs |
| HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList | fDisabledAllowList | 1 (DWORD) | Enables the RemoteApp allowed program list. |
| | CustomRDPSettings | authentication level:i:2 (String) | Specifies RemoteApp custom settings such as the authentication level. |
| HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList\Applications\turboplay | Path | C:\Program Files (x86)\Turbo\Cmd\turboplay.exe (String) | Make sure turboplay is allowed. |
| HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal Server\TSAppAllowList\Applications\turbo | Path | C:\Program Files (x86)\Turbo\Cmd\turbo.exe (String) | Make sure turbo is allowed. |
| HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp | SecurityLayer | 2 (DWORD) | Require TLS 1.0 to authenticate the RD Session Host server. |
| | UserAuthentication | 1 (DWORD) | Enable Network Level Authentication. |

## Windows Updates

The following Windows updates are required to establish secure connections between the client and RD Session Host. Not installing the following updates on the application server may prevent connections between the client and application server from functioning:

| Operating System | Update | Comment |
|-----------------|--------|---------|
| Windows Server 2012 | KB4103730 or KB4103726 | Security update for Remote Desktop connections. |
| Windows Server 2016 | KB4103723 | Security update for Remote Desktop connections. |

## Windows Update Notifications

Disable Automatic Updates if Windows Update notifications are being shown on remote sessions:

First open the Local Group Policy Editor:

```
> gpedit.msc
```

Set **Configure Automatic Updates** to disabled under **Computer Configuration/Administrative Templates/Windows Components/Windows Update**.

## Application Launch Issues

**The remote application failed to launch**

There is a 20 second interval when the Turbo Server service is starting where the communication between the Broker and Application Server is out of sync. The application launch should succeed once the interval has elapsed.

**Application Server performance is poor**

Ensure that background processes such as Windows updates is disabled when the Application Server is expected to be in use. Log in as administrator and open Task Manager. If the TiWorker.exe is running with high CPU usage then it indicates that a Windows update is in progress.

## Application Server is unavailable

**The broker logs indicate the application server is unavailable**

To check if an application server is running and accessible, logon to the Portal server and try opening a browser tab to `http://{app-server-host}/server/`, replacing `{app-server-host}` with the internal hostname of your application server (**Internal Hostname or IP Address** in your domain server settings). A successful response will show a page listing the server version:

![Application Server Status](/images/appserver-status.png)

If this page return a **IIS 404** error page, then uninstall IIS from the server. If IIS is using the same port as the Application server, then the Application server will not be reachable.

If this page returns a **Not Found (404)** response code, then the application server may be down or the internal hostname may be incorrect. To verify that the application server is running, logon to the application server and check that the **Turbo.AppServer** service is running.

If this page returns a **Connection Timeout**, then there may be a Windows firewall issue. To verify your Windows firewall configuration, please refer to the [Firewall and Security](/server/setup-and-deployment/prerequisites.html#firewall-and-security) documentation. If the firewall appears to be configured correctly, restart the Turbo service.

If this page returns a **Service Unavailable (503)** response code, then the application server is most likely restarting. Please wait a few minutes and try again. If the failure persists, please contact support.

## Application Issues

If the application itself is encountering errors or hangs, the first step to troubleshoot the issue is to log into the application server directly and attempt to run it there using the turbo command line interface (ie. `turbo run [app]`). If the problem reproduces in this way then see application troubleshooting suggestions [here](/client/turbo-vm/troubleshooting/common-errors).

## Run in Cloud launch mode shows prompt to Select a session to reconnect to

Users will encounter the **Select a session to reconnect to** dialog when they use a Run in Cloud launch mode and the following conditions are met:

- The applications launched use the **Ask for Credentials** profile mode.
- The Windows user has more than one disconnected session on the application server.

If the user selects the correct session for the application, they will successfully reconnect to the session.

If the user selects the wrong session for the application, they will be switched to the correct session. However, the switch requires them to enter their password again.

If this is a new application launch, then the new application will be launched in the selected session. In this case, the user would see both the new application and the old application from the disconnected session in the same session.

This issue does not apply to applications configured with a **Temporary Profile** mode, because a unique session is created for each application.

The user may also avoid this dialog by completely exitting their applications before closing the browser tab, which closes the sessions instead of leaving them running in a disconnected state.

![Select a session to reconnect to dialog](/images/disconnected_session.png)

## Run in Cloud launch mode shows another application in the same session

Users may see another application when they use a Run in Cloud launch mode and the following conditions are met:

- The applications launched use the **Ask for Credentials** profile mode.
- The Windows user has a disconnected session on the application server.

When this occurs, the user will reconnect to the disconnected session to launch the new application. They would also see the already running application from the disconnected session.

This issue does not apply to applications configured with a **Temporary Profile** mode, because a unique session is created for each application.

The user may also avoid this dialog by completely exitting their applications before closing the browser tab, which closes the sessions instead of leaving them running in a disconnected state.

## Application window disappears (Windowed) or shows lock screen (HTML5) after idling

If users report that their application window disappears when using the Run in Cloud (Windowed) launch mode or shows the lock screen when the Run in Cloud (HTML5) launch mode and the portal shows that the application is still active and connected, the application server may have the following group policy configured:
**Windows Settings > Security Settings > Local Policies > Security Options > Interactive Logon: Machine inactivity limit**.

To resolve this issue, set the Interactive Logon: Machine inactivity limit to 0 and use the [Streaming](/server/administration/domain.html#streaming) settings to control the application session length.

## Application server is online but is not servicing application launches

If an application server configured as part of your Turbo Server topology is online but is not servicing any application launches, there may be a fatal error that is preventing workloads from being assigned to that server. For example, an application server may not be properly configured to accept RDP connections.

The Turbo Server administrator should check the [Server Dashboard](/server/administration/domain.html#managing-a-server-server-dashboard) on the Turbo Server administration site to see if there are any Fatal errors under the **Alerts** section. Fatal errors indicate that the server is unable to perform its assigned role and requires manual fixes.

If a Fatal alert is present, please follow the action recommended in Event column to repair the server then click the **Clear** action to restore server operation once you have confirmed the fix.
