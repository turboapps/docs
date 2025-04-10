# Application Troubleshooting

If your application fails to start when launched from the Turbo Server workspace, identify what causes the failure.

## Test Known Application

Confirm that there isn't a problem with Turbo Server by launching an application that is known to work.

A good example is __[npp/notepadplusplus](https://turbo.net/run/npp/notepadplusplus)__ from Turbo.net Hub, which can be added to Turbo Server from __Admin > Hub > Add Repository > Import Repository__.

If this application fails similarly, then the problem is likely with Turbo Server rather than the application configuration. In this case, see the [Application Server Troubleshooting](https://turbo.net/docs/server/troubleshooting/application-server) section.

If the issue is isolated to your application, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/analyzing-logs) section.

## Launch Modes

Check the application behavior in each launch mode by right-clicking on the application in the workspace and selecting __Run in Cloud (HTML5)__, __Run in Cloud (Windowed)__, and __Run on My PC__.

If the application works in HTML5 but not Windowed mode (or vise versa), it is likely a bug in the Turbo Server or Client. Please report the issue to us.

If the application works with Run in Cloud but not Run on my PC, it is probably an application issue. See the [Application Troubleshooting](/client/turbo-vm/troubleshooting/analyzing-logs) section.

If the application works with Run on my PC but not Run in Cloud, test an application that is known to work to determine if the issue is with the server or application configuration.

## Command-Line Launch

Run the application from the command-line by opening a command prompt and executing the following to launch the application in a new temporary container: `turbo try application-image`. Perform this test on the system where the application fails to start (for example, the application server).

If the application fails, then the issue is probably related to the configuration. See the [Application Troubleshooting](/client/turbo-vm/troubleshooting/analyzing-logs) section.

If the application works, then the issue may be caused by a corrupted sandbox or the workspace application settings, such as container isolation or components.

## Sandbox Problem

Check if the application launches successfully when using a clean sandbox. The easiest way to perform this test is to create a temporary internal user by going to __Admin > Users > Add User__ and using it to launch the application.

If the application launches successfully, clear the persisted session from the Hub for the affected user by going to __Admin > Users > *Username* > Sessions__.

In addition, clear the local session sandbox on systems where the issue occurs by opening a command prompt and executing `turbo containers & turbo rm containername` or deleting the session folder from __C:\Users\*username*\AppData\Local\Turbo\Containers\Sandboxes__.

## Component Conflict

Remove all components that are not required to start the application from the __Workspace Application settings > Components__ to check if the issue is caused by a conflict with one of its component.

If the application launches successfuly, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/analyzing-logs) section to troubleshoot the component issue.

## Container Isolation

The default container isolation mode is set to __Write-Copy__ isolation, which allows the virtual application to see and interact with other native applications on the system.

Try increasing the container isolation to __Full__ to hide the native applications from the container if there is a conflict with a native application.

Try decreasing the container isolation to __Merge__ to allow the virtual application to write files to the native filesystem if other native applications consume the output files.

## Generate VM Diagnostic Logs

For some applications issues, it may be necessary to generate and analyze VM diagnostic logs. To generate the logs, append __&diagnostic=__ to the launch page URL.

Original: __https://turboserver/run/3c3120d5-0151-41fa-9f35-bb2a8082c291?loc=2&title=Notepad%2B%2B__

Diagnostic Logging Enabled: __https://turboserver/run/3c3120d5-0151-41fa-9f35-bb2a8082c291?loc=2&title=Notepad%2B%2B&diagnostic=__

The VM logs will be written to the container sandbox folder on the local system (when using Run on my PC) or application server (when using Run in Cloud). By default, this would be in __%LOCALAPPDATA%\Turbo\Containers\sandboxes\*sandbox-guid*\logs__.

For more information on analyzing VM logs, see the [Application Troubleshooting](/client/turbo-vm/troubleshooting/analyzing-logs) section.

## Application Updates

If you have recently published an application update, ensure that the new application image is being used by opening a command prompt and running `turbo images` on the system where the application is executed. Confirm that the application image ID matches your updated image.

The Turbo Client checks for application updates once every 24 hours. If you have pushed an update recently, perform a manual pull to update the client repository immediately instead of having to wait for the automatic update check by running the following in a command prompt: `turbo pull application-image`.

## Licensing

Some applications and licensing mechanisms require the application to be executed under an Active Directory Windows user.

If the application has this requirement, set the __Workspace Application settings > General > Profile Mode__ to __Ask for Credentials__, then launch the application and enter your user credentials when prompted to execute it under your user.

## Security Software

If a particular application runs on one environment and not another, it could also be related to the security software installed on the particular system. Please refer to the [Antivirus and Security Software documentation](/client/turbo-vm/troubleshooting/antivirus-security).

## Internet Explorer Does Not Launch Inside Virtual Application

If Internet Explorer is required by your application, ensure the application isolation is set to write-copy or merge. Full isolation may not be compatible with applications that require external software built into Windows such as Internet Explorer.
