**New and Improved**

- Containers startup performance is significantly faster.
- Local images can be viewed and removed using the Manage Cache dialog.
- Garbage collection is used to remove files that are no longer used, such as sandboxes from old client versions.
- Automatic garbage collection for old images can be turned on by setting the turbo config --gci-interval. Garbage collection will periodically check for images that have not been used in 30 days.
- Users may set the maximum size of the local image repository via turbo config --image-cache-size.
- Application sources may be marked as trusted or blocked via turbo config --add-trusted-source|--block-trusted-source|--remove-trusted-source=[source].
- Access to local network from cloud applications may be managed via turbo config --enable|--disable=localnetworkaccess.
- Added option for turbo commit --working-dir=current-dir to set the working directory of the committed image to use the active directory when the container is launched.
- Installation flags may be passed to the MSI Installer.

**Bug Fixes**

- The turbo installi and install commands overwrite existing shortcuts.
- The turbo run command overwrites local image with hub image if using the same name.
- The turbo commit command sets incorrect file permissions when image path is set to all users.
- Launch configs are not re-downloaded if the local cache becomes corrupted.
- The Run in Cloud option fails when logging in on-premise portal after being logged in Turbo.net Hub.
- Old Programs and Features entry is not removed when client is upgraded.
- Turbo for PC does not clear the Username field on the Sign In dialog when using ADFS SSO.
- Turbo for PC crashes when the Server field on the Sign In dialog is cleared.
- Turbo for PC is unable to sign in using anonymous authentication.
- Turbo for PC window height is too big when undocked.
- Turbo for PC does not work with favorites when connected to a legacy Portal Server.
- Portable applications are not compatible with Hub Server 18.



