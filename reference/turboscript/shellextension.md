### shellextension

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

<table>
	<tr>
		<th>Parameter</th>
		<th>Value</th>
		<th>Registry path</th>
	</tr>
	<tr>
		<td valign="top">
			<p>context menu handler CLSID</p>
		</td>
		<td valign="top">
			<p>{B41DB860-64E4-11D2-9906-E49FADC173CA}</p>
		</td>
		<td valign="top">
			<p>@HKCR@\WinRAR32\shellex\ContextMenuHandlers</p>
		</td>
	</tr>
	<tr>
		<td valign="top">
			<p>extension dll</p>
		</td>
		<td valign="top">
			<p>@HKCR@\CLSID\{B41DB860-64E4-11D2-9906-E49FADC173CA}\InProcServer32</p>
		</td>
		<td valign="top">
			<p>@PROGRAMFILES@\WinRAR\rarext.dll</p>
			<p>@PROGRAMFILESX86@\WinRAR\rarext.dll</p>
		</td>
	</tr>
	<tr>
		<td valign="top">
			<p>executable</p>
		</td>
		<td valign="top">
			<p>@HKCR@\WinRAR\shell\open\command</p>
		</td>
		<td valign="top">
			<p>@PROGRAMFILES@\WinRAR\rarext.dll</p>
			<p>@PROGRAMFILESX86@\WinRAR\rarext.dll</p>
		</td>
	</tr>
</table>	
