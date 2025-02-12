# Turbo Client Security

There are several ways to control how containers can be run on your machine.

### Trusted Sources

Trusted sources control which hub locations are allowed to have containers be started from web locations. By default, only https://turbo.net is trusted. A new hub can be added to the list with `turbo config --add-trusted-source=[hub-authority]`.

Any untrusted hub will result in a warning dialog that will ask the user if the container execution is desired. The user will have the option to trust future containers from the location.

![Turbo client trust dialog](/images/security-0.png)

A hub location can also be blocked which will prevent users from executing containers from those locations. A hub source can be blocked with `turbo config --block-trusted-source=[hub-authority]`.

![Turbo client blocked resource dialog](/images/security-1.png)

The trusted sources can be set for all users on the machine with the **--all-users** flag. These will either set the defaults or the overrides depending on how the shared settings are configured.

```
# view current trusted sources
> turbo config
Hub server: https://turbo.net/
Turbo Drive is enabled (mounted as a T: drive)
Trusted Hub Sources:
  turbo.net

# add a trusted hub
> turbo config --add-trusted-source=my-hub.com
Hub server: https://turbo.net/
Turbo Drive is enabled (mounted as a T: drive)
Trusted Hub Sources:
  turbo.net
  my-hub.com

# block a hub
> turbo config --block-trusted-source=dangerous-hub.net
Hub server: https://turbo.net/
Turbo Drive is enabled (mounted as a T: drive)
Trusted Hub Sources:
  turbo.net
  my-hub.com
Blocked Hub Sources:
  dangerous-hub.net
```

### Local Resource Requests

Containers which are executed remotely may require access to local resources (such as local network). If the container requires access but is not allowed globally then a security dialog will be shown to request permission.

![Turbo client local resource dialog](/images/security-2.png)

To allow access to the local network automatically, use `turbo config --enable=LocalNetworkAccess`.
