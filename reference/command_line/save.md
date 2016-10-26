### save

The `save` command saves the given container state to the hub.

```
Usage: turbo.exe save <options> <container>

<options> available:
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave process open after error
      --wait-after-exit      Leave process open after it exits
```

The `save` command takes a exact snapshot of the current container state. 
This state can be restored with the `continue` command.
