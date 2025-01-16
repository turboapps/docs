The May 2020 Turbo Server release introduces a new file browser with drag and drop support to the Turbo HTML5 client.

This release also introduces support for F5 and other stateless load balancers, allowing greatly increasing scaleability.

This update also includes the following improvements:

- Improved image caching logic to provides a faster first launch experience.
- Turbo Server now uses 64-bit Java. The default Java heap size is increased from 1GB to 2GB.
- The Workspace service no longer requires a restart requirement when changing user authentication settings.
- Added a **Used Memory** graph to domain dashboard page.
- Improved the Help text for the **Cloud Storage** and **User Authentication** setups to simplify Single Sign On configuration.

This update includes fixes for the following issues:

- **OneDrive** tokens to not refresh properly under certain circumstances.
- HMAC signatures to gateway websocket tunnel connections now support security with stateless load balancers.
- Turbo Server service may not restart successfully after system reboot.
- Installer reports an error if the T: driver fails to install.
- Installation of Turbo Server may fail as a non-administative user.
- Input sanitation on the SAML SSO form is improved.
- Redirection improvements when logging in to the Workspace administration site.
- Key statistics display on the Workspace administration dashboard is improved.
- Non-user sessions are automatically filtered from the **Sessions** graph on the **Domain** dashboard page.



