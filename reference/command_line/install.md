### install

The `install` command creates a shortcut for the specified container in the **Start Menu**

```
Usage: turbo install <options> <container>

<options> available:
      --format=VALUE         Use json format for output
```

Installation integrates the container into the Windows shell by adding a **Start Menu** shortcut for the specified container.

Use the `turbo containers --no-trunc` command to see the list of installed containers.

There are two options for removing the container from the system:

1. Use the `turbo uninstall` command
2. Uninstall from "Add/Remove Programs" or "Programs and Features"

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain exit code and an `error` object if command failed.
