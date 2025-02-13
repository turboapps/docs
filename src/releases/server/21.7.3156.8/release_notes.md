 The July 2021 Turbo Server release includes several major new features:

- New! **Session Handoff** allows streaming clients to transfer sessions from one device to another. Existing sessions for the same application will automatically be disconnected. Users can also reconnect to an earlier sessions after an accidental disconnect.
- New! Workspace administration now gathers and displays additional launch analytics, including **Type**, **Client**, and **Device**.

![Client Device Analytics](/images/client-device-analytics.png)
- New! Dashboard session state indicators provide live status updates of active application sessions. Additional session details such as duration and client types may be viewed by hovering over the item.

![Dashboard Session Running](/images/session-running.png)

- New! **Mount Points** application UI allows paths from the host to be mapped into paths inside application containers.

![Mount Points](/images/mount-point.png)

**Note:** As part of the new Session Handoff capability, temporary user profile names are now determined by a combination of the user and application. A new temporary user profile will be created when a user launches an application for the first time.

Other improvements include:

- Improved page load performance on Portal and Workspace administration sites.
- Improved page load performance when a user belongs to a very large number of user groups.
- SSO login errors now show additional troubleshooting information.
- Workspace deletion will now offer an **Undo** action.
- Improved date localization on the Server and Workspace administration sites.
- Date range selection is now preserved when refreshing the Workspace analytics page.
- Deleting a very large directory service now shows a warning message.
- Improved dashboard dropdown and context menu display logic.
- Updated various strings, logs, and administration site visuals.

This update includes fixes for the following issues:

- Hub database migrations can fail and result in a partial migration under certain circumstances.
- Azure AD SSO logins do not automatically create all user groups if the user belongs to over 100 AD groups.
- Disabling **Cache Temporary User Profiles** can result in application launch errors under certain circumstances.
- Temporary users are not added to the **Remote Desktop Users** group in certain environments due to localization issues.
- **OCSP Stapling** causes Turbo Server requests to hang in certain environments.
- Custom **Image Paths** could result in permission errors when launching applications as a temporary profile user.
- **Automatically Grant Permissions** does not grant channel permissions if the channel already existed.
- Adding an SSO workspace permission does not automatically generate the SSO user group if a user group from a different directory service already existed with the same name.
- Directory Service user and group counts were inaccurate for some service types.



