# stop

The `stop` command stops containers which are currently running. 

```
Usage: turbo stop <options> <container>

<options> available:
  -a, --all                  Stop all running containers
      --format=VALUE         Use json format for output
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit

```

`start` command accepts either a container to close or `-a` parameter to close all running containers.

If the `stop` command is run against a non-running container then no action will be taken. 

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about stopped container or an `error` object if command failed.