**New and Improved**

- Added --no-auto-update to installer to disable auto-updates to the latest version
- Added --offline flag for installi command so it can be executed offline
- Added ability for install commands to add ProgIDs if defined in container image but not bound to a file association (ex: for protcol handlers)
- Added new flags for install/installi command to control how shortcuts and file associations are registered
- Added ability for Turbo Launcher to write trace logs to file
- Added support for latest Turbo Hub Server
- Removed java dependency for internal tools

**Bug Fixes**

- Sandbox manager process may restart when redirector failed to get new rules
- Login errors to SSO providers not shown
- Users logging in for the first time to an SSO provider were not automatically assigned to the correct workspace
- Installi command used the wrong image when computing the default name
- Uninstall command failed if multiple containers existed with the same name
- Install command failed to use the correct startup file in shortcuts
- Login to Turbo Hub Server configured for anonymous access failed
- Visual artifact on login form of Turbo Launcher after install



