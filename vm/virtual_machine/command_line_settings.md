### Command Line Settings

The behaviour of containers and images can be modified by changing VM settings at runtime.

Effect the settings flags below using the `--enable=VALUE` or `--disable=VALUE` flags with the `turbo run` or `turbo build` command.

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
</table>

###

