**New and Improved**

- Support for Turbo Server 20, a powerful new platform that delivers your organization’s applications to all of your devices and the cloud.
- New Turbo Gateway allows streaming sessions to work over SSL, with no need to open any additional ports.
- Turbo and all Turbo-supported applications are ready and compatibility tested with the latest **Windows 10 Insider Preview, build 18941 (20H1)**.
- The new **turbo://** protocol no longer requires a separate sign-in for local and natively streamed application launches.
- The **turbo as** command can be used to set the Turbo client profile context to the **All Users** profile, simplifying management of system-wide applications and settings.
- The installer allows configuration options to be passed on the command line to set default turbo config settings.
- The Launcher interface has been removed from the client. Launches are now initiated from the Turbo Portal, Start Menu, or third-party integration.
- Multiple images may be downloaded from a Turbo Hub with a single **pull** command, eg **turbo pull sqlserver,ssms,dotnet**
- Whitelisting and blacklisting of application sources now support wildcard (*) expressions.
- Added support for SSL digital certificates with a public key size greater than 2048 bits.
- The **turbo uninstalli** command can use the **--name** flag to specify a named installed application.
- The **turbo installi** command no longer installs container services to the host system by default. To install a containerized service, use the **--register-services** flag.
- Significantly reduced processing time for **turbo installi** commands when installing large images.
- The **turbo installi** command does not pull the image by default. To force download of the image, use the **--pull** flag.
- The path for the All Users image repository can be now be configured via the **turbo config --image-path=&path& --all-users** command.
- The expiration period for unused application images during cache cleanup can now be configured using the **turbo config --gci-expiration** command. The default has been changed from 30 to 90 days.

**Bug Fixes**

- The MSI installer does not scale with DPI settings.
- May show a “Sandbox already in use” error when launching multiple shortcuts for the same application very quickly.
- Does not show an appropriate error message when a shortcut launch fails due to a network error.
- Does not refresh the login session or cloud regions if the initial network connectivity check fails due to a network error.
- The installer now disables automatic Turbo updates when installing for All Users on the system. Administrators should push Turbo client updates using their desktop management infrastructure.
- Does not show the image buffering dialog while dependency images are being downloaded.
- **Integrity Software SofTrack** may interfere with startup of containerized applications.
- The **turbo push** command fails to push icons to the image repository on systems that have FIPS Compliance enabled.
- The **turbo config** command does not display correct Turbo Drive settings.
- The **turbo commit** command appends a suffix to **ProgID**s resulting in broken associations for certain applications.
- The **turbo commit** command captures changes to classes in the **HKCR** registry hive instead of the **HKCU** hive as in Turbo Studio.
- The **turbo installi** command automatically downloads the latest Turbo VM even if a different version is requested by the user.
- The **turbo uninstalli** command shows an error message for containerized services that were never installed.
- The **turbo uninstalli** command fails if the image name contains an underscore character.





