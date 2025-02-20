# Command Line Options

The command-line version of Turbo Studio is called **XStudio.exe** and can be found in the Turbo Studio installation directory. See below for a list of command-line arguments and options for the XStudio tool.

**Note:** If running XStudio displays the error `<SandboxCollision> is missing from the string table` the XStudio application cannot be run while Turbo Studio is also running. Turbo Studio must be closed before running XStudio via the command line.

## Build

Build the specified container configuration.

`> xstudio.exe [path-to-xappl] [optional]`

Optional parameters:
- **/l [path]** specifies a path to the license file to use. The license file needs to be stored in Unicode format. This is only necessary if the license file was not installed on the machine through Turbo Studio.
- **/o [path]** overrides the path to the output file.
- **/component** overrides the **Project Type** to be **Layer** resulting in an SVM output rather than EXE output.
- **/d** enables the **Generate diagnostic-mode executable** setting.
- **/compressed** enables the **Compress payload** setting.
- **/uncompressed** disables the **Compress payload** setting.
- **/deletesandbox** enables the **Delete sandbox on application shutdown** setting.
- **/v [version]** assigns the **Version** of the output exe.
- **/startupfile [path]** overrides the **Startup File** of the output file.

## Setup Capture

Start the capture recording.

`> xstudio.exe /capture start /destination [path]`

Parameters:

- **/destination [path]** specifies the path to where the **XAPPL** configuration and files are to be saved after the capture is complete.

Stop the capture recording. 

`> xstudio.exe /capture stop`

Query if a capture recording has started running.

`> xstudio.exe /capture query`

Return values:
 - 0 when capture is in progress
 - 1 when capture is not in progress
 - -1 if caller has no admin access

Usage example:
```
Function StartTurboCapture() {
    WriteLog "Starting Turbo Capture."
    $ProcessExitCode = RunProcess $XStudio "/capture start /destination $TurboCaptureDir" $False

    # run xstudio /capture query until it returns a 0 meaning the capture is fully initialized.
    DO {  
        WriteLog "Waiting for Turbo Capture to intialize..."
        $CaptureStarted = RunProcess $XStudio "/capture query" $True
        Start-Sleep -Seconds 2
    } While ($CaptureStarted -ne 0)
}
```

**Note:** Configuration files that are generated from the capture will not have an output file specified in the **XAPPL** configuration file. When using scripting for captures, it may be necessary to apply changes to the generated **XAPPL** file, either manually or programmatically.

## Snapshot

Take a before snapshot.

`> xstudio.exe /before /beforepath [path]`

Parameters:
- **/beforepath [path]** specifies the path to where the snapshot file is to be saved.

Take an after snapshot.

`> xstudio.exe /after /beforepath [path] /o [path]`

Parameters:
- **/beforepath [path]** specifies the path to where the snapshot file is to be loaded.
- **/o [path]** specifies the path to where the resulting container configuration file will be saved.

**Note:** Configuration files that are generated from the command-line after using the **/after** flag do not have an output file specified in the **XAPPL** configuration file. When using scripting for snapshots, it may be necessary to apply changes to the generated **XAPPL** file, either manually or programmatically.

## Import

Import MSI, AXT, or ThinApp configurations as well as opening Turbo .SVM and .EXE configurations to produce .xappl and files.

`xstudio.exe /import /i [path] /o [path] /importmode [XapplAndFiles|XapplOnly]`

Parameters:
- **/i [path]** specifies the path to the configuration file to be imported.
- **/o [path]** specifies the path to where the resulting container configuration file is to be saved.
- **/importmode [XapplAndFiles|XapplOnly]** specifies the way in which Turbo .SVM and .EXE configurations are imported. This is an optional parameter which defaults to include both .xappl and files. Use **XapplOnly** for very large configurations when only the .xappl is required.

## Merge Configs

Combine two or more configurations into a single file. Configurations can be in the form of a **.xappl**, **.svm**, or **.exe** file.

`> xstudio.exe /merge [path-to-config1] [path-to-config2] ... /o [path] [optional]`

Parameters:

- **[path-to-config1]** specifies the path to the first configuration file.
- **[path-to-config2]** specifies the path to the second configuration file.
- **...** specifies the path of additional configuration files to combine.
- **/o [path]** specifies the path to output configuration file.

Optional parameters:

- **/keepfirstmetadata** is used to apply the icon, standard, and custom metadata from the first configuration specified in the parameters to the final output merged configuration. This overrides the default behavior of **/merge**, which is to remove all metadata from the merged configuration.
- **/onlystartupfiles** is used to make the only startup files that can autostart in the final merged configuration be ones that are from the first configuration specified in the parameters. This overrides the default behavior of **/merge**, which is to have all startup files marked for autostart in every input configuration also be marked as autostart in the output merged configuration.

**Note:** If merging a **XAPPL** configuration file with a binary configuration file (**SVM** or **EXE**), the output file cannot be a **XAPPL**, and must be one of the other two.

## Sandbox Merge

Merge the contents of a sandbox into a container configuration.

`xstudio.exe /sandboxmerge [path-to-sandbox] /i [path] /o [path]`

Parameters:
- **/i [path]** specifies the path to source configuration file.
- **/o [path]** specifies the path to output merged configuration file.

## Dump Settings

Dump a list of all configuration settings in the specified configuration file, container image, or standalone executable.

`xstudio.exe /vmsettings [setting] /i [path]`

Parameters:
- **[setting]** specifies the name of a specific setting to return the value of. This is optional and if not specified will show the values of all the available settings.
- **/i [path]** specifies a path to a .xappl, .svm, or .exe.
- **/nologo** is an optional flag that specifies that the Turbo Studio copyright and logo information is to be suppressed. Useful when consuming the output in scripts.

## Transform Path

Transform a path to its tokenized form or back from its tokenized form. For example, to convert "c:\program files\internet explorer\iexplore.exe" to "@PROGRAMFILES@\internet explorer\iexplore.exe". This tool can also be used for registry paths.

`xstudio.exe /pathreplace [path-to-transform] [optional]`

Optional parameters:
- **/reg** specifies that the path is a registry path, not filesystem.
- **/revert** specifies that the path is tokenized and is to be converted back to native machine path. 
- **/nologo** specifies that the Turbo Studio copyright and logo information is to be suppressed. Useful when consuming the output in scripts.

## Apply Configuration

Apply the contents of a configuration to a host device. This will take all of the files and registry entries from a configuration, as well as environment variables and services, and put them onto the native host machine that XStudio is being executed on.

**Note:** This action **CANNOT** be undone. There is no way to reverse applying a configuration, so make sure that you have a checkpoint or backup of the host system state before execution if you do not want it to be permanent.

`> xstudio.exe /apply [optional] [path-to-xappl]`

Optional parameters:

- **/force** specifies that XStudio should not prompt the user to confirm before applying the configuration.

Return values:
 - 0 when applying the configuration succeeds
 - 1 when user cancels after being prompted to confirm applying the configuration
 - -1 if applying the configuration fails in some way, the user does not have admin access, or the configuration file does not exist
