# Introduction to Using Portal

This guide is intended for end users accessing applications through the Turbo Server portal, particularly in environments where devices are not under organizational control (such as personal devices, BYOD workstations, or remote work scenarios). The portal provides flexible access to applications and files through any web browser, without requiring pre-configured devices or managed infrastructure. For administrators setting up and managing the portal, refer to the [Workspace Administration](/server/administration/workspaces.html) and [Portal Appearance](/server/administration/general.html#appearance) documentation.

::: tip Note to Administrators
This is an end-user guide that you can share with your users once you have:
1. [Installed and configured Turbo Server](/guides/server/index.md)
2. [Set up workspaces](/guides/server/workspaces.md) with applications
3. [Configured application servers](/guides/server/application-servers.md) for HTML5 streaming

Simply provide your users with:
- Your Turbo Server URL (e.g., https://turbo.yourcompany.com)
- Their login credentials
:::

::: tip What you'll learn
Through the portal, you'll learn how to:
- Access applications through any HTML5-compatible browser
- Launch applications directly or install them on Windows
- Connect your personal cloud storage providers
- Access shared storage (if configured by your administrator)
- Manage and use files directly within the portal
:::

::: tip Prerequisites
Before proceeding, ensure you have:
- Valid login credentials for your Turbo Server account
- Modern HTML5-compatible web browser
- Network access to your Turbo Server URL
- A Windows desktop (only required for local installation and running applications outside the browser)
:::

## Getting Started

### Accessing the Portal

1. Navigate to your Turbo Server URL:
   ```
   https://[your-server]
   ```
   The portal interface is the default landing page.

2. Log in with your Turbo Server credentials

3. You'll see the portal dashboard with your available workspaces

![Portal Dashboard](/images/dashboard-workspaces.png)

## Portal Navigation

After login, you'll be taken to your workspace:
- If your organization has multiple workspaces, select one
- Otherwise, you'll see the default workspace

The home tab shows:
- Recently used applications
- Recent files
- Quick access features

For detailed workspace navigation, see [Workspace Navigation](/server/portal/dashboard.html#workspace-navigation).

## Application Access

### Using the HTML5 Client

The HTML5 client provides browser-based access to applications:

::: warning Note About Application Servers
Application servers are required for HTML5 browser streaming or remote RDP access. Windows users can alternatively install and run applications locally through the portal without requiring application servers.
:::

- No client installation needed
- Cross-platform compatibility
- Full application functionality

For detailed HTML5 client features and settings, see [HTML5 Client Documentation](/server/portal/html5-client.html).

### Launching Applications

1. Navigate to the Applications tab

![Applications Tab](/images/dashboard.png)

2. Launch applications in several ways:
   - Left-click to launch with default settings
   - Right-click to access additional launch options
   - For Windows users, select "Install on My PC" to [install the application](/client/command-line/installi.md) on your desktop

::: tip Application Credentials
If your application requires login credentials, you can pre-configure them in your [user settings](/server/portal/user-settings.html#authentication). This allows for automatic login when launching applications.
:::

![Application Context Menu](/images/dashboard-context.png)

## Cloud Storage Integration

### Connecting Storage Providers

Access your files from various cloud storage providers:

1. Navigate to the Files tab
2. Click "Connect Storage"
3. Choose your storage provider
4. Follow the connection steps


For connection details, see [Cloud Storage Setup Guide](/server/cloud-storage/end-user.html#end-user)

### Using Cloud Storage Files

After connecting your storage providers, you can access your files in two ways:

1. Through the Files Browser:
   - Navigate through folders
   - Use the search function
   - Open files directly in applications
   - Download files locally
   - Upload new files
   - Delete files and folders

2. Through the T: Drive in Applications:
   - Cloud storage automatically maps to the T: drive
   - Access your files directly from within applications
   - Save files back to cloud storage seamlessly
   - Work with files as if they were local

::: tip
When you launch applications in the cloud, your connected cloud storage is automatically mapped to the T: drive, making it easy to access and save files directly from within your applications.
:::

![Files Browser](/images/file-browser.png)

For detailed information about working with files, see [Using Cloud Storage](/server/portal/dashboard.html#files).

## Best Practices

For the best portal experience:

- Use a modern, HTML5-compatible browser
- Ensure stable network connectivity
