# scan

The `scan` command performs a comprehensive analysis of a target system or container, collecting information across various categories. It is designed to be cross-platform, adapting its scanning capabilities to Windows, Linux, and macOS environments.

```
Usage: turbo.exe scan <options> [target]

<options> available:
      --include=CATEGORY[,CATEGORY,...]
                                 Comma-separated list of categories to scan.
                                 Core: system, executables, applications, processes, network, filesystem, security, users.
                                 Windows: registry, services, features.
                                 Linux: packages, systemd, configs.
                                 macOS: plists, launchd, frameworks, keychain.
      --platform=OS            Force scanning for a specific operating system (linux, windows, darwin).
                                 Useful for cross-analysis of mounted filesystems or container images.
      --target=PATH_OR_ID      Specifies the primary target for the scan.
                                 For local scans, this is often omitted.
                                 For filesystem scans, this can be a path (e.g., /mnt/windows-drive).
                                 For specific items like macOS app bundles: /Applications/MyApp.app.
  [target]                       Positional argument, alternative to --target for simple path-based targets.
      --package-manager=MANAGER (Linux-specific) Specify the package manager to query (e.g., apt, yum, dnf, rpm).
      --deep                   (macOS-specific) Perform a deep scan, e.g., inside application bundles.
      --container=NAME_OR_ID   Scan a specified container image or running container.
                                 Platform may need to be specified via --platform if not discoverable.
      --plugin=PATH            Load a custom scanner plugin from the specified path (.so, .dll).
      --format=VALUE           Output format. Currently supports 'json'. Defaults to 'json'.
      --wait-after-error       Leave program open after error.
      --wait-after-exit        Leave program open after it exits.
```

## Overview

The `turbo scan` command intelligently adapts to the operating system it runs on, or the platform specified using the `--platform` option. It gathers detailed information based on the categories selected with the `--include` option.

### Platform Detection and Adaptation

-   **Automatic Detection**: By default, `turbo scan` automatically detects the host operating system (Windows, Linux, macOS) and uses the appropriate scanners and data sources for the selected categories. For example, `--include=applications` will query the registry on Windows, package managers on Linux, and application bundles/brew on macOS.
-   **Explicit Platform Override**: The `--platform` option allows you to force the scan logic for a specific OS. This is particularly useful for:
    -   Scanning a mounted filesystem of a different OS (e.g., scanning a Windows disk mounted on a Linux system: `turbo scan --platform=windows --target=/mnt/windows_drive --include=registry,services`).
    -   Analyzing container images where the underlying OS of the image differs from the host.

### Target Specification

The primary target of the scan can be specified in several ways:

-   **Local System (Default)**: If no `[target]` or `--target` is provided, `turbo scan` analyzes the local host system.
-   **Path-based Target**: Provide a path as a positional `[target]` argument or using `--target=<PATH>`. This is used for scanning specific directories or mounted filesystems.
-   **Container Target**: Use `--container=<NAME_OR_ID>` to scan a container. You might need to use `--platform` to specify the container's OS if it cannot be inferred.

## Scan Categories (`--include`)

The `--include` option accepts a comma-separated list of categories to scan.

### Core Categories (All Platforms)

These categories have platform-specific data sources but provide a unified view.

-   `system`: Collects OS information (version, kernel, distribution), hardware details (CPU, memory, disk), and other system-level parameters.
-   `executables`: Analyzes executable files (PE for Windows, ELF for Linux, Mach-O for macOS), extracting format-specific data like symbols, sections, imports/exports, and load commands.
-   `applications`: Inventories installed software. This is a unified category that draws from platform-specific sources:
    -   Windows: Registry entries (Programs and Features), Windows Features, MSI packages, Chocolatey.
    -   Linux: Package managers (apt, yum, dnf, rpm), Snap, Flatpak.
    -   macOS: Application bundles (.app), Homebrew, MacPorts, DMG installations.
    -   Cross-platform: pip, npm, gem, cargo.
-   `processes`: Lists running processes and services, including PID, PPID, command line, user, CPU/memory usage, and open files/connections. Platform-specific details like cgroups/namespaces (Linux), session ID (Windows), or code signature (macOS) are included.
-   `network`: Gathers network configuration, including interfaces, IP addresses, MAC addresses, routes, listening ports, active connections, and DNS settings.
-   `filesystem`: Provides information on mounted filesystems, and can be targeted to analyze permissions, ownership, timestamps, and extended attributes of files and directories.
-   `security`: Collects platform-specific security settings.
    -   Linux: Firewall rules (iptables/nftables), SELinux/AppArmor status.
    -   Windows: Windows Defender status, User Account Control (UAC), BitLocker, Audit Policy.
    -   macOS: System Integrity Protection (SIP), Gatekeeper, FileVault, XProtect, firewall rules.
    -   Also includes general authentication policies (password, lockout).
-   `users`: Lists user accounts and groups, including UID/GID, home directory, shell, login times, and group memberships. Platform-specific details like SIDs (Windows) are included.

### Windows-Specific Categories

