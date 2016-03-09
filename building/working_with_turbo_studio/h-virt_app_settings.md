### Virtual Application Settings

The following is a table of the definitions and uses of features available in Turbo Studio. These features allow you to edit and customize the settings for an image or virtual application configuration.

<table>
	<tr>
		<th>Setting</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><b>Startup File</b></td>
		<td>The executable or viewable file that opens when the user starts the virtual application. Multiple files can be selected by clicking the <b>Multiple</b> button.</td>
	</tr>
	<tr>
		<td><b>Output File</b></td>
		<td>The name of the output file from Turbo Studio build process.</td>
	</tr>
	<tr>
		<td nowrap><b>Project Type</b></td>
		<td><b>Application</b>: A virtual application project produces an executable file output (.exe file) that can be run directly from the operating system. Application output mode is appropriate for most users and is the default selection.<br/><br/><b>Component</b>:  A component project produces an SVM (.svm file). SVM is a Turbo file format which encode all virtual application configuration and content into a single binary file. SVMs cannot be executed directly from the operating system. SVMs are used to exchange virtual application and component data between multiple virtual applications.<br/><br/>Note: In order to create SVMs for use in streaming applications on Turbo Server, the project type must be set to Component.</td>
	</tr>
	<tr>
		<td><b>Executable Metadata</b></td>
		<td><b>Standard metadata</b> includes information such as product title, publisher, description, icon, web site URL, and version. By default, Turbo Studio applies metadata inherited from the virtual application startup file to the output virtual application executable. To override the default meta data, uncheck the <b>Inherit Properties</b> box.<br/><br/><b>Custom metadata</b> can be used by specialized external executable viewer applications, inventory scanners, and other asset and licensing management systems. For information on custom executable metadata, consult the Microsoft Windows Software Development Kit.</td>
	</tr>
	<tr>
		<td><b>Startup Image</b></td>
		<td>A startup "splash" image to display during application startup. Startup images improve application branding and are useful when the application requires several seconds to initialize.<br/><br/>Transparency keying enables the startup image to contain transparent regions. Transparencies improve the visual effectiveness of your startup image.</td>
	</tr>
	<tr>
		<td><b>Startup Shim</b></td>
		<td>Startup shims are used to perform customized licensing checks and other initialization tasks. The shim must conform to Turbo Studio interface in order to validate.<br/><br/>The startup shim must compile with an <b>OnInitialize</b> method.<br/><br/><b>C-style startup shim signature</b><br/><br/>typedef BOOL (__stdcall *FnOnInititialize) (LPCWSTR pwcsInitilizationToken);<br/><br/>The return value indicates whether virtual machine execution proceeds.<br/><br/>Methods are acquired via <b>::LoadLibrary</b> followed by <b>::GetProcAddress</b> calls. <br/><br/><b>Example</b><pre>LPCWSTR pwcsInitToken = "VendorSpecificToken";<br/>HMODULE hShim = ::LoadLibrary("Shim.dll");<br/>FnOnInititialize fnOnInit = (FnOnInititialize)::GetProcAddress(hShim, "OnInitialize");<br/>BOOL fResult = fnOnInit(pwcsInitToken);</pre></td>
	</tr>
	<tr>
		<td><b>Directory Binding</b></td>
		<td>Turbo Studio enables you to limit where an application will run, based on queries to an Active Directory Domain Controller.</td>
	</tr>
	<tr>
		<td><b>Command Line Arguments</b></td>
		<td>Command line arguments specified by the user are passed to the virtual application startup executable by default. You can override and specify a fixed set of command line arguments to pass to the startup executable. For example, you can specify Java virtual machine behavior.</td>
	</tr>
	<tr>
		<td><b>Sandbox Location</b></td>
		<td>By default, the sandbox is placed in the <b>@APPDATALOCAL@\Spoon\Sandbox\@TITLE@\@VERSION@</b> folder, where <b>@APPDATALOCAL@</b> represents the <b>local Application Data</b> folder, and <b>@TITLE@</b> and <b>@VERSION@</b> represent the application title and version. In addition to the standard root folder variables, the sandbox location can contain the following variables:<br/><br/><b>@TITLE@</b>: Product title<br/><b>@PUBLISHER@</b>:  Product publisher<br/><b>@VERSION@</b>:  Full version string, in dotted quad format<br/><b>@WEBSITE@</b>:  Publisher website<br/><b>@BUILDTIME@</b>: Virtual application build time, in a format similar to <b>2008.02.01T08.00</b>.<br/><br/>With the exception of the <b>@BUILDTIME@</b> variable (set automatically), these variables are based on the values specified in the <b>Properties</b> section of <b>Settings</b>.</td>
	</tr>
	<tr>
		<td><b>Working Directory</b></td>
		<td><b>Working Directory</b> determines the active directory at the time of process launch. <br/><br/>Use <b>Startup File Directory</b> sets the working directory to the directory of the virtual application startup file. In the case of a jukeboxed application, the working directory is set to the directory of the startup file specified on the jukebox command line. <br/><br/>Use <b>Current Directory</b> sets the working directory to the directory from which the virtual application is launched. <br/><br/>Use <b>Specified Path</b> enables you to specify a working directory. This specification can include environment and well-known root folder variables. <br/><br/>The working directory is set to the directory of the startup file by default.</td>
	</tr>
	<tr>
		<td><b>Application Type</b></td>
		<td>If you select an executable startup file, Turbo Studio automatically configures the virtual application to run in the same subsystem as the startup file. If you select a non-executable startup file, you must manually override the application type. Most applications execute in the GUI subsystem. To override the application type, select the mode from the Application Type menu in the Process Configuration section of the Settings panel. The Inherit mode sets the application type based on the type of the startup file.</td>
	</tr>
	<tr>
		<td><b>Target Architecture</b></td>
		<td><b>Target Architecture</b> is automatically captured during the snapshot process and generally should not be altered for applications packaged through the snapshot process.<ul><li><b>x86</b>:  Use this option for applications that were packaged using the snapshot process on x86 systems. This option maps the <b>Program Files</b> directory to <b>C:\Program Files</b> on x86 systems or to <b>C:\Program Files (x86)</b> on x64 systems. .NET applications compiled to target any CPU architecture always run as 32-bit applications. </li><li><b>x64</b>:  Use this option for applications that were packaged using the snapshot process on x64 systems. This option maps the <b>Program Files</b> directory to <b>C:\Program Files</b> on x64 systems. The <b>Program Files (x86)</b> directory is mapped to <b>C:\Program Files</b> on x86 systems and <b>C:\Program Files (x86)</b> on x64 systems. .NET applications compiled to target any CPU architecture run as 32-bit applications on x86 systems and 64-bit applications on x64 systems.</li><li><b>Any CPU</b>:  This option maps the <b>Program Files</b> directory to <b>C:\Program Files</b> on x86 systems and <b>C:\Program Files</b> on x64 systems. .NET applications compiled to target any CPU architecture run as 32-bit applications on x86 systems and 64-bit applications on x64 systems.  Use this option to place a .NET application that is compiled to target any CPU architecture in the <b>Program Files</b> folder.</li></ul></td>
	</tr>
	<tr>
		<td><b>Environment Variables</b></td>
		<td>Most virtual environment variables overwrite any environment variables defined in the host environment. However, <b>PATH</b> and <b>PATHEXT</b> environment variables always merge with the corresponding host environment variables.<br/><br/>Environment variables are automatically captured and merged during the snapshot delta process.</td>
	</tr>
	<tr>
		<td><b>Virtual Services</b></td>
		<td>Windows services are specialized applications that run in the background. They are typically responsible for providing system services such as database services, network traffic handling, web request processing, and other server functionality. Many applications install and require specific services in order to function properly. Turbo Studio fully supports virtualization of certain Windows services. <br/> <br/> Service installation and settings are captured automatically during the snapshot process. The primary exception occurs with virtualized applications intended to run as background worker services (for example, virtualized web servers); in this case, it is often required to enable the <b>Keep Alive</b> option.</td>
	</tr>
	<tr>
		<td><b>SVMs</b></td>
		<td>You can specify additional SVM layers for applications, in the case of updates or patches.</td>
	</tr>
	<tr>
		<td><b>Child Process Exceptions</b></td>
		<td>Some applications create new child processes while they run. Depending on the virtual application context, you can create such child processes within the virtual application, or in the host operating system.<br/><br/>Child processes include processes created to service COM local server requests.<br/><br/><b>Note</b>: Child processes created outside of the virtual application cannot access virtualized filesystem or registry contents. These processes can access or modify host operating system contents, even if otherwise forbidden by the virtual application configuration.<br/><br/>Child processes are created within the virtual application by default. To manually create child processes outside of the virtual application, uncheck the <b>Spawn child process within virtualized environment</b> option.<br/><br/>COM servers are created outside the virtual environment by default to allow COM communication between native applications and virtual applications. To create COM servers within the virtual environment, check the <b>Spawn COM servers within virtualized environment</b> option.<br/><br/>You can determine exceptions to the child process virtualization behavior using the <b>Child Process Exception List...</b> Process names listed in the child process exception list behave <em>opposite</em> to the master child process virtualization setting. To edit the child process exception list, select the <b>Child Process Exception List... </b> button. Process names will match without including the filename extension.</td>
	</tr>
	<tr>
		<td><b>Read-only Virtual Environments </b></td>
		<td>Prevent modifications to the virtual environment.</td>
	</tr>
	<tr>
		<td><b>Automatic Sandbox Reset</b></td>
		<td>Any changes made to an application's virtual environment are reverted when the application closes.</td>
	</tr>
	<tr>
		<td><b>Shutdown Process Tree On Root Process Exit</b></td>
		<td>Enables the shutdown of all child processes when the root process exits.

