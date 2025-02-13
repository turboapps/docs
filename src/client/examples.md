# Common Usage Examples

This guide provides practical examples of using Turbo in common scenarios. For more advanced usage, see the [Advanced Guide](/getting-started/advanced.md).

::: tip What you'll learn
- Running applications with different configurations
- Working with multiple application versions
- Network and file system isolation examples
- Desktop integration scenarios
:::

## Running Applications

### Basic Usage

```bash
# Run the latest version of Firefox
turbo run firefox

# Run with custom parameters
turbo run firefox -- -private-window

# Run multiple applications together
turbo run firefox,chrome,opera
```

### Version Management

Run specific versions of applications side-by-side:

```bash
# Run specific versions
turbo run node:14.17
turbo run python:3.8

# Run multiple versions simultaneously
turbo run node:14.17 --name=node14
turbo run node:16.13 --name=node16
```

## Development Environments

### Web Development

Create an isolated web development environment:

```bash
# Start a session with Node.js and development tools
turbo run node,git,vscode

# Run with mounted project directory
turbo run node,git,vscode --mount="C:\projects"=C:\projects
```

### .NET Development

Set up a .NET development environment:

```bash
# Run Visual Studio with specific .NET SDK
turbo run microsoft/dotnet,microsoft/vs

# Test with multiple .NET versions
turbo run microsoft/dotnet:4.8
turbo run microsoft/dotnet:6.0
```

## Network Configuration

### Basic Network Isolation

```bash
# Block all outbound traffic
turbo run --route-block=ip firefox

# Allow specific domains
turbo run --route-block=ip --route-add=ip://*.github.com git
```

### Multiple Application Instances

Run multiple instances of the same application:

```bash
# Run multiple web servers on different ports
turbo run nginx --route-add=tcp://80:8080
turbo run nginx --route-add=tcp://80:8081
```

## File System Integration

### Isolation Modes

```bash
# Full isolation from host
turbo run --isolate=full myapp

# Allow reading from host
turbo run --isolate=write-copy myapp

# Full read/write access
turbo run --isolate=merge myapp

# Merge user folders only
turbo run --isolate=write-copy+merge-user myapp
```

### Project Development

```bash
# Mount project directory and persist changes
turbo run node --mount="C:\projects"=C:\projects

# Share configuration across sessions
turbo run node --mount=%APPDATA%\npm=%APPDATA%\npm
```

## Desktop Integration

### Application Installation

```bash
# Install with desktop integration
turbo installi firefox

# Install without shortcuts
turbo installi firefox --no-desktop-shortcuts

# Install for all users
turbo installi firefox --all-users
```

### Workspace Management

```bash
# Subscribe to a workspace
turbo subscribe myworkspace --register

# Update workspace applications
turbo subscription update myworkspace

# Register applications
turbo subscription register myworkspace
```

## Best Practices

1. Use descriptive names for long-running sessions:
   ```bash
   turbo run node --name=api-server
   turbo run mongodb --name=local-db
   ```

2. Clean up unused sessions:
   ```bash
   # List running sessions
   turbo ps
   
   # Stop specific session
   turbo stop <session-id>
   
   # Stop all sessions
   turbo rm -a
   ```

3. Use isolation modes appropriately:
   - `--isolate=full` for untrusted applications
   - `--isolate=write-copy` for development
   - `--isolate=merge` for system integration

4. Leverage workspace subscriptions for enterprise environments:
   - Automatic updates
   - Consistent configurations
   - Centralized management

For more advanced scenarios, including secure sandboxes, complex networking, and enterprise deployment, see the [Advanced Usage Guide](/getting-started/advanced.md).

::: tip Need More Help?
- Check the [Command Reference](/client/command-line/) for detailed options
- Learn how to [build virtual application images](/studio/) with Turbo Studio
- See [Deployment Options](/deploying/) for enterprise scenarios
:::
