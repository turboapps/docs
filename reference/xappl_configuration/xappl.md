### XAPPL Configuration

*XAPPL* files specify the configuration for a container image created with Turbo Studio. *XAPPL* files are in XML format so it's easy to edit a container's configuration in a text editor just as you can with Turbo Studio user interface.

Here is a table that describes the purpose of each of the tags you see in *XAPPL* files created with Turbo Studio:

<table>
   <tr>
      <th>Element</th>
      <th>Description</th>
   </tr>
   <tr>
      <td valign="top">
         <p>*OutputLocation*</p>
      </td>
      <td>
         <p>Path to the folder where the output is saved after a successful build. This can be a local path, a UNC path, or a mapped drive.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*OutputFile*</p>
      </td>
      <td>
         <p>Name of the image file output (ie. image.svm or application.exe).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ProjectType*</p>
      </td>
      <td>
         <p>The type of output that is created when built.</p> 
         
         Possible values:
         <ul>
            <li>*Component* - A Turbo component is a *.svm* file which is used with the Turbo.net Hub, Turbo Server, and as application dependencies.</li>
            <li>*Application* - A Turbo standalone executable is a *.exe* file which can run without any additional Turbo.net components.</li>
            <li>*TurboApplication* - A Turbo portable executable is also a *.exe* but requires the Turbo Client Runtime to be installed on the machine as a prerequisite.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Expiration*</p>
      </td>
      <td>
         <p>The expiration settings for the output image. </p>
         
         Attributes:
         <ul>
            <li>*daysLimit* - Denotes the number of days that the image can be used on a machine before expiration. </li>
            <li>*expirationDate* - Gives a hard date for expiration. </li>
            <li>*expirationWarningDays* - The number of days prior to expiration that a warning message is displayed.</li>
            <li>*webTimeUrl* - A trusted url that is used by Turbo Studio to get the current time. Set to empty to use the machine system time.</li>
            <li>*expireOnWebFail* - Whether the launch will fail if the web time url is not accessible. Not applicable when using the system time.</li>
         </ul>
         
         The child elements *ExpiredMessage*, *ExpirationWarning*, and *UnreachableWarning* are the text messages that are displayed.
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Output*</p>
      </td>
      <td>
         <p>The output options for the application build.</p>
         
         Attributes applicable to standalone applications:
         <ul>
            <li>*diagnosticMode* - Enable diagnostic mode by default. Can also be enabled at runtime with /XEnable=Diagnostics command line parameter.</li>
         </ul>
         
         Attributes applicable to portable applications:
         <ul>
            <li>*includeRuntimeDotNetImage* - Include the Turbo Client Runtime .NET 4.5 image in the package. The .NET image will add more than 400MB to the size of the package so only use if you expect to target platforms that will not have the .NET runtime already present.</li>
            <li>*allowFullIsolation* - Allows the *full* isolation setting at runtime. Enabling this setting will force the *clean* image to be included from the Turbo.net hub which will add more than 200MB to the package size.</li>
            <li>*enableSync* - Enables sandbox sync for the container. </li>
            <li>*enableAutoUpdate* - Enables automatic updates for images which are included in the package. </li>
            <li>*showLaunchSettings* - Gives the user configuration options on application start (isolation, sync, etc).</li>
            <li>*isolationLevel* - The default isolation settings for the application container.</li>
            <li>*hub* - The hub where the package images are located. This can be *https://turbo.net* or the url of a Turbo Hub Server.</li>
            <li>*isolationOptions* - Additional isolation options to use in the application container. Currently the only available option is *MergeUser* which makes the user folders (desktop, documents, etc) merge isolated no matter the container's isolation settings.</li>
        </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*MSI*</p>
      </td>
      <td>
         <p>The output settings for the MSI setup file.</p>
         
         Attributes:
         <ul>
            <li>*outputMsiPath* - The location where the setup MSI is built.</li>
            <li>*title* - The value of the MSI title property.</li>
            <li>*subject* - The value of the MSI subject property.</li>
            <li>*keywords* - The value of the MSI keywords property.</li>
            <li>*productName* - The value of the MSI product name property.</li>
            <li>*productVersion* - The value of the MSI product version property.</li>
            <li>*manufacturer* - The value of the MSI manufacturer property.</li>
            <li>*productLanguage* - The value of the MSI product language property.</li>
            <li>*author* - The value of the MSI author property.</li>
            <li>*description* - The value of the MSI description property.</li>
            <li>*manufacturerUrl* - The value of the MSI manufacturer URL property.</li>
            <li>*autoBuild* - Whether the MSI should build when the application build completes successfully.</li>
            <li>*isolatePerUser* - Whether the MSI setup should be installed on a per-user basis or installed for all users. When installing per-user, the install root path is *Application Data*. When installing for all users, the install root path is *Program Files*.</li>
            <li>*applicationFolder* - The folder where the application should be installed.</li>
            <li>*upgradePreviousVersion* - Whether the setup should maintain the same *Upgrade Code* when it builds or change the *Upgrade Code* for each build version. This allows the setup to upgrade previous versions when they are installed or allow them to exist side-by-side. If enabled, the *Product Version* field must be updated in Turbo Studio to update the *Upgrade Code* automatically.</li>
            <li>*productCode* - The value of MSI product code property.</li>
            <li>*upgradeCode* - The value of MSI upgrade code property.</li>
            <li>*componentId* - The value of the MSI component id property.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Network*</p>
      </td>
      <td>
         <p>Contains a *Proxy* element.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Proxy*</p>
      </td>
      <td>
         <p>The network proxy settings for the container image.</p>
         
         Attributes:
         <ul>
            <li>*enableTCP* - Enables the proxy for TCP network traffic.</li>
            <li>*enableUDP* - Enables the proxy for UDP network traffic.</li>
            <li>*serverAddress* - The hostname of the proxy server.</li>
            <li>*serverPort* - The connection port of the proxy server.</li>
            <li>*type* - The type of proxy connection. Possible values are *Socks5*, *Socks4*, *Https*, and *Http*.</li>
            <li>*enableAuthentication* - Whether the proxy requires authentication.</li>
            <li>*username* - The username to authenticate the proxy.</li>
            <li>*password* - The password to authenticate the proxy.</li>
            <li>*useSpoonTicket* - Whether the currently logged in Turbo user ticket is passed for authentication. Used for Turbo Tnlr.</li>
         </ul>
      </td>
   </tr>>
   <tr>
      <td valign="top">
         <p>*Clipboard*/p>
      </td>
      <td>
         <p>The clipboard settings for the container (ie. copy-paste operations).</p>
         
         Attributes:
         <ul>
            <li>*isolationMode* - The isolation mode which separates the container clipboard from native. Possible values are: *Merge* and *Full*. If fully isolated, will only be able to paste things that were copied inside the container.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*EnvironmentVariableExGlobalSettings*/p>
      </td>
      <td>
         <p>The global environment variable settings.</p>
         
         Attributes:
         <ul>
            <li>*isolationMode* - The isolation mode for environment variables. Possible values are: *Inherit*, *Full*, and *WriteCopy*. *Inherit* uses whatever isolation settings are specified on the environment variable registry keys (*HKCU\Environment* or *HKLM\System\CurrentControlSet\Control\Session Manager\Environment*).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Dependencies*</p>
      </td>
      <td>
         <p>Contains a collection of *Dependency* elements. These only affect container environments run through the Turbo.net Client Runtime platform and have no effect on standalone executable builds.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Dependency*</p>
      </td>
      <td>
         <p>Specifies a Turbo.net Hub dependency for the image.</p>
         
         Attributes:
         <ul>
            <li>*Identifier* - The fully qualified identifier of the Turbo.net Hub dependency (ex: "mozilla/firefox-base:61.0.2").</li>
            <li>*Hash* - The hash of the dependency image (ex: "d54de61a9fd54a5467e5bb084e0dcabacb0689cab5c329558d2916d7d3f1bf38").</li>
            <li>*BakedIn* - Whether the dependency image configuration has already been merged into the current image configuration or if it is to be merged at runtime./li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Requirements*</p>
      </td>
      <td>
         <p>Contains a collection of *Requirement* elements. These only affect container environments run through the Turbo.net Client Runtime platform and have no effect on standalone executable builds.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Requirement*</p>
      </td>
      <td>
         <p>Specify various requirements that are enforced at runtime.</p>
         
         Attributes:
         <ul>
            <li>*type* - The type of runtime requirement. At this time this value can only be "minosver" which specifies a minimum required Microsoft Windows version.</li>
            <li>*value* - The value to pass to the type handler. Currently this can be the minimum version of Microsoft Windows to allow execution (Win7 is "6.1", Win8 is "6.2", Win8.1 is "6.3", and Win10 is "10.0")</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Packages*</p>
      </td>
      <td>
         <p>Configuration settings of runtime packages which are included in the image. Contains *Java* and a collection of *Package* elements.</p>
         
         Attributes:
         <ul>
            <li>*trimDotNet* - Performs a build-time process to attempt to trim included .NET packages to the minimum set of binaries required. This only works for .NET packages added from Turbo Studio runtimes. Custom .NET packages added in *Layers* panel are not subject to trimming operations.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Package*</p>
      </td>
      <td>
         <p>Indicates that a layer is to be merged into the image at build-time. Turbo Studio searches the local *Layers* cache for matching packages. The *Layers* cache is in *C:\Users\[user]\Documents\Turbo.net\Components* and is configured in the Turbo Studio *Layers* panel.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the layer package. This comes from the layer standard metadata if present or else the name of the file.</li>
            <li>*platform* - The system architecture where the package is configured. This is deprecated and always *x86* now.</li>
            <li>*version* - The version of the layer package. This comes from the layer standard metadata if present or else is "1.0.0.0" by default.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Java*</p>
      </td>
      <td>
         <p>Configuration settings for the virtual java runtime. Contains a *Runtime* and *Settings* elements.</p>
         
         *Rumtime* attributes:
         <ul>
            <li>*name* - The name of the package. In this context it will always be *Java*.</li>
            <li>*platform* - The target platform for the java package. In this context it will always be *x86*.</li>
            <li>*version* - The version of the java package to use.</li>
         </ul>
         
         *Settings* attributes:
         <ul>
            <li>*startupType* - The startup type for the java application. Possible values are *Class* and *JAR*.</li>
            <li>*startup* - The name of the class or jar file to execute.</li>
            <li>*classpath* - The path to search for the class files to execute. Only used with type *Class*.</li>
            <li>*options* - Additional command line parameters which are passed to java.exe.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*VirtualizationSettings*</p>
      </td>
      <td>
         <p>Virtual machine configuration settings which affect runtime behavior. Also contains a *ChildProcessVirtualization* element.</p>
         
         Attributes:
         <ul>
            <li>*suppressBranding* - Disables the Turbo runtime splash. Default is *True*.</li>
            <li>*deleteSandbox* - Removes the sandbox runtime environment when the application exits. This is used to ensure a fresh sandbox environment on every launch. Default is *False*.</li>
            <li>*shutdownProcessTree* - Kills all the virtual processes when the root process exists. This is used to ensure that services and other spawned processes don't hang around after the application exists. Default is *False*.</li>
            <li>*enhancedDEPCompatibility* - Provides compatibility for Windows 2003 systems with Data Execution Protection enabled. Default is *False*.</li>
            <li>*notifyProcessStarts* - Causes a notification to be sent as a debugging output string whenever a new process is started within the virtual environment. Default is *False*.</li>
            <li>*enableLegacySecurityPassthrough* - Causes calls to *NtSetSecurityObject* to be ignored. Default is *False*.</li>
            <li>*trimUACManifest* - Removes items from the application manifest that may cause the application to require elevation and show a UAC prompt.</li>
            <li>*forceFIPSCompliance* - Disables runtime FIPS check for application compatibility on locked down devices. To be used only if application security can be ensured by other means. Default is *False*.</li>
            <li>*forceReadShareFiles* - Forces any file opened by any process within the virtual environment to do so with the READ_SHARE flag set to prevent files from being locked. Default is *False*.</li>
            <li>*isolateWindowClasses* - Isolates window classes used in the Windows GUI framework (using *RegisterClass* or *RegisterClassEx* system APIs). For example, this would allow a virtualized Firefox instance to run side-by-side with a native instance. Default is *False*.</li>
            <li>*readOnlyVirtualization* - Prevents any modifications to files or registry keys in the container. All requests to open files or keys for read access will return access denied errors. Default is *False*.</li>
            <li>*disableXenocodeCommandLine* - Disables the virtualization command line switches used to customize behavior at runtime (such as /XShellEx, /XEnable, etc). Default is *False*.</li>
            <li>*suppressSandboxCollisionCheck* - Disables detection of multiple applications trying to access the same sandbox at the same time with different settings. Doing this could corrupt the sandbox but on rare occasion is necessary to work around other problems. Default is *False*.</li>
            <li>*subsystem* - The Windows platform subsystem to use and determines whether it is launched as a windowed or console application. This can be *Inherit* (default), *GUI*, or *Console*. *Inherit* will determine the subsystem from the startup file.</li>
            <li>*targetArchitecture* - The system architecture that the application is expected to run in. This controls the nodes that are available in Turbo Studio filesystem editor and affects file and registry path mappings at runtime. Possible values are *x86* and *x64*. In most cases this should be set to *x64* unless the configuration was generated from a snapshot on an x86 machine.</li>
            <li>*sandboxPath* - The base path for where the container's runtime sandbox is stored. The sandbox records all changes to *full* or *writecopy* isolated files and registry keys in the container. Default path is under the current user's local application data folder. This value is only used for standalone applications.</li>
            <li>*exeOptimization* - The startup file will be attempted to be launched from within the initial virtual machine boot process rather than spawn a new process. This is only possible if there is a single startup file to be launched. Default is *False*.</li>
            <li>*compressPayload* - Compresses the data which is included in the container package. This decreases the size of the package but increases the initial launch time as data must be decompressed to use. Default is *False*.</li>
            <li>*forceIndicateRunningElevated* - Creates an environment where the container processes believe they are running with elevated priviledges when they are not. This is to work around some application requirements for full administrator access. Default is *False*.</li>
            <li>*launchChildProcsAsUser* - Causes all child processes to be launched with the same security priviledges as the root container process. Default is *False*.</li>
            <li>*enableDRMCompatibility* - Enables enhanced compatibility with applications that are protected by DRM software such as "Armadillo". Default is *False*.</li>
            <li>*faultExecutablesIntoSandbox* - Causes all .exe and .dll files to be faulted into the sandbox before being loaded rather than read from within the container package. This can work around some .dll load issues that result in application errors. Default is *False*.</li>
            <li>*minSandboxSpaceAvail* - The minimum amount of disk space (in MB) on the sandbox volume that is required to launch the container. Default is *-1* (no limit).</li>
            <li>*honorWow6464AccessFlag* - Allows the use of the KEY_WOW64_64KEY registry key access flag. Disabling this can work around application errors caused because it wasn't properly snapshotted for x64 machines. Default is *True*.</li>
            <li>*suppressPopups* - Hides all error dialogs shown by the virtual machine. This can be used as a work around for stubborn errors that cannot be solved other ways. This should be used very sparingly as it will potentiall hide real problems. Default is *False*.</li>
            <li>*hideShellWindow* - Causes the main desktop window to be hidden from processes in the container. This is used for compatibility in Internet Explorer 6 containers. Default is *False*.</li>
            <li>*isDriverSVM* - For internal use only. Indicates that the image has special handling in the Turbo Client Runtime environment. Default is *False*.</li>
            <li>*forceEntryLayerIsolation* - Disables the patching behavior of layer dependencies in regards to isolation settings so that the base layer isolation is always used over patch layers. Default is *False*.</li>
            <li>*stubExeCachePath* - Specifies a cache path for virtual machine stubexe processes. By default this is blank and all stubexes are stored in the container sandbox.</li>
            <li>*spoonCachePath* - Specifies a cache path for temporary runtime files. By default this is blank and all temp files are stored under %TEMP%.</li>
            <li>*waitForChildOnly* - Causes the container to exit when the startup file exits rather than wait for all container processes to exit. Spawned processes will remain unless *shutdownProcessTree* is also enabled. This is only applicable if *exeOptimization* is disabled. Default is *True*.</li>
            <li>*httpUrlPassthrough* - Causes http/https URLs to be opened outside the container with the native handler. Default is *False*.</li>
            <li>*mergeStartupDir* - Causes the directory where the startup file is located to automatically be set to *merge* isolation. Useful when the startup file is dynamic (ie. set with */XShellEx*) and needs access to process files. Default is *False*.</li>
            <li>*allowGlobalWindowHooks* - Enables global hooks using the SetWindowsHookEx system API. By default this is *False* which automatically converts any global hooks into a local thread hook.</li>
            <li>*breakIdenticalSendMessageRecursion* - Enables detection of identical SendMessage calls in buggy software which may cause a stack overflow error. Default is *False*.</li>
            <li>*extendedWinXPCompatibility* - Enables additional compatibility for applications which rely on undocumented APIs in Windows XP. Default is *False*.</li>
            <li>*isolateProcessNames* - Appends the sandbox hash string to the end of process names. This is used to allow side-by-side execution for applications which have logic to find existing processes to prevent mulitple instances. Default is *False*.</li>
            <li>*isolateNonSystemDrives* - Hides access to non-system drives on the machine. Default is *False*.</li>
            <li>*isolateNetworkShares* - Hides access to network shares defined on the machine. Default is *False*.</li>
            <li>*disableProxySupportForRouteMaps* - Disables network isolation and routing support to work around compatibility issues with some network security products. Default is *False*.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ChildProcessVirtualization*</p>
      </td>
      <td>
         <p>Settings for how child processes are handled in the container. Contains a collection of *ChildProcessException* elements.</p>
         
         Attributes:
         <ul>
            <li>*spawnVm* - Indicates that by default child processes should be spawned inside the container. Processes named in *ChildProcessException* will be the opposite behavior of this setting. Default is *True*.</li>
            <li>*spawnExternalComServers* - COM servers will be accessible to other native processes. Default is *False*.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ChildProcessException*</p>
      </td>
      <td>
         <p>Indicates a child process that is to have different *spawnVm* settings than the default specified in *ChildProcessVirtualization*.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the process to exclude (ex: *splwow64.exe*).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*XLayers*</p>
      </td>
      <td>
         <p>Allows a container to search for additional layers to load at runtime. Contains a collection of *RequiredXLayer* elements.</p>
         
         Attributes:
         <ul>
            <li>*xlayerSearchPattern* - A path pattern that is used at runtime to search for layers to load. Layers discovered are loaded in alphabetical order. For example: <strong>@APPDIR@\patches_*.svm</strong> and <strong>\\networkshare\patches\*.svm</strong>.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*RequiredXLayer*</p>
      </td>
      <td>
         <p>Specifies which layers are required to be present in order for the container to launch. The search pattern in *XLayers* element must be specified.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of a required layer which is to be discovered in the *xlayerSearchPattern* (ex: *shared.svm*). If the layer is not discovered then an error will occur and the container will not start.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*NamedObjectIsolation*</p>
      </td>
      <td>
         <p>Allows isolation of specific named objects in the container (such as events, mutexes, and semaphores). Contains a collection of *Exception* elements.</p>
         
         Attributes:
         <ul>
            <li>*enabled* - Whether named object isolation is enabled by default. This can be overwritten with *Exception* elements. Default is *False*.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Exception*</p>
      </td>
      <td>
         <p>Specifies exceptions to the default named object isolation rules.</p>
         
         Attributes:
         <ul>
            <li>*regex* - The regular expression pattern to match named object names. For example, "ieframe" will match any named object with "ieframe" anywhere in the name and "\\RPC Control\\OSPPC.*" will match objects with names such as "machine\rpc control\osppc0123".</li>
            <li>*replacement* - Optional value used to rename matching named objects. For example, if *regex* were set to "NAMEDOBJ\d+" and *replacement* was set to "NAMEDOBJ" then an object with a name "NAMEDOBJ25" would be renamed to "NAMEDOBJ". Default is empty so no replacement operation is performed.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Dns*</p>
      </td>
      <td>
         <p>Specifies DNS mappings inside the container environment. Contains a collection of *Entry* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Entry*</p>
      </td>
      <td>
         <p>Specifies a mapping for hostnames and IPs from one to another.</p>
         
         Attributes:
         <ul>
            <li>*name* - The source hostname or IP to map (ex: google.com).</li>
            <li>*redirect* - The target hostname or IP to map to.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Device*</p>
      </td>
      <td>
         <p>Overwrites device characteristics of the machine where the container is executed. Contains elements for *MachineName*, *MachineSid*, *NetworkAdapters*, and *ComputerSystemProduct*. Use `xstudio.exe /capture-device` to fill in the information.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*MachineName*</p>
      </td>
      <td>
         <p>Overwrites the name of the machine which is returned from `GetComputerNameEx` and `GetComputerName` system APIs. Does not change the *COMPUTERNAME* environment variable.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*MachineSid*</p>
      </td>
      <td>
         <p>Overwrites the SID (Security Identifier) of the machine.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*NetworkAdapters*</p>
      </td>
      <td>
         <p>Replaces the network adapters which appear available to the container. Contains a collection of *NetworkAdapter* elements which contain a *PhysicalAddress* element. The *PhysicalAddress* element accepts the MAC address of the adapter that will be returned by the `GetAdaptersAddresses` system API (ex: *000d83b1c08e*).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ComputerSystemProduct*</p>
      </td>
      <td>
         <p>Overwrites the machine system product UUID returned from Win32_ComputerSystemProduct WMI. Contains a *UUID* element (ex: FAF76B96-798C-11D2-AAD1-006008C78BC7).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*EnvironmentStats*</p>
      </td>
      <td>
         <p>Contains information about the snapshot machine where the application configuration was created. For non-snapshot scenarios, this element is empty.</p>
         
         Attributes:
         <ul>
            <li>*osVersion* - The version of Microsoft Windows operating system.</li>
            <li>*x64* - True if was a 64-bit operating system.</li>
            <li>*ieVersion* - The version of Microsoft Internet Explorer</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*WorkingDirectory*</p>
      </td>
      <td>
         <p>Specifies which directory the virtual application will execute from.</p>
         
         Attributes:
         <ul>
            <li>*option* - The working directory mode used. Possible values are *StartupFileDirectory* (the directory where the startup file resides), *CurrentDirectory* (the directory where the virtual application is launched from), or *SpecificDirectory* (uses the value from the *specifiedDirectory* attribute). Default is *StartupFileDirectory*.</li>
            <li>*specifiedDirectory* - Sets the working directory to a specific directory. Only applicable if the *option* mode is set to *SpecificDirectory*.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*DisabledVmSettings*</p>
      </td>
      <td>
         <p>A list of VM settings which are to be disabled in the Turbo.net Client Runtime environment (including portable executables). Not applicable to standalone executables or their dependencies. Contains a collection of *DisabledVmSetting* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*DisabledVmSetting*</p>
      </td>
      <td>
         <p>Specifies a VM setting to be disabled in the Turbo.net Client Runtime environment.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the VM setting to disable.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*StartupShims*</p>
      </td>
      <td>
         <p>A list of user defined shims that will be executed on container startup. Contains a collection of *Shim* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ShutdownShims*</p>
      </td>
      <td>
         <p>A list of user defined shims that will be executed on container shutdown. Contains a collection of *Shim* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Shim*</p>
      </td>
      <td>
         <p>A user defined DLL that contains custom functionality to be executed before or after a container's life.</p>
         
         Attributes:
         <ul>
            <li>*path* - The path to where the shim DLL is located. At build time the shim will be copied into the container where it will be executed from at runtime.</li>
            <li>*param* - A string parameter that is passed to the shim DLL.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Scripts*</p>
      </td>
      <td>
         <p>A user defined shell script file (.bat or .cmd) that is executed before or after a container's life.</p>
         
         Attributes:
         <ul>
            <li>*startup* - The path, in the container environment, where the startup script is located. Must use the full, resolved virtual path (no tokens such as @SYSDRIVE@).</li>
            <li>*shutdown* - The path, in the container environment, where the shutdown script is located.</li>
            <li>*runAsAdmin* - The script will be executed in an elevated user context.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ActiveDirectory*</p>
      </td>
      <td>
         <p>Specifies launch restrictions based on Active Directory group or domain membership.</p>
         
         Attributes:
         <ul>
            <li>*domain* - The name of an Active Directory domain that is required.</li>
            <li>*group* - The name of a an Active Directory group that the current user must be a member of.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*StandardMetadata*</p>
      </td>
      <td>
         <p>Configures standard metadata properties. For standalone executables, these values show up in .exe properties. For layers, these values will be used when displaying information when imported in the *Layers* panel in Turbo Studio. Contains a collection of *StandardMetadataItem* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*StandardMetadataIte*</p>
      </td>
      <td>
         <p>Standard metadata which is applied to the image.</p>
         
         Attributes:
         <ul>
            <li>*property* - The name of the standard metadata field. Possible values are *Title*, *Publisher*, *Description*, *Website*, and *Version*.</li>
            <li>*value* - The value of the standard metadata field. This can be set to *@INHERIT@* to get the value automatically from the startup file (if only one is specified).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*CustomMetadata*</p>
      </td>
      <td>
         <p>Configures custom metadata properties. For standalone executables, these values show up in .exe properties. Contains a collection of *CustomMetadataItem* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*CustomMetadataItem*</p>
      </td>
      <td>
         <p>Custom metadata which is applied to the image.</p>
         
         Attributes:
         <ul>
            <li>*property* - The name of the custom metadata field.</li>
            <li>*value* - The value of the custom metadata field.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*SplashImage*</p>
      </td>
      <td>
         <p>Defines a splash image that is displayed while the startup file is being executed.</p>
         
         Attributes:
         <ul>
            <li>*path* - The path to the image.</li>
            <li>*transparency* - The color used to indicate transparent pixels. This is the name of a system-defined color. The default is *Magenta* (#FFFF00FF).</li>
            <li>*seconds* - The length of time (in seconds) the splash image is displayed. Configure this to be less than the startup time for your application.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*StartupFiles*</p>
      </td>
      <td>
         <p>Defines the available files that can be executed to start the container. Contains a collection of *StartupFile* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*StartupFile*</p>
      </td>
      <td>
         <p>Defines a file that can be used to start the container.</p>
         
         Attributes:
         <ul>
            <li>*node* - The full, virtual path to the file (.exe, .cmd, etc). The file doesn't need to be present in the container but must be accessible given the applicable isolation settings. The path should use tokens for maximum compatibility (ex: *@SYSDRIVE@*, *@PROGRAMFILES@*, etc).</li>
            <li>*tag* - A name that can be given to a group of startup files (also known as *trigger* in some contexts). For standalone executables, the tag name can be passed as the first parameter to run all the startup files in the group. For the Turbo.net Client Runtime environment, the `--trigger` parameter can be used to specify the group to execute. If this is empty, it will be executed by default (same as *default* attribute).</li>
            <li>*commandLine* - Additional command line parameters to pass to the startup file when it is executed.</li>
            <li>*default* - If this startup file is executed by default when no other *tag* value is specified.</li>
            <li>*architecture* - The architecture where the startup file is valid. Possible values are *x64*, *x86*, or *AnyCpu* (ex: *x64* startup files are only launched on 64-bit operating systems).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Layers*</p>
      </td>
      <td>
         <p>Defines layers of virtual operating system settings which are merged together at runtime. Layers are loaded in the order that they are defined in the xappl. Conflicting settings (ie. a file defined in multiple layers with different isolation settings) are won by the layer that is loaded first. Containers a collection of *Layer* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Layer*</p>
      </td>
      <td>
         <p>Defines a layer of the virtual operating system. Contains elements for *Condition*, *Filesystem*, *Registry*, *EnvironmentVariables*, *EnvironmentVariablesEx*, *PortMaps*, *ObjectMaps*, *Services*, *Shortcuts*, *ProgIds*, *Extensions*, *DefaultPrograms*, *SnapshotDirectories*, and *ShellExtensions*.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the layer. The name *Default* defines the main layer which is the foundation for all other layers. There can only be one *Default* layer. The names for the other layers should be set to convey the reason for the layer's existance.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Condition*</p>
      </td>
      <td>
         <p>Defines a condition that must pass at runtime for the layer to be applied.</p>
         
         Attributes:
         <ul>
            <li>*variable* - The type of the condition. Possible values include:
                <ul>
                    <li>*OS* - Checks against the operating system version. Possible values are *Win10*, *Win81*, *Win8*, *Win7*, and *WinXP*. All comparison *operator* values are applicable (ie. *Less*, *LessEqual*, *Equal*, *NotEqual*, *GreaterEqual*, *Greater*).</li>
                    <li>*IE* - Checks against the version of Microsoft Internet Explorer that is present. Value is the version of IE to compare to (ex: *10.0*). All comparison *operator* values are applicable.</li>
                    <li>*Machine* - Checks against the architecture of the operating system. Possible values are *x64* and *x86* (ex: *x64* matches against a 64-bit operating system). This condition does not use the *operator* attribute, assuming that the operator is *Equal*.</li>
                    <li>*MachineRuntime* - Same as *Machine*.</li>
                    <li>*KEY* - Checks for the presence of a registry key. Only applicable for use in the Turbo.net Client Runtime environment. Values are the full registry key path. Possible *operator* values are *Exists* and *DoesNotExist*.</li>
                    <li>*FILE* - Checks for the presence of a file. Only applicable for use in the Turbo.net Client Runtime environment. Values are the full file path. Possible *operator* values are *Exists* and *DoesNotExist*.</li>
                    <li>*BOOL* - Combines multiple *Condition* elements into logical statements. Possible *operator* values are *AND*, *OR*, and *NOT*. *Condition* elements are included as children of boolean conditions.</li>
                </ul>
            </li>
            <li>*operator* - The operator used in the condition. Possible values are context specific and include *Less*, *LessEqual*, *Equal*, *NotEqual*, *GreaterEqual*, *Greater*, *AND*, *OR*, *NOT*, *Exists*, and *DoesNotExist*.</li>
            <li>*value* - The comparison value for the condition. Acceptable values are context specific.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Filesystem*</p>
      </td>
      <td>
         <p>Defines the virtual filesystem. Contains a collection of root *Directory* elements.</p>
         
         Root directory elements include:
         <ul>
            <li>*@APPDATA@* - Resolves to the user's roaming application data folder (ex: *c:\users\turbouser\appdata\roaming*).</li>
            <li>*@APPDATACOMMON@* - Resolves to the machine's common application data folder (ex: *c:\programdata*).</li>
            <li>*@APPDATALOCAL@* - Resolves to the user's local application data folder (ex: *c:\users\turbouser\appdata\local*).</li>
            <li>*@APPDATALOCALLOW@* - Resolves to the user's low privilege application data folder (ex: *c:\users\turbouser\appdata\locallow*).</li>
            <li>*@APPDIR@* - Resolves to the directory where the virtual application is located.</li>
            <li>*@DESKTOP@* - Resolves to the user's desktop folder (ex: *c:\users\turbouser\desktop*).</li>
            <li>*@DESKTOPCOMMON@* - Resolves to the shared desktop folder (ex: *c:\users\public\desktop*).</li>
            <li>*@DOCUMENTS@* - Resolves to the user's documents folder (ex: *c:\users\turbouser\documents*).</li>
            <li>*@DOCUMENTSCOMMON@* - Resolves to the shared documents folder (ex: *c:\users\public\documents*).</li>
            <li>*@DOWNLOADS@* - Resolves to the user's downloads folder (ex: *c:\users\turbouser\downloads*).</li>
            <li>*@FAVORITES@* - Resolves to the user's favorites folder (ex: *c:\users\turbouser\favorites*).</li>
            <li>*@FAVORITESCOMMON@* - Resolves to the shared favorites folder (ex: *c:\users\public\favorites*).</li>
            <li>*@MUSIC@* - Resolves to the user's music folder (ex: *c:\users\turbouser\music*).</li>
            <li>*@MUSICCOMMON@* - Resolves to the shared music folder (ex: *c:\users\public\music*).</li>
            <li>*@PICTURES@* - Resolves to the user's pictures folder (ex: *c:\users\turbouser\pictures*).</li>
            <li>*@PICTURESCOMMON@* - Resolves to the shared pictures folder (ex: *c:\users\public\pictures*).</li>
            <li>*@PROFILE@* - Resolves to the user's profile folder (ex: *c:\users\turbouser*).</li>
            <li>*@PROFILECOMMON@* - Resolves to the shared profile folder (ex: *c:\users\public*).</li>
            <li>*@PROGRAMFILES@* - Resolves to the 64-bit program files directory (ex: *c:\program files*). This does not resolve for 32-bit applications.</li>
            <li>*@PROGRAMFILESCOMMON@* - Resolves to the 64-bit common program files directory (ex: *c:\program files\common files*). This does not resolve for 32-bit applications.</li>
            <li>*@PROGRAMFILESX86@* -Resolves to the 32-bit program files directory (ex: *c:\program files (x86)* on 64-bit operating system, *c:\program files* on 32-bit operating system).</li>
            <li>*@PROGRAMFILESCOMMONX86@* -Resolves to the 32-bit common program files directory (ex: *c:\program files (x86)\common files* on 64-bit operating system, *c:\program files\common files* on 32-bit operating system).</li>
            <li>*@PROGRAMS@* - Resolves to the user's start menu programs folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs*).</li>
            <li>*@PROGRAMSCOMMON@* - Resolves to the shared start menu programs folder (ex: *c:\users\public\appdata\roaming\microsoft\windows\start menu\programs*).</li>
            <li>*@STARTMENU@* - Resolves to the user's start menu folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\start menu*).</li>
            <li>*@STARTMENUCOMMON@* - Resolves to the shared start menu folder (ex: *c:\users\public\appdata\roaming\microsoft\windows\start menu*).</li>
            <li>*@STARTUP@* - Resolves to the user's startup folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs\startup*).</li>
            <li>*@STARTUPCOMMON@* - Resolves to the shared startup folder (ex: *c:\users\public\appdata\roaming\microsoft\windows\start menu\programs\startup*).</li>
            <li>*@SYSDRIVE@* - Resolves to the system drive (ex: *c:*)</li>
            <li>*@SYSTEM@* - Resolves to the 64-bit system directory (ex: *c:\windows\system32*). This does not resolve for 32-bit applications.</li>
            <li>*@SYSWOW64@* - Resolves to the 32-bit system directory (ex: *c:\windows\syswow64* on 64-bit operating system, *c:\windows\system32* on 32-bit operating system).</li>
            <li>*@TEMPLATES@* - Resolves to the user's template folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\templates*).</li>
            <li>*@TEMPLATESCOMMON@* - Resolves to the shared template folder (ex: *c:\users\public\appdata\roaming\microsoft\windows\templates*).</li>
            <li>*@VIDEOS@* - Resolves to the user's video folder (ex: *c:\users\turbouser\videos*).</li>
            <li>*@WINDIR@* - Resolves to the Windows folder (ex: *c:\windows*).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Directory*</p>
      </td>
      <td>
         <p>Defines a directory in the virtual filesystem. Contains a collection of *Directory* and *File* elements.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the directory.</li>
            <li>*isolation* - The isolation of the directory. Possible values include *Full*, *WriteCopy*, and *Merge*.</li>
            <li>*readOnly* - If the directory is marked as read-only. If *True*, all write attempts to this directory will return access denied errors.</li>
            <li>*hide* - If the folder is hidden from all folder enumeration. Only full paths to files under hidden directories will work.</li>
            <li>*noSync* - If the directory should use the *local* sandbox. The local sandbox contains changes that will only be persisted on the local machine and not get sync to other sessions.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*File*</p>
      </td>
      <td>
         <p>Defines a file in the virtual filesystem.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the file.</li>
            <li>*isolation* - The isolation level of the file. Possible values include *Full* or *Hidden*.</li>
            <li>*readOnly* - If the file is marked as read-only. If *True*, all write attempts to this file will return access denied errors.</li>
            <li>*hide* - If the file is hidden from all file enumeration. Only full paths to the file will work.</li>
            <li>*created* - The creation timestamp of the file when it was added to the configuration.</li>
            <li>*modified* - The last modified timestamp of the file when it was added to the configuration.</li>
            <li>*upgradeable* - If the file is allowed to be updated by later patch layers.</li>
            <li>*source* - The path to the source file that will be used at build time.</li>
            <li>*privatize* - An optional value that can be used for .DLL files which causes all references to the file in the virtual filesuystem from other fils to be rewritten. This can be used to isolate references to low level system .DLLs for compatibility with old applications on new operating systems.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Registry*</p>
      </td>
      <td>
         <p>Defines the virtual registry. Contains a collection of root *Key* elements.</p>
         
         Root registry key elements include:
         <ul>
            <li>*@HKCR@* - Resolves to the classes root registry key.</li>
            <li>*@HKCU@* - Resolves to the current user root registry key.</li>
            <li>*@HKLM@* - Resolves to the local machine root registry key.</li>
            <li>*@HKU@* - Resolves to the all users root registry key.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Key*</p>
      </td>
      <td>
         <p>Defines a registry key in the virtual registry.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the registry key.</li>
            <li>*isolation* - The isolation level of the registry key. Possible values are *Full*, *WriteCopy*, and *Merge*.</li>
            <li>*readOnly* - If the registry key is marked as read-only. Any attempt to open the key for write access will result in access denied errors.</li>
            <li>*hide* - If the registry key is to be hidden from all key enumeration. Still allowed to access by the full path.</li>
            <li>*noSync* - If the key and its values are stored in the *local* sandbox. The local sandbox is only stored on the local machine and will not follow the session to other machines.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Value*</p>
      </td>
      <td>
         <p>Defines a registry key value in the virtual registry.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the registry value. Set to empty string for the *default* value.</li>
            <li>*isolation* - The isolation level of the registry key. Possible values are *Full* and *Hidden*.</li>
            <li>*readOnly* - If the registry value is read-only. Any attempt to write to the value will result in access denied errors.</li>
            <li>*hide* - If the registry value is hidden from enumeration. Still allowed to access the value by the full path.</li>
            <li>*type* - The type of registry value. Possible values include:
                <ul>
                    <li>*String* - A null-terminated string. Translates to *REG_SZ* in the registry.</li>
                    <li>*ExpandString* - A null-terminated string which contains environment variables to be resolved at runtime. Translates to *REG_EXPAND_SZ* in the registry.</li>
                    <li>*StringArray* - An array of null-terminated strings. Translates to *REG_MULTI_STRING* in the registry. Each string in the array is represented by a child *String* element (ex: *<String value="..." pathInformationTuples="..."/>*).</li>
                    <li>*DWORD* - A 32-bit integer value. Translates to *REG_DWORD* in the registry.</li>
                    <li>*QWORD* - A 64-bit integer value. Translates to *REG_QWORD* in the registry.</li>
                    <li>*Binary* - A binary blob value in hexidecimal string format (ex: *00AB385128*). Translates to *REG_BINARY* in the registry.</li>
                </ul>
            </li>
            <li>*value* - The registry value in string format. See above *type* for format. This is not applicable to *StringArray* types.</li>
            <li>*pathInformationTuples* - An optional value that is set for the string types if the value was normalized during the snapshot process. The three values in the tuple are:
                <ul>
                    <li>Flags for how the string value was on the snapshot machine... 1 - was all uppercase, 2 - was all lowercase, 4 - was in short file format (ex: *xxxxxx~1*). The value can be a combination of these flags (ex: *5* means all uppercase and short format).</li>
                    <li>The start index of where in the string the replacement occurs.</li>
                    <li>The length of the replacement.</li>
                </ul>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*EnvironmentVariables*</p>
      </td>
      <td>
         <p>Deprecated. See *EnvironmentVariablesEx*.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*EnvironmentVariablesEx*</p>
      </td>
      <td>
         <p>Defines virtual environment variables. Contains a collection of *VariableEx* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*VariableEx*</p>
      </td>
      <td>
         <p>Defines a virtual environment variable.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the environment variable (ie. *path*).</li>
            <li>*isolationMode* - The isolation mode for the environment variable. Possible values are *Inherit*, *Full*, and *WriteCopy*. If set to *Inherit* the value is taken from the global value defined in *EnvironmentVariableExGlobalSettings*.</li>
            <li>*value* - The value of the environment variable.</li>
            <li>*mergeMode* - The manner in which the the environment variable value is merged with the native value at runtime. Possible values are *Replace*, *Host*, *Prepend*, and *Append*.</li>
            <li>*mergeString* - The string that separates the virtual value from the native value if they are to be merged. The default is ";".</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*PortMaps*</p>
      </td>
      <td>
         <p>Defines mappings between virtual network ports and native ports. Contains a collection of *PortMap* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*PortMap*</p>
      </td>
      <td>
         <p>Defines a mappings between a virtual network port and a native port.</p>
         
         Attributes:
         <ul>
            <li>*value* - The mapping value in the format: *[to port]:[from port]/[protocol]*, where all occurrences of [to port] are mapped to [from port] for the given protocol. The protocol can be *tcp* or *udp* but can omit */[protocol]* to target both protocols.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ObjectMaps*</p>
      </td>
      <td>
         <p>Defines name mappings for various Windows objects. Contains a collection of *ObjectMap* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ObjectMap*</p>
      </td>
      <td>
         <p>Defines a name mapping for various Windows objects.</p>
         
         Attributes:
         <ul>
            <li>*value* - The mapping value in the format: *[type]://[name]:[mapping]*, where [name] and [mapping] are type specific (see table below).</li>
         </ul>
         
         Possible values:
        <table>
            <tr>
                <td>*Type*</td>
                <td>*Name*</td>
                <td>*Mapping*</td>
            </tr>
            <tr>
                <td>*pipe* - Indicates that a named pipe should be isolated from the native system.</td>
                <td>The name of the pipe that is to be isolated.</td>
                <td>Unused. Must be assigned to the value "0".</td>
            </tr>
            <tr>
                <td>*ip* - Maps requests to the specified IP address to another IP address.</td>
                <td>The IP address to map from. The name can include an optional flag to not preresolve hostnames. This is done be prefixing the name with *$$donotpreresolvehostnames$$* (ex: *ip://$$donotpreresolvehostnames$$1.1.1.1:2.2.2.2*).</td>
                <td>The IP address to map to. To deny access to the named IP, set this value to *0.0.0.0*. This value can be made identical to the IP to map to allow the IP if there are other generic mappings to deny it (ex: *ip://1.1.1.1:1.1.1.1*).</td>
            </tr>
            <tr>
                <td>*host* - Maps requests to the specified host name to another host or IP address.</td>
                <td>The host name to map from. A wildcard character is supported at the beginning (ex: <strong>*</strong> or <strong>*.google.com</strong>).</td>
                <td>The IP address or host name to map to. To deny access to the named IP/host, set this value to *0.0.0.0*. This value can be made identical to the name to map to allow the host if there are other generic mappings to deny it (ex: <strong>host://*.google.com:*.google.com</strong> if <strong>host://*:0.0.0.0</strong also exists).</td>
            </tr>
            <tr>
                <td>*window* - Indicates that a window class name should be isolated from the native system.</td>
                <td>The name of the window class to be isolated.</td>
                <td>Unused. Must be assigned to the value "0" (ex: *window://IEFrame:0* will isolate Microsoft Internet Explorer's main window from the native environment).</td>
            </tr>
        </table>
      </td>
   </tr>   
   <tr>
      <td valign="top">
         <p>*Services*</p>
      </td>
      <td>
         <p>Defines virtual services. Contains a collection of *Service* elements.</p>
      </td>
   </tr>  
   <tr>
      <td valign="top">
         <p>*Service*</p>
      </td>
      <td>
         <p>Defines a virtual service.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the service. This will be used to start the service inside the container via `sc start` command.</li>
            <li>*commandLine* - The command that is executed to start the service.</li>
            <li>*friendlyName* - The friendly name of the service.</li>
            <li>*description* - The description of the service.</li>
            <li>*keepAlive* - If the service continues to run after the container has closed.</li>
            <li>*start* - The method by which the service is started. Possible values are *AutoLoad* (started on container start), *LoadOnDemand* (started manually from inside the container), or *Disabled* (cannot be started).</li>
            <li>*type* - The type of the service. This must be set to 16 (SERVICE_WIN32_OWN_PROCESS, service started in its own process).</li>
            <li>*group* - Unused, leave empty.</li>
            <li>*errorControl* - Unused, leave empty.</li>
            <li>*objectName* - Unused, leave empty.</li>
            <li>*serviceSidType* - Unused, leave *0*.</li>
            <li>*wow64* - Unused, leave *False*.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Shortcuts*</p>
      </td>
      <td>
         <p>Defines shortcuts that will be added with desktop registration or MSI deployments. Contains a collection of root *Folder* elements.</p>
         
         Root shortcut folders include:
         <ul>
            <li>*Desktop* - Resolves the user's desktop folder (ex: *c:\users\turbouser\desktop*).</li>
            <li>*Programs Menu* - Resolves the user's startup menu programs folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\start menu\programs*).</li>
            <li>*SendTo* - Resolves the user's sendto folder (ex: *c:\users\turbouser\appdata\roaming\microsoft\windows\sendto*).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Folder*</p>
      </td>
      <td>
         <p>Defines a folder where shortcuts will reside that will be added with desktop registration or MSI deployments. Contains a collection of *Folder* and *Shortcut* elements.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the folder.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Shortcut*</p>
      </td>
      <td>
         <p>Defines a shortcut that will be added with desktop registration or MSI deployments. The shortcut must point to an existing startup file. Optionally contains an *IconResource* element.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the shortcut.</li>
            <li>*targetPath* - The full virtual path to the shortcut target. Must match the path of a defined startup file.</li>
            <li>*targetParameter* - The trigger for the referenced startup file.</li>
            <li>*arguments* - Command line arguments to the shortcut target.</li>
            <li>*showCmd* - Controls how the target is launched. Possible values are *1* (normal), *3* (maximized), or *7* (minimmized).</li>
            <li>*description* - The description of the shortcut.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*IconResource*</p>
      </td>
      <td>
         <p>The icon to use for the shortcut.</p>
         
         Attributes:
         <ul>
            <li>*data* - The icon image data in hexidecimal format (ex: *0001000000ffffffff01000000000000000c0200000049547572626f2...*). Set this in Turbo Studio.</li>
         </ul>
      </td>
   </tr>   
   <tr>
      <td valign="top">
         <p>*ProgIds*</p>
      </td>
      <td>
         <p>Defines virtual COM ProgIDs that will be added with desktop registration or MSI deployments. Contains a collection of *ProgId* elements.</p>
      </td>
   </tr> 
   <tr>
      <td valign="top">
         <p>*ProgId*</p>
      </td>
      <td>
         <p>Defines a virtual COM ProgID that will be added with desktop registration or MSI deployments. This is used for file associations. Contains a collection of *Verb* and *IconResource* elements.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the ProgID (ex: *Excel.Sheet.12*).</li>
            <li>*description* - The description of the ProgID.</li>
         </ul>
      </td>
   </tr>   
   <tr>
      <td valign="top">
         <p>*Verb*</p>
      </td>
      <td>
         <p>Defines shell verbs that can be used with associated files.</p>
         
         Attributes:
         <ul>
            <li>*name* - The name of the verb (ex: *open*).</li>
            <li>*command* - The name of the verb as it is displayed in the Windows shell. The ampersand character can be used to denote the hotkey for the command (ex: *&Open*).</li>
            <li>*target* - The full virtual path to the handler application. If empty, the behavior is inherited from the virtual registry definitions.</li>
            <li>*arguments* - The command line arguments to pass to the target handler (if defined). Use *%1* to use the path to the associated file.</li>
            <li>*default* - If the verb is the default behavior in the shell (ie. used when double clicking an associated file).</li>
         </ul>
      </td>
   </tr> 
   <tr>
      <td valign="top">
         <p>*IconResource*</p>
      </td>
      <td>
         <p>The icon to use for the file extension mapped to this ProgID. If not present then the Windows default empty document icon will be used.</p>
         
         Attributes:
         <ul>
            <li>*data* - The icon image data in hexidecimal format (ex: *0001000000ffffffff01000000000000000c0200000049547572626f2...*). Set this in Turbo Studio.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Extensions*</p>
      </td>
      <td>
         <p>Defines the file associations which will be added with desktop registration or MSI deployments. Contains a collection of *Extension* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Extension*</p>
      </td>
      <td>
         <p>Defines a file association which will be added with desktop registration or MSI deployments.</p>
         
         Attributes:
         <ul>
            <li>*name* - The file extension (ex: *.xml*).</li>
            <li>*progId* - The virtual ProgID to use to handle file operations.</li>
            <li>*mimeType* - The MIME type of the file extension (ex: *text/xml*).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*DefaultPrograms*</p>
      </td>
      <td>
         <p>Deprecated. Leave empty.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*SnapshotDirectories*</p>
      </td>
      <td>
         <p>Records the native environment where a snapshot was taken. These mappings are used at runtime to resolve paths in opaque data structure (ie. application files) that couldn't be resolved at build time (like can be done for registry key values). Contains a collection of *Directory* elements.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Directory*</p>
      </td>
      <td>
         <p>Records a mapping for root filesystem directory nodes. These are used instead of the standard mappings.</p>
         
         Attributes:
         <ul>
            <li>*rootNode* - The root folder node to be mapped.</li>
            <li>*path* - The path where the root folder node was pointing on the machine where a snapshot occurred.</li>
            <li>*enabled* - If the mapping is enabled at runtime or is just recorded for information. Enabling system folder mappings (ie. @WINDIR@ or @PROGRAMFILES@) will often break applications if the mappings are not consistent with the execution machine.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ShellExtensions*</p>
      </td>
      <td>
         <p>Defines shell extensions that will be added with desktop registration. Contains a collection of *ShellExtension* elements. For internal use only.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*ShellExtension*</p>
      </td>
      <td>
         <p>Defines a shell extension that will be added with desktop registration.</p>
         
         Attributes:
         <ul>
            <li>*dllPath* - The full virtual path to the DLL which exposes the shell extension.</li>
            <li>*IID* - The IID of the shell extension COM object.</li>
            <li>*additionalFiles* - A semi-colon seperated list of paths to additional required files.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Publishers*</p>
      </td>
      <td>
         <p>Unused. Leave empty.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*HarvestSettings*</p>
      </td>
      <td>
         <p>Deprecated. Leave empty.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p>*Id*</p>
      </td>
      <td>
         <p>A unique GUID for the configuration. </p>
         
         Attributes:
         <ul>
            <li>*value* - A GUID string (ex: *{075FB3D6-D9CB-4304-BFC4-C755268AD9CD}*).</li>
         </ul>
      </td>
   </tr>
</table>