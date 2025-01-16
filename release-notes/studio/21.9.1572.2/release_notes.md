This update to Turbo Studio includes the following new features and improvements:

- The Turbo VM is updated to version 21.9.1597
- **New!** Light color scheme is now available
- **New!** **Factor Configuration** tool automatically splits large configurations into launcher and data configurations
- **New! Apply Configuration** debugger tool copies a configuration's contents to the local host for easier troubleshooting
- Registry symbolic links are now captured
- Add support for v4 **.reg** file import
- Allow removal of layer conditions
- Communicate performance consequences of certain virtual machine settings
- Improve default process name and path exclusions for Capture and Snapshot
- Write version information to **XStudio** trace logs
- Add context menu item on filesystem and registry tree view to copy a node's path
- Add context menu item on captured process list to see paths that came from a process

This update also includes fixes for the following issues:

- Incompatibility with latest Turbo for Windows client (21.10.2402)
- Missing calls to **DllMain** for SxS DLLs when multiple versions are statically linked
- **NtDeleteValueKey** not returning error codes when appropriate
- **ShutdownProcessTree** virtual machine setting for non-standalone executable launches
- **ChromiumSupport** virtual machine setting not maintained when an image is exported
- Error in generated layers during **Platform Merge**
- Error when attempting to export a configuration to a location that already contains a **Files** directory
- Studio crash when snapshotting a registry key with a name that illegally contains a newline character
- Startup file parameters could be missing necessary spaces after capture or snapshot
- Options menu renders incorrectly on systems with a right-handed stylus enabled
- Debugger session log view renders incorrectly when multiple logs exist for the same process or when processes are started suspended
- Debugger trace resolver tool fails when inputs start with whitespace
- Debugger default text comparison tool now uses **TurboPlay** for progress dialog during image download
- Debugger crashes if the default text editor failed to open a file
- Debugger **Open Containing Folder** tab context menu option for session log view
- Debugger fails when attempting to open logs already opened for write access by another process
- Debugger does not restore default options when removing text editor or text comparison fields
- Debugger blocks Explorer window when dragging a log folder into a tab



