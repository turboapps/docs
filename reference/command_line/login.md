## login

The `login` command is used to log a user into the current remote registry.

```
Usage: turbo login [<username> <password>]

<options> available:
     --all-users            Applies the login to all users on the machine. Requires admin privilege.
     --api-key=VALUE        Login with specified API key
     --format=VALUE         Use json format for output
```

### API Keys

API Keys can be used to login to a user account or an organization without providing a username and password. It eliminates the need to hard code passwords or pass them in as parameters to automation scripts.
API Keys are generated and revoked using user profile or organization settings at the **Turbo.net** website.

### Examples

```
# Log in by specifying username and password
> turbo login turbouser password-here

# Without parameters, returns state of logged-in user
> turbo login

turbouser logged in at 8/25/2014 at 5:40:45 PM

# Log in to shared user credentials
> turbo login --all-users
Login: turbouser
Password: ********

Logged in as turbouser

# Login in by specifying API key
> turbo login --api-key=key-here

turbouser logged in at 8/25/2014 at 5:40:45 PM
```

See `turbo config` for information about setting your remote registry location.

### JSON output

When `--format=json` option was passed this command will provide output in JSON format. It will contain either an `user` object with information about logged user or an `error` object if command failed.