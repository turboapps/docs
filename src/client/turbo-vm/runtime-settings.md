# Runtime Settings

The behaviour of containers and images can be modified by changing VM settings at runtime.

For Turbo Client launches via the `turbo run`, `new`, `try`, or `build` commands, use the `--enable=VALUE` or `--disable=VALUE` flags with the settings below.

For standalone executables, use the `/XEnable=VALUE` and `/XDisable=VALUE` flags.

## Examples

Turbo Client launches use the `--enable` or `--disable` flag to enable or disable a setting.
```
turbo run --enable=IsolateWindowsClasses nodejs cmd
```

For client launches, multiple settings can be specified by using a comma-delimited list.
```
turbo run --enable=UseDllInjection,ChromiumSupport chrome
```

Standalone executables use the `/XEnable` and `/XDisable` flags.
```
PackagedApp.exe /XEnable=UseDllInjection /XEnable=ChromiumSupport /XDisable=SpawnComServers
```

## Runtime Settings List

Altering VM settings for a container will override the settings of the base image(s).

| Flag | Default | Persisted to Images | Behavior |
|------|---------|-------------------|-----------|
| **BootstrapWait** | Disabled | No | Forces the bootstrap process to remain alive even if otherwise would be terminated after spawning startup files. Useful if maintaining the process tree hierachy is required. |
| **ChromiumSupport** | Disabled | Yes | Enables support for the Chromium sandbox (used in Google Chrome, Microsoft Edge, etc). |
| **DEPCompat** | Disabled | Yes | Enables compatibility for systems with Data Execution Protection (DEP) enabled. Enable this setting for containerized applications running on Windows 2003. |
| **DRMCompat** | Disabled | Yes | Enables additional compatibility with common DRM systems such as Armadillo. |
| **FaultExecutables** | Disabled | Yes | Forces all executable files to be faulted into the application container. |
| **HonorWow6464Access** | Enabled | Yes | Grants registry access to 32-bit applications snapshotted and running on 64-bit operating systems. |
| **IndicateElevated** | Disabled | Yes | Forces an application to run as if it has elevated security privileges even if the application does not. Enabling this setting will also eliminate UAC security prompts for elevation and subsequent application crashes. |
| **IsolateWindowsClasses** | Enabled | Yes | Prevents a containerized process from viewing window classes that are registered by external processes. You can use this to prevent interaction between containerized and non-containerized versions of the same program when the application checks for existing class registrations. |
| **MergeStartupDir** | Disabled | Yes | If executing a shell operation, instead of setting isolation level to Merge for the startup file only, set it for its parent folder and all subfolders except well-known root folders. |
| **PeriodicRegFlush** | Disabled | No | Enables a container's registry to be periodically flushed to disk storage. |
| **ReadOnly** | Disabled | Yes | Any attempts to write to a file or registry value will result in an access denied error code. |
| **ReadShare** | Disabled | Yes | Forces any files opened within the container to open with the `READ_SHARE` flag. Enabling this setting may help resolve compatibility issues caused by sharing violations. |
| **ShutdownProcTree** | Disabled | Yes | Forces all child processes in the container to shutdown when the root process exits. |
| **SpawnComServers** | Enabled | Yes | Forces any COM servers to be isolated from the host device. By default, COM servers are created outside the virtual environment to allow COM communication between containerized processes and native applications. |
| **SpawnVM** | Enabled | Yes | Forces all child processes of a container to be launched inside the container with access to the virtual environment. |
| **SuppressPopups** | Enabled | Yes | Suppresses any error popup dialogs that the virtual environment generates during application runtime. |
| **UseDllInjection** | Disabled | No | Launches container processes using DLL injection rather than stub-executables. This can be used to mitigate security false positives or eliminate other maintaince caused by stub-executables. If 64-bit processes are being spawned in the container then must use a 64-bit bootstrap executable. |

## Standalone Executable Commandline Options

Standalone executables have several additional settings that can be customized on the command line.

- **/XCollisionCheck**=false - Disables the sandbox collision check.
- **/XDeleteSandbox**=[path] - Deletes the sandbox rooted at the specified path.
- **/XDisable**=[setting] - Disables the specified VM setting.
- **/XEnable**=[setting] - Enables the specified VM setting.
- **/XEntry**=[path] - Specifies the path to the entry SVM.
- **/XLayerPath**=[path] - Specified the path to an additional SVM to be layered into the virtual environment.
- **/XLogPath**=[path] - Specifies the path where logs are to be stored. By default they are created in the same directory as the virtual .exe.  The directory must exist before the application is executed or else the logs will not be written.
- **/XRegRoot**=[path] - Specifies the path where the registry sandbox is stored (ex: "@HKCU@\Software\TurboSandboxes"). Default is "HKCU\Software\Spoon\SandboxCache".
- **/XSandboxPath**=[path] - Specifies the path where the filesystem sandbox is to be stored. Default is defined in the entry SVM settings.
- **/XShellEx**=[path] - Specifies a path to a file which is shell executed on startup. This is used to override the startup file behavior that is built into the entry SVM. Path can use tokenized paths (ex: "@SYSTEM@\cmd.exe").
- **/XShellExVerb**=[verb] - Specifies the shell execute verb to use. Default is "open".
- **/XSpawnVmExceptions**=[exceptions] - Specifies a list of processes that are execptions to the SpawnVm setting. Processes are to include the extension and are semi-colon delimited (ex: "/XSpawnVmExceptions=regedit.exe;notepad.exe"). Must be accompanied by an explicit declaration of SpawnVm with either /XEnable or /XDisable or the exceptions will not be honored (to avoid ambiguity about meaning when there are layers with conflicting SpawnVm settings).
