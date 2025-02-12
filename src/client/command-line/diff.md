# diff

The `diff` command shows changes made in a container's filesystem. 

```
Usage: turbo diff <options> <container>

<options> available:
      --format=VALUE         Use json format for output
      --path=VALUE           Only show changes in subdirectories of the specified path
      --registry-path=VALUE  Only show changes in subkeys of the specified registry path
      --subsystems=VALUE     Show only diff for selected subsystems: files, registry
```

Changes are shown relative to the base images that the container was created from. 

```
# Show all changes made in a container
> turbo diff <container id>
```

### Interpreting Results

The leading character of each line denotes the type of change made at that path. 

|| **Character** || **Type of Change** ||
|| A || Added ||
|| C || Changed ||
|| D || Deleted ||

If a file is changed, the diff results will show the a change in the folder along with the change to the file.  
For example, if one added a file to a container at **C:\Users\Turbouser\file.txt**: 

```
> turbo diff --subsystems=files <container id>

File system changes:
C C:\Users\Turbouser
A C:\Users\Turbouser\file.txt
```

### Filtering Results

The diff command will show changes in the virtual filesystem and registry. To change this behavior use the `--subsystems` flag.

```
# Only show changes to the registry
> turbo diff --subsystems=registry <container id>

# Only show changse to the filesystem
> turbo diff --subsystems=files <container id>
```

To only show changes beneath a certain node in the filesystem or registry directory tree, use the `--path` or `--registry-path` flags. 

```
# Only show changes in HKCU
> turbo diff --registry-path=@HKCU@ <container id>

# Only show changes in system32
> turbo diff --path=C:\Windows\system32
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either a `diff` object with information about differences or an `error` object if command failed.