# rmi

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

## Image Matching Behavior

When specifying an image for removal, Turbo will attempt to match the image name against all versions in your local registry, including both tagged and untagged images. The matching behavior is as follows:

If no release is specified (e.g., `turbo rmi image-name`), it will match all releases and untagged versions.
If an empty release is specified (e.g., `turbo rmi image-name:`), it will match only untagged versions.
If a specific release is specified (e.g., `turbo rmi image-name:1.0`), it will match only that specific release.

## Examples

Remove a specific tagged version of an image
```
> turbo rmi microsoft/vscode-x64:1.92.2
Image microsoft/vscode-x64:1.92.2 was removed
```

Attempt to remove all versions of an image (tagged and untagged)
```
> turbo rmi microsoft/vscode-x64
Error: vscode-x64 matched multiple images

microsoft/vscode-x64:1.92.2
microsoft/vscode-x64:1.92.1
microsoft/vscode-x64
```

Remove only the untagged version of an image
```
> turbo rmi microsoft/vscode-x64:
Image microsoft/vscode-x64 was removed
```

Remove all images with the -a flag
```
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
Image chocolatey/chocolatey was removed

> turbo images
ID            Name                Tag  Created                Size
--            ----                ---  -------                ----
7a85fe8f7ad1  chocolatey-forked   1.0  8/22/2014 12:00:01 PM  3.6 MB

> turbo rmi chocolatey-forked:1.0
Image chocolatey-forked:1.0 was removed
```

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about removed images or an `error` object if command failed.
