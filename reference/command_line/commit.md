### commit

The `commit` command builds an image from a container. The image is built from the container's most recent state. 

```
Usage: turbo commit <options> <container> <image>

<options> available:
      --args                 Start of arguments to startup file in commited image
      --format=VALUE         Use json format for output
      --no-base              Do not merge the base image(s) into the new image
      --overwrite            Overwrite existing image
      --startup-file=VALUE   Override the default startup file and save it to the committed image
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

#### Merging Images

The `commit` command will merge all the base images used in the container. This behavior can be overridden with the `--no-base` flag. 

For example, if a container were created with the command `turbo run git/git,nuget/nuget` and later committed with the command `turbo commit <container id> my-new-image`, the new image would contain: 

- Any files and registry keys created or modified in the container
- The files and registry keys from the **git/git** image
- The files and registry keys from the **nuget/nuget** image

However, if the same container were committed with the command `turbo commit --no-base <container id> my-new-image`, `my-new-image` would only contain the files and registry keys created or modified in the container. The `git/git` and `nuget/nuget` images are included as a dependency at runtime.

#### Startup file

To alter the selected startup file, apply the new value with `--startup-file` parameter. To alter argument to the selected startup file, apply one or more values after `--args` flag.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about commited image or an `error` object if command failed.