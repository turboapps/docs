### Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while using TurboServer.

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
         <td colspan="1">There is an error during installation: TurboServer installation failed, please contact the administrator.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to <em>Control Panel &gt; Administrative Tools &gt; Services</em> and try restarting the TurboServer service.</td>
      </tr>
      <tr>
         <td colspan="1">The TurboServer service fails to start.</td>
         <td colspan="1">This may occur if there is a timeout when starting or accessing the database services. Go to Control Panel &gt; Administrative Tools &gt; Services and try restarting the TurboServer service.</td>
      </tr>
      <tr>
         <td>
            <p>I am unable to access the Administration Site or Portal Site from another machine.</p>
         </td>
         <td>
            <p>Microsoft Windows security settings might be restricting external connections to the ports assigned to the Administration and/or Portal sites. For information about configuring TurboServer security settings, refer to&nbsp;Configuring TurboServer Security.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application does not appear on the Portal Site.</p>
         </td>
         <td>
            <p>Verify that the application has a published application version. Application versions are not published by default. For more information about publishing application versions, refer to&nbsp;Managing Applications. Check the application details page to ensure that the application is not blocked to users.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application will not launch from my external portal site.</p>
         </td>
         <td>
            <p>You may see the following warning message: <em>The application is not available from this web site.</em> If this site is hosted on external server, verify that the server is added to the&nbsp;<strong>Servers</strong>&nbsp;page on the Administration Site. For more information about adding servers refer to Managing Servers. After adding a new server verify that you are accessing the site with the specified server web address. If the application still does not launch TurboServer might be unable to resolve the host name for the external server. To make the host name fully resolvable, add an entry to the <strong>hosts</strong> file on the machine hosting TurboServer. The host file can be found at C:\Windows\System32\drivers\etc\hosts, and should be in the format: [external server IP address] [external server host name] somename.somecompany.com If the application still does not launch, verify that the security settings for TurboServer are correctly configured. Improper security settings can restrict access to the Turbo JavaScript API. For more information about how to configure security settings, refer to <span style="text-decoration: underline;"><a href="/display/spoondoc/Configure+Turbo+Server+Security"><span style="text-decoration: underline;">Configuring TurboServer Security</span></a></span>.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>My application runs when I access Portal Site using the machine name, but not when I use the fully qualified domain name.</p>
         </td>
         <td>
            <p>You may see the following warning message: <em>The application is not available from this web site.</em>&nbsp;On the&nbsp;<strong>Servers</strong>&nbsp;page of the Administration Site, select the <strong>Primary</strong> server and change the Web Address to the fully qualified domain name.&nbsp;It can take up to one minute for the change to take effect. Verify that the domain name is included in the list of allowed portals for your license; this can be verified in the License section on the&nbsp;<strong>Admin</strong>&nbsp;page.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Where do I install a new license?</p>
         </td>
         <td>
            <p>New licenses can be applied by clicking the&nbsp;<strong>New License</strong>&nbsp;link found on the&nbsp;<strong>Admin</strong>&nbsp;page in the Administration Site.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>I am unable to optimize an application version.</p>
         </td>
         <td>
            <p>After attempting to update a model, you might see the model status change to: <em>Error: The layer is compressed.</em> This error message indicates that the&nbsp;<strong>SVM</strong>&nbsp;was built with the <strong>Compress</strong> <strong>Payload</strong> option set, prohibiting optimization. Rebuilding&nbsp;<strong>SVM</strong>&nbsp;without this option set.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1">TurboServer is no longer accessible after making a Network Configuration change</td>
         <td colspan="1">TurboServer may need to be restarted after making a network configuration change. This can be done through the command line tool, Server.exe, as described here.</td>
      </tr>
      <tr>
         <td colspan="1">I am unable to add an application to the Start Menu.</td>
         <td colspan="1">
            <p>Verify that <strong>Desktop Registration</strong> is enabled on the TurboServer administrator site.</p>
            <p>Verify that the user is logging into the Turbo Console with the exact server name that is specified under "Servers" on the administrator site.</p>
         </td>
      </tr>
      <tr>
         <td colspan="1">The portal site fails to load.</td>
         <td colspan="1">
            <p>This may be due to an out of memory error in the Java runtime. <br>To verify this, look for the following error in the Jetty logs (see Locating Log Files):</p>
            <pre><code>java.lang.OutOfMemoryError: Java heap space</code></pre>
            
            <p>To increase the memory available, one must add a new "PortalJavaParams" parameter to the settings.xml file located in C:\ProgramData\TurboServer. This parameter will set the maximum heap size for the Java process. For an example, see below:</p>
            <pre><code class="java plain">&lt;Settings&gt;
