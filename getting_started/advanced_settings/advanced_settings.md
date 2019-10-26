﻿## Advanced Settings

### Turbo for Windows 

Click on **Settings** at the bottom right of the Turbo Launcher to bring up the Settings dialog. 

1. **Open on startup:** starts Turbo Launcher on Windows startup.
2. **Disable proxy autodetection:** do not use the Windows Internet Explorer proxy settings to access the internet.
3. **Show launcher in the taskbar:** shows Turbo Launcher on the Windows taskbar.
4. **Allow access to local network:** allow cloud launched applications to connect to the local network.
5. **Allow access to local user folders:** allows applications launched on my machine to have full read write access to special user folders including the OneDrive folder.
6. **Launch:** controls where the applications will execute for your left-click launches.
1. **Cloud:** the application will execute in the cloud and stream to the user’s device.
2. **Machine:** the application will execute locally on the user’s device.

![](/docs/getting_started/advanced_settings/configuring-the-default-launch-setting-for-applications.png)

### Turbo for Mac 

Click on the **gear (⚙)** icon at the top-right of the Launcher to access the settings.

1. **Synchronize with Turbo.net:** save application settings to the cloud.
2. **Open on startup:** open the Turbo Launcher when the system starts.
3. **Use Extended RAIL:** improve visual appearance of streamed application.
4. **Use H.264:** use codec to decrease bandwidth usage for streaming (requires Extended RAIL).
5. **Cloud Region:** select the region where the application will execute and stream from.

![](/docs/getting_started/advanced_settings/configuring-the-default-launch-setting-for-applications-mac.png)


### FAQ

**How do I save passwords in a browser on Turbo to share with team members?**

This can be achieved by creating an image with the credentials set using the Turbo CLI

```
# Run a browser
>turbo new firefox
Using VM 18.7.1306 from local
Using image clean:26 from local
Using image firefox:61 from local
Running new container firefox#9afe83e2

# Go to a website and log in, saving your credentials, then exit the application
Process exited with status 0

# Save the container into an image
> turbo commit firefox#9afe83e2 ffpassword
Using image firefox:61 from local
Committing container firefox:3.5#a524349c to image ffpassword
Commit complete

# Push to hub
> turbo push ffpassword mynamespace/ffpassword
Pushing image ffpassword to mynamespace/ffpassword
Push complete
Image is private
```
