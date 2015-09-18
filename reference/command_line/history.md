### history

The `history` command lists all images used in the past. 

```
Usage: turbo history <options> <image>

<options> available:
      --csv                  Print output with tab-separated columns
      --format=VALUE         Use json format for output
  -n=VALUE                   List the 'n' most recently used images
      --no-trunc             Don't truncate output
```

The most used recent images are listed first.

```
# List the recently used images
> turbo history

ID            Last used             Name            Release
--            ---------             ----            -------
73dfe6973074  8/29/2014 4:51:08 PM  node/node      
07b66f57ed8d  8/29/2014 4:50:33 PM  git/git       
```
    
To show the history of a certain image, use `turbo history image-name`. 

By default 50 entries are shown. Specify `-n` flag to show more entries. 

The results of `turbo history` are truncated so that they are most readable in the command prompt. To prevent Turbo from truncating data, specify the `--no-trunc` flag. 

The `--csv` flag can be specified to return the output as a tab-separated table. 

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `images` array with information about list of recently images or an `error` object if command failed.