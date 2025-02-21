# import

The `import` command is used to add Turbo images or non-Turbo file types from your local machine to your local registry.

```
Usage: import <options> <type> <path>

<options> available:
      --all-users            Applies the configuration settings to All Users
      --cache                Populates the executable cache
      --format=VALUE         Use the specified format for output. Supported values: json, rcp
  -n, --name=VALUE           Name of the image
      --overwrite            Overwrite existing image
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

The type must be specified when importing external configurations into the Turbo registry. 

```
svm           Turbo image
msi           Microsoft Software Installer
thinapp       Thinapp Configuration
vm            turbo vm
```

You can optionally specify a name for the newly-imported image. Use the `--overwrite` flag to overwrite an existing image.

If the image name is not specified during an import, the imported image will default to using the file name as the image name and the embedded application version as the release tag. For virtual machines (VM), the image name will always be '/xvm'.

**Turbo Studio** users can use this command to import their existing components.

## Examples

```
# Import a thinapp config
turbo import -n=my-thinapp-image thinapp C:\s\package.ini

# Import a turbo image
turbo import -n=my-svm-image svm C:\s\my-image.svm
```

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about imported image or an `error` object if command failed.