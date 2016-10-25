### gc

The `gc` removes old, unused containers. By default it removes forked container older than 7 days 

```
Usage: turbo.exe gc <options>

<options> available:
      --days=VALUE           Age in days until container is removed. Default is 7 days
      --format=VALUE         Use the specified format for output. Supported values: json
      --ignore-forks         Remove all old containers, not just forks
      --trial                Run without deleting the images
```

When the `run` or `subscriptions` commands update a container with new, updated images, they create a copy of the container.
This allows returning back to the old container in case the new image has unexpected problems.
The 'gc' command removes older, version of these forks of containers. 
By default container older than 7 days are removed.

The `--days` parameter changes the how old a container has to be before removed.
The `--ignore-forks` parameter removes all container older that the given `--days`.
The `--trial` does not remove any container. It provides a preview which containers will be removed.

