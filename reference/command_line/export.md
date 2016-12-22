### export

The `export` command copies an image from the local registry to a specified path on your local machine or network. 

```
export - Export an image from the local registry to the specified path

Usage: turbo export <options> <image> <path>

<options> available:
      --format=VALUE         Use json format for output
      --type=VALUE           Export image type. Supported values: svm, exe
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

#### Examples:

```
# Export an image to the local file system
> turbo export image C:\path\to\image.svm

# Export an image to a network share
> turbo export image \\server\folder\image.svm
```

### Export Types
- svm: The image format used by the turbo command and Turbo Studio. Can be imported again with `turbo import svm <file>`
- exe: A portable executable. This executable runs directly installing anything first.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `file` object with information about export file or an `error` object if command failed.