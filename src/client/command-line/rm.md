# rm

The `rm` command removes containers from the local machine. 

```
Usage: turbo rm <options> <container>

<options> available:
  -a, --all                  Remove all containers on the local machine
     --format=VALUE         Use json format for output
```

Use the `-a` flag to remove all containers at one time. Note that this operation cannot be undone.

## Examples

```
# Remove a single container by specifying the ID
> turbo rm f1ea9fe

Container f1ea9fefjdkaslfh324fdadfshjkl3cndkj3 has been removed

# Remove all containers on the local machine with the -a flag
> turbo rm -a

All containers have been removed
```

## JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `containers` array with information about removed containers or an `error` object if command failed.