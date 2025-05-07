The May 2025 Turbo Server release includes several major features:

- **New!** **Shell Integration** workspace setting allows administrators to override the shell integration setting at a workspace level.
- **New!** **Concurrent Devices Per User** limit for workspace applications allows administrators to set a per-user device limit for workspace applications.
- **New!** **Authentication Providers** webpage allows administrators to configure multiple authentication providers for SSO login.
- **New!** **Peer-to-Peer Image Distribution** feature allows clients to distribute images using P2P. The Hub must have image caching enabled and will seed cached images for P2P distributions.
- **New!** **Automatic image precaching** setting under the domain server storage webpage allows administrators to control whether image caching on the Hub will include the AutoPrecache setting. The Turbo Client on the Hub will no longer have AutoPrecache enabled by default.
- **New!** **Server Services** webpage allows administrators to diagnose and restart internal server services.

Other improvements include:

- **Domain Federation** UI now provides the link to the status webpage after updating.
- **Import Repository** now automatically prefixes the global repository namespace if the namespace is omitted. Entering `xvm` will default to `/xvm`.
- Upgraded the VM version for improved anti-virus compatibility.
- The `Automatic` resource allocation strategy now uses the next healthy application server using a round-robin algorithm.
- The **Internal Hostname or IP Address** under the **Domain Server** setting was redundant and removed.
- The update frequency expectations in the **Check for Updates** tooltip for workspace applications has been clarified.
- Changing the **Domain Federation** settings will now trigger a sync immediately.
- The integrated Windows authentication UI attempted to load the **Domain Server** settings on every page load. A fetch button replaces this behavior.
- The **Storage Provider** tooltip on the **Storage Connection** webpage has been improved.
- Added tenant restrictions for OpenID authentication, which had already existed for SAML.
- The logout flow when using SSO authentication has been improved. The single-logout setting was removed and instead when the user logs out they will be redirected to login again with the option to select a different account under the current SSO authentication provider.
- The **Enable Assembly Cache** workspace application setting tooltip has been improved.
- Automatically stay logged in on the Portal website while the user is active within the range of the ticket expiration time.

This update includes fixes for the following issues:

- The application session reported an incorrect duration for short sessions in the Application Sessions report.
- The application session reported an incorrect duration when sending to ZAM in the OpenText SKU.
- The Turbo AppServer service used an unquoted path.
- The server diagnostics webpage returned a SqlDateTime overflow error under certain circumstances.
- Broker memory settings incorrectly required the Hub role instead of the Portal role.
- Web logins incorrectly used a 1 day timeout when logged in using SSO. It now uses the **Ticket Expiration Time** setting.
- Hub import failed when the repository ID contained a period.
- The **Stay Signed In** button on the Portal webpage navigated away from the current webpage.
- The **Stay Signed In** button on the Portal webpage did not prevent logout of browser tabs other than the active tab.
- Elastic deployments failed at the provisioning stage.
- The Apache httpd.exe process failed to start after upgrading from older Turbo Server versions when the Proxy service is installed natively.
- A memory leak occurred when generating server performance counters.
- Turbo Drive Filr integration did not work against the latest Filr server.
- Shared application launch links failed to redirect and launch after login.
- Searching for files in the Portal Files tab failed to render correctly.
- After installing the native proxy service using `server.exe /install-services proxy`, the proxy logs were incorrectly named `proxy-apache_%Y.%m.%d.%h.log` and failed to rotate.
- Device-key authentication failed under certain conditions.
