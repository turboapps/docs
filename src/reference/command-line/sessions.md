## sessions

The sessions command lists all sessions on the local machine.  

```
Usage: sessions <options>
       containers <options>

<options> available:
      --all-users            Applies the configuration settings to All Users
      --csv                  Print output with tab-separated columns
      --format=VALUE         Use the specified format for output. Supported values: json, rcp
      --include=VALUE        Specify a column that is to be returned
  -l, --latest               List the most recently created session
  -n, --number=VALUE         List the 'n' most recently created sessions
      --no-trunc             Don't truncate output
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

Command line flags for the `sessions` flag serve to modify or filter the command's results. 

```
# Only show most recently created session
> turbo sessions -l

ID            Images                  Command      Created               Status
--            ------                  -------      -------               ------
db4d5baff206  windows/clean                    9/3/2014 11:26:35 AM  Stopped

# Show last 'n' created sessions
> turbo sessions -n=3
ID            Images                  Command      Created               Status
--            ------                  -------      -------               ------
db4d5baff206  windows/clean                      9/3/2014 11:26:35 AM  Stopped
b5c63c6d242e  nodejs/nodejs           node app.js  9/3/2014 11:25:18 AM  Running
b92981a3dd27  nodejs/nodejs           node app.js  9/3/2014 11:05:36 AM  Stopped
```

If the value specified for `-n` is greater than the number of sessions present on the local machine, all of the sessions are listed (same result as running `turbo sessions`). 

### Formatting Results

The table that is returned by the sessions command is space-formatted. If you wish to return the table with tabs between each column then use the `--csv` flag. 

```
> turbo sessions --csv
```

Data in the table returned by the sessions command is truncated so that it prints nicely and is easily readable in a command prompt. If you wish to view the untruncated data in each column, use the `--no-trunc` flag. 

```
> turbo sessions --no-trunc
```

The `--no-trunc` flag includes additional columns in the output, **Ports**, **Settings** and **VM version**, as seen below.

	ID                                Images       Command  Created               Status   Ports      Settings  VM version
	--                                ------       -------  -------               ------   -----      --------  ----------
	df6ac93f8b6147b986d4c7849c3dcef0  ghost:0.5.1           8/26/2014 3:27:17 PM  Running  8080:2368  SpawnVm   11.6.270
	d6e44ae706c44ed1bd75a0830bed3239  ghost:0.5.1           8/26/2014 3:22:14 PM  Stopped             SpawnVm   11.6.270

The **Ports** column contains active port mappings. See the `turbo netstat` command for more information. The **VM version** contains version number of VM used to create and run session.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `sessions` array with information about available sessions or an `error` object if command failed.