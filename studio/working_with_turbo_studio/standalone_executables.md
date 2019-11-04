## Standalone Executables

A popular option for organizations that have an existing endpoint management solution like LANDesk Management Suite &reg;, Microsoft System Center, or Novell ZENworks is to deploy containerized applications as standalone executables. These executables are built on the SVM architecture and work just like a container. 

Deploying applications within containers is convenient for running different versions of applications like Internet Explorer 8 and 11 side-by-side on the same system. 

To produce an executable output, set the **Project Type** to **ISV Application** in Turbo Studio. Executables can be deployed directly to the users device or to a network share and do not have any dependency requirements.

An enterprise license for Turbo Studio is required to enable executable outputs. Contact our [sales team](mailto:sales@turbo.net) for more information.

### Command Line Options

Standalone executables have many command line options to change settings at runtime. The following is a list of available options. Note that these are case sensitive and must be specified before any command line options to the application itself.

<table>
	<tr>
		<th>Setting</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><b>/XEnv=VariableName=Value</b></td>
		<td>Specifies additional environment variables. Multiple /XEnv arguments can add additional environment variables.</td>
	</tr>
	<tr>
		<td><b>/XLayerPath=LayerPath</b></td>
		<td>Adds the given SVM into the virtual environment. Multiple /XLayerPath arguments can add additional virtual layers. Refer to 'Specify Additional SVMs for a Container' for more information.</td>
	</tr>
	<tr>
		<td><b>/XSandboxPath=SandboxPath</b></td>
		<td>Specifies the path for the application sandbox.</td>
	</tr>
	<tr>
		<td><b>/XShellEx=Command</b></td>
		<td>Specifies a shell execute command to launch from within the virtual application environment. This option overrides any startup files specified in the virtual application configuration. Only one /XShellEx argument can be specified.</td>
	</tr>
	<tr>
		<td><b>/XShellExVerb=CommandVerb</b></td>
		<td>Specifies the verb to use in conjunction with the XShellEx command. The default verb is OPEN.</td>
	</tr>
	<tr>
		<td><b>/XLogPath=LogPath</b></td>
		<td>Specifies the destination path for generated log files (only applies to executables running in diagnostic-mode). This path can include a custom file name pattern (ie. "/XLogPath=c:\logs\mylog*.log"). The output directory must exist for the logs to be written.</td>
	</tr>
	<tr>
		<td><b>/XSpawnVmExceptions=ProcessExceptions</b></td>
		<td>Accepts a semi-colon delimited list of processes add to the child process exception list.</td>
	</tr>
	<tr>
		<td><b>/XRegRoot=RegistryCacheRoot</b></td>
		<td>Specifies an override to the runtime-registry-cache portion of the sandbox.</td>
	</tr>
	<tr>
		<td><b>/XEnable=Setting</b> and <b>/XDisable=Setting</b></b></td>
		<td>Enables or disables specific process configuration options. These options include:
ChildProcAsUser
DeleteSandbox
DEPCompat
Diagnostics
DRMCompat
ExeOptimization
IndicateElevated
IndicateVirtualization
IsolateWindowClasses
NotifyProcStarts
ReadOnly
ReadShare
ShutdownProctree
SpawnComServers
SpawnVM
SuppressCollisionCheck

See [VM Settings](/docs/reference/vm-settings-and-variables#command-line-settings) for details on the available settings.
        </td>
	</tr>
	<tr>
		<td><b>/XCollisionCheck=FALSE</b></td>
		<td>Disables detection of multiple apps attempting to use the same sandbox at the same time. This should only be used to support legacy behavior.</td>
	</tr>
</table>

### Specify Additional SVMs for a Container

When you have updates or patches you can use Turbo Studio to specify additional SVMs for applications. Studio provides two mechanisms to accomplish this. Both methods support path tokens (ie. @APPDIR@) and must specify the full path to SVM dependencies.

#### Using Studio

One mechanism is to specify the SVM dependencies in Turbo Studio. 

![](/docs/studio/working_with_turbo_studio/svms1.png)

The SVMs dependency editor can be accessed by clicking on 'Settings' button, then 'Process Configuration' tab, then 'SVMs' button. 

![](/docs/studio/working_with_turbo_studio/svms2.png)

The first field is the **SVM Search Pattern** field. Here users can enter the complete path to where multiple SVMs are located using a wildcard. An example of using a wildcard in the search field is `@APPDIR@\patches\*.svm`. 

Multiple SVMs may be specified for the **SVM Search Pattern** field in a semi-colon delimited list. SVMs specified first in the list will take precedence over SVMs specified later in the list. If multiple SVMs match a search pattern through the use of the '*' wildcard, the SVMs are applied in reverse-alphabetical priority (ie items in `patch_002.svm` would have higher priority than items in `patch_001.svm`).

The second field allows required SVMs to be specified. Wildcard characters are not valid for this and a specific path must be used. If the file is not found during application launch, an error will be reported and the launch will be aborted.

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

![](/docs/studio/working_with_turbo_studio/triggers1.png)

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

![](/docs/studio/working_with_turbo_studio/triggers2.png)
