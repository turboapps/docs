### login

The `login` command is used to log a user into the current remote registry.

```
Usage: turbo login [<username> <password>]

<options> available:
     --format=VALUE         Use json format for output
```

#### Examples:

```
# Log in by specifying username and password
> turbo login spoonuser password-here

# Without parameters, returns state of logged-in user
> turbo login

spoonuser logged in at 8/25/2014 at 5:40:45 PM
```

See `turbo config` for information about setting your remote registry location.

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `user` object with information about logged user or an `error` object if command failed.