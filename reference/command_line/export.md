### export

The `export` command copies an image from the local registry to a specified path on your local machine or network. 

```
export - Export an image from the local repository to the specified path

Usage: turbo.exe export <options> <image> <path>

<options> available:
      --format=VALUE         Use the specified format for output. Supported values: json
      --type=VALUE           Export image type. Supported values: svm, exe
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

#### Examples:

```
# Export an image to the local file system
> turbo export image C:\path\to\image.svm

# Export an image to a network share
> turbo export image \\server\folder\image.svm

# Export an image to a portable exe
> turbo export --type=exe image C:\path\to\image.exe
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `file` object with information about export file or an `error` object if command failed.
