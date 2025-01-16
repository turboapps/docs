The September 2024 update to Turbo Client includes the following improvements:

- **New!** **Remote Sandbox** feature in Turbo Sandbox Manager enhances security for sensitive data by allowing custom, encrypted sandbox locations accessible only to Turbo applications.
- Introduces the **turbo config --support-contact** command to support customizing end-user support contact information in error prompts.
- The **turbo kill** command help text has been enhanced for clarity.
- Image version resolution has been improved for various Turbo commands.
- The date created/modified in the assembly cache now matches the file from the image to improve application compatibility.

This update includes fixes for the following issues:

- Applications could fail to launch if a previous instance of Turbo failed to release the repository lock due to a crash.
- The **Starting Session** dialog persisted when launching certain system tray applications.
- Installing the **Acrobat Pro** image could disable certain native Windows shell extensions.
- The **turbo gci** command incorrectly removed images that are components of **turbo installi** registered applications.
- An error occurred during **turbo push** operations when the image is absent but its metadata still exists in the local database.
- The **turbo installi** command failed if the metadata **Product Title** contained a colon character.
- Downloading images with request forwarding was not supported.
- The **turbo pull** command failed if the assembly cache file was corrupt.
- Installed applications failed to launch if the device key login cache file was corrupt.
- Reduced excessive logging in Turbo Sandbox Manager logs.





