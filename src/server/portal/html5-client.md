# HTML5 Client

Turbo Server features an HTML5 client for streaming that allows users with any device that has an HTML5-compatible browser to access and use the applications on their workspace.

![HTML5 Client Streaming Microsoft Word](/images/html5-client-word.png)

## HTML5 Client Controls

The user controls for the HTML5 client are located in the bottom bar of the screen.

![HTML5 Client Controls](/images/html5-client-controls-2.png)

### Task Switcher

The **Task Switcher** button displays the application windows that are currently present in the application session. 

Users can use the task switcher to easily navigate applications with multiple windows.

![HTML5 Client Task Switcher](/images/html5-client-taskswitcher.png)

### Mute / Unmute Sound

The **Mute / Unmute Sound** button toggles whether sound from the application is streamed to the end user device.

Modern browsers require that the HTML5 client starts with muted sound that must be unmuted by a user action, such as clicking the unmute sound button.

![HTML5 Client Mute and Unmute Sound](/images/html5-client-mute_unmute.png)

### Files

The **Files** button opens the file transfer dialog allowing users to transfer files between their computer and the application session.

This feature requires that the workspace settings for the application are configured to use **Merge** for **File Isolation** or have **Access Local User Folders** set to **Enabled**.

For a better user experience, we recommend using [Turbo Drive](/server/cloud-storage/end-user) integrations for user document storage instead.

![HTML5 Client Files](/images/html5-client-files.png)

### Printer Jobs

The **Printer Jobs** button opens the Virtual Printer dialog where you can download documents printed to the Virtual Printer from the application session.

![HTML5 Client Printer Jobs](/images/html5-client-printjobs.png)

### Fullscreen

The **Fullscreen** button toggles the browser tab between fullscreen and windowed mode.

![HTML5 Client Fullscreen](/images/html5-client-fullscreen.png)

### Power

The **Power** button allows the user to disconnect or close the session.

- **Disconnect**: Disconnects any connected client from the cloud session. The session may be reconnected by launching again via any cloud option.  
Note that if the administrator has configured the session to log off immediately on disconnect, then the application may have to be relaunched from scratch.
- **Close**: Closes the application and logs off the user from the cloud session. The application must be relaunched and unsaved work may be lost.

![HTML5 Client Power](/images/html5-client-power.png)

## Copy-Paste Functionality

Most popular browsers, including Chrome, support direct clipboard copy-paste functionality. To enable a seamless copy-paste experience, simply grant clipboard access when prompted by your browser. Note: Safari currently has limited clipboard support, with full functionality planned for a future update.

The following table describes the supported copy and paste functionality:

| Action | Turbo HTML5 Client - Firefox | Turbo HTML5 Client - Major Browsers |
| ------ | ---------------------------  | ----------------------------------- |
| Cmd+C (Mac OS) | Text support | Text support |
| Cmd+V (Mac OS) | Text support | Text support |
| Ctrl+C (Windows) | Text support | Text support |
| Ctrl+V (Windows) | Text support | Text support |
| Ctrl+C (Mac OS) | Text support | Text support |
| Ctrl+V (Mac OS) | Not supported | Text support |
| Remote UI copy | Text support | Text support |
| Remote UI paste | Not supported | Text support |
| Paste large text (> 100MB) | Notification indicating clipboard may be out of sync | Notification indicating clipboard may be out of sync |
| Copy file or image | Not supported | Not supported |
| Paste file or image | No effect | No effect |
