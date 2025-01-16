## push

The `push` command syncs an image from your local registry to the remote registry. 

```
Usage: turbo push <options> <image> [<remote image>]

<options> available:
      --format=VALUE         Use json format for output
      --no-default-namespace Does not use your username as the default namespace if not explicitly specified
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

If the namespace is not specified then Turbo will look for a repository belonging to the current user that corresponds to the image name. If this does not exist, a new, public repository will be created and the image will be pushed there.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about pushed image or an `error` object if command failed.