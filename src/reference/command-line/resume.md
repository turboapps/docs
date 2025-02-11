## resume

The `resume` command resumes a paused container. 

```
Usage: turbo resume <container>

<options> available:
     --format=VALUE         Use json format for output
```

If the container specified is not paused then no action will be taken.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about resumed container or an `error` object if command failed.