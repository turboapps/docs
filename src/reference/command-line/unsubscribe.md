# unsubscribe

The `unsubscribe` command unsubscribes a specified subscription or all subscriptions. It uninstalls shortcuts and removes the update task.

```
Usage: unsubscribe <options> <subscription>

<options> available:
  -a, --all                  Unsubscribes all subscriptions on the local machine
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

If the `--all-users` option was used during, the `unsubscribe` command will unsubscribe all users. In this case, the command needs to be run as an Administrator. 

To unsubscribe from all subscriptions, use the `--all` option.