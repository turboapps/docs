# gci

The `gci` command garbage collects unreferenced images.

```
Usage: gci <options>

<options> available:
      --all-users            Applies the configuration settings to all users
  -f, --force                Force the garbage collection operation despite warnings
      --format=VALUE         Use the specified format for output. Supported values: json
      --ignore-containers    Remove images even if they are referenced by containers
      --ignore-recent        Remove images even if they are recently used
      --keep-known-images    Keep all known images, clean out orphan junk files only
      --keep-latest          Keep the latest version of a image
      --trial                Run without deleting the images
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

Images used in containers, subscriptions, or installed images are kept in local repository cache. All other images are considered unreferenced and removed.