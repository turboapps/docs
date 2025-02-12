The June 2023 update to Turbo Client includes the following improvements:

- The **turbo installi** command now installs URL handlers by default (use **\-\-no-url-handlers** to disable)
- The **turbo config \-\-image-path=\<path\>** command now supports adding write permissions using the **\-\-permission=write** flag
- The **turbo installi** command now retries creating desktop shortcuts for better compatibility with OneDrive-synced desktops
- Application sessions now display a warning dialog to users that are not part of an upcoming license reservation period
- Support for launching applications as administrator from Turbo Server
- Support for additional Turbo VM settings from Turbo Server

This update includes fixes for the following issues:

- The **turbo installi** command did not correctly install context menu shell extensions
- The **turbo commit** command failed for Internet Explorer
- The **turbo run** command failed to check if the user was logged in under certain conditions resulting in a delayed error
- The **turbo subscribe** command failed to inherit workspace settings
- The **turbo gci** command incorrectly removed installed or registered images
- Sessions from installed applications did not terminate if the user lost permissions to access the application
- **T: Drive** could become unresponsive due to certain file system storage provider errors
