### uninstalli

The `uninstalli` removes images from the start menu for the specified image.

```
Usage: uninstalli <options> <image>

<options> available:
  -a, --all                  Uninstalls all images on the local machine
      --all-users            Subscriptions for all users on this machine. Requires admin privilege.
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

#### Uninstalling a Subscription's Image
A image removed by `uninstalli` will not be updated and reinstalled by a subscription. 
It can be reinstalled with the `subscribe` command.