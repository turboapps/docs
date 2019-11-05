## startup file

The `startup file` instruction is used to specify the startup file or script to run when a new container is created from this image (using `turbo run`).

The instruction has multiple forms: 

1. `startup file <command> <param1> <param2>` (executes the application directly)
2. `startup file ("executable", "param1", "param2")` (executes the application directly)
3. `startup file [("executable1", "param1", "param2"), ("executable2", "param1", "param2"), ...]` (executes the list of applications directly)
4. `startup file trigger=("executable", "param1", "param2")` (assigns a trigger name to a startup file)
5. `startup file trigger=[("executable1", "param1", "param2"), ("executable2", "param1", "param2"), ...]` (assigns a trigger name to a collection of startup files)

This instruction is only applied to the output image and does not affect the intermediate container. 

If `startup file` is not specified then the startup file setting is inherited from last image listed in the `layer` command.  Well known system paths like `C:\Windows\System32` will be replaced by a variable that will be converted at runtime to the appropriate path for the execution environment.

### As an Executable

If you wish to launch a process from an executable and optionally supply parameters to that executable, you must express the desired *executable* as a tuple of strings and give the full path to the executable (unless it is on the local system or container's `PATH`). Using this syntax, parameters are passed directly to the executable. 

```
# "clone" and "https://github.com/turboapps/docs" are passed to git.exe
startup file ("git.exe", "clone", "https://github.com/turboapps/docs")
```

### As a Shell Command

You may also launch a process using basic command prompt syntax. To open a Command Prompt window with a message:

```
# Hello world is passed to the 'echo' shell command
startup file cmd.exe /k echo hello world
```

### Multiple Startup Files

It is possible to specify multiple startup files which will be launched simultaneously using the array syntax.

```
# set multiple default startup files for "test-shotgun" image
startup file [("c:\windows\system32\notepad.exe"), ("c:\windows\regedit.exe")]

# launch both notepad and regedit
turbo run test-shotgun
```

### Startup File Triggers

A startup file, or collection of startup files, can be assigned a trigger name. When this is done, the startup file(s) specified will only launch when using `turbo run` with the `--trigger` flag. This can be useful when setting up shortcuts to multiple applications inside the same image.

```
# in turbo.me file to create "test-trigger" image...
startup file [("c:\windows\system32\notepad.exe"), ("c:\windows\regedit.exe")]
startup file doc=[("c:\windows\system32\notepad.exe", "c:\doc\welcome.txt"), ("c:\windows\system32\notepad.exe", "c:\doc\howto.txt")]


# from command-prompt...

# launch both notepad and regedit are launched
> turbo run test-trigger

# launch welcome.txt and howto.txt in notepad
> turbo run test-trigger --trigger=doc
```
