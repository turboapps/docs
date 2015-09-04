### SpoonReg

SpoonReg is a tool that provides a command-line interface for deploying virtual applications and managing the virtual desktop environment. Users and administrators can use SpoonReg to register virtual applications for a single user or, in the case of administrators, a group of users or devices. SpoonReg can be used to deploy and manage virtual applications and layers built using Turbo Virtual Application Studio. 

After virtualizing an application with Turbo Virtual Application Studio, you can make the Start Menu icons, shortcuts, and file associations available on a user's desktop. SpoonReg enables you to register Turbo virtual applications in the shell, creating associations that generally are created during a standard installation process. Unlike an installation, registration and un-registration are performed instantaneously.

SpoonReg also enables you to create, reset, and remove application sandboxes: virtual environment "bubbles" where virtualized applications reside. Sandbox management provides control over application linking and intercommunication.

Spoon Server users and administrators can use SpoonReg to register applications to the desktop. For specialized deployment scenarios, contact your Turbo representative to learn how to obtain your own version of the SpoonReg.exe utility.

#### Command-Line Syntax

The following table lists the different naming conventions used with SpoonReg:
<table>
	<tr>
		<th>Parameter</th>
		<th>Description</th>
	</tr>
	<tr>
		<th>AppSpec</th>
		<td>Path (relative or fully-qualified) to a virtual executable or layer built with Turbo Virtual Application Studio</td>
	</tr>
	<tr>
		<th>SandboxSpec</th>
		<td>Name or path of a virtual sandbox</td>
	</tr>
</table>

#### Registering a Virtual Application

To register an application, use the following command:

```
SpoonReg.exe AppSpec
```

This command creates all Start Menu items, Desktop shortcuts and file associations used with the virtual application executable. By default, registration creates a local cached copy of the virtual application executable and uses the local profile as the sandbox location.

Note: The sandbox location specified during the virtual application build is ignored when registering applications using the SpoonReg tool.

#### Advanced Registration Options

Command-line parameters control caching behavior and sandbox where the virtual application should be registered:

```
SpoonReg.exe [Options] AppSpec[@SandboxSpec]
```

<table>
	<tr>
		<th>Parameter</th>
		<th>Behavior</th>
	</tr>
	<tr>
		<th>/nocache</th>
		<td>The virtual application executable will not be copied to a client machine. All shortcuts and file associations point to the full path as given by AppSpec.</td>
	</tr>
	<tr>
		<th>/id {00000000-0000-0000-0000-000000000000}</th>
		<td>Specify the internal guid used to uniquely identify the application.  There are no published uses for this value today.</td>
	</tr>
	<tr>
		<th>SandboxSpec</th>
		<td>Name and path to an existing sandbox. If this parameter is specified and a sandbox with that name exists, the application will register into that sandbox.</td>
	</tr>
</table>

#### Updating Registration Settings

Application registration settings can be changed by re-executing the registration command with the desired options:

```
SpoonReg.exe [Option] AppSpec[@SandboxSpec]
```

<table>
	<tr>
		<th>Parameter</th>
		<th>Behavior</th>
	</tr>
	<tr>
		<th>/nocache</th>
		<td>The virtual application executable will not be copied to a client machine. All shortcuts and file associations point to the full path as given by AppSpec.</td>
	</tr>
	<tr>
		<th>/cache</th>
		<td>Enable caching of the specified application (reverses the /nocache setting)</td>
	</tr>
</table>

#### Un-registering a Virtual Application

Un-registering a virtual application reverses the registration process, removing the virtual application, Start Menu icons, shortcuts, and file associations.

To un-register a virtual application, use the following command:

```
SpoonReg.exe /unregister AppSpec[@SandboxSpec]
```

You can also un-register all applications with the single command:

```
SpoonReg.exe /unregisterall
```