![setup-failed-db-error](/images/setup-failed.png)## Installation Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while installing Turbo Server.

### Common Issues

The following table lists common issues/questions and their solutions:

<table>
   <tr>
      <th data-column="0">
         <div>
            <p>Issue/Question</p>
         </div>
      </th>
      <th data-column="1">
         <div>
            <p>Solution</p>
         </div>
      </th>
   </tr>
   <tr>
      <td colspan="1">There is an error during installation: Turbo Server installation failed, please contact the administrator.</td>
      <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Server service.</td>
   </tr>
   <tr>
      <td colspan="1">The Turbo Server service fails to start.</td>
      <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Server service.<br/><br/>If the service continues to fail to start, review the required ports for the installed roles. Ensure that other services such as IIS do not conflict with required ports.</td>
   </tr>
   <tr>
      <td>
         <p>I am unable to access the Administration Site or Hub Site from another machine.</p>
      </td>
      <td>
         <p>Microsoft Windows security settings might be restricting external connections to the ports assigned to the Administration and/or Hub sites. For information about configuring Turbo Server security settings, refer to <em>Configuring Turbo Server Security</em>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>My application does not appear on the Turbo Server portal.</p>
      </td>
      <td>
         <p>Verify that the application has been pushed to the correct org account dashboard (for turbo.net hub) or namespace (for Turbo Server). For more information about publishing application versions, refer to <em>Managing Applications</em>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Where do I install a new license?</p>
      </td>
      <td>
         <p>New licenses can be applied by clicking the <strong>New License</strong> link found on the <strong>Admin</strong> page in the Administration Site.</p>
      </td>
   </tr>
   <tr>
      <td colspan="1">Turbo Server is no longer accessible after making a Network Configuration change</td>
      <td colspan="1">Turbo Server service may need to be restarted after making a network configuration change. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Server service.</td>
   </tr>
   <tr>
      <td>
         <p>HTML5 cloud launch fails to start the application and results in the generic error page.</p>
      </td>
      <td>
      <p>Review the <strong>SSL troubleshooting</strong> documentation. If it is not a certificate issue, the application server may not be accessible from the broker. Check that port 80 or 443 can be accessed from the broker to the application server.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>HTML5 cloud launch fails to start the application with <em>The service not available</em> error.</p>
      </td>
      <td>
      <p>This error may occur if the application login mode is set to <strong>ask</strong>, and the user attempts to login with a user that is not part of the Remote Desktop Users group. Ensure the user is part of the Remote Desktop Users group.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Help! I forgot the administrator account password and can't access the Administration Site.</p>
      </td>
      <td>
         <p>Remove the admin group by using the server cli. Open a command prompt as administrator and navigate to the installation folder. Run `Server.exe admin user-group 2 clear` which clears all users from the server administrator's group. This allows you to access the the Administration Site without login. Reset the admin user's password and add the user back to the administrator's group to secure the Administration Site.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>An error occurs when pushing large images to the hub.</p>
      </td>
      <td>
         <p>Hub JVM may require more memory to synchornize large images. Navigate to the admin's /admin/domain/servers.aspx page and navigate to the Hub server's settings. Increase the Hub heap max setting.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>The admin site displays <em>Compiler Error Message: The compiler failed with error code -1073741502.</em></p>
      </td>
      <td>
         <p>The service user does not have permissions to modify the asp.net temporary compiler cache. Stop the Turbo service. Delete <em>C:\Windows\Microsoft.NET\Framework\{version}\Temporary ASP.NET Files</em>. Restart the Turbo service.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Unable to run applications remotely on Application Server due to Windows Interactive Login Message feature.</p>
      </td>
      <td>
         <p>Use the **Notice and Consent** setting under /admin/general. Remove the group policy as described [here](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-message-text-for-users-attempting-to-log-on), and disable the following registry keys:<br/>
           <em>HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\winlogon\
          LegalNoticeCaption
           LegalNoticeText</em></p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Error 'The remote name could not be resolved' when accessing the administration site.</p>
      </td>
      <td>
         <p>Open command prompt on the Hub server and issue ping commands to well known hosts. If the ping commands fail then the DNS server may not be resolving correctly. Switch to a public DNS server and see if the ping commands work. If they work then the error is due to the previous DNS server.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Upgrade fails with error 'Cannot start service Turbo on computer'.</p>
      </td>
      <td>
         <p>Unknown error in Windows service control manager. Restart the computer and try again.</p>
      </td>
   </tr>  
   <tr>
      <td>
         <p>Requests to the Portal site, APIs, or other external web services hang when the Turbo Server is under heavy usage.</p>
      </td>
      <td>
         <p>The Turbo Server Apache configuration may need to be updated to increase the number of request threads. Please refer to the <a href="/docs/server/optimization#network">Network Optimization</a> documentation.</p>
      </td>
   </tr>  
</table>

### Performance Counters

Turbo Server uses performance counters to track and report server load information. These reports may be viewed on the Turbo Server administration site [Domain page](/server/administration/domain).

