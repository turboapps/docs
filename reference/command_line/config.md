### config

The `config` command displays and allows modification of the current configuration settings.

```
Usage: turbo config <options>

<options> available:
      --container-path=VALUE       Overrides container storage to the specified path
      --debug-vm-path=VALUE        Path to debug VM
      --disable-redirector         Disable browser redirection
      --enable-redirector          Enable browser redirection
      --format=VALUE               Use the specified format for output. Supported values: json
      --hub=VALUE                  The remote hub to log into
      --reset                      Reset configuration to default values
      --startup-file-default=VALUE Overrides the default startup file if the main image does not have one
      --storage-path=VALUE         Path to local container and image storage
      --using=VALUE                Use specified images as temporary dependencies
      --wait-after-error           Leave process open after error
      --wait-after-exit            Leave process open after it exits
```

If `turbo config` is executed without command line parameters then the current settings are returned. 

To modify any settings, specify them as command line flags and assign a value to the flag. This value will then be applied to that setting. 

#### Change the Hub Server

The hub server that Turbo will connect to, and thus push to and pull from, can be configured with the `--hub` flag. 

By default, Turbo is configured to connect to **https://turbo.net/hub**.

#### Resetting Config Settings

The configuration settings for Turbo can be reset to their default values by issuing the config command with the `--reset` flag.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `configuration` object with information about configuration or an `error` object if command failed.