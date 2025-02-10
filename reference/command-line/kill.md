## kill

The `kill` command kills running Turbo processes in the current Windows session. 

```
Usage: kill <options>

<options> available:
      --all-users            Includes Turbo processes in any host session
      --format=VALUE         Use the specified format for output. Supported values: json, json-stream
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

To kill all processes on the host, run the `kill` command with the `--all-users` flag.