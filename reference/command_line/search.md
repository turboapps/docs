## search

The `search` command is used to search the remote registry for images.

```
Usage: turbo search <query> [<query>...]

<options> available:
     --format=VALUE         Use json format for output
```

Only public repositories are listed in search results. 

Multiple queries can be added to make searches more specific. The `search` command will return the set intersection of multiple queries (**AND** not **OR**). For example, the command below will only return images with Java and Maven. 

```
> turbo search java maven
```

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about found images or an `error` object if command failed.