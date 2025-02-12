# Getting Started with Turbo

This guide will walk you through installing Turbo and running your first applications.

::: tip What you'll learn
- How to install the Turbo client
- Running applications using the CLI
- Basic operations and best practices
- Enterprise deployment options
:::

## Installation

### System Requirements
- Windows 7 SP1 or later
- 2GB RAM (4GB recommended)
- 1GB free disk space (additional space required for applications)

### Installing the Client

1. Download [Turbo for Windows](https://turbo.net/download)
2. Run the installer with optional command line flags:
   - `--silent`: Install silently
   - `--all-users`: Install for all users on the machine

3. If using Turbo Server, configure your domain and sign in:
   ```bash
   # Configure your Turbo Server domain
   turbo config --domain={your domain}
   
   # Sign in to your account
   turbo login
   ```

For more detailed installation options and advanced configuration, see the [Client documentation](/client/).

## Running Applications

### Using the Command Line

The Turbo CLI provides powerful control over application execution. Here are some common commands:

```bash
# Run the latest version of an application
turbo run firefox

# Run a specific version
turbo run firefox:68.0.2

# Run with custom parameters
turbo run firefox -- -private-window

# List running instances
turbo containers

# Stop an instance
turbo stop <container-id>
```

### The Turbo.net Hub

The [Turbo.net Hub](https://hub.turbo.net) is a public repository of pre-configured applications maintained by the Turbo App Lab team. It provides:
- Thousands of ready-to-use applications
- Multiple versions of popular software
- Regular updates and maintenance

::: tip Enterprise Users
For enterprise deployments, [Turbo Server](/server/) provides:
- Web portal for flexible application delivery
  - Stream applications directly in the browser
  - Install applications locally
  - Run applications on-demand
- Workspace-based application management
- Automatic application updates through workspace subscriptions
- Federation with the public hub for application updates
- User access controls
- Usage analytics
:::

## Working with Virtual Environments

### Version Management

You can run specific versions of applications:

```bash
# Run latest version (evergreen)
turbo run nodejs

# Run specific version
turbo run nodejs:14.17
```

This is particularly useful for:
- Testing with different versions
- Supporting legacy applications
- Ensuring consistent environments

### Using Multiple Applications

Turbo's layering system allows you to combine multiple applications:

```bash
# Run Node.js with specific tools
turbo run nodejs,git,vscode
```

## Best Practices

### Security
- Use secure sandboxes for sensitive applications
- Keep the Turbo client updated
- Follow your organization's security policies

### Performance
- Clean up unused instances regularly
- Use local execution when possible
- Consider resource usage in VDI environments

### Troubleshooting
1. Check application status:
   ```bash
   turbo containers
   ```

2. View logs:
   ```bash
   turbo logs <container-id>
   ```

3. Reset an application:
   ```bash
   turbo rm <container-id>
   turbo run <application>
   ```

## Next Steps

Now that you're familiar with basic Turbo operations, you can:

1. [Learn advanced usage](advanced.md) for creating and customizing environments
2. Explore the [Client documentation](/client/) for detailed command reference and features
3. Learn about [Studio](/studio/) to create your own virtual applications
4. Set up [Server](/server/) for enterprise deployment
5. Review [deployment options](/deploying/) for various scenarios

::: tip Enterprise Deployment
Looking to deploy Turbo in your organization? [Turbo Server](/server/) provides enterprise features like:
- Flexible application delivery through web portal
- Workspace-based application management
- Automatic updates through workspace subscriptions
- Federation with the public hub
- Advanced security and management features
:::
