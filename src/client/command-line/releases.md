# releases

The `releases` command returns all the available releases for an image. 

```
Usage: turbo releases <image>

<options> available:
     --format=VALUE         Use json format for output
```

All the available releases are displayed.

## Examples

```
> turbo releases my-image
All available releases of my-image:
head (local)
1.0 (local)
0.1.29
```

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either `releases` array with list of available releases or an `error` object if command failed.