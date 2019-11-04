### Analyzing Logs

In diagnostic mode, a log file will be created for each process that is spawned in the container environment. By default the virtual machine logs are named "xclog_[pid].txt" and the network logs are named "xcnetwork_[pid].txt", where "pid" is the process ID in hexidecimal format. The virtual machine logs show diagnostic information about the code executing in the process. The network logs show specifics about network handling, virtual proxies, and routing.

#### Virtual Machine Logs

Virtual machine logs show every system function call that comes from the process. 

An example of a log entry is below:
```
pid:1240, tid:5416, tick:0x1757B5, lvl:LOG, func:NtQueryValueKey, status:0xC0000034, name:"InprocServer32", class:0x2, length:0x90, resultlength:0x0, handle:0x79E, path:"\Registry\Machine\Software\Classes\CLSID\{4B429D05-8931-11D2-A213-0008C71AB540}\InprocServer32"
```

The fields of the log entry are:<br>
<b>pid</b> - The ID of the process that generated the log entry.<br>
<b>tid</b> - The ID of the thread that generated the log entry.<br>
<b>tick</b> - The tick count when the log entry was written. Tick count is the number of elapsed milliseconds since the machine was started.<br>
<b>lvl</b> - The severity of the log entry. Possible values include "OK", "LOG", "WRN", and "ERR". "OK" indicates the entry was a success case. "LOG" indicates that the function failed or was other informative non-function call log entry. "WRN" indicates that something failed unexpectedly and may suggest a problem. "ERR" indicates that something failed unexpectedly and is likely a problem. Note that not all "LOG" entries are ignorable and every "ERR" entry is a problem, any log entry requires analysis based on the context of the call.<br>
<b>func</b> - The function where the log entry was written from. Most often these will be Windows APIs that have entries in [Microsoft Docs](https://docs.microsoft.com) or [Microsoft Developer Network](https://msdn.microsoft.com) that can give more context about the parameters in the log entry.<br>
<b>status</b> - The NTSTATUS code that is returned from the function. See [NTSTATUS Values](https://msdn.microsoft.com/en-us/library/cc704588.aspx) for a list of values. In this case we see 0xC0000034 which is for STATUS_OBJECT_NAME_NOT_FOUND. Not all functions return NTSTATUS codes. Some may have "gle" which is the system error code returned from GetLastError. See [System Error Codes](https://docs.microsoft.com/en-us/windows/desktop/debug/system-error-codes) for a list of values. Other functions have "hr" which is for an HRESULT code. HRESULT values are usually very context specific so no single resource catalogs their values. A quick web search will often find their meaning.

After the return value, the log entry will show the list of parameters that were passed to the function. This will depend on the function being called and is where checking the Microsoft documentation can be helpful.

In our example for "NtQueryValueKey", the Microsoft documentation is [here](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/content/wdm/nf-wdm-zwqueryvaluekey). Note, many of the function calls in the virtual machine are at a very low level and will be listed in the documentation for drivers with "Zw" rather than "Nt" (ie. "ZwQueryValueKey" not "NtQueryValueKey"). This is Microsoft naming convention for user-mode and kernel-mode APIs. 

In this doc, we see that the signature for "NtQueryValueKey" is:
```
NTSYSAPI NTSTATUS ZwQueryValueKey(
  HANDLE                      KeyHandle,
  PUNICODE_STRING             ValueName,
  KEY_VALUE_INFORMATION_CLASS KeyValueInformationClass,
  PVOID                       KeyValueInformation,
  ULONG                       Length,
  PULONG                      ResultLength
);
```

From this Microsoft documentation, we see that the purpose of this function is "return a value entry for a registry key" and the remaining fields of the log entry are:<br>
<b>name</b> - The name of the value entry to obtain data for.<br>
<b>class</b> - A KEY_VALUE_INFORMATION_CLASS value that determines the type of information returned in the KeyValueInformation buffer. For more information about the values that this can be, see the doc on [KEY_VALUE_INFORMATION_CLASS](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/content/wdm/ne-wdm-_key_value_information_class).<br>
<b>length</b> - The size, in bytes, of the KeyValueInformation buffer.<br>
<b>resultlength</b> - The size, in bytes, of the key information.<br>
<b>handle</b> - The handle to the key to read value entries from. This was created by a previous call to NtCreateKey or NtOpenKey.<br>
<b>path</b> - The resolved path in the container that the handle represents.<br>

From viewing this log entry, we can determine that this thread was looking up a COM GUID to determine how it should be activated. It was not able to find the information it was looking for at this location. This might be a problem or it might continue its search in another location (ie. in HKCU, etc). NOTE: There are always many error codes returned by system calls so determining which error is causing a problem can be tricky.

This is just one example but following the same procedures to cross reference with Microsoft documentation can be used to decipher most any log entry.

#### Virtual Machine Analysis Strategies

Virtual machine logs are frequently very large and it can be a difficult task to isolate which of the many error conditions are causing problems. There are several techniques that can be employed to make the task easier.

The first technique is to compare working logs to failing ones. In many cases, a container will work in most situations but fails in a certain environment. Collecting logs on both working and failing machines allows us to ignore the errors that are "expected" and focus only on those that are unique. This technique is most useful when there are working and failing cases on very similar platforms (ie. both Win7 x64). Comparing logs from different platforms (ie. WinXP vs Win10) often have too many differences to be of much use. To compare the logs, tools such as WinDiff or WinMerge can be used. Even having the files open side-by-side can produce results.

The second technique is to narrow the scope of the logs that you have to look through. For example, if an error only occurs after a button is pressed, then copying off the logs immediately before and after the button press will allow you to determine the set of log entries that were written for the operation that led to the error (the difference between the before and after logs). This can be especially effective when coupled with the first technique of comparing working to failing logs.

#### Network Logs

Network logs show details about any network operations that pass through the process.

An example of a log is below:
```
Bind succeeded: 127.0.0.1
Connect succeeded: 127.0.0.1
GetAddrInfoW resolving detectportal.firefox.com
Host detectportal.firefox.com resolved to: 104.80.89.26
Host detectportal.firefox.com resolved to: 104.80.89.24
GetAddrInfoW resolving detectportal.firefox.com
Connect succeeded: 104.80.89.26
Host detectportal.firefox.com resolved to: 104.80.89.26
Host detectportal.firefox.com resolved to: 104.80.89.24
DnsQuery_A resolving a1089.d.akamai.net
GetAddrInfoW resolving location.services.mozilla.com
Host location.services.mozilla.com resolved to: 34.252.164.43
Host location.services.mozilla.com resolved to: 52.16.107.9
Host location.services.mozilla.com resolved to: 52.17.111.251
GetAddrInfoW resolving location.services.mozilla.com
Host location.services.mozilla.com resolved to: 34.252.164.43
Host location.services.mozilla.com resolved to: 52.16.107.9
Host location.services.mozilla.com resolved to: 52.17.111.251
DnsQuery_A resolving locprod1-elb-eu-west-1.prod.mozaws.net
Host locprod1-elb-eu-west-1.prod.mozaws.net resolved to: 52.16.107.9
Host locprod1-elb-eu-west-1.prod.mozaws.net resolved to: 52.17.111.251
Host locprod1-elb-eu-west-1.prod.mozaws.net resolved to: 34.252.164.43
```

This log snippet was generated by starting an instance of a Mozilla Firefox browser container. Here we see that the winsock calls to GetAddrInfo, DnsQuery, etc were made as well as how each of the hosts were resolved. These logs can be especially useful when troubleshooting issues with virtual network routing and proxies.