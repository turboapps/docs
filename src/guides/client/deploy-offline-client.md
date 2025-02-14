# Offline Client

The following guide covers a deployment example where Turbo-packaged SVM applications are deployed using the Turbo Client in complete offline mode.

## Overview

The Turbo Client enables direct deployment of virtual applications without requiring Turbo Server. This approach is ideal for:
- Small-scale deployments
- Environments requiring direct control
- Development and testing environments
- Environments with no external internet access

## Offline Client Deployment Example

1. Prepare the required container base images from Turbo.net Hub on a network share using a system that has access to Turbo.net Hub.  
The system must have the Turbo Client to pull the images.
   ```bash
   # Pull the SVM images from Turbo.net Hub to the client's repository.
   turbo pull /xvm,windows/base,windows/clean
   Pulling VM version 25.2.3
   Pull complete
   Pulling image base version 2
   Pull complete
   Pulling image clean version 42
   Pull complete

   # Export the SVM image files to a network share.
   turbo export /xvm:25.2.3 \\networkshare\turbo\packages\xvm\xvm_25.2.3.svm
   turbo export windows/base:2 \\networkshare\turbo\packages\windows_base\windows_base_2.svm
   turbo export windows/clean:42 \\networkshare\turbo\packages\windows_clean\windows_clean_42.svm
   ```
   
The same process may be used to pull application images from Turbo.net Hub as well.
   ```bash
   turbo pull adobe/photoshop:26.3.0.156
   turbo export adobe/photoshop:26.3.0.156 \\networkshare\turbo\packages\adobe_photoshop\adobe_photoshop_26.3.0.156.svm
   ```

