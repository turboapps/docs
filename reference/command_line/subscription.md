## subscription

The `subscription` command is used to update, suspend, resume and print the details of a subscription. 

```
Usage: subscription <options> [action] <name>
       sub <options> [action] <name>

<options> available:
      --format=VALUE         Use the specified format for output. Supported values: json
      --no-pull              Update the subscription without pulling images
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

The available actions are `update`, `suspend`, `resume` and `print`.

### Update a Subscription
The `update` action updates all of the images in the subscription to the latest version.  

Use the `--no-pull` option to update the subscription without pulling new image versions, instead the images will be streamed on demand.

### Suspend and Resume a Subscription
The `suspend` action suspends updates for the specified subscription. The `resume` command will resume updates.

### Listing Details
The `print` action shows details about the subscription.

```
   > turbo subscription print example-channel
    Subscription example-channel for the current user
    Created 08.02.2016 17:20:23, last updated never (automatic)
    
    Name                            Repo             Status     Release   Layers
    ----                            ----             ------     -------   ------
    Mozilla Firefox & Flash Latest  mozilla/firefox  Installed  44.0      adobe/flash:20.0.0.267
    Mozilla Firefox Latest          mozilla/firefox  Installed  44.0      
```
