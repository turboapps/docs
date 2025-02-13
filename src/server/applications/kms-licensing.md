# Microsoft Office

The following section describes how to set up application servers to run Microsoft Office in Turbo, using KMS license activation.

1. Remote into your application server.
2. Copy the contents of the [Office-MachinePrep-20.6.1353.0.zip archive](https://turbohq-my.sharepoint.com/:u:/g/personal/oleg_turbo_net/EddWLpxRoXFKrS1_-4_M9NkB3qya_W-svU1WpUNPaGoK5Q?e=4ClnpD).
3. Run the MachinePrep.exe tool in an elevated administrator command prompt to apply the licensing for the product you wish to use.

```
# Apply KMS licensing for Project 2016
# Note: use the --license-server flag to specify the hostname or IP of the license server if your system is unable to automatically detect your KMS server
> MachinePrep.exe Project-2016

# For additional options, see the help
> MachinePrep.exe --help
```

4. Import the Microsoft Project 2016 (microsoft/project) repository from Turbo.net Hub by going to the Admin portal > Add Repository > Import Repository to make it available for your workspace.

The following section describes how to set up application servers to run natively installed Microsoft Office using an application stub.

1. Use the Office Customization Tool https://config.office.com/deploymentsettings to create the installation configuration file and Export it.
2. Install the Office Deployment Tool https://www.microsoft.com/en-us/download/details.aspx?id=49117 on the application servers and run the following commands:

```
# Download Office
setup.exe /download installation-config.xml
# Install Office
setup.exe /configure installation-config.xml
```

3. Create a new application configuration in Turbo Studio and add the native Office EXE as the Startup File. For example, if creating a stub for Excel 2019, the Startup File would be "C:\Program Files\Microsoft Office\root\Office16\EXCEL.EXE"
4. Build the application stub and use the Publish to Turbo Server wizard to push to Turbo Server.
5. Add the application stub to a workspace and test.

### Troubleshooting

An error dialog appears with the text: The application has encountered an error.

![ErrorDialog](/images/thumbnail_image001.png)

The office license script requires cscript.exe. Your security settings or antivirus may be blocking execution of the file `C:\Windows\System32\cscript.exe`. Please check the security settings to allow execution.

If the error continues, please run with the diagnostics command line flag:

```
> MachinePrep.exe /XEnable=Diagnostics <project>
```

Logs will be generated in the same folder. Please send the logs to support@turbo.net.

An error dialog appears with the text: The products we found in your account cannot be used to activate Office in shared computer scenarios.

![Office products error](/images/officeerror.png)

This is an Microsoft 365 Apps licensing error and is unrelated to Turbo Server. Please refer to the [Troubleshoot issues with shared computer activation for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/troubleshoot-shared-computer-activation) document to resolve this error.
