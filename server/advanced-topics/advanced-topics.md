## Advanced Topics

This section describes advanced topics you may encounter when implementing Turbo Server.

### Extending Portal request timeouts

The Portal has a global request timeout that aborts HTTP requests after a certain amount of time. In Turbo Server 21.9.3284.5 and earlier, the Portal was configured with a default 30s request timeout. Future versions of the Portal are configured with a default 120s request timoeut.

If you wish to extend this default request timeout in Turbo Server 21.9.3284.5 and earlier, you may do so manually with the following steps:

1. RDP onto your Portal server.
2. Open an administrator command prompt and run the command: `<install path>\Server.exe /XShellEx=cmd`, replacing `<install path>` with the install path of your Turbo Server.
3. In the new command prompt, run the command `notepad C:\portal\node_modules\turbo-web-core\build\http\httpHelper.js`.
4. Search for the line `options.timeout = 1000 * 30;` and replace it with your desired timeout in milliseconds. For example: `options.timeout = 1000 * 60 * 3;`.
5. Save the file, close notepad, and close the command prompts.
6. Open **Services** from the start menu and locate `Turbo Server`. Right-click it and click **Restart**.
7. Wait a few minutes for the Turbo service to restart, then load the portal website and confirm the change.

**NOTE:** This change only affects the Portal timeout and does not affect other services that impose timeouts such as the reverse proxy.

**WARNING:** This change will be lost when upgrading your Turbo Server. Please reapply the change after upgrade.

### Override Single Sign-On Authentication Method

Internal Turbo Servers users may sign in to a Portal configured to use the single sign-on authentication method by appending the **?mode=forms** URL parameter to the login page:

```
http://my-turbo-server/login?mode=forms
```

This override can be used when testing and troubleshooting the Turbo Server configuration.

### Locale Settings

Turbo Server uses the service user's language and region settings to format user-facing dates, times, and other locale-sensitive data.

To update your locale settings:

1. Login to your Turbo Server host machine as the service user.
2. Open the **Language** control panel and confirm that the language pack for your desired language is installed. To install a missing language pack, add the language using **Add a language** and then click **Options** on the newly added language.
3. Open the **Region** control panel and select your desired **Format**.
4. Restart the Turbo Server service to apply your changes.

### Change the Turbo Server Service User

The Turbo Server service user is specified during the initial Turbo Server install.

The service user can be set to a different account from the Services management console (**services.msc**). Locate the **Turbo Server** service and **Right-click > Properties**. In the **Log On** tab, enter the credential of the new account. Note that the service user requires the **Log On As a Service** right, which is automatically granted when you apply the change.

![Switch Turbo Server service user](https://hub.turbo.net/images/docs/switch_service_user.png)

After changing the service user, update the security settings of the following file to grant **Read** and **Write** permissions for the new user and remove the rights of the old user:

- C:\ProgramData\Turbo Server\Settings.xml

Update the security settings of the following folders to grant the **Write** permission for the new user and remove the rights of the old user:

- C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Temporary ASP.NET Files
- C:\ProgramData\Turbo Server\io (or the **Hub Storage Path** if set)
- C:\Program Files (x86)\Turbo Server\Sandbox (or the _Turbo Server install directory\Sandbox_ folder if using a non-default install path)

![Update settings.xml to grant permissions to new service user](https://hub.turbo.net/images/docs/add_perms_to_new_service_user.png)

The service user must also be a member of the **Performance Monitor Users** group so that it can collect and report server resource loads. For information on adding the service user to this group, see the [Performance Counters](https://hub.turbo.net/docs/server/troubleshooting/hub-server#performance-counters) documentation.

Finally restart the Turbo Server service for the changes to take effect.

### Hide System Drives on Application Servers for Cloud Launches

Administrators can hide the application server's system drives to prevent users from accessing them when launching applications using the Run in Cloud launch modes by configuring the [Drive Visibility setting in the Workspace Application Settings](https://hub.turbo.net/docs/server/administration/workspaces#workspace-applications).

Note that configuring **Drive Visibility** will prevent PC Native Applications from seeing the binaries on the native filesystem if the setting is configured to hide the drive that the application is installed on. In this case, administrators may configure the following group policy to hide (but still access) the drive icons in the File Explorer dialog: **User Configuration > Administrative Templates > Windows Components > File Explorer > Hide these specified drives in My Computer**.
