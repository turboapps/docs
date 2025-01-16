The October 2022 update to Turbo Client includes the following improvements:

- Added new **turbo export --overwrite** flag to overwrite existing images
- Updated **turbo subscription register** command to support shortcuts and file extensions. This behavior is now consistent with the **installi** command.
- Added new **turbo subscription register --offline** flag to register subscriptions without a hub connection
- Added new **turbo subscription register --allow-offline** flag to register subscriptions offline if the connection to the hub fails
- Added new **turbo installi --TURBOREPO** flag to support image path overrides
- Updated **turbo installi** command to use the standard metadata title instead of the installation name for the file extension product name.
- Installed applications no longer show the stopping session dialog on close
- Updated **turbo config --image-path** command to only configure permissions on the images and assemblies subdirectories
- Improved error handling for the **turbo push** command
- Updated **turbo installed** command JSON output to include metadata about the installed objects
- Updated **turbo gc** command to remove all sessions that have not been used in 30 days by default. A new **--forks** flag has been added to support removing only forked containers.
- Relaxed login credential host matching logic to match any server host within the domain
- Improved login credential renewal process for expired logins
- Added support for **Windows 11 Build 22621.521**
- Improved various text and error messages

This update includes fixes for the following issues:

- The **turbo installi** command could incorrectly fail with a login error under certain circumstances
- The **turbo installi --offline **command could fail to assign file associations
- The **turbo install** command failed to install containers with only **clean** or **base** images
- Installed applications could fail to launch due to malformed arguments or unresolved environmental variables under certain circumstances
- The **turbo suspend** command incorrectly reported a failure upon successful suspension
- The **turbo login --auth=integrated** command failed to login if the Hub was offline
- The **turbo images** command could show incorrect **all-users** values if local repository and** all-users **repository were set to the same path
- Running a registered shortcut from an **all-users** subscription could fail to launch
- The **turbo rmi --all-users <image>** command incorrectly removed every all-users image
- Turbo commands that require valid login credentials could fail if the credentials were within one hour of expiration
- The **T: Drive** move operation could interrupt active uploads and result in data loss under certain circumstances
- **T: Drive** startup failures could delay the application startup time under certain circumstances



