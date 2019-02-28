## TurboPlay
TurboPlay is a command line based window wrapper application to Turbo applications.


### Executing Turbo Commands
Users may execute turbo commands from turboplay which will provide windows graphical interface instead of the command prompt.

    > turboplay turbo run --format=rpc my-image

User can also pass in a text file as the argument which contains a turbo command.

    > turboplay turbo C:\Users\[user]\AppData\Local\Turbo\Containers\shortcuts\My App.txt
 
Additional flags:
```
      --quiet                            Hide all graphical user interfaces until the application launches
      --start-progress-ui-immediately    Shows the status dialog immediately before any events are detected from the underlying Turbo.exe
      --wait-for-window                  Status dialog remains until the application's main UI shows 
      --delete-cmd-file                  Deletes the cmd file if specified immediately after reading it. Todo: remove 
      --enable-full-removal              Todo: remove
      --app-title                        Sets the title of the status dialog
      --debug-vm                         Overrides the path to the vm
      --log                              Specifies location of log file
      --startup-file                     Passes through startup file to turbo.exe
      --startup-verb                     Passes through startup verb to turbo.exe
      --isolate                          Passes through isolation setting to turbo.exe
      --merge-file                       Passes through merge file setting to turbo.exe
```
 
Additional Notes:
1. Turbo CLI flag `--wait-after-(error|exit)` is ignored because it causes the process to hang waiting for input that will never come.
2. Turbo CLI flag `--format=rcp` is automatically passed in in order to parse the output.
3. `--show-eula-for-rpc` is automatically passed and displayed to the user in a window if a EULA exists for an application.
	
### Turbo URI scheme

The Turbo protocol directs TurboPlay to execute a local execution of an application, or connects to a remote application server capable of launching a Turbo application.

```
turbo://{portalAuthority}/{configPath}?t={type}&h={hash}&v={version}

portalAuthority                          domain which must be trusted by the user from which the configuration comes from
path                                     path of the service, typically 'config'
type                                     config for launching a local application or remoteAppConfig for connecting to a remote application
hash                                     hash of the configuration, to ensure its contents are not tampered with
version                                  currently at 1
```

Configuration type example:

`turbo://turbo.net/config?t=config&h=sha256:e28dd1863f82e6b2f46303311540ae194045a58756cd1c4fbbbc4c778021bc84&v=1`

The json format of a `config` type is

```
{
  "id":"2b68b3de-51e2-4a60-b822-bd810a55146f",
  "repoId":"mozilla/firefox",
  "appTitle":"Firefox",
  "verb":"try",
  "isolation":"full",
  "isolateNetwork":false,
  "routes":[],
  "redirectedDomains":[],
  "adGroupPermissions":[],
  "startupFile":"",
  "vm":"",
  "layers":[],
  "using":[],
  "sync":false,
  "tnlr":false,
  "enableRemoteCommands":true,
  "v":"1"
}
```

RemoteAppConfig type example:

`turbo://turbo.net/config?t=remoteAppConfig&h=sha256:51d021ef9da4ee6c7910a4d5f19325fba77888ba94255ab67e0e4c0d8053fa6d&v=1`

The json format of the `remoteAppConfig` type is

```
{
  "v":1,
  "sessionId":"e3e9df43-8f1e-4b0c-a371-8080b67cbc66",
  "host":"192.0.2.1",
  "auth":{
    "user":"randomWindowsUser",
    "password":"randomWindowsPassword"
  },
  "app":"turboplay",
  "args":"turbourl turbo://config.to/run"
}
```

The legacy Turbo URI scheme is in the format of turbo://[Ip]?[query].

The query parameters are:
```
type                                     rdp or local
rdpUsername                              the username on the remote system executing turbo 
rdpPassword                              the password on the remote system executing turbo
remoteAppMode                            set value to 1 for RemoteApp rdp
remoteAppProgram                         set this to %7C%7Cturboplay
remoteAppCmdLine                         the arguments sent to the remote TurboPlay
tnlrUrl                                  URL of the remote tnlr service which allows the remote application to connect to the local network
tnrlUsername                             tnlr username
tnlrPassword                             tnlr password
```



### Turbo RDP
TurboPlay can connect and execute a TurboPlay command on the remote desktop without a Turbo URI scheme.

    > turboplay rdp [Ip] [rdpUsername] [rdpPassword] [remoteAppProgram] [remoteAppCmdLine]

Tnrl support is not available in this mode.

### Turboplay Legacy Usage
TurboPlay can execute Legacy Turbo applications from a config or model URL

```
    /config           The URL to an application configuration to execute
    /model            The UNC path to a streaming model to execute
    /xsandboxname
    /xsandboxpath     The path to the app sandbox (required with the /model flag)
    /register
    /cachemode        The local path where the fully streamed application is to be cached (only valid with the /model flag and is required).
    /clientconfig
    /xvm
```

