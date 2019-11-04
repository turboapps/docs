## pull

The `pull` command syncs an image from a remote registry to your local registry. 

```
Usage: turbo pull <options> [<namespace>/]<image>[:<tag>]

<options> available:
      --format=VALUE         Use json format for output
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

The image to pull can be specified with up to 3 identifiers, only 1 of which (the name) is mandatory: 

- Namespace (user or org on the remote hub)
- Name of the remote repository
- Tag

If a namespace is not specified then it will default to that of the current user. 

If a tag is not specified then the **head** tag is applied. 

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about pulled image or an `error` object if command failed.