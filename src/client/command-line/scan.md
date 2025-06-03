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

## Detailed Output Schemas

This section provides an overview of the JSON output structure for key scan categories, ensuring all specified fields from the design specification are represented. The actual output will vary based on the target platform and the specific data found. Illustrative values are used.

### Core Category Schemas

#### `system` Output
The `system` category provides general information about the host, including OS, hardware, and timezone.

```json
{
  "system": {
    "hostname": "web-server-01",
    "os": "linux",
    "osVersion": "22.04.3 LTS",
    "distribution": "ubuntu-22.04",
    "kernel": "5.15.0-91-generic",
    "architecture": "x86_64",
    "bootTime": "2024-05-15T08:30:00Z",
    "uptime": 1728000,
    "timezone": "UTC",
    "hardware": {
      "cpu": {
        "model": "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
        "cores": 4,
        "threads": 8,
        "frequency": 2300000000
      },
      "memory": {
        "total": 16777216000,
        "available": 8388608000,
        "used": 8388608000,
        "swapTotal": 2147483648,
        "swapUsed": 0
      },
      "disk": [
        {
          "device": "/dev/xvda1",
          "mountpoint": "/",
          "filesystem": "ext4",
          "total": 21474836480,
          "used": 8589934592,
          "available": 11796480819
        }
      ]
    },
    "windowsVersion": null,
    "windowsBuild": null,
    "windowsEdition": null,
    "domainRole": null,
    "macosVersion": null,
    "macosCodename": null,
    "systemIntegrityProtection": null
  }
}
```

#### `processes` Output
This category lists running processes with details like PID, command line, user, resource usage, and network connections.

```json
{
  "processes": [
    {
      "pid": 1234,
      "ppid": 1,
      "name": "nginx",
      "commandLine": "/usr/sbin/nginx -g daemon off;",
      "executablePath": "/usr/sbin/nginx",
      "user": "www-data",
      "group": "www-data",
      "status": "running",
      "startTime": "2024-05-15T09:15:00Z",
      "cpuPercent": 0.5,
      "memoryUsage": 52428800,
      "memoryPercent": 0.3,
      "openFiles": 12,
      "connections": [
        {
          "protocol": "tcp",
          "localAddress": "0.0.0.0",
          "localPort": 80,
          "remoteAddress": "",
          "remotePort": 0,
          "status": "listening"
        }
      ],
      "cgroup": "/system.slice/nginx.service", // Linux-specific
      "namespace": "default", // Linux-specific
      "selinuxContext": "system_u:system_r:httpd_t:s0", // Linux-specific
      "sessionId": null, // Windows-specific
      "serviceName": null, // Windows-specific
      "windowsServiceType": null, // Windows-specific
      "codeSignature": null, // macOS-specific
      "sandboxed": null // macOS-specific
    }
  ]
}
```

#### `network` Output
Provides comprehensive network configuration details.

```json
{
  "network": {
    "interfaces": [
      {
        "name": "eth0",
        "displayName": "Ethernet",
        "type": "ethernet",
        "status": "up",
        "mtu": 1500,
        "macAddress": "02:42:ac:11:00:02",
        "ipAddresses": [
          {
            "address": "172.17.0.2",
            "netmask": "255.255.0.0",
            "broadcast": "172.17.255.255",
            "family": "ipv4"
          }
        ],
        "statistics": {
          "bytesReceived": 1048576,
          "bytesSent": 2097152,
          "packetsReceived": 1024,
          "packetsSent": 2048,
          "errorsIn": 0,
          "errorsOut": 0,
          "dropsIn": 0,
          "dropsOut": 0
        }
      }
    ],
    "routes": [
      {
        "destination": "0.0.0.0/0",
        "gateway": "172.17.0.1",
        "interface": "eth0",
        "metric": 0,
        "protocol": "kernel"
      }
    ],
    "listeningPorts": [
      {
        "protocol": "tcp",
        "address": "0.0.0.0",
        "port": 80,
        "pid": 1234,
        "processName": "nginx"
      }
    ],
    "activeConnections": [
      {
        "protocol": "tcp",
        "localAddress": "172.17.0.2",
        "localPort": 80,
        "remoteAddress": "192.168.1.100",
        "remotePort": 45678,
        "status": "established",
        "pid": 1234,
        "processName": "nginx"
      }
    ],
    "dnsConfiguration": {
      "nameservers": ["8.8.8.8", "8.8.4.4"],
      "searchDomains": ["local"],
      "options": ["timeout:2", "attempts:3"]
    }
  }
}
```

