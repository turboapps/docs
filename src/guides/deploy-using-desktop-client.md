# Deploy Using Desktop Client

This guide covers deploying Turbo virtual applications directly to end-user desktops using Turbo Desktop Client. Learn how to set up and manage applications with or without network connectivity, providing flexible deployment options with full control over application delivery.

::: tip What you'll learn
- Setting up the Turbo Desktop Client
- Managing application images locally or via network share
- Configuring desktop integration and isolation
- Supporting offline and restricted environments
:::

## Overview

Desktop deployment allows you to run virtualized applications directly on end-user machines without requiring Turbo Server. This approach is ideal for:
- Development and testing environments
- Small to medium-scale deployments
- Environments requiring direct control
- Offline or restricted network scenarios
- Individual workstation deployments

## Basic Setup

### Step 1: Install Turbo Desktop Client

Download and install the client from [turbo.net/download](https://turbo.net/download). All commands in this guide should be executed in the all-users context, which can be achieved either by:
- Adding the `--all-users` flag to each command
- Using [`turbo as all-users`](/client/command-line/as.md) to run commands in the all-users context

The all-users context ensures configurations and applications are available to all users on the system, which is typically required for enterprise deployments.

```bash
# Standard installation (interactive)
turbo-client-installer.exe --all-users

# Silent installation for all users
turbo-client-installer.exe --all-users --silent

# Offline installation (no network required)
turbo-client-installer.exe --offline --all-users --silent
```

### Step 2: Configure Client and Repository

The Turbo Client needs to be configured with an image repository location and other settings. These settings affect all users on the system and determine how applications are stored and accessed.

#### Choose Repository Type

Select the appropriate repository setup for your environment:

1. **Local Repository**:
   ```bash
   # Configure local system-wide repository
   turbo config --image-path=allusers --all-users
   ```
   This stores images in `C:\ProgramData\Turbo\Containers\repo`, providing system-wide read-only access to all users

2. **Network Repository** (for shared storage across desktops):
   ```bash
   # Create and configure network share repository
   turbo config --image-path=\\server\turbo-images --all-users
   ```
   The network share should be:
   - Accessible to all client machines
   - Have sufficient storage capacity
   - Properly secured with appropriate access controls
   - Low latency and high throughput to ensure fast application launches

#### Additional Configuration

Configure client behavior and security settings:

```bash
# Enable offline mode for disconnected environments (optional)
turbo config --enable=offline --all-users

# Lock settings to prevent user modifications (recommended)
turbo config --as-override
```

The `--as-override` flag ensures settings cannot be overridden by individual users, maintaining consistency across the organization. For more configuration options, see the [config command reference](/client/command-line/config.md).

### Step 3: Add Images to Repository

After configuring the repository, add application images using one of these methods:

#### For Network-Connected Environments
Pull images directly from the Turbo Hub:
```bash
# Pull required base images
turbo pull /xvm,windows/base,windows/clean --all-users

# Pull application image(s)
turbo pull firefox --all-users
```
Images are automatically cached in your configured repository location.

#### For Offline Environments
Import images from removable media or network shares:
```bash
# Import required images from media
turbo import svm -n=/xvm:24.4.10 --all-users path\to\xvm_24.4.10.svm
turbo import svm -n=windows/base:2 --all-users path\to\windows_base_2.svm
turbo import svm -n=firefox --all-users path\to\firefox.svm
```
This method requires pre-downloading or transferring the .svm files to your environment.

## Application Deployment

### Step 1: Install Applications

Install applications with options appropriate for your deployment needs:

```bash
# Standard installation with full desktop integration
turbo installi --all-users firefox

# Installation with custom startup arguments (passed to application at launch)
turbo installi --all-users firefox -- --private-window --no-remote
turbo installi --all-users chrome -- --incognito --no-first-run
turbo installi --all-users vscode -- --new-window --disable-gpu

# Offline installation (requires pre-pulled images)
turbo installi --all-users firefox --offline --pull
turbo installi --all-users firefox --offline --vm=24.4.10  # With specific VM version

# Control desktop integration features
turbo installi --all-users firefox \
    --no-desktop-shortcuts \    # Skip desktop shortcuts
    --no-file-associations \    # Skip file associations
    --no-url-handlers \        # Skip URL protocol handlers
    --no-shell-extensions      # Skip shell extensions

# Server application installation with Windows services
turbo installi --all-users sql-server --register-services

# Application with font management
turbo installi --all-users adobe-creative-suite \
    --no-fonts \             # Skip font installation
    --overwrite-fonts \      # Or overwrite existing fonts
    --overwrite-shortcuts    # Update existing shortcuts
```

The installi command provides extensive customization options:
- Desktop integration (shortcuts, file associations, URL handlers, shell extensions)
- Service registration for server applications
- Font installation and management
- Offline deployment configuration
- VM version control
- Application argument passthrough
- Installation overwrite behavior

For complete command options, see [installi command reference](/client/command-line/installi.md).

### Step 2: Verify Installation

```bash
# List installed applications
turbo installed --all-users

# Output in JSON format for automation and monitoring
turbo installed --format=json
```

## Network Configuration

### Firewall Configuration

Turbo applications run through a stub executable in their sandbox environment. This requires specific firewall configurations to ensure proper network access:

#### Understanding Stub Executables
- Location: `%LOCALAPPDATA%\Turbo\Containers\sandboxes\<session-id>\local\stubexe`
- Each containerized process has its own stub executable
- Stub executables mediate between the virtual environment and the host system
- Custom locations can be configured in Turbo Studio for enterprise-wide management

#### Creating Firewall Rules

1. For individual applications:
   ```powershell
   # Allow outbound access for Turbo applications
   New-NetFirewallRule -DisplayName "Turbo Apps" `
                      -Direction Outbound `
                      -Program "%LOCALAPPDATA%\Turbo\Containers\sandboxes\*\local\stubexe\*.exe" `
                      -Action Allow
   ```

2. For enterprise deployments:
   - Consider creating rules during system setup
   - Use Group Policy for centralized management
   - Configure rules based on security requirements

## Next Steps

After completing the basic deployment:

1. Review [installi command options](/client/command-line/installi.md) for customizing application behavior:
   - Desktop integration options
   - File associations
   - Service installation
   - Font management
   - Offline configuration

2. Explore [workspace subscriptions](/guides/server/workspaces.md) for enterprise-wide deployment

3. Consider [server deployment](/guides/server/index.md) for advanced scenarios:
   - Centralized management
   - Automated updates
   - Usage analytics
   - Enhanced security features

## Best Practices

1. Security
   - Configure appropriate desktop integration options
   - Implement proper firewall rules
   - Consider using remote sandboxes for sensitive applications

2. Performance
   - Configure local caching appropriately
   - Use network shares on high-performance storage
   - Monitor and manage image sizes

3. Maintenance
   - Regular cleanup of unused images
   - Document deployment configurations
   - Plan for updates and version control
