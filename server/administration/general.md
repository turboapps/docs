## General

![Turbo Server Admin General](https://hub.turbo.net/images/docs/admin-general.png)

The **General** page provides options to configure and customize Turbo Server. The page contains the following sections:

- **License**: Provides an overview of information associated with the current Turbo Server license, including number of seats, allowed portals, computer name, and machine identifier. If server users are licensed to run applications on more than one machine, this number is reflected here. This section also contains a link to add a **New License**; you can use this to update an existing license as well.

- **Administrator Email**: Users are directed to this email address if they encounter any errors or issues while using Turbo Server.

- **Support Link**: The link used for administrative support and web server error messages. Has priority over administrator email if both exist.

- **External Database Connections**: The connection strings used by servers deployed on external compute infrastructures.

- **Notice and Consent**: Users will see a notice and consent dialog after logging into the Portal. They must accept the notice and consent dialog before using the Portal. Markdown syntax is supported for links, headers, font styles, and more.

### Notifications

![Add Notification Admin](https://hub.turbo.net/images/docs/notifications-admin-add.png)

The **Notifications** page allows admins to notify groups of Turbo Server users with custom message, such as service maintenance periods or product updates. Notifications may be customized with the following fields:

- **Title**: The message title that will be displayed to the end user in the notification.
- **Icon**: A preset or custom icon that will be displayed to the end user in the notification. When uploading a custom icon, we recommend using an image that is at least 80px x 80px.
- **Display Type**: The display type for this notification. The available types are:
  - **Default**: A low priority notification, displayed in a notification dropdown. This is the default setting.
  - **Toast message**: A notification that is shown at the top of the Portal dashboard. This notification may be dismissed and does not interrupt the user.
- **Description**: The message body that will be displayed to the end user in the notification.
- **Groups**: The user groups that this notification will be sent to.

The end-user may view their notifications on the Turbo Portal under the notifications dropdown, which are listed in order from most recent to least recent. Notifications are sent immediately upon submit, but may be changed later on through the notifications settings page.

### Streaming

![Admin General Streaming](https://hub.turbo.net/images/docs/admin-general-streaming.png)

The **Streaming** page provides remote application streaming configurations for the Application servers.

- **Active sessions**: The maximum amount of time that a Remote Desktop Services session can be active before it is automatically disconnected.

  This setting corresponds to the **[Set time limit for active Remote Desktop Services sessions](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer::TS_SESSIONS_Limits_2)** Group Policy setting. The value 0 will set the Group Policy setting to `Never`.

  Turbo Server defaults this setting to `21600000`.

- **Active but idle sessions**: The maximum amount of time that an active Remote Desktop Services session can be idle (without user input) before it is automatically disconnected.

  This setting corresponds to the **[Set time limit for active but idle Remote Desktop Services sessions](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer::TS_SESSIONS_Idle_Limit_2)** Group Policy setting. The value 0 will set the Group Policy setting to `Never`.

  Turbo Server defaults this setting to `21600000`.

- **Disconnected sessions with running applications**: The maximum amount of time that a disconnected session remains active on the server.

  This setting corresponds to the **[Set time limit for disconnected sessions](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer::TS_SESSIONS_Disconnected_Timeout_2)** Group Policy setting. The value 0 will set the Group Policy setting to `Never`.

  Turbo Server defaults this setting to `300000`.

- **Disconnected sessions without running applications**: How long a user's RemoteApp session will remain in a disconnected state after closing all RemoteApp programs before the session is logged off from the RD Session Host server.

  This setting corresponds to the **[Set time limit for logoff of RemoteApp sessions](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer-Server::TS_SESSIONS_RemoteApp_End_Timeout_1)** Group Policy setting. The value 0 will set the Group Policy setting to `Immediately`.

  Turbo Server defaults this setting to `600000`.

  **NOTE**: Windows terminal services will honor this value only if the RemoteApp session remains connected until the application is successfully terminated. If the HTML5 client browser process is terminated before the application can disconnect vai RemoteApp shutdown procedure, the session will remain for a longer than expected disconnected state. The RemoteApp shutdown procedure takes up to 20 seconds after the application window is closed. To learn more, see the [Microsoft documentation](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/remoteapp-sessions-disconnected).

- **Concurrent Session Limit**: The maximum number of remote sessions that a user can have open simultaneously. If a user exceeds this limit, they will be unable to launch additional remote sessions from the Portal dashboard until they close some of their existing remote sessions. This limit does not impact other launch methods such as local or installed launches.

- **Enable Drive Redirection**: Enables the mapping of client drives when streaming remote applications.

  This setting corresponds to the **[Do no allow drive redirection](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer::TS_CLIENT_DRIVE_M)** Group Policy setting.

  The Turbo Server installer does not define a default value for this setting. Resetting this value will set it to `Not configured`.

  The default Windows value for this setting is `Not configured`.

- **Network Drives**: Maps network drives when streaming remote applications. Network drives will be mapped when users run sessions on the application server. Network drive paths support Windows environment variables.

  The `\\tsclient\{path}` can be used as the network drive path but is only supported when connecting with clients that redirect drives. For example, `\\tsclient\c` can be used to map the to local C: drive when connecting using Turbo for PC, and `\\tsclient\Home` may be used to map to the local Home folder when connecting using Turbo for Mac.

  **NOTE**: Network drives will not be mounted if the path is invalid or inaccessible to the remote user. Furthermore, network drive letters that conflict with existing local or network drives will not be mounted.

- **Require NLA**: Enables Network Level Authentication, requiring users to authenticate before establishing a remote connection.

  This setting corresponds to the **[Require user authentication for remote connections by using Network Level Authentication](https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.TerminalServer::TS_USER_AUTHENTICATION_POLICY)** Group Policy setting.

  Turbo Server defaults this setting to `Disabled`.

- **Restrict NTLM: Incoming NTLM traffic**: Allows or denies incoming NTLM traffic from client computers, other member servers, or a domain controller.

  This setting corresponds to the **[Network security: Restrict NTLM: Incoming NTLM traffic](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-incoming-ntlm-traffic)** Group Policy setting.

  The Turbo Server installer does not define a default value for this setting. Resetting this value will set it to `Allow all`.

  The default Windows value for this setting is `Not defined`, which is equivalent to `Allow all`. The server will allow all NTLM authentication requests.

- **Restrict NTLM: NTLM authentication in the domain**: Allows or denies NTLM authentication within a domain from this domain controller.

  This setting corresponds to the **[Network security: Restrict NTLM: NTLM authentication in this domain](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-ntlm-authentication-in-this-domain)** Group Policy setting.

  The Turbo Server installer does not define a default value for this setting. Resetting this value will set it to `Disable`.

  The default Windows value for this setting is `Not defined`, which is equivalent to `Disable`. The domain controller will allow all NTLM authentication requests in the domain where the policy is deployed.

- **Preemptive Authentication**: Allows the HTML5 client to show a login dialog when launching applications with Ask for Credentials authentication. If disabled, the HTML5 client will connect without credentials and defer to the remote login window. This setting does not apply to other clients or profile modes.

  The default value for this setting is `Enables`.

  **NOTE**: If Network Level Authentication is required, then launching applications in the HTML5 client with Ask for Credentials will fail with an authentication error.

The **Inherit from Group Policy** option will not update the local group policy and the behavior will be determined by existing GPOs or Windows defaults.

The **Custom** option updates the **Local Group Policy** on all application servers in the Turbo Server farm. Please be aware that this setting will always be overriden if your server is joined to a domain and the equivalent **Domain Group Policy** is defined.

The **Reset** button will reset the local group policies to their Turbo Server default values and remove all configured network drives on each application server. See each individual setting for more information on their default values. Confirming the reset confirmation dialog will apply the changes and reload the page, saving the settings form is not required.

Setting changes are applied approximately once every 20 seconds. You may need to exit and relaunch the group policy editor (gpedit.msc) to see the updated settings on the application servers if it was already opened.

### Appearance

![Server admin portal appearance](https://hub.turbo.net/images/docs/admin-general-appearance.png)

The **Appearance** page provides customization options for the Turbo Server portal, such as icons and background images. Appearance changes can take up to a couple minutes to apply to the Portal site.

- **Dashboard Theme**: Changes the appearance of the Portal dashboard site by altering the text colors and default background image. The available themes are:

  - **Light**: Dark text on a light background.

  - **Dark**: Light text on a dark background.

  The light theme is used by default.

  Internet Explorer 11 only supports the light theme. Viewing alternate themes in Internet Explorer 11 or below and may result in degraded visuals.

- **Dashboard Tabs**: Changes the appearance of the Portal dashboard site by altering the tab behavior and visibility.

  - **Default tab**: The tab that is initially displayed when accessing the Portal dashboard.

  - **Tab visibility**: The tabs that are visible on the Portal dashboard. At least one tab must be visible, including the default tab.

- **Show Launch Page**: When enabled, application launches will open a new browser tab to a launch landing page. This page provides detailed launch status information and a Turbo client download link.

  When disabled, application launches will launch directly from the dashboard without opening a new tab. A notification will be displayed at the top of the page with some basic launch status information.

  Run in Cloud (HTML5) is not affected by this setting and will always open a new tab to the HTML5 client.

  The launch page is enabled by default.

- **Show Client Download Banner**: When enabled, a download banner will appear at the top of the Portal dashboard page that provides a Turbo client download link appropriate for the user's device. If no such client is available, the download banner is not shown. This banner can be dismissed by the end-user.

  The download banner is enabled by default.

- **Show Help Link**: When enabled, a "Help" link will appear in the Portal's header that opens the provided URL in a new browser tab.

  The help link is disabled by default.