2. Download and install the [Turbo Client](https://turbo.net/download) for all users on the deployment system.
   ```bash
   # Silent system-wide installation using EXE installer.
   turbo-client-installer.exe --all-users --offline --silent
   
   # Silent system-wide installation using MSI installer.
   start /wait msiexec /i "turbo-client-installer.msi" cmdline="--offline" /qn 
   ```
   The Turbo Client updates the **PATH** environmtne variable to include its binary folder.  
   A new command prompt with an updated **PATH** variable should be opened before executing **turbo** commands.

3. (Optional) Lock down the image repository, so end users are unable to download or add new images without administrative priviledges.  
This is done by setting the image path to a read-only location for all users on the system and locking the turbo config settings.
   ```bash
   # Set the image path to allusers (equivalent to C:\ProgramData\Turbo\Containers\repo).
   turbo config --image-path=allusers --all-users
   
   # Set the image path to a read-only folder for users (admins should have write access) on the D: drive.
   turbo config --image-path=D:\turboimages --all-users
   
   # Set the image path to a read-only folder for users on a network drive.
   # Caution: the network drive should be a high performance share or performance degredation will occur.
   turbo config --image-path=\\networkshare\turbo\imagerepository --all-users
   
   # Lock turbo configuration.
   turbo config --as-override --all-users
   ```

4. Import the required container base images from the network share to the client's image repository.
   ```bash
   turbo import svm -n=/xvm:25.2.3 \\networkshare\turbo\packages\xvm\xvm_25.2.3.svm --all-users
   turbo import svm -n=windows/base:2 \\networkshare\turbo\packages\windows_base\windows_base_2.svm --all-users
   turbo import svm -n=windows/clean:42 \\networkshare\turbo\packages\windows_clean\windows_clean_42.svm --all-users
   ```

5. Import the SVM packaged applications that have been created with [Turbo Studio](/studio/working-with-turbo-studio.html) to the client's image repository.
   ```bash
   # Import SVM from network folder.
   # Caution: network errors or intermittent network issues may cause the command to fail and need to be re-run.
   turbo import svm -n=adobe/photoshop:26.3.0.156 \\networkshare\turbo\packages\adobe_photoshop\adobe_photoshop_26.3.0.156.svm --all-users
   turbo import svm -n=tableau/tableaupublic-x64:2024.3.3 \\networkshare\turbo\packages\tableau_tableaupublic-x64\tableau_tableaupublic-x64_2024.3.3.svm --all-users
   turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users
   ```
   
6. (Recommended) Cache the SVM images for faster application launches and smaller sandbox sizes.  
Caching will export the executable binaries to the assemblies folder under the image repository path.
   ```bash
   turbo cache adobe/photoshop:26.3.0.156 --all-users
   turbo cache tableau/tableaupublic-x64:2024.3.3 --all-users
   turbo cache mozilla/firefox-esr-x64:128.6 --all-users
   ```

7. Install the applications in offline mode.
See the [turbo installi](/client/command-line/installi.html) command for more information.

   - Example 1: install Photoshop with merge container isolation.
     - See [container isolation settings](/client/command-line/run.html#isolation-settings) for more information.
	 - The user will read and write to files on the native file system.
	 - Start menu and desktop shortcuts are created.
	 - File associations, URL handlers, and shell extensions are registered.
   ```bash
   turbo installi --offline --all-users -n=photoshop adobe/photoshop -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
   ```

   - Example 2: install Tableau Public with write-copy container isolation and merge access to user folders, but without desktop shortcuts and file associations.
     - The user will read files from the native file system, but write to the application sandbox, except for user folders such as Desktop, Documents, and Downloads, which will have direct write access.
	 - Start menu shortcuts are created, but not desktop shortcuts.
	 - URL handlers and shell extensions are registered, but not file associations.
   ```bash
   turbo installi --offline --all-users --no-file-associations --no-desktop-shortcuts -n=tableaupublic tableau/tableaupublic-x64 -- -n=tableaupublic --enable=usedllinjection,disablefontpreload --isolate=write-copy+merge-user
   ```
   
   - Example 3: install Firefox ESR with full container isolation, but without file associations, URL handlers, or shell extensions.
     - The user will not have access to the native file system other than required base system files and writes go to the application sandbox.
	 - Start menu and desktop shortcuts are created.
	 - File associations, URL handlers, and shell extensions are not registered.
   ```bash
   turbo installi --offline --all-users --no-file-associations --no-url-handlers -n=firefox-esr-x64 mozilla/firefox-esr-x64 -- -n=firefox-esr-x64 --enable=usedllinjection,disablefontpreload --isolate=full
   ```

## Scripting Deployment

Turbo Client's CLI interface can be used to fully script the process for unattended deployment scenarios.

   ```bash
   # Example Unattended Deployment Script
   
   # Silent system-wide installation using EXE installer in offline mode.
   turbo-client-installer.exe --offline --all-users --silent
      
   # Set the image path to allusers (equivalent to C:\ProgramData\Turbo\Containers\repo).
   # Note: specify the full path to turbo.exe as the PATH environment will not be updated inside the script.
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --image-path=allusers --all-users
   
   # Lock turbo configuration.
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --as-override --all-users
   
   # Import base images from network share.
   turbo import svm -n=/xvm:25.2.3 \\networkshare\turbo\packages\xvm\xvm_25.2.3.svm --all-users
   turbo import svm -n=windows/base:2 \\networkshare\turbo\packages\windows_base\windows_base_2.svm --all-users
   turbo import svm -n=windows/clean:42 \\networkshare\turbo\packages\windows_clean\windows_clean_42.svm --all-users
   
   # Import application SVM packages from network share.
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=adobe/photoshop:26.3.0.156 \\networkshare\turbo\packages\adobe_photoshop\adobe_photoshop_26.3.0.156.svm --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=tableau/tableaupublic-x64:2024.3.3 \\networkshare\turbo\packages\tableau_tableaupublic-x64\tableau_tableaupublic-x64_2024.3.3.svm --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users
   
   # Cache executable binaries for SVM images for improved performance.
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache adobe/photoshop:26.3.0.156 --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache tableau/tableaupublic-x64:2024.3.3 --all-users
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe cache mozilla/firefox-esr-x64:128.6 --all-users
   
   # Install applications to desktop.
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

Turbo regularly releases updates for the Turbo VM and other container base images with compatibility updates for new OS versions and bug fixes.
- Turbo VM: https://hub.turbo.net/run-global/xvm | [Release Notes](https://turbo.net/vm/releases)
- Base: https://hub.turbo.net/run/windows/base
- Clean: https://hub.turbo.net/run/windows/clean

To receive the updates, repeat the container base image prepartion.
```bash
# Pull and export the images from a system with external internet access and Turbo Client.
turbo pull /xvm,windows/base,windows/clean
Pulling VM version 25.5.6
Pulling image base version 3
Pulling image clean version 43

turbo export /xvm:25.5.6 \\networkshare\turbo\packages\xvm\xvm_25.5.6.svm
turbo export windows/base:3 \\networkshare\turbo\packages\windows_base\windows_base_3.svm
turbo export windows/clean:43 \\networkshare\turbo\packages\windows_clean\windows_clean_43.svm
```

After staging the images, import them to the deployment system.

```bash
# Import new container base images on the deployment system.
turbo import svm -n=/xvm:25.5.6 \\networkshare\turbo\packages\xvm\xvm_25.5.6.svm --all-users
turbo import svm -n=windows/base:3 \\networkshare\turbo\packages\windows_base\windows_base_3.svm --all-users
turbo import svm -n=windows/clean:43 \\networkshare\turbo\packages\windows_clean\windows_clean_43.svm --all-users
```

For self-packaged applications, import a new application version to update the application.
```bash
# Old application version 128.6.
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users

# Import new 130.0 version to update the application.
turbo import svm -n=mozilla/firefox-esr-x64:130.0 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_130.0.svm --all-users
```

To update an existing application version in order to correct an issue or packaging mistake, use the **--overwrite** flag.
```bash
# Application version 128.6 with packaging mistake.
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6.svm --all-users

# Import fixed image using the same 128.6 version with --overwrite flag.
turbo import svm -n=mozilla/firefox-esr-x64:128.6 \\networkshare\turbo\packages\mozilla_firefox-esr-x64\mozilla_firefox-esr-x64_128.6-fixed.svm --overwrite --all-users
```

## Locking VM and Application Versions

Unless a version is specified for the container, the client will use the highest version present for the VM or application in the image repository.

Each container can be specified to use a specific version of the Turbo VM or application version.

Locking versions in a container is desirable in enterprise scenarios where stability is of the utmost importance and changes are required to be tested before being deployed.

Locking application versions in a container is necessary in environments where users have to run multiple versions of the same application side-by-side.

For example, the following command will use the highest Turbo VM and Photoshop image available in the image repository.
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down the VM using the **-vm=[version]** flag. To unset the VM, use the --vm= flag with an empty string.
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop -- --vm=24.12.11 -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down the application version by specifying the version in the image list.
```bash
turbo installi --offline --all-users -n=photoshop adobe/photoshop:26.3.0.156 -- -n=photoshop --enable=usedllinjection,disablefontpreload --isolate=merge
```

Lock down both Turbo VM and application version.
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

For Turbo-packaged applications that are not functioning properly, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/troubleshooting.html) section.
