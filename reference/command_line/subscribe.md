### subscribe

The `subscribe` command is used to subscribe to a workspace, or an organization's repositories. 

```
Usage: subscribe <options> <organization | workspace>

<options> available:
      --all-users            Subscribe all users on the machine. Requires Administrator privileges
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

Subscribing to an organization will add all available repositories to the desktop by executing the `installi` command on each repository. When a workspace is specified (using the url firendly id such as `default`), the workspace applications are installed by `installi` the workspace application which includes the application configuration. This allows the installed application to run with the workspace application settings. The initial subscribe does not pull the images to the local machine cache. The image pull is done by the update task.

In addition to installing each repository, a subscription will periodically update the install to the latest workspace application configuration, and the local image to the specified revision. The update is done by registering a Windows Task that runs the `subscription update` command once a day. You can chnge the frequency of the update task using the built in Windows Task Scheduler. The task will be under the *turbo-net* folder.

Use the `subscription` command to control the subscription. To view all subscriptions use the `subscripions` command. To remove the subscription use the `unsubscribe` command. 

#### Subscribe All Users
When `--all-users` is specified, the subscription will be installed for all users on the machine. This command requires Administrator privileges and that the Turbo client is installed for all users. See the install options for the Turbo installer for more information on how to install for all users.

#### Automatic Updates
Subscribing to a channel creates a Winodws task that executes a daily update of the subscription. To avoid automatic updates, the `subscription` command has a `suspend` action or the scheduled task can be disabled or modified to suit the desired update process.
