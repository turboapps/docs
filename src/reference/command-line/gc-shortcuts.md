## gc-shortcuts

The `gc-shortcuts` command removes orphaned Turbo shortcuts from the desktop. Shortcuts can become orphaned when Windows profile synchronization causes desktop shortcuts to be out of sync with installed Turbo applications, particularly in virtual desktop environments.

```
Usage: gc-shortcuts <options>

<options> available:
      --all-users            Applies the configuration settings to All Users
      --format=VALUE         Use the specified format for output. Supported values: json, json-stream
      --trial                Perform a trial run without deleting files
      --wait-after-error     Leave session open after error
      --wait-after-exit      Leave session open after it exits
```

### Understanding Orphaned Shortcuts

Shortcuts can become orphaned in scenarios like:

1. Profile Synchronization:
   - When a user logs into a new VM, their profile (including desktop shortcuts) is synchronized
   - However, the Turbo application state in %LOCALAPPDATA%\Turbo is reset
   - This can result in old shortcuts being restored even though the applications have been updated

2. Application Updates:
   - When an application is updated (e.g., Maildex 23 to Maildex 24)
   - The new version creates new shortcuts
   - Profile sync may restore old version shortcuts

3. Application Removal:
   - When applications are removed from a subscription
   - Profile sync may restore shortcuts for removed applications

### Options

- `--all-users`: Clean up shortcuts for all users on the system
- `--trial`: Preview which shortcuts would be removed without actually deleting them
- `--format`: Output results in JSON format

### Examples

```
# Remove orphaned shortcuts for current user
> turbo gc-shortcuts

# Preview which shortcuts would be removed for all users
> turbo gc-shortcuts --all-users --trial

# Remove orphaned shortcuts for all users
> turbo gc-shortcuts --all-users

# Remove shortcuts and output results in JSON format
> turbo gc-shortcuts --format=json
```

### Usage with Auto-registration

When using auto-registration in environments with profile synchronization, the gc-shortcuts command helps maintain a clean desktop by removing outdated shortcuts. This is particularly useful in:
- Virtual desktop environments
- Environments with roaming profiles
- Scenarios where %LOCALAPPDATA% is not synchronized but desktop shortcuts are
