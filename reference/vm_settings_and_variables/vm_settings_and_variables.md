## VM Settings and Variables

### Command-line Settings

The behaviour of containers and images can be modified by changing VM settings at runtime.

Effect the settings flags below using the `--enable=VALUE` or `--disable=VALUE` flags with the `turbo run` or `turbo build` command.

    # Example
    turbo run --enable=IsolateWindowsClasses node cmd

Altering VM settings for a container will override the settings of the base image(s).

|| **Flag** || **Default** || **Persisted to Images** || **Behavior** ||
|| **DEPCompat** || Disabled || Yes || Enables compatibility for systems with Data Execution Protection (DEP) enabled. Enable this setting for containerized applications running on Windows 2003. ||
|| **DRMCompat** || Disabled || Yes || Enables additional compatibility with common DRM systems such as Armadillo. ||
|| **FaultExecutables** || Disabled || Yes || Forces all executable files to be faulted into the application container. ||
|| **HonorWow6464Access** || Enabled || Yes || Grants registry access to 32-bit applications snapshotted and running on 64-bit operating systems. ||
|| **IndicateElevated** || Disabled || Yes || Forces an application to run as if it has elevated security privileges even if the application does not. Enabling this setting will also eliminate UAC security prompts for elevation and subsequent application crashes. ||
|| **IsolateWindowsClasses** || Enabled || Yes || Prevents a containerized process from viewing window classes that are registered by external processes. You can use this to prevent interaction between containerized and non-containerized versions of the same program when the application checks for existing class registrations. ||
|| **MergeStartupDir** || Disabled || Yes || If executing a shell operation, instead of setting isolation level to Merge for the startup file only, set it for its parent folder and all subfolders except well-known root folders. ||
|| **PeriodicRegFlush** || Disabled || No || Enables a container's registry to be periodically flushed to disk storage. ||
|| **ReadOnly** || Disabled || Yes || Any attempts to write to a file or registry value will result in an access denied error code. ||
|| **ReadShare** || Disabled || Yes || Forces any files opened within the container to open with the `READ_SHARE` flag. Enabling this setting may help resolve compatibility issues caused by sharing violations. ||
|| **ShutdownProcTree** || Disabled || Yes || Forces all child processes in the container to shutdown when the root process exits. ||
|| **SpawnComServers** || Enabled || Yes || Forces any COM servers to be isolated from the host device. By default, COM servers are created outside the virtual environment to allow COM communication between containerized processes and native applications. ||
|| **SpawnVM** || Enabled || Yes || Forces all child processes of a container to be launched inside the container with access to the virtual environment. ||
|| **SuppressPopups** || Enabled || Yes || Suppresses any error popup dialogs that the virtual environment generates during application runtime. ||

### Variables

The Turbo engine remaps well-known root folders, such as My Documents and Program Files, based on the host operating system at runtime. This ensures that My Documents folder will be mapped to \User\USER NAME\Documents when running on recent versions of Microsoft Windows or \Documents and Settings\USER NAME\My Documents for older editions of Microsoft Windows.

These variables may also be used in Turbo Scripts and as part of command-line arguments when building images or starting Turbo containers.

|| **Variable** || **Description** ||
|| **@APPDIR@** ||  (Application Directory): Folder where the virtual application executable resides. ||
|| **@WINDIR@** ||  (Windows): The operating system installation location root as in c:\windows. ||
|| **@SYSDRIVE@** ||  (System Drive): The root folder of the drive containing the operating system installation as in c:\. ||
|| **@PROGRAMFILES@** ||  (Program Files): The Program Files folder. ||
|| **@PROGRAMFILESX86@** ||  (Program Files (x86)): The Program Files folder for 32 bit applications on a 64 bit platform. ||
|| **@PROGRAMFILESCOMMON@** ||  (Program Files\Common): The Program Files\Common Files folder. ||
|| **@PROGRAMFILESCOMMONX86@** ||  (Program Files (x86)\Common): The Program Files\Common Files folder for 32 bit applications on a 64 bit platform. ||
|| **@SYSTEM@** ||  (System Drive\Windows\System32): The Windows System32 folder. ||
|| **@SYSWOW64@** ||  (Windows\SysWOW64): The Windows folder that manages compatibility with 32 bit applications on a 64 bit platform. ||
|| **@APPDATALOCAL@** ||  (Current User Directory\Local Application Data): The folder that serves as a common repository for application-specific data used by the current, non-roaming user. ||
|| **@APPDATA@** ||  (Current User Directory\Application Data): The folder that serves as a common repository for application-specific data for the current roaming user. ||
|| **@STARTUP@** ||  (Current User Directory\Start Menu\Programs\Startup): The folder containing the current user's startup items. ||
|| **@PROGRAMS@** ||  (Current User Directory\Start Menu\Programs): The folder containing the user's program groups. ||
|| **@STARTMENU@** ||  (Current User Directory\Start Menu): The folder containing the user's Start Menu contents. ||
|| **@DESKTOP@** ||  (Current User Directory\Desktop): The current user's Desktop folder. ||
|| **@TEMPLATES@** ||  (Current User Directory\Templates): The folder that serves as a common repository for the current user's document templates. ||
|| **@FAVORITES@** ||  (Current User Directory\Favorites): The current user's Favorites folder. ||
|| **@DOCUMENTS@** ||  (Current User Directory\My Documents): The current user's My Documents folder. ||
|| **@MUSIC@** ||  (Current User Directory\My Music): The current user's My Music folder. ||
|| **@PICTURES@** ||  (Current User Directory\My Pictures): The current user's My Pictures folder. ||
|| **@PROFILE@** ||  (Current User Directory): The folder that stores the current user's profile data. ||
|| **@APPDATACOMMON@** ||  (All Users Directory\Application Data): The folder that serves as a common repository for application-specific data shared by all users. ||
|| **@STARTUPCOMMON@** ||  (All Users Directory\Start Menu\Programs\Startup): The folder containing startup items for all users. ||
|| **@PROGRAMSCOMMON@** ||  (All Users Directory\Start Menu\Programs): The folder containing components shared across applications. ||
|| **@STARTMENUCOMMON@** ||  (All Users Directory\Start Menu): The folder containing the Start Menu contents for all users. ||
|| **@DESKTOPCOMMON@** ||  (All Users Directory\Desktop): The shared Desktop folder. ||
|| **@TEMPLATESCOMMON@** ||  (All Users Directory\Templates): The folder that serves as a common repository for shared document templates. ||
|| **@FAVORITESCOMMON@** ||  (All Users Directory\Favorites): The shared Favorites folder. ||
|| **@DOCUMENTSCOMMON@** ||  (All Users Directory\Documents): The shared Documents folder. ||
|| **@MUSICCOMMON@** ||  (All Users Directory\Music): The shared Music folder. ||
|| **@PICTURESCOMMON@** ||  (All Users Directory\Pictures): The shared Pictures folder. ||
|| **@PROFILECOMMON@** ||  (All Users Directory): The folder that stores shared profile data. ||