# Turbo Client

In the following pages you will learn about how to use the Turbo Client and Turbo Launcher.

### Installation

End-users must download and install the Turbo Client prior to launching Turbo applications for the first time.

If you already have the Turbo Client and are installing an update Turbo automatically uninstalls older versions if they have been idle for more than 30 days. 

#### Command line flags

When installing the Turbo Client for a managed environment, there are command line flags that may be useful.

**Turbo-plugin.exe [Option]**

<table>
      <tr>
         <th>Parameter</th>
         <th>Behavior</th>
      </tr>
      <tr>
         <td>
            <p> <strong>--silent</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client silently. </p>
         </td>
      </tr>
      <tr>
         <td>
            <p> <strong>--all-users</strong> </p>
         </td>
         <td>
            <p> Installs the Turbo Client under the <strong>All Users</strong> profile, so it is available to all profiles on the machine.</p>
         </td>
      </tr>
</table>

#### Proxy Settings

The Turbo Client uses the proxy settings of the local device by default. End-users using Microsoft Internet Explorer can change proxy settings from within the browser. Users of other browsers must change proxy settings on the host device itself.

Complete the following steps to change system proxy settings on the host device:

1. Navigate to the **Control Panel** in your windows **Start Menu**.

2. Select the **Internet Options** icon.

3. Select the **Connections** tab, then **LAN Settings**.

4. Enter the proxy settings specified by your network administrator.

### Advanced Plugin Topics

#### Install location

If the Turbo Client was installed for all users, the install location is in one of the following locations.

- For x86 platforms: **C:\Program Files\Turbo**

- For x64 platforms: **C:\Program Files (x86)\Turbo**

If the plugin is installed for a single user profile, the install location is in the following locations: **C:\Users\<profile>\AppData\Local\Turbo**

#### Command line flags

The Turbo Client installs an application called Turbo Service that runs on startup. This application can be found in the install directory of the Turbo Client. There is a command line interface for this application.

**TurboService.exe [Option]**

<table>
      <tr>
         <th>Parameter</th>
         <th>Behavior</th>
      </tr>
      <tr>
         <td>
            <p>/uninstall</p>
         </td>
         <td>
            <p>Uninstalls the Turbo Client. Close all web browsers before uninstalling.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/silent</p>
         </td>
         <td>
            <p>Used with /uninstall to perform a silent uninstall.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/delete-user-data</p>
         </td>
         <td>
            <p>Used with /uninstall and /silent to remove user container data during uninstall.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/uninstall-launcher</p>
         </td>
         <td>
            <p>Uninstalls the TurboLauncher but leaves the rest of the client.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>/uninstall-redirector</p>
         </td>
         <td>
            <p>Uninstalls the TurboRedirector but leaves the rest of the client.</p>
         </td>
      </tr>
</table>

#### Mobile Device Management Configuration

Mobile Device Management (MDM) software is used to monitor, manage, and secure employee mobile devices. Below is the configuration XML necessary for iOS and Android devices.

##### iOS

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>serverURL</key>
    <string>https://turbo.net/</string>
    <key>username</key>
    <string>example@domain.com</string>
    <key>rememberMe</key>
    <true/>
    <key>password</key>
    <string>userpassword</string>
</dict>
</plist>
```

`serverURL` is URL of Turbo Server. 
`username` and `password` are the user's Turbo Server credentials.
`rememberMe` indicates that user credentials are stored on the device.

If `username` and `password` are provided then the application tries to login the user automatically.

##### Android

```
<restrictions xmlns:android="http://schemas.android.com/apk/res/android">
    <restriction
        android:defaultValue=""
        android:key="login"
        android:restrictionType="string"
        android:title="User login" />

    <restriction
        android:defaultValue=""
        android:key="password"
        android:restrictionType="string"
        android:title="User password" />

    <restriction
        android:defaultValue=""
        android:key="server"
        android:restrictionType="string"
        android:title="Turbo server" />

    <restriction
        android:defaultValue="true"
        android:key="rememberme"
        android:restrictionType="bool"
        android:title="Remember me" />
</restrictions>
```

`server` is URL of Turbo Server. 
`login` and `password` are the user's Turbo Server credentials.
`rememberme` indicates that user credentials are stored on the device.

If `login` and `password` are provided then the application tries to login the user automatically.
