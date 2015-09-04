### unregister

The `unregister` command will remove shortcuts and file associations for the specified image from the host device.

```
Usage: turbo unregister <image>

<options> available:
     --format=VALUE         Use json format for output
```

If the specified image has not been previously registered to the host device using the `turbo register` command, then no action will be taken. 

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` array with information about unregistered image or an `error` object if command failed.