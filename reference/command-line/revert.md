## revert

The `revert` command is used to undo all changes to a container. 

```
Usage: turbo revert <container>

<options> available:
     --format=VALUE         Use json format for output
```

Configuration settings and metadata will be maintained but all changes to the container's filesystem and registery will be reverted.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `container` array with information about reverted container or an `error` object if command failed.