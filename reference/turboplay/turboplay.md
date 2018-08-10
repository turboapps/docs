## TurboPlay
TurboPlay is a command line based window wrapper application to Turbo applications.


### Executing Turbo Commands
Users may execute turbo commands from turboplay which will provide windows graphical interface instead of the command prompt.

    turboplay turbo run --format=rpc my-image

User can also pass in a text file as the argument which contains a turbo command.

    turboplay turbo C:\Users\[user]\AppData\Local\Turbo\Containers\shortcuts\My App.txt
	
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
1. Turbo CLI flag `--wait-after-(error|exit) is ignored because it causes the process to hang waiting for input that will never come.
2. Turbo CLI flag `--format=rcp` is automatically passed in in order to parse the output.
3. `--show-eula-for-rpc` is automatically passed and displayed to the user in a window if a EULA exists for an application.
	
### Turbo URI scheme
TurboPlay is responsible for parsing the Turbo URI scheme in the format of turbo://[Ip]?[query].

The query parameters are:
1. type: rdp or local
2. rdpUsername: the username on the remote system executing turbo 
3. rdpPassword: the password on the remote system executing turbo
4. remoteAppMode: set value to 1 for RemoteApp rdp
5. remoteAppProgram: set this to %7C%7Cturboplay
6. remoteAppCmdLine: the arguments sent to the remote TurboPlay
7. tnlrUrl: URL of the remote tnlr service which allows the remote application to connect to the local network
8. tnrlUsername: tnlr username
9. tnlrPassword: tnlr password

### Turbo RDP
TurboPlay can connect and execute a TurboPlay command on the remote desktop without a Turbo URI scheme.

`turboplay rdp [Ip] [rdpUsername] [rdpPassword] [remoteAppProgram] [remoteAppCmdLine]`

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

