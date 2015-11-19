### start

The `start` command restarts a container which is not currently running. 

```
Usage: turbo start <options> <container>

<options> available:
  -a, --attach               Attach to stdin, stdout, and stderr of the
                               container
      --admin                Run the container as admin user
  -d, --detach               Run the container in the background
      --diagnostic           Enable diagnotic logging
      --disable=VALUE        Disable the specified Turbo VM setting
  -e, --env=VALUE            Set environment variables inside the container
      --enable=VALUE         Enable the specified Turbo VM setting
      --enable-sync          Enable container synchronization
      --env-file=VALUE       Read in a line delimited file of ENV variables
      --format=VALUE         Use json format for output
      --hosts=VALUE          Add an entry to the virtual /etc/hosts file
                               (<redirect>:<name>)
  -i, --isolate=VALUE        Set isolation level: full, write-copy or merge
      --link=VALUE           Add link to another container
                               (<container>:<alias>)
      --mount=VALUE          Mount a host folder into the container. Format:
                               [other-container:]SourceFolder[=TargetFolder]
      --private              Synchronize this container privately, visible
                               only to me
      --public               Synchronize this container publicly, visible to
                               everyone
      --route-add=VALUE      Add a TCP or UDP mapping
                               format: [<hostPort>]:<containerPort>[/tcp|udp]
      --route-block=VALUE    Isolate all ports of specified protocol (TCP or
                               UDP) by default
      --startup-file=VALUE   Override the default startup file
      --startup-verb=VALUE   Override the default startup verb
      --trigger=VALUE        Execute named group of startup files
      --using=VALUE          Use selected images as a temporary dependency
      --vm=VALUE             The Turbo VM version to run the container with
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after it exits
      --with-root=VALUE      Set the containers root directory
```

If the `start` command is run against an already-running container then no action will be taken. 

To enable diagnostic logging for the container, specify the `--diagnostic` flag. 

To run the container in the background then specify the `-d` or `--detach` flag.

To temporarily alter the startup file, specify it with `--startup-file` parameter. The change overrides the original startup files and does not apply to a subsequent container starts or commits.

When the container stops, the exit code of startup file is displayed in decimal form.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about started container or an `error` object if command failed.
