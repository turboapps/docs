## fork

The `fork` command creates a copy of an existing container.

```
Usage: turbo fork  <existing container> [<new container name>]

<options> available:
      --format=VALUE         Use the specified format for output. Supported values: json
      --images=VALUE         Use specified images for new container
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

The `--images' flag replaces all images in the new container with the ones that are specified. Any images from the original container that are required in the new container would need to be specified again.

### Examples

```
# Create an unnamed copy of a container
> turbo fork 28c

# Create a named copy of a container
> turbo fork test-container copy-of-test-container

# Create a copy with Java & Firefox as new main images
> turbo fork chrome-container --images=oracle/jre,mozilla/firefox

```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `container` object with information about cloned container or an `error` object if command failed.
