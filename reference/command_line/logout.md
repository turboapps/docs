### logout

The 'logout' command is used to log the current user out of the remote registry. 

```
Usage: turbo logout

<options> available:
     --format=VALUE         Use json format for output
     --all-users            Logout from the shared user credentials. Requires admin privilege.
```

#### Examples:

```
# Logout the current user
> turbo logout

spoonuser logged out

# Logout from shared user credentials
> turbo logout --all-users

spoonuser logged out

# No action taken if a user isn't currently logged in
> turbo logout

You are not currently logged into Turbo
```

#### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain only an `exitCode` value or an `error` object if command failed.