### gci

The `gci` removes images which are not used by any container nor installed image. 

```
Usage: turbo.exe gci <options>

<options> available:
      --all-users            Applies command to images stored in all users folder
      --format=VALUE         Use the specified format for output. Supported values: json
      --skip-containers      Remove images referenced by containers
      --skip-forks           Remove images referenced only by container forks
      --trial                Run without deleting the images
```


As images version are updated, replaced, container added and removed, unused images are left behind.
The 'gci' command removes images which are not referenced by the newest container or installed image.

The `gci` scans all containers, subscriptions and installed images and keeps these images.
The other, not referenced are removed.


The `--all-users` parameter does the scan over images for all Windows users. Needs admin privilege.
The `--skip-containers` parameter skips containers in the usage scan. 
That means only images referenced by subscriptions and installations are kept.
The `--skip-forks` parameter skips container which are old versions of the same container.
That means only images referenced by the latest container version, subscriptions and installations are kept.
The `--trial` does not remove any image. It provides a preview which images will be removed.


