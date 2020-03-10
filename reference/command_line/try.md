## try

The `try` command creates a new, temporary container which is removed once it is closed.

```
Usage: turbo.exe try <options> <image>[+skin(color)] [<parameters>...]

<options> available:
      --                       Parameters after -- are passed directly to the container process
  -a, --attach                 Attach to stdin, stdout, and stderr of the container. This setting is not saved in the container.
      --ad-domain-allow=VALUE  Allow execution from the Active Directory domain
      --ad-domain-deny=VALUE   Disallow execution from the Active Directory domain
      --ad-group-allow=VALUE   Allow execution for members of the Active Directory group
      --ad-group-deny=VALUE    Disallow execution for members of the Active Directory group
      --admin                  Run the container with administrative permissions
      --app=VALUE              Run the application specified by an URI
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
  -n, --name=VALUE             Name of created container
      --network=VALUE          Run container in specified named network. This setting is not saved in the container.
      --no-pull                Uses local images to run the container if possible. If not present, will pull from the hub.
      --proxy-password=VALUE   Password used to connect to the proxy server. It is not required when using Tnlr. This setting is not saved in the container.
      --proxy-server=VALUE     Proxy or Tnlr server (Tnlr requires TLS). This setting is not saved in the container. Format: [socks5|http|https|tnlr]://proxy-address:port.
      --proxy-targets=VALUE    A list of addresses (separated by semicolons) which will be proxied. If not set, all traffic will go through the proxy. The address could be either a DNS name or an IP address.
      --proxy-username=VALUE   Username used to connect to the proxy server. It is not required when using Tnlr. This setting is not saved in the container.
      --route-add=VALUE        Add route mapping. Supported protocols: ip, pipe, tcp, and udp. This setting is not saved in the container.
      --route-block=VALUE      Block specified route or protocol. Supported protocols: ip, tcp, and udp. This setting is not saved in the container.
      --route-file=VALUE       Read in a INI file of routing configuration. This setting is not saved in the container.
      --set-startup-file=VALUE Override the default startup file permanantly
      --set-startup-verb=VALUE Override the default startup verb permanantly
      --show-window=VALUE      Controls how window is shown. Supported values: max, default
      --startup-file=VALUE     Override the default startup file. This setting is not saved in the container.
      --startup-verb=VALUE     Override the default startup verb. This setting is not saved in the container.
      --stream                 Enable streaming of the image if available
      --temp                   Remove container when it exits
      --trigger=VALUE          Execute named group of startup files. This setting is not saved in the container.
      --use-dll-cache          Use image DLL cache as created by the precache command. This setting is not saved in the container.
      --using=VALUE            Use specified images as a temporary dependency
      --vm=VALUE               Use the specified Turbo VM version for execution
  -w, --working-dir=VALUE      Set the initial working directory inside the container. This setting is not saved in the container.
      --wait-after-error       Leave process open after error
      --wait-after-exit        Leave process open after it exits
```

Turbo `try` can be used to specify multiple images by separating each image with a comma. If the same file, registry entry, or environment variable exists in multiple images, then the one from whichever image was specified last will win the conflict and be used in the virtual environment. Virtual machine settings are taken from the last specified image. Due to this "layering" approach, it is a good practice to specify images with newer versions of applications or libraries after images with older versions.

```
# Create a container with the apache/apache image
> turbo try apache/apache

# Create a container with apache and mysql
> turbo try apache/apache,mysql/mysql

# Create a container with .NET 3 and 4
> turbo try microsoft/dotnet:3.5.1,microsoft/dotnet:4.0.3
```

Containers are started with the startup file specified in the last passed image that is not a modifier layer.  A modifier layer is an image that has no startup file or auto-start services defined. Regardless of its position on the command line, it is never used as the entry point to the container.

If a startup file is not set in the base image then `cmd.exe /k` is used.
	
```
# Default startup file is used to start container
> turbo try oracle/jdk

# Override the startup file to use the command prompt
> turbo try --startup-file=cmd.exe oracle/jdk
```

