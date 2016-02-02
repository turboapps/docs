### start

The `start` command restarts a stopped container or starts an application inside an already running container. 

```
Usage: start <options> <container>

<options> available:
      --                     Parameters after -- are passed directly to container process
  -a, --attach               Attach to stdin, stdout, and stderr of the container
      --ad-domain-allow=VALUE
                             Active Directory domain which is alowed to run
      --ad-domain-deny=VALUE Active Directory domain which is denied from running
      --ad-group-allow=VALUE Active Directory group membership which is allows to run
      --ad-group-deny=VALUE  Active Directory group membership which is denied from running
      --admin                Run the container as admin user
  -d, --detach               Run the container in the background
      --diagnostic           Enable diagnotic logging
      --disable=VALUE        Disable the specified Turbo VM setting
  -e, --env=VALUE            Set environment variables inside the container
      --enable=VALUE         Enable the specified Turbo VM setting
      --enable-log-stream    Enable web streaming of logs
      --enable-screencast    Enable web streaming of screenshots
      --enable-sync          Enable container synchronization
      --env-file=VALUE       Read in a line delimited file of ENV variables
      --format=VALUE         Use json format for output
      --hosts=VALUE          Add an entry to the virtual /etc/hosts file (<redirect>:<name>)
  -i, --isolate=VALUE        Set isolation level: full, write-copy or merge
      --link=VALUE           Add link to another container (<container>:<alias>)
      --mount=VALUE          Mount a host folder into the container. Format: [other-container:]SourceFolder[=TargetFolder]
      --network=VALUE        Run container in specified named network
      --private              Synchronize this container privately, visible only to me
      --public               Synchronize this container publicly, visible to everyone
      --pull                 Pulls base images from hub before running, if they exist
      --route-add=VALUE      Add a TCP or UDP mapping. Format: [<hostPort>]:<containerPort>[/tcp|udp]
      --route-block=VALUE    Isolate all ports of specified protocol (TCP or UDP) by default
      --startup-file=VALUE   Override the default startup file
      --startup-file-default=VALUE
                             Overrides the default startup file if the main image does not have one
      --startup-verb=VALUE   Override the default startup verb
      --trigger=VALUE        Execute named group of startup files
      --using=VALUE          Use specified images as a temporary dependency
      --vm=VALUE             The Turbo VM version to run the container with
  -w, --working-dir=VALUE    Set the initial working directory inside the container
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after it exits

```

If the `start` command is run against an already-running container then no action will be taken. 

To enable diagnostic logging for the container, specify the `--diagnostic` flag. 

To run the container in the background then specify the `-d` or `--detach` flag.

To temporarily alter the startup file, specify it with `--startup-file` parameter. The change overrides the original startup files and does not apply to a subsequent container starts or commits.

When the container stops, the exit code of startup file is displayed in decimal form.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about started container or an `error` object if command failed.
