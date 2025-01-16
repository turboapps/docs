This minor update to Turbo VM includes fixes for the following issues:

- Show metadata from sandboxed file during **WriteCopy **directory enumerations when the file also exists both in the native location
- **Startup Shims **and** Scripts **are executed with **DLL Injection** launch mode
- Natively sourced applications which require elevation are executed properly when using **DLL Injection** launch mode
- Resolution of potential crash in **Diagnostic **mode when attempting to trace an invalid security descriptor
- Resolution of potential crash** **when initializing modules that have circular dependencies