The initial working directory for the container can be set with the `workdir` instruction or the `-w` flag. The current directory will be used if `workdir` was not specified and no `--startup-file` parameter was provided when building the image. 

```
# By default, a container's working directory matches the host's working directory
C:\Users> turbo try git/git

(0x3842xd) C:\Users>

# This sets the working directory to the root of the C drive
C:\Users> turbo try -w="C:\" git/git

(0x3842xd) C:\> 

```

Turbo VM settings can be enabled or disabled with the `--enable` and `--disable` flags, respectively. For a list of Turbo VM settings, see **VM Settings** section of the documentation.

Please note that `turbo.exe` always runs outside of the container on the host even if executed from within the container.

### Adding Environment Variables

Environment variables can be added to a container with the `-e` or `--env-file` flags. 

```
# Add environment variable 'foo' with value 'bar'
> turbo try -e=foo=bar <image>

# Specify multiple env vars with multiple flags
> turbo try -e=foo=bar -e=x=2 <image>
```

If your container requires several environment variables then we recommend creating an **env-file**. An **env-file** is a line-delimited text file that lists all the environment variables to add to the container. The example file below lists 3 environment variables: 

```
foo=bar
utensil=turbo
my-var=10
```

Environment variables are always expanded on the host system before they are added to the container. 

```
> echo %PATH%

C:\Windows\system32;C:\Windows;

> turbo try -e=%PATH%;C:\Users <image>

(2fedfja3) > echo %PATH%
C:\Windows\system32;C:\Windows;C:\Users	
```

### Virtual Networks

By default, containers run in the host network, meaning that any services exposed by a container can be accessible to the outside world just as if the application was running natively on the host. However, it is possible to run containers in virtualized network environments by specifying a network name other than "host" with the `--network` flag. Running a container in virtualized network environment prevents it from exposing services to the outside world (unless `--route-add` flag is used appropriately) while allowing for easy communication between containers running in the same virtualized network environment. In a virtual network, containers can connect to each other using their names as specified with the `--name` flag if there was any or auto-generated from the image name otherwise.

```
# Launch a new container in the host network context (the default)
> turbo try --network=host <image>

# Launch two containers in a "mynet" virtual network
> turbo try -d --network=mynet --name=web <image>
web#88e3bb0e

> turbo try -d --network=mynet myself/webbrowser http://web
webbrowser#dd73e48a

# The former will accessible by its name "web" within the network,
# and the latter by its auto-generated name: "webbrowser"
```

**Note:** When connecting, always use the container name and not the network name. After all, what should your application connect to if there were two separate containers exposing the same services on the same virtual network if you connected by network name instead of container name?

### Port Mapping

All network operations (opening/closing ports, for example) are passed through to the local machine when running in the host network context. To remap container ports to other ports on the local machine, use the `--route-add` flag. This flag also works when running in a virtualized network environment (by specifying the `--network` flag).

```
# Map container tcp port 8080 to local port 80
> turbo try --route-add=tcp://8080:80 <image>

# Map udp traffic on container port 8080 to local port 80
> turbo try --route-add=udp://8080:80 <image>

# Map container tcp port 80 to random port on local machine
# The random port can be later queried using the netstat command
> turbo try --route-add=tcp://80:0 <image>

```

The default policy of allowing containers to bind to any port on the local machine can be changed with the `--route-block` flag. It isolates all services bound to container ports on specified protocols (tcp or udp). They can only be opened using the `--route-add` flag.

```
# Isolate all tcp services of a container
> turbo try --route-block=tcp <image>

# Isolate all tcp and udp services, but allow container tcp port 3486
# be bound to port 80 on local machine
> turbo try --route-block=tcp,udp --route-add=tcp://3486:80 <image>
```

### Container-to-Container Links

If you decided to not expose any services running in a container to the public by specifying the `--route-block` flag and not `--route-add`, you may still want to be able to connect to the services in your container from another container on the same machine. Although this is best achieved by running the containers in the same virtual network using the `--network` flag, container linking can be used for this purpose as well.

