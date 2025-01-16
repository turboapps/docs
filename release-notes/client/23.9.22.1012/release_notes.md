The September 2023 update to Turbo Client includes the following improvements:

- New **Turbo Sandbox Manager** service now handles workspace subscription updates, replacing the Windows Task Scheduler. This allows nearly realtime updates to endpoints as configuration changes. Please use **turbo uninstalli** or otherwise remove the old Windows Task Scheduler entries.
- New **turbo subscribe --all **command flag automatically adds and removes all subscriptions available to the user
- Improved syncing speed for the following commands: **turbo pull**, **turbo push, turbo save **and **turbo continue**
- Improved **turbo installi** command speed
- Added the **--all** flag to **turbo unsubscribe **and **turbo subscription **commands to apply actions to all subscribed workspaces
- Added the **--all **flag to the **turbo config **command to print all settings
- The **turbo pull **command now checks if there is enough disk space before attempting to pull the image
- The **--enable **and **--disable **flags now support comma delimited values
- The **turbo installi** command now uses a unique application identifier to prevent unintended configuration changes

This update includes fixes for the following issues:

- The **turbo subscribe --register **command could create incorrect shortcuts when the images were not available locally
- The **turbo subscribe --pull **command failed when the assembly folder was read-only
- The **turbo config --image-path=<path> **failed when **<path> **was a drive root
- The **turbo new **command failed when using an image more than once
- The **turbo images **command failed to show images for all users correctly
- The **turbo pull --force **command could fail if the image already existed
- Shortcuts created by the **turbo installi **command and subscribed workspaces overwrote each other
- Applications with the same name but in different workspaces overwrote each other when subscribed
- Installed fonts did not load after system restart
- Disabling **T: Drive** caused excessive CPU usage
- Uninstalling Turbo Client failed to remove some installed files and settings
- Launching a file from** T: Drive** occasionally failed on the application server