#### `filesystem` Output
Details mounted filesystems and can include permissions for specific paths if targeted.

```json
{
  "filesystem": {
    "mounts": [
      {
        "device": "/dev/xvda1",
        "mountpoint": "/",
        "filesystem": "ext4",
        "options": ["rw", "relatime"],
        "total": 21474836480,
        "used": 8589934592,
        "available": 11796480819,
        "inodes": {
          "total": 1310720,
          "used": 245760,
          "available": 1064960
        }
      }
    ],
    "permissions": [ // Populated when scanning specific file paths
      {
        "path": "/etc/passwd",
        "type": "file",
        "size": 2048,
        "owner": "root",
        "group": "root",
        "permissions": "644",
        "modified": "2024-05-15T10:30:00Z",
        "accessed": "2024-05-16T14:20:00Z",
        "created": "2024-05-01T12:00:00Z",
        "selinuxContext": "system_u:object_r:passwd_file_t:s0", // Linux-specific
        "extendedAttributes": {"security.selinux": "system_u:object_r:passwd_file_t:s0"}, // Linux-specific
        "attributes": null, // Windows-specific
        "acl": null, // Windows-specific
        "quarantine": null, // macOS-specific
        "codeSignature": null // macOS-specific
      }
    ],
    "quotas": [
      {
        "user": "www-data",
        "filesystem": "/",
        "blockUsed": 1024,
        "blockSoft": 1048576,
        "blockHard": 2097152,
        "inodeUsed": 100,
        "inodeSoft": 10000,
        "inodeHard": 20000
      }
    ]
  }
}
```

#### `security` Output
Covers various security-related configurations like firewall rules and authentication policies.

```json
{
  "security": {
    "firewall": {
      "enabled": true,
      "rules": [
        {
          "rule": "ACCEPT tcp -- 0.0.0.0/0 0.0.0.0/0 tcp dpt:22",
          "chain": "INPUT",
          "protocol": "tcp",
          "source": "0.0.0.0/0",
          "destination": "0.0.0.0/0",
          "port": 22,
          "action": "ACCEPT"
        }
      ]
    },
    "authentication": {
      "passwordPolicy": {
        "minLength": 8,
        "requireComplexity": true,
        "maxAge": 90,
        "historyCount": 5
      },
      "lockoutPolicy": {
        "threshold": 5,
        "duration": 1800,
        "resetTime": 900
      }
    },
    "selinux": { // Linux-specific
      "status": "enforcing",
      "policy": "targeted",
      "currentMode": "enforcing",
      "configuredMode": "enforcing"
    },
    "apparmor": { // Linux-specific
      "status": "enabled",
      "profiles": [
        {
          "name": "/usr/sbin/nginx",
          "mode": "enforce",
          "status": "loaded"
        }
      ]
    },
    "windowsDefender": null, // Windows-specific
    "userAccountControl": null, // Windows-specific
    "bitlocker": null, // Windows-specific
    "auditPolicy": null, // Windows-specific
    "systemIntegrityProtection": null, // macOS-specific
    "gatekeeper": null, // macOS-specific
    "fileVault": null, // macOS-specific
    "xprotect": null // macOS-specific
  }
}
```

#### `users` Output
Lists user accounts and group information.

