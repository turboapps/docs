### inspect

The `inspect` command displays contents of the image.

```
inspect - Inspect changes to the image

Usage: turbo inspect <options> <image>

<options> available:
      --exclude=VALUE        Show details for all subsystems, except the
                               specified ones
      --format=VALUE         Use json format for output
      --include=VALUE        Show only details for selected subsystems:
                               dependencies, files, registry, services, startu-
                               p, dns, ports, env
```

#### Examples:

```
# Show all details about the image
> turbo inspect my-image

# Show filesystem changes only
> turbo inspect --include=files my-image

# Show all changes, but files and registry
> turbo inspect --exclude=files,registry my-image
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `inspect` object with all available information about image or an `error` object if command failed.