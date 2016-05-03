### commit

The `commit` command builds an image from a container. The image is built from the container's most recent state. 

```
Usage: commit <options> <container> <image> [--args <startup file params>]

<options> available:
      --ad-domain-allow=VALUE Allow execution from the Active Directory domain
      --ad-domain-deny=VALUE  Disallow execution from the Active Directory domain
      --ad-group-allow=VALUE  Allow execution for members of the Active Directory group
      --ad-group-deny=VALUE   Disallow execution for members of the Active Directory group
  -e, --env=VALUE             Set environment variables inside the container
      --env-file=VALUE        Read in a line delimited file of ENV variables
      --format=VALUE          Use the specified format for output. Supported values: json
      --hosts=VALUE           Add an entry to the virtual /etc/hosts file (<redirect>:<name>)
      --no-base               Do not merge the base image into the new image
      --no-base-file-assocs   Do not merge the file associations from the base image into the new image
      --overwrite             Overwrite existing image
      --route-add=VALUE       Add route mapping. Supported protocols: ip, pipe, tcp, udp
      --route-block=VALUE     Block specified route or protocol. Supported protocols: ip, tcp, udp
      --route-file=VALUE      Read in a INI file of routing configuration
      --startup-file=VALUE    Override the default startup file and save it to the committed image
      --trigger=VALUE         Execute named group of startup files
      --wait-after-error      Leave process open after error
      --wait-after-exit       Leave process open after it exits
```

#### Merging Images

The `commit` command will merge all the base images used in the container. This behavior can be overridden with the `--no-base` flag. 

For example, if a container were created with the command `turbo run git/git,nuget/nuget` and later committed with the command `turbo commit <container id> my-new-image`, the new image would contain: 

- Any files and registry keys created or modified in the container
- The files and registry keys from the **git/git** image
- The files and registry keys from the **nuget/nuget** image

However, if the same container were committed with the command `turbo commit --no-base <container id> my-new-image`, `my-new-image` would only contain the files and registry keys created or modified in the container. The `git/git` and `nuget/nuget` images are included as a dependency at runtime.

#### Startup File

To alter the selected startup file, apply the new value with `--startup-file` parameter. All parameters which are passed after the `--args` flag will be used as parameters to the startup file.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` object with information about commited image or an `error` object if command failed.
