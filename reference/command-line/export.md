## export

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

### Examples

```
# Export an image to the local file system
> turbo export microsoft/vscode-x64 C:\path\to\image.svm

# Export the untagged version of an image to the local file system
> turbo export microsoft/vscode-x64: C:\path\to\image.svm

# Export a specific tagged version of an image
> turbo export microsoft/vscode-x64:1.90.2 C:\path\to\image.svm

# Export a specific image version using its hash prefix
> turbo export microsoft/vscode-x64#8176cb02 C:\path\to\image.svm

# Export an image to a network share
> turbo export microsoft/vscode-x64 \\server\folder\image.svm

# Export an image to a portable exe
> turbo export --type=exe microsoft/vscode-x64 C:\path\to\image.exe
```

### Handling Multiple Matches

If your export command matches multiple images, you'll see an error like this:

```
Error: vscode-x64 matched multiple images

microsoft/vscode-x64:1.97
microsoft/vscode-x64:1.90.2
microsoft/vscode-x64
```

In this case, specify the exact image you want to export by using its full name, including the tag or hash.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `file` object with information about export file or an `error` object if command failed.
