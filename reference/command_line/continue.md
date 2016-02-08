### continue

The `continue` command downloads the last state of a container and then starts it.

```
Usage: turbo continue <options> <state-id>

<options> available:
  -a, --attach               Attach to stdin, stdout, and stderr of the
                               container
      --admin                Run the container as admin user
  -d, --detach               Run the container in the background
      --diagnostic           Enable diagnotic logging
      --disable=VALUE        Disable the specified Turbo VM setting
      --disable-sync         Disable container synchronization
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
      --route-add=VALUE            Add route mapping. Supported protocols: ip, pipe, tcp, udp
      --route-block=VALUE          Block specified route or protocol. Supported protocols: ip, tcp, udp
      --startup-file=VALUE   Override the default startup file
      --startup-verb=VALUE   Override the default startup verb
      --trigger=VALUE        Execute named group of startup files
      --using=VALUE          Use selected images as a temporary dependency
      --vm=VALUE             The Turbo VM version to run the container with
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after it exits
      --with-root=VALUE      Set the containers root directory
```

If the `continue` command is run against an already-running container then no action will be taken. 

To enable diagnostic logging for the container, specify the `--diagnostic` flag. 

To run the container in the background, specify the `-d` or `--detach` flag. 

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `container` object with information about executed container or an `error` object if command failed.
