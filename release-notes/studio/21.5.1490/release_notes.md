This minor update to Turbo Studio includes the following improvements and bug fixes:

- The Turbo VM is updated to version 21.5.1581
- Fixes an intermittent hang from processes, including some browsers, that suspend processes and threads for profiling and memory analysis
- Fixes an intermittent hang caused by asynchronous operations on certain Merge isolated files
- Fixes an issue with virtual COM objects that may be created in Office O365
- **Build & Run** now uses **turbo try** to execute **SVM** project types
- **Build & Run** and **Run & Merge** containers now use **Write Copy** isolation
- Improved path validation for startup and shutdown scripts
- Error messages that occur during builds could show up behind the Turbo Studio window
- The application console was not inherited from the parent process even when requested



