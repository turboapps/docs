### unsubscribe

The `unsubscribe` command unsubscribes the specified channel. It uninstalls the shortcuts and removes the update task.

```
Usage: unsubscribe <options> <channel>

<options> available:
  -a, --all                  Unsubscribes all subscriptions on the local machine
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

The `unsubscribe` command will unsubscribe all users if the `subscribe` command specified `--all-users`. In this case, the command would need to be run as an Administrator. 