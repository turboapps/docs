This update to Turbo Studio includes the following new features and improvements:

- The Turbo VM is updated to version 21.12.1626.2
- Support for 64-bit variants of Mozilla Firefox
- Improve process startup performance
- Allow items in editor panel grids to be deleted with the delete key
- Notify when a configuration backup is present after a failed save attempt
- Allow saving the Debugger workspace (open tabs and documents) between Debugger sessions
- Add keyboard shortcuts in Debugger to open session logs (**Ctrl+O**), close the current tab (**Ctrl+F4**), and refresh the view (**F5**)
- Update Debugger log DLL filters to include calls to **LdrUnloadDll** and **NtCreateFile**/**NtOpenFile** for DLL and EXE files
- Allow Debugger **Lookup Flags** and **Compare** tool windows to be resized

This update also includes fixes for the following issues:

- Fix digital signatures for stub executable files
- Fix **xappl** file associations
- **OpenWith.exe** may crash when shell executing files in a container
- Enumeration of Write Copy **HKEY_CLASSES_ROOT** registry keys can fail
- **httpUrlPassthrough** setting should disallow access to virtual registry during **ShellExecute**
- Exit code not returned when **waitForChildOnly** setting is disabled
- Intermittent **git.exe** hangs in Visual Studio 2019
- Intermittent hangs during initialization of suspended virtual processes
- Color artifacts visible in **Light** color scheme
- Error shown when adding a new value to the registry editor panel
- Incorrect default name of **Run & Merge** configuration files
- Properly environment variables in registry values during **Capture** or **Snapshot**
- Debugger log file search queries fail when the search term contains a quote
- Debugger tool windows left open when the main window is closed



