The May 2021 Turbo Server release includes several major new features:

- **Learning Management Systems (LMS)** and **Storage Provider** integrations now allow for multiple connections.

![LMS Connections](/images/lms-connections.png)

- **T: Drive** now allows mounting of storage connections to specific paths within each storage provider connection.

![T: Drive Path](/images/tdrive-path.png)

- New **Link Text**, **Workspace**, and **Automatically Create Channels** settings provide control over presentation of Turbo link in LMSs, where the Turbo link will send the end user, and how the Turbo channel is initialized.

![LMS Connection Settings](/images/lms-connection-settings.png)
- New **Image Cleanup** setting periodically cleans up cached application images from the Application Server.
- New **Application Image Path** setting configures the path where images are stored on the Application Server.

![Image Cleanup](/images/image-cleanup.png)


Other improvements include:

- Deleting LMS connections and courses now offers to delete associated data
- New **HTTP Strict Transport Security** setting enables the HSTS security header
- Cloud launches now uses **Write Copy** isolation by default
- The HTML5 client troubleshooting section now includes the error code and Server version
- Workspace administration now uses locale-sensitive date formats
- Removed static port requirements from Turbo Application Server services
- The administration and API sites are now served from **IIS Express**, replacing the previous Apache server
- Improved error handling when importing an invalid certificate during installation
- Improved informational and error messages, along with improved logging

This update includes fixes for the following issues:

- Pushing images to a Turbo Hub via the Turbo Client could result in a certificate error
- Native applications set the container name to **base** instead of the application name
- Loading the Portal while logged into a recently deleted account shows an error page
- Adding group permissions to a Workspace could fail if multiple groups exist with the same name
- Certain applications were not listed in the **Add Web Application** browser selection
- Temporary users were not fully removed from the server when **Cache Temporary User Profiles** was disabled
- The Workspace administration dashboard **Recent Activity** table did not properly report the client type
- Application installs failed for applications with certain display names
- The Turbo Server installer did not import non-trusted certificates into the Windows certificate store
- The Turbo Server installer could hang if the Turbo service failed to stop during installation



