The November 2023 update to Turbo Client includes the following improvements:

- **Turbo Sandbox Manager** can now automatically register and unregister subscribed workspaces in local user accounts against** All Users** subscriptions
- Application fonts are now installed during image caching. This improves the speed of application registration and launches.
- Web Applications are now installed when registering a subscription
- Local users' Turbo Client install will now remove itself if the All Users install is present
- The **turbo run **command now uses Write Copy isolation by default
- **Turbo Sandbox Manager** can now automatically garbage collect session sandboxes
- The **turbo config **command now supports setting storage path using environment variables such as **%LOCALAPPDATA%**
- Improved download progress UI
- Improved various error messages
- Registered applications through **turbo installi** and **turbo subscribe** now appear in the **Windows Default **apps settings UI. This enables administrators to select registered applications as default file extension or URL protocol handler.
- Registered applications that support the same file extension can be selected using Windows Explorer right click **Open with...** context menu.

This update includes fixes for the following issues:

- Some passthrough **turbo config** flags for Turbo Client installer were ignored
- Uninstalling Turbo Client installed by the MSI installer left entries in the registry
- Image downloads did not resume correctly, potentially resulting in corrupted images
- Image download reported an incorrect error when there was not enough disk space
- Logging into Turbo Server configured with OpenID SSO authentication failed
- Users were erroneously shown an error dialog "Turbo Drive must be installed" if the drive letter T: was in use.
- Users were erroneously shown an error dialog "Turbo Drive Error" when Turbo Server went offline
- Taskbar icons appeared incorrectly when launching applications from Turbo Portal. This was caused by installed desktop shortcut due to a bug in Windows Explorer.
- Installed shortcuts used incorrect icons in certain scenarios
- Unsubscribed **All Users** subscriptions were not removed from local user registrations
- Duplicated shortcuts were created if the metadata folder was removed and the same apps were installed again
- Turbo Client installer failed on Windows 11 Enterprise Azure VM
- Turbo Client installer GUI did not scale correctly in high DPI resolutions
- **T: Drive** did not save project folders correctly from Ansys applications



