### sync

The `sync` instruction enables or disables synchronisation across devices.
By default all directories except the @LOCALAPPDATA@ directories are synchronized.
The synchronisation settings are applied recursively to all sub directories.

```
sync enable|diable "<path>"
```

#### Example
```
# Disable synchronisation for app-settings and sub directories
sync disable C:\apps-settings
# Enable synchronisation for this sub directory again
sync enable C:\app-settings\important-settings
```