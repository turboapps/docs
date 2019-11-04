## sync

The `sync` instruction enables or disables synchronization for a specific path.
By default all directories except the @LOCALAPPDATA@ directories are synchronized.
The `sync` instruction is applied recursively to all sub directories.

```
sync enable|diable "<path>"
```

### Example
```
# Disable synchronization for the app-settings directory
sync disable C:\apps-settings

# Enable synchronization for the sub directory
sync enable C:\app-settings\important-settings
```
