# DEP Compatibility

### Background

Data Execution Protection (DEP) is a combined hardware and software technology designed to prevent execution of malicious code. DEP prevents memory pages not explicitly marked as executable from executing.

DEP has been supported on Windows since Windows XP SP2 and is supported by both Intel (via Execute Disable Bit or XD) and AMD (via No-Execute Page Protection or NX).

### Issues with DEP

Certain applications may execute memory not marked as executable content as part of their dynamic runtime behavior. This behavior is detected by Windows if DEP is enabled and causes the application to crash. Such applications may require DEP to be disabled on the system. 

### DEP Compatibility Mode

The **DEP Compatibility Mode** in Turbo VM allows applications otherwise incompatibile with DEP to execute successfully without modifications to the host OS settings.

DEP Compatibiity Mode works by forcing Turbo VM to apply executable permissions to all memory pages used by applicable virtual processes.

This option is enabled via the Turbo Studio intefarce under the **Process Settings** or via the **DEPCompat** flag.

Note that enabling this option disables protections provided by DEP. This option is disabled by default and should only be enabled when required for compatibility purposes.
