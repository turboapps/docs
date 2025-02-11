Release 16 of Turbo Studio includes the following new features and updates:

- **Windows 10 support**: Turbo Studio 16 uses the new Turbo VM engine, which includes support for Windows 10. This update is critical for allowing virtualized applications to run on Windows 10 and is therefore strongly recommended for all users of previous versions of Studio (Spoon Studio).
- **Support for Turbo container repositories:** Turbo Studio 16 can import and export VM configurations directly from local container repositories. This makes it easy to move between the console-based container and graphical Studio interfaces for creating, viewing, and editing Turbo VM configurations.
- **Publish to Turbo.net**: Turbo Studio 16 supports publishing to the new Turbo.net hub. Turbo.net provides thousands of ready-to-use virtual environments and makes it easy to publish and share virtual environments with team members and the web.
- **Architecture merge**: Turbo Studio 16 supports dynamic conditional layering based on CPU architecture (x86 or x64). This allows a single Turbo VM image to be deployed that supports both 32- and 64-bit versions of an application. Previous versions of Studio only supported conditional layering based on operating system version.
- **New “Run and Merge” launch mode**: The new Run and Merge launch mode launches the application inside a Turbo VM container. Changes to the application configuration during execution are captured and merged back into the active Studio configuration on application shutdown. This enables an easier workflow for configuration changes that can be made within the application interface and does not require manual editing of registry keys or files.
- **Improved environment variable controls**: Turbo Studio 16 supports new merge semantics for environment variables. This allows applications requiring specific merge or environment variable override behaviors to work properly on all desktops.



