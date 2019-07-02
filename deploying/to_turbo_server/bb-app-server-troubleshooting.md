### Application Server Troubleshooting

A common point of failure is due to the group policy applied to the application server.

#### Group Policy Settings

In a typical enterprise scenario the administrator has applied Microsoft's security baseline group policies on Windows servers. There are some group policies that will prevent the application server from functioning. Ensure the following group policies are either unconfigured or set to the following values in the table:

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
         <td colspan="1">Administrative Templates > Windows Components > Windows Remote Management > WinRM Service</td>
         <td colspan="1">Allow remote server management through WinRM</td>
         <td colspan="1">Enabled or not configured</td>
         <td colspan="1">Security baseline default value is not configured.</td>
      </tr>
      <tr>
         <td colspan="1"></td>
         <td colspan="1">Allow Basic authentication</td>
         <td colspan="1">Enabled</td>
         <td colspan="1">Security baseline will set this to disabled. Broker communicates with the application server over http and must be enabled.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Allow unencrypted traffic</td>
        <td colspan="1">Enabled</td>
        <td colspan="1">Security baseline will set this to disabled. Broker communicates with the application server over http and must be enabled.</td>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Security</td>
        <td colspan="1">Always prompt for password upon connection</td>
        <td colspan="1">Disabled</td>
        <td colspan="1">A login prompt will prevent remoteapp applications from launching.</td>
      </tr>
      <tr>
        <td colspan="1">Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections</td>
        <td colspan="1">Allow users to connect remotely by using Remote Desktop Services</td>
        <td colspan="1">Enabled or not configured</td>
        <td colspan="1">If this is not configured and users are able to connect then it may be left as not configured.</td>
      </tr>
      <tr>
        <td colspan="1">Windows Settings > Security Settings > Local Policies > User Rights Assignment</td>
        <td colspan="1">Deny access to this computer from the network</td>
        <td colspan="1">Remove Users</td>
        <td colspan="1">Local users must be able to remote into application server to run applications. This is not required if using active directory authentication.</td>
      </tr>
      <tr>
        <td colspan="1"></td>
        <td colspan="1">Deny log on through Remote Desktop Services</td>
        <td colspan="1">Remove Users</td>
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
</table>

#### Diagnose WinRM Errors

If the broker logs reveal errors WinRM errors in the stacktrace, the administrator can manually test the WinRM on the application server.

The application server must have WinRM Client enabled for diagnostics commands. The following table specifies the required group policies for allowing WinRM client:

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
#### RemoteApp Registry Settings

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
</table>

## Provision Failures

Occasionally the application server provisoner may fail. Please try again and contact support@turbo.net if the failure repeats.

