## Repository Settings

This section will describe the different settings you can apply to the repository. Any workspace application created from a repository will inherit these settings. If an organization dashboard has a direct reference to launch a repository, the session will inherit these settings as well.


### Sessions are persistent

Persistent sessions automatically synchronize the application state and settings with Turbo.net. This allows your state and settings to be preserved automatically across multiple sessions and devices.

Typically this setting should be enabled in order to prevent loss of data.


### Access local user folders

This setting allows the application to access the host device's local user folders. This includes user folders such as Desktop, Downloads, Documents, Music, Pictures, and Videos.

For applications executing on a remote host, it is recommend that you access your files by connecting a [Cloud Storage Service](/docs/getting-started/accessing-files#cloud-storage-services).


### Enable URL redirection

When enabled, users using the Turbo URL Redirector Extension will automatically be routed to this virtual application when a accessing certain websites from their native browser.

For more information on installing and configuring the URL redirection extension, see [Browser Redirector](/docs/deploying/integration-tools#browser-redirector).


### Isolate network

Network isolation runs applications in a virtualized network environment. This environment is unique per application, and is isolated from the host's network.

If you expect multiple users to be running on the same host, it is recommended that you disable this setting to prevent cross-session network access.

For more granular network isolation settings, see [Virtual Networks](/docs/reference#new-virtual-networks).


### Use DLL Cache

This setting enables pre-caching of application DLL and EXE files on the Application Servers’ local disk for faster loading.  

Typically this setting will be disabled, in which case the DLL and EXE files are embedded in the SVM and loaded from the Image Cache Server.  


### Access local network

Local network access allows a remote application to access the local host's network. The local host's network can be accessed by using the special hostname `localhost.turbo.net`.

`Enable`: Enables remote access to the local network.  
`Disable`: Disables remote access to the local network.  
`None`: Uses the client's settings to control local network access.  


### Using

Images added to the using field are included as temporary dependencies during application execution. These images are not committed to the final image, and are not included when continuing a session unless specified.

You may add multiple images by using a comma delimiter: `example/using-1,example/using-2`.


### Components

Components are added to the base image as layers. These layers will be committed to the final image, and are included when continuing a session.

Components must be enabled to be included during execution. Disabled components are for display purposes only, they are shown on the repo settings page and application settings dialog.


### VM version

The VM version is a version string that specifies which Turbo VM version will be used for execution. 

Typically this field should be left empty so that you are automatically updated to the latest VM version. This should only be used for known VM incompatibilities.

If the specified version is lower than the minimum version that is required by turbo.exe, then the minimum version will be used instead.
