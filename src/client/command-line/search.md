# search

The `search` command is used to search remote hub for images.

```
Usage: search <options> <query> [<query>...]

<options> available:
      --all-users            Applies the configuration settings to All Users
      --format=VALUE         Use the specified format for output. Supported values: json, json-stream
  -n, --number=VALUE         Specify the number of results to return. Use -1 for unlimited.
      --wait-after-error     Leave session open after error
      --wait-after-exit     Leave session open after it exits
```

Only public repositories are listed in search results. 

Multiple queries can be added to make searches more specific. The `search` command will return the set intersection of multiple queries (**AND** not **OR**). For example, the command below will only return images with Java and Maven. 

```
# Search for images containing both 'java' and 'maven' (returns up to 10 results by default)
> turbo search java maven

# Limit search to 5 results
> turbo search -n=5 java maven

# Return all matching results
> turbo search -n=-1 java maven
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about found images (including their releases) or an `error` object if command failed.
