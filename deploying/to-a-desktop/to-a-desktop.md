## To a Desktop

Turbo supports deploying containers from the Turbo Hub to your desktop using the **subscribe** and **installi** features. Add the **latest** version of an application to enable auto-patching of that application. This ensures you get the latest updates to the selected applications as they are released.

### Virtual desktop infrastructure (VDI) / Windows Virtual Desktop (WVD)

The `turbo subscribe` command allows administrators to register desktops to workspaces. A desktop registered to a workspace provides end users access to all workspace applications, application updates, and Active Directory based permissions.

- Add an [API key](https://hub.turbo.net/docs/server/administration/hub#managing-api-keys) for a workspace.
- Give the API key [Read Only Admin Permissions](https://hub.turbo.net/docs/server/administration/workspaces#workspace-users) to the workspace.
- Configure applications in the workspace with the appropriate permissions under [Application Settings](https://hub.turbo.net/docs/server/administration/workspaces#workspace-applications).
- Install Turbo Client for all users on the VDI base image.
- [Login](https://hub.turbo.net/docs/reference/command-line/login) with the API key which will be used to update the workspace and grant end users access `turbo login --all-users --api-key=<apiKey>`.
- [Subscribe](https://hub.turbo.net/docs/reference/command-line/subscribe) to the workspace: `turbo subscribe --all-users <workspace>`. The workspace applications will be cached to the local all-users repository location. Application updates and settings are updated periodically.
- Configure a login script to [register the workspace subscription](https://hub.turbo.net/docs/reference/command-line/subscription) to the user `turbo subscription register <subscription>`.

### Single Repository Shell Registration

Containers can also be integrated with the Windows shell. The `install` or `installi` command will create Start Menu shortcuts, file associations, and shell extensions in the shell for the image so that it behaves similar to an installed application.

```
# Install the VLC container to the shell
> turbo installi --name=vlc videolan/vlc --register-extensions
```

Configuring shortcuts and file associations for an image is done in Turbo Studio. See the [reference](https://hub.turbo.net/docs/studio/working-with-turbo-studio/desktop) section for more details.

### Checking Installed Applications

The methods below can be used to identify which applications are installed on a target system for troubleshooting, validation, and inventory purposes.

#### Using Turbo Client

To inspect which applications are registered to the current user via the Turbo Client's **installi** or **subscribe** commands, use the **turbo installed** command.

```
> turbo installed
ID        Name                      Images                   Subscription
--        ----                      ------                   ------------
85f0eac8  Notepad++ 64-bit          notepadplusplus-x64
570e342d  Wget                      wget
962eda4f  Greenshot                 greenshot/greenshot      apps
13eaa322  HJSplit                   microsoft/office-x64     apps
```

Append the **--all-users** flag to check which applications are installed system-wide and/or the **--format=json** flag to output in JSON format that can be easily handled in a script.

#### Parsing the Registry

Turbo-registered applications generate **Uninstall** entries, so they will appear in the **Add or Remove Programs** section of the **Control Panel** and can be listed by parsing the Registry.

The following PowerShell example snippet filters the Uninstall entries in the Local Machine hive for publishers matching **Turbo.net** to list all applications registered to the system.

```
> (Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where-Object {$_.Publisher -match 'Turbo.net'}).DisplayName

7-Zip 64-bit
VLC Media Player
Notepad++ 64-bit
```

To list applications registered for an individual user, check the Current User registry hive.
