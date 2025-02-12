# gc

The `gc` command garbage collects unused containers. By default a container is considered unused if not run within the past 30 days. Installed or running containers are not deleted.

```
Usage: gc <options>

<options> available:
      --all-users            Applies the configuration settings to all users
      --days=VALUE           Number of days until a container is considered unused. Default is 30 days.
      --forks                Remove only forked containers
      --format=VALUE         Use the specified format for output. Supported values: json
      --trial                Run without deleting the containers
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```