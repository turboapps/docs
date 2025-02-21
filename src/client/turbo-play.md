# Turbo Play

Turbo Play serves two main functions:
1. A graphical UI wrapper around turbo.exe commands, providing a user-friendly interface for launching and managing Turbo applications
2. An RDP-based streaming client that enables users to connect to remote application servers and stream Turbo applications

## Local Application Launching

When used locally, Turbo Play provides a graphical interface for turbo.exe commands instead of using the command prompt:

```
> turboplay turbo run --format=rpc my-image
```

Users can also pass a text file containing a turbo command:

```
> turboplay turbo C:\Users\[user]\AppData\Local\Turbo\Containers\shortcuts\My App.txt
```

### Launch Options

```
      --quiet                            Hide all graphical user interfaces until the application launches
      --start-progress-ui-immediately    Shows the status dialog immediately before any events are detected from the underlying Turbo.exe
      --wait-for-window                  Status dialog remains until the application's main UI shows 
      --delete-cmd-file                  Deletes the cmd file if specified immediately after reading it
      --app-title                        Sets the title of the status dialog
      --debug-vm                         Overrides the path to the vm
      --log                              Specifies location of log file
      --startup-file                     Passes through startup file to turbo.exe
      --startup-verb                     Passes through startup verb to turbo.exe
      --isolate                          Passes through isolation setting to turbo.exe
      --merge-file                       Passes through merge file setting to turbo.exe
```

**Note**: 
- Turbo CLI flag `--wait-after-(error|exit)` is ignored as it requires input that cannot be provided through the UI
- `--format=rcp` is automatically added to parse output
- `--show-eula-for-rpc` is automatically added to display EULAs in a window if they exist

## Application Streaming

Turbo Play can connect to remote application servers to stream Turbo applications using RDP. This is handled through either the Turbo URI scheme or direct RDP connection.

## Turbo URI Scheme

The Turbo protocol directs Turbo Play to either:
- Execute a local application
- Connect to a remote application server for streaming

```
turbo://{portalAuthority}/{configPath}?t={type}&h={hash}&v={version}

portalAuthority                          domain which must be trusted by the user from which the configuration comes from
path                                     path of the service, typically 'config'
type                                     config for launching a local application or remoteAppConfig for connecting to a remote application
hash                                     hash of the configuration, to ensure its contents are not tampered with
version                                  currently at 1
```

### Local Configuration Example

`turbo://turbo.net/config?t=config&h=sha256:e28dd1863f82e6b2f46303311540ae194045a58756cd1c4fbbbc4c778021bc84&v=1`

The json format for local configuration:

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

### Remote Configuration Example

`turbo://turbo.net/config?t=remoteAppConfig&h=sha256:51d021ef9da4ee6c7910a4d5f19325fba77888ba94255ab67e0e4c0d8053fa6d&v=1`

The json format for remote configuration:

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

## Direct RDP Connection

Turbo Play can connect directly to a remote desktop to execute commands:

```
> turboplay rdp --rdp-host=<hostname> --rdp-program=<remoteAppProgram> --rdp-user=<rdpUsername> --rdp-password=<rdpPassword>
```

Required parameters:
```
--rdp-host=<hostname>
```

Optional parameters:
```
--rdp-domain=<logon user's domain>
--rdp-user=<logon user>
--rdp-password=<logon password>
--rdp-program=<program to run, defaults to cmd.exe>
--rdp-cmd=<remoteapp cmdline args>
--rdp-port=<rdp port, default 3389>
```

## Legacy Support

Turbo Play maintains support for legacy applications through config and model URLs:

```
    /config           The URL to an application configuration to execute
    /model            The UNC path to a streaming model to execute
    /xsandboxname
    /xsandboxpath     The path to the app sandbox (required with the /model flag)
    /register
    /cachemode        The local path where the fully streamed application is to be cached (only valid with the /model flag and is required)
    /clientconfig
    /xvm
```