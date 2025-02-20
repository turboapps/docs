# System Center (SCCM) Integration

Microsoft System Center Configuration Manager (SCCM) enables deployment of Turbo applications across enterprise environments. This guide covers several deployment methods using SCCM.

::: tip What you'll learn
- How to distribute standalone executables
- How to deploy using MSI packages
- How to configure file share deployment
- How to prepare SCCM application packages
- How to manage application updates
:::

::: tip Prerequisites
Before proceeding with this guide, ensure you have:
- **Turbo Hub Server**: Set up a Turbo Hub Server. For optimal performance, it should be in the same region as your SCCM-managed devices.
- **Turbo Client Installer**: The installer for Turbo Client. You can download it from [https://turbo.net/download](https://turbo.net/download).
- **SCCM Environment**: A functioning System Center Configuration Manager environment.
:::

## Deployment Options

### Standalone Executables
Deploy applications using standalone executable files that include the virtual machine. Applications can run directly from local storage or network shares without installation. See [building standalone executables](/studio/working-with-turbo-studio/standalone-executables) for details.

### MSI Packages
Use Turbo MSIs to control shortcut creation and file associations during deployment. See [building MSIs](/studio/working-with-turbo-studio/desktop) for details.

### Application Images (SVM Files)
Deploy applications using SVM files hosted on Hub or file shares. This method offers the most flexibility but requires additional configuration.

## File Share Deployment

### 1. Configure File Share Server

1. Install the Turbo Client:
   ```
   turbo-client-19.9.2054.0.exe --silent --all-users
   ```

2. Share the repository folder:
   - Share `C:\ProgramData\Turbo\Containers\repo`
   - Grant read access to application users

3. Download base images:
   ```
   turbo pull --all-users xvm
   turbo pull --all-users clean
   ```

### 2. Prepare Turbo Client Package

1. Download the MSI installer from [https://turbo.net/download](https://turbo.net/download)
2. Create an SCCM Application with MSI deployment type:

   ![SCCM turbo app deployment type](/images/sccm-2-turbo-app-deployment-type.png)

3. Create a configuration script (install.bat):
   ```batch
   "C:\Program Files (x86)\Turbo\Cmd\turbo.exe" config --all-users --image-path {file-share}
   echo ok > "C:\Program Files (x86)\Turbo\configured.txt"
   ```

   ::: tip Note
   For multi-site SCCM environments, consider using separate file shares per site. Distribution Points are ideal locations. Use [SCCM WMI queries](https://stackoverflow.com/questions/42250238/find-the-sccm-distribution-point-where-the-software-packages-reside) to discover the nearest share.
   :::

4. Create custom Application:
   ![SCCM turbo app deployment type script](/images/sccm-2-turbo-app-deployment-type-script-0.png)

5. Add Script Installer deployment type:
   ![SCCM turbo app deployment type script 2](/images/sccm-2-turbo-app-deployment-type-script-1.png)

6. Specify script path:
   ![SCCM turbo app deployment type script 3](/images/sccm-2-turbo-app-deployment-type-script-2.png)

7. Configure detection rules:
   ![SCCM turbo app deployment type 4](/images/sccm-2-turbo-app-deployment-type-script-3.png)

8. Set User Experience to system installation

### 3. Prepare Application Image

1. Create SVM file using Studio or TurboScript
2. Import to file share server:
   ```
   turbo import svm --name {app-name} {path-to-svm-file}
   ```

### 4. Create SCCM Application Package

1. Create installation script:
   ```batch
   "C:\Program Files (x86)\Turbo\Cmd\turbo.exe" installi --skip-installed --offline {app-name}
   ```

2. Create Script Installer deployment:
   ![SCCM custom app deployment type script](/images/sccm-3-custom-app-deployment-type-script-0.png)

3. Configure detection rules using Uninstaller registry keys:
   ![SCCM custom app deployment type script ](/images/sccm-3-custom-app-deployment-type-script-1.png)

4. Set User Experience to "Install for user"
5. Deploy to Distribution Points and clients

## Hub Deployment

When using Turbo Hub instead of file shares, you can install organization images using the subscribe command:

```batch
# Add shortcuts for turbo-user account applications
turbo subscribe turbo-user

# Add shortcuts for turbo-org applications
turbo subscribe turbo-org
```

See [installi](/client/command-line/installi), [install](/client/command-line/install), and [subscribe](/client/command-line/subscribe) for additional options.
