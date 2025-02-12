# Debugger

The Turbo Studio Debugger is a tool to aid in virtual machine log analysis. It contains many tools to filter and compare logs.

### Getting Started

![Debugger Startup](/images/debugger-startup.png)

Containers can be executed in **diagnostic** mode to produce log files of the inner workings of the virtual processes in that container session. There is one log file, **xclog\_[pid].txt**, for each virtual process in the container. These log files contain lists of all system calls that pass through the Turbo virtual machine as well as other process information. There will also be one network log file, **xcnetwork\_[pid].txt**, for each virtual process in the container. These logs files contain information about all the network communications that take place. See [Diagnostic Logs](/reference/turbo-vm/troubleshooting/analyzing-logs) for more information on enabling diagnostic mode and log file formats.

Open the Turbo Studio Debugger by clicking the **Debugger** button in the **Advanced** ribbon menu in Turbo Studio or from the start menu shortcut.

![Launch Debugger](/images/debugger.png)

In the Turbo Studio Debugger, open the session log folder by clicking on **File > Open Session Log**. Select the folder than contains the session logs and press **Select Folder**.

After the session logs are loaded, a tree view of the processes in the session will be presented to vizualize how the processes are related to each other. Double clicking the process will open the log file for that process.

After the process log is loaded, the full log is shown with options to filter and resolve the timestamps.

### Options

![Debugger Options](/images/debuggeroptions.png)

There are several options that can be configured for the Turbo Studio Debugger.

**Text Editor** sets the editor to be used when opening a log in an external editor. The default is to use the system **.txt** editor. Turbo commands can be set here to use any tool from a turbo.net or turbo server hub (ex: `turboplay turbo run npp/notepadplusplus --isolate=merge`).

**Text Comparison Tool** sets the text compare tool to use whenever performaning diffs. The default is to use winmerge from the turbo.net hub.

**Color Scheme** sets the color scheme of the window. Setting this will also change the color scheme of the main Turbo Studio window after it restarts.

**Save Workspace** sets whether the current tabs are maintained between debugger sessions. Values include **Never**, **Always**, and **Ask**. The default is **Never**.

### Session Log View

![Session Log Tree](/images/session-log-tree.png)

The session log view shows a tree of all the virtual processes in the session. Processes for the child nodes in the tree were launched from the processes for the parent nodes in the tree. If the session log folder contains logs from multiple container sessions then all sessions will be shown. If a process was started outside the virtual environment from a process inside, then this process will not have a log file (for example, if the process were excluded via the **Child Process Exception** rules). Double-clicking a node in the tree will open the log file in a new tab.

Selecting a node in the tree will show information about the log which is represented at the bottom of the debugger window. Information includes the process ID (or PID), the size of the log file, the system time that the process executed, the duration of the process execution, and the name of the file.

Right-clicking on a node in the tree view will show a menu of additional functionality.

**Open In External Editor** will open the log file in the system default text editor or the text editor defined in the Turbo Debugger options.

**Copy Full Path** will put the path to the log file on the clipboard.

**Search** will perform a text or regular expression search in the selected log file. The regular expression syntax is the same as the `findstr` system tool.

**Search All** will perform a text or regular expression search in all the logs in the session log folder.

**Show VM Environment Info** will display the VM version and architecture as well as the operating system version information from where the process was executed.

**Show VM Settings Flags** will display the virtual machine settings which are enabled for this process.

**Open Network Logs** will open the network logs for the process (if they exist).

**Refresh** will reload the session log folder.

### Process Log View

![Process Log](/images/process-log.png)

A process log is an individual log file for a specific process that was executed inside the virtual environment. Every process that is running inside the virtual environment will have a log file. The process log contains a lot of information about what is happening inside the virtual process, including all system API function calls that go through the virtual machine. Since there is so much detail included in these logs, they can be difficult to analyze to find root causes of problems. The process log viewer provides functionality to make this process easier.

Selecting a line of the log will display a parsed view of the trace at the bottom of the debugger window. In addition to pulling out the information that is already visible in the trace, system flags and contants which are passed as parameters to system API functions will be shown.

![Process Log Trace Information](/images/process-log-information.png)

