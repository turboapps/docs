# Turbo Client
build break 2 <id>
The Turbo Client is the core component for managing and running virtualized applications. It provides comprehensive control over application virtualization, deployment, and management through both a command-line interface and graphical tools.

::: tip What you'll learn
- Client installation and configuration
- Virtual application management
- Runtime configuration and troubleshooting
- Command-line interface and scripting
:::

## Core Features

### Application Management
- Local image cache management
- Virtual application sandboxes
- Desktop integration and shortcuts
- Workspace subscriptions
- Application streaming

### Virtual Environment
- Isolated application environments
- Configurable sandboxing
- Network and file system isolation
- Resource monitoring and logging

### Integration Capabilities
- Command-line interface (CLI)
- Desktop integration
- Enterprise deployment options

## Installation

### System Requirements
- Windows 7 SP1 or later
- 2GB RAM (4GB recommended)
- 1GB free disk space (additional space required for applications)

### Basic Installation

1. Download [Turbo for Windows](https://turbo.net/download)
2. Run the installer
3. For Turbo Server users, configure your domain:
   ```bash
   turbo config --domain={your domain}
   turbo login
   ```

### Installation Options

The installer (Turbo-plugin.exe) supports several command-line flags:

| Flag | Description |
|------|-------------|
| `--silent` | Install without UI popups |
| `--all-users` | Install for all users on the machine |
| `--app-server` | Configure for application server use |
| `--hide-gui` | Disable Desktop Preferences shortcut |
| `--no-auto-start` | Disable auto-start on logon |
| `--no-auto-update` | Disable automatic updates |
| `--no-shell-ext` | Disable Turbo Launcher visibility |
| `--offline` | Force offline mode |
| `--shutdown-period` | Set idle shutdown time |

### Installation Locations

- All users installation:
  - x86: `C:\Program Files\Turbo`
  - x64: `C:\Program Files (x86)\Turbo`
- Single user installation:
  - `C:\Users\<profile>\AppData\Local\Turbo`

### Enterprise Deployment

For managed environments:

```bash
# Silent install for all users with domain configuration
Turbo-Plugin.exe --all-users --silent --domain=https://my.turboserver/ --add-trusted-source=https://my.turboserver/

# MSI deployment
msiexec /i Turbo-Plugin.msi cmdline="--domain=https://my.turboserver/ --add-trusted-source=https://my.turboserver/" /qn
```

## Configuration

### Proxy Settings

The client uses system proxy settings by default. To configure:

1. Open Windows Control Panel
2. Select Internet Options
3. Go to Connections > LAN Settings
4. Enter proxy configuration

## Uninstallation

### Using Control Panel
Uninstall through Windows "Uninstall or change a program" screen.

### Using Command Line

For single user:
```batch
"%LOCALAPPDATA%\Turbo\[client-version]\TurboSandbox.exe" /uninstall /silent
```

For all users (requires elevation):
```batch
"C:\Program Files (x86)\Turbo\[client-version]\TurboSandbox.exe" /uninstall /silent
```

Uninstall flags:

| Flag | Description |
|------|-------------|
| `/uninstall` | Uninstall the client |
| `/silent` | Perform silent uninstall |
| `/delete-user-data` | Remove user container data |
| `/uninstall-launcher` | Remove only TurboLauncher |
| `/uninstall-redirector` | Remove only TurboRedirector |

Exit codes:

| Code | Description |
|------|-------------|
| 0 | Success |
| 1 | Unknown Error |
| 2 | Elevation Error |
| 3 | Install Error |
| 4 | Uninstall Error |

## Components

### Sandbox Manager
The [Sandbox Manager](/client/sandbox-manager) is a core background service that provides:
- Automatic subscription management and updates
- Client auto-updates (single user mode)
- Secure sandbox management
- TDrive mount management
- Background garbage collection

### Command Line Interface
The [Command Line Interface](/client/command-line/) provides comprehensive control over:
- Virtual application management
- Application execution
- Network configuration
- Workspace management

### Runtime Environment
The [Turbo VM](/client/turbo-vm/) provides:
- Virtual machine configuration
- Runtime settings
- Troubleshooting tools
- Compatibility options

### TurboScript
[TurboScript](/client/turboscript/) enables automated configuration:
- Application layering
- Environment settings
- Network routing
- File system operations

## Examples

See the [Examples](/client/examples) section for:
- Common usage patterns
- Best practices
- Integration examples
- Deployment scenarios
