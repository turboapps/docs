The April 2023 update to Turbo Client includes the following improvements:

- The **turbo installi** command now installs virtual fonts to improve launch performance
- The **turbo precache** more accurately detects executable files to pre-cache to improve launch performance
- The **turbo precache** honors files which are marked for precache in an image

This update includes fixes for the following issues:

- The **turbo gci** failed under certain conditions
- The **turbo subscribe** command failed to inherit workspace isolation settings
- The **turbo diff** command failed if certain registry keys paths were modified
- The** turbo subscribe --pull** command failed if a workspace application was set to inherit isolation
- **T: Drive **failed to mount if the same user in a different Windows session had an existing T: Drive mount
- The default permissions for **c:\ProgramData\turbo** allowed write access to **Users** group