&lt;PortalJavaParams&gt;-Xmx1200M&lt;/PortalJavaParams&gt;
&lt;/Settings&gt;</code></pre>
         </td>
      </tr>
</table>

#### Enable Diagnostic Mode

Enabling diagnostic mode generates debug output logs. These can be used to help the Turbo support staff diagnose and debug issues.

##### Turbo Plugin

When troubleshooting an issue related to launching applications from the web, Turbo recommends enabling diagnostic mode for the Turbo Plugin. Complete the following steps to enable diagnostic mode and capture debug output logs for the Turbo Plugin:

1. Download and run the DebugView application from: http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx

2. Run **Regedit.exe**, the Microsoft Windows default registry editor tool.

3. Add the following **String** value to the registry key: HKEY_CURRENT_USER\Software\Code Systems\Turbo with the name set to TraceLevel, and the value set to Debug.

4. Restart the Turbo Plugin by selecting **Start > All Programs > Startup > Turbo Sandbox Manager** ***n.nn***. If multiple versions of the Turbo Sandbox Manager exist, restart each.

5. When the application is launched again with Turbo, the DbgView Output displays debugging logs.

##### TurboServer

When troubleshooting an issue related to the general administration of TurboServer, enable diagnostic mode for TurboServer. Complete the following steps to enable diagnostic mode for TurboServer:

1. Open a Windows Command Prompt as an administrator (cmd.exe).

2. Enter the following command: **net stop turbo**

3. Navigate to **C:\ProgramData\Spoon Server** and open **settings.xml** with Notepad or another text editor.

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

6. Upon restarting TurboServer (with the previous command), debug logs are written to a text file located at **C:\Program Files\Spoon Server**. This log file is assigned a name based on the date and time when TurboServer restarted. A new log file is created on subsequent restarts of TurboServer.

#### Locating Log Files

There are several types of logs available for TurboServer, including logs for the installation process, Apache, and SQL Server. The log file locations are dependent on the install location of TurboServer. The default location is "C:\Program Files\TurboServer".

**TurboServer Installation Logs**

- __Install Directory_\logs\Setup.log_

**TurboServer Runtime Logs**

- __Install Directory_\logs\*.log*_
- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Spoon Server\Web\logs\*.log_

**TurboServer Jetty Logs**

- __Install Directory_\Sandbox\roaming\modified\@PROGRAMFILESX86@\Spoon Server\jetty\logs_

**SQL Server Logs (Embedded SQL Server Express)**

- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Microsoft SQL Server\MSSQL.1\MSSQL\LOG_

**Apache Logs**

- __Install Directory_\Sandbox\MODIFIED\@PROGRAMFILESX86@\Apache Software Foundation\Apache2.2\logs\error.log_

#### Starting and Stopping the TurboServer Service

Oftentimes, troubleshooting and fixing problems in TurboServer requires the TurboServer service be restarted.

There are currently two ways of doing this, through either the Control Panel or the Command Prompt. Each method is listed, below:

1. Through the **Control Panel**

	a. Navigate to *Control Panel > Administrative Tools > Services* or *Control Panel > System and Security > Administrative Tools > Services*

	b. Restart the **Turbo Server** service

2. Via the **Command Prompt** using the **net** command

	a. Run a new command prompt (cmd.exe) as Administrator
	
	b. Type the command net stop turbo to stop the TurboServer service
	
	The expected output for this command is:
	
		The Turbo Server service is stopping.
		The Turbo Server service was stopped successfully.
		
	c. Type the command net start turbo to start the TurboServer service

	The expected output for this command is:

		The Turbo Server service is starting.
		The Turbo Server service was started successfully.
		
#### Windows Event Viewer

The Windows Event Viewer is another useful source of information. If there is an issue starting the Windows service for TurboServer there may be information reported in the Window Event Viewer to help diagnose the problem.