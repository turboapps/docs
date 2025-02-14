# Introduction to Turbo

::: tip What you'll learn
- What Turbo is and how it works
- Core benefits and use cases
- Key technologies and concepts
:::

## What is Turbo?

Turbo is an application virtualization platform that lets you run applications in isolated virtual environments without installation. Built on the Turbo Virtual Machine engine, it provides lightweight implementation of core operating system features, enabling applications to run consistently across any Windows device.

## Core Technology

The Turbo Virtual Machine (VM) is an application virtualization engine that operates entirely in user mode, providing isolated implementations of key Windows subsystems:

- Filesystem
- Registry
- Process environment
- Network interfaces
- Threading subsystems

![Turbo VM diagram](/images/turbo-vm.png)

Unlike traditional hardware virtualization or OS containers, Turbo:
- Runs in user mode without administrative privileges
- Operates on top of the host OS (not within the kernel)
- Provides native-like performance with minimal overhead
- Supports Windows-specific features like services and COM components

## Key Features

### Layered Architecture
Turbo uses a unique layering system that lets you:
- Stack multiple components like "transparent sheets"
- Combine runtimes, applications, and configurations
- Apply different settings for different users
- Make changes without rebuilding entire environments

### Application Building and Deployment

#### Building Images
- Create application images using Turbo Studio
- Capture and configure applications in isolated environments
- Build once, deploy anywhere approach

#### Deployment Options
1. **Local Distribution**
   - Deploy images directly using Turbo CLI
   - Manage versions and updates locally

2. **Turbo Server**
   - Enterprise-grade deployment platform
   - Workspace-based application management
   - Customization through workspace settings
   - User and access management
   - Usage analytics and licensing controls
   - Security scanning and vulnerability detection through Turbo Scanner

### VDI Integration
Turbo provides powerful application delivery for VDI environments:
- **Simplified Application Management**: No traditional installation required
- **Flexible Deployment**: Works in both persistent and non-persistent VDI
- **Resource Optimization**: Efficient storage and memory usage
- **Platform Support**:
  - Azure Virtual Desktop
  - VMware Horizon
  - Citrix Virtual Apps and Desktops
  - Other VDI platforms

### Security and Compliance
Turbo provides comprehensive security features:
- Application isolation through virtualization
- [Secure sandboxes](/client/command-line/config.md#set-the-remote-sandbox-path) for sensitive applications and code
  - Complete isolation from user access
  - Protected execution environment
  - Configurable via remote-sandbox settings
- Granular access controls
- Vulnerability scanning with Turbo Scanner
  - Detect security vulnerabilities in applications
  - Scan deployed images for potential risks
  - Maintain compliance with security standards
- Workspace-level security policies

### Pre-built Applications
Access thousands of ready-to-run applications from the Turbo.net Hub:
- Popular software pre-configured and tested
- Multiple versions available side-by-side
- Automatic updates for evergreen deployments
- Enterprise options for private repositories

## Benefits

### For IT Managers
- Deploy applications without conflicts
- Eliminate installation headaches
- Support legacy applications
- Streamline VDI application delivery
  - Simplified application management
  - Efficient resource utilization
  - Consistent user experience
  - Easy version management
- Improve security through isolation and vulnerability scanning
- Monitor and manage application usage

### For Developers
- Run multiple versions of tools side-by-side
- Create isolated development environments
- Protect source code with secure sandboxes
  - Isolate sensitive code and applications
  - Prevent unauthorized access
  - Configure sandbox locations
- Test applications across different configurations
- Share consistent environments with team members

## How It Works

When you run an application with Turbo:

1. The Turbo VM creates an isolated virtual environment
2. Required components are assembled through layering
3. Applications run with their own virtual filesystem, registry, and network
4. Changes remain isolated from the host system

This enables:
- Running applications without installation
- Side-by-side versions of the same application
- Consistent behavior across devices
- Clean removal without leftover files
- Secure, isolated execution environments

## Next Steps

Now that you understand what Turbo is and how it works, you can:

1. [Get started with Turbo](guide.md) - Install the client and run your first virtualized application
2. [Learn advanced usage](advanced.md) - Create and customize virtual environments

::: tip Looking for deployment options?
Check out our [deployment guides](/guides/) for information on enterprise deployment scenarios.
:::
