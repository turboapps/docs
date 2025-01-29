The January 2025 update to Turbo Client includes the following improvements:

- **New!** **Peer-to-Peer Transfer** feature enhances image distribution by supporting torrent-based transfers, potentially improving download speeds and reducing server load. Requires the latest Turbo Server update.
- Improved handling of read-only image repositories, ensuring Turbo Client can launch successfully in shared image cache scenarios.
- Enhanced subscription management with better offline support and improved error handling.
- Removed automatic font and DLL caching by default for optimized performance.
- Improved API security through the addition of API keys to all API calls.

This update includes fixes for the following issues:

- Turbo Sandbox Manager silent uninstall didn't provide feedback on success or failure.
- The --no-files-associations flag was not functioning as expected.
- Locked subscription.json metadata file unecesarily prevented users from registering a subscription.
- Missing error handling and user feedback for various commands, including `turbo export` and `turbo gc-shortcuts`.
- The `turbo session` command incorrectly reported the status of running sessions.
- The `turbo subscribe` command with the --pull flag ignored disabled autoprecache settings.
- An unhandled exception occurred in specific situations when using "Run on My PC (Local)".
- Fixed various UI elements to improve user experience.

Additional improvements:

- Removed the deprecated Portable EXE export type.
- Improved installation process to ensure all necessary files are included, particularly on Server 2019.
- Various performance optimizations and stability improvements.