<b>Note</b>: The startup file is the root process by default. If a virtual service is specified in the application configuration file and is set to auto-start when the application is launched, the virtual service acts as the root process in the process tree.</td>
	</tr>
	<tr>
		<td><b>Compress Payload</b></td>
		<td>Enables compression of the output file. Note: Both the application profiling and streaming processes require that packages be built uncompressed. To build applications without compression, leave the <b>Compress payload</b> option unchecked.</td>
	</tr>
	<tr>
		<td><b>Startup Executable Optimization</b></td>
		<td>Launches the startup executable within the initial virtual machine process. This prevents the creation of a separate application process and can be incompatible with some applications.</td>
	</tr>
	<tr>
		<td><b>Turbo Command-line Arguments</b></td>
		<td>Turbo supports command-line arguments of the /X[arg] form, which modify virtual application behavior at run-time. In rare instances, these arguments may conflict with command-line arguments designed for use by the virtualized application. To disable processing of these arguments, uncheck the Enable Turbo command-line arguments box.</td>
	</tr>
	<tr>
		<td><b>Window Class Isolation</b></td>
		<td>Prevents viewing window classes that are registered by external processes. You can use this to prevent interaction between virtualized and non-virtualized versions of the same program when the application checks for existing class registrations.
</td>
	</tr>
	<tr>
		<td><b>Enhanced DEP Compatibility for Legacy Applications</b></td>
		<td>Enables compatibility for systems with Data Execution Protection (DEP) enabled. Use this configuration for virtual applications running on Windows 2003.</td>
	</tr>
	<tr>
		<td><b>Enhanced DRM Compatibility</b></td>
		<td>Enables additional compatibility with common DRM systems, such as Armadillo.</td>
	</tr>
	<tr>
		<td><b>Trace Process Starts in Debug Output</b></td>
		<td>Sends a notification to <b>OutputDebugString</b> whenever a new process is started within the virtual environment. This notification is in XML format and comes as a basic information description. It can be monitored with any debugging tool. You can also monitor the notification by a parent process within the virtual environment if a child process is being debugged.</td>
	</tr>
	<tr>
		<td><b>Force Read-share Files</b></td>
		<td>Forces any file opened within the virtual environment to open with the <b>READ_SHARE</b> flag. Use this option to  resolve compatibility issues caused by sharing violations.</td>
	</tr>
	<tr>
		<td><b>Always Launch Child Processes as Current User</b></td>
		<td>Provide child processes with the same level of privileges as the virtual machine root process. Child processes launched by the virtual machine have reduced privileges by default.</td>
	</tr>
	<tr>
		<td><b>Emulate Elevated Security Privileges</b></td>
		<td>Forces an application to run as if it has elevated security privileges, even if the application does not. Enabling this option eliminates UAC security prompts for elevation and subsequent application crashes.</td>
	</tr>
</table>