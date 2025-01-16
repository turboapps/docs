## rmi

The `rmi` command removes images from the local registry. 

```
<options> available:
  -a, --all                  Remove all images from the local machine or all matching images if argument is specified
      --all-users            Applies command to images stored in all users folder
  -f, --force                Attempts to stop running images
      --format=VALUE         Use the specified format for output. Supported values: json

```

Use the `-a` flag to remove all images at one time. Note that this operation cannot be undone.

```
# Remove an image by specifying it by name
> turbo rmi my-image

Image my-image was removed

# Remove all images with the -a flag
> turbo rmi -a

All images have been removed
```

If the same image is forked or tagged multiple times then the `rmi` command will only untag the specified name, not remove the image itself. 

```
> turbo images

ID            Name                    Tag  Created                Size
--            ----                    ---  -------                ----
7a85fe8f7ad1  chocolatey/chocolatey        8/22/2014 11:34:19 AM  3.6 MB
7a85fe8f7ad1  chocolatey-forked       1.0  8/22/2014 12:00:01 PM  3.6 MB

> turbo rmi chocolatey/chocolatey

Image chocolatey/chocolatey was untagged

> turbo images

ID            Name                Tag  Created                Size
--            ----                ---  -------                ----
7a85fe8f7ad1  chocolatey-forked   1.0  8/22/2014 12:00:01 PM  3.6 MB

> turbo rmi chocolatey-forked:1.0

Image chocolatey-forked:1.0 was removed
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about removed images or an `error` object if command failed.
