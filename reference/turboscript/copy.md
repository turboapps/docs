## copy

The `copy` instruction is used to copy a file or directory from a TurboScript or an XAPPL configuration directory.

```
copy <source> <destination>

# There is also an alias:
cp <source> <destination>
```

The source path may point to an inner subdirectory of the one mentioned above, but must not point above it. This restriction does not apply to the Turbo Shell.

The destination may either be an absolute path, or a relative path. In the latter case, the file is copied into a location relative to the current working directory.

Examples:
```
copy turbo.me .
copy setup\installer.msi C:\setup\
cp app-1.2.3.4.msi setup\installer.msi
```
