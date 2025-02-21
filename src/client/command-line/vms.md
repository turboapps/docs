# vms

The `vms` command lists all the available versions of the Turbo VM. 

```
Usage: turbo vms

<options> available:
     --format=VALUE         Use json format for output
```

If a user is logged in to a remote registry then all versions which are available both locally and remotely will be displayed. 

If no user is logged in then only local versions of the Turbo VM are displayed. 

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either `vms` array with list of available VM versions or an `error` object if command failed.