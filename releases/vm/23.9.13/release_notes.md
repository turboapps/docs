This minor update to Turbo VM includes fixes for the following issues:

- Add support for **Windows 11** specific layers
- Fix path which are computed relative to **Windows Side-by-Side** manifest files
- Fix child processes can be orphaned if an error occurs when using **DLL injection**
- Fix .manifest files opened for execute permissions from image cache
- Fix error caused by calling **NtQueryVirtualMemory** with **MaxMemoryInfoClass** on virtual .DLL files
- Fix **NtQueryAttributesFile** for device types that don't support **NtQueryFullAttributesFile**
- Improve dynamic resolution for **Microsoft Visual C++ Redistributable** (vcredist)



