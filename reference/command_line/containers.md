## containers

The containers command lists all containers on the local machine.  

```
Usage: turbo containers <options>

<options> available:
      --csv                  Print output with tab-separated columns
      --format=VALUE         Use json format for output
      --include=VALUE        Specify a column that is to be returned
  -l, --latest               List the most recently created container
  -n, --number=VALUE         List the 'n' most recently created containers
      --no-trunc             Don't truncate output
```

Command line flags for the `containers` flag serve to modify or filter the command's results. 

```
# Only show most recently created container
> turbo containers -l

ID            Images                  Command      Created               Status
--            ------                  -------      -------               ------
db4d5baff206  spoonbrew/clean                    9/3/2014 11:26:35 AM  Stopped

# Show last 'n' created containers
> turbo containers -n=3
ID            Images                  Command      Created               Status
--            ------                  -------      -------               ------
db4d5baff206  spoonbrew/clean                      9/3/2014 11:26:35 AM  Stopped
b5c63c6d242e  nodejs/nodejs           node app.js  9/3/2014 11:25:18 AM  Running
b92981a3dd27  nodejs/nodejs           node app.js  9/3/2014 11:05:36 AM  Stopped
```

If the value specified for `-n` is greater than the number of containers present on the local machine, all of the containers are listed (same result as running `turbo containers`). 

### Formatting Results

The table that is returned by the containers command is space-formatted. If you wish to return the table with tabs between each column then use the `--csv` flag. 

```
> turbo containers --csv
```

Data in the table returned by the containers command is truncated so that it prints nicely and is easily readable in a command prompt. If you wish to view the untruncated data in each column, use the `--no-trunc` flag. 

```
> turbo containers --no-trunc
```

The `--no-trunc` flag includes additional columns in the output, **Ports**, **Settings** and **VM version**, as seen below.

	ID                                Images       Command  Created               Status   Ports      Settings  VM version
	--                                ------       -------  -------               ------   -----      --------  ----------
	df6ac93f8b6147b986d4c7849c3dcef0  ghost:0.5.1           8/26/2014 3:27:17 PM  Running  8080:2368  SpawnVm   11.6.270
	d6e44ae706c44ed1bd75a0830bed3239  ghost:0.5.1           8/26/2014 3:22:14 PM  Stopped             SpawnVm   11.6.270

The **Ports** column contains active port mappings. See the `turbo netstat` command for more information. The **VM version** contains version number of VM used to create and run container.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `containers` array with information about available containers or an `error` object if command failed.