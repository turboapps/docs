### cmd

The `cmd` instruction is used to run a command in the container. 

The instruction has three forms: 

``` 
# Execute the application directly
cmd ("executable", "param1", "param2") 

# Interpret the command by cmd.exe, defaults to using cmd.exe /c
cmd <command> <param1> <param2>

# Pass parameters to the image's startup file
cmd <param1> <param2>
```

Please note that `turbo.exe` always runs outside of the container on the host even if passed as `cmd` parameter.

#### Form 1: As an Executable

If you wish to launch an executable and optionally supply parameters to that executable, you must express the desired *executable* as a tuple of strings and give the full path to the executable (unless it is on the local system or container's `PATH`). Using this syntax, parameters are passed directly to the executable. 

```
# Open foo.txt in notepad
cmd ("c:\windows\system32\notepad.exe", "c:\users\user\desktop\foo.txt")
```

#### Form 2: As a Shell Command

Using this syntax, each command is executed in its own command prompt -- a new command prompt being spawned for each instruction. Any stateful commands (`cd`, for example), must be chained to other commands with an ampersand to have their desired effect. 

For example, to read **C:\turbo\text-file.txt**: 

```
# Does not work
cmd cd C:\turbo
cmd more text-file.txt

# Works!
cmd cd C:\turbo & more text-file.txt
```

**Note**: If you wish to use `cd` functionality in your script, consider using the `WORKDIR` instruction. 

#### Form 3: As Parameters

Using this syntax, the parameters are sent to the default startup file in the base image. If multiple base images are specified, the startup file from last image listed will be used.