-   `registry`: Performs detailed analysis of the Windows Registry, allowing queries on keys, values, and permissions.
-   `services`: Lists Windows Services, their status, start type, executable path, dependencies, and account information.
-   `features`: Enumerates installed Windows Features and Roles.

### Linux-Specific Categories

-   `packages`: Provides detailed inventory from package managers like `apt`, `yum`, `dnf`, `rpm`. Use `--package-manager` to target a specific one if multiple are present or for specific queries.
-   `systemd`: Inspects `systemd` services, units, and targets, including their state, dependencies, and configuration.
-   `configs`: Analyzes common configuration files from `/etc` and other standard locations, potentially parsing known formats.

### macOS-Specific Categories

-   `plists`: Scans and parses Property List files (`.plist`), common for system and application configuration.
-   `launchd`: Inspects LaunchAgents and LaunchDaemons used for managing services and background tasks.
-   `frameworks`: Lists macOS Frameworks, their versions, and paths.
-   `keychain`: Analyzes Keychain items, including certificates.

## Output Format

The `turbo scan` command outputs data in JSON format by default (implicitly `--format=json`). The JSON structure is designed to be comprehensive and cross-platform.

-   **Top-Level Structure**:
    ```json
    {
      "scan": {
        "platform": {
          "os": "linux|windows|darwin",
          "distribution": "ubuntu-22.04|windows-10|macos-14.0", // Example values
          "architecture": "x86_64|arm64"
        }
        // Timestamps, scan ID, etc. might also be present
      },
      // Each included category will have its own top-level key:
      "system": { /* ...system data... */ },
      "executables": [ /* ...array of executable data... */ ],
      "applications": { /* ...platform-specific application sources... */ }
      // ... and so on for other included categories
    }
    ```
-   **Category Structure**: Each category has a well-defined schema. For example, the `system` category includes nested objects for `hardware` (CPU, memory, disk), OS details, etc. The `processes` category is an array of process objects, each with detailed attributes. The `applications` category groups software by source (e.g., `apt`, `winPrograms`, `macosAppBundles`).
-   **Platform Specificity**: While the goal is a unified output, fields that are strictly platform-specific are typically nested or clearly marked to indicate their origin (e.g., `selinuxContext` within a process object on Linux, or `windowsServiceType` on Windows). Refer to the detailed schema definitions for the exact structure of each category's output.

For example, the `executables` category might produce an entry like this:
```json
{
  // ... other scan data ...
  "executables": [
    {
      "path": "/usr/bin/ls",
      "format": "elf", // Could be "pe" or "macho" on other platforms
      "platform_data": {
        "elf": { "symbols": ["symbol1", "..."], "sections": ["section1", "..."] }
        // "pe": { "imports": [...], "exports": [...] } for Windows
        // "macho": { "load_commands": [...], "segments": [...] } for macOS
      }
    }
  ]
  // ...
}
```
The `applications` category provides a unified view by nesting platform-specific sources:
```json
{
  // ... other scan data ...
  "applications": {
    "apt": [ /* ... list of apt packages on Linux ... */ ],
    "winPrograms": [ /* ... list from Windows Programs & Features ... */ ],
    "macosAppBundles": [ /* ... list of .app bundles on macOS ... */ ],
    "pip": [ /* ... list of pip packages, if Python is present ... */ ]
    // etc.
  }
  // ...
}
```

## Plugin Architecture

`turbo scan` supports a plugin architecture to extend its capabilities.
-   `--plugin=PATH`: Load a custom scanner plugin (e.g., a `.so` file on Linux, `.dll` on Windows). Plugins can register new categories or augment existing ones.

## Examples

### General Usage

```bash
# Scan basic system information and running processes on the local machine
turbo scan --include=system,processes

# Scan installed applications and network configuration
turbo scan --include=applications,network

# Scan the entire filesystem structure (can be extensive)
turbo scan --include=filesystem --target=/
```

### Linux Scanning

```bash
# Full Linux system scan, including packages and systemd services
turbo scan --include=system,executables,applications,processes,network,filesystem,security,users,packages,systemd,configs

# Scan Debian/Ubuntu packages specifically
turbo scan --include=packages --package-manager=apt

# Scan RHEL/CentOS/Fedora packages specifically
turbo scan --include=packages --package-manager=yum # or dnf/rpm as appropriate
```

### macOS Scanning

```bash
# Full macOS system scan
turbo scan --include=system,executables,applications,processes,network,filesystem,security,users,plists,launchd,frameworks,keychain

# Scan a specific application bundle in detail
turbo scan --target=/Applications/Safari.app --include=executables,plists,frameworks --deep
```

### Windows Scanning

```bash
# Full Windows system scan
turbo scan --include=system,executables,applications,processes,network,filesystem,security,users,registry,services,features

# Scan specific registry hive and Windows services
turbo scan --include=registry,services --target="HKEY_LOCAL_MACHINE\\Software"
```

### Cross-Platform Container Scanning

```bash
# Scan a Linux Docker container (e.g., nginx based on Alpine)
turbo scan --container=nginx:alpine --platform=linux --include=system,packages,processes

# Scan a Windows container
turbo scan --container=mcr.microsoft.com/windows/servercore --platform=windows --include=system,services,features
