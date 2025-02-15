# Standalone Client

The Turbo Client enables direct deployment of virtual applications without requiring a Turbo Server. This approach is ideal for:
- Small-scale deployments
- Environments requiring direct control
- Development and testing environments

::: tip What you'll learn
- How to install and configure the Turbo Client for standalone use
- How to manage application images and repositories
- How to deploy applications with different isolation settings
- How to script unattended deployments
- How to audit and update installed applications
:::

::: tip Prerequisites
- Windows operating system
- Administrative privileges for system-wide installation
- Network access to Turbo.net Hub (for initial image downloads)
- Sufficient storage space for application images
:::

## Installation and Configuration

1. Download and install the [Turbo Client](https://turbo.net/download) for all users on the system.
   ```bash
   # Silent system-wide installation using EXE installer
   turbo-client-installer.exe --all-users --silent
   
   # Silent system-wide installation using MSI installer
   start /wait msiexec /i "turbo-client-installer.msi" /qn 
   ```
   The Turbo Client updates the **PATH** environment variable to include its binary folder.  
   A new command prompt with an updated **PATH** variable should be opened before executing **turbo** commands.

2. (Optional) Lock down the image repository, so end users are unable to download or add new images without administrative privileges.  
This is done by setting the image path to a read-only location for all users on the system and locking the turbo config settings.
   ```bash
   # Set the image path to allusers (equivalent to C:\ProgramData\Turbo\Containers\repo)
   turbo config --image-path=allusers --all-users
   
   # Set the image path to a read-only folder for users (admins should have write access) on the D: drive
   turbo config --image-path=D:\turboimages --all-users
   
   # Set the image path to a read-only folder for users on a network drive
   # Caution: the network drive should be a high-performance share or performance degradation will occur
   turbo config --image-path=\\networkshare\turbo\imagerepository --all-users
   
   # Lock turbo configuration
   turbo config --as-override --all-users
   ```
   
3. Pull the required base images from Turbo.net Hub to the image repository.
   ```bash
   turbo pull /xvm,windows/base,windows/clean --all-users
   ```

4. Import the SVM packaged applications that have been created with [Turbo Studio](/studio/) to the client's image repository.
Application SVMs can also be pulled from Turbo.net Hub.
   ```bash
   # Pull SVM from Turbo.net Hub
   turbo pull adobe/photoshop:26.3.0.156 --all-users
   
   # Import SVM from a local folder
   turbo import svm -n=tableau/tableaupublic-x64:2024.3.3 C:\temp\tableau_tableaupublic-x64_2024.3.3.svm --all-users
   
   # Import SVM from network folder
   # Caution: network errors or intermittent network issues may cause the command to fail and need to be re-run
   turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users
   ```
   
5. (Recommended) Cache the SVM images for faster application launches and smaller sandbox sizes.  
Caching will export the executable binaries to the assemblies folder under the image repository path.
   ```bash
   turbo cache adobe/photoshop:26.3.0.156 --all-users
   turbo cache tableau/tableaupublic-x64:2024.3.3 --all-users
   turbo cache mozilla/firefox-esr-x64:128.6 --all-users
   ```

6. Install the applications in offline mode as there is no Turbo Server to connect to.  
See the [turbo installi](/client/command-line/installi.html) command for more information.

   - Example 1: Install Photoshop with merge isolation
     - See [isolation settings](/client/command-line/run.html#isolation-settings) for more information
     - The user will read and write to files on the native file system
     - Start menu and desktop shortcuts are created
     - File associations, URL handlers, and shell extensions are registered
   ```bash
   turbo installi --offline --all-users -n=photoshop adobe/photoshop -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
   ```

   - Example 2: Install Tableau Public with write-copy isolation and merge access to user folders, but without desktop shortcuts and file associations
     - The user will read files from the native file system, but write to the application sandbox, except for user folders such as Desktop, Documents, and Downloads, which will have direct write access
     - Start menu shortcuts are created, but not desktop shortcuts
     - URL handlers and shell extensions are registered, but not file associations
   ```bash
   turbo installi --offline --all-users --no-file-associations --no-desktop-shortcuts -n=tableaupublic tableau/tableaupublic-x64 -- -n=tableaupublic --enable=usedllinjection,disablefontpreload --isolate=write-copy+merge-user
   ```
   
   - Example 3: Install Firefox ESR with full isolation, but without file associations, URL handlers, or shell extensions
     - The user will not have access to the native file system other than required base system files and writes go to the application sandbox
     - Start menu and desktop shortcuts are created
     - File associations, URL handlers, and shell extensions are not registered
   ```bash
   turbo installi --offline --all-users --no-file-associations --no-url-handlers -n=firefox-esr-x64 mozilla/firefox-esr-x64 -- -n=firefox-esr-x64 --enable=usedllinjection,disablefontpreload --isolate=full
   ```

## Scripting Deployment

Turbo Client's CLI interface can be used to fully script the process for unattended deployment scenarios.

   ```bash
   # Example Unattended Deployment Script
   
   # Silent system-wide installation using EXE installer
   turbo-client-installer.exe --all-users --silent
      
   # Set the image path to allusers (equivalent to C:\ProgramData\Turbo\Containers\repo)
   # Note: specify the full path to turbo.exe as the PATH environment will not be updated inside the script
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --image-path=allusers --all-users
   
   # Lock turbo configuration
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --as-override --all-users
   
   # Pull base images from Turbo.net Hub
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe pull xvm,base,clean --all-users
   
   # Import application SVM packages from network share
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=adobe/photoshop:26.3.0.156 \\networkshare\turbo\packages\adobe_photoshop\adobe_photoshop_26.3.0.156.svm --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=tableau/tableaupublic-x64:2024.3.3 \\networkshare\turbo\packages\tableau_tableaupublic-x64\tableau_tableaupublic-x64_2024.3.3.svm --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users
   
   # Cache executable binaries for SVM images for improved performance
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache adobe/photoshop:26.3.0.156 --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache tableau/tableaupublic-x64:2024.3.3 --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache mozilla/firefox-esr-x64:128.6 --all-users
   
   # Install applications to desktop
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe installi --offline --all-users -n=photoshop adobe/photoshop -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe installi --offline --all-users -n=tableaupublic tableau/tableaupublic-x64 -- -n=tableaupublic --enable=usedllinjection,disablefontpreload --isolate=merge
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe installi --offline --all-users -n=firefox-esr-x64 mozilla/firefox-esr-x64 -- -n=firefox-esr-x64 --enable=usedllinjection,disablefontpreload --isolate=merge
   ```

## Audit Contents of Image Repository on System 

View which images are in the client's repository.  
The **--all-users** flag is used to check the images in the shared all users repository.
```bash
turbo images --all-users
```

Use the JSON output format for programmatic processing of the output.
```bash
turbo images --format=json --all-users
```

## Audit Turbo Installed Applications on System

View which applications are installed on the system.  
The **--all-users** flag is used to check the installed applications for the all users context.
```bash
turbo installed --all-users
```

Use the JSON output format for programmatic processing of the output.
```bash
turbo installed --format=json --all-users
```

Turbo installed applications can also be found in the Windows Registry under:
- HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\ (current user)
- HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\ (all users)

## Updating Application Images in Repository

Turbo regularly releases updates for the Turbo VM and other base images with compatibility updates for new OS versions and bug fixes.
- Turbo VM: https://hub.turbo.net/run-global/xvm | [Release Notes](https://turbo.net/vm/releases)
- Base: https://hub.turbo.net/run/windows/base
- Clean: https://hub.turbo.net/run/windows/clean

Pull the images from Turbo.net Hub to receive the updates:
```bash
turbo pull /xvm,windows/base,windows/clean --all-users
```

For self-packaged applications, import a new application version to update the application.
```bash
# Old application version 128.6
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users

# Import new 130.0 version to update the application
turbo import svm -n=mozilla/firefox-esr-x64:130.0 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_130.0.svm --all-users
```

To update an existing application version in order to correct an issue or packaging mistake, use the **--overwrite** flag.
```bash
# Application version 128.6 with packaging mistake
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users

# Import fixed image using the same 128.6 version with --overwrite flag
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6-fixed.svm --overwrite --all-users
```

## Version Management

Unless a version is specified for the application, the client will use the highest version present for the VM or application in the image repository.

Each application can be specified to use a specific version of the Turbo VM or application version. This is particularly useful in:
- Enterprise scenarios where stability is critical and changes must be tested before deployment
- Environments where users need to run multiple versions of the same application side-by-side

For example, the following command will use the highest Turbo VM and Photoshop image available in the image repository:
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down the VM using the **-vm=[version]** flag. To unset the VM, use the --vm= flag with an empty string:
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop -- --vm=24.12.11 -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down the application version by specifying the version in the image list:
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop:26.3.0.156 -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down both Turbo VM and application version:
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop:26.3.0.156 -- --vm=24.12.11 -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

## Troubleshooting

### Turbo Client

When Turbo Client commands fail, more information on the failure is available in the Turbo Client logs:
- %LOCALAPPDATA%\Turbo\Logs
- C:\Programdata\Turbo\Logs

When opening a case with Turbo Support, please include these logs in addition to a description of the issue and steps to reproduce it.

### Applications

For Turbo-packaged applications that are not functioning properly, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/) section.
