The July 2020 update to Turbo Client includes the following new features:

- Multiple monitor support for Windows Native remote applications.
- Allow reconnecting to existing sessions when running remote applications.
- Allow remote applications to display Windows Logon screen messages.
- Allow access to the user's profile folder when running cloud appications with Merge **User Isolation** to provide direct HTML5 file upload and download access to user folders.

This update includes fixes for the following issues:

- Corrected behavior of **--offline** flag when using **installi** and **run** commands.
- Allow data synchronization when exiting command prompt applications that return non-zero (failure) exit codes.
- DLL and EXE cache settings not properly applied when running applications from Turbo Portal.
- File and registry settings for transient components should take precedence over the primary image.
- Improve application license restriction user experience when the license restriction is triggered from HTML5.
- Switching domains may not work properly after installing images.
- Improve security defaults for local machine device keys.

### Note

The component layering as specified by the Turbo Server Portal was incorrectly ordered in previous version.

Administrators should reverse the ordering of any application components that depend on a specific component ordering.

