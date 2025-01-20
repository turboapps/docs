This update to Turbo Studio includes the following improvements and bug fixes:

- The Turbo VM is updated to version 23.4.3
- Add **DisableFontPreload** VM setting to improve launch speeds of containers with many fonts
- Improve performance of heap allocations
- Improve performance of write-copy registry operations
- Improve handling of large log files in the Debugger
- Allow **Turbo for PC Client** to pre-cache all executable files regardless of file extension
- Fix for **Chromium** 112+ sandbox (affecting **Chrome**, **Edge**, **PowerBI**, etc)
- Fix intermittent hang during application shutdown
- Fix enumeration of **Merge** isolated registry keys that don't exist natively
- Fix enumeration of **OneDrive** mapped profile directories
- Fix hang when enabling diagnostics for applications that use synchronous named pipes
- Fix application of legacy resource memory protection policy
- Fix 64-bit **Microsoft Office 2019+**
- Fix incorrect working directory when launching an existing container
- Fix exception in Debugger **Apply Configuration** command when unable to install a service
- Fix long filename error in Debugger **Apply Configuration** command
- Fix for build error when manifest file container unexpected element namespaces
- Fix for column resizing in **Startup File** dialog
- Fix for error when loading configurations for standalone executables that don't have an output path assigned
- Fix file removal can orphan associated startup files
- Fix for using temp directory for large intermediate build files
- Fix for not showing that an applied license is invalid
- Fix for error when importing registry files that contain unknown value types



