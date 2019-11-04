## Overview

Turbo Studio is a desktop application that allows you to convert any Windows application into a self-contained virtual application. Virtual applications can be delivered as standalone executables, MSIs or Turbo images.

The GUI allows users to easily edit complex configurations for applications that may require complicated settings. Whereas Turbo's command line tool builds images from containers, Turbo Studio uses static XML files (**.xappl**) to build images. More information about the XAPPL file format is available in the [XAPPL reference](/docs/reference/xappl-configuration).

Once created with Turbo Studio, the command-line interface builds these XAPPL files into images that you can push to the Turbo Hub. Click [here](/docs/studio/working-with-images) for a specific example.

Turbo Studio provides three methods for creating images and virtual applications:

1. **Snapshot an application or component**: In this method, snapshots capture the system state before and after an application is installed. Based on the observed system changes, the virtual application settings are automatically configured. This method is ideal for virtualizing off-the-shelf applications or ones that use complex MSI installer packages that would be incompatible with the command-line interface.

2. **Build application from a template**: Download configurations from the Turbo.net Hub, allowing you to quickly customize and build working applications.

3. **Install application into a container**: With this option, you would run the application installer in a clean container environment. When the installer completes, the contents of the container will be used to generate the application configuration.

Turbo Studio offers a user interface to manage custom images and virtual applications as well as additional creation methods not available in the command-line interface.

<!--TODO: add a brief section on when you would want to use Turbo Studio vs. the CLI -->

### System Requirements

Turbo Studio runs on any Windows operating system, including systems running within VMware and Microsoft hardware virtualization and hypervisor environments.

Turbo Studio supports both 32- and 64-bit applications. Both 32-bit (under 32-bit mode) and 64-bit executables can be run on x64-based platforms.

Turbo Studio has limited support for the Windows Preinstallation Environment (WinPE), though certain applications (depending on operating system features unavailable in WinPE) may not function properly.

**Note:** Turbo Studio does not support virtualization of 16-bit executables. To run 16-bit DOS applications, virtualize an appropriate emulator with the application and launch the application through the emulator.

**Note:** Turbo Studio cannot access the Turbo.net Hub on Windows XP or Windows Server 2003 because the platforms do not support TLS1.2 which is required to access the web resources. Snapshot, build, and other features are not affected.
