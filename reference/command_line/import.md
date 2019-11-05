## import

The `import` command is used to add Turbo images or non-Turbo file types from your local machine to your local registry.

```
Usage: turbo import <options> <type> <path>

<options> available:
      --format=VALUE         Use json format for output
  -n, --name=VALUE           Name of the image
      --overwrite            Overwrite existing image
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

The type must be specified when importing external configurations into the Turbo registry. 

```
svm           Turbo image
msi           Microsoft Software Installer
thinapp       Thinapp Configuration
```

You can optionally specify a name for the newly-imported image. Use the `--overwrite` flag to overwrite an existing image.

```
# Import a thinapp config
turbo import -n=my-thinapp-image thinapp C:\s\package.ini

# Import a turbo image
turbo import -n=my-svm-image svm C:\s\my-image.svm
```

**Turbo Studio** users can use this command to import their existing components.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about imported image or an `error` object if command failed.