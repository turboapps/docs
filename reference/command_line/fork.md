### fork

The `fork` command creates a copy of an existing container.

```
Usage: turbo fork  <existing container> [<new container name>]

<options> available:
      --format=VALUE         Use json format for output
```

#### Examples:

```
# Create an unnamed copy of a container
> turbo fork 28c

# Create a named copy of a container
> turbo fork test-container copy-of-test-container

```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `container` object with information about cloned container or an `error` object if command failed.