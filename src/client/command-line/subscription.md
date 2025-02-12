# subscription

The `subscription` command is used to update, register, unregister, suspend, resume and print the details of a subscription. 

```
Usage: subscription <options> [action] <workspace>...
       sub <options> [action] <workspace>...

<options> available:
      --all                  Applies action to all subscriptions
      --allow-offline        Registers the subscription offline if the connection to the hub fails
      --all-users            Applies the configuration settings to all users
      --format=VALUE         Use the specified format for output. Supported values: json
      --no-fonts             Don't install fonts for installed applications
      --no-pull              Registers or updates without pulling images
      --offline              Registers the subscription without a hub connection
      --overwrite-shortcuts  Ovewrite existing shortcuts on the host
      --pull                 Pulls images when registering or updating subscription
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

The available actions are `update`, `register`, `suspend`, `resume` and `print`.

### Update a Subscription
The `update` action updates all of the images in the subscription to the latest version.  

Use the `--no-pull` option to update the subscription without pulling new image versions. This will use locally cached images without checking online for updates. Only if an image is completely missing will it be pulled from the hub.

### Register a Subscription
The `register` action registers all applications in the subscription. The applications are registered via `installi` with `--no-pull` flag, which means it will always use locally cached images without checking online for updates. Only if an image is completely missing will it be pulled from the hub. Application AD group restrictions are applied to the end user's Windows identity. An all users context subscription may be registered from a user context, which will give the user read access to the registered applications. If an application is set to auto-launch, it will launch immediately after it is installed or updated.

When registering subscriptions in offline scenarios (when the hub is unreachable):
- By default, registration will attempt to connect to the hub and fail if unsuccessful
- Using `--allow-offline` will retry the registration in offline mode if the hub connection fails
- In offline mode:
  - Registration will use locally cached images and configuration
  - All-users subscriptions will still be accessible to local users
  - Auto-registration (when enabled with `turbo config --enable=AutoRegister`) will continue to work using cached data

Note: For offline scenarios, ensure images are pulled before the hub becomes unreachable using `--pull` with the subscribe command.

Instead of registering a single subscription, you have the option to use the `--all` flag which allows you to register all available subscriptions on the device. This includes removing any subscriptions that have been deleted from the device or from the user's permissions.

To enable automatic registration and unregistration of all available subscriptions on the machine, you can configure AutoRegister by using the command `turbo config --enable=AutoRegister`. It's important to note that automatic registration is only enabled for single user accounts and not executed for all users.

The user's currently configured domain must the same as the subscription's domain otherwise the registration will fail.

### Suspend and Resume a Subscription
The `suspend` action suspends updates for the specified subscription. The `resume` command will resume updates.

### Listing Details
The `print` action shows details about the subscription.

```
   > turbo subscription print example-channel
    Subscription example-channel for the current user
    Created 08.02.2016 17:20:23, last updated never (automatic)

    Name                            Repo               Release   Layers
    ----                            ----               -------   ------
    Mozilla Firefox & Flash Latest  mozilla/firefox    44.0      adobe/flash:20.0.0.267
    Mozilla Firefox Latest          mozilla/firefox    44.0      
```
