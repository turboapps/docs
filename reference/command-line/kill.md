## kill

The `kill` command kills running Turbo processes in the current Windows session. 

```
Usage: kill <options>

<options> available:
      --all-users            Includes all running Turbo proccesses on the host
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

To kill all processes on the host, run the `kill` command with the `--all-users` flag.