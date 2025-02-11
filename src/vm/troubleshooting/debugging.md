## Debugging

The following document describes how to obtain a .DMP file for a running application that is in an erroneous state for diagnostics.

### Create .DMP File 

Open taskmgr.exe (defaults to 64 bit if trying to debug turbo server service). The 32 bit taskmgr.exe can be found under c:\windows\syswow64 on 64 bit Windows.

For Turbo Server service, you can find the process by looking at the command line column by right clicking the task manager column. Look for Turbo Virtual Machine with command line __TurboServer-Service.exe__.

Right click on the process and select Create Dump File.

Alternatively, you can use WinDbg to create the file. A portal version can be found [here](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools).

To create a dump file using WinDbg, attach the process and run the command:

`> .dump /ma c:\path\to\your\dump`

### Automatically Create .DMP File

Windows can be configured to automatically create a dump file when an application crashes. 

To configure this feature, add the following values to "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps":

__DumpFolder__ - The path where the dump files are to be stored.

__DumpCount__ - The maximum number of dump files to store in the folder.

__DumpType__ - The type of dump to create. Set to __2__ for a full dump.

If the application filename is known, then these settings can be put under "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\\[app.exe]" so that dump files are not collected for other applications.

An example PowerShell script which adds the necessary settings to collect dumps for a crashing notepad.exe:

```
New-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting" -Name "LocalDumps"
New-Item -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps" -Name "notepad.exe"
New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\notepad.exe" -Name "DumpFolder" -Value "%LOCALAPPDATA%\CrashDumps" -PropertyType "ExpandString"
New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\notepad.exe" -Name "DumpCount" -Value 10 -PropertyType DWord
New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\Windows Error Reporting\LocalDumps\notepad.exe" -Name "DumpType" -Value 2 -PropertyType DWord
```

### Debugging Dump Files

To debug the .DMP file, open in windbg x64 using file open crash dump.

You can debug .NET applications by using the sos module:

```
> .loadby sos clr
> !eestack -ee
```

If .loadby fails with some load module errors, make sure the bitness of windbg is correct. Detailed documentation can be found [here](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugging-managed-code).

To look at a stack on a specific thread, ex: thread #6

```
> ~6s
> !dumpstack
```