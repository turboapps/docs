# Advanced Usage

This guide covers advanced Turbo features and configuration options.

::: tip What you'll learn
- Desktop integration with virtual applications
- Managing workspace subscriptions
- Network isolation and routing
- File system isolation modes
- Secure sandbox configuration
:::

## Desktop Integration

Turbo provides two main ways to integrate virtual applications with your desktop:

### Individual Application Installation

Use `installi` to integrate specific applications:

```bash
# Basic installation with all desktop integration features
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

### Workspace Subscriptions

For enterprise environments using Turbo Server, manage applications through workspaces:

1. Subscribe to a workspace:
   ```bash
   # Subscribe and register applications
   turbo subscribe myworkspace --register

   # Subscribe for all users
   turbo subscribe myworkspace --register --all-users
   ```

2. Manage subscriptions:
   ```bash
   # Update applications to latest versions
   turbo subscription update myworkspace

   # Register applications (creates desktop integration)
   turbo subscription register myworkspace

   # Temporarily pause updates
   turbo subscription suspend myworkspace

   # Resume updates
   turbo subscription resume myworkspace

   # View subscription details
   turbo subscription print myworkspace
   ```

3. Enable auto-registration (single user only):
   ```bash
   turbo config --enable=AutoRegister
   ```

Benefits:
- Automatic application updates
- Managed configurations
- Centralized control through Turbo Server
- Consistent environment across devices

::: tip Offline Support
For offline scenarios:
- Use `--pull` when subscribing to cache images
- Use `--allow-offline` or `--offline` when registering
- Applications remain available using cached data
:::

## Network Isolation

### Basic Network Isolation

```bash
# Block all outbound traffic
turbo run --route-block=ip firefox

# Allow specific IP or hostname
turbo run --route-block=ip --route-add=ip://10.0.0.34 firefox

# Allow domain and all subdomains
turbo run --route-block=ip --route-add=ip://*.turbo.net firefox
```

### Virtual Networks

Create isolated network environments:
```bash
# Run containers in virtual network
turbo run --network=mynet --name=web nginx
turbo run --network=mynet curl http://web
```

## File System Isolation

Turbo supports multiple isolation modes:

### Full Isolation
```bash
# Complete isolation from host
turbo run --isolate=full myapp
```

### Write Copy
```bash
# Read from host, isolated writes
turbo run --isolate=write-copy myapp
```

### Merge
```bash
# Full read/write access to host
turbo run --isolate=merge myapp
```

### Merge User
```bash
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

## Secure Sandboxes

Protect sensitive applications and source code:

1. Enable remote sandbox:
   ```bash
   # Enable the feature
   turbo config --enable=RemoteSandbox

   # Set sandbox storage location
   turbo config --remote-sandbox-path=C:\ProgramData\Turbo\RemoteSandbox --all-users
   ```

2. Run applications in sandbox:
   ```bash
   # Application runs with files isolated in secure location
   turbo run --isolate=full myapp
   ```

## Best Practices

### Desktop Integration
1. Use `installi` for individual applications
2. Use workspace subscriptions for enterprise deployments
3. Consider offline requirements when planning deployments
4. Use auto-registration for simplified management

### Security
1. Use full isolation for untrusted applications
2. Configure secure sandboxes for sensitive code
3. Implement network isolation as needed

### Network Configuration
1. Use virtual networks for container-to-container communication
2. Implement precise routing rules
3. Consider using route files for complex configurations

## Next Steps

- Review [deployment guides](/deploying/overview/deploying.md) for enterprise scenarios
- Explore [Turbo Server](/server/overview/overview.md) for advanced management
- Check [command reference](/client/command-line/run.md) for detailed options

::: tip Need More Help?
Visit our [support resources](https://turbo.net/support) for additional assistance.
:::