```json
{
  "users": [
    {
      "username": "root",
      "uid": 0,
      "gid": 0,
      "fullName": "root",
      "homeDirectory": "/root",
      "shell": "/bin/bash",
      "passwordSet": true,
      "passwordExpiry": null,
      "lastLogin": "2024-05-16T08:30:00Z",
      "accountExpiry": null,
      "locked": false,
      "groups": ["root", "adm", "sudo"],
      "sudoPrivileges": true,
      "sid": null, // Windows-specific
      "userAccountControl": null, // Windows-specific
      "profilePath": null, // Windows-specific
      "lastLogon": null, // Windows-specific
      "accountType": null, // macOS-specific
      "hidden": null // macOS-specific
    }
  ],
  "groups": [
    {
      "name": "sudo",
      "gid": 27,
      "members": ["ubuntu", "admin"],
      "sid": null, // Windows-specific
      "scope": null, // Windows-specific
      "realName": null // macOS-specific
    }
  ]
}
```

#### `applications` Output
A comprehensive inventory of installed software, aggregated from various platform-specific sources. Each source type will have an array of items matching its specific schema. Below are illustrative examples for one item per source.

```json
{
  "applications": {
    "apt": [
      {
        "name": "nginx", "version": "1.18.0-6ubuntu14.4", "architecture": "amd64",
        "status": "installed", "priority": "optional", "section": "httpd",
        "maintainer": "Ubuntu Developers", "description": "small, powerful, scalable web/proxy server",
        "installedSize": 1024000, "downloadSize": 614400, "homepage": "https://nginx.org",
        "dependencies": ["libc6", "libpcre3", "libssl1.1"],
        "configFiles": ["/etc/nginx/nginx.conf"], "installedDate": "2024-05-15T10:00:00Z"
      }
    ],
    "rpm": [
      {
        "name": "httpd", "version": "2.4.57-5.el9", "release": "5.el9", "architecture": "x86_64",
        "summary": "Apache HTTP Server", "description": "The Apache HTTP Server is a powerful web server",
        "vendor": "Red Hat, Inc.", "packager": "Red Hat, Inc.", "installTime": "2024-05-15T10:00:00Z",
        "size": 1048576, "license": "ASL 2.0", "url": "https://httpd.apache.org/"
      }
    ],
    "snap": [
      {
        "name": "core20", "version": "20231123", "revision": "2105", "channel": "stable",
        "publisher": "canonical", "type": "base", "confinement": "strict",
        "installDate": "2024-05-01T12:00:00Z", "trackingChannel": "20/stable",
        "refreshDate": "2024-05-15T08:00:00Z"
      }
    ],
    "flatpak": [
      {
        "name": "org.mozilla.firefox", "version": "125.0.2", "branch": "stable", "origin": "flathub",
        "installDate": "2024-05-10T14:30:00Z", "updateDate": "2024-05-15T09:15:00Z",
        "size": 268435456, "runtime": "org.freedesktop.Platform/x86_64/23.08"
      }
    ],
    "winPrograms": [
      {
        "name": "Microsoft Visual C++ 2015-2022 Redistributable (x64)", "version": "14.38.33130.0",
        "publisher": "Microsoft Corporation", "installDate": "2024-05-10",
        "installLocation": "C:\\Program Files\\Microsoft Visual Studio\\2022\\BuildTools\\VC\\Redist\\MSVC\\14.38.33130\\",
        "uninstallString": "MsiExec.exe /X{...}", "registryKey": "HKEY_LOCAL_MACHINE\\SOFTWARE\\...\\{...}",
        "estimatedSize": 13934592, "helpLink": "https://support.microsoft.com",
        "installSource": "C:\\ProgramData\\Package Cache\\{...}v14.38.33130\\",
        "modifyPath": "MsiExec.exe /I{...}", "windowsInstaller": true
      }
    ],
    "winFeatures": [
      {
        "name": "IIS-WebServerRole", "displayName": "Web Server (IIS)",
        "description": "Installs the IIS Web server", "state": "Enabled", "installState": "Installed",
        "featureType": "Role", "restartRequired": false, "parent": "IIS-WebServer",
        "subFeatures": ["IIS-HttpCompressionStatic", "IIS-HttpCompressionDynamic"],
        "installPath": "%SystemRoot%\\System32\\inetsrv"
      }
    ],
    "msi": [
      {
        "productCode": "{...}", "productName": "Microsoft Office Professional Plus 2016",
        "productVersion": "16.0.4266.1001", "publisher": "Microsoft Corporation",
        "installDate": "20240515", "installLocation": "C:\\Program Files\\Microsoft Office\\Office16\\",
        "packageCode": "{...}", "assignmentType": "PerMachine", "installState": "Installed"
      }
    ],
    "chocolatey": [
      {
        "name": "git", "version": "2.45.1", "title": "Git", "summary": "Git (Install)",
        "description": "Git is a free and open source distributed version control system",
        "projectUrl": "https://git-scm.com/", "tags": ["git", "dvcs"],
        "installDate": "2024-05-15T10:30:00Z", "packageSize": 47185920
      }
    ],
    "macosAppBundles": [
      {
        "name": "Safari", "path": "/Applications/Safari.app", "version": "17.4.1", "shortVersion": "17.4.1",
        "bundleIdentifier": "com.apple.Safari", "bundleVersion": "619.1.17.101.5",
        "executableName": "Safari", "displayName": "Safari", "copyright": "© 2003-2024 Apple Inc.",
        "minimumSystemVersion": "14.4.0", "category": "public.app-category.productivity",
        "codeSignature": { "status": "valid", "authority": "Software Signing", "teamIdentifier": "Apple", "identifier": "com.apple.Safari" },
        "size": 157286400, "lastModified": "2024-04-10T19:20:31Z"
      }
    ],
    "brew": [
      {
        "name": "git", "version": "2.45.1", "revision": 0,
        "installedFrom": "https://formulae.brew.sh/api/formula/git.json",
        "isCask": false, "isBottle": true, "installedOnRequest": true, "installedAsDependency": false,
        "installDate": "2024-05-10T14:20:00Z", "dependencies": ["gettext", "pcre2"],
        "builtAsBottle": true, "pourBottleVersion": "2.45.1",
        "cellar": "/opt/homebrew/Cellar/git/2.45.1", "prefix": "/opt/homebrew"
      }
    ],
    "macPorts": [
      {
        "name": "python39", "version": "3.9.18_0+universal", "revision": 0, "variants": ["universal"],
        "requested": true, "installDate": "2024-05-10T15:00:00Z",
        "description": "An interpreted, object-oriented programming language",
        "homepage": "https://www.python.org/", "maintainers": ["jmr"], "categories": ["lang"], "license": "PSF"
      }
    ],
    "dmg": [
      {
        "name": "Docker Desktop", "version": "4.29.0", "path": "/Applications/Docker.app",
        "installMethod": "dmg", "installDate": "2024-05-05T11:30:00Z",
        "downloadUrl": "https://desktop.docker.com/mac/main/amd64/Docker.dmg", "vendor": "Docker Inc"
      }
    ],
    "pip": [
      {
        "name": "requests", "version": "2.31.0", "location": "/usr/local/lib/python3.9/site-packages",
        "installer": "pip", "pythonVersion": "3.9", "requiresPython": ">=3.7",
        "installDate": "2024-05-12T09:45:00Z", "dependencies": ["charset-normalizer", "idna", "urllib3", "certifi"]
      }
    ],
    "npm": [
      {
        "name": "express", "version": "4.19.2", "location": "/usr/local/lib/node_modules/express",
        "nodeVersion": "20.12.2", "installDate": "2024-05-14T16:20:00Z",
        "dependencies": { "accepts": "~1.3.8", "array-flatten": "1.1.1", "body-parser": "1.20.2" },
        "globalInstall": true
      }
    ],
    "gem": [
      {
        "name": "rails", "version": "7.1.3.2", "platform": "ruby", "installDate": "2024-05-13T13:15:00Z",
        "rubyVersion": "3.1.0", "gemPath": "/usr/local/lib/ruby/gems/3.1.0/gems/rails-7.1.3.2",
        "dependencies": ["actioncable", "actionmailbox", "actionmailer"], "executables": ["rails"]
      }
    ],
    "cargo": [
      {
        "name": "ripgrep", "version": "14.1.0", "installDate": "2024-05-11T10:45:00Z",
        "rustVersion": "1.78.0", "cargoHome": "/Users/admin/.cargo",
        "repository": "https://github.com/BurntSushi/ripgrep", "license": "Unlicense OR MIT"
      }
    ],
    "other": [
      {
        "name": "Custom Application", "version": "1.0.0", "path": "/opt/custom-app",
        "installMethod": "manual", "description": "Manually installed application",
        "vendor": "Custom Corp", "installDate": "2024-05-08T12:00:00Z"
      }
    ],
    "yum": [], // Ensure all keys from spec are present, even if empty array for brevity
    "dnf": []  // Ensure all keys from spec are present, even if empty array for brevity
  }
}
```
Note: The `executables` category schema was illustrated in the main "Output Format" section.

