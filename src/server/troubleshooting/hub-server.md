![setup-failed-db-error](/images/setup-failed.png)## Installation Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while installing Turbo Server.

### Common Issues

The following table lists common issues/questions and their solutions:

## Troubleshooting Guide

| Issue/Question | Solution |
|---------------|----------|
| **Turbo Server installation failed, please contact the administrator.** | This may occur if there is a timeout when starting or accessing the database services. Go to *Control Panel > Administrative Tools > Services* and try restarting the Turbo Server service. |
| **The Turbo Server service fails to start.** | This may occur if there is a timeout when starting or accessing the database services. Go to *Control Panel > Administrative Tools > Services* and try restarting the Turbo Server service.<br/><br/>If the service continues to fail to start, review the required ports for the installed roles. Ensure that other services such as IIS do not conflict with required ports. |
| **I am unable to access the Administration Site or Hub Site from another machine.** | Microsoft Windows security settings might be restricting external connections to the ports assigned to the Administration and/or Hub sites. For information about configuring Turbo Server security settings, refer to *Configuring Turbo Server Security*. |
| **My application does not appear on the Turbo Server portal.** | Verify that the application has been pushed to the correct org account dashboard (for turbo.net hub) or namespace (for Turbo Server). For more information about publishing application versions, refer to *Managing Applications*. |
| **Where do I install a new license?** | New licenses can be applied by clicking the **New License** link found on the **Admin** page in the Administration Site. |
| **Turbo Server is no longer accessible after making a Network Configuration change.** | Turbo Server service may need to be restarted after making a network configuration change. Go to *Control Panel > Administrative Tools > Services* and try restarting the Turbo Server service. |
| **HTML5 cloud launch fails to start the application and results in the generic error page.** | Review the **SSL troubleshooting** documentation. If it is not a certificate issue, the application server may not be accessible from the broker. Check that port 80 or 443 can be accessed from the broker to the application server. |
| **HTML5 cloud launch fails to start the application with "The service not available" error.** | This error may occur if the application login mode is set to **ask**, and the user attempts to log in with a user that is not part of the Remote Desktop Users group. Ensure the user is part of the Remote Desktop Users group. |
| **Help! I forgot the administrator account password and can't access the Administration Site.** | Remove the admin group by using the server CLI. Open a command prompt as administrator and navigate to the installation folder. Run:<br/>`Server.exe admin user-group 2 clear`<br/>This clears all users from the server administrator's group, allowing you to access the Administration Site without login. Reset the admin user's password and add the user back to the administrator's group to secure the site. |
| **An error occurs when pushing large images to the hub.** | The Hub JVM may require more memory to synchronize large images. Navigate to `/admin/domain/servers.aspx` in the admin panel and update the Hub server settings. Increase the Hub heap max setting. |
| **The admin site displays "Compiler Error Message: The compiler failed with error code -1073741502."** | The service user does not have permissions to modify the ASP.NET temporary compiler cache. Stop the Turbo service. Delete:<br/>`C:\Windows\Microsoft.NET\Framework\{version}\Temporary ASP.NET Files`<br/>Restart the Turbo service. |
| **Unable to run applications remotely on Application Server due to Windows Interactive Login Message feature.** | Use the **Notice and Consent** setting under `/admin/general`. Remove the group policy as described [here](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/interactive-logon-message-text-for-users-attempting-to-log-on) and disable the following registry keys:<br/><br/>`HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\winlogon\`<br/>`LegalNoticeCaption`<br/>`LegalNoticeText` |
| **Error "The remote name could not be resolved" when accessing the administration site.** | Open a command prompt on the Hub server and issue `ping` commands to well-known hosts. If the ping commands fail, then the DNS server may not be resolving correctly. Switch to a public DNS server and retry. If the issue is resolved, the error was due to the previous DNS server. |
| **Upgrade fails with error "Cannot start service Turbo on computer".** | Unknown error in Windows Service Control Manager. Restart the computer and try again. |
| **Requests to the Portal site, APIs, or other external web services hang when the Turbo Server is under heavy usage.** | The Turbo Server Apache configuration may need to be updated to increase the number of request threads. Please refer to the [Network Optimization](/docs/server/optimization#network) documentation. |



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
