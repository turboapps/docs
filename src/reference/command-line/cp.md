# cp

The `cp` command copies a files from one container to another or between a container and the native filesystem. 

```
Usage: turbo cp [<source-container>:]<path-from> [<target-container>:]<path-to>

<options> available:
     --format=VALUE         Use json format for output
```

### Examples

```
# Copy a file from a container to the native system
> turbo cp 2de7:C:\project\file.txt C:\Users\Turbouser

# Copy a file from a container to another container
> turbo cp 2de7:C:\project\file.txt 3vj3:C:\other-project

# Container paths must be absolute
> turbo cp 2de7:file.txt C:\Users\Turbouser

ERROR

# Native paths are relative to the current prompt
C:\Users> turbo cp 2de7:C:\project\file.txt \Turbouser
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain only an exit code data or an `error` object if command failed.