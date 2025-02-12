# Dashboard

The Dashboard is the primary end user interface provided by the Portal. Once the user logs in and accepts the optional notice and consent form, they are presented the **Default Workspace**, or a list of workspaces if they have permissions to more than one.

![dashboard-workspaces](/images/dashboard-workspaces.png)

Clicking on a workspace to navigate to the workspace Home page, which lists recommended items such as applications, files, and links that the user has access to. To navigate back, click the logo at the top of the page.

### Home

The **Home** tab provides an overview of the user's recent activity as well as recommended applications, links, files, and more. As the user uses the workspace, their recent activity and recommendations will update accordingly.

### Applications

![dashboard-apps](/images/dashboard.png)

The **Applications** tab shows a list of applications that can be ran by clicking on them. The application will run with the default launch method, which by default is **Run in Cloud (HTML5)**. The administrator can change the default in the Workspace Application settings. Right click on the application to access addition launch methods if available.

#### Application Context Menu

The application context menu provides additional launch methods and controls for running sessions.

![dashboard-app-context](/images/dashboard-context.png)

The following context options will launch the application

- **Run in Cloud (HTML5)**: Launches in the cloud and connect using HTML5 client running in the browser.
- **Run in Cloud (Windowed)**: Launches in the cloud and connects using the natively installed Turbo Client. The client must be installed.
- **Run on My PC (Local)**: Launches in the local device if the device is capable of running the application.

The **Install on My PC** option will make the application available on the local device if supported.

The following context options are available if the application is currently running in the cloud:

- **Disconnect**: Disconnects any connected client from the cloud session. The session may be reconnected by launching again via any cloud option. If the administrator logs off the session immediately on disconnect then the application may have to be relaunched from scratch.
- **Logoff**: Logs off the user from the cloud session. The application must be relaunched and unsaved work may be lost.

### Files

![File Browser](/images/file-browser.png)

The **Files** tab allows users to browse and open files from their connected cloud storage providers.

Cloud storage providers may be connected by users from the user settings [Storage](/server/portal/user-settings.html#storage) page, or connected by administrators from the administration site [Storage Connections](/server/administration/storage.html#connections) page.

Clicking on a folder will navigate into that folder. Users may navigate out of a folder by using the breadcrumb at the top of the page.

Clicking on a file will open it with the associated application. If no associated application exists, the view file action will be performed instead.

File associations may be managed from the [workspace administration site](/server/administration/workspaces.html#workspace-general-file-associations).

#### File Context Menu

Right-clicking a file or folder will open a context menu with additional actions. For files, the available actions are:

- **Open in Cloud (HTML5)**: Opens the file with the associated application in the HTML5 client.
- **Open in Cloud (Windowed)**: Opens the file with the associated application on the application server and streams to the local Turbo client.
- **Open on My PC (Local)**: Opens the file with the associated application in the local Turbo client.
- **Download**: Downloads the file to the local device.
- **View**: Opens the file in the local client browser. If the browser supports the file type, the browser will show a preview of the file.
- **Delete**: Deletes the file from the storage provider. A confirmation dialog is shown before deletion.

For folders, the available actions are:

- **Delete**: Deletes the folder and all of its contents from the storage provider. A confirmation dialog is shown before deletion.

#### Uploading Files

![File Upload](/images/file-upload.png)

Users may upload files by dragging & dropping files from their local device into the file browser. Files may be dropped anywhere on the screen and will be uploaded into the current folder.

### Chat

The **Chat** tab contains an artificial intelligence chatbot that will respond to text prompts.

The chat is hidden by default and must be configured and enabled by an administrator. For more information, see [Artificial Intelligence](/server/integrations/openai).

### Notifications

A notifications icon is displayed at the top of the Turbo Portal dashboard. clicking the notification icon will expand the notifications dropdown and list notifications in chronological order. A new notification icon will be displayed if there are unread notifications.

### Search

The search text box allows users to search items in the current workspace tab by name. Search results will be shows in a search details view that lists additional information such as available actions.
