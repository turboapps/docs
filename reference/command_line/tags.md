### tags

The `tags` command returns all the available tags for an image. 

```
Usage: turbo tags <image>

<options> available:
     --format=VALUE         Use json format for output
```

All the available tags are displayed.

```
> turbo tags my-image
All available tags of my-image:
head (local)
1.0 (local)
0.1.29
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either `tags` array with list of available tags or an `error` object if command failed.