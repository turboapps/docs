### subscribe

The `subscribe` command is used to subscribe to a update channel to receive the channel's repositories and automatic updates.

```
Usage: subscribe <options> <channel>

<options> available:
      --all-users            Subscriptions for all users on this machine. Requires admin privilege.
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

#### Subscribing for all users
When `--all-users` is specified, the subscription will be installed for all users on the machine. This requires Administrator privileges.
Turbo needs to be installed for all users to use this option.

### Periodic Updates
When subscribing to a channel, a task is created in the Windows Task Scheduler to for daily updates
