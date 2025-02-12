# images

The `images` command lists all of the images present in the local registry. 

```
Usage: turbo images <options>

<options> available:
      --csv                  Print output with tab-separated columns
      --format=VALUE         Use json format for output
      --no-trunc             Don't truncate output
```

The results are truncated so that they are most readable in the command prompt. To prevent Turbo from truncating data, specify the `--no-trunc` flag. 

The `--csv` flag can be specified to return the output as a tab-separated table. 

### Examples

```
# List all images in local registry
> turbo images

ID 			  Name  				  Tag	 Created 				Size
-- 			  ----  				  ---    -------    			----
7a85fe8f7ad1  chocolatey/chocolatey          8/22/2014 11:34:19 AM  3.6 MB
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about available images or an `error` object if command failed.