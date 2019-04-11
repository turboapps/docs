### Repository Settings

This section will describe the different settings you can apply to the repository. Any workspace application created from a repository will inherit these settings. If an organization dashboard has a direct reference to launch a repository, the session will inherit these settings as well.


#### Sessions are persistent

When enabled, the application's session state will automatically be synchronized to Turbo.net. This allows the state to be saved and continued automatically across multiple devices.


#### Access local user folders

When enabled, the application will be able to access the host device's local user folders. This includes user folders such as Desktop, Downloads, Documents, Music, Pictures, and Videos.


#### Enable URL redirection

When enabled, users using the Turbo URL Redirector Extension will automatically be routed to this virtual application when a accessing certain websites from their native browser.

For more information on installing and configuring the URL redirection extension, see [Browser Redirector](/docs/deploying/integration-tools#browser-redirector)


#### Isolate network

When enabled, the application will run in a virtualized network environment. This environment is unique per application, and is isolated from the host's network.

For more granular network isolation settings, see [Virtual Networks](/docs/reference#new-virtual-networks)


#### Access local network

When enabled, this setting allows a remote application session to access the local host's network. The local host's network can be accessed by using the special hostname `localhost.turbo.net`.

`Enable`: Enables remote access to the local network.  
`Disable`: Disables remote access to the local network.  
`None`: Uses the client's settings to control local network access.  
