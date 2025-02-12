# Turbo Studio

::: tip What you'll learn
- How Turbo Studio virtualizes Windows applications
- Methods for creating virtual applications
- System requirements and compatibility
:::

## Overview

Turbo Studio is a powerful desktop application that transforms Windows applications into self-contained virtual applications. These virtualized applications can be delivered as:
- Standalone executable files
- Turbo images for use with Turbo Client
- Deployable packages for Turbo Server

The intuitive GUI interface makes it easy to:
- Configure application settings
- Customize virtual environments
- Create deployment-ready packages

## How It Works

Turbo Studio uses static XML configuration files (**.xappl**) to define virtual applications. Unlike the command-line interface that builds directly from images, Studio provides a visual environment for creating and editing these configurations. See the [XAPPL reference](../../vm/xml-configuration/xml-configuration.html) for detailed format information.

Once configured, you can:
- Build applications using the command-line interface
- Push completed applications to Turbo Hub
- Deploy to your preferred platform

Turbo Studio provides three methods for creating virtual applications:

1. **Setup Capture**: In this method, file and registry changes are recorded during the installation process of an application and these changes are applied to the configuration. This is the recommended method for virtualizing applications.

2. **Snapshot an application or component**: In this method, snapshots capture the system state before and after an application is installed. Based on the observed system changes, the virtual application settings are automatically configured. 

3. **Clean Environment Install**: With this method, you run the application installer in an isolated environment. When the installer completes, the system changes are captured to generate the virtual application configuration.

Turbo Studio offers a user interface to manage virtual applications and provides additional creation methods not available in the command-line interface.

## System Requirements

Turbo Studio runs on on Windows Vista and higher, including systems running within VMware and Microsoft hardware virtualization and hypervisor environments.

Turbo Studio supports both 32- and 64-bit applications. Both 32-bit (under 32-bit mode) and 64-bit executables can be run on x64-based platforms.

Turbo Studio has limited support for the Windows Preinstallation Environment (WinPE), though certain applications (depending on operating system features unavailable in WinPE) may not function properly.

**Note:** Turbo Studio does not support virtualization of 16-bit executables. To run 16-bit DOS applications, virtualize an appropriate emulator with the application and launch the application through the emulator.

**Note:** For legacy applications that install only on Windows XP or Windows Server 2003, use Turbo Studio 19 to capture the application and generate a XAPPL+Files configuration, then use the latest version of Turbo Studio to build the configuration into an application SVM or EXE package.
