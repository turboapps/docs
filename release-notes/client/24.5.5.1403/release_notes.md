The May 2024 update to Turbo Client includes the following improvements:

- The **turbo import **command now supports the **xvm** type for importing a Turbo VM directly from a file path.
- The **turbo import **command now automatically detects and applies the appropriate application version to the release tag.
- Turbo application dependencies are no longer restricted to exact image matches. Dependencies such as java:8 will now match with newer versions of application images named java:8.
- The **turbo containers** command has been renamed to **turbo sessions**, accompanied by corresponding updates in all supporting text. JSON-based APIs remain unaffected by this change, and the original command will still function as an alias.
- Java has been entirely removed from the Turbo Client.
- The **turbo push** command will fail early if the user does not have permissions to push images.
- The **turbo gci** command now accurately considers subscribed application images.
- The **turbo start --vm** flag now supports using an empty string to unset the VM version for a specific session.
- The **turbo cache /xvm** command has been introduced to address potential false positives triggered by security software.
- Installed browsers will now appear in the Windows Default Apps settings.
- Greatly improved Default Programs integration. Images with multiple programs will now install under separate entries in Default Programs.
- The SSO login process has been streamlined when launching applications via the Launch Configuration service.

This update includes fixes for the following issues:

- The **turbo installi --offline --all-users** command returned a misleading error message if the user did not have permissions to write to the image cache path.
- Installed or subscribed applications sent unnecessary web events to Turbo Server.
- An error dialog related to the T: Drive appeared without user interaction and has been removed.
- T: Drive failed to ignore hidden files in specific scenarios.
- T: Drive failed to synchronize Unicode characters in file names correctly.
- Files directly unzipped into the T: Drive were not synchronized properly.
- **Install on My PC** from Turbo Server failed if the application was not cached and required fonts.
- The Turbo Client Path environment variable was not removed when uninstalled.
- Certain fonts were installed with incorrect font names.
- The **turbo config --all-users --as-override** command failed to correctly display the image path setting.
- The Turbo Sandbox Manager service used an unquoted path.
- **Install on My PC** from Turbo Server did not apply the correct application icon in some cases.
- The **turbo config --format=json** command was missing the domainUrl field.
- The **turbo run --enable** flag did not handle unknown values properly.
- Turbo Sandbox Manager made outbound network connections in some situations even if installed in offline mode.
- Even when auto-updates were turned off, Turbo Sandbox Manager continued to perform update checks.
- Turbo Client generated temporary file names with random extensions triggering security audits.
- The **turbo subscription register** command resulted in the creation of duplicate desktop shortcuts in certain scenarios.
- Background subscription updates triggered auto-launching applications.
- The **turbo unsubscribe **threw an unhandled error when the image path is read-only.
- Desktop shortcuts duplicated when upgrading from subscriptions created in Turbo Client 23.6.9.576.
- The **turbo run** command failed to verify whether the specified startup file architecture matched the host machine.



