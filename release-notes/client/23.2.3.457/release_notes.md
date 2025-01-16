The February 2023 update to Turbo Client includes the following improvements:

- Updated to use .NET Framework 4.8
- Improved launch startup times by automatically enabling the executable cache
- New **turbo subscribe --overwrite-shortcuts** flag overwrites any existing shortcuts on the desktop when subscribing applications
- Deprecated **turbo installi --pin-client-version** flag and replaced with the **TURBOCLIENTBIN** environment variable for discovering Turbo binaries when launching from shortcuts
- Error messages from Turbo Drive are now available to the end user
- Removed implied **/k** flag in **turbo run** if the startup file defaulted to **cmd.exe**
- Cleaned up orphaned Turbo Drive mounted drives on Turbo Service startup
- Removed unnecessary binary configuration log entries when launching applications
- Improved diagnostic logging for user permissions during **turbo subscribe**
- Renamed **Turbo-Launcher.exe** to **TurboLauncher.exe**

This update includes fixes for the following issues:

- Turbo Client installation failed when installing on end user devices without .NET
- The **turbo commit** command failed on containers with startup scripts
- Applications could uninstall unexpectedly while registering a new subscription
- A starting session dialog appeared for installed applications during application launch
- Relaunching an application immediately after closing could fail in some instances
- The **turbo installi** did not properly handle collisions with existing shortcuts
- The **turbo subscribe** failed to remove application shortcuts when user access is revoked
- The **turbo run** command failed to pass in triggers when launching in an existing session



