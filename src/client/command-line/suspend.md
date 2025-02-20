# suspend

The `suspend` command is used to suspend a running container. 

```
Usage: turbo suspend <container>

<options> available:
     --format=VALUE         Use json format for output
```

This will suspend all processes and threads within the specified container. 

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about paused container or an `error` object if command failed.