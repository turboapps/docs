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

The Turbo CLI provides powerful control over application execution. Here's a typical workflow:

```bash
# Pull an application image
turbo pull firefox

# Run the application
turbo run firefox

# List running sessions
turbo ps

# Stop a running session
turbo stop <session-id>

# Remove session and its sandbox
turbo rm <session-id>

# Remove the application image
turbo rmi firefox
```

Additional command options:
```bash
# Run a specific version
turbo run firefox:68.0.2

# Run with custom parameters
turbo run firefox -- -private-window

# Layers runtime dependencys
turbo run java,firefox
```

### File System Isolation

Turbo supports multiple isolation modes to control how applications interact with the host system:

```bash
# Complete isolation from host
turbo run --isolate=full myapp

# Read from host, isolated writes
turbo run --isolate=write-copy myapp

# Full read/write access
turbo run --isolate=merge myapp

# Isolated system, merged user folders
turbo run --isolate=write-copy+merge-user myapp
```

The merge-user modifier affects:
- Desktop
- Documents
- Pictures
- Downloads
- Music
- Videos
- Templates

### Troubleshooting
1. Check running sessions:
   ```bash
   turbo ps
   ```

2. View application session logs:
   ```bash
   turbo logs <session-id>
   ```

3. View Turbo system logs:
   ```
   # Located in %localappdata%\Turbo\Logs
   # Contains detailed logs about Turbo operations
   ```

4. Reset an application:
   ```bash
   turbo stop <session-id>
   turbo rm <session-id>
   turbo run <application>
   ```

### The Turbo.net Hub

The [Turbo.net Hub](https://hub.turbo.net) is a public repository of pre-configured applications maintained by the Turbo App Lab team. It provides:
- Thousands of ready-to-use applications
- Multiple versions of popular software
- Regular updates and maintenance

## Next Steps

Now that you're familiar with basic Turbo operations, you can:

1. [Learn advanced usage](advanced.md) for creating and customizing environments
2. Explore the [Client documentation](/client/) for detailed command reference and features
3. Learn about [Studio](/studio/) to create your own virtual applications
4. Set up [Server](/server/) for enterprise deployment
5. Review [deployment options](/guides/) for various scenarios