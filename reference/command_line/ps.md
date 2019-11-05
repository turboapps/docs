## ps

The `ps` command returns a list of all the processes running in containers on the local machine.

```
Usage: turbo ps <options> [<container>]

<options> available:
      --csv                  Print output with tab-separated columns
     --format=VALUE         Use json format for output
  -l                         Display long format
      --no-trunc             Don't truncate output
```

### Examples:

```
# View all processes running in containers
> turbo ps

PID   Name     Container     User
---   ----     ---------     ----
2252  cmd.exe  f1ea9fe59eeb  Administrator

# View the "long-format" results for additional information
> turbo ps -l

PID   Name     Container     User           UTime     KTime     Command
---   ----     ---------     ----           -----     -----     -------
2252  cmd.exe  f1ea9fe59eeb  Administrator  00:01:05  00:01:10	"C:\Windows\system32\cmd.exe"
```

The **UTime** is the amount of CPU time the process spent in user-mode code. 

The **KTime** is the amount of time spent in system calls within the kernel. 

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain `processes` array with information about running processes or an `error` object if command failed.