# Standalone Executables

A popular option for organizations that have an existing endpoint management solution like LANDesk Management Suite &reg;, Microsoft System Center, or Novell ZENworks is to deploy containerized applications as standalone executables. These executables are built on the SVM architecture and work just like a container.

Deploying applications within containers is convenient for running different versions of applications like Internet Explorer 8 and 11 side-by-side on the same system.

To produce an executable output, set the **Project Type** to **ISV Application** in Turbo Studio. Executables can be deployed directly to the users device or to a network share and do not have any dependency requirements.

An enterprise license for Turbo Studio is required to enable executable outputs. Contact our [sales team](mailto:sales@turbo.net) for more information.

### Command Line Options

Standalone executables have many command line options to change settings at runtime. The following is a list of available options. Note that these are case sensitive and must be specified before any command line options to the application itself.

- **/XEnv=VariableName=Value** specifies additional environment variables. Multiple /XEnv arguments can add additional environment variables.
- **/XLayerPath=c:\path\to\image.svm** adds the given SVM into the virtual environment. Multiple /XLayerPath arguments can add additional virtual layers. Refer to 'Specify Additional SVMs for a Container' for more information.
- **/XSandboxPath=SandboxPath** specifies the path for the application sandbox.
- **/XShellEx=Command** specifies a shell execute command to launch from within the virtual application environment. This option overrides any startup files specified in the virtual application configuration. Only one /XShellEx argument can be specified.
- **/XShellExVerb=CommandVerb** specifies the verb to use in conjunction with the **/XShellEx** command. The default verb is **OPEN**.
- **/XLogPath=LogPath** specifies the destination path for generated log files (only applies to executables running in diagnostic-mode). This path can include a custom file name pattern (ex. `/XLogPath=c:\logs\mylog*.log`). The output directory must exist for the logs to be written.
- **/XSpawnVmExceptions=ProcessExceptions** specifies a semi-colon delimited list of processes to add to the child process exception list.
- **/XRegRoot=c:\path\to\RegistryCacheRoot** specifies an override to the runtime-registry-cache portion of the sandbox.
- **/XEnable=Setting** and **/XDisable=Setting** enables or disables specific process configuration options. These options include:
  - BootstrapWait
  - ChildProcAsUser
  - DeleteSandbox
  - DEPCompat
  - Diagnostics
  - DRMCompat
  - ExeOptimization
  - IndicateElevated
  - IndicateVirtualization
  - IsolateWindowClasses
  - NotifyProcStarts
  - ReadOnly
  - ReadShare
  - ShutdownProctree
  - SpawnComServers
  - SpawnVM
  - SuppressCollisionCheck
  - UseDllInjection

See [VM Settings](/reference/turbo-vm/virtual-machine/runtime-settings) for details on the available settings.

- **/XCollisionCheck=FALSE** disables detection of multiple apps attempting to use the same sandbox at the same time. This should only be used to support legacy behavior.

### Deploying Patch Layers

When you have updates or patches that must be deployed, Turbo Studio can be used to specify additional image layers (SVMs) to load dynamically at runtime. Turbo Studio provides two mechanisms to accomplish this. Both methods support path tokens (ie. @APPDIR@) and must specify the full path to the image dependencies.

#### Using Studio

One mechanism is to specify the SVM dependencies in Turbo Studio.

![Turbo Studio Patches](/images/patches.png)

The patch dependency editor can be accessed by going to the **Layers** panel and then clicking the **Patches...** button.

![Turbo Studio Patches Dialog](/images/patchesdlg.png)

The **SVM Search Pattern** field specifies the complete path to where patch image layers may be located. This can be a path directly to a specific SVM file or can be a wildcard pattern to dynamically discover SVM files to load. An example of using a wildcard in the search field is `@APPDIR@\patches\*.svm`. This search pattern will load any .SVM file found in the "patches" directory where the virtual executable is located. Care must be taken to avoid loading arbitrary .SVM files which happen to reside in the same location.

Multiple search pattern paths may be specified by seperating with a semi-colon. SVM files specified first in the list will take precedence over SVM files specified later in the list. If multiple SVMs match a search pattern through the use of the "\*" wildcard, the SVM files are applied in reverse-alphabetical priority (ex: items in `patch_002.svm` would have higher priority than items in `patch_001.svm`).

The **Required SVM Name** list specifies which of the SVM files specified in the search pattern are required to execute the container. Wildcard characters are not valid for this and a specific path must be used. If the file is not found during application launch, an error will be reported and the launch will be aborted.

#### Using Command Line

Another mechanism is by using the `/XLayerPath=` command line option. This parameter takes a path to additional SVMs to load. This can be useful for dynamically creating container environments depending on other user settings. These runtime settings augment any which are built into the SVM.

An example of a specified SVM path using full path:

```
# look for 'patches.svm' in the same directory as 'virtual-app.exe'
> virtual-app.exe /XLayerPath=@APPDIR@\patches.svm

# look for 'patches.svm' in a specific location on the local machine
> virtual-app.exe /XLayerPath=c:\path\to\patches.svm

# look for 'patches.svm' on a unc share
> virtual-app.exe /XLayerPath=\\server\dir\patches.svm
```

An example of specifying SVMs from multiple locations:

```
> virtual-app.exe /XLayerPath=@APPDIR@\patches.svm /XLayerPath=@APPDIR@\officepatches.svm
```

An example using a path with wildcard:

```
> virtual-app.exe /XLayerPath=c:\path\to\patches\*.svm
```

This performs a wildcard match finding any files that match the pattern, such as 'c:\path\to\patches\patch_001.svm'.

<b>Note:</b> SVMs that are discovered by wildcard are applied in reverse-alphabetical priority. For example, items in 'patch_002.svm' have higher priority than items in 'patch_001.svm'.

### Startup File Triggers

A container package can define several startup files. These can all be activated on launch or they can be configured to only be launched given a specified <b>trigger</b>. This is useful for suite applications (like Microsoft Office) where most of the container package is shared.

In Turbo Studio, the startup file triggers are managed in the 'Startup Files' dialog.

![Turbo Studio Startup File Triggers](/images/triggers.png)

In this example, an application package is defined with three startup files; word, excel, and access. Any startup files that don't have a specific trigger or have <b>Auto Start</b> enabled will be launched by default. Any startup file that has a trigger (but not 'auto start') will not be launched unless the trigger is specified. Multiple startup files can have the same trigger to enable grouped launching.

To launch a startup file by its trigger, specify its trigger as the first parameter to the container .exe:

```
# to launch word
> virtual-app.exe WORD

# to launch access
> virtual-app.exe ACCESS

# to launch excel
> virtual-app.exe EXCEL

# to launch excel as the default
> virtual-app.exe
```

To create an easy-to-access shortcut for a trigger, right-click on your packaged executable and select **Create shortcut**. Then, right-click on the newly created shortcut and append the trigger to the **Target** field. Change the shortcut name and icon to differentiate the application entry point that will be launched when the user runs the shortcut.

![Studio startup file shortcut](/images/triggers2.png)
