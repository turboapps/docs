## start

The `start` command restarts a stopped container or starts an application inside an already running container. 

```
Usage: start <options> <container>

<options> available:
      --                       Parameters after -- are passed directly to the container process
  -a, --attach                 Attach to stdin, stdout, and stderr of the container. This setting is not saved in the container.
      --ad-domain-allow=VALUE  Allow execution from the Active Directory domain
      --ad-domain-deny=VALUE   Disallow execution from the Active Directory domain
      --ad-group-allow=VALUE   Allow execution for members of the Active Directory group
      --ad-group-deny=VALUE    Disallow execution for members of the Active Directory group
      --admin                  Run the container with administrative permissions
  -d, --detach                 Run the container in the background
      --diagnostic             Enable diagnostic logging
      --disable=VALUE          Disable the specified Turbo VM setting. This setting is not saved in the container.
  -e, --env=VALUE              Set an environment variable inside the container. This setting is not saved in the container.
      --enable=VALUE           Enable the specified Turbo VM setting. This setting is not saved in the container.
      --enable-sync            Enable container synchronization. This setting is not saved in the container.
      --env-file=VALUE         Read in a line delimited file of environment variables. This setting is not saved in the container.
      --format=VALUE           Use the specified format for output. Supported values: json
      --hide-drive=VALUE       Hide specified drives. This setting is not saved in the container. Format: <*|V:|-V:>[,...]
      --hosts=VALUE            Add an entry to the virtual /etc/hosts file (<redirect>:<name>). This setting is not saved in the container.
  -i, --isolate=VALUE          Set isolation level: full, write-copy, merge or merge-user.
      --link=VALUE             Add link to another container (<container>:<alias>). This setting is not saved in the container.
      --mount=VALUE            Mount a host folder into the container. This setting is not saved in the container. Format: [other-container:]SourceFolder[=TargetFolder]
      --mount-if=VALUE         Mount a host folder into the container but does not fail if the mount point doesn't exist. This setting is not saved in the container. Format: [other-container:]SourceFolder[=TargetFolder]
      --network=VALUE          Run container in specified named network. This setting is not saved in the container.
      --no-pull                Uses local images to run the container if possible. If not present, will pull from the hub.
      --proxy-password=VALUE   Password used to connect to the proxy server. It is not required when using Tnlr. This setting is not saved in the container.
      --proxy-server=VALUE     Proxy or Tnlr server (Tnlr requires TLS). This setting is not saved in the container. Format: [socks5|http|https|tnlr]://proxy-address:port.
      --proxy-targets=VALUE    A list of addresses (separated by semicolons) which will be proxied. If not set, all traffic will go through the proxy. The address could be either a DNS name or an IP address.
      --proxy-username=VALUE   Username used to connect to the proxy server. It is not required when using Tnlr. This setting is not saved in the container.
      --pull                   Pulls base images from hub before running, if they exist
      --route-add=VALUE        Add route mapping. Supported protocols: ip, pipe, tcp, and udp. This setting is not saved in the container.
      --route-block=VALUE      Block specified route or protocol. Supported protocols: ip, tcp, and udp. This setting is not saved in the container.
      --route-file=VALUE       Read in a INI file of routing configuration. This setting is not saved in the container.
      --set-startup-file=VALUE Override the default startup file permanantly
      --set-startup-verb=VALUE Override the default startup verb permanantly
      --show-window=VALUE      Controls how window is shown. Supported values: max, default
      --startup-file=VALUE     Override the default startup file. This setting is not saved in the container.
      --startup-verb=VALUE     Override the default startup verb. This setting is not saved in the container.
      --stream                 Enable streaming of the image if available
      --trigger=VALUE          Execute named group of startup files. This setting is not saved in the container.
      --use-dll-cache          Use image DLL cache as created by the precache command. This setting is not saved in the container.
      --using=VALUE            Use specified images as a temporary dependency
      --vm=VALUE               Use the specified Turbo VM version for execution
  -w, --working-dir=VALUE      Set the initial working directory inside the container. This setting is not saved in the container.
      --wait-after-error       Leave process open after error
      --wait-after-exit        Leave process open after it exits
```

If the `start` command is run against an already-running container then no action will be taken. 

To enable diagnostic logging for the container, specify the `--diagnostic` flag. 

To run the container in the background then specify the `-d` or `--detach` flag.

To temporarily alter the startup file, specify it with `--startup-file` parameter. The change overrides the original startup files and does not apply to a subsequent container starts or commits.

When the container stops, the exit code of startup file is displayed in decimal form.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `container` object with information about started container or an `error` object if command failed.
