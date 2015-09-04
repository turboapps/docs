### export

The `export` command copies an image from the local registry to a specified path on your local machine or network. 

```
export - Export an image from the local registry to the specified path

Usage: turbo export <options> <image> <path>

<options> available:
      --format=VALUE         Use json format for output
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

#### Examples:

```
# Copy an image to the local machine
> turbo export my-new-image C:\

# Copy an image to a network share
> turbo export my-new-image \\server\folder
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `file` object with information about export file or an `error` object if command failed.