# shellextension

The `shellextension` instruction is used to enable a shell extension in the output image.

```
shellextension <context menu handler CLSID> <extension dll> <executable>
```

If an image contains shell extensions, the MergeStartupDir VM setting should be enabled to allow operations on file system items using the context menu in Windows Explorer.

Examples:

```
enable MergeStartupDir

# shellextension <context menu handler CLSID> <extension dll> <executable>
shellextension "{B41DB860-64E4-11D2-9906-E49FADC173CA}" "@PROGRAMFILES@\WinRAR\rarext.dll" "@PROGRAMFILESX86@\WinRAR\winrar.exe"
shellextension "{B41DB860-8EE4-11D2-9906-E49FADC173CA}" "@PROGRAMFILESX86@\WinRAR\rarext.dll" "@PROGRAMFILESX86@\WinRAR\winrar.exe"
```

Values required to enable the shell extension were copied from the following locations in the system registry:

| Parameter | Value | Registry path |
|-----------|-------|---------------|
| context menu handler CLSID | {B41DB860-64E4-11D2-9906-E49FADC173CA} | @HKCR@\WinRAR32\shellex\ContextMenuHandlers |
| extension dll | @HKCR@\CLSID\{B41DB860-64E4-11D2-9906-E49FADC173CA}\InProcServer32 | @PROGRAMFILES@\WinRAR\rarext.dll<br>@PROGRAMFILESX86@\WinRAR\rarext.dll |
| executable | @HKCR@\WinRAR\shell\open\command | @PROGRAMFILES@\WinRAR\rarext.dll<br>@PROGRAMFILESX86@\WinRAR\rarext.dll |
