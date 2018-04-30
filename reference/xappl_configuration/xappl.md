### XAPPL Configuration

XAPPL files specify the configuration for an image or virtual application created with Turbo Studio. XAPPL files are formatted in XML, so it's easy to edit a virtual application configuration in a text editor just as you can with Turbo Studio user interface.

Here is a table that describes the purpose of each of the tags you see in XAPPL files created with Turbo Studio:

<table>
   <tr>
      <th>Element/Attribute</th>
      <th>Description</th>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>OutputLocation</strong></p>
      </td>
      <td>
         <p>Path to the folder where the virtual application executable is created. This can be a local path, a UNC path, or a mapped drive.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>OutputFile</strong></p>
      </td>
      <td>
         <p>File name of the virtual application executable.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Project-Type</strong></p>
      </td>
      <td>
         <p>Denotes whether configuration is for a virtual application (Application) or an <strong>SVM</strong> (Component).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Licensing</strong></p>
      </td>
      <td>
         <p>Contains information about the license used to build the virtual application.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Output</strong></p>
      </td>
      <td>
         <p>The <strong>DiagnosticMode</strong> attribute denotes when the application output should log diagnostic information (<strong>True</strong>) or not (<strong>False</strong>). If true, the virtual application will create diagnostic logs in the directory where it was executed from. <br class="atl-forced-newline"> The <strong>SourcePackage</strong> attribute is not used.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>MSI</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the MSI setup file:</p>
         <ul>
            <li>The <strong>outputMsiPath</strong> attribute indicates the location where the setup MSI is built.</li>
            <li>The <strong>title</strong> attribute indicates the value of the MSI title property.</li>
            <li>The <strong>subject</strong> attribute indicates the value of the MSI subject property.</li>
            <li>The <strong>keywords</strong> attribute indicates the value of the MSI keywords property.</li>
            <li>The <strong>productName</strong> attribute indicates the value of the MSI product name property.</li>
            <li>The <strong>productVersion</strong> attribute indicates the value of the MSI product version property.</li>
            <li>The <strong>manufacturer</strong> attribute indicates the value of the MSI manufacturer property.</li>
            <li>The <strong>productLanguage</strong> attribute indicates the value of the MSI product language property.</li>
            <li>The <strong>author</strong> attribute indicates the value of the MSI author property.</li>
            <li>The <strong>description</strong> attribute indicates the value of the MSI description property.</li>
            <li>The <strong>manufacturerUrl</strong> attribute indicates the value of the MSI manufacturer URL property.</li>
            <li>The <strong>autoBuild</strong> attribute denotes whether the MSI should build when the virtual application build completes successfully (<strong>True</strong>) or not (<strong>False</strong>).</li>
            <li>The <strong>isolatePerUser</strong> attribute denotes whether the MSI setup should be installed on a per-user basis (<strong>True</strong>) or installed for all users (<strong>False</strong>). When installing per-user, the install root path is Application Data. When installing for all users, the install root path is <strong>Program Files</strong>.</li>
            <li>The <strong>applicationFolder</strong> attribute indicates the subfolders into which the virtual application should be installed (<strong>Company Name\Product Name</strong>).</li>
            <li>The <strong>upgradePreviousVersion</strong> attribute denotes whether the setup should maintain the same Upgrade code when it builds (<strong>True</strong>) or change the Upgrade code for each build (<strong>False</strong>). This allows the setup to upgrade previous versions when it is installed, or to exist side by side.</li>
            <li>The <strong>productCode</strong> attribute indicates the value of MSI product code property.</li>
            <li>The <strong>upgradeCode</strong> attribute indicates the value of MSI upgrade code property.</li>
            <li>The <strong>componentId</strong> attribute indicates the value of the MSI component id property.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Packages</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the packages included in the virtual application.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Clr</strong></p>
      </td>
      <td>
         <p>The .NET Clr runtime element and all sub-elements contain settings pertaining to the configuration of the virtual .NET Framework runtime.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Direct X</strong></p>
      </td>
      <td>
         <p>The DirectX element and all sub-elements contain settings pertaining to the configuration of the virtual DirectX runtime.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Java</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the virtual java runtime.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>RunTime</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the java runtime (Java).&nbsp; <br class="atl-forced-newline"> The <strong>platform</strong> attribute indicates the platform that the java runtime is designed for (x86). <br class="atl-forced-newline"> The <strong>version</strong> attribute indicates the version of the java runtime.&nbsp;The available versions are Java 5 (1.5.0.140) and Java 6 (1.6.0.30).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Settings</strong></p>
      </td>
      <td>
         <p>The <strong>startupType</strong> attribute denotes whether to use the jar file (JAR) or class path (Class) command line parameters for java.exe to launch the application. <br class="atl-forced-newline"> The <strong>startup</strong> attribute indicates the jar file path or class name depending on the StartupType. <br class="atl-forced-newline"> The <strong>classpath</strong> attribute indicates the path to the class files of the Java runtime. <br class="atl-forced-newline"> The <strong>options</strong> attribute denotes any additional command line parameter.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Package</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the component or runtime. <br class="atl-forced-newline"> The <strong>platform</strong> attribute indicates the platforms that the component or runtime is supported on.&nbsp;The following are the only&nbsp;available values:</p>
         <ul>
            <li><strong>Any platform (Any)</strong></li>
            <li><strong>x86 platform (x86)</strong> <br class="atl-forced-newline"> The <strong>version</strong> attribute indicates the version of the component or runtime.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Virtualization Settings</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the virtual operating system.</p>
         <ul>
            <li>The <strong>compressPayload</strong> attribute controls whether the output executable will be compressed (<strong>True</strong>) or not (<strong>False</strong>).</li>
            <li>The <strong>deleteSandbox</strong> attribute will cause the sandbox to be reset automatically when the virtual application is shutdown (<strong>True</strong>).</li>
            <li>The <strong>disableXenocodeCommandLine</strong> attribute controls the ability to execute (<strong>False</strong>) any file from within the virtual filesystem.</li>
            <li>The <strong>enableDRMCompatibility</strong> attribute ensures compatibility (<strong>True</strong>) with applications protected by software formerly known as "Armadillo" and other DRM software.</li>
            <li>The <strong>enhancedDEPCompatibility</strong> attribute provides compatibility for systems with Data Execution Protection enabled (<strong>True</strong>). This setting is used primarily for virtual applications running on Windows 2003.</li>
            <li>The <strong>exeOptimization</strong> attribute will attempt to launch the startup executable with the initial virtual machine process, preventing the creation of a separate application process (<strong>True</strong>).</li>
            <li>The <strong>forceIndicateRunningElevated</strong> attribute forces the application to run as if it has elevated security privileges (<strong>True</strong>).</li>
            <li>The <strong>forceReadShareFiles</strong> attribute forces any file opened by any process within the virtual environment to do so with the READ_SHARE flag set (<strong>True</strong>).</li>
            <li>The <strong>ie6Emulation</strong> attribute denotes a special mode required for the Internet Explorer 6 template (<strong>True</strong>). For all other apps, this should be disabled (<strong>False</strong>).</li>
            <li>The <strong>isolateWindowClasses</strong> attribute is used to isolate windows classes, as registered via the <strong>Windows ::RegisterClass</strong> or <strong>::RegisterClassEx</strong> APIs.&nbsp;For example, this allows a virtualized Firefox instance to run while a non-virtualized instance is running.</li>
            <li>The <strong>launchChildProcsAsUser</strong> attribute causes all child processes to be provided with the same level of privileges as the virtual machine root process (<strong>True</strong>).</li>
            <li>The <strong>minSandboxSpaceAvail</strong> attribute allows specifying a size in MBs. If set, the virtual application will enforce at startup that the sandbox volume has at least this much space available to the user. A value of -1 disables this enforcement.</li>
            <li>The <strong>notifyProcessStarts</strong> attribute causes a notification to be sent as a debugging output string whenever a new process is started within the virtual environment (<strong>True</strong>).</li>
            <li>The <strong>readOnlyVirtualization</strong> attribute denotes whether the virtual application has the ability to modify virtual files and registry settings (<strong>False</strong>) or not (<strong>True</strong>).&nbsp;Setting this attribute to <strong>True</strong> will prevent modification to the virtual filesystem and virtual registry.</li>
            <li>The <strong>sandboxPath</strong> attribute indicates the base path of the application sandbox <strong>@APPDATALOCAL@\Spoon\Sandbox\@TITLE\@\@VERSION@</strong>. The <strong>workingDirectory</strong> attribute defines what directory the application will run in.</li>
            <li>The <strong>shutdownProcessTree</strong> attribute will cause the all child processes spawned within the virtual environment to be shutdown when the root process exits. By default, the root process is specified by setting the startup file.</li>
            <li>The <strong>subsystem</strong> attribute indicates the application output type.&nbsp;It can be inherited from the startup file (<strong>Inherit</strong>) or set explicitly to be a Windows application (<strong>GUI</strong>) or console application (<strong>Console</strong>).&nbsp;If <strong>Inherit</strong> is set, but the startup file is either not in the virtual filesystem or not an executable, then the output will be a Windows application.</li>
            <li>The <strong>suppressBranding</strong> attribute controls the branding pop-up that is displayed (<strong>False</strong>), or not displayed (<strong>True</strong>) in the lower right-hand corner during application startup.</li>
            <li>The <strong>suppressPopups</strong> attribute will prevent an error dialog popup if the virtual application encounters a fatal startup error, and will cause the application to exit silently (<strong>True</strong>).</li>
            <li>The <strong>suppressSandboxCollisionCheck</strong> attribute will enable or disable the ability to detect when multiple applications are trying to access the same sandbox at the same time. This attribute is set to "False" by default.</li>
            <li>The <strong>trimUACManifest</strong> attribute removes items from the manifest that may require elevation (<strong>True</strong>).</li>
            <li>The <strong>waitForChildOnly</strong> attribute will cause the initial virtual machine process to only wait for its child processes to exit before exiting (<strong>True</strong>). This only applies if the <strong>exeOptimization</strong> attribute is disabled. The default behavior is to wait until all processes in the sandbox exit (<strong>False</strong>).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>XLayers</strong></p>
      </td>
      <td>
         <p>Additional SVM's that will be loaded when the application starts</p>
         <ul>
            <li>The <strong>xlayerSearchPattern</strong> attribute to provide the default search pattern, similar to what would be passed to <strong>/XLayerPath</strong></li>
            <li>The <strong>RequiredXLayer</strong> sub-element specifies which SVMs are required to be loaded. Otherwise an error is reported. Further details are located in the Specify Additional SVMs for a Virtual Application section.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>NamedObjectIsolation</strong></p>
      </td>
      <td>
         <p>Allows users to isolate select objects in the application from the host machine that may use the same name. Details on how to use this feature can be found in the Enable Shared Object Isolation section.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Dns</strong></p>
      </td>
      <td>
         <p>Allows users to add explicit DNS mappings which are reflected within the virtual environment. More information on virtualized network configuration can be found in the Virtualizing IP Protocols, DNS entries, and proxy settings section. This XAPPL field no longer must be configured manually.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>WorkingDirectory</strong></p>
      </td>
      <td>
         <p>Specifies which directory the virtual application will execute from.</p>
         <ul>
            <li>The <strong>option</strong> sub-element can be set to "StartupFileDirectory", "CurrentDirectory" or "specifiedDirectory".</li>
            <li>The <strong>specifiedDirectory</strong> sub-element lists the specified path selected for the application.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>ChildProcessVirtualization</strong></p>
      </td>
      <td>
         <ul>
            <li>The <strong>spawnExternalComServers</strong> attribute controls whether the virtual application launches ComServers in the virtual environment (<strong>True</strong>) or the external environment (<strong>False</strong>).</li>
            <li>The <strong>spawnVm</strong> attribute denotes whether the spawned external applications are spawned inside the virtual environment (<strong>True</strong>) or outside the virtual environment (<strong>False</strong>).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>ChildProcessException</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the executable file (extension included) to except from the effects of the <strong>spawnVm</strong> attribute.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>CustomMetadata</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the individual custom metadata items.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>CustomMetadataItem</strong></p>
      </td>
      <td>
         <ul>
            <li>The <strong>property</strong> attribute indicates the name of the custom metadata item.</li>
            <li>The <strong>value</strong> attribute indicates the value of the custom metadata item.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StandardMetadata</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the individual standard metadata items.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StandardMetadataIte</strong></p>
      </td>
      <td>
         <p>The <strong>property</strong> attribute indicates the name of the standard metadata item.&nbsp; The following are the available standard metadata:</p>
         <ul>
            <li>Product Title (<strong>Title</strong>)</li>
            <li>Publisher (<strong>Publisher</strong>)</li>
            <li>Description (<strong>Description</strong>)</li>
            <li>Website (<strong>Website</strong>)</li>
            <li>Product Version (<strong>Version</strong>)</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>SplashImage</strong></p>
      </td>
      <td>
         <p>The <strong>path</strong> attribute indicates the source path to the splash image displayed at application startup. <br class="atl-forced-newline"> The <strong>transparency</strong> attribute indicates the color in the splash image that should be made transparent when the image is displayed (E.g. <strong>Magenta).</strong></p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StartupFiles</strong></p>
      </td>
      <td>
         <p>All sub-elements contain configuration pertaining to the individual startup files.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StartupFile</strong></p>
      </td>
      <td>
         <p>The <strong>node</strong> attribute indicates the path of the startup file. <br class="atl-forced-newline"> The <strong>tag</strong> attribute indicates the command line trigger used to specify this entry as the startup to use. <br class="atl-forced-newline"> The <strong>commandLine</strong> attribute indicates the command line arguments to pass to the startup file. <br class="atl-forced-newline"> The <strong>default</strong> attribute denotes whether this entry is executed automatically when no tag is specified (<strong>True</strong>) or not (<strong>False</strong>).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StartupShims</strong></p>
      </td>
      <td>
         <p>All sub-elements contain configuration pertaining to the individual startup shims.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>StartupShim</strong></p>
      </td>
      <td>
         <p>The startup shim is a virtualized binary that is invoked prior to the startup file.&nbsp;Startup shims are used to perform customized licensing checks or other initialization tasks.</p>
         <ul>
            <li>The <strong>shimDllPath</strong> attribute indicates the path to the virtual shim DLL implementation. This field is required.</li>
            <li>The <strong>paramOnInitialize</strong> attribute indicates a string to be passed to the shim <strong>OnInitialize</strong> function.</li>
            <li>The startup shim signature is <strong>typedef</strong> <strong>BOOL (__</strong><strong>stdcall</strong> *<strong>FnOnInititialize) LPCWSTR pwcsInitilizationToken)</strong>.&nbsp;The return value indicates whether virtual machine execution should proceed.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Layers</strong></p>
      </td>
      <td>
         <p>All sub-elements are individual virtual layers.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Layer</strong></p>
      </td>
      <td>
         <p>The <strong>Layer</strong> element and all sub-elements contain settings pertaining to the configuration of this layer of the virtual operating system.</p>
         <ul>
            <li>The <strong>name</strong> attribute indicates the name of the layer.&nbsp;The default layer (<strong>Default</strong>) is the only layer for whom the name matters.&nbsp;All other layer names are purely informational.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Condition</strong></p>
      </td>
      <td>
         <p>The <strong>variable</strong> attribute indicates the host system setting that will be evaluated.&nbsp;The operating system version (<strong>OS</strong>) is the only available option. <br class="atl-forced-newline"> The <strong>operator</strong> attribute indicates the Boolean operation that will be used to evaluate the host system.&nbsp;The available Boolean operations are:</p>
         <ul>
            <li>greater than or equal to (<strong>GreaterEqual</strong>)</li>
            <li>greater than (<strong>Greater</strong>)</li>
            <li>equal to (<strong>Equal</strong>)</li>
            <li>not equal to (<strong>NotEqual</strong>)</li>
            <li>less than (<strong>Less</strong>)</li>
            <li>less than or equal to (<strong>LessEqual</strong>) <br class="atl-forced-newline"> The <strong>value</strong> attribute indicates the value against which the host system will be evaluated, using the Boolean operation. The available values in ascending order are:&nbsp; <br class="atl-forced-newline"> Windows 2000 (<strong>Win2k</strong>) <br class="atl-forced-newline"> Windows XP (<strong>WinXP</strong>) <br class="atl-forced-newline"> Windows 2003 (<strong>Win2k3</strong>) <br class="atl-forced-newline"> Windows Vista (<strong>Vista</strong>)<br> Windows 7 (<strong>Win7</strong>)<br> Windows 8 (<strong>Win8</strong>)</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Filesystem</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the virtual filesystem.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Directory</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of this directory of the virtual filesystem.</p>
         <ul>
            <li>
               The <strong>rootType</strong> attribute indicates the root system folder that this virtual folder is mapped to on the host filesystem.&nbsp;Directory elements with the <strong>rootType</strong> attribute are always directly beneath the <strong>Filesystem</strong> element.&nbsp; The following are the available <strong>rootType</strong>values:
               <ul>
                  <li>Application Directory (<strong>Application</strong>)</li>
                  <li>Windows\System32 (<strong>System</strong>)</li>
                  <li>Windows (<strong>OS</strong>)</li>
                  <li>System Drive Root Directory (<strong>SysDrive</strong>)</li>
                  <li>Program Files\Common (<strong>AllProgramsCommon</strong>)</li>
                  <li>Program Files (<strong>AllPrograms</strong>)</li>
                  <li>Current User - Start Menu (<strong>StartMenu</strong>)</li>
                  <li>Current User - Start Menu\Programs (<strong>Programs</strong>)</li>
                  <li>Current User - Start Menu\Programs\Startup (<strong>Startup</strong>)</li>
                  <li>Current User - Application Data (<strong>AppData</strong>)</li>
                  <li>Current User - LocalSetting\Application Data (<strong>AppDataLoca</strong>l)</li>
                  <li>Current User - Desktop (<strong>Desktop</strong>)</li>
                  <li>Current User - Templates (<strong>Templates</strong>)</li>
                  <li>Current User - Favorites (<strong>Favorites</strong>)</li>
                  <li>Current User - Music (<strong>Music</strong>)</li>
                  <li>Current User - Pictures (<strong>Pictures</strong>)</li>
                  <li>Current User - My Documents (<strong>Documents</strong>)</li>
                  <li>%PROFILE%&nbsp; (<strong>Profile</strong>)</li>
                  <li>All Users - Start Menu (<strong>StartMenuCommon</strong>)</li>
                  <li>All Users - Start Menu\Programs (<strong>ProgramsCommon</strong>)</li>
                  <li>All Users - Start Menu\Programs\Startup (<strong>StartupCommon</strong>)</li>
                  <li>All Users - Application Data (<strong>AppDataCommon</strong>)</li>
                  <li>All Users - Desktop (<strong>DesktopCommon</strong>)</li>
                  <li>All Users - Templates (<strong>TemplatesCommon</strong>)</li>
                  <li>All Users - Favorites (<strong>FavoritesCommon</strong>)</li>
                  <li>All Users - Music (<strong>MusicCommon</strong>)</li>
                  <li>All Users - Pictures (<strong>PicturesCommon</strong>)</li>
                  <li>All Users - My Documents (<strong>DocumentsCommon</strong>)</li>
                  <li>%ALLUSERSPROFILE% (<strong>ProfileCommon</strong>)</li>
               </ul>
            </li>
            <li>
               The <strong>isolation</strong>attribute indicates the isolation setting of the virtual folder.&nbsp;The available values are:
               <ul>
                  <li>Full isolation (<strong>Full</strong>)</li>
                  <li>WriteCopy isolation (<strong>WriteCopy</strong>)</li>
                  <li>Merge isolation (<strong>Merge</strong>)</li>
               </ul>
            </li>
            <li>The <strong>name</strong> attribute indicates the name of the virtual directory.</li>
            <li>The <strong>hide</strong> attribute denotes whether the directory is marked as hidden (<strong>True</strong>) or visible (<strong>False</strong>).</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>File</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the file. <br class="atl-forced-newline"> The <strong>hide</strong> attribute denotes whether the file is marked as hidden (<strong>True</strong>) or visible (<strong>False</strong>). <br class="atl-forced-newline"> The <strong>source</strong> attribute indicates the source path to the file</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Registry</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the virtual registry.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Key</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of this key of the virtual filesystem.</p>
         <ul>
            <li>
               The <strong>rootType</strong> attribute indicates the root system folder that this virtual folder is mapped to on the host filesystem.&nbsp;Key elements with the <strong>rootType</strong> attribute are always directly beneath the <strong>Registry</strong> element.&nbsp;The following are the available <strong>rootType</strong>values:
               <ul>
                  <li>HKEY_CLASSES (<strong>ClassesRoot</strong>)</li>
                  <li>HKEY_CURRENT_USER (<strong>CurrentUser</strong>)</li>
                  <li>HKEY_LOCAL_MACHINE (<strong>CurrentUser</strong>)</li>
                  <li>HKEY_USERS (<strong>Users</strong>)</li>
               </ul>
            </li>
            <li>The <strong>name</strong> attribute indicates the name of the key.</li>
            <li>The <strong>namePathInformationTuples</strong> indicates that there is a path in the name or value of the registry item. There are 3 comma delimited integers for each path found in the name/value.1. Flags that indicate the state of the path (valid combinations: 0x0, 0x1, 0x2, 0x4, 0x5, 0x6) <br class="atl-forced-newline"> 0x1 - All Uppercase <br class="atl-forced-newline"> 0x2 - All Lowercase <br class="atl-forced-newline"> 0x4 - Uses Short Path Names <br class="atl-forced-newline"> 2. Start index of the path <br class="atl-forced-newline"> 3.&nbsp;Length of the path</li>
            <li>
               The <strong>isolation</strong>attribute indicates the isolation setting of the virtual folder.&nbsp;The available values are:
               <ul>
                  <li>Full isolation (<strong>Full</strong>)</li>
                  <li>Merge isolation (<strong>Merge</strong>)</li>
               </ul>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Value</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the value. <br class="atl-forced-newline"> The <strong>type</strong> attribute indicates the type of the value.&nbsp;The available values are:</p>
         <ul>
            <li>REG_SZ and REG_EXPAND_SZ (<strong>String</strong>)</li>
            <li>REG_DWORD (<strong>DWORD</strong>)</li>
            <li>REG_QWORD (<strong>QWORD</strong>)</li>
            <li>REB_BINARY (<strong>Binary</strong>)</li>
            <li>
               REG_MULTI_STRING (<strong>StringArray</strong>) <br class="atl-forced-newline"> The <strong>namePathInformationTuples</strong> indicates that there is a path in the name or value of the registry item. There are 3 comma delimited integers for each path found in the name/value. <br class="atl-forced-newline">
               <ol>
                  <li>Flags that indicate the state of the path (valid combinations: 0x0, 0x1, 0x2, 0x4, 0x5, 0x6) <br class="atl-forced-newline"> 0x1 - All Uppercase <br class="atl-forced-newline"> 0x2 - All Lowercase <br class="atl-forced-newline"> 0x4 - Uses Short Path Names</li>
                  <li>Start index of the path</li>
                  <li>Length of the path <br class="atl-forced-newline"> The <strong>value</strong> attribute indicates the value of the value.&nbsp;This is true for all types, except <strong>StringArray</strong>, which contains the String sub-element.</li>
               </ol>
            </li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Environment Variables</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the environment variable. <br class="atl-forced-newline"> The <strong>value</strong> attribute indicates the value of the environment variable.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Services</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the windows service. <br class="atl-forced-newline"> The <strong>autoStart</strong> attribute denotes whether the windows service starts when the virtual application starts (<strong>True</strong>) or not (<strong>False</strong>). <br class="atl-forced-newline"> The <strong>commandLine</strong> attribute indicates the startup command line of the windows service. <br class="atl-forced-newline"> The <strong>friendlyName</strong> attribute indicates the friendly name of the windows service. <br class="atl-forced-newline"> The <strong>description</strong> attribute indicates the description of the windows service. <br class="atl-forced-newline"> The <strong>objectName</strong> attribute indicates the account under which the windows service ran when not virtualized. <br class="atl-forced-newline"> The <strong>keepAlive</strong> attribute denotes whether the windows service should continue running after the startup application has closed (<strong>True</strong>) or not (<strong>False</strong>). <br class="atl-forced-newline"> The <strong>start</strong> attribute indicates the value of the <strong>Start</strong> <strong>DWORD</strong> value in the Windows Services registry key. <br class="atl-forced-newline"> The <strong>type</strong> attribute indicates the value of the <strong>Type</strong> <strong>DWORD</strong> value in the Windows Services registry key. <br class="atl-forced-newline"> The <strong>errorControl</strong> attribute indicates the value of the <strong>ErrorControl</strong> <strong>DWORD</strong> value in the Services registry key.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Shortcuts</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the MSI shortcuts.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Folder</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the MSI shortcuts in this folder. <br class="atl-forced-newline"> The <strong>name</strong> attribute indicates the name of the folder.&nbsp;The two top level folders represent the Desktop (<strong>Desktop</strong>) and the Programs menu on the Start menu (<strong>Programs Menu</strong>).</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Shortcut</strong></p>
      </td>
      <td>
         <p>The <strong>name</strong> attribute indicates the name of the shortcut. <br class="atl-forced-newline"> The <strong>targetPath</strong> attribute indicates the path of the StartupFile that is the target of the shortcut. <br class="atl-forced-newline"> The <strong>targetParameter</strong> attribute indicates the Trigger or Tag of the StartupFile that is the target of the shortcut. <br class="atl-forced-newline"> The <strong>arguments</strong> attribute indicates the arguments passed to the target of the shortcut at runtime. <br class="atl-forced-newline"> The <strong>showCmd</strong> attribute denotes whether the application should start in a maximized (<strong>3</strong>), minimized (<strong>7</strong>) or regular (<strong>1</strong>) window state. <br class="atl-forced-newline"> The <strong>description</strong> attribute indicates the description of the shortcut.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>IconResource</strong></p>
      </td>
      <td>
         <p>The <strong>IconResource</strong> sub-element contains an identifier of the icon that is used for the Shortcut.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>ProgIds</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the ProgId.</p>
         <ul>
            <li>The <strong>name</strong> attribute indicates the name of the ProgId.</li>
            <li>The <strong>description</strong> attribute indicates the description of the ProgId.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>IconResource</strong></p>
      </td>
      <td>
         <p>The <strong>IconResource</strong> sub-element contains an identifier of the icon that is used for the file association.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>HarvestSettings</strong></p>
      </td>
      <td>
         <p>The <strong>HarvestSettings</strong> element only appears in recipes. This section tells the configuration which files, folders, and registry keys to add or delete from the build.</p>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Extension</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the file extensions for the ProgId.</p>
         <ul>
            <li>The <strong>extension</strong> attribute indicates the file extension that is associated with the ProgId.</li>
            <li>The <strong>mimeType</strong> attribute indicates the MIME type of all files with the extension.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>DefaultPrograms</strong></p>
      </td>
      <td>
         <p>For the <strong>DefaultPrograms</strong> element, specify the following parameters:</p>
         <ul>
            <li><strong>name</strong>: Name of the application (e.g. Thunderbird, Firefox).</li>
            <li><strong>friendlyName</strong>: Friendly name (e.g. Thunderbird, Firefox).</li>
            <li><strong>description</strong>: Description (e.g. Mail Client, Web Browser).</li>
            <li><strong>clientType</strong>: Type of Default Program (e.g. Browser, Mail, StartMenuInternet). This can be found under <em>Current user root/Software/Clients</em> or <em>Local machine root/Software/Clients</em>.</li>
            <li><strong>hidden</strong>: This should be set to <em>false</em>.</li>
            <li><strong>default</strong>: This should be set to <em>true</em>. &nbsp; <br class="atl-forced-newline"> &nbsp; <br class="atl-forced-newline"> The sub-elements of the <strong>DefaultPrograms</strong> are:</li>
            <li><strong>IconResource</strong>: This is the program icon and can be copied from the ProgId section of the XAPPL.</li>
            <li><strong>data</strong>: This contains data to render the icon.</li>
            <li><strong>Extension</strong>: These are the file extensions that use this DefaulProgram (e.g. .eml, .html, .htm).</li>
            <li><strong>name</strong>: This is the extension (e.g. .eml, .html, .htm).</li>
            <li><strong>progId</strong>: This is a reference to which ProgId to use to handle this type of file extension.</li>
            <li><strong>Protocol</strong>: These are the protocols that use the DefaultProgram (e.g. mailto, http, https).</li>
            <li><strong>name</strong>: This is the name of the protocol (e.g. mailto, http, https, news).</li>
            <li><strong>progId</strong>: This is a reference to the ProgId that will handle this protocol.</li>
            <li><strong>clientType</strong>: This is the name of the client under <em>Current user root/Software/Clients</em> or <em>Local machine root/Software/Clients</em>.</li>
            <li><strong>SimpleMapi</strong>: This is specific to the mail clientType.</li>
            <li><strong>mapiDllPath</strong>: Path to the DLL to use for MAPI for this mail client.</li>
            <li><strong>mailClientPath</strong>: Path to the main exe of the application.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td valign="top">
         <p><strong>Verb</strong></p>
      </td>
      <td>
         <p>All sub-elements contain settings pertaining to the configuration of the Verb for the file extension.</p>
         <ul>
            <li>The <strong>title</strong> attribute indicates the title of the verb.</li>
            <li>The <strong>verb</strong> attribute indicates the verb value.</li>
            <li>The <strong>arguments</strong> attribute indicates the arguments passed to the target of the verb at runtime.</li>
            <li>The <strong>default</strong> attribute denotes whether this verb is the default verb (<strong>True</strong>) or not (<strong>False</strong>).</li>
         </ul>
      </td>
   </tr>
</table>