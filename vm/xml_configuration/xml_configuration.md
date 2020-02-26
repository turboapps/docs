## XML Configuration (XAPPL)

<strong>XAPPL</strong> files specify the configuration for a container image created with Turbo Studio. <strong>XAPPL</strong> files are in XML format so it's easy to edit a container's configuration in a text editor just as you can with Turbo Studio user interface.

Here is a table that describes the purpose of each of the tags you see in <strong>XAPPL</strong> files created with Turbo Studio:

<table>
   <colgroup>
      <col style="width: 34%">
      <col style="width: 66%">
   </colgroup>
   <tbody>
      <tr>
         <th>Element</th>
         <th>Description</th>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>OutputLocation</strong></p>
         </td>
         <td>
            <p>Path to the folder where the output is saved after a successful build. This can be a local path, a UNC path, or a mapped drive.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>OutputFile</strong></p>
         </td>
         <td>
            <p>Name of the image file output (ie. image.svm or application.exe).</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ProjectType</strong></p>
         </td>
         <td>
            <p>The type of output that is created when built.</p>
            <p>Possible values:</p>
            <ul>
               <li><strong>Component</strong> - A Turbo component is a <strong>.svm</strong> file which is used with the Turbo.net Hub, Turbo Server, and as application dependencies.</li>
               <li><strong>Application</strong> - A Turbo standalone executable is a <strong>.exe</strong> file which can run without any additional Turbo.net components.</li>
               <li><strong>TurboApplication</strong> - A Turbo portable executable is also a <strong>.exe</strong> but requires the Turbo Client Runtime to be installed on the machine as a prerequisite.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Expiration</strong></p>
         </td>
         <td>
            <p>The expiration settings for the output image.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>daysLimit</strong> - Denotes the number of days that the image can be used on a machine before expiration. </li>
               <li><strong>expirationDate</strong> - Gives a hard date for expiration. </li>
               <li><strong>expirationWarningDays</strong> - The number of days prior to expiration that a warning message is displayed.</li>
               <li><strong>webTimeUrl</strong> - A trusted url that is used by Turbo Studio to get the current time. Set to empty to use the machine system time.</li>
               <li><strong>expireOnWebFail</strong> - Whether the launch will fail if the web time url is not accessible. Not applicable when using the system time.</li>
            </ul>
            <p>The child elements <strong>ExpiredMessage</strong>, <strong>ExpirationWarning</strong>, and <strong>UnreachableWarning</strong> are the text messages that are displayed.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Output</strong></p>
         </td>
         <td>
            <p>The output options for the application build.</p>
            <p>Attributes applicable to standalone applications:</p>
            <ul>
               <li><strong>diagnosticMode</strong> - Enable diagnostic mode by default. Can also be enabled at runtime with <code>/XEnable=Diagnostics</code> command line parameter.</li>
            </ul>
            <p>Attributes applicable to portable applications:</p>
            <ul>
               <li><strong>includeRuntimeDotNetImage</strong> - Include the Turbo Client Runtime .NET 4.5 image in the package. The .NET image will add more than 400MB to the size of the package so only use if you expect to target platforms that will not have the .NET runtime already present.</li>
               <li><strong>allowFullIsolation</strong> - Allows the <strong>full</strong> isolation setting at runtime. Enabling this setting will force the <strong>clean</strong> image to be included from the Turbo.net hub which will add more than 200MB to the package size.</li>
               <li><strong>enableSync</strong> - Enables sandbox sync for the container. </li>
               <li><strong>enableAutoUpdate</strong> - Enables automatic updates for images which are included in the package. </li>
               <li><strong>showLaunchSettings</strong> - Gives the user configuration options on application start (isolation, sync, etc).</li>
               <li><strong>isolationLevel</strong> - The default isolation settings for the application container.</li>
               <li><strong>hub</strong> - The hub where the package images are located. This can be <strong>https://turbo.net</strong> or the url of a Turbo Hub Server.</li>
               <li><strong>isolationOptions</strong> - Additional isolation options to use in the application container. Currently the only available option is <strong>MergeUser</strong> which makes the user folders (desktop, documents, etc) merge isolated no matter the container's isolation settings.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Msi</strong></p>
         </td>
         <td>
            <p>The output settings for the MSI setup file.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>outputMsiPath</strong> - The location where the setup MSI is built.</li>
               <li><strong>title</strong> - The value of the MSI title property.</li>
               <li><strong>subject</strong> - The value of the MSI subject property.</li>
               <li><strong>keywords</strong> - The value of the MSI keywords property.</li>
               <li><strong>productName</strong> - The value of the MSI product name property.</li>
               <li><strong>productVersion</strong> - The value of the MSI product version property.</li>
               <li><strong>manufacturer</strong> - The value of the MSI manufacturer property.</li>
               <li><strong>productLanguage</strong> - The value of the MSI product language property.</li>
               <li><strong>author</strong> - The value of the MSI author property.</li>
               <li><strong>description</strong> - The value of the MSI description property.</li>
               <li><strong>manufacturerUrl</strong> - The value of the MSI manufacturer URL property.</li>
               <li><strong>autoBuild</strong> - Whether the MSI should build when the application build completes successfully.</li>
               <li><strong>isolatePerUser</strong> - Whether the MSI setup should be installed on a per-user basis or installed for all users. When installing per-user, the install root path is <strong>Application Data</strong>. When installing for all users, the install root path is <strong>Program Files</strong>.</li>
               <li><strong>applicationFolder</strong> - The folder where the application should be installed.</li>
               <li><strong>upgradePreviousVersion</strong> - Whether the setup should maintain the same <strong>Upgrade Code</strong> when it builds or change the <strong>Upgrade Code</strong> for each build version. This allows the setup to upgrade previous versions when they are installed or allow them to exist side-by-side. If enabled, the <strong>Product Version</strong> field must be updated in Turbo Studio to update the <strong>Upgrade Code</strong> automatically.</li>
               <li><strong>productCode</strong> - The value of MSI product code property.</li>
               <li><strong>upgradeCode</strong> - The value of MSI upgrade code property.</li>
               <li><strong>componentId</strong> - The value of the MSI component id property.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Network</strong></p>
         </td>
         <td>
            <p>Contains a <strong>Proxy</strong> element.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Proxy</strong></p>
         </td>
         <td>
            <p>The network proxy settings for the container image.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>enableTCP</strong> - Enables the proxy for TCP network traffic.</li>
               <li><strong>enableUDP</strong> - Enables the proxy for UDP network traffic.</li>
               <li><strong>serverAddress</strong> - The hostname of the proxy server.</li>
               <li><strong>serverPort</strong> - The connection port of the proxy server.</li>
               <li><strong>type</strong> - The type of proxy connection. Possible values are <strong>Socks5</strong>, <strong>Socks4</strong>, <strong>Https</strong>, and <strong>Http</strong>.</li>
               <li><strong>enableAuthentication</strong> - Whether the proxy requires authentication.</li>
               <li><strong>username</strong> - The username to authenticate the proxy.</li>
               <li><strong>password</strong> - The password to authenticate the proxy.</li>
               <li><strong>useSpoonTicket</strong> - Whether the currently logged in Turbo user ticket is passed for authentication. Used for Turbo Tnlr.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Clipboard</strong></p>
         </td>
         <td>
            <p>The clipboard settings for the container (ie. copy-paste operations).</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>isolationMode</strong> - The isolation mode which separates the container clipboard from native. Possible values are: <strong>Merge</strong> and <strong>Full</strong>. If fully isolated, will only be able to paste things that were copied inside the container.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>EnvironmentVariableExGlobalSettings</strong></p>
         </td>
         <td>
            <p>The global environment variable settings.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>isolationMode</strong> - The isolation mode for environment variables. Possible values are: <strong>Inherit</strong>, <strong>Full</strong>, and <strong>WriteCopy</strong>. <strong>Inherit</strong> uses whatever isolation settings are specified on the environment variable registry keys (<strong>HKCU\Environment</strong> or <strong>HKLM\System\CurrentControlSet\Control\Session Manager\Environment</strong>).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Dependencies</strong></p>
         </td>
         <td>
            <p>Contains a collection of <strong>Dependency</strong> elements. These only affect container environments run through the Turbo.net Client Runtime platform and have no effect on standalone executable builds.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Dependency</strong></p>
         </td>
         <td>
            <p>Specifies a Turbo.net Hub dependency for the image.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>Identifier</strong> - The fully qualified identifier of the Turbo.net Hub dependency (ex: <strong>mozilla/firefox-base:61.0.2</strong>).</li>
               <li><strong>Hash</strong> - The hash of the dependency image (ex: <strong>d54de61a9fd54a5467e5bb084e0dcabacb0689cab5c329558d2916d7d3f1bf38</strong>).</li>
               <li><strong>BakedIn</strong> - Whether the dependency image configuration has already been merged into the current image configuration or if it is to be merged at runtime.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Requirements</strong></p>
         </td>
         <td>
            <p>Contains a collection of <strong>Requirement</strong> elements. These only affect container environments run through the Turbo.net Client Runtime platform and have no effect on standalone executable builds.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Requirement</strong></p>
         </td>
         <td>
            <p>Specify various requirements that are enforced at runtime.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>type</strong> - The type of runtime requirement. At this time this value can only be <strong>minosver</strong> which specifies a minimum required Microsoft Windows version.</li>
               <li><strong>value</strong> - The value to pass to the type handler. Currently this can be the minimum version of Microsoft Windows to allow execution (Win7 is "6.1", Win8 is "6.2", Win8.1 is "6.3", and Win10 is "10.0")</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Packages</strong></p>
         </td>
         <td>
            <p>Configuration settings of runtime packages which are included in the image. Contains <strong>Java</strong> and a collection of <strong>Package</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>trimDotNet</strong> - Performs a build-time process to attempt to trim included .NET packages to the minimum set of binaries required. This only works for .NET packages added from Turbo Studio runtimes. Custom .NET packages added in <strong>Layers</strong> panel are not subject to trimming operations.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Package</strong></p>
         </td>
         <td>
            <p>Indicates that a layer is to be merged into the image at build-time. Turbo Studio searches the local <strong>Layers</strong> cache for matching packages. The <strong>Layers</strong> cache is in <strong>C:\Users\[user]\Documents\Turbo.net\Components</strong> and is configured in the Turbo Studio <strong>Layers</strong> panel.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the layer package. This comes from the layer standard metadata if present or else the name of the file.</li>
               <li><strong>platform</strong> - The system architecture where the package is configured. This is deprecated and always <strong>x86</strong> now.</li>
               <li><strong>version</strong> - The version of the layer package. This comes from the layer standard metadata if present or else is <strong>1.0.0.0</strong> by default.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Java</strong></p>
         </td>
         <td>
            <p>Configuration settings for the virtual java runtime. Contains <strong>Runtime</strong> and <strong>Settings</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Rumtime</strong></p>
         </td>
         <td>
            <p>Configuration settings for the virtual java runtime.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the package. In this context it will always be <strong>Java</strong>.</li>
               <li><strong>platform</strong> - The target platform for the java package. In this context it will always be <strong>x86</strong>.</li>
               <li><strong>version</strong> - The version of the java package to use.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Settings</strong></p>
         </td>
         <td>
            <p>Configuration settings for the virtual java runtime.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>startupType</strong> - The startup type for the java application. Possible values are <strong>Class</strong> and <strong>JAR</strong>.</li>
               <li><strong>startup</strong> - The name of the class or jar file to execute.</li>
               <li><strong>classpath</strong> - The path to search for the class files to execute. Only used with type <strong>Class</strong>.</li>
               <li><strong>options</strong> - Additional command line parameters which are passed to java.exe.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>VirtualizationSettings</strong></p>
         </td>
         <td>
            <p>Virtual machine configuration settings which affect runtime behavior. Also contains a <strong>ChildProcessVirtualization</strong> element.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>suppressBranding</strong> - Disables the Turbo runtime splash. Default is <strong>True</strong></li>
               <li><strong>deleteSandbox</strong> - Removes the sandbox runtime environment when the application exits. This is used to ensure a fresh sandbox environment on every launch. Default is <strong>False</strong>.</li>
               <li><strong>shutdownProcessTree</strong> - Kills all the virtual processes when the root process exists. This is used to ensure that services and other spawned processes don't hang around after the application exists. Default is <strong>False</strong>.</li>
               <li><strong>enhancedDEPCompatibility</strong> - Provides compatibility for Windows 2003 systems with Data Execution Protection enabled. Default is <strong>False</strong>.</li>
               <li><strong>notifyProcessStarts</strong> - Causes a notification to be sent as a debugging output string whenever a new process is started within the virtual environment. Default is <strong>False</strong>.</li>
               <li><strong>enableLegacySecurityPassthrough</strong> - Causes calls to <strong>NtSetSecurityObject</strong> to be ignored. Default is <strong>False</strong>.</li>
               <li><strong>trimUACManifest</strong> - Removes items from the application manifest that may cause the application to require elevation and show a UAC prompt.</li>
               <li><strong>forceFIPSCompliance</strong> - Disables runtime FIPS check for application compatibility on locked down devices. To be used only if application security can be ensured by other means. Default is <strong>False</strong>.</li>
               <li><strong>forceReadShareFiles</strong> - Forces any file opened by any process within the virtual environment to do so with the READ_SHARE flag set to prevent files from being locked. Default is <strong>False</strong>.</li>
               <li><strong>isolateWindowClasses</strong> - Isolates window classes used in the Windows GUI framework (using <strong>RegisterClass</strong> or <strong>RegisterClassEx</strong> system APIs). For example, this would allow a virtualized Firefox instance to run side-by-side with a native instance. Default is <strong>False</strong>.</li>
               <li><strong>readOnlyVirtualization</strong> - Prevents any modifications to files or registry keys in the container. All requests to open files or keys for read access will return access denied errors. Default is <strong>False</strong>.</li>
               <li><strong>disableXenocodeCommandLine</strong> - Disables the virtualization command line switches used to customize behavior at runtime (such as /XShellEx, /XEnable, etc). Default is <strong>False</strong>.</li>
               <li><strong>suppressSandboxCollisionCheck</strong> - Disables detection of multiple applications trying to access the same sandbox at the same time with different settings. Doing this could corrupt the sandbox but on rare occasion is necessary to work around other problems. Default is <strong>False</strong>.</li>
               <li><strong>subsystem</strong> - The Windows platform subsystem to use and determines whether it is launched as a windowed or console application. This can be <strong>Inherit</strong> (default), <strong>GUI</strong>, or <strong>Console</strong>. <strong>Inherit</strong> will determine the subsystem from the startup file.</li>
               <li><strong>targetArchitecture</strong> - The system architecture that the application is expected to run in. This controls the nodes that are available in Turbo Studio filesystem editor and affects file and registry path mappings at runtime. Possible values are <strong>x86</strong> and <strong>x64</strong>. In most cases this should be set to <strong>x64</strong> unless the configuration was generated from a snapshot on an x86 machine.<br/>Note that if targetArchitecture is set to "x86" then any .NET application which has a target platform of "Any CPU" will run as 32-bit on 64-bit machines.</li>
               <li><strong>sandboxPath</strong> - The base path for where the container's runtime sandbox is stored. The sandbox records all changes to <strong>full</strong> or <strong>writecopy</strong> isolated files and registry keys in the container. Default path is under the current user's local application data folder. This value is only used for standalone applications.</li>
               <li><strong>exeOptimization</strong> - The startup file will be attempted to be launched from within the initial virtual machine boot process rather than spawn a new process. This is only possible if there is a single startup file to be launched. Default is <strong>False</strong>.</li>
               <li><strong>compressPayload</strong> - Compresses the data which is included in the container package. This decreases the size of the package but increases the initial launch time as data must be decompressed to use. Default is <strong>False</strong>.</li>
               <li><strong>forceIndicateRunningElevated</strong> - Creates an environment where the container processes believe they are running with elevated priviledges when they are not. This is to work around some application requirements for full administrator access. Default is <strong>False</strong>.</li>
               <li><strong>launchChildProcsAsUser</strong> - Causes all child processes to be launched with the same security priviledges as the root container process. Default is <strong>False</strong>.</li>
               <li><strong>enableDRMCompatibility</strong> - Enables enhanced compatibility with applications that are protected by DRM software such as "Armadillo". Default is <strong>False</strong>.</li>
               <li><strong>faultExecutablesIntoSandbox</strong> - Causes all .exe and .dll files to be faulted into the sandbox before being loaded rather than read from within the container package. This can work around some .dll load issues that result in application errors. Default is <strong>False</strong>.</li>
               <li><strong>minSandboxSpaceAvail</strong> - The minimum amount of disk space (in MB) on the sandbox volume that is required to launch the container. Default is <strong>-1</strong> (no limit).</li>
               <li><strong>honorWow6464AccessFlag</strong> - Allows the use of the KEY_WOW64_64KEY registry key access flag. Disabling this can work around application errors caused because it wasn't properly snapshotted for x64 machines. Default is <strong>True</strong>.</li>
               <li><strong>suppressPopups</strong> - Hides all error dialogs shown by the virtual machine. This can be used as a work around for stubborn errors that cannot be solved other ways. This should be used very sparingly as it will potentiall hide real problems. Default is <strong>False</strong>.</li>
               <li><strong>hideShellWindow</strong> - Causes the main desktop window to be hidden from processes in the container. This is used for compatibility in Internet Explorer 6 containers. Default is <strong>False</strong>.</li>
               <li><strong>isDriverSVM</strong> - For internal use only. Indicates that the image has special handling in the Turbo Client Runtime environment. Default is <strong>False</strong>.</li>
               <li><strong>forceEntryLayerIsolation</strong> - Disables the patching behavior of layer dependencies in regards to isolation settings so that the base layer isolation is always used over patch layers. Default is <strong>False</strong>.</li>
               <li><strong>stubExeCachePath</strong> - Specifies a cache path for virtual machine stubexe processes. By default this is blank and all stubexes are stored in the container sandbox.</li>
               <li><strong>spoonCachePath</strong> - Specifies a cache path for temporary runtime files. By default this is blank and all temp files are stored under %TEMP%.</li>
               <li><strong>waitForChildOnly</strong> - Causes the container to exit when the startup file exits rather than wait for all container processes to exit. Spawned processes will remain unless <strong>shutdownProcessTree</strong> is also enabled. This is only applicable if <strong>exeOptimization</strong> is disabled. Default is <strong>True</strong>.</li>
               <li><strong>httpUrlPassthrough</strong> - Causes http/https URLs to be opened outside the container with the native handler. Default is <strong>False</strong>.</li>
               <li><strong>mergeStartupDir</strong> - Causes the directory where the startup file is located to automatically be set to <strong>merge</strong> isolation. Useful when the startup file is dynamic (ie. set with <strong>/XShellEx</strong>) and needs access to process files. Default is <strong>False</strong>.</li>
               <li><strong>allowGlobalWindowHooks</strong> - Enables global hooks using the SetWindowsHookEx system API. By default this is <strong>False</strong> which automatically converts any global hooks into a local thread hook.</li>
               <li><strong>breakIdenticalSendMessageRecursion</strong> - Enables detection of identical SendMessage calls in buggy software which may cause a stack overflow error. Default is <strong>False</strong>.</li>
               <li><strong>extendedWinXPCompatibility</strong> - Enables additional compatibility for applications which rely on undocumented APIs in Windows XP. Default is <strong>False</strong>.</li>
               <li><strong>isolateProcessNames</strong> - Appends the sandbox hash string to the end of process names. This is used to allow side-by-side execution for applications which have logic to find existing processes to prevent mulitple instances. Default is <strong>False</strong>.</li>
               <li><strong>isolateNonSystemDrives</strong> - Hides access to non-system drives on the machine. Default is <strong>False</strong>.</li>
               <li><strong>isolateNetworkShares</strong> - Hides access to network shares defined on the machine. Default is <strong>False</strong>.</li>
               <li><strong>disableProxySupportForRouteMaps</strong> - Disables network isolation and routing support to work around compatibility issues with some network security products. Default is <strong>False</strong>.</li>
               <li><strong>isolateDDE</strong> - Prevents DDE messages (Dynamic Data Exchange) from passing between native and container environments. Default is <strong>False</strong>.</li>
               <li><strong>extendedAppLockerCompatibility</strong> - Prevents some application errors when using AppLocker DLL Rules technology. Default is <strong>False</strong>.</li>                
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ChildProcessVirtualization</strong></p>
         </td>
         <td>
            <p>Settings for how child processes are handled in the container. Contains a collection of <strong>ChildProcessException</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>spawnVm</strong> - Indicates that by default child processes should be spawned inside the container. Processes named in <strong>ChildProcessException</strong> will be the opposite behavior of this setting. Default is <strong>True</strong>.</li>
               <li><strong>spawnExternalComServers</strong> - COM servers will be accessible to other native processes. Default is <strong>False</strong>.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ChildProcessException</strong></p>
         </td>
         <td>
            <p>Indicates a child process that is to have different <strong>spawnVm</strong> settings than the default specified in <strong>ChildProcessVirtualization</strong>.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the process to exclude (ex: <strong>splwow64.exe</strong>).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>XLayers</strong></p>
         </td>
         <td>
            <p>Allows a container to search for additional layers to load at runtime. Contains a collection of <strong>RequiredXLayer</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>xlayerSearchPattern</strong> - A path pattern that is used at runtime to search for layers to load. Layers discovered are loaded in alphabetical order. For example: <strong>@APPDIR@\patches_*.svm</strong> and <strong>\\networkshare\patches\*.svm</strong>.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>RequiredXLayer</strong></p>
         </td>
         <td>
            <p>Specifies which layers are required to be present in order for the container to launch. The search pattern in <strong>XLayers</strong> element must be specified.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of a required layer which is to be discovered in the <strong>xlayerSearchPattern</strong> (ex: <strong>shared.svm</strong>). If the layer is not discovered then an error will occur and the container will not start.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>NamedObjectIsolation</strong></p>
         </td>
         <td>
            <p>Allows isolation of specific named objects in the container (such as events, mutexes, and semaphores). Contains a collection of <strong>Exception</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>enabled</strong> - Whether named object isolation is enabled by default. This can be overwritten with <strong>Exception</strong> elements. Default is <strong>False</strong>.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Exception</strong></p>
         </td>
         <td>
            <p>Specifies exceptions to the default named object isolation rules.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>regex</strong> - The regular expression pattern to match named object names. For example, "ieframe" will match any named object with "ieframe" anywhere in the name and "\\RPC Control\\OSPPC.*" will match objects with names such as "machine\rpc control\osppc0123".</li>
               <li><strong>replacement</strong> - Optional value used to rename matching named objects. For example, if <strong>regex</strong> were set to "NAMEDOBJ\d+" and <strong>replacement</strong> was set to "NAMEDOBJ" then an object with a name "NAMEDOBJ25" would be renamed to "NAMEDOBJ". Default is empty so no replacement operation is performed.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Dns</strong></p>
         </td>
         <td>
            <p>Specifies DNS mappings inside the container environment. Contains a collection of <strong>Entry</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Entry</strong></p>
         </td>
         <td>
            <p>Specifies a mapping for hostnames and IPs from one to another.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The source hostname or IP to map (ex: google.com).</li>
               <li><strong>redirect</strong> - The target hostname or IP to map to.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Device</strong></p>
         </td>
         <td>
            <p>Overwrites device characteristics of the machine where the container is executed. Contains elements for <strong>MachineName</strong>, <strong>MachineSid</strong>, <strong>NetworkAdapters</strong>, and <strong>ComputerSystemProduct</strong>. Use <code>xstudio.exe /capture-device</code> to fill in the information.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>MachineName</strong></p>
         </td>
         <td>
            <p>Overwrites the name of the machine which is returned from <code>GetComputerNameEx</code> and <code>GetComputerName</code> system APIs. Does not change the <strong>COMPUTERNAME</strong> environment variable.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>MachineSid</strong></p>
         </td>
         <td>
            <p>Overwrites the SID (Security Identifier) of the machine.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>NetworkAdapters</strong></p>
         </td>
         <td>
            <p>Replaces the network adapters which appear available to the container. Contains a collection of <strong>NetworkAdapter</strong> elements which contain a <strong>PhysicalAddress</strong> element. The <strong>PhysicalAddress</strong> element accepts the MAC address of the adapter that will be returned by the <code>GetAdaptersAddresses</code> system API (ex: <strong>000d83b1c08e</strong>).</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ComputerSystemProduct</strong></p>
         </td>
         <td>
            <p>Overwrites the machine system product UUID returned from Win32_ComputerSystemProduct WMI. Contains a <strong>UUID</strong> element (ex: FAF76B96-798C-11D2-AAD1-006008C78BC7).</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>EnvironmentStats</strong></p>
         </td>
         <td>
            <p>Contains information about the snapshot machine where the application configuration was created. For non-snapshot scenarios, this element is empty.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>osVersion</strong> - The version of Microsoft Windows operating system.</li>
               <li><strong>x64</strong> - True if was a 64-bit operating system.</li>
               <li><strong>ieVersion</strong> - The version of Microsoft Internet Explorer</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>WorkingDirectory</strong></p>
         </td>
         <td>
            <p>Specifies which directory the virtual application will execute from.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>option</strong> - The working directory mode used. Possible values are <strong>StartupFileDirectory</strong> (the directory where the startup file resides), <strong>CurrentDirectory</strong> (the directory where the virtual application is launched from), or <strong>SpecificDirectory</strong> (uses the value from the <strong>specifiedDirectory</strong> attribute). Default is <strong>StartupFileDirectory</strong>.</li>
               <li><strong>specifiedDirectory</strong> - Sets the working directory to a specific directory. Only applicable if the <strong>option</strong> mode is set to <strong>SpecificDirectory</strong>.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>DisabledVmSettings</strong></p>
         </td>
         <td>
            <p>A list of VM settings which are to be disabled in the Turbo.net Client Runtime environment (including portable executables). Not applicable to standalone executables or their dependencies. Contains a collection of <strong>DisabledVmSetting</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>DisabledVmSetting</strong></p>
         </td>
         <td>
            <p>Specifies a VM setting to be disabled in the Turbo.net Client Runtime environment.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the VM setting to disable.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>StartupShims</strong></p>
         </td>
         <td>
            <p>A list of user defined shims that will be executed on container startup. Contains a collection of <strong>Shim</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ShutdownShims</strong></p>
         </td>
         <td>
            <p>A list of user defined shims that will be executed on container shutdown. Contains a collection of <strong>Shim</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Shim</strong></p>
         </td>
         <td>
            <p>A user defined DLL that contains custom functionality to be executed before or after a container's life.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>path</strong> - The path to where the shim DLL is located. At build time the shim will be copied into the container where it will be executed from at runtime.</li>
               <li><strong>param</strong> - A string parameter that is passed to the shim DLL.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Scripts</strong></p>
         </td>
         <td>
            <p>A user defined shell script file (.bat or .cmd) that is executed before or after a container's life.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>startup</strong> - The path, in the container environment, where the startup script is located. Must use the full, resolved virtual path (no tokens such as <strong>@SYSDRIVE@</strong>).</li>
               <li><strong>shutdown</strong> - The path, in the container environment, where the shutdown script is located.</li>
               <li><strong>runAsAdmin</strong> - The script will be executed in an elevated user context.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ActiveDirectory</strong></p>
         </td>
         <td>
            <p>Specifies launch restrictions based on Active Directory group or domain membership.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>domain</strong> - The name of an Active Directory domain that is required.</li>
               <li><strong>group</strong> - The name of a an Active Directory group that the current user must be a member of.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>StandardMetadata</strong></p>
         </td>
         <td>
            <p>Configures standard metadata properties. For standalone executables, these values show up in .exe properties. For layers, these values will be used when displaying information when imported in the <strong>Layers</strong> panel in Turbo Studio. Contains a collection of <strong>StandardMetadataItem</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>StandardMetadataIte</strong></p>
         </td>
         <td>
            <p>Standard metadata which is applied to the image.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>property</strong> - The name of the standard metadata field. Possible values are <strong>Title</strong>, <strong>Publisher</strong>, <strong>Description</strong>, <strong>Website</strong>, and <strong>Version</strong>.</li>
               <li><strong>value</strong> - The value of the standard metadata field. This can be set to <strong>@INHERIT@</strong> to get the value automatically from the startup file (if only one is specified).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>CustomMetadata</strong></p>
         </td>
         <td>
            <p>Configures custom metadata properties. For standalone executables, these values show up in .exe properties. Contains a collection of <strong>CustomMetadataItem</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>CustomMetadataItem</strong></p>
         </td>
         <td>
            <p>Custom metadata which is applied to the image.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>property</strong> - The name of the custom metadata field.</li>
               <li><strong>value</strong> - The value of the custom metadata field.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>SplashImage</strong></p>
         </td>
         <td>
            <p>Defines a splash image that is displayed while the startup file is being executed.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>path</strong> - The path to the image.</li>
               <li><strong>transparency</strong> - The color used to indicate transparent pixels. This is the name of a system-defined color. The default is <strong>Magenta</strong> (#FFFF00FF).</li>
               <li><strong>seconds</strong> - The length of time (in seconds) the splash image is displayed. Configure this to be less than the startup time for your application.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>StartupFiles</strong></p>
         </td>
         <td>
            <p>Defines the available files that can be executed to start the container. Contains a collection of <strong>StartupFile</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>StartupFile</strong></p>
         </td>
         <td>
            <p>Defines a file that can be used to start the container.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>node</strong> - The full, virtual path to the file (.exe, .cmd, etc). The file doesn't need to be present in the container but must be accessible given the applicable isolation settings. The path should use tokens for maximum compatibility (ex: <strong>@SYSDRIVE@</strong>, <strong>@PROGRAMFILES@</strong>, etc).</li>
               <li><strong>tag</strong> - A name that can be given to a group of startup files (also known as <strong>trigger</strong> in some contexts). For standalone executables, the tag name can be passed as the first parameter to run all the startup files in the group. For the Turbo.net Client Runtime environment, the <code>--trigger</code> parameter can be used to specify the group to execute. If this is empty, it will be executed by default (same as <strong>default</strong> attribute).</li>
               <li><strong>commandLine</strong> - Additional command line parameters to pass to the startup file when it is executed.</li>
               <li><strong>default</strong> - If this startup file is executed by default when no other <strong>tag</strong> value is specified.</li>
               <li><strong>architecture</strong> - The architecture where the startup file is valid. Possible values are <strong>x64</strong>, <strong>x86</strong>, or <strong>AnyCpu</strong> (ex: <strong>x64</strong> startup files are only launched on 64-bit operating systems).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Layers</strong></p>
         </td>
         <td>
            <p>Defines layers of virtual operating system settings which are merged together at runtime. Layers are loaded in the order that they are defined in the xappl. Conflicting settings (ie. a file defined in multiple layers with different isolation settings) are won by the layer that is loaded first. Containers a collection of <strong>Layer</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Layer</strong></p>
         </td>
         <td>
            <p>Defines a layer of the virtual operating system. Contains elements for <strong>Condition</strong>, <strong>Filesystem</strong>, <strong>Registry</strong>, <strong>EnvironmentVariables</strong>, <strong>EnvironmentVariablesEx</strong>, <strong>PortMaps</strong>, <strong>ObjectMaps</strong>, <strong>Services</strong>, <strong>Shortcuts</strong>, <strong>ProgIds</strong>, <strong>Extensions</strong>, <strong>DefaultPrograms</strong>, <strong>SnapshotDirectories</strong>, and <strong>ShellExtensions</strong>.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the layer. The name <strong>Default</strong> defines the main layer which is the foundation for all other layers. There can only be one <strong>Default</strong> layer. The names for the other layers should be set to convey the reason for the layer's existance.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Condition</strong></p>
         </td>
         <td>
            <p>Defines a condition that must pass at runtime for the layer to be applied.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>variable</strong> - The type of the condition. Possible values include:
                  <ul>
                     <li><strong>OS</strong> - Checks against the operating system version. Possible values are <strong>Win10</strong>, <strong>Win81</strong>, <strong>Win8</strong>, <strong>Win7</strong>, and <strong>WinXP</strong>. All comparison <strong>operator</strong> values are applicable (ie. <strong>Less</strong>, <strong>LessEqual</strong>, <strong>Equal</strong>, <strong>NotEqual</strong>, <strong>GreaterEqual</strong>, <strong>Greater</strong>).</li>
                     <li><strong>IE</strong> - Checks against the version of Microsoft Internet Explorer that is present. Value is the version of IE to compare to (ex: <strong>10.0</strong>). All comparison <strong>operator</strong> values are applicable.</li>
                     <li><strong>Machine</strong> - Checks against the architecture of the operating system. Possible values are <strong>x64</strong> and <strong>x86</strong> (ex: <strong>x64</strong> matches against a 64-bit operating system). This condition does not use the <strong>operator</strong> attribute, assuming that the operator is <strong>Equal</strong>.</li>
                     <li><strong>MachineRuntime</strong> - Same as <strong>Machine</strong>.</li>
                     <li><strong>KEY</strong> - Checks for the presence of a registry key. Only applicable for use in the Turbo.net Client Runtime environment. Values are the full registry key path. Possible <strong>operator</strong> values are <strong>Exists</strong> and <strong>DoesNotExist</strong>.</li>
                     <li><strong>FILE</strong> - Checks for the presence of a file. Only applicable for use in the Turbo.net Client Runtime environment. Values are the full file path. Possible <strong>operator</strong> values are <strong>Exists</strong> and <strong>DoesNotExist</strong>.</li>
                     <li><strong>BOOL</strong> - Combines multiple <strong>Condition</strong> elements into logical statements. Possible <strong>operator</strong> values are <strong>AND</strong>, <strong>OR</strong>, and <strong>NOT</strong>. <strong>Condition</strong> elements are included as children of boolean conditions.</li>
                  </ul>
               </li>
               <li><strong>operator</strong> - The operator used in the condition. Possible values are context specific and include <strong>Less</strong>, <strong>LessEqual</strong>, <strong>Equal</strong>, <strong>NotEqual</strong>, <strong>GreaterEqual</strong>, <strong>Greater</strong>, <strong>AND</strong>, <strong>OR</strong>, <strong>NOT</strong>, <strong>Exists</strong>, and <strong>DoesNotExist</strong>.</li>
               <li><strong>value</strong> - The comparison value for the condition. Acceptable values are context specific.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Filesystem</strong></p>
         </td>
         <td>
            <p>Defines the virtual filesystem. Contains a collection of root <strong>Directory</strong> elements.</p>
            <p>Root directory elements include:</p>
            <ul>
               <li><strong>@APPDATA@</strong> - Resolves to the user's roaming application data folder (ex: <strong>c:\users\turbouser\appdata\roaming</strong>).</li>
               <li><strong>@APPDATACOMMON@</strong> - Resolves to the machine's common application data folder (ex: <strong>c:\programdata</strong>).</li>
               <li><strong>@APPDATALOCAL@</strong> - Resolves to the user's local application data folder (ex: <strong>c:\users\turbouser\appdata\local</strong>).</li>
               <li><strong>@APPDATALOCALLOW@</strong> - Resolves to the user's low privilege application data folder (ex: <strong>c:\users\turbouser\appdata\locallow</strong>).</li>
               <li><strong>@APPDIR@</strong> - Resolves to the directory where the virtual application is located.</li>
               <li><strong>@DESKTOP@</strong> - Resolves to the user's desktop folder (ex: <strong>c:\users\turbouser\desktop</strong>).</li>
               <li><strong>@DESKTOPCOMMON@</strong> - Resolves to the shared desktop folder (ex: <strong>c:\users\public\desktop</strong>).</li>
               <li><strong>@DOCUMENTS@</strong> - Resolves to the user's documents folder (ex: <strong>c:\users\turbouser\documents</strong>).</li>
               <li><strong>@DOCUMENTSCOMMON@</strong> - Resolves to the shared documents folder (ex: <strong>c:\users\public\documents</strong>).</li>
               <li><strong>@DOWNLOADS@</strong> - Resolves to the user's downloads folder (ex: <strong>c:\users\turbouser\downloads</strong>).</li>
               <li><strong>@FAVORITES@</strong> - Resolves to the user's favorites folder (ex: <strong>c:\users\turbouser\favorites</strong>).</li>
               <li><strong>@FAVORITESCOMMON@</strong> - Resolves to the shared favorites folder (ex: <strong>c:\users\public\favorites</strong>).</li>
               <li><strong>@MUSIC@</strong> - Resolves to the user's music folder (ex: <strong>c:\users\turbouser\music</strong>).</li>
               <li><strong>@MUSICCOMMON@</strong> - Resolves to the shared music folder (ex: <strong>c:\users\public\music</strong>).</li>
               <li><strong>@PICTURES@</strong> - Resolves to the user's pictures folder (ex: <strong>c:\users\turbouser\pictures</strong>).</li>
               <li><strong>@PICTURESCOMMON@</strong> - Resolves to the shared pictures folder (ex: <strong>c:\users\public\pictures</strong>).</li>
               <li><strong>@PROFILE@</strong> - Resolves to the user's profile folder (ex: <strong>c:\users\turbouser</strong>).</li>
               <li><strong>@PROFILECOMMON@</strong> - Resolves to the shared profile folder (ex: <strong>c:\users\public</strong>).</li>
               <li><strong>@PROGRAMFILES@</strong> - Resolves to the 64-bit program files directory (ex: <strong>c:\program files</strong>). This does not resolve for 32-bit applications.</li>
               <li><strong>@PROGRAMFILESCOMMON@</strong> - Resolves to the 64-bit common program files directory (ex: <strong>c:\program files\common files</strong>). This does not resolve for 32-bit applications.</li>
               <li><strong>@PROGRAMFILESX86@</strong> - Resolves to the 32-bit program files directory (ex: <strong>c:\program files (x86)</strong> on 64-bit operating system, <strong>c:\program files</strong> on 32-bit operating system).</li>
               <li><strong>@PROGRAMFILESCOMMONX86@</strong> - Resolves to the 32-bit common program files directory (ex: <strong>c:\program files (x86)\common files</strong> on 64-bit operating system, <strong>c:\program files\common files</strong> on 32-bit operating system).</li>
               <li><strong>@PROGRAMS@</strong> - Resolves to the user's start menu programs folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs</strong>).</li>
               <li><strong>@PROGRAMSCOMMON@</strong> - Resolves to the shared start menu programs folder (ex: <strong>c:\users\public\appdata\roaming\microsoft\windows\start menu\programs</strong>).</li>
               <li><strong>@STARTMENU@</strong> - Resolves to the user's start menu folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\start menu</strong>).</li>
               <li><strong>@STARTMENUCOMMON@</strong> - Resolves to the shared start menu folder (ex: <strong>c:\users\public\appdata\roaming\microsoft\windows\start menu</strong>).</li>
               <li><strong>@STARTUP@</strong> - Resolves to the user's startup folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs\startup</strong>).</li>
               <li><strong>@STARTUPCOMMON@</strong> - Resolves to the shared startup folder (ex: <strong>c:\users\public\appdata\roaming\microsoft\windows\start menu\programs\startup</strong>).</li>
               <li><strong>@SYSDRIVE@</strong> - Resolves to the system drive (ex: <strong>c:</strong>)</li>
               <li><strong>@SYSTEM@</strong> - Resolves to the 64-bit system directory (ex: <strong>c:\windows\system32</strong>). This does not resolve for 32-bit applications.</li>
               <li><strong>@SYSWOW64@</strong> - Resolves to the 32-bit system directory (ex: <strong>c:\windows\syswow64</strong> on 64-bit operating system, <strong>c:\windows\system32</strong> on 32-bit operating system).</li>
               <li><strong>@TEMPLATES@</strong> - Resolves to the user's template folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\templates</strong>).</li>
               <li><strong>@TEMPLATESCOMMON@</strong> - Resolves to the shared template folder (ex: <strong>c:\users\public\appdata\roaming\microsoft\windows\templates</strong>).</li>
               <li><strong>@VIDEOS@</strong> - Resolves to the user's video folder (ex: <strong>c:\users\turbouser\videos</strong>).</li>
               <li><strong>@WINDIR@</strong> - Resolves to the Windows folder (ex: <strong>c:\windows</strong>).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Directory</strong></p>
         </td>
         <td>
            <p>Defines a directory in the virtual filesystem. Contains a collection of <strong>Directory</strong> and <strong>File</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the directory.</li>
               <li><strong>isolation</strong> - The isolation of the directory. Possible values include <strong>Full</strong>, <strong>WriteCopy</strong>, and <strong>Merge</strong>.</li>
               <li><strong>readOnly</strong> - If the directory is marked as read-only. If <strong>True</strong>, all write attempts to this directory will return access denied errors.</li>
               <li><strong>hide</strong> - If the folder is hidden from all folder enumeration. Only full paths to files under hidden directories will work.</li>
               <li><strong>noSync</strong> - If the directory should use the <strong>local</strong> sandbox. The local sandbox contains changes that will only be persisted on the local machine and not get sync to other sessions.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>File</strong></p>
         </td>
         <td>
            <p>Defines a file in the virtual filesystem.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the file.</li>
               <li><strong>isolation</strong> - The isolation level of the file. Possible values include <strong>Full</strong> or <strong>Hidden</strong>.</li>
               <li><strong>readOnly</strong> - If the file is marked as read-only. If <strong>True</strong>, all write attempts to this file will return access denied errors.</li>
               <li><strong>hide</strong> - If the file is hidden from all file enumeration. Only full paths to the file will work.</li>
               <li><strong>created</strong> - The creation timestamp of the file when it was added to the configuration.</li>
               <li><strong>modified</strong> - The last modified timestamp of the file when it was added to the configuration.</li>
               <li><strong>upgradeable</strong> - If the file is allowed to be updated by later patch layers.</li>
               <li><strong>source</strong> - The path to the source file that will be used at build time.</li>
               <li><strong>system</strong> - An optional value that indicates that a file should have the SYSTEM file attribute applied.</li>
               <li><strong>privatize</strong> - An optional value that can be used for .DLL files which causes all references to the file in the virtual filesystem from other fils to be rewritten. This can be used to isolate references to low level system .DLLs for compatibility with old applications on new operating systems.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Registry</strong></p>
         </td>
         <td>
            <p>Defines the virtual registry. Contains a collection of root <strong>Key</strong> elements.</p>
            <p>Root registry key elements include:</p>
            <ul>
               <li><strong>@HKCR@</strong> - Resolves to the classes root registry key.</li>
               <li><strong>@HKCU@</strong> - Resolves to the current user root registry key.</li>
               <li><strong>@HKLM@</strong> - Resolves to the local machine root registry key.</li>
               <li><strong>@HKU@</strong> - Resolves to the all users root registry key.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Key</strong></p>
         </td>
         <td>
            <p>Defines a registry key in the virtual registry.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the registry key.</li>
               <li><strong>isolation</strong> - The isolation level of the registry key. Possible values are <strong>Full</strong>, <strong>WriteCopy</strong>, and <strong>Merge</strong>.</li>
               <li><strong>readOnly</strong> - If the registry key is marked as read-only. Any attempt to open the key for write access will result in access denied errors.</li>
               <li><strong>hide</strong> - If the registry key is to be hidden from all key enumeration. Still allowed to access by the full path.</li>
               <li><strong>noSync</strong> - If the key and its values are stored in the <strong>local</strong> sandbox. The local sandbox is only stored on the local machine and will not follow the session to other machines.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Value</strong></p>
         </td>
         <td>
            <p>Defines a registry key value in the virtual registry.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the registry value. Set to empty string for the <strong>default</strong> value.</li>
               <li><strong>isolation</strong> - The isolation level of the registry key. Possible values are <strong>Full</strong> and <strong>Hidden</strong>.</li>
               <li><strong>readOnly</strong> - If the registry value is read-only. Any attempt to write to the value will result in access denied errors.</li>
               <li><strong>hide</strong> - If the registry value is hidden from enumeration. Still allowed to access the value by the full path.</li>
               <li><strong>type</strong> - The type of registry value. Possible values include:
                  <ul>
                        <li><strong>String</strong> - A null-terminated string. Translates to <strong>REG_SZ</strong> in the registry.</li>
                        <li><strong>ExpandString</strong> - A null-terminated string which contains environment variables to be resolved at runtime. Translates to <strong>REG_EXPAND_SZ</strong> in the registry.</li>
                        <li><strong>StringArray</strong> - An array of null-terminated strings. Translates to <strong>REG_MULTI_STRING</strong> in the registry. Each string in the array is represented by a child <strong>String</strong> element (ex: <strong>&lt;String value="..." pathInformationTuples="..."/&gt;</strong>).</li>
                        <li><strong>DWORD</strong> - A 32-bit integer value. Translates to <strong>REG_DWORD</strong> in the registry.</li>
                        <li><strong>QWORD</strong> - A 64-bit integer value. Translates to <strong>REG_QWORD</strong> in the registry.</li>
                        <li><strong>Binary</strong> - A binary blob value in hexidecimal string format (ex: <strong>00AB385128...</strong>). Translates to <strong>REG_BINARY</strong> in the registry.</li>
                  </ul>
               </li>
               <li><strong>value</strong> - The registry value in string format. See above <strong>type</strong> for format. This is not applicable to <strong>StringArray</strong> types.</li>
               <li><strong>pathInformationTuples</strong> - An optional value that is set for the string types if the value was normalized during the snapshot process. The three values in the tuple are:
                  <ul>
                        <li>Flags for how the string value was on the snapshot machine... 1 - was all uppercase, 2 - was all lowercase, 4 - was in short file format (ex: <strong>xxxxxx~1</strong>). The value can be a combination of these flags (ex: <strong>5</strong> means all uppercase and short format).</li>
                        <li>The start index of where in the string the replacement occurs.</li>
                        <li>The length of the replacement.</li>
                  </ul>
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>EnvironmentVariables</strong></p>
         </td>
         <td>
            <p>Deprecated. See <strong>EnvironmentVariablesEx</strong>.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>EnvironmentVariablesEx</strong></p>
         </td>
         <td>
            <p>Defines virtual environment variables. Contains a collection of <strong>VariableEx</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>VariableEx</strong></p>
         </td>
         <td>
            <p>Defines a virtual environment variable.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the environment variable (ie. <strong>path</strong>).</li>
               <li><strong>isolationMode</strong> - The isolation mode for the environment variable. Possible values are <strong>Inherit</strong>, <strong>Full</strong>, and <strong>WriteCopy</strong>. If set to <strong>Inherit</strong> the value is taken from the global value defined in <strong>EnvironmentVariableExGlobalSettings</strong>.</li>
               <li><strong>value</strong> - The value of the environment variable.</li>
               <li><strong>mergeMode</strong> - The manner in which the the environment variable value is merged with the native value at runtime. Possible values are <strong>Replace</strong>, <strong>Host</strong>, <strong>Prepend</strong>, and <strong>Append</strong>.</li>
               <li><strong>mergeString</strong> - The string that separates the virtual value from the native value if they are to be merged. The default is ";".</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>PortMaps</strong></p>
         </td>
         <td>
            <p>Defines mappings between virtual network ports and native ports. Contains a collection of <strong>PortMap</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>PortMap</strong></p>
         </td>
         <td>
            <p>Defines a mappings between a virtual network port and a native port.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>value</strong> - The mapping value in the format: <strong>[to port]:[from port]/[protocol]</strong>, where all occurrences of [to port] are mapped to [from port] for the given protocol. The protocol can be <strong>tcp</strong> or <strong>udp</strong> but can omit <strong>/[protocol]</strong> to target both protocols.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ObjectMaps</strong></p>
         </td>
         <td>
            <p>Defines name mappings for various Windows objects. Contains a collection of <strong>ObjectMap</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ObjectMap</strong></p>
         </td>
         <td>
            <p>Defines a name mapping for various Windows objects.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>value</strong> - The mapping value in the format: <strong>[type]://[name]:[mapping]</strong>, where [name] and [mapping] are type specific (see table below).</li>
            </ul>
            <p>Possible values:</p>
            <table>
               <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Mapping</th>
               </tr>
               <tr>
                  <td><strong>pipe</strong> - Indicates that a named pipe should be isolated from the native system.</td>
                  <td>The name of the pipe that is to be isolated.</td>
                  <td>Unused. Must be assigned to the value "0".</td>
               </tr>
               <tr>
                  <td><strong>ip</strong> - Maps requests to the specified IP address to another IP address.</td>
                  <td>The IP address to map from. The name can include an optional flag to not preresolve hostnames. This is done be prefixing the name with <strong>$$donotpreresolvehostnames$$</strong> (ex: <strong>ip://$$donotpreresolvehostnames$$1.1.1.1:2.2.2.2</strong>).</td>
                  <td>The IP address to map to. To deny access to the named IP, set this value to <strong>0.0.0.0</strong>. This value can be made identical to the IP to map to allow the IP if there are other generic mappings to deny it (ex: <strong>ip://1.1.1.1:1.1.1.1</strong>).</td>
               </tr>
               <tr>
                  <td><strong>host</strong> - Maps requests to the specified host name to another host or IP address.</td>
                  <td>The host name to map from. A wildcard character is supported at the beginning (ex: <strong>*</strong> or <strong>*.google.com</strong>).</td>
                  <td>The IP address or host name to map to. To deny access to the named IP/host, set this value to <strong>0.0.0.0</strong>. This value can be made identical to the name to map to allow the host if there are other generic mappings to deny it (ex: <strong>host://*.google.com:*.google.com</strong> if <strong>host://*:0.0.0.0</strong> also exists).</td>
               </tr>
               <tr>
                  <td><strong>window</strong> - Indicates that a window class name should be isolated from the native system.</td>
                  <td>The name of the window class to be isolated.</td>
                  <td>Unused. Must be assigned to the value "0" (ex: <strong>window://IEFrame:0</strong> will isolate Microsoft Internet Explorer's main window from the native environment).</td>
               </tr>
            </table>
         </td>
      </tr>   
      <tr>
         <td valign="top">
            <p><strong>Services</strong></p>
         </td>
         <td>
            <p>Defines virtual services. Contains a collection of <strong>Service</strong> elements.</p>
         </td>
      </tr>  
      <tr>
         <td valign="top">
            <p><strong>Service</strong></p>
         </td>
         <td>
            <p>Defines a virtual service.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the service. This will be used to start the service inside the container via <code>sc start</code> command.</li>
               <li><strong>commandLine</strong> - The command that is executed to start the service.</li>
               <li><strong>friendlyName</strong> - The friendly name of the service.</li>
               <li><strong>description</strong> - The description of the service.</li>
               <li><strong>keepAlive</strong> - If the service continues to run after the container has closed.</li>
               <li><strong>start</strong> - The method by which the service is started. Possible values are <strong>AutoLoad</strong> (started on container start), <strong>LoadOnDemand</strong> (started manually from inside the container), or <strong>Disabled</strong> (cannot be started).</li>
               <li><strong>type</strong> - The type of the service. This must be set to 16 (SERVICE_WIN32_OWN_PROCESS, service started in its own process).</li>
               <li><strong>group</strong> - Unused, leave empty.</li>
               <li><strong>errorControl</strong> - Unused, leave empty.</li>
               <li><strong>objectName</strong> - Unused, leave empty.</li>
               <li><strong>serviceSidType</strong> - Unused, leave <strong>0</strong>.</li>
               <li><strong>wow64</strong> - Unused, leave <strong>False</strong>.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Shortcuts</strong></p>
         </td>
         <td>
            <p>Defines shortcuts that will be added with desktop registration or MSI deployments. Contains a collection of root <strong>Folder</strong> elements.</p>
            <p>Root shortcut folders include:</p>
            <ul>
               <li><strong>Desktop</strong> - Resolves the user's desktop folder (ex: <strong>c:\users\turbouser\desktop</strong>).</li>
               <li><strong>Programs Menu</strong> - Resolves the user's startup menu programs folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs</strong>).</li>
               <li><strong>SendTo</strong> - Resolves the user's sendto folder (ex: <strong>c:\users\turbouser\appdata\roaming\microsoft\windows\sendto</strong>).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Folder</strong></p>
         </td>
         <td>
            <p>Defines a folder where shortcuts will reside that will be added with desktop registration or MSI deployments. Contains a collection of <strong>Folder</strong> and <strong>Shortcut</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the folder.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Shortcut</strong></p>
         </td>
         <td>
            <p>Defines a shortcut that will be added with desktop registration or MSI deployments. The shortcut must point to an existing startup file. Optionally contains an <strong>IconResource</strong> element.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the shortcut.</li>
               <li><strong>targetPath</strong> - The full virtual path to the shortcut target. Must match the path of a defined startup file.</li>
               <li><strong>targetParameter</strong> - The trigger for the referenced startup file.</li>
               <li><strong>arguments</strong> - Command line arguments to the shortcut target.</li>
               <li><strong>showCmd</strong> - Controls how the target is launched. Possible values are <strong>1</strong> (normal), <strong>3</strong> (maximized), or <strong>7</strong> (minimmized).</li>
               <li><strong>description</strong> - The description of the shortcut.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>IconResource</strong></p>
         </td>
         <td>
            <p>The icon to use for the shortcut.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>data</strong> - The icon image data in hexidecimal format (ex: <strong>0001000000ffffffff01000000000000000c0200000049547572626f2...</strong>). Set this in Turbo Studio.</li>
            </ul>
         </td>
      </tr>   
      <tr>
         <td valign="top">
            <p><strong>ProgIds</strong></p>
         </td>
         <td>
            <p>Defines virtual COM ProgIDs that will be added with desktop registration or MSI deployments. Contains a collection of <strong>ProgId</strong> elements.</p>
         </td>
      </tr> 
      <tr>
         <td valign="top">
            <p><strong>ProgId</strong></p>
         </td>
         <td>
            <p>Defines a virtual COM ProgID that will be added with desktop registration or MSI deployments. This is used for file associations. Contains a collection of <strong>Verb</strong> and <strong>IconResource</strong> elements.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the ProgID (ex: <strong>Excel.Sheet.12</strong>).</li>
               <li><strong>description</strong> - The description of the ProgID.</li>
            </ul>
         </td>
      </tr>   
      <tr>
         <td valign="top">
            <p><strong>Verb</strong></p>
         </td>
         <td>
            <p>Defines shell verbs that can be used with associated files.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The name of the verb (ex: <strong>open</strong>).</li>
               <li><strong>command</strong> - The name of the verb as it is displayed in the Windows shell. The ampersand character can be used to denote the hotkey for the command (ex: <strong>&Open</strong>).</li>
               <li><strong>target</strong> - The full virtual path to the handler application. If empty, the behavior is inherited from the virtual registry definitions.</li>
               <li><strong>arguments</strong> - The command line arguments to pass to the target handler (if defined). Use <strong>%1</strong> to use the path to the associated file.</li>
               <li><strong>default</strong> - If the verb is the default behavior in the shell (ie. used when double clicking an associated file).</li>
            </ul>
         </td>
      </tr> 
      <tr>
         <td valign="top">
            <p><strong>IconResource</strong></p>
         </td>
         <td>
            <p>The icon to use for the file extension mapped to this ProgID. If not present then the Windows default empty document icon will be used.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>data</strong> - The icon image data in hexidecimal format (ex: <strong>0001000000ffffffff01000000000000000c0200000049547572626f2...</strong>). Set this in Turbo Studio.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Extensions</strong></p>
         </td>
         <td>
            <p>Defines the file associations which will be added with desktop registration or MSI deployments. Contains a collection of <strong>Extension</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Extension</strong></p>
         </td>
         <td>
            <p>Defines a file association which will be added with desktop registration or MSI deployments.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>name</strong> - The file extension (ex: <strong>.xml</strong>).</li>
               <li><strong>progId</strong> - The virtual ProgID to use to handle file operations.</li>
               <li><strong>mimeType</strong> - The MIME type of the file extension (ex: <strong>text/xml</strong>).</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>DefaultPrograms</strong></p>
         </td>
         <td>
            <p>Deprecated. Leave empty.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>SnapshotDirectories</strong></p>
         </td>
         <td>
            <p>Records the native environment where a snapshot was taken. These mappings are used at runtime to resolve paths in opaque data structure (ie. application files) that couldn't be resolved at build time (like can be done for registry key values). Contains a collection of <strong>Directory</strong> elements.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Directory</strong></p>
         </td>
         <td>
            <p>Records a mapping for root filesystem directory nodes. These are used instead of the standard mappings.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>rootNode</strong> - The root folder node to be mapped.</li>
               <li><strong>path</strong> - The path where the root folder node was pointing on the machine where a snapshot occurred.</li>
               <li><strong>enabled</strong> - If the mapping is enabled at runtime or is just recorded for information. Enabling system folder mappings (ex. <strong>@WINDIR@</strong>, <strong>@SYSTEM@</strong>, etc) will often break applications if the mappings are not consistent with the execution machine.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ShellExtensions</strong></p>
         </td>
         <td>
            <p>Defines shell extensions that will be added with desktop registration. Contains a collection of <strong>ShellExtension</strong> elements. For internal use only.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>ShellExtension</strong></p>
         </td>
         <td>
            <p>Defines a shell extension that will be added with desktop registration.</p>
            <p>Attributes:</p>
            <ul>
               <li><strong>dllPath</strong> - The full virtual path to the DLL which exposes the shell extension.</li>
               <li><strong>IID</strong> - The IID of the shell extension COM object.</li>
               <li><strong>additionalFiles</strong> - A semi-colon seperated list of paths to additional required files.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Publishers</strong></p>
         </td>
         <td>
            <p>Unused. Leave empty.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>HarvestSettings</strong></p>
         </td>
         <td>
            <p>Deprecated. Leave empty.</p>
         </td>
      </tr>
      <tr>
         <td valign="top">
            <p><strong>Id</strong></p>
         </td>
         <td>
            <p>A unique GUID for the configuration. </p>
            <p>Attributes:</p>
            <ul>
               <li><strong>value</strong> - A GUID string (ex: <strong>{075FB3D6-D9CB-4304-BFC4-C755268AD9CD}</strong>).</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>