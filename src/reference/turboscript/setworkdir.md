## setworkdir

The `setworkdir` instruction sets the working directory which is used by the output image at runtime.

```
setworkdir <path>
```

If a `setworkdir` command is not specified then all commands will be executed from the same working directory as the native command prompt. The `<path>` specified must exist on host or be created within the container.