In this example, the trace for **NtOpenFile** is shown. The access flags, **0x100020** are shown as FILE_EXECUTE, FILE_TRAVERSE, and SYNCHRONIZE. These are constants defined in the Windows SDK that are documented on the [Microsoft Developer Network](https://docs.microsoft.com/) website. When hovering the mouse over these constants, their values are shown.

#### Filters

![Process Log Filters](/images/process-log-filters.png)

There are several filters that are defined that can be useful in narrowing down the scope of the log file to make possible errant behaviors easier to see.

**None** shows the original, unfiltered log file.

**Error** shows only traces those with trace level **WRN**, **ERR**, or **LOG** if they contain error code information. This may be a good first filter to quickly check if there is anything that stands out. Note that there are many legitimate reasons why a level **LOG** trace may have an error code so these alone do not indicate a problem and even level **ERR** can also be benign.

![Process Log Filter Error](/images/process-log-filter-error.png)

**COM** shows only traces which have to do with Component Object Model (COM) API function calls (CoCreateInstance, CoRegisterClassObject, COM related registry key accesses, etc). This can be useful if the error being investigated is related to COM object instantiation. Note that errors here may not necessarily be a problem either. There are many COM objects that are optional components and their failure does not cause problems.

![Process Log Filter COM](/images/process-logs-filter-com.png)

**Windows** shows only traces related to the Window subsystem API function calls (CreateWindowExW, FindWindowW, GetClassInfoExW, etc). This can be useful if the error being investigated is related to the application's user interface, especially in legacy applications which are being made compatible with the latest versions of the Windows operating system.

![Process Log Filter Windows](/images/process-log-filter-windows.png)

**DLLs** shows only traces related to DLL loading, Windows Side-by-Side (SxS), and manifests. Many application problems can be attributed to incorrect versions of DLLs being loaded. This is especially true when getting legacy applications to work on modern operating system.

![Process Log Filter DLL](/images/process-log-filter-dll.png)

In addition to filtering the log, the trace tick time can be transformed into a more useful value. Either absolute time or time relative to the beginning of the log.

Absolute time can be useful when trying to find connections to information from other sources such as application log files, Windows event viewer, etc.

![Process Log Absolute Time](/images/process-log-absolute-time.png)

Relative time can be useful when comparing to logs in other sessions or when investigating performance issues.

![Process Log Relative Time](/images/process-log-relative-time.png)

### Process Log Reports

If a process log is being displayed or if a log is selected in the session log tree, the **Create Reports** button is available to generate reports on that log.

![Process Log Reports](/images/process-log-reports.png)

Three reports are available: path inventory, error inventory, and DLL inventory.

**Path Inventory Report** shows a list of all filesystem and registry paths that were accessed in the log and the exit codes returned when accessing these paths. It says nothing about how the path was accessed (for example, creating, opening, writing, etc). This can be useful if the set of potential problem paths is known but is most useful when comparing to logs from a working session.

![Process Log Path Inventory](/images/process-log-path-inventory.png)

**Error Inventory Report** shows the same list of paths and exit codes as the path inventory report but it sorts the information so that error with many occurrences are at the top, then all other errors, and then successes. Reviewing the common errors can reveal possible problem areas.

![Process Log Error Inventory](/images/process-log-error-inventory.png)

**DLL Inventory Report** shows a similar list of paths but only for .DLL file types. It also shows the version of the DLL that was accessed in each case. This can be useful when comparing to working sessions.

![Process Log DLL Inventory](/images/process-log-dll-inventory.png)

### Session Log Comparison View

Often the easiest way to discover the source of a problem is by comparing two session log sets with each other. If one session log set is from a working environment and another is from a failing environment, the logs can be compared to see how they differ to bring to light the reason for difference in behavior. Another way to compare session logs is to copy the logs from before and after errant behavior occurs. This makes it possible to see what happened in between the two events to narrow down the scope of logs that require analysis.

To compare two session log sets, open both of them in the debugger and press the **Create Comparison** button. This will bring up a window which allows you to assign the left and right sets. Assign the sets or leave the defaults and press OK.

![Session Log Compare](/images/session-log-compare.png)

This will bring up a new view with the session log trees side-by-side and show additional functionality that is available to compare the logs in the sets.

![Session Log Compare View](/images/session-log-compare-view.png)

### Session Log Comparison Tools

When a session log comparison view is selected, many new ribbon menu options become available: **View Differences**, **Inventory Report**, and **Create Delta Log**.

#### View Differences

The **View Differences** menu shows a number of different ways to filter and compare two logs. These differences will be displayed in text comparison tool which is specified in the debugger options (default is using WinMerge from the turbo.net hub). In all cases the logs will be normalized to make them more comparable (lower cased, remove transient data such as process ID, thread ID, time stamps, memory addresses, user names and IDs, etc). Because of this normalization there will be a loss of information in the text compare tool that may need to be cross referenced with the original logs.

![Session Log View Differences](/images/session-log-view-differences.png)

**Full** will compare the entire logs files. This can be very slow if the logs are large. This can also have limited utility depending on the logs being compared. If the logs were taken from different operating systems then the number of differences can be so large that no useful information can be easily determined. This can be more useful when comparing delta logs (see **Create Delta Log** below for more information).

**Full with Time** will convert the ticks to relative time and then do a full compare. This will create a very messy text comparison but can be useful when tracking down a series of events that lead to errant behavior.

**Threads** allows for comparing the traces for specific threads in two different log files. When this option is selected, the debugger will prompt for the thread ID to compare from each log. Then every trace written from a different thread will be removed before the logs are compared.

**Filesystem and Registry** filters out all traces except those for filesystem and registry accesses.

**Errors** filters out all successful API function calls and information log traces, leaving only trace level **ERR**, **WRN**, and **LOG** where it includes an error code.

**COM** filters to only show traces related to the Component Object Model (COM) such as CoCreateInstance, CoRegisterClassObject, etc.

**Windows** filters to only show traces for the windows subsystem such as CreateWindowEx, RegisterClassObject, etc.

**DLLs** filters to only show traces for DLL loading, Windows Side-by-Size (SxS), and manifests.

**Network** compares the network logs for the processes.

**VM Settings** compares the virtual machine settings flags for the processes.

**Path Inventory** compares the **Path Inventory Report** from the two logs. A quick scan can reveal if certain paths had different return codes.

**DLL Inventory** compares the **DLL Inventory Report** from the two logs. A quick scan can reveal if certain DLLs had different versions or return codes which may indicate a possible source of problems.

**Search** compares the search results from the two logs.

#### Inventory Report

The **Inventory Comparison Report** can be used to quickly see relevant differences in how paths are accessed in two different logs. When the two log sets compared are from working and failing cases, this may be the most useful tool in quickly determining the source of a problem.

![Session Log Compare Inventory](/images/session-log-compare-inventory.png)

In the report, paths and their return codes are shown. The paths are sorted into buckets of "differences" (those where the paths are in both but have different return codes), "in both" (those where the paths and the return codes are the same in both), "in only left" (those paths that are only in the left log), and "in only right" (those paths that are only in the right log). For paths to DLL files, the comparison will also take into account their version if available. Focus should be in the section highlighting "differences" where one log has a success code and the other log has an error code. These can often be problematic and are worth analysis. These lines in the report will have an asterisk (\*) next to them.

#### Create Delta Log

A **Delta Log** is the log file that is produced by removing the traces that are shared in the two log files, leaving only traces for VM initialization and those that are only present in the later version of the log. This is only useful when comparing the same log file at two points in time, like before and after when an error occurs. This can be an incredibly useful tool in order to narrow the scope of the log that requires analysis. To further the utility, two delta logs (one from working set and one from failing set) can be compared with the other comparison tools. This can produce the easiest to analyze logs.

![Session Log Compare Delta Log](/images/session-log-compare-delta.png)

When a delta log is created, it will be placed in the session log folder where the largest version of the log file resides. It will appear in the tree view as a child of the log from which it was produced.

### Log Tools

There are several tools which are specific to logs. They can be found in the ribbon menu: **Lookup Flags** and **Resources**.

The **Lookup Flags** window offers the same functionality that is built into the process log viewer where trace fields are broken down so that flags and constants can be resolved. This is useful when copying traces from sources outside the debugger where this is done automatically (ex: text compare tool, external log files, snips from emails, etc).

![Lookup Flags Tool](/images/tools-lookup-flags.png)

The **Resources** menu has a collection of links to Microsoft documentation that is frequently useful when analyzing logs. These include **HRESULT**, **NTSTATUS**, and **System Error Codes** which are returned from API function calls. HRESULT values will be displayed in traces with "hr" field name, NTSTATUS values will be displayed in traces with "status" field name, and system error codes will be displayed with "gle" field name.

![Log Resources](/images/tools-resources.png)

### General Tools

In the **Tools** ribbon menu, there are some additional tools which can be useful depending on the situation.

![Tools](/images/tools.png)

#### Compare

The **Compare** tool is a simple tool to compare two sets of text. The tool will normalize the text depending on how the text is to be interpreted. It is then passed to the configured text compare tool.

![Compare Tool](/images/tool-compare.png)

**As Text** will compare the text exactly as it appears in the window.

**As Trace Log** will normalize the text as a VM log file in the same manner that all previously discussed filters and comparison operations do.

**As Configuration (.xappl)** is used to compare two .xappl files and will normalize the text to remove all transient data (timestamps, etc). This can be useful when comparing two versions of an application xappl to narrow down the differences between them.

**As Process Monitor XML** is used to compare two XML files which were produced from Process Monitor (procmon) traces. This can be useful if trying to compare behavior between a native application and a virtual application since a native application will not have vm logs).

#### CLSID Lookup

The **CLSID Lookup** tool is used to quickly see what a CLSID is configured to be on the current system. When the CLSID is entered, press the **Find** button. The description field will be shown and all occurrences of the CLSID in the registry will be displayed. Press the **Open Key** button to open the registry editor to the selected key.

![CLSID Lookup Tool](/images/tool-clsid-lookup.png)

#### Thread Security Descriptor

The **Thread Security Descriptor** tool will look up the security descriptor of the specified thread object (not the thread user's security descriptor) and display the Security Descriptor Definition Language (SDDL) string. The string can be copied from the message box with CTRL+C.

![Thread Security Descriptor Tool](/images/tools-thread-sd.png)

#### File and Folder Attributes

The **File Attributes** and **Folder Attributes** tools show the file system attributes of the file or folder selected. For more information on file system attributes, see [File System Attributes](https://docs.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants).

![File Attributes Tool](/images/tool-file-attrib.png)

#### Apply Configuration

The **Apply Configuration** tool will copy the contents of the specified configuration to the host machine, including both registry and filesystem. This can be useful for troubleshooting issues where the installation media is not available. **This operation cannot be undone** so it is strongly encouraged to only use this on a virtual machine that can be restored and not on desktop system.
