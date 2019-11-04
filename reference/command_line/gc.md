## gc

The `gc` command garbage collects unused containers that have been forked. By default a container is considered unused if not run within the past 7 days.

```
Usage: turbo.exe gc <options>

<options> available:
      --all                  Include unforked containers for removal
      --days=VALUE           Number of days until a container is considered unused
      --format=VALUE         Use the specified format for output. Supported values: json
      --trial                Run without deleting the images
```

The `run` or `subscriptions` commands forks containers when the base image is automatically upgraded to a newer release. The `gc` command removes older version of these forked containers.