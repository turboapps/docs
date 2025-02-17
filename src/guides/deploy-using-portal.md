# Deploy Using Portal

This guide covers deploying virtual applications through the Turbo Server portal, enabling browser-based access to your applications through HTML5.

::: tip Prerequisites
Before proceeding with this guide, ensure you have:
- Turbo Server installed and configured
- Workspaces set up with applications
- [Application servers](/guides/server/application-servers.md) configured for HTML5 streaming
- Modern HTML5-compatible web browser
- Network access to your Turbo Server
:::

::: tip What you'll learn
- Configuring portal access
- Running applications in HTML5
- Managing portal sessions
:::

## Portal Access

### Accessing the Portal

1. Navigate to your portal URL:
   ```
   https://[your-server-domain]
   ```

2. Log in with your Turbo Server credentials

3. Access your available workspaces

For detailed portal configuration, see [Portal Administration](/server/portal/).

### Running Applications

Applications can be launched directly from your browser:

1. Select a workspace
2. Click on an application
3. Right click to see available launch or install options

::: warning Application Server Required
Running applications in HTML5 requires properly configured [application servers](/guides/server/application-servers.md). Ensure your application servers are set up before attempting HTML5 streaming.
:::

## Portal Features

### HTML5 Client

The HTML5 client provides:
- Cross-platform compatibility
- No client installation required
- Full application functionality

See [HTML5 Client Documentation](/server/portal/html5-client.md) for details.

### User Settings

Configure your portal experience:
- Display preferences
- Language settings
- Session defaults
- Storage options

See [User Settings](/server/portal/user-settings.md) for configuration options.