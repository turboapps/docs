# cache

The `cache` command is used to populate the executable cache and install fonts for the specified image and its dependencies. This process improves the installation and launch performance. It is worth noting that the `precache` alias is deprecated.

```
Usage: cache <options> <image>...
       precache <options> <image>...

<options> available:
      --all-users            Applies the configuration settings to all users
      --format=VALUE         Use the specified format for output. Supported values: json
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

In specific security contexts, the Turbo VM might require loading its DLLs using an alternative method. To accomplish this, execute the command `turbo cache /xvm` to extract the VM DLLs.