When creating a container with the `turbo new` command, you can use the `--link` flag to link it to any existing containers and the new container will be able to connect to any services exposed by the linked containers. Such connection creates a parent-child relationship where the newly created container is the parent.

With each link, an alias name must be specified. Name resolution overrides are added to the parent container so it can refer to its children by these names. Note how with container links the name that a container will use to refer to another container is defined by the former (the parent) using a parameter, instead of by the name of the container as is the case with virtual networks (the `--network` flag).

Container links also work between containers running in different virtual networks.


#### Example

First create two containers, each exposing web sites on private port 80, but with no services exposed outside the containers. Run them in detached mode.

```
> turbo try --route-block=tcp,udp -d <image>

image#05bf1aa4

> turbo try --route-block=tcp,udp -d <image>

image#94a38820
```

Then create a web browser container linked to the previously created containers.

```
> turbo try --link=05bf:web1 --link=94a3:web2 myself/webbrowser http://web1 http://web2
```

You will be able to browse websites served by the linked containers even though they are not publically available.

### Controlling Outbound Traffic

The `--route-add` and `--route-block` not only provide a way to create rules that apply to inbound network traffic with the `tcp` and `udp` protocols, but also rules that apply to outbound network traffic. For the outbound rules, the `ip` protocol is used. The rules can be implemented using a whitelist or a blacklist approach. It is also possible to reroute traffic from one IP address/host to another, effectively defining an IP address alias.

Routes can be defined using IPv4, IPv6 addresses, or based on hostnames. Note however that you cannot specify a host name on the right side of a `--route-add` mapping since the result would be ambiguous if the host name resolved to multiple IP addresses.

If your container requires several routing rules then we recommend creating a **route-file**. A **route-file** is an INI based, line-delimited text file that lists all the routing rules to add to the container. It can be added with `--route-file` flag.

#### Examples

Create a PuTTY container with all outbound access blocked except to IP address 10.0.0.34 (whitelist approach):

```
> turbo try --route-block=ip --route-add=ip://10.0.0.34 putty
```

In addition to the above, reroute all traffic to 1.1.1.1 to 10.0.0.34, making it possible to connect to host at 10.0.0.34 typing address 1.1.1.1 in PuTTY:

```
> turbo try --route-block=ip --route-add=ip://10.0.0.34 --route-add=ip://1.1.1.1:10.0.0.34 putty
```

It is also possible to use IP ranges using the CIDR notation. The following command allows PuTTY in the container to connect only to hosts in the 192.168.1.0/24 network:

```
> turbo try --route-block=ip --route-add=ip://192.168.1.0/24 putty
```

To disallow the app to connect to a set of specific IP addresses (blacklist approach), simply specify them in the `--route-block` flags:

```
> turbo try --route-block=ip://192.168.1.55 --route-block=ip://192.168.1.57  putty
```

When working with IPv6 addresses, it is necessary to enclose them in square brackets:

Block an IPv6 address:

```
> turbo try --route-block=ip://[2001:4860:4860::8888] putty
```

Block all IP traffic, except link local IPv6 space:

```
> turbo try --route-block=ip --route-add=ip://[fe80::c218:85ff:febd:5c01/64] putty
```

Reroute traffic to an IPv6 address to localhost:

```
> turbo try --route-block=ip --route-add=ip://[2001:cdba::3257:9652]:[::1] putty
```

To simplify working with mutliple IP addresses it is possible to use hostnames on the left side of all commands.  When a hostname is specified with `ip` `--route-add` or `--route-block`, it is resolved to an IP address when the container starts, and the behavior is effectively the same as if the IP address was specified in place of the hostname. Additionally, all DNS resolves are intercepted and whenever a known hostname resolves to a previously unknown IP address, the IP address is added to the appropriate route table. This feature is what allows wildcard hostnames to work, since otherwise it would not be possible to infer the IP addresses of all possible subdomains.

For example, to run a Chrome container allowing only access to the turbo.net and blog.turbo.net domains, you can use the command:

```
> turbo try --route-block=ip --route-add=ip://turbo.net --route-add=ip://blog.turbo.net chrome https://turbo.net
```

