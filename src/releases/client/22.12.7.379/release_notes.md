The December 2022 update to Turbo Client includes the following improvements:

- New **turbo kill** command kills sessions running on the local system
- Improved reliability of image downloads on slow or unstable network connections with automatic retries on network failures and resuming partial downloads for all download modes
- New **turbo pull --force** and **--TURBODIRECTDOWNLOAD** flags allow more control over image download behavior
- Improved **turbo config** performance when setting an **all-users** image cache path
- New **turbo config --no-domain-verify** flag disables domain verification, allowing configuration of domains that are offline or not yet setup. Unverified domains will be verified at runtime when running online.
- Updated the **turbo precache --all-users** command to use the **all-users** image pre-cache location if running an All Users image in a local user context
- Updated the executable cache to include **.ocx** files
- Executable caching is now enabled by default for improved launch performance. New executable cache configuration options include a **turbo import --precache** flag and  **turbo config --enable=ExecutableCache** and **AutomaticPrecache** settings.
- Updated **turbo rmi -a** and **turbo gci** commands to remove all unreferenced executable cache files
- Improved launch performance when mounting the T: Drive
- Removed an unsigned wrapper executable in the image install directory that could cause issues with certain antivirus programs
- Improved various text and error messages

This update includes fixes for the following issues:

- The **turbo rmi** command incorrectly returned a 0 exit code on error
- The **turbo rmi** command incorrectly deleted the underlying SVM when other releases  reference the image
- The **turbo try -d** command did not remove the container on exit
- The **turbodesktop register** and **unregister** commands resulted in an error when running with the **--all-users** flag
- The **turbo install** command could fail for applications with very long names
- The **turbo export** command could fail on filenames with certain special characters
- The **turbo subscription unregister** command could incorrectly result in a UAC elevation prompt in certain scenarios
- Image downloads that took over an hour resulted in a timeout error when direct download was disabled
- Failed image downloads could result in a corrupted image and cause subsequent download failures under certain circumstances
- Image uploads could fail if all blocks already existed in the block storage
- Launching an application with **Ask for Credentials** authentication using **Run in Cloud (Windowed)** a second time could result in an incorrect domain prefix if the workspace was configured with a default domain.
- Mount points could fail to mount if they targeted a redirected special folder
- T: Drive could fail to mount if the user manually installed certain drivers after installing Turbo for PC
- T: Drive OneDrive file operations could fail for certain special characters
- Existing login credentials could still used after changing domains, resulting in confusing login errors
- Invalid device keys could result in command failures even if other valid device keys existed



