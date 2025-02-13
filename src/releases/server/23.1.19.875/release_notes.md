The January 2023 Turbo Server release includes several major features:

- New **Elastic Cloud** feature allows deployment of Turbo application servers to your Azure tenant with a single click!

![Add Server](/images/add-server.png)
- New **Files API** provides a unified programmable interface for browsing and managing connected storage providers. For more information, see the .

Other new features include:

- New **Launch on Install** setting in the Workspace application settings allows applications to automatically launch upon installation on the device.
- Workspaces can now be configured with default isolation and local user folder access settings. Workspace applications can inherit these settings from the workspace or specify application-specific settings.
- **JVM http(s) proxy** settings can now be configured from the administration site
- New **Shell Integration** settings provide fine-grained control over application interactions with the host device, such as shortcuts, file associations, and shell extensions
- Azure Active Directory with OpenID Connect Single Sign-On integrations can now automatically connect OneDrive on login if the Azure application registration is configured to grant drive permissions
- New **/install-services** and **/uninstall-services** commands unvirtualize the API and administration sites in order to workaround certain antivirus incompatibilities
- Users now see a warning that their session is about to expire before being logged out automatically from the Portal

Other improvements include:

- Improved default application **launch performance** by enabling the assembly cache by default
- Expanded configuration options for workspace applications from the command line administrative tool
- Added click and drag support to reorderable controls on the administration site
- Added a **Test** action for file system storage providers on the administration site
- Updated the default federation source to **hub.turbo.net** to eliminate redirects
- Improved various error messages and text values

This update includes fixes for the following issues:

- Certain AppLocker configurations caused the Turbo Server service to fail to start due to a VM incompatibility
- Notifications could incorrectly show on top of the Notice and Consent dialog
- Dashboard session icons could display an incorrect state after refreshing the dashboard
- **Install on My PC** could incorrectly install the latest version when attempting to install an older version in certain circumstances
- Active sessions could experience T: Drive connection failures if the user's ticket expired during the session
- Attempting to disable repository federation could fail in certain scenarios
- Performance reports failed to export correctly in CSV format
- Repository imports that specified a release number did not prioritize exact matches and did not support prefix matching
- Active Directory synchronized item selections could fail to save if the results exceeded 1000 items
- License management pages do not load when an invalid or expired license was installed
- Certain file operation errors could result in handle leaks on the Portal server
- The Turbo Application Server service could take a long time to restart in certain circumstances
- Large numbers of webhook subscriptions with undeliverable target URLs could result in poor server performance
- Turbo services could become unresponsive and fail to recover in rare circumstances



