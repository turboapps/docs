### gci

The `gci` removes images which are not used by any container nor installed image. 

```
Usage: turbo.exe gci <options>

<options> available:
      --all-users            Applies command to images stored in all users folder
      --format=VALUE         Use the specified format for output. Supported values: json
      --ignore-containers    Remove images even if they are referenced by containers
      --ignore-forks         Remove images even if they are referenced by forked containers
      --trial                Run without deleting the images
```


As images version are updated, replaced and container added and removed, unused images are left behind.
The `gci` command removes images which are not referenced by the newest container or installed image.

The `gci` scans all containers, subscriptions and installed images and keeps these images.
The other, not referenced images are removed.


The `--all-users` parameter does the scan over images in the all users folder. Needs admin privilege.
The `--ignore-containers` parameter removes images even when referenced by a container. 
Only subscriptions and installed images are kept.
The `--ignore-forks` parameter removes images only referenced by old, forked container too.
That means only images referenced by the latest container version, subscriptions and installations are kept.
The `--trial` does not remove any image. It provides a preview which images will be removed.


