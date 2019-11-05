## vm

The `vm` command displays the most recent version of the Turbo VM which is available on the local machine. 

```
Usage: turbo vm

<options> available:
     --format=VALUE         Use json format for output
```

If there is a user logged in to a remote registry then this command will also display the latest version of the Turbo VM available in that registry. 

```
> turbo vm

The latest local version of the Turbo VM is 11.6.213
The latest version of the Turbo VM is 11.6.215
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either `vms` array with one tag item for local VM and one for latest VM available on hub or an `error` object if command failed.