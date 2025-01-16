The February 2024 update to Turbo Client includes the following improvements:

- The **turbo installi** command now generates a shortcut targets that are backwards compatible for Citrix environments.
- The turbo installer now accepts an **--offline** flag indicating the Turbo Client components should run in offline mode.
- The **turbo config** command now accepts an **--enable=offline** flag that forces turbo commands to run offline if possible. Any command that requires access online resources will fail in offline mode.
- New **turbo gcc** command removes unused image cache resources.

This update includes fixes for the following issues:

- The **turbo release** command could create an empty release visible in the **turbo images** command.
- An unhandled exception dialog appeared when the user does not have permissions to write to the image cache when an image download is required.
- The **turbo push** command did not correctly set the release version if specified for rename.
- The **turbo import** command did not correctly set the release version if the destination image release already existed.
- The **turbo installi** and **turbo uninstalli** command failed when running in specific timezones against applications installed from an older version of Turbo Client.
- The **turbo login --api-key=<key> --all-users** command could result in expired user credentials being cached that were not renewed without logging out again.
- The **turbo rmi -a** did not properly clear the image cache database under certain circumstances. This caused subsequent pulls to no longer cache the image executables and fonts.
- The **turbo subscription** command was missing the **unregister** verb in the help text.
- The **turbo installi --offline** command failed for certain images.
- **Turbo Sandbox Manager **failed to properly garbage collect **All Users** images under certain circumstances.
- The **turbo gci** command removed **All Users** images incorrectly if the current user configures the image path to the same **All Users** path.
- Image downloads may silently fail under slow or unstable network conditions. An error message or dialog is now displayed to the user.
- The **turbo installi** command did not properly register PDFs for Google Chrome and Microsoft Edge images.
- The **turbo cache** command did not accurately detect font names for installation.
- The **turbo config** command did not accurate print immediate changes when using the --all-users --as-override flags.

Update 24.2.1.1311

- Installing applications that require non-standard fonts failed if the image was not present in the local cache.



