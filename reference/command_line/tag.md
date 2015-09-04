### tag

The `tag` command applies a new tag to an image.

```
Usage: turbo tag <image> <tag>

<options> available:
     --format=VALUE         Use json format for output
```

Apply a new tag to the head version of an image. 

```
> turbo tag my-image 1.0
Output image: my-image:1.0
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either `image` object with information about newly tagged image or an `error` object if command failed.