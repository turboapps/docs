## Overview

Turbo Studio is a desktop application that allows you to convert any Windows application into a self-contained virtual application container. Virtual applications can be delivered as Turbo images to be used by the Turbo Client or Turbo Server as well as standalone executables.

The GUI allows users to easily edit complex configurations for applications that may require complicated settings. Whereas Turbo's command line tool builds images from containers, Turbo Studio uses static XML files (**.xappl**) to build images. More information about the XAPPL file format is available in the [XAPPL reference](../../vm/xml-configuration/xml-configuration.html).

Once created with Turbo Studio, the command-line interface builds these XAPPL files into images that you can push to the Turbo Hub. Click [here](../../deploying/to-turbonet/to-turbonet.html) for a specific example.

Turbo Studio provides three methods for creating images and virtual applications:

1. **Setup Capture**: In this method, file and registry changes are recorded during the installation process of an application and these changes are applied to the configuration. This is the recommended method of image creation.

2. **Snapshot an application or component**: In this method, snapshots capture the system state before and after an application is installed. Based on the observed system changes, the virtual application settings are automatically configured. 

3. **Install application into a container**: With this method, you would run the application installer in a clean container environment. When the installer completes, the contents of the container will be used to generate the application configuration.

Turbo Studio offers a user interface to manage custom images and virtual applications as well as additional creation methods not available in the command-line interface.

### System Requirements

Turbo Studio runs on on Windows Vista and higher, including systems running within VMware and Microsoft hardware virtualization and hypervisor environments.

Turbo Studio supports both 32- and 64-bit applications. Both 32-bit (under 32-bit mode) and 64-bit executables can be run on x64-based platforms.

Turbo Studio has limited support for the Windows Preinstallation Environment (WinPE), though certain applications (depending on operating system features unavailable in WinPE) may not function properly.

**Note:** Turbo Studio does not support virtualization of 16-bit executables. To run 16-bit DOS applications, virtualize an appropriate emulator with the application and launch the application through the emulator.

**Note:** For legacy applications that install only on Windows XP or Windows Server 2003, use Turbo Studio 19 to capture the application and generate a XAPPL+Files configuration, then use the latest version of Turbo Studio to build the configuration into an application SVM or EXE package.