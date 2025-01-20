This update to Turbo Studio includes the following improvements and bug fixes:

- The Turbo VM is updated to version 24.4.12
- Fix incompatibility with **BeyondTrust** security software
- Fix path mapping for relative paths for **Windows Side-by-Side** assemblies
- Fix **HttpPassthrough** flag to allow **ShellExecute** of http(s) urls to access virtual filesystem and registry
- Fix repair dialog in **Microsoft Outlook 365**
- Fix **Capture** of certain registry key names in all capital letters
- Fix bootstrap process crash when using **standalone executables** as auxiliary layers
- Fix computation of **sandbox** temporary paths across multiple processes
- Fix crash in **Microsoft SQL Server** prior to version 2016
- Fix potential locale table corruption when using **DLL Injection**
- Fix inconsistency with trailing slashes for directories from **NtQueryInformationFile**
- Fix parsing of **ProgID** verb parameters that use quotation marks
- Fix **ProgID** capture in **Microsoft Office**
- Fix **Metadata** editor panel to update correctly
- Fix saving **startup file** architecture
- Fix errors caused from invalid hives defined in .reg file during **registry import**
- Fix **XStudio Merge** command to create standalone executables for **.exe** output files
- Add options to **XStudio Merge** command to control inheritance of metadata and startup files
- Add support for file renaming during **Capture**
- Add **HideElevated** runtime flag to prevent virtual processes from seeing that they are running with elevated privileges
- Remove delete option from **Debugger** log tree root node
- Allow modification of **Debugger** log normalization rules
- Add context menu items in **Debugger** log view to truncate a file from current position
- Add keyboard shortcut to delete logs in **Debugger** log view
- Exclude "@APPDATACOMMON@\Turbo" folder from **Capture**
- Exclude "Microsoft Update Health Tools" folder from **Capture**



