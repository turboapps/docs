### gci

The `gci` command garbage collects unreferenced images.

```
Usage: turbo.exe gci <options>

<options> available:
      --all-users            Applies command to images stored in all users folder
      --format=VALUE         Use the specified format for output. Supported values: json
      --ignore-containers    Remove images even if they are referenced by containers
      --ignore-forks         Remove images even if they are referenced by forked containers
      --trial                Run without deleting the images
```

Images used in containers, subscriptions, or installed images are kept in local repository cache. All other images are considered unreferenced and removed.