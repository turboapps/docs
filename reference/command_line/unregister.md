### unregister

The `unregister` command will remove the **Start Menu** shortcut for the specified container

Usage: turbo.exe unregister <options> <container>

<options> available:
      --format=VALUE         Use json format for output
	  
If the specified container has not been previously registered to the host device using the `turbo register` command, then no action will be taken. 

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain exit code and an `error` object if command failed.
