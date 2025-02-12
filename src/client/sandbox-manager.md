# Turbo Sandbox Manager

The Turbo Sandbox Manager is a core component of the Turbo Client that runs as a background service, managing various aspects of the virtualization environment.

## Overview

The Sandbox Manager provides several critical functions:
- Automatic subscription management
- Client auto-updates (for non-all-users installations)
- Secure sandbox management
- TDrive mount management
- Background garbage collection

## Installation Modes

The Sandbox Manager operates in two modes:

### Single User Mode
- Installed in user's profile directory
- Manages auto-updates for the client
- Handles desktop integration and shortcuts
- Manages workspace subscriptions
- Runs with user privileges

### All Users Mode
- Installed in Program Files directory
- Requires administrative privileges for installation/uninstallation
- No auto-update functionality
- Manages system-wide settings
- Runs with system privileges

## Key Features

### Subscription Management

The Sandbox Manager automatically manages workspace subscriptions:

- Periodically checks for updates (configurable interval)
- Downloads new versions of subscribed applications
- Updates desktop integration and shortcuts
- Performs garbage collection of old versions
- Handles offline mode and retry logic

Configuration options:
```bash
# Enable/disable subscription management
turbo config --enable=Subscriptions

# Set update interval (in minutes)
turbo config --subscription-interval=60
```

### Auto-Registration

When enabled, automatically registers applications from subscriptions:

```bash
# Enable auto-registration (single user mode only)
turbo config --enable=AutoRegister
```

Features:
- Creates desktop shortcuts
- Updates file associations
- Manages Start Menu entries
- Cleans up old shortcuts

### Secure Sandboxes

The Sandbox Manager handles secure sandbox operations:
- Manages isolated execution environments
- Controls access to protected resources
- Handles sandbox storage locations
- Enforces security policies

Configuration:
```bash
# Enable remote sandbox feature
turbo config --enable=RemoteSandbox

# Set sandbox storage location
turbo config --remote-sandbox-path=C:\ProgramData\Turbo\RemoteSandbox --all-users
```

### TDrive Management

Manages the Turbo Drive (T: drive) functionality:
- Mounts virtual drives
- Handles file system isolation
- Manages access permissions
- Provides consistent access to virtualized files

## Best Practices

1. Installation Mode Selection:
   - Use all-users mode for enterprise deployments
   - Use single-user mode for individual workstations

2. Subscription Management:
   - Enable auto-registration for seamless updates
   - Configure appropriate update intervals
   - Consider offline mode requirements

3. Security:
   - Configure secure sandbox locations
   - Use appropriate isolation settings
   - Follow principle of least privilege

4. Maintenance:
   - Monitor log files for issues
   - Regularly clean up unused resources
   - Keep client updated

::: tip Note
The Sandbox Manager automatically handles many maintenance tasks, but administrators should monitor its operation and adjust settings as needed for their environment.
:::

## Related Topics

- [Security Settings](/client/security)
- [Configuration Options](/client/command-line/config)
- [Workspace Management](/client/command-line/subscription)
