### SpoonReg

SpoonReg is a tool that provides a command-line interface for deploying containers and managing the virtual desktop environment. Users and administrators can use SpoonReg to register containers for a single user or, in the case of administrators, a group of users or devices. SpoonReg can be used to deploy and manage containers and layers built using Turbo Studio. 

After containerizing an application with Turbo Studio, you can make the Start Menu icons, shortcuts, and file associations available on a user's desktop. SpoonReg enables you to register Turbo containers in the shell, creating associations that generally are created during a standard installation process. Unlike an installation, registration and un-registration are performed instantaneously.

SpoonReg also enables you to create, reset, and remove application sandboxes: virtual environment "bubbles" where containerized applications reside. Sandbox management provides control over application linking and intercommunication.

Turbo Server users and administrators can use SpoonReg to register applications to the desktop. For specialized deployment scenarios, contact your Turbo representative to learn how to obtain your own version of the SpoonReg.exe utility.

#### Command-Line Syntax

The following table lists the different naming conventions used with SpoonReg:
<table>
	<tr>
		<th>Parameter</th>
		<th>Description</th>
	</tr>
	<tr>
		<th>AppSpec</th>
		<td>Path (relative or fully-qualified) to a virtual executable or layer built with Turbo Studio</td>
	</tr>
	<tr>
		<th>SandboxSpec</th>
		<td>Name or path of a virtual sandbox</td>
	</tr>
</table>

#### Registering a container

To register an application, use the following command:

```
SpoonReg.exe AppSpec
```

This command creates all Start Menu items, Desktop shortcuts and file associations used with the container executable. By default, registration creates a local cached copy of the container executable and uses the local profile as the sandbox location.

Note: The sandbox location specified during the container build is ignored when registering applications using the SpoonReg tool.

#### Advanced Registration Options

Command-line parameters control caching behavior and sandbox where the container should be registered:

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
		<td>The container executable will not be copied to a client machine. All shortcuts and file associations point to the full path as given by AppSpec.</td>
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
		<td>The container executable will not be copied to a client machine. All shortcuts and file associations point to the full path as given by AppSpec.</td>
	</tr>
	<tr>
		<th>/cache</th>
		<td>Enable caching of the specified application (reverses the /nocache setting)</td>
	</tr>
</table>

#### Un-registering a Container

Un-registering a container reverses the registration process, removing the container, Start Menu icons, shortcuts, and file associations.

To un-register a container, use the following command:

```
SpoonReg.exe /unregister AppSpec[@SandboxSpec]
```

You can also un-register all applications with the single command:

```
SpoonReg.exe /unregisterall
```