### Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while using Turbo Server.

#### Common Issues

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
         <td colspan="1">There is an error during installation: Turbo Hub Server installation failed, please contact the administrator.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Hub Server service.</td>
      </tr>
      <tr>
         <td colspan="1">The Turbo Hub Server service fails to start.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Hub Server service.</td>
      </tr>
      <tr>
         <td>
            <p>I am unable to access the Administration Site or Hub Site from another machine.</p>
         </td>
         <td>
            <p>Microsoft Windows security settings might be restricting external connections to the ports assigned to the Administration and/or Hub sites. For information about configuring Turbo Hub Server security settings, refer to <em>Configuring Turbo Hub Server Security</em>.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application does not appear on the Turbo Streaming Server portal.</p>
         </td>
         <td>
            <p>Verify that the application has been pushed to the correct org account dashboard (for turbo.net hub) or namespace (for Turbo Hub Server). For more information about publishing application versions, refer to <em>Managing Applications</em>.</p>
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
         <td colspan="1">Turbo Hub Server is no longer accessible after making a Network Configuration change</td>
         <td colspan="1">Turbo Hub Server service may need to be restarted after making a network configuration change. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the Turbo Hub Server service.</td>
      </tr>
</table>

#### Enable Diagnostic Mode

Enabling diagnostic mode generates debug output logs. These can be used to help the Turbo support staff diagnose and debug issues.

##### Turbo Client

Diagnostic logs are written to the **c:\users\[user]\appdata\local\turbo\logs** directory.

##### Turbo Server

When troubleshooting an issue related to the general administration of Turbo Hub Server, enable diagnostic mode for Turbo Hub Server. Complete the following steps to enable diagnostic mode for Turbo Hub Server:

1. Open a Windows Command Prompt as an administrator (cmd.exe).

2. Enter the following command: **net stop turbo**

3. Navigate to **C:\ProgramData\Turbo Server** and open **settings.xml** with Notepad or another text editor.

4. Add a new element called **TraceLevel** with value **Debug** as a child element to **Settings**; after adding this element the file should resemble the following:

	<?xml version="1.0" encoding="utf-8"?>
	<settings>
		<InstallPath>[Path]</InstallPath>
		<InstalledVersion>[Version]</InstalledVersion>
		<DbLibraryConnection>embedded</DbLibraryConnection>
		<DbManagerConnection>embedded</DbManagerConnection>
		<TraceLevel>Debug</TraceLevel>
	</settings>

5. Enter the following command: **net start turbo**

#### Locating Log Files

There are several types of logs available for Turbo Server, including logs for the installation process, Apache, and SQL Server. The log file locations are dependent on the install location of Turbo Server. The default location is "C:\Program Files\Turbo Server".

**Turbo Hub Server Installation Logs**

- _[Install Directory]\logs\Setup.log_

**Turbo Hub Server Service Logs**

- _[Install Directory]\logs\*.log_

**Turbo Hub Server Web Services Logs**
- _[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Turbo Server\Web\logs\*.log_
- _[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Turbo Server\Web\Hub\logs\*.log_

**SQL Server Logs (Embedded SQL Server Express)**

- _[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Microsoft SQL Server\MSSQL.1\MSSQL\LOG_

**Apache Logs**

- _[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Apache Software Foundation\Apache2.2\logs\error.log_

#### Starting and Stopping the Turbo Server Service

Oftentimes, troubleshooting and fixing problems in Turbo Server requires the Turbo Server service be restarted.

There are currently two ways of doing this, through either the Control Panel or the Command Prompt. Each method is listed, below:

1. Through the **Control Panel**

	a. Navigate to *Control Panel > Administrative Tools > Services* or *Control Panel > System and Security > Administrative Tools > Services*

	b. Restart the **Turbo Server** service

2. Via the **Command Prompt** using the **net** command

	a. Run a new command prompt (cmd.exe) as Administrator
	
	b. Type the command net stop turbo to stop the Turbo Server service
	
	The expected output for this command is:
	
		The Turbo Server service is stopping.
		The Turbo Server service was stopped successfully.
		
	c. Type the command net start turbo to start the Turbo Server service

	The expected output for this command is:

		The Turbo Server service is starting.
		The Turbo Server service was started successfully.
		
#### Windows Event Viewer

The Windows Event Viewer is another useful source of information. If there is an issue starting the Windows service for Turbo Hub Server there may be information reported in the Window Event Viewer to help diagnose the problem.