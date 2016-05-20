### uninstalli

The `uninstalli` removes the Start menu shortcuts for the image and disables the update process for the images registered with `installi` or `subscribe` commands.

```
Usage: uninstalli <options> <image>

<options> available:
  -a, --all                  Uninstalls all images on the local machine
      --all-users            Subscriptions for all users on this machine. Requires admin privilege.
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

#### Uninstalling an Image that is Part of a Subscription
An image removed by `uninstalli` will not be updated or reinstalled during the subscription update process. However, it can be reinstalled by running the `subscribe` command again.