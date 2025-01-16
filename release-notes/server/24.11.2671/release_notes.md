The November 2024 Turbo Server release includes several major features:

- **New!** **Per Workspace Appearance** customization options, such as logo, background, favicon, and theme
- Redesigned **Home** tab to improve user experience.
- **New!** **SAML 2.0 request signing** enables signed authentication requests from the Portal to the identity provider for security compliance. The existing SAML settings have also been reorganized for improved clarity, with added claim name customization and tooltips.
- **New!** **SAML 2.0 attribute mapping** adds more flexibility in identity provider integration
- **New!** **Federate Repositories** setting federates all repositories from another Hub domain

Other new features include:

- **Login Placeholder** setting sets the username placeholder for login forms
- **FavIcon** setting customizes the favicon on the Portal
- Updated **Advanced** page allows administrators to enable experimental features
- **README** workspace setting shows a markdown description at the bottom of the dashboard Home tab
- **Applications Sort Order** workspace setting customizes the display and installation ordering of workspace applications
- **Pull on Install** application setting pulls the application to the local machine on install
- **File Associations** now include more advanced configurations, such as targets and arguments
- Team** Dropbox** connections are now supported
- **Guest Domain** read-only access to Hub repositories can be enabled from the administration CLI
- **Anonymous Access** to Hub repositories can be enabled from the administration CLI
- **Federation **setting added to the** Import Repository **page to control whether the imported repository will federated updates from the source Hub

Other improvements include:

- Additional Hub repository settings are now visible and have been reorganized for easier access
- The repository **Versions** table now includes the user who added the image
- Storage providers now support multiple storage connections. Additionally, the resource owner for the connection is now listed.
- **Storage Scopes** are now linked to storage connections rather than storage providers, allowing more flexible storage scope configurations
- Sensitive fields are now fully obfuscated for values under 12 characters on the administration site event reports
- A warning is now displayed before synchronizing a directory service if domain identity federation is enabled, preventing conflicting identity sources and update failures. An audit report is created if the warning is bypassed.
- Improved URL format consistency throughout the administration site
- The workspace administration site tabs have been reorganized to improve user experience
- The workspace application isolation and VM settings have moved their own pages
- The **File Isolation** application setting now defaults to **Inherit from Workspace** when adding applications to a workspace
- The workspace administration site breadcrumb now includes a link back to the workspace dashboard for improved navigation
- The **Download Turbo for Windows** banner is now disabled by default
- Web applications now support **Install on My PC** on the portal
- The Hub now removes release tags from existing images when another image with the same release is pushed
- Reduced unnecessary logging for certain Hub queries
- Users who haven't used Turbo for 30 days are now marked as inactive, freeing up user license seats
- Logs are now automatically archived every two weeks, and archives are deleted after one year. These parameters can be adjusted using the following command line settings:

- logs-archive-interval: Controls the frequency of log archiving (default: 2 weeks)
- logs-archive-purge-after: Sets the retention period for archived logs before deletion (default: 1 year)
- Reorganized top-level admin settings for better navigation
- Improved consistency in release sort order between VM repo page and workspace application page
- Optimized Hub revisions query to improve performance and prevent timeouts during **turbo pull** operations
- Added agent string for outbound Hub web requests
- Added revision history input to the Repository federation form
- Greatly improved Turbo Hub network output speed
- Updated all vulnerable dependencies to their latest secure versions
- Prevented potential JavaScript injection vulnerabilities

This update includes fixes for the following issues:

- Administration site logins failed if the Hub server clock was changed to a future date then changed back
- User activation behavior was inconsistent across login scenarios. Users are now activated on launch, not on login.
- The administration site user **Last Activity** column has been renamed to **Created**
- Fleets deployment server version matching was overly precise and failed to select the latest compatible server version
- Performance reports incorrectly marked session handoffs as an error
- Storage provider **Test** button failed to list error details for certain errors
- Storage provider **Test** button occasionally reported a failure despite a successful operation
- WIF data was not properly reported to ZAM server in certain circumstances, impacting the visibility of streamed applications in ZENworks reports
- Certain workspace administration pages failed to load when using a self-signed certificate
- Users were unable to set workspace application's Turbo VM to the latest version if they previously ran the application with an older VM
- Application launches could fail to open files with the configured file association and close unexpectedly
- Launching workspace applications with **Check for Updates** set to **Never** resulted in an image not found error if the image did not exist on the host machine
- Session handoff failed when transitioning from Windowed to HTML5 client
- Portal dashboard application status icon disappeared if a user disconnected then reconnected to the remote session
- Drag-and-dropping icons in the dashboard **Files** tab resulted in unintended icon uploads
- DRM errors could cause the HTML5 client to hang at "Launching application" indefinitely
- HTML5 client close action erroneously displayed error details, even when the session closure was expected
- Sensitive information was written to browser console logs in the HTML5 client
- Hub failed to automatically update the image cache while federating from the Turbo.net Hub when using certain legacy image cache paths
- The diagnostic flag failed to generate logs when using the HTML5 client
- "Failed to Save Repository Settings" error was hidden at the bottom of the page
- **Directory Service > Items** page showed **Include all** as enabled instead of the previously selected groups
- Power Button was missing in HTML5 client under certain conditions
- Switching a storage provider from per-user to global hid per-user connections
- Administration site displayed errors for obscured inputs less than 3 characters
- OneDrive **Test** button showed errors as [object Object]
- Error page displayed the **Administrator Email** contact instead of the **Support Link**
- Cloning /xvm resulted in missing releases
- "An operations error occurred while synchronizing AD" occurred during AD synchronization under certain conditions
- Refreshing the repository** Versions** page on Hub after pushing an image failed to load the page
- Various Filr storage connection issues have been resolved
- Hub database resulted in error state during unexpected server shutdowns
- Session Logs custom date range did not properly filter logs
- Domain Federation did not copy certain component layers
- Pushing a large image to Hub caused subscriptions to fail to register/update while the image was caching
- OpenText server installer file version was incorrect
- Hub database only repaired one block at a time when pushing an image with missing blocks
- Portal theme settings reset incorrectly under certain circumstances
- Improved inconsistent page titles
- Fleet commands failed when the fleet server was in an unexpected state
- Download link for Turbo Client for Mac pointed to a deprecated URL

This update includes the following dependency updates:

- Turbo Client has been updated to 24.9.6
- Turbo VM has been updated to 24.10.17
- Java has been updated to Temurin 21.0.4
- Apache has been updated to 2.4.62
- PsExec has been updated to 2.43



