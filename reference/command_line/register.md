### register

The `register` command creates desktop shortcuts and file associations for the specified image on your host device.

```
Usage: turbo register <image>

<options> available:
     --format=VALUE         Use json format for output
```

Desktop registration integrates the image into the Windows shell by creating desktop and **Start Menu** shortcuts and file associations for the specified image.

Use the `turbo images --no-trunc` command to see the list of registered images.

There are three options for removing the image from the system:

1. Use the `turbo unregister` command.
1. Use the uninstall shortcut on the **Start Menu**.
1. Uninstall from the **Program and Features** menu in the **Windows Control Panel**.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `image` array with information about registered image or an `error` object if command failed.