### Windows-Specific Schemas

#### `registry` Output
Provides data from the Windows Registry.

```json
{
  "registry": {
    "keys": [
      {
        "path": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion",
        "lastModified": "2024-05-15T10:00:00Z",
        "values": [
          {
            "name": "ProductName",
            "type": "REG_SZ",
            "data": "Windows 10 Pro",
            "size": 26
          }
        ],
        "subkeys": ["Uninstall", "Run", "RunOnce"],
        "permissions": {
          "owner": "TrustedInstaller",
          "inheritance": true,
          "acl": [
            {
              "principal": "SYSTEM",
              "access": "FullControl",
              "type": "Allow"
            }
          ]
        }
      }
    ],
    "policies": [
      {
        "path": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate",
        "setting": "NoAutoUpdate",
        "value": 1,
        "description": "Disable automatic updates"
      }
    ]
  }
}
```

#### `services` Output (Windows)
Details Windows services.

```json
{
  "services": [
    {
      "name": "W3SVC",
      "displayName": "World Wide Web Publishing Service",
      "description": "Provides Web connectivity and administration",
      "status": "Running",
      "startType": "Automatic",
      "serviceType": "Win32ShareProcess",
      "executablePath": "%SystemRoot%\\System32\\svchost.exe -k iissvcs",
      "account": "LocalSystem",
      "pid": 1234,
      "dependencies": ["HTTP"],
      "dependents": ["WAS"],
      "errorControl": "Normal",
      "loadOrderGroup": "",
      "tagId": 0,
      "requiredPrivileges": ["SeServiceLogonRight"],
      "failureActions": {
        "resetPeriod": 86400,
        "rebootMessage": "",
        "command": "",
        "actions": [
          {"type": "Restart", "delay": 60000},
          {"type": "Restart", "delay": 60000},
          {"type": "None", "delay": 0}
        ]
      }
    }
  ]
}
```
The `features` category for Windows is typically included as part of the `applications` output under the `winFeatures` key.

