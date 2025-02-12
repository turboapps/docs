# installed

The `installed` command lists all images and containers that have been installed to the user on the local machine. 

```
Usage: turbo installed <options>

<options> available:
      --all-users            Applies the configuration settings to all users
      --csv                  Print output with tab-separated columns
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

Command line flags for the `installed` flag format or filter the command's results.

```
# List applications installed for all users
> turbo installed --all-users

Name    Images         Subscription
----    ------         ------------
7-Zip   7-zip/7-zip    default
Wget    gnu/wget       default
winscp  winscp/winscp  default       
```

`turbo installed` will return a list of installed apps under the current user.

The `--csv` flag can be specified to return the output as a tab-separated table. 

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `installed` array with information about list of installed apps or an `error` object if command failed.