The October 2021 update to Turbo Client includes fixes for the following issues:

- Added Single Sign-On (SSO) authentication from the command line interface using **turbo login --auth=sso** .
- Added Integrated windows authentication from the command line interface using **turbo login --auth=integrated**.
- Added ability to cancel a download when using **Run on My PC**.
- When adding shortcuts from a workspace application using **Install On My PC**, SVM defined shortcuts are now used by default, except when installing a Web Application.
- Fixed an issue causing "Sandbox is in use" error message on initial run after installation.
- Fixed .NET platform installation issues on Windows 7.
- Fixed an issue when using multiple mount flags such as **turbo --mount=c:\invalid --mount=c:\valid**, the invalid mount caused all other mountings to fail.
- Fixed an issue when parsing mount arguments when running from Turbo Server Portal.
- Fixed an issue where the Turbo CLI did not set the correct exit code from the underlying virtual application.
- Added ability to connect to a remote session without using **Network Level Authentication** to avoid using NTLM protocol.



