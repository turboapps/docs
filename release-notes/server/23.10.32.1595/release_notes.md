The October 2023 Turbo Server release includes several major features:

- New! **Storage Connections** can now be created globally by administrators and made available to select user groups, allowing users to access shared files with no additional setup.


![Global Connections](https://hub.turbo.net/images/docs/global-connections-add.png)
- New! **Workspace Storage Scopes** create customizable, per-workspace views into storage provider connections. 


![Workspace Storage Scopes](https://hub.turbo.net/images/docs/ws-storage-scopes-custom.png)
- New! **Accepted Tenants** restricts multi-tenant single sign-on (SSO) to a fixed set of tenants.


![Accepted Tenants](https://hub.turbo.net/images/docs/accepted-tenants-2.png)

Other new features include:

- **External Database Connections** allows servers from different cloud infrastructures or different tenants within the same cloud infrastructure to join a Turbo Server Domain
- **Concurrent Session Limit** setting restricts the number of remote sessions that a user can run concurrently
- **Support Link** setting that is displayed to users on error pages
- New Turbo Server CLI command `admin domain-federation sync` triggers an **on-demand domain federation synchronization**
- **Check for Updates** setting determines when application update checks are performed

Other improvements include:

- The **HTML5 Client copy & paste** experience has been redesigned to provide a more seamless and intuitive experience
- The **HTML5 Client key states** such as Num Lock are now synchronized on launch
- Improved HTML5 Client error messaging for certain application launch failures
- **Web Application** management has moved to the Server administration site under Hub. Configured web applications can be added to workspaces from the workspace administration site.
- The Hub **Images** table now includes a **Repository** column instead of the **Source** column
- Deleting a repository now deletes all associated workspace applications.
- Turbo Server users are now considered **Inactive** when they are created through the administration site or federation. Inactive users do not consume user licenses until they login. Additionally, application launches will no longer be denied for users exceeding the Turbo Server license limits.
- The **Ticket Expiration Time** and **API Rate Limit** inputs will now show the default value
- Improved the **Server Status** display to more accurately reflect the state of provisioning servers
- **Dashboard Tabs** settings have been expanded to further customize Portal dashboard tab visibility and default tab access
- Improved performance of the **Add Host Application** dialog
- Workspace applications are now created with isolation settings set to **Inherit from Workspace**
- Applications launched from the Portal now immediately check for application** **updates if a new image has been pushed to the Hub
- Improved the application server profile pool allocation strategy to be more performant during periods of high launch volume
- Images pushed from Turbo Studio or the Turbo Client no longer set the icon padding or background color by default
- Apache Proxy logs are now located in the installation path **Logs** folder and rotate based on date and size
- The Turbo Server installer now provides the option for users to proceed even if the verification of the database connection fails
- The Turbo Server installer now requires at least one role to be selected and provides additional information if a role is not available
- Various minor text and visual improvements

This update includes fixes for the following issues:

- Turbo Drive filesystem mounts could encounter errors performing certain folder operations, such as creating and renaming new folders or deleting and recreating non-empty folders
- Turbo Drive overwrite and set file size operations incorrectly reported portions of the resulting file metadata, causing application errors in rare circumstances
- The** **OneDrive** Test** button failed for multi-tenant configurations
- The **User Groups** table item count was not accurate under certain circumstances
- The Server diagnostics uptime did not display correctly for large values
- The **Advanced Testing** page **Auto** server assignment option did not correctly distribute loads according to the resource allocation strategy
- The Turbo Virtual Machine repository incorrectly reported federation settings
- The Portal Files API leaked file handles under certain circumstances, leading to Portal errors over prolonged periods
- The Turbo Server installer showed incorrect validation errors when navigating back and forth between pages
- The Turbo Server command-line installer incorrectly installed as **x86**
- Images pushed from Turbo Studio or the Turbo Client did not properly display an icon if the image only contained icons in **ICO format**

This update includes the following dependency updates:

- Turbo Client has been updated to 23.10.12
- Turbo VM has been updated to 23.9.13



