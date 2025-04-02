# config

The `config` command displays and allows modification of the current configuration settings.

```
Usage: config <options>

<options> available:
      --add-trusted-source=VALUE    Add a source hub to the trusted sources list. Use * to trust all hubs by default.
      --all                         Prints all configuration values
      --all-users                   Applies the configuration settings to All Users
      --as-inherit                  Sets the All Users settings as the inherited values which can be overridden by the
                                      user
      --as-override                 Sets the All Users settings as the values which override the user values
      --block-trusted-source=VALUE  Add a source hub to the blocked sources list. Use * to block all hubs by default.
      --container-path=VALUE        Overrides session storage to the specified path
      --debug-vm-path=VALUE         Path to debug VM
      --disable=VALUE               Disables a feature: DirectDownload, MergeIsolation, TurboDrive, LocalNetworkAccess,
                                      ExecutableCache, AutoPrecache, Subscriptions, AutoRegister, Offline,
                                      RemoteSandbox, P2PDownload
      --domain=VALUE                The domain to log into
      --enable=VALUE                Enables a feature: DirectDownload, MergeIsolation, TurboDrive, LocalNetworkAccess,
                                      ExecutableCache, AutoPrecache, Subscriptions, AutoRegister, Offline,
                                      RemoteSandbox, P2PDownload
      --format=VALUE                Use the specified format for output. Supported values: json, json-stream
      --gc-expiration=VALUE         The number of days a session can be unused before it can be garbage collected. Set
                                      to 0 to disable.
      --gci-expiration=VALUE        The number of days an image can be unused before it can be garbage collected. Set
                                      to 0 to disable.
      --gci-interval=VALUE          The number of minutes between automatic image garbage collection checks. Set to 0
                                      to disable.
      --gc-interval=VALUE           The number of minutes between automatic session garbage collection checks. Set to 0
                                      to disable.
      --image-cache-size=VALUE      Limits the maximum image cache size, in megabytes. Set to 0 for unlimited.
      --image-path=VALUE            Overrides image storage to the specified path. Supported values: full path, or "
                                      allusers" to use the system wide shared folder.
      --no-domain-verify            Disables verification of the domain. Setting the domain without verification may
                                      result in slower performance during runtime and is not recommended.
      --p2p-max-download-speed=VALUE Maximum P2P download speed in KB/s (0 for unlimited)
      --p2p-max-upload-speed=VALUE  Maximum P2P upload speed in KB/s (0 for unlimited)
      --permission=VALUE            Specifies the permission for the affected settings. Supported values: inherit, write
      --remote-sandbox-path=VALUE   Path to remote sandbox storage
      --remove-trusted-source=VALUE Remove a source hub from the trusted sources list. Use * to restore default
                                      behavior.
      --reset                       Reset configuration to default values
      --storage-path=VALUE          Path to local session and image storage
      --subscription-interval=VALUE The number of minutes between subscription update checks. Defaults to 20 minutes.
      --support-contact=VALUE       Sets custom support contact text to replace the default "Please contact support@
                                      turbo.net". Use "default" to revert or an empty string to remove the message.
      --using=VALUE                 Use specified images as temporary dependencies
      --wait-after-error            Leave session open after error
      --wait-after-exit             Leave session open after it exits
```

If `turbo config` is executed without command line parameters then the current settings are returned. 

To modify any settings, specify them as command line flags and assign a value to the flag. This value will then be applied to that setting. 

## Change the Server

The server that Turbo will connect to, and thus push to and pull from, can be configured with the `--domain` flag.

By default, Turbo is configured to connect to `https://turbo.net`.

## Change the Storage Path

The storage path points to the directory where images and containers are saved. By default, images and containers are saved in `%LOCALAPPDATA%\Turbo\Containers`.  Use the `--storage-path` flag to set the storage path to a different location.

Storage paths can be based off of an environment variable. Please ensure when entering the environment variables from a command prompt it is escaped otherwise the command prompt will resolve the variable: `turbo config --storage-path=^%APPDATA^%\Turbo --all-users`

It may be more efficient to share a repository of images in multi-user environment while keeping container storage in a separate, per user location.

Use the `--container-path` flag to specify a new location for container storage.

Finally, the storage path can also be overwritten by the `TURBOREPO` environment variable which may be useful for testing an alternate location quickly without updating the client configuration.

## Set the Image Cache Size

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

## Configure Auto-Precache

Auto-precache controls whether font and DLL caching is automatically performed when images are acquired through pull, import, or subscribe commands. As of version 25.1.19.1661, this feature is disabled by default.

To enable auto-precache:
```
# Enable automatic font and DLL caching
> turbo config --enable=AutoPrecache

# Disable automatic font and DLL caching (default)
> turbo config --disable=AutoPrecache
```

## Example

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

## Enable Turbo Drive

Turbo Drive is a special drive (T:) mounted in your system, which allows you to access your cloud storage accounts. Turbo Drive requires WinFSP to be installed in the system, and a Cloud Storage accounts to be configured in the Turbo Server. Turbo Drive uses a persistent cache to make working with the cloud files faster. The cache is located in the encrypted (EFS) folder at `%TEMP%\TURBO\cmd\turbo-drive`.

To enable Turbo Drive, run `turbo config --enable=TurboDrive`.

## Resetting Config Settings

The configuration settings for Turbo can be reset to their default values by issuing the config command with the `--reset` flag.

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `configuration` object with information about configuration or an `error` object if command failed.

## Set the Remote Sandbox Path

The remote sandbox path specifies the location where secured, sandboxed files are stored. This feature enhances security by storing isolated folders and files in a location inaccessible to end users, protecting important intellectual property such as software source code files.

To set the remote sandbox path:

```
> turbo config --remote-sandbox-path=C:\ProgramData\Turbo\RemoteSandbox --all-users
Remote sandbox path: C:\ProgramData\Turbo\RemoteSandbox (inherited by administrator)
```

Note: The remote sandbox feature must be enabled separately using the `--enable=RemoteSandbox` flag.

## Customize Support Contact Information

The support contact setting allows you to customize the error message that users see when they encounter issues. This is particularly useful for organizations that want to direct users to their own helpdesk rather than Turbo's support.

To set a custom support contact message:

```
> turbo config --support-contact="Please contact your IT helpdesk for assistance."
Support contact message: Please contact your IT helpdesk for assistance.
```

To remove the support contact message entirely:

```
turbo config --support-contact=""
Support contact message:
```

This setting allows organizations to maintain control over their support processes and ensure that end users are directed to the appropriate resources when they need assistance.