If the load information for a server is missing, then the Turbo service user may not have permission to access performance counter data. To grant permission to the Service user:

1. Log on to the application server.
2. Open **Server Manager** and click on **Tools > Computer Management**.
3. From the **Computer Management** window, click on **Local Users and Groups > Users.**
4. Right-click on the service user and click **Properties**.
5. Click on the **Member Of** tab and check that the **Performance Monitor Users** group is listed.
6. If the group is not listed, click **Add** and enter **Performance Monitor Users**, then click OK.

This group is automatically added to the service user during Turbo Server installation.

### Enable Diagnostic Mode

Enabling diagnostic mode generates debug output logs. These can be used to help the Turbo support staff diagnose and debug issues.

#### Turbo Client

Diagnostic logs are written to the **c:\users\[user]\appdata\local\turbo\logs** directory.

#### Turbo Server

When troubleshooting an issue related to the general administration of Turbo Server, enable diagnostic mode for Turbo Server. Complete the following steps to enable diagnostic mode for Turbo Server:

1. Open a Windows Command Prompt as an administrator (cmd.exe).

2. Enter the following command: **net stop turbo**

3. Navigate to **C:\ProgramData\Turbo Server** and open **settings.xml** with Notepad or another text editor.

4. Add a new element called **TraceLevel** with value **Debug** as a child element to **Settings**; after adding this element the file should resemble the following:

   ```
     <?xml version="1.0" encoding="utf-8"?>
     <settings>
   	  <InstallPath>[Path]</InstallPath>
   	  <InstalledVersion>[Version]</InstalledVersion>
   	  <DbLibraryConnection>embedded</DbLibraryConnection>
   	  <DbManagerConnection>embedded</DbManagerConnection>
   	  <TraceLevel>Debug</TraceLevel>
     </settings>
   ```

5. Enter the following command: **net start turbo**

### Locating Log Files

There are several types of logs available for Turbo Server, including logs for the installation process, Apache, and SQL Server. The log file locations are dependent on the install location of Turbo Server. The default location is "C:\Program Files\Turbo Server".

**Turbo Server Installation Logs**

- _[Install Directory]\logs\Setup.log_

**Turbo Server Service Logs**

- _[Install Directory]\logs\\\*.log_

**Turbo Server Web Services Logs**

- _[Install Directory]\Sandbox\MODIFIED\\@PROGRAMFILESX86@\Turbo Server\Web\logs\\\*.log_
- _[Install Directory]\Sandbox\MODIFIED\\@PROGRAMFILESX86@\Turbo Server\Web\Hub\logs\\\*.log_

**Turbo Server SQL Server Logs (Embedded SQL Server Express)**

- _[Install Directory]\Sandbox\MODIFIED\\@PROGRAMFILESX86@\Microsoft SQL Server\MSSQL.1\MSSQL\LOG_

**Turbo Server Apache Logs**

- _[Install Directory]\Sandbox\MODIFIED\\@PROGRAMFILESX86@\Apache Software Foundation\Apache2.2\logs\error.log_

**Turbo Server Logs**

- Portal and Broker servers write all log traces to the console. These are archived in their container logs xcstream\_\*.txt files. Use `turbo logs [container] --export=c:\path` to retrieve the logs.
- Application Server provisioning logs are stored in _C:\Program Files (x86)\Turbo\ApplicationServer\logs_.

### Starting and Stopping the Turbo Server Service

Oftentimes, troubleshooting and fixing problems in Turbo Server requires the Turbo Server service be restarted.

There are currently two ways of doing this, through either the Control Panel or the Command Prompt. Each method is listed, below:

1.  Through the **Control Panel**

    a. Navigate to _Control Panel > Administrative Tools > Services_ or _Control Panel > System and Security > Administrative Tools > Services_

    b. Restart the **Turbo Server** service

2.  Via the **Command Prompt** using the **net** command

    a. Run a new command prompt (cmd.exe) as Administrator

    b. Type the command net stop turbo to stop the Turbo Server service

    The expected output for this command is:

        The Turbo Server service is stopping.
        The Turbo Server service was stopped successfully.

    c. Type the command net start turbo to start the Turbo Server service

    The expected output for this command is:

        The Turbo Server service is starting.
        The Turbo Server service was started successfully.

### Windows Event Viewer

The Windows Event Viewer is another useful source of information. If there is an issue starting the Windows service for Turbo Server there may be information reported in the Window Event Viewer to help diagnose the problem.

### Setup Failed!

Error details: A network related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify the instance name is correct and that SQL Server is configured to allow remote connections.

![setup-failed-db-error](/images/setup-failed.png)

The error may occur during setup due to the database being unavailable. Please ensure the SQL server can be connected from the server with the specified installation credentials. If installing in standalone server mode, the embedded database may not be available yet. Check to see if the Turbo Server Service was installed correctly and is in the process of booting up. If so, then wait a few minutes and attempt to access the administration website (typically available at http://localhost/admin).
