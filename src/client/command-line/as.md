# as

The `as` command opens a command prompt to run turbo commands as a different Windows profile user or as all-users. This is particularly useful for system-wide configurations and enterprise deployments.

```
Usage: as <options> <all-users>

<options> available:
      --all-users            Applies the configuration settings to All Users
      --format=VALUE         Use the specified format for output. Supported values: json, json-stream
      --wait-after-error     Leave session open after error
      --wait-after-exit     Leave session open after it exits
```

## Using the All-Users Context

The all-users context is essential for enterprise deployments where configurations and applications need to be available to all users on the system.

```bash
# Open a command prompt in all-users context
turbo as all-users

# Execute commands in the all-users context
C:\> turbo config --image-path=allusers
C:\> turbo pull firefox
```

## Examples

### Running Individual Commands

While you can add `--all-users` to individual commands:
```bash
turbo config --image-path=allusers --all-users
turbo pull firefox --all-users
```

Using `as` can be more convenient for multiple commands:
```bash
# Open all-users context
turbo as all-users

# Run multiple commands
C:\> turbo config --image-path=allusers
C:\> turbo pull firefox
C:\> turbo installi firefox
```