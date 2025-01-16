The June 2022 update to Turbo Client includes the following improvements:

- Improved **T: Drive** connection management to detect connection changes
- Improved **T: Drive** to gracefully shutdown and upload files while user is logged off
- Improved **T: Drive** performance when uploading very large files
- Removed automatic shell extension registration from the **turbo subscribe** command. New **turbo subscription register** and **turbo subscribe --register** commands have been added to register shell extensions.
- Updated workspace subscriptions to download the application's components when updating the application
- Added a new subscribe **--update-interval** flag to control how often a subscription is updated
- Added a new **turbo gcl** command that removes log files that exceed a configurable number of days
- Added a new stopping session dialog when closing a Turbo application
- Warn users when mounting a file that also exists in the sandbox that changes will be lost
- Granted global read-only access to images installed in the all-users image cache and added an **All Users** column to the **turbo images** command
- Improved error message when launching a Turbo application with a startup file located in the T: Drive on a system that does not have T: Drive installed
- Updated the Turbo client installer to add a native image for the Turbo Service
- Revised naming for Turbo desktop, service, and service host processes
- Improved various text and error messages

This update includes fixes for the following issues:

- Fixed an issue where **commit** failed when using certain dependency layers
- Fixed an issue causing application launches to fail when using the Launch Configuration Service against the latest Turbo Server with anonymous authentication
- Fixed an issue where launching a subscribed application would not use a new application version if there was an existing sandbox
- Fixed an issue preventing subscription of a workspace by different users on the same desktop
- Fixed an issue where running two two subscription tasks simultaneously could result in one of the tasks hanging
- Fixed an issue in T: Drive where renaming and editing a file could result in duplicate files
- Fixed an error message when pushing a malformed image
- Fixed an exception when running Turbo commands if the Turbo installation folder contained a client version with a malformed version string
- Fixed a **turbo gc **error when attempting to remove malformed containers



