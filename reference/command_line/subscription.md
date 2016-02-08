### subscription

The `subscription` command prints details, updates, suspends and resumes subscriptions to a channel. 

```
Usage: subscription <options> [action] <name>
       sub <options> [action] <name>

<options> available:
      --format=VALUE         Use the specified format for output. Supported values: json
      --no-pull              Updates subscription without pulling images
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

The actions are `print`, `update`, `suspend` and `resume`.

#### Listing Details
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

#### Update a Subscription
The `update` action updates a subscription to the latest images. 
`--no-pull` updates the subscription without pulling the images, instead images are downloaded on demand.

#### Suspend and Resume a Subscription
The `suspend` action suspends receiving updates for the specified subscription. The `resume` action resumes it again.