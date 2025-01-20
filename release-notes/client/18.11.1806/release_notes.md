**New and Improved**

- Support for containerizing **Cygwin** (Linux environment on Windows)
- Support for additional Security Support Providers (SSPs), enabling new authentication methods
- Containers now respect the working directory setting from the image configuration. (Previously the working directory was based on the current directory of the **turbo.exe** process.)
- Turbo VM honors the **SYSTEM** attribute for virtualized files.
- Ability to set the minimum thread stack size in the image configuration

**Bug Fixes**

- Turbo Client installation can fail if the installer is not executed from the correct folder.
- The **turbo pull** command is not listed in **turbo help**.
- Fixed behavior of container thread local storage (TLS) initialization
- Fixed behavior of asynchronous I/O into sandbox



