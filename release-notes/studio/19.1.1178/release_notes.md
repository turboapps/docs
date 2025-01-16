This release of Turbo Studio includes the following new features and updates:

- Required update for Windows 10 Insider Preview 18305
- VM engine updates to 18.12.1378
- Fix the XStudio command-line tool to support network connections over TLS 1.2 for downloaded linked components and runtimes.
- Fix uninstall entry for a Turbo-packaged MSI to display the application icon.
- Fix IP Restrictions panel to show a scrollbar when the number of entries overflow the Studio window.
- Fix exporting a configuration from an image where references to @SYSWOW64@ may be dropped if the path contains a resource ID.
- Fix exporting a configuration from an image where the privatize flag is dropped.
- Fix running the 64-bit version of PowerShell. Previously attempting to start a 64-bit PowerShell instance resulted in start of the 32-bit version.
- Fix process hang during startup in rare conditions.
- Fix process crash during application startup when SentinelOne security software is present.
- Fix DeleteSandbox setting failing to completely remove all files on exit.
- Fix WriteCopy registry isolation when running native installation of Office 365 in virtual environment.
- Add ExtendedAppLockerCompatibility flag that disables AppLocker DLL rules that are incompatible with virtualization.
- Add IsolateDDE flag to isolate DDE messages coming from outside the container.
- Change default target architecture for configurations from x86 to x64.
- Improve shutdown processing during ExitProcess calls.