### Linux-Specific Schemas

#### `systemd` Output
Information about systemd units and targets.

```json
{
  "systemd": {
    "units": [
      {
        "name": "nginx.service",
        "type": "service",
        "loadState": "loaded",
        "activeState": "active",
        "subState": "running",
        "unitFile": "/lib/systemd/system/nginx.service",
        "enabled": true,
        "preset": "enabled",
        "description": "A high performance web server and a reverse proxy server",
        "mainPid": 1234,
        "execStart": "/usr/sbin/nginx -g daemon on; master_process on;",
        "execReload": "/usr/sbin/nginx -s reload",
        "user": "www-data",
        "group": "www-data",
        "restartPolicy": "on-failure",
        "wants": ["network.target"],
        "after": ["network.target", "nss-lookup.target"],
        "wantedBy": ["multi-user.target"],
        "environment": {"NGINX_CONF": "/etc/nginx/nginx.conf"},
        "memoryUsage": 52428800,
        "cpuUsage": 0.5,
        "startTime": "2024-05-15T09:15:00Z"
      }
    ],
    "targets": [
      {
        "name": "multi-user.target",
        "type": "target",
        "loadState": "loaded",
        "activeState": "active",
        "description": "Multi-User System",
        "wants": ["basic.target"],
        "conflicts": ["rescue.service", "rescue.target"]
      }
    ]
  }
}
```

