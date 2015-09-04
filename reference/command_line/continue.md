### continue

The `continue` command downloads the last state of a container and then starts it.

```
Usage: turbo continue <options> <container>

<options> available:
 -d, --detach               Run the container in the background
     --diagnostic           Enable diagnotic logging
     --disable-sync         Automatic container pushes are disabled
     --format=VALUE         Use json format for output
     --private              Synchronize this container privately, visible only to me
     --public               Synchronize this container publicly, visible to everyone
     --wait-after-error     Leave program open after error
     --wait-after-exit      Leave program open after it exits
     --with-root=VALUE      Set the containers root directory
```

If the `continue` command is run against an already-running container then no action will be taken. 

To enable diagnostic logging for the container, specify the `--diagnostic` flag. 

To run the container in the background, specify the `-d` or `--detach` flag. 

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `container` object with information about executed container or an `error` object if command failed.