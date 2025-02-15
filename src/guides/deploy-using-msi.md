# MSI Installer

The following guide covers a deployment example where Turbo-packaged MSI applications are deployed using a centralized deployment system such as SCCM or Intune.

## Overview

Turbo Studio can package the standalone application EXEs in an MSI wrapper that will integrate the application shortcuts and file associations defined in the XAPPL to the user's desktop during installation, making the packaged application feel like a native install to end users. This approach is ideal for:
- Environments using centralized deployment systems such as SCCM and Intune.
- Deploying applications with multiple shortcuts.
- Deploying applications which are primarily accessed by double-clicking a data file handled by the application.


## MSI Installer Deployment Example

1. Open your application configuration XAPPL in Turbo Studio and set the **Project Type** to **Standalone/ISV Application (EXE)**.

![Studio Project Type](/images/deploy-exe-project_type.png)

See the following documentation for more information on preparing an application configuration:
- [Capturing an application](/studio/working-with-turbo-studio/setup-capture.html)
- [Importing an application from Hub or other packaging solutions](/studio/working-with-turbo-studio/import-configuration.html)
- [Building an application using a script](https://github.com/turboapps/powershell-builds)

2. Open the MSI configuration settings in Studio by going to **Desktop > MSI**.  
   - Set the **Output location** and check **Automatically generate MSI after successful application build**.
   - Fill out the **Product name**, **Product version**, and **Company name** fields.
   - Check the **Install application for All Users** setting to deploy the application on the system rather than individual users.
   - Set **Upgrade behavior** to **Automatically upgrade earlier application versions** to upgrade older versions instead of running side-by-side.
   - Review the **Shortcuts**, **ProgIDs**, and **Extensions**.   
     Remove any shortcuts and ProgIDs/Extensions that you do not want to register for this app when installed.
   - For a more detailed explanation of the MSI configuration fields as well as Shortcuts, ProgIDs, and Extensions, see [Desktop Integration](/studio/working-with-turbo-studio/desktop.html).

![MSI Configuration Settings](/images/deploy-msi-msi_settings.png)

3. Click on the **Build** button to build the standalone application EXE file, then package it as an MSI installer.

![Studio Build](/images/deploy-exe-build.png)

4. The EXE and MSI output files will be at their specified Output locations.  
It is recommended to test the MSI installer by copying it to a test system representative of your deployment environment and installing it.  
Then, launch the application using its shortcuts and registered file extensions and go through some typical use cases to validate that it works correctly.

![Output MSI Installer](/images/deploy-msi-output.png)

4. Typical deployment of MSI installer outputs:
   - Use a centralized deployment system such as SCCM or Intune.
   - Copy the MSI installer to the user's system and install it.
   - Make the MSI installer available to download from a website or SharePoint page for users in BYOD environments.
   
## Troubleshooting

If your standalone application EXE is not functioning properly, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/troubleshooting.html) section.