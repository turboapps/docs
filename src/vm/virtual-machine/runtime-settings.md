## Runtime Settings

The behaviour of containers and images can be modified by changing VM settings at runtime.

Effect the settings below using the `--enable=VALUE` or `--disable=VALUE` flags with the `turbo run` or `turbo build` command. For standalone executables, use the `/XEnable=VALUE` and `/XDisable=VALUE` flags.

    # Example
    turbo run --enable=IsolateWindowsClasses nodejs cmd

Altering VM settings for a container will override the settings of the base image(s).

<table>
      <tr>
         <th data-column="0">
            <div><p>Flag</p></div>
         </th>
         <th data-column="1">
            <div><p>Default</p></div>
         </th>
         <th data-column="2">
            <div><p>Persisted to Images</p></div>
         </th>
         <th data-column="3">
            <div><p>Behavior</p></div>
         </th>
      </tr>
      <tr>
         <td><p><strong>BootstrapWait</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>No</p></td>
         <td><p>Forces the bootstrap process to remain alive even if otherwise would be terminated after spawning startup files. Useful if maintaining the process tree hierachy is required.</p></td>
      </tr>
      <tr>
         <td><p><strong>ChromiumSupport</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Enables support for the Chromium sandbox (used in Google Chrome, Microsoft Edge, etc).</p></td>
      </tr>
      <tr>
         <td><p><strong>DEPCompat</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Enables compatibility for systems with Data Execution Protection (DEP) enabled. Enable this setting for containerized applications running on Windows 2003.</p></td>
      </tr>
      <tr>
         <td><p><strong>DRMCompat</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Enables additional compatibility with common DRM systems such as Armadillo.</p></td>
      </tr>
      <tr>
         <td><p><strong>FaultExecutables</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces all executable files to be faulted into the application container.</p></td>
      </tr>
      <tr>
         <td><p><strong>HonorWow6464Access</strong></p></td>
         <td><p>Enabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Grants registry access to 32-bit applications snapshotted and running on 64-bit operating systems.</p></td>
      </tr>
      <tr>
         <td><p><strong>IndicateElevated</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces an application to run as if it has elevated security privileges even if the application does not. Enabling this setting will also eliminate UAC security prompts for elevation and subsequent application crashes.</p></td>
      </tr>
      <tr>
         <td><p><strong>IsolateWindowsClasses</strong></p></td>
         <td><p>Enabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Prevents a containerized process from viewing window classes that are registered by external processes. You can use this to prevent interaction between containerized and non-containerized versions of the same program when the application checks for existing class registrations.</p></td>
      </tr>
      <tr>
         <td><p><strong>MergeStartupDir</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>If executing a shell operation, instead of setting isolation level to Merge for the startup file only, set it for its parent folder and all subfolders except well-known root folders.</p></td>
      </tr>
      <tr>
         <td><p><strong>PeriodicRegFlush</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>No</p></td>
         <td><p>Enables a container's registry to be periodically flushed to disk storage.</p></td>
      </tr>
      <tr>
         <td><p><strong>ReadOnly</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Any attempts to write to a file or registry value will result in an access denied error code.</p></td>
      </tr>
      <tr>
         <td><p><strong>ReadShare</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces any files opened within the container to open with the `READ_SHARE` flag. Enabling this setting may help resolve compatibility issues caused by sharing violations.</p></td>
      </tr>
      <tr>
         <td><p><strong>ShutdownProcTree</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces all child processes in the container to shutdown when the root process exits.</p></td>
      </tr>
      <tr>
         <td><p><strong>SpawnComServers</strong></p></td>
         <td><p>Enabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces any COM servers to be isolated from the host device. By default, COM servers are created outside the virtual environment to allow COM communication between containerized processes and native applications.</p></td>
      </tr>
      <tr>
         <td><p><strong>SpawnVM</strong></p></td>
         <td><p>Enabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Forces all child processes of a container to be launched inside the container with access to the virtual environment.</p></td>
      </tr>
      <tr>
         <td><p><strong>SuppressPopups</strong></p></td>
         <td><p>Enabled</p></td>
         <td><p>Yes</p></td>
         <td><p>Suppresses any error popup dialogs that the virtual environment generates during application runtime.</p></td>
      </tr>
      <tr>
         <td><p><strong>UseDllInjection</strong></p></td>
         <td><p>Disabled</p></td>
         <td><p>No</p></td>
         <td><p>Launches container processes using DLL injection rather than stub-executables. This can be used to mitigate security false positives or eliminate other maintaince caused by stub-executables. If 64-bit processes are being spawned in the container then must use a 64-bit bootstrap executable.</p></td>
      </tr>
</table>

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