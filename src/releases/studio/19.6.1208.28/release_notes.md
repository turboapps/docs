This release of Turbo Studio includes the following new features and updates:

- VM engine updates to 19.6.1427.28.
- Add ability to create new layers and modify layer conditions.
- Add ability to change FaultExecutablesIntoSandbox virtual machine setting.
- Add ability to exclude specific CLSIDs from COM virtualization.
- Add AggressiveRegistrySandboxCachePolicy virtual machine setting for improved startup performance for large numbers of virtual registry entries.
- Add ability to precache registry sandbox with /XPrecache=RegistrySandbox.
- Add new Win10 mechanisms for deleting, renaming, and linking files.
- Change default value of FaultExecutablesIntoSandbox to enabled.
- Rename MACHINE and MACHINERUNTIME layer condition types to APPARCHITECTURE and OSARCHITECTURE respectively.
- Fix for publish to Turbo Server.
- Fix for property status code when attempting to change readonly file attributes.
- Fix how write-copy registry key access flags are propagated during NtCreateKey calls.
- Fix deadloack in heap allocation calls.
- Fix ForceIndicateRunningElevated virtual machine flag to work with group permissions checks.
- Fix NtEnumerateKey return values for partial buffers.
- Fix dependency on comctl32.dll.
- Fix online documentation link.



