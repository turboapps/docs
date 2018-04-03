### Desktop Scan
TurboStudio can scan the machine where it is installed and build container packages using the content and settings from that machine. The Desktop Scan supports applications available in the Turbo library of applications.

#### Running a Desktop Scan

1. Open the Configuration Wizard from the **container** tab.

2. Click the button next to **Scan desktop for installed applications**.

3. A progress window displays while the filesystem and registry are scanned for application identifying information.

4. Once the scan is completed, the user has a chance to review the applications that were found on the system. Clicking Next matches the information against the database of known applications.
- A list of installed applications that match the available applications from Turbo is displayed. Check the box next to the applications to be packaged and click Next.

5. For some applications, there may be multiple options (such as language). Choose the option that matches the installed application on the desktop.

6. Choose the Location where the packaged applications will be placed.

7. Choose the Output format of the application packages then click Next. For compatibility with the command-line interface and the hub, choose Component.

8. A progress window displays while the selected applications are packaged. This process can take several minutes depending on the size and number of applications selected.

9. Once the process is finished, a window displays showing the results. If multiple applications are selected to be packaged, the status of each will be displayed. If one application fails to be packaged, it is possible for the other selected applications to build successfully.

Applications packaged with this method retain users settings that were in place at the time of the scan.

**Optional**: Import to local registry using the command-line interface

Images built with TurboStudio can also be used with the command-line interface and the hub.

```
# Import the image to your local registry
> turbo import -n=desktopapp svm C:\path\to\app.svm
    
# Push it to the hub
> turbo push desktopapp
```

#### Best Practices

- Users should run the desktop scan on the oldest operating system version available. For example, if users use both Windows 7 and Windows 10, it is advised to run the desktop scan on the Windows 7 machine.

- The exception is with Microsoft Office. For the Microsoft Office Suite, it is recommended to run the scan from the operating system where it is intended to be used.

- When scanning OpenOffice, it is recommended to scan the version available with Java. This will allow the packaged application to function on machines that do not have Java installed as well as machines that do. It is also possible that the desktop scan will not find an installation of OpenOffice that does not include Java.

- Applications packaged with the desktop scan may retain settings from the local machine used during the packaging process.

- Adobe Creative Suite (all versions) will not complete correctly when scanned from Windows Vista. When using the desktop scan to package Adobe Creative Suite, Windows 7 is recommended.

- When using the desktop scan with browsers, ensure that any plugins that are installed outside the browser, such as Windows Media Player, are already installed when the scan is run. This is important because some plugins are installed using the msiexec.exe process and won't be recognized within the virtualized browser. Plugins that are installed from within the browser, such as Adobe Flash, do not have this problem.

#### Troubleshooting

To enable logging for the desktop scan add the following registry key:

```
  [HKEY\_CURRENT_USER\Software\Code Systems\Turbo]
  "TraceLevel"="Debug"
```

Open [DebugView](http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx) while running the Desktop Scan to view logging information.
