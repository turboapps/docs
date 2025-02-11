**New and Improved**

- Added new application configuration **turbo://** protocol type
- Added new security validation dialogs for launches via **turbo://** protocol links
- Launches via **turbo://** protocol links display a security dialog for applications outside of **Turbo.net**
- Administrators can define trusted workspaces for all users in **%PROGRAMDATA%\Turbo\Containers\trusted-sources.json**.
- Added support for on-premises workspaces
- Combined client toggle settings under **turbo config --enable|--disable=[option]** command.
- Administrators can set default or override settings for the client configuration using **turbo config --as-inherit|--as-override** command.
- Added ability to disable merge isolation using **turbo config --disable=mergeisolation** command.
- Added **--working-dir|-w=[path]** flag to **turbo commit** for setting the working directory of an image.
- Added the **Java** component to the Turbo for PC installer to support systems that are not connected to the Internet.

**Bug Fixes**

- Turbo for PC fails to launch application on the local PC when a cloud container session is not synchronized to the local system.
- Turbo for PC now respects network rules specified in application settings.
- The login dialog may fail to detect when an on-premises workspace is using an SSO authentication method.
- Certain applications may crash on application exit due to a race condition.
- Applications may fail to start with an “Object reference not set to an instance of an object” error.
- A new application version is downloaded even when upgrade check is disabled on application startup.
- Running the **clean** and **base** images with incompatible isolation should display a warning message.
- The **turbo config --image-path=allusers** command may fail with invalid container storage path error.
- The **turbo-plugin.exe --app-server** command to provision application servers should detect incompatible OS versions.



