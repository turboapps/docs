### config

The `config` command displays and allows modification of the current configuration settings.

```
Usage: turbo config <options>

<options> available:
      --add-trusted-source=VALUE    Resources.Config_Help_AddTrustedSource
      --all-users                   Applies the configuration settings to all users
      --as-inherit                  Sets the all users settings as the inherited values which can be overridden by the user
      --as-override                 Sets the all users settings as the values which override the user values
      --block-trusted-source=VALUE  Resources.Config_Help_AddTrustedSource
      --container-path=VALUE        Overrides container storage to the specified path
      --debug-vm-path=VALUE         Path to debug VM
      --disable=VALUE               Disables a feature: DirectDownload, MergeIsolation, Redirector, TurboDrive, LocalNetworkAccess
      --enable=VALUE                Enables a feature: DirectDownload, MergeIsolation, Redirector, TurboDrive, LocalNetworkAccess
      --format=VALUE                Use the specified format for output. Supported values: json
      --hub=VALUE                   The remote hub to log into
      --image-cache-size=VALUE      Limits the maximum image cache size, in megabytes. Set to 0 for unlimited
      --image-path=VALUE            Overrides image storage to the specified path. Supported values: full path, or "allusers" to use the system wide shared folder
      --remove-trusted-source=VALUE Resources.Config_Help_AddTrustedSource
      --reset                       Reset configuration to default values
      --storage-path=VALUE          Path to local container and image storage
      --using=VALUE                 Use specified images as temporary dependencies
      --wait-after-error            Leave process open after error
      --wait-after-exit             Leave process open after it exits
```

If `turbo config` is executed without command line parameters then the current settings are returned. 

To modify any settings, specify them as command line flags and assign a value to the flag. This value will then be applied to that setting. 

#### Change the Hub Server

The hub server that Turbo will connect to, and thus push to and pull from, can be configured with the `--hub` flag. 

By default, Turbo is configured to connect to **https://turbo.net/hub**.

#### Change the Storage Path

The storage path points to the directory where images and containers are saved. By default, images and containers are saved in **%LOCALAPPDATA%\Turbo\Containers**.  Use the `--storage-path` flag to set the storage path to a different location.

It may be more efficient to share a repository of images in multi-user environment while keeping container storage in a separate, per user location. 

Use the `--container-path` flag to specify a new location for container storage.

Finally, the storage path can also be overwritten by the `TURBOREPO` environment variable which may be useful for testing an alternate location quickly without updating the client configuration. 

### Set the Image Cache Size

The image cache size flag will set the amount of disk space local images will consume before deleting lesser prioritized images. Set the value to 0 for unlimited cache size. The default value unlimited. 

```
> turbo config 
Image cache size: unlimited

# Set cache size to 2 GB
> turbo config --image-cache-size=2048
Image cache size: 2.00 GB

# Back to unlimited
> turbo config --image-cache-size=0
Image cache size: unlimited
```
##### Example

```
# Set container and image root path to C:\ProgramData\Turbo\Containers
> turbo config --storage-path=C:\ProgramData\Turbo\Containers

# Set the container storage path to %LOCALAPPDATA%\Turbo\Containers\sandboxes
> turbo config --container-path=%LOCALAPPDATA%\Turbo\Containers\sandboxes

> turbo config
Hub server: https://turbo.net/
Storage path: C:\ProgramData\Turbo\Containers
Container storage path: C:\Users\matt\AppData\Local\Turbo\Containers\sandboxes
Browser redirection: enabled

# Switch storage path to %LOCALAPPDATA%\Turbo\Containers\repo\images
# Keep container storage path in %LOCALAPPDATA%\Turbo\Containers\sandboxes
> SET TURBOREPO=%LOCALAPPDATA%\Turbo\Containers

# Sets the image repository storage path to C:\ProgramData\Turbo\Containers for all users
> turbo config --image-path=allusers --all-users
```

#### Resetting Config Settings

The configuration settings for Turbo can be reset to their default values by issuing the config command with the `--reset` flag.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `configuration` object with information about configuration or an `error` object if command failed.
