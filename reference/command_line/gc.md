### gc

The `gc` removes old, unused containers. By default it removes forked container older than 7 days 

```
Usage: turbo.exe gc <options>

<options> available:
      --all                  Include unforked containers for removal
      --days=VALUE           Number of days until a container is considered unused
      --format=VALUE         Use the specified format for output. Supported values: json
      --trial                Run without deleting the images
```

The `run` or `subscriptions` commands copies containers when new image versions are downloaded.
This allows returning back to the old container in case the new image version has unexpected problems.
The `gc` command removes older version of these forked containers. 
By default container older than 7 days are removed.

The `--days` parameter changes the how old a container has to be before removed.
The `--all` parameter removes all container older that the given `--days`.
The `--trial` does not remove any container. It provides a preview which containers will be removed.

