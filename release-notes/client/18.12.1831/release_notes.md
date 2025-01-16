**New and Improved**

- Image upgrades with layered session state preservation are now performed by default during **turbo run**.
- Isolation mode override flag **--isolate=[full|write-copy|merge]** is now available for portable application outputs.
- Support for additional Security Support Providers (SSPs), enabling authentication via Kerberos, NLA, and more.
- The Turbo for PC installer now uses HTTPS to download components.
- The Turbo for Mac client has been updated with improved support for copy-and-paste between native and virtualized environments, support for the Windows hidden files flag, and improved diagnostic logging.
- The Turbo for Android and Turbo for Chromebook clients now support Single Sign-On.
- The working directory may now be specified in the image configuration. The **clean **image has been updated to maintain backwards compatibility with the new behavior.

**Bug Fixes**

- Images are not extracted in the local repository folder when using portable applications.
- Subsequent executions of a portable executions may crash under some circumstances.
- The installer UI may not disappear until the associated portable application is closed.
- The **turbo rm** command fails when an improperly named container folder exists.
- The **turbo installi** command may check the local user repository for images even when the **--all-users** flag is specified.
- The **turbo installi** command may not create a valid application shortcut when startup file arguments are specified.
- Turbo for PC ignores the **Allow access to local user folders** setting when using on-premise Hub Server.
- Improved support for Azure AD and ADFS authentication in Turbo for Mac.