#### `configs` Output (Linux)
Parsed content of configuration files.

```json
{
  "configs": [
    {
      "path": "/etc/nginx/nginx.conf",
      "type": "nginx",
      "syntax": "nginx",
      "size": 2048,
      "owner": "root",
      "group": "root",
      "permissions": "644",
      "modified": "2024-05-15T10:30:00Z",
      "checksum": "sha256:abcd1234...",
      "parsed": {
        "directives": [
          {
            "name": "worker_processes",
            "value": "auto",
            "line": 5
          }
        ],
        "blocks": [
          {
            "name": "http",
            "line": 10,
            "children": [
              {
                "name": "server",
                "line": 20,
                "children": [
                  {
                    "name": "listen",
                    "value": "80",
                    "line": 21
                  }
                ]
              }
            ]
          }
        ]
      },
      "includes": ["/etc/nginx/conf.d/*.conf"],
      "variables": {"NGINX_PORT": "80"}
    }
  ]
}
```
The `packages` category for Linux is included as part of the `applications` output under keys like `apt`, `yum`, etc.

### macOS-Specific Schemas

#### `plists` Output
Parsed Property List files.

```json
{
  "plists": [
    {
      "path": "/System/Library/LaunchDaemons/com.apple.sshd.plist",
      "type": "LaunchDaemon",
      "category": "system",
      "domain": "system",
      "owner": "root",
      "group": "wheel",
      "permissions": "644",
      "loaded": true,
      "content": {
        "Label": "com.apple.sshd",
        "Program": "/usr/sbin/sshd",
        "ProgramArguments": ["/usr/sbin/sshd", "-i"],
        "SHAuthorizationRight": "system.privilege.admin",
        "Sockets": {
          "Listeners": {
            "SockServiceName": "ssh"
          }
        },
        "inetdCompatibility": {
          "Wait": false
        }
      },
      "checksum": "sha256:efgh5678..."
    },
    {
      "path": "/Library/Preferences/com.apple.TimeMachine.plist",
      "type": "SystemPreference",
      "category": "configuration",
      "domain": "system",
      "owner": "root",
      "group": "admin",
      "permissions": "644",
      "content": {
        "AutoBackup": true,
        "MaxSize": 1099511627776,
        "SkipPaths": ["/private/var/vm"],
        "Destinations": [
          {
            "ID": "12345678-1234-1234-1234-123456789ABC",
            "Name": "Time Capsule"
          }
        ]
      },
      "checksum": "sha256:ijkl9012..."
    }
  ]
}
```

#### `launchd` Output
Details on LaunchAgents and LaunchDaemons.

