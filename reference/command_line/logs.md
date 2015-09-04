### logs

The `logs` command displays the logs for a container. This is especially useful for debugging or inspecting containers. 

```
Usage: turbo logs <options> <container>

<options> available:
      --diagnostic           Show diagnostic logs
  -f                         Follow log output
      --format=VALUE         Use json format for output
      --list                 List available logs
      --pid=VALUE            Show logs for specified process (default: 0=main process of container)
  -s                         Show stream prefixes of log entries
      --stderr               Only show the stderr logs
      --stdout               Only show the stdout logs
  -t                         Show timestamps of log entries
      --tail=VALUE           Only show the last VALUE lines of each log file
      --wait-after-error     Leave program open after error
      --wait-after-exit      Leave program open after exit
```

Only the standard streams for a container are recorded and logged. To enable more comprehensive logging, use the `--diagnostic` flag of the `run` command when the container is created or of the `start` command when the container is restarted. 

Previous logs are kept until the next start of a given container instance. Logs can be viewed at any time. To see available logs, use the `--list` flag. 

```
# Show only stdout or stderr logs
> turbo logs --stdout 2de7fda8

> turbo logs --stderr 2de7fda8

# Show timestamps for log entries
> turbo logs -t 2de7fda8

# Show stream prefixes of log entries
> turbo logs -s 2de7fda8

# Follow log output in real-time
> turbo logs -f 2de7fda8

# Similar to Unix 'tail', only show last 5 lines
> turbo logs --tail=5 2de7fda8

# Show diagnostic logs instead of standard streams
> turbo logs --diagnostic 2de7fda8

# Show logs for specified process
> turbo logs --pid=666 2de7fda8

# List available logs
> turbo logs --list 2de7fda8
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It can contain `streamLogs` and `diagnosticLogs` arrays if asked for list of logs, a `log` string if asked for specific log, or an `error` object if command failed.
