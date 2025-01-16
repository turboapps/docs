## gcl

The `gcl` command garbage collects logs.

```
Usage: gcl <options>

<options> available:
      --all-users            Applies the configuration settings to all users
      --days=VALUE           Remove logs after the specified number of days. Default is 7 days.
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

Removes logs older than 7 days, or by the specified number of days.