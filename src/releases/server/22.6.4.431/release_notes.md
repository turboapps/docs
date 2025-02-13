The June 2022 Turbo Server release includes several major features:

- New! **Federation Sources** tab provides a single location to configuration federating Hubs. Federation sources can then be referenced during workspace or repository import, simplifying setup and assuring consistent synchronization across subdomains.

![Federation Sources](/images/federation-sources.png)
- New "Toast" **Notification Display Type** allows notifications to display as a toast message on the Portal dashboard.

![Toast Message](/images/toast-message-2.png)
- Application launch performance reports are now available on the **Reports** area. Performance reports provide detailed performance metrics that can help identify and resolve performance issues.

![Performance Reports](/images/performance-reports-2.png)


Other new features include:

- Support for both single- tenant and multi-tenant OneDrive application registrations
- Support for the **Filr** storage provider in the **Files** view
- New **Pre-Cache** repository setting caches repositories on application servers immediately, providing a faster first launch experience


Other improvements include:

- T: Drive now resumes incomplete file uploads the next time the user connects to a session
- Temporary files no longer show in the Portal file browser
- Improved usability of the workspace and channel **Add Permissions** dialogs
- Improved validation on the URL handlers page
- Reduced Turbo Server installer size by moving the embedded SQL database to a separate download
- Reduced Turbo Server log file size
- Connecting the same storage provider multiple times now shows an error message
- Creating storage provider integrations with the same name now shows an error message
- Improved detection and renewal of expired cloud storage access tokens
- Improved various visuals and text


This update includes fixes for the following issues:

- **OpenID Connect SSO** login could fail if the account did not contain an email claim
- A redirect loop could occur if an SSL domain URL was configured to a load balancer that pointed to a non-SSL web service root
- Session handoff incorrectly created a second application window in certain circumstances.
- Scrollbars were incorrectly displayed in the HTML5 client for certain browser zooms and DPI scaling settings
- User search by full name was failing to return results
- Changing the date range on a paginated table could result in no results being displayed
- The Turbo service was incorrectly restarting when changing application server tags
- Workspace URL handlers were not copied during workspace replication
- Custom workspace link icons were incorrectly counted towards the API rate limit
- Domain server graphs rendered incorrectly for certain data sets



