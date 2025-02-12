# Turbo Client Deployment

This section covers deploying virtual applications directly using the Turbo Client. This method provides flexible deployment options with full control over application delivery and configuration.

::: tip What you'll learn
- Direct deployment using Turbo Client
- Local image management
- Desktop integration options
- Network and filesystem isolation
- Offline deployment scenarios
:::

## Overview

The Turbo Client enables direct deployment of virtual applications without requiring Turbo Server. This approach is ideal for:
- Development and testing environments
- Small-scale deployments
- Environments requiring direct control
- Offline or restricted network scenarios

## Deployment Methods

### Basic Installation

1. Download and install the Turbo Client:
   ```bash
   # Silent install for all users
   turbo-client-installer.exe --all-users --silent
   ```

2. Configure client settings:
   ```bash
   # Configure image repository path
   turbo config --image-path=allusers --all-users

   # Lock configuration (optional)
   turbo config --as-override
   ```

### Managing Application Images

#### Using Network Share

1. Create a network share for application images
2. Pull required base images:
   ```bash
   # Pull base images
   turbo pull /xvm,windows/base,windows/clean
   ```

3. Export images to network share:
   ```bash
   turbo export /xvm:24.4.10 \\networkpath\turbo-images\xvm_24.4.10.svm
   turbo export windows/base:2 \\networkpath\turbo-images\windows_base_2.svm
   turbo export windows/clean:42 \\networkpath\turbo-images\windows_clean_42.svm
   ```

4. Import images on client machines:
   ```bash
   turbo import svm -n=/xvm:24.4.10 \\networkpath\turbo-images\xvm_24.4.10.svm
   turbo import svm -n=windows/base:2 \\networkpath\turbo-images\windows_base_2.svm
   turbo import svm -n=windows/clean:42 \\networkpath\turbo-images\windows_clean_42.svm
   ```

#### Using Shared Repository

1. Configure client to use shared repository:
   ```bash
   turbo config --image-path=\\networkpath\turbo-images --all-users
   ```

2. Images in the shared repository are automatically available to all users

## Application Deployment

### Installing Applications

Deploy applications with various isolation options:

```bash
# Full merge - Application can read/write to native system
turbo installi --all-users myapp --isolate=merge

# Write-copy with merged user folders
turbo installi --all-users myapp --isolate=write-copy+merge-user

# Full isolation
turbo installi --all-users myapp --isolate=full
```

### Desktop Integration

The Turbo Client provides several ways to integrate virtual applications with the desktop:

#### Single Application Installation

Use `installi` to integrate specific applications:
```bash
# Basic installation with all integration features
turbo installi firefox

# Install for all users
turbo installi firefox --all-users

# Install without specific features
turbo installi firefox --no-desktop-shortcuts --no-file-associations
```

This creates:
- Start menu shortcuts
- Desktop shortcuts (optional)
- File associations
- URL handlers
- Shell extensions

#### Virtual Desktop Infrastructure (VDI)

For VDI environments:
1. Add an API key for workspace access
2. Configure workspace permissions
3. Install Turbo Client for all users
4. Login with API key: `turbo login --all-users --api-key=<apiKey>`
5. Subscribe to workspace: `turbo subscribe --all-users <workspace>`
6. Configure login script: `turbo subscription register <subscription>`

#### Checking Installed Applications

View installed applications:
```bash
# List user applications
turbo installed

# List all-users applications
turbo installed --all-users

# Output in JSON format
turbo installed --format=json
```

Applications can also be found in the Windows Registry under:
- HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\ (all users)
- HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\ (current user)

## Network Configuration

### Basic Configuration
- High-performance network shares for shared repositories
- Consider bandwidth requirements
- Plan for offline scenarios

### Windows Firewall Configuration

Sometimes it is necessary to add Windows Firewall rules to allow container applications access to network ports:

#### StubExe Path
- Container applications run through a stubexe in the sandbox
- Located in `%LOCALAPPDATA%\Turbo\Containers\sandboxes\<container-id>\local\stubexe`
- Each .exe spawned from the container has its own stubexe
- Rules must be created for each .exe that needs network access

#### Creating Firewall Rules
1. Open Windows Firewall Advanced Settings
2. Create Outbound Rules for the stubexe path
3. Configure rule settings (block/allow, networks, etc.)
4. Apply rules to specific applications

#### Customizing StubExe Location
- Configure stubexe cache location in Turbo Studio
- Set to a well-known path for enterprise-wide rules
- Makes network rules easier to manage across users

#### Programmatic Configuration
- Use PowerShell `New-NetFirewallRule` cmdlet
- Or use Windows `netsh` command
- Enables automated rule management

## Offline Mode

Enable offline mode for environments without network access:

1. Install client in offline mode:
   ```bash
   turbo-client-installer.exe --offline --all-users --silent
   ```

2. Configure for offline use:
   ```bash
   # Lock configuration
   turbo config --as-override

   # Set local repository path
   turbo config --image-path=allusers --all-users
   ```

3. Import required images before disconnecting

## Best Practices

### Repository Management
- Use shared repositories for multiple users
- Implement version control for images
- Regular cleanup of unused images
- Document image dependencies

### Security
- Configure appropriate isolation levels
- Control network access
- Manage user permissions

### Performance
- Optimize image sizes
- Use appropriate isolation modes
- Consider local caching strategies

## Troubleshooting

### Common Issues

1. Image Access
   - Verify network connectivity
   - Check share permissions
   - Validate image paths

2. Integration Problems
   - Review isolation settings
   - Check user permissions
   - Verify shell integration

3. Performance Issues
   - Check network performance
   - Optimize image sizes
   - Review isolation settings

### Logging and Diagnostics

View container logs:
```bash
# View standard logs
turbo logs <container-id>

# View diagnostic logs
turbo logs --diagnostic <container-id>

# Follow log output in real-time
turbo logs -f <container-id>

# Show timestamps
turbo logs -t <container-id>

# List available logs
turbo logs --list <container-id>
```

Note: For detailed diagnostic logging, use the `--diagnostic` flag when running containers:
```bash
turbo run --diagnostic myapp
```

## Advanced Configuration

### Custom Settings

```bash
# Configure network isolation
turbo config --enable=NetFwBlockOutbound

# Set container cleanup
turbo config --shutdown-process-tree=always
```

### Automation

Create deployment scripts:
```batch
@echo off
REM Deploy application with standard configuration
turbo config --image-path=\\server\share
turbo installi myapp --isolate=write-copy+merge-user
```

## Next Steps

- Review [isolation options](/client/turbo-vm/runtime-settings.md)
- Explore [command line reference](/client/command-line/index.md)
- Learn about [workspace subscriptions](/deploying/server/subscriptions.md)
