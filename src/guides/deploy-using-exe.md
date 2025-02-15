# Standalone Application Executables

The following guide covers a deployment example where Turbo-packaged EXE applications are deployed via a network share or direct to a user's system.

::: tip Prerequisites
Before proceeding with this guide, ensure you have:
- [Turbo Studio](/studio/) installed on your system
- Installation files (setup.exe, MSI, etc.) for the application you want to package
:::

## Overview

The standalone application EXEs enable simple deployment of virtual applications by distributing self-contained portable EXEs. This approach is ideal for:
- Simple environments
- Portable EXE application distribution

## Standalone Application Executable Deployment Example

1. Open your application configuration XAPPL in Turbo Studio and set the **Project Type** to **Standalone/ISV Application (EXE)**.

![Studio Project Type](/images/deploy-exe-project_type.png)

See the following documentation for more information on preparing an application configuration:
- [Capturing an application](/studio/working-with-turbo-studio/setup-capture.html)
- [Importing an application from Hub or other packaging solutions](/studio/working-with-turbo-studio/import-configuration.html)
- [Building an application using a script](https://github.com/turboapps/powershell-builds)

2. Click on the **Build** button to package the application as a standalone application EXE file.

![Studio Build](/images/deploy-exe-build.png)

3. The EXE file will be located at the specified **Output File** path.  
It is recommended to test the standalone application EXE by copying it to a test system representative of your deployment environment and launching it, then going through some typical use cases to validate that it works correctly.

![Output Standalone Application EXE](/images/deploy-exe-output.png)

4. Typical deployment of standalone application EXEs use simple methods:
   - Copy the standalone EXE to a network share and instruct the users to launch the application from there.
   - Copy the standalone EXE directly to the user's system to an easy to see location, such as the Desktop.
   - Copy the standalone EXE directly to the user's system to a specific location and add a shortcut to the user's Desktop or Start Menu folder.
   - Make the standalone EXE available to download from a website or SharePoint page.
   
## Troubleshooting

If your standalone application EXE is not functioning properly, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/) section.
