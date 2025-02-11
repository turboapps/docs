This update includes the following major new features:

- A new **Domain URL**s section allows configuration of public-facing Hub, Portal, and other Turbo web service URLs to be configured.
- A new **Internal Hostname or IP Address** section displays hostnames or IP addresses used to resolve internal services such as connections to internal application servers and proxies.
- A new **Block Storage** section in the Hub server settings allows validation and repair of block storage.

Other improvements include:

- A new **Firewall and Security** section on the server settings page provides information on ports required by the server roles.
- The Turbo Server service now runs in 64-bit mode, allowing utilization of large RAM systems.
- The Turbo Server install reports service shutdown errors.
- Communication between the Broker and Application Server now uses standard SSL ports.
- The **Cloud Storage** setup process has been streamlined.
- A **Startup File Arguments** field in the Workspace application settings page allows configuration of startup files from the web UI.
- Added pagination and search controls to user group tables.
- Allow the merge isolation setting to be applied during cloud launches.

This update includes fixes for the following issues:

- Improved performance when listing and synchronizing large Active Directory services.
- Synchronizing Active Directory groups with cylical dependencies results in an infinite loop.





