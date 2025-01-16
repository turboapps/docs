This update includes the following improvements:

- The Hub storage directory has been relocated to a custom directory that is configurable in the administration site. If you are migrating existing data, please make sure that the target drive has enough space before changing the path.
- Updated the **SSLCipherSuite** in the embedded Apache configuration to disable export ciphers which are affected by FREAK** **attacks.
- Updated session eventing API to improve support for load balanced Portal servers.

This update includes fixes for the following issues:

- Issue parsing SAML assertion tokens under certain circumstances.
- Added network tunnel routing for public API endpoints required to launch applications from external Portals.



