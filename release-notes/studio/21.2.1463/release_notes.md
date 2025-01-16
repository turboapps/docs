This minor update to Turbo Studio includes fixes for the following issues:

- The Turbo VM is updated to version 21.1.1564.
- Support for Google Chrome 64-bit
- Applications with **wininet** or **iertutil** static dependencies can crash intermittently
- Some Turbo hub operations use Client login rather than Studio login credentials
- Shutdown shims/scripts do not run for standalone executables
- Startup shims/scripts run for every bootstrap process in a container, not just the first bootstrap process
- Startup/shutdown shims can't use environment variables in their paths
- Invalid startup/shutdown script paths are allowed
- **WaitForChildOnly** setting only applies to the last startup process if there are multiple
- **Publish to Hub** server text not updated after login change
- Login dialog shows an error if a server URL protocol is not specified
- Some valid network names were found to be invalid on **IP Restrictions** panel
- **IP Restrictions** panel support for IPv6 notation
- Studio window can start larger than display on small monitors
- Error logs are not persisted and can only be viewed with dbgview tool