Wildcards are supported in host name routing. So, for example, to unblock turbo.net and all of its subdomains, use the expression:

```
> turbo try --route-block=ip --route-add=ip://*.turbo.net chrome https://blog.turbo.net
```

Or, to run a Chrome container disallowing access to the facebook.com domain and all of its subdomains:

```
> turbo try --route-block=ip://*.facebook.com chrome
```

Another option is to use an INI based **route-file** which defines rules for blocking and allowing network traffic. The example below blocks all network traffic and then unblocks 192.168.198.0/24 and all turbo.net and spoon.net subdomains:

```
[ip-block]
*
[ip-add]
192.168.198.0/24
*.turbo.net
*.spoon.net
```

To create a firefox container with above **route-file** use this command:

```
turbo try --route-file=c:\turbo-rules.txt firefox https://turbo.net
```

If a large list of hostnames is used, such as in the `turbobrowsers/block-ad-routes` image, the default behavior as described above of resolving all of them to IP addresses at the start of the container would cause container startup to take too long. It can be overriden with the `PreResolveHostNames=false` setting in a route file, as shown below:

```
[settings]
PreResolveHostNames=false`
[ip-block]
adserver1.com
adserver2.com
...
```

### Adding Custom Name Resolution Entries

All containers use name resolution provided by the host operating system. You can add specific name resolution overrides using the `--hosts` flag. The syntax is similar to that of the `hosts` file of the operating system.

```
# Make name my-test-service resolve to whatever the name
# test-service-43 resolves
> turbo try --hosts=my-test-service:test-service-43 <image>

# Make name mysite.net resolve to IPv4 address 127.0.0.1 and
# name ipv6.mysite.net resolve to IPv6 address ::1
> turbo try --hosts=127.0.0.1:mysite.net --hosts=::1:ipv6.mysite.net <image>
```

### Using Startup Triggers

Images can be created with TurboScript that have multiple startup files. Collections of startup files can be linked together by a trigger name and executed together.

```
# in turbo.me file to create "test-trigger" image...
startup file ["c:\windows\system32\notepad.exe", "c:\windows\regedit.exe"]
startup file doc=[("c:\windows\system32\notepad.exe", "c:\doc\welcome.txt"), ("c:\windows\system32\notepad.exe", "c:\doc\howto.txt")]


# from command-prompt...

# launch both notepad and regedit are launched
> turbo try test-trigger

# launch welcome.txt and howto.txt in notepad
> turbo try test-trigger --trigger=doc
```

### Using Mount
The `mount` option provides a way to mount folders from the host into the container, giving access to resources from the host system.
If the source folder doesn't exist, the `mount` option is ignored. If the target folder doesn't exist, it is created.

Example for mounting a folder.

```
turbo try --mount "C:\FolderOnHostSystem=C:\FolderInContainer" clean
```

Mounts are useful to share a cache folder, like a local Maven repository:
```
turbo try --mount "%USERPROFILE%\.m2=%USERPROFILE%\.m2" jdk,maven
```

Mounting multiple folder is done by repeating the mount parameter:

```
turbo try --mount "C:\Mount1=C:\InContainer1" --mount "C:\Mount2=C:\InContainer2" clean
```

It is also possible to mount a folder from another container:

```
turbo try --mount <containerid>:"C:\FolderInSourceContainer=C:\FolderInTargetContainer" clean
```

### Exit code

When the container stops, the exit code of startup file is displayed in decimal form.

### Selecting VM version

A specific VM version can be selected by using the `--vm=version` flag. If the selected version is lower than the minimum version that is required by turbo.exe, then the minimum version will be used instead.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `container` array with information about created container or an `error` object if command failed.

### Auto Update
The `try` command checks once a day for new image releases. Specify the `--pull` option to force checking for the latest release.
Updates are download within the specified release: `turbo try firefox` updates to the latest Firefox. 
`turbo try firefox:42` updates to the Firefox within release 42, like 42.0, 42.1 42.2 etc.
