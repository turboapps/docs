# subscribe

The `subscribe` command is used to create a subscription to a workspace. Subscribing to a workspace automatically downloads and updates the workspace's applications. To remove the subscription, use the `unsubscribe` command.

```
Usage: subscribe <options> <workspace>...

<options> available:
      --all                   Subscribes to all available workspaces
      --all-users             Applies the configuration settings to all users
      --format=VALUE          Use the specified format for output. Supported values: json
      --no-fonts              Don't install fonts for installed applications
      --no-pull               Subscribes without pulling images
      --overwrite-shortcuts   Ovewrite existing shortcuts on the host
      --pull                  Pulls images for subscription
      --register              Registers applications after subscribing or subscription updates
      --update-interval=VALUE
      --wait-after-error      Leave session open after error
      --wait-after-exit       Leave session open after it exits
```

Subscribing to a workspace automatically downloads and updates the applications within that workspace. To add shell integrations to the desktop, the end user can run the command `turbo subscription register <subscription>`. This command is equivalent to the `installi` command for each application and can be viewed using the `installed` command. By doing this, the installed application will run with the workspace application settings. The application images and configuration settings are updated through the update task.

The subscription ensures that the install is periodically updated to the latest workspace application configuration, as well as updating the local image to the specified revision. This update is performed by the Turbo Sandbox Manager service, which runs the `subscription update --all` command every 20 minutes. If you wish to change the frequency of the update task, you can use the `turbo config --subscription-interval=<minutes>` command.

To manage the subscription, you can use the `subscription` command. To view all subscriptions, you can use the `subscriptions` command. If you want to remove a subscription, you can use the `unsubscribe` command.

## Subscribe All

When the `--all` option is specified, the device will subscribe to all available workspaces for the current user. It's important to note that if any workspaces are deleted or removed from the user's view, the corresponding subscription will also be removed.

## Subscribe All Users

When `--all-users` is specified, the subscription will be installed for all users on the machine. This command requires Administrator privileges and that the Turbo client is installed for all users. See the install options for the Turbo installer for more information on how to install for all users.


## Automatic Updates

When you subscribe to a workspace, any changes to application versions and configurations will be automatically updated. If you included the `--register` flag in the initial subscription command, installed applications will also be updated automatically.

If you wish to avoid automatic updates, you can disable subscriptions by using the `turbo config --disable=subscriptions` command. In legacy clients, you can use the `subscribe` command with the `--update-interval` set to 0. Additionally, you can use the `subscription suspend` command to disable specific subscriptions.

Please note that when a subscription is installed for all users, it does not automatically update for each user by default. To enable automatic updates, you can include a Windows logon script that executes the command `turbo subscription register <workspace>` for each user. This command will install the current state of the subscription at the time of login. It's important to ensure that the user is logged into the desired Hub server in order to successfully subscribe to the workspace.

## Register

The `--register` flag will automatically install applications after the subscription is added or updated. Applications set to auto launch will launch immediately.