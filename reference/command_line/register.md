### register

The `register` command creates a shortcut for the specified container in the **Start Menu**

Usage: turbo register <options> <container>

<options> available:
      --format=VALUE         Use json format for output

Desktop registration integrates the container into the Windows shell by adding a **Start Menu** shortcut for the specified container.

Use the `turbo containers --no-trunc` command to see the list of registered containers.

There are two options for removing the container from the system:

1. Use the `turbo unregister` command.
1. Remove shortcut from the **Start Menu**.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain exit code and an `error` object if command failed.
