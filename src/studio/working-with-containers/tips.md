# Tips

### Running Containers as Different Domain Users

By default Turbo containers will run in the security context of the user executing the **turbo** command. But what if we need to run as a different user?

In this example, let's run SQL Server Management Studio as a different domain user than the currently logged in user. In our scenario we have the Turbo.net Client installed in the local profile (the default behavior).

Our first attempt is to just use the **runas** command to execute the command `turbo run ssms2012`:

```
> runas /user:user@domain "turbo run ssms2012"
Enter the password for user@domain:
Attempting to start turbo run ssms2012 as user "user@doamin" ...
RUNAS ERROR: Unable to run - turbo run ssms2012
5: Access is denied.
```

Unfortunately with the Turbo.net Client installed in the local profile I cannot use **runas** to run SSMS in the user context I want since it does not have access to that user's profile.

One workaround then is to install the Turbo.net Client for all users and then use **runas**:

```
# install the client for all users
> turbo-client.exe --all-users

# run as a different user
> runas /user:user@domain "turbo run ssms2012"
```
This works well but we may not want to reinstall the plugin or may not want to install it for all users.

We can solve this by using runas with the **/netonly** flag:

```
> runas /netonly /user:user@domain "turbo run ssms2012"
```

The **/netonly** flag forces the application to use the runas account for remote resources and the logged in account for local resources.
