## Using Files

You may access local files when running applications locally via the **Run on My PC** launch mode if the isolation setting for the workspace application is configured to allow it.

For remote launches, also known as the **Run in Cloud** launch modes, files may be transferred between your local device and the remote application via popular online storage providers, such as OneDrive and Dropbox.

### Run on My PC Launch Mode

Users may access their local files when launching an application via the **Run on My PC** launch mode if the workspace application isolation settings are configured to allow it. See [Workspace Applications > Isolation](https://hub.turbo.net/docs/server/administration/workspaces#workspace-applications) for more information.

![Workspace Isolation Example](https://hub.turbo.net/images/docs/Workspace_Isolation_Example.png)

Turbo [storage integrations](https://hub.turbo.net/docs/server/administration/storage.html) that are configured on the Turbo Server can also be made available for the local launch modes if the [WinFSP driver](https://hub.turbo.net/docs/server/cloud-storage/end-user#access-from-local-launches) is installed on the end user device and the user has connected their cloud storage account in the portal (if required for the integration).

### Run in Cloud Launch Modes

For remote launches, which are also known as the **Run in Cloud** launch modes, users transfer files between their local device and the remote application via popular online storage providers, such as OneDrive and Dropbox.

The WinFSP driver is added on Turbo Application Servers as part of the Turbo Server installation, so the only requirement is that the [storage integrations](https://hub.turbo.net/docs/server/administration/storage) are configured by the Turbo Server administrator and the user has connected their cloud storage account (if required for the integration).

Users can also access files on their device when an application is launched using a Turbo.net native client and the server is configured to [Enable Drive Redirection](https://hub.turbo.net/docs/server/administration/general#streaming). On the Portal, this mode is referred to as **Run in Cloud (Windowed)**:

![Accessing files from local system via run in cloud windowed](https://hub.turbo.net/images/docs/accessing-files-from-local-system-via-run-in-cloud-windowed-1.png)

Applications running in this mode will show files from the local device as **Home on My PC** in the File Open and Save dialogs.

![Accessing files from local system via run in cloud windowed](https://hub.turbo.net/images/docs/accessing-files-from-local-system-via-run-in-cloud-windowed-2.png)

Files from the local system may also be accessed using the `\\tsclient\{drive}` remote path.

![Accessing files from local system via run in cloud windowed](https://hub.turbo.net/images/docs/accessing-files-from-local-system-via-run-in-cloud-windowed-2-bg.png)

On Mac systems, applications running in this mode will show files from the local system under the **Home on My Mac** mapped drive in the File Open and Save dialogs.

![Mac PowerBI home on my mac](https://hub.turbo.net/images/docs/mac-power-bi-home-on-my-mac.png)

Files from the local system may also be accessed using the `\\TSCLIENT\Home` remote path.

![Mac net use](https://hub.turbo.net/images/docs/mac-net-use.png)

### Cloud Storage Connections

Connecting a cloud storage service, such as OneDrive or Dropbox, to your applications on Turbo.net is a seamless way to access your files quickly.

From your Portal, click on **Files** to access the storage services for your account.

Then, click on the **Connect** button to link the storage service to your account, allowing Turbo applications to load and save data to the storage service.

![Connecting a storage service onedrive to your account](https://hub.turbo.net/images/docs/connecting-a-storage-service-onedrive-to-your-account-1.png)

You will be asked to authenticate your account with the storage service to link it with your applications.

![DB connect OneDrive](https://hub.turbo.net/images/docs/db-connect-onedrive-2.png)

When the authentication succeeds, the storage service status will show as connected and give you the option to Disconnect.

![Connecting a storage service OneDrive to your account](https://hub.turbo.net/images/docs/connecting-a-storage-service-onedrive-to-your-account-3.png)

Files from the storage service will be available under the **T:\\** drive for applications running in the cloud.

![Connecting a storage service OneDrive to your account](https://hub.turbo.net/images/docs/connecting-a-storage-service-onedrive-to-your-account-4.png)