```json
{
  "launchd": {
    "agents": [
      {
        "label": "com.apple.Finder",
        "type": "LaunchAgent",
        "domain": "user",
        "user": "admin",
        "loaded": true,
        "running": true,
        "pid": 567,
        "lastExitStatus": 0,
        "program": "/System/Library/CoreServices/Finder.app/Contents/MacOS/Finder",
        "programArguments": ["/System/Library/CoreServices/Finder.app/Contents/MacOS/Finder"],
        "runAtLoad": true,
        "keepAlive": true,
        "sessionType": "Aqua"
      }
    ],
    "daemons": [
      {
        "label": "com.apple.sshd",
        "type": "LaunchDaemon",
        "domain": "system",
        "loaded": true,
        "running": true,
        "pid": 123,
        "program": "/usr/sbin/sshd",
        "sockets": {
          "Listeners": {
            "SockServiceName": "ssh"
          }
        }
      }
    ]
  }
}
```

#### `frameworks` Output (macOS)
Information about system and third-party frameworks.

```json
{
  "frameworks": [
    {
      "name": "Foundation",
      "path": "/System/Library/Frameworks/Foundation.framework",
      "version": "1856.105",
      "compatibilityVersion": "300.0.0",
      "currentVersion": "1856.105.0",
      "type": "System",
      "category": "CoreFoundation",
      "architecture": ["x86_64", "arm64"],
      "identifier": "com.apple.Foundation",
      "minimumOsVersion": "10.9.0",
      "codeSignature": {
        "status": "valid",
        "authority": "Software Signing",
        "teamIdentifier": "Apple",
        "identifier": "com.apple.Foundation"
      },
      "dependencies": [
        "CoreFoundation",
        "Security", 
        "CoreGraphics"
      ],
      "exports": ["NSObject", "NSString", "NSArray", "NSMutableArray"],
      "size": 104857600,
      "publicHeaders": 847,
      "privateHeaders": 1203
    },
    {
      "name": "Security",
      "path": "/System/Library/Frameworks/Security.framework",
      "version": "60157.140.3",
      "type": "System",
      "category": "Security",
      "architecture": ["x86_64", "arm64"],
      "identifier": "com.apple.security",
      "minimumOsVersion": "10.3.0",
      "codeSignature": {
        "status": "valid",
        "authority": "Software Signing",
        "teamIdentifier": "Apple"
      },
      "dependencies": ["CoreFoundation"],
      "exports": ["SecKeychainCreate", "SecCertificateCreateWithData"],
      "size": 73400320
    }
  ]
}
```

#### `keychain` Output (macOS)
Data from Keychain, including certificates.

```json
{
  "keychain": {
    "keychains": [
      {
        "name": "System",
        "path": "/Library/Keychains/System.keychain",
        "default": false,
        "locked": false,
        "timeout": 300,
        "items": [
          {
            "class": "certificate",
            "label": "Apple Root CA",
            "type": "X.509",
            "subject": "CN=Apple Root CA,OU=Apple Certification Authority,O=Apple Inc.,C=US",
            "issuer": "CN=Apple Root CA,OU=Apple Certification Authority,O=Apple Inc.,C=US",
            "serialNumber": "2",
            "validFrom": "2006-04-25T21:40:36Z",
            "validTo": "2035-02-09T21:40:36Z",
            "fingerprint": "b0:b1:73:0e:cb:c7:ff:45:05:14:2c:49:eb:1f:e5:e7:6b:23:41:31",
            "trusted": true,
            "keyUsage": ["digitalSignature", "keyCertSign"]
          }
        ]
      }
    ],
    "certificates": [
      {
        "name": "Developer ID Application: My Company",
        "commonName": "Developer ID Application: My Company (ABCD123456)",
        "issuer": "Developer ID Certification Authority",
        "validFrom": "2023-01-01T00:00:00Z",
        "validTo": "2028-01-01T00:00:00Z",
        "serialNumber": "1234567890",
        "fingerprint": "ab:cd:ef:12:34:56:78:90:ab:cd:ef:12:34:56:78:90:ab:cd:ef:12",
        "keychain": "login.keychain-db",
        "trusted": true
      }
    ]
  }
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
