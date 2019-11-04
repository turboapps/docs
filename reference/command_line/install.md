## install

The `install` command creates a shortcut for the specified container in the **Start Menu**

```
Usage: turbo.exe install <options> <container> [run flags...]

<options> available:
      --format=VALUE            Use the specified format for output. Supported values: json
      --no-desktop-integration  Don't integrate with the host machine for installed applications
      --no-desktop-shortcuts    Don't create desktop shortcuts for installed applications
      --no-file-associations    Don't register file associations for installed applications
      --no-send-to-shortcuts    Don't create Send To menu shortcuts for installed applications
      --no-shell-extensions     Don't register shell extensions for installed applications
      --no-start-menu-shortcuts Don't create Start menu shortcuts for installed applications
```

Installation integrates the container into the Windows shell by adding a **Start Menu** shortcut for the specified container.

Use the `turbo containers --no-trunc` command to see the list of installed containers.

There are two options for removing the container from the system:

1. Use the `turbo uninstall` command
2. Uninstall from "Add/Remove Programs" or "Programs and Features"

Any supplied run flags are passed to the run command when an installed application is executed. For example, `turbo install [container] --vm=1.2.3.4 --diagnostics` will result in shortcuts that have a run command like `turbo start [container] --vm=1.2.3.4 --diagnostics [additional installation params]`. These can be used to customize the installation behavior.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain exit code and an `error` object if command failed.
