The September 2022 Turbo Server release includes several major features:

- New! **SMB Network Share Storage Type** brings SMB and local file system folders to Turbo Drive. This release also introduces per-user and shared storage modes. Users may access their files from the Portal dashboard and the T: Drive.


![File System Storage](https://hub.turbo.net/images/docs/filesystem-storage.png)
- New! **Analyst User Role** grants read-only permission the administration site **Reports** page.


![Analyst View](https://hub.turbo.net/images/docs/analyst-view2.png)
- **Performance Reports** now show launch diagnostic information, client launch performance, and additional launch details such as the Windows user and application server.


![Reports Error Expanded](https://hub.turbo.net/images/docs/reports-error-expanded2.png)

Other new features include:

- New server dashboard **Alerts **table lists important status alerts such as server health warnings
- New server dashboard **Pending and Recent Changes** tables list server setting changes that have been saved but have not yet been applied to the server, or have been applied to the server recently
- New server diagnostics **Operations **table lists all Turbo service operations and their last know status
- The administration site **Reports** now support **search and filters**
- Workspace applications now support **server assignments** that restricts the application servers to which the application workload can be assigned based on server tags.



Other improvements include:

- User and device **license usage** can now be viewed in the administration site
- **URL handlers** can now be edited and reordered
- The server **Sessions** table now displays Turbo usernames
- Required form fields on the administration site now have visual indicators
- Improved administration site performance
- Internal users can no longer be created using the same username and password
- Improved support for **SAML 2.0 SSO Logout URLs**
- Default T: Drive mount paths now use the storage provider name instead of the storage provider type
- Application servers that are online but fail to service application workloads due to certain unrecoverable errors will stop accepting application workloads until the error is resolved. These errors can be viewed in the new **Alerts** table on the server dashboard.
- Images pushed to the Hub are now immediately pulled onto the application servers if the repository has pre-cache enabled.
- Reduced **Hub memory usage** and improved performance
- Turbo Server installer now checks version compatibility earlier in the install process when installing non-Hub roles
- Turbo Server installer now checks for a minimum disk space requirement
- Improved readability of server administration CLI help text
- Improved various error messages, form validations, and text values



This update includes fixes for the following issues:

- Session handoffs could result in multiple application windows for certain applications
- Session handoffs could cause a maximized application to became minimized
- Session handoffs to the HTML5 client could result in the **Session Closed** splash appearing slower than expected.
- Mac client login dialog did not support UPN logins for applications with Ask authentication in certain environments
- Session Disconnect and Close actions failed on certain server configurations
- Portal dashboard application icons did not show the disabled state correctly on certain devices
- Audit reports were missing for some server settings
- Importing repository releases from the administration site could redirect the page before the import completed
- Very large log archives failed to download
- Directory service synchronization could fail to add nested group memberships
- Directory service synchronization could fail after changing the top directory
- Directory service synchronized items search could reset the selected items
- Directory service synchronized items search could fail for certain group filters
- Directory service synchronized item selections reset the scroll position
- **Add Native Application** dialog could fail to load if there were a large number of native applications
- SAML 2.0 SSO logins could fail if both nameID subject and nameidentifier claims were sent with different values
- Long administration console URLs were cutoff in the Turbo Server installer



