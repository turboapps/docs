### copyi

The `copyi` command copies an image to another repository on your local machine. `cpi` is an alias for this command.

```
Usage: turbo copyi <options> <image> [<repository>/]<image>[:<tag>]

<options> available:
      --format=VALUE         Use json format for output
      --overwrite            Overwrite existing image
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

If the repository specified in the command does not already exist, a new one is automatically created.  

```
# Copy node/node to a new repository
> turbo copyi node/node my-node

Output image: my-node

# Copy the image to the existing repository with a new tag
> turbo copyi node/node my-node:1.0
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about forked image or an `error` object if command failed.