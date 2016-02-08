### subscribe

The `subscribe` command is used to subscribe to a channel.  A channel is a set of one or more applications.

```
Usage: subscribe <options> <channel>

<options> available:
      --all-users            Subscribe all users on the machine. Requires Administrator privileges
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

#### Subscribe All Users
When `--all-users` is specified, the subscription will be installed for all users on the machine. This command requires Administrator privileges and that the Turbo client is installed for all users. See the install options for the Turbo installer for more information on how to install for all users.

#### Automatic Updates
Subscribing to a channel creates a Winodws task that executes a daily update of the subscription. To avoid automatic updates, the `subscription` command has a `suspend` action or the scheduled task can be disabled or modified to suit the desired update process.
