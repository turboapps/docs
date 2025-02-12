# Storage

The **Storage** page provides options to configure storage with a variety of third-party services as well as local network storage.

Turbo Server currently supports the following storage providers:

- [OneDrive](/server/cloud-storage/onedrive)
- [Dropbox](/server/cloud-storage/dropbox)
- [Google Drive](/server/cloud-storage/google-drive)
- [Filr](/server/cloud-storage/filr)
- [File Share (SMB)](/server/cloud-storage/file-share)

### Providers

![storage-providers](/images/storage-providers.png)

The **Providers** page allows administrators to view and manage integrations with a variety of third-party services as well as local network storage. Administrators or end-users may then create connections using these integrations to login to their cloud storage accounts and access their files while running applications.

#### Provider Settings

- **Storage Type**: The storage type you are integrating with Turbo Server. Instructions for setting up a Storage Provider connection are available for:

  - [OneDrive](/server/cloud-storage/onedrive)
  - [Dropbox](/server/cloud-storage/dropbox)
  - [Google Drive](/server/cloud-storage/google-drive)
  - [Filr](/server/cloud-storage/filr)
  - [File Share (SMB)](/server/cloud-storage/file-share)

- **Name**: The display name of the storage provider connection.
- **Client ID/Secret/Other**: The application registration information for the storage provider. Varies by storage provider type, see instructions above for more information.
- **Connection Mode**: Determines whether the connection context is per user or for all users.
  - **Per User**: Each end-user can manage their own connection using their personal cloud storage account.
  - **Global**: Administrators can manage user connections using a shared cloud storage account.
- **T: Drive Path**: The full file path where the storage provider will be mounted. Defaults to T:\\{storage-type}.
- **Supported Account Types**: The account types that are allowed to login and access their files with this storage integration. Multitenant allows users from any tenant to login, while Single tenant restricts users to a single tenant.
- **Test**: Storage provider configurations may be tested before committing any changes by clicking on the **Test** button. Common errors such as invalid or missing credentials or application registration misconfigurations will be reported during the testing process.

### Connections

![Global Storage Connections](/images/global-storage-connections.png)

The **Connections** page allows administrators to view and manage global connections with a variety of third-party services as well as local network storage. These connections support configurable file and user access.

Users with access to these connections will see the files on their Portal dashboard as well as while launching applications with Turbo Drive.

#### Connection Settings

- **Storage Provider**: The storage provider integration to which the connection will be created. Only storage providers set to "Global" connection mode will be listed.
- **Permission**: The file permissions granted to end users using this connection. Currently supports "Read-Only" and "Read, Write".
- **Groups**: The user groups that will have access to this connection

#### OneDrive Support

When creating a OneDrive connection, it is important to note that OneDrive uses additive scopes. This means that any scopes you have previously consented to will be applied to all future connections. For example, creating a "Read, Write" connection and then a "Read-Only" connection will grant "Read, Write" access to both connections.

To ensure that your connection has the correct permissions, it is recommended to manually revoke any existing consents before establishing a new connection. To do this, please visit the Microsoft [My Apps](https://myapps.microsoft.com/) portal, locate your OneDrive application registration, and click on **⋮ > Manage your application > Revoke consent**.

During the connection process, you will encounter a consent screen. Please carefully review the displayed scopes to ensure they align with your desired permissions before proceeding.

If you do not see the consent screen, it is possible that the scope has been implicitly granted by an administrator. To address this, follow the [OneDrive setup guide](/server/cloud-storage/onedrive) and ensure that admin consent is not granted.

#### Dropbox Support

Creating a Dropbox connection with file permission scopes requires your Dropbox application registration to be a "Scoped Application". If you Dropbox application registration was created before Dropbox introduced scopes, then you may need to update your application following their [migration guide](https://dropbox.tech/developers/migrating-app-permissions-and-access-tokens).
