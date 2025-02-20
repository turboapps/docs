# End User Troubleshooting

This section provides information to help troubleshoot common end user issues.

## User cannot upload files using the HTML5 client with "Send error no permissions" message.

The service does not have permissions to upload a file on behalf of the user due to missing domain credentials when running the application in ask for domain login mode. Users must use the down-level style login (domain\username) when asked to login to the application, or have the administrator set the default domain if the end user omits it during login. To allow users to omit the domain, please set the default domain of the intended for the workspace under admin -> general section located at  https://{portal-host}/workspace/{workspace-name}/admin/general. 

## User gets locked out of cloud sessions when idling after a short period of time.

The lock screen timeout is controlled via group policy setting. To configure custom session timeouts, please refer to the [Streaming](/server/administration/general.html#streaming) section on the Turbo Server administration site.

For older versions of Turbo Server, you may change the group policy setting manually. Please refer to the microsoft [documentation](https://answers.microsoft.com/en-us/windows/forum/all/remote-desktop-how-to-increase-lock-timeout/fc0f76a4-6a48-41f1-95d8-fbbc4e6a2ae9?auth=1) to disable or extend the timeouts.

## Users cannot access client drives when streaming a remote application from the native client.

By default, client drives are made available when streaming a remote application from the native client. This behavior can be controlled via group policy setting. To enable or disable drive redirection, please refer to the [Streaming](/server/administration/general.html#streaming) section on the Turbo Server administration site.

## Users cannot access network drives when streaming a remote application.

Network drives may be configured in the [Streaming](/server/administration/general.html#streaming) section on the Turbo Server administration site, and are only made available when streaming remote applications.

If a configured network drive is not visible, please check that the network drive letter does not conflict with an existing local or network drive. Also check that the network drive path is correct and accessible to the remote user. Paths such as `\\tsclient\{path}` that map to local drives are only available when streaming the application with a client that redirect drives.

Network Drive changes can take up to 20 seconds to apply to the application servers and are mounted on user logon. If a user is already has an active remote session they must close all of their remote applications, wait to be logged out of the application server, and then relaunch their application to see the new drives. We recommend waiting for the period configured by the **Disconnected sessions without running applications** streaming setting before relaunching to ensure that the user is logged off.

Additional error details may be found in the `network-drives_*.log` log file located in the user folder in the [Server Diagnostics](/server/administration/domain.html#managing-a-server) log archive.

## Users are unable to sign in to the workspace portal.

If the Turbo Server with the Hub role is not running, users would not be able to sign in to the workspace portal. The Portal log will contain a message that it failed to load the public key, similar to the following:

    [2020-12-08T22:39:30.584] [INFO] default - Fetching JWT public key from https://hubserver/
    [2020-12-08T22:39:51.672] [ERROR] default - Failed to load JWT public key: Error: connect ETIMEDOUT 10.1.2.4:443
    [2020-12-08T22:39:54.378] [WARN] default - Failed to decode ticket, JWT public key is not available.

To resolve the issue, start the Turbo Server with the Hub role and wait a minute for the Portal to successfuly load the public key.

## Install on my PC results in error message: Failed to register application to the desktop.

The turbo log will contain the following message:

```
Critical - 0x3E74: Failed to install image mozilla/firefox-esr:78.8.0: System.Runtime.InteropServices.MarshalDirectiveException: Marshaler restriction: Excessively long string.
```

The error occurs due to a corrupt Turbo Client installation. Please uninstall and reinstall the client, then try again.

## Run on My PC results in error message: Image download failed. Image did not match hash.

The image download failed due to network error. In newer clients, disconnected downloads will be automatically resumed. Please upgrade to the latest client. 

If the issue persists the following workaround may be used:

  1. Export the image from a system that has the image in the cache. You may use the Run on My PC launch to cache it.
```
> turbo export agisoft_metashape/metashape:1.7.2 "%USERPROFILE%\Desktop\agisoft_metashape-metashape-1.7.2.svm"
```

  2. Upload the SVM file to a network share, OneDrive, or another place where the user can download it.

  3. Instruct the user to download the SVM file and then import the image on their PC. This process would need to be repeated for any dependency or component SVMs, if your workspace application has been configured to use them.
```
> turbo import svm -n=agisoft_metashape/metashape:1.7.2 "C:\Path-to-download\agisoft_metashape-metashape-1.7.2.svm"
```