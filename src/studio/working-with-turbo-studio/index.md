# Getting Started

Using Turbo Studio enables you to configure the filesystem and registry of a container, embed external runtimes and components, take application snapshots, and create Turbo Virtual Machine (SVM) or executable files. The primary interface consists of a ribbon bar along the top and several panes accessed by buttons on the left.

![Turbo Studio](/images/main.png)

## Menu Bar

- The **File** menu enables container configurations to be created, opened, and saved. Turbo Studio configuration settings like the license certificate, proxy settings, troubleshooting options, etc can also be found here.
- The **Home** ribbon bar provides access to common Turbo Studio features. Details below.
- The **Advanced** ribbon bar provides access to advanced Turbo Studio features. Details below.

### Options

- **License settings** button is to set the turbo.net account or license certificate used for licensing purposes.
- **Proxy settings** button is to configure network proxy settings.
- **Play sound on build completion** sets whether an audible chime is played to notify the user that the build is complete. This can be useful for long builds that are running in the background. The default is enabled.
- **Enable capture diagnostic logging** sets whether exhaustive diagnostic logs are collected during a system capture or snapshot. These can be useful in troubleshooting why a capture or snapshot failed to collect some information. The default is disabled.
- **Copy added files to the configuration folder** sets whether files that are added to a configuration are sourced from their current location or copied into the configuration's "Files" folder. Sourcing from their location can be useful if adding files from a network share or from system folders where the files may change between builds. However, if the configuration is built from a different location or by a different user, Studio may not have access to the files. To make a configuration portable, enable this setting so that all files necessary to build are in the same location. The default is disabled.
- **Show virtual filesystem drives** sets whether virtual drives (from 'A:\' to 'Z:\') are shown. This allows configuration of files on non-system drives.
- **Internet Explorer snapshot compatibility mode** sets whether special configuration settings should be used when taking a snapshot of Microsoft Internet Explorer. The default is disabled.
- **Use hardware acceleration to optimize rendering** sets whether Turbo Studio is rendered using hardware acceleration. This will increase the rendering performance but in some cases this may result in rendering defects. The default is enabled.
- **Use dark color scheme** sets wether Turbo Studio uses a dark or light color scheme. The default is dark color scheme.

## Home Ribbon Bar

### Capture

- **Start Capture** button is to start a real-time capture of your application installation. This is the recommended method of creating container configurations. The feature is only available on Windows 10+ and Windows Server 2016+ and does not support applications that are required to reboot the machine during the installation process.

### Snapshot

- **Capture Before** button is to capture the machine state before you install your application for a snapshot.
- **Capture and Diff** button is to capture the machine state after you install your application for a snapshot.

For more information on the snapshot process, see **Snapshot** documentation.

### Build

- **Build** button is to build your container image output.
- **Build and Run** button is to build your container image output and then execute it for testing purposes.
- **Run and Merge** button builds your container image and then executes it within the Turbo Client Runtime environment. Any changes made while inside the container environment will be added back to the configuration after the application is shutdown. This can be used to quickly set defaults in your container image.

### Startup

- **Startup File** button shows the **Startup File** dialog where paths to applications can be set to be executed when the container starts.

### Output

- **Output File** field is the name of the file that is created when your container image configuration is built. The **Browse...** button allows this field to be set.
- **Project Type** dropdown allows you to set the type of output to generate. The following values are possible:

  - **Layer (SVM)** is a bare Turbo container image file that can be pushed to Turbo.net Hub, used in Turbo Server, imported into the Turbo.net Client Runtime environment, or used as a dependency in another project.
  - **Standalone/ISV Application (EXE)** is a standalone executable file with no dependence on the Turbo.net Client Runtime or Turbo.net Hub. This output type requires an Enterprise or ISV license for Turbo Studio.
  - **Portable Application (EXE)** is a packaged executable file which contains the Turbo.net Client Runtime components and integrates with the Turbo.net Hub or an on-premise Turbo Server.

  At runtime, you may see different behavior between Standalone and Portable applications. This is because they use a different set of default runtime settings which can change how the application behaves.

  - The default isolation settings will be different. This will change how the application can interact with the software on the native machine. Standalone executables will have the isolation settings exactly as you see it in the xappl and in Turbo Studio. Since Portal applications are built to run on the Turbo.net Client Runtime, its isolation settings will be a combination of the image configuration and the isolation mode which can be dynamically assigned at runtime. The default mode is **full isolation** which will override merge or writecopy isolation settings in the image configuration. You can change the isolation mode for a Portable application with the **--isolate** parameter. Setting the isolation mode to **merge** will defer isolation settings to those assigned in the image configuration. There is no way to change the base isolation mode in Standalone applications.
  - The default VM settings flags are also different between the two application types. Standalone executables will only have those that are defined in the image configuration. Portable application will additionally contain these settings: ExeOptimization, SpawnComServers, IsolateWindowClasses, SuppressPopups, ForceWriteCopyIsolation, MergePathEnvVars, MergeVmSettings, DumpStdStreams, InheritFolderMaps, and ForceEnvironmentVariablesWriteCopyIsolation. See [xappl reference](/client/turbo-vm/xml-configuration) for more information on these flags.

### Publish

- [Publish to Turbo Server](/studio/working-with-turbo-studio/publishing.html#publish-to-turbo-server) button allows an output container image to be pushed directly to the Turbo.net Hub or a Turbo Server instance.
- [Publish to Local Repository](/studio/working-with-turbo-studio/publishing.html#publish-to-local-turbo-repository) button allows an output container image to be pushed to the local Turbo.net Client Runtime repository.

## Advanced Ribbon Bar

### Tools

- **Platform Merge** button allows a configuration to be quickly created which merges different configurations that were built for specific platforms (ex: Windows 7, Window 10, etc). The merged configuration is optimized by putting files and registry keys which are shared across platforms into a shared layer.
- **Architecture Merge** button allows a configuration to be quickly created which merged different configurations that were built for different platform architectures (ex: x86, x64).
- **Debugger** button opens the Turbo Studio Debugger tool.
- **Factor Configuration** button splits a standalone executable configuration into two configurations, a launcher configuration and a data configuration. The launcher configuration only contains metadata and settings while the data configuration contains all the file and registry references. This is useful for large applications which generate large executable files (.exe) in order to mitigate performance consequence of Windows scanning the .exe on launch.

### Import

- **Import Configuration** button allows an application package to be imported from a file (.ini, .msi, .axt, .appv), the turbo.net hub, or the local image repository. For more information, see [Import Configuration](/studio/working-with-turbo-studio/import-configuration).
- **Import Registry File** button allows a registry file (.reg) to be imported into the current layer of the configuration. The registry file can be generated by exporting a key from the Windows Registry Editor (regedit).

## Side Navigation

- The layers dropdown list shows all the layers that are defined in the configuration. **Edit...** to create, remove, modify the order in which they are applied, and define conditions on layers.
- The **Filesystem** pane displays the application virtual filesystem and enables addition and removal of virtual files and directories.
- The **Registry** pane displays the application virtual registry and enables addition and removal of virtual registry keys and data values.
- The **Settings** pane enables configuration of container metadata, startup image, startup/shutdown shims, and process configuration options.
- The **Layers** pane enables configuration of external container components. This is for use with the **Standalone Executable** project type. Layers which are to be used with the Turbo Client or Turbo Server should define dependencies using those platforms.
- The **Desktop** pane enables configuration of the MSI setup package, shortcuts, and other shell integration options.
- The **Licensing** pane enables configuration of application expiration options.
- The **Security** panel enables configuration of application security options.
- The **Network** pane enables you to configure container proxy and DNS settings.

**Note:** Turbo Studio users are responsible for any third-party licensing compliance for redistributable components included using virtualization.

## Filesystem

Turbo Studio enables you to embed a _virtual filesystem_ into your executable. Embedded files are accessible by your Turbo-processed application as if they were present in the actual filesystem. Virtual files are isolated from the host device. Virtual files do not require security privileges on the host device regardless of whether the virtual files reside in a privileged directory. Because virtual files are embedded in the application executable, shared DLLs do not interfere with those installed by other applications on the host device.

In the event of a conflict between a file in the virtual filesystem and a file present on the host device, the file in the virtual filesystem takes precedence.

**Note:** When running a container on Windows 7, the **All Users Directory\Application Data** and **All Users Directory** root folders will map to the same folder at runtime. To prevent one setting from overriding another, verify that the isolation settings for these folders are the same.

### Isolation Modes

Folders may be containerized in **Full**, **Merge**, **Write Copy**, or **Hide** mode.

- **Full**: Full mode is used when the directory is required to be completely isolated from the host device. Only files in the virtual filesystem are visible to the application even if a corresponding directory exists on the host device. Any writes to files are redirected to the sandbox data area.
- **Merge**: Merge mode is used when the directory is required to have some level of interaction with the host device. Files will be visible from both the virtual filesystem and the host device. Any writes to files which are new or already exist on the host device will pass through and be written to the host device. Any writes to files that are in the virtual filesystem will be written to the sandbox data area.
- **Write Copy**: Write Copy mode is used when the directory is required to have visibility to files on the host device but cannot change them. Files will be visible from both the virtual filesystem and the host device. Any writes to files are redirected to the sandbox data area.
- **Hide**: Hide mode is used when a directory on the host device could interfere with the application's ability to run properly. The application will receive a File Not Found error code whenever an attempt is made to read from or write to files in the directory even if the files exist on the host device.

**Tip**: To apply selected isolation modes to all subfolders, right-click on the folder, choose Isolation, select the checkbox for **Apply to Subfolders**, then select **OK**.

Files may be containerized in **Full**, **Hide**, or **Defaulted** mode.

- **Full**: Full mode is used when the file should be fully isolated from any native version of the file. All write operations to the file will be stored in the sandbox. The file contents will be sourced from the sandbox if present or from the configuration directly if not yet present in the sandbox.
- **Hide**: Hide mode is used when a file should be marked as hidden. The file still acts like a Full isolation file, but it will not be included in a normal directory listing.
- **Defaulted**: Defaulted mode is used when a file should always be read from and written to the host device. If the file does not exist on the host device, it will be copied to the host device from the configuration. This mode completely bypasses the sandbox data area. Files set to this isolation mode are incompatible with Full isolation directories.

### File Attributes

- **Hidden**: Files and folders can be hidden from shell browse dialogs and other applications. This is used to prevent internal components and data files from being displayed to the user. The hidden setting will also prevent the VM from faulting the file into the sandbox. If an API call requires the file to exist in the sandbox and the file is hidden, the call will fail. To hide a file or folder, select the checkbox in the **Hidden** column adjacent to the desired file or folder.
  **Note**: The **Hidden Flag** is NOT the same as the **Hide** isolation mode. Enabling the **Hidden Flag** prevents a file or folder from displaying in browse dialogs or from directory enumeration APIs; it does not prevent the application (and potentially the end-user) from accessing the folder or file contents by direct binding. To prevent the file or folder from being found by the application, enable **Hide** isolation mode.
- **No Sync**: This feature only applies to containers that are delivered and managed by Turbo Virtual Desktop Server. By default, files in the virtual filesystem can be synchronized to a user's Turbo account. This enables the application state to be maintained across different devices that are Turbo enabled. If there are folders in the virtual filesystem that should not be synchronized and remain only on the local device, select the checkbox in the **No Sync** column next to the desired file or folder. This setting is managed on a folder level and applies to all files within that folder.
- **Read Only**: Flagging files and folders as read-only prevents the application from modifying the file or folder contents. To make a file or folder read-only, select the checkbox in the **Read Only** column next to the desired file or folder.
- **No Upgrade**: By default, files in the virtual filesystem can be upgraded with patches (refer to "Updating Registration Settings" in the **Register containers in the Windows Shell** section for more information). If there are files in the virtual filesystem that should not be upgraded, such as user data files, select the checkbox in the **No Upgrade** column next to the desired file or folder.
- **Notes**: For files that are marked as **Hidden** and **Read Only**, the NtLockFile call will return success without having to fault the file in the sandbox.

## Registry

Turbo Studio enables you to embed a virtual registry into your executable. Embedded registry keys are accessible by your Turbo-processed application as if they were present in the actual registry. Virtual registry keys are isolated from the host device. Virtual registry keys do not require security privileges on the host device regardless of whether the virtual files reside in a privileged directory. Because virtual registry entries are embedded in the application executable, other applications are unable to disrupt application execution by inadvertent modification of registry entries.

The **Classes** root, **Current User** root, **Local Machine** root, and **Users** root folders correspond to the **HKEY_CLASSES_ROOT**, **HKEY_CURRENT_USER**, **HKEY_LOCAL_MACHINE**, and **HKEY_USERS** keys on the host machine.

Registry string values can include well-known variables such as **@WINDIR@**, **@SYSWOW64@**, **@PROGRAMFILESX86@** and **@PROGRAMFILES@**.

In the event of a conflict between a key or value in the virtual registry and data present on the host device registry, information in the virtual registry takes precedence.

### Isolation Modes

Keys may be containerized in **Full**, **Merge**, **Write Copy**, or **Hide** mode.

- **Full**: Full mode is used when the key is required to be completely isolated from the host device. Only values in the virtual registry are visible to the application even if a corresponding key exists on the host device. Any writes to values are redirected to the sandbox data area.
- **Merge**: Merge mode is used when the key is required to have some level of interaction with the host device. Values will be visible from both the virtual registry and the host device. Any writes to values which are new or already exist on the host device will pass through and be written to the host device. Any writes to values that are in the virtual registry will be written to the sandbox data area.
- **Write Copy**: Write Copy mode is used when the key is required to have visibility to values on the host device but cannot change them. Values will be visible from both the virtual registry and the host device. Any writes to values are redirected to the sandbox data area.
- **Hide**: Hide mode is used when a key on the host device could interfere with the application's ability to run properly. The application will receive a Key Not Found error code whenever an attempt is made to read from or write to values in the key even if the values exist on the host device.

  **Tip**: To apply selected isolation modes to all subkeys, right-click on the key, choose **Isolation**, select the checkbox for **Apply to Subkeys**, then **OK**.

### Key Attributes

- **No Sync**: This feature only applies to containers that are delivered and managed by Turbo Virtual Desktop Server. By default, keys and values in the virtual registry can be synchronized to a user's Turbo account. This enables the application state to be maintained across different devices that are Turbo enabled. If there are keys in the virtual registry that should not be synchronized and remain only on the local device, select the checkbox in the **No Sync** column next to the desired key. This setting is managed on a key level and applies to all values within that folder.
