# Integrated Windows Authentication

The Turbo Client can be configured to login with the user's current Windows credentials instead of specifying a username and password.

This authentication method is desirable in centralized and VDI environments where an administrator deploys Turbo-packaged applications with the use of scripting, because it does not prompt the user to login in order to authenticate themselves to the Turbo Server. Since the user is authenticated as themselves instead of using a shared API key, this also allows fine-tuning of application permissions and accurate collection of analytics.

## Configure Turbo Server

1. Join the Turbo Hub Server system to your domain.
2. Set the service user to the [desired user](https://hub.turbo.net/docs/server/advanced-topics/advanced-topics#change-the-turbo-server-service-user). If the service worker is a local system user, skip step 3.
3. Add an SPN record for the Turbo Server to your domain.

```
> setspn -S HTTP/hostname domain\serviceuser
> setspn -S HTTP/hostname.domain domain\serviceuser
```

5. Synchronize users from your [Active Directory](https://hub.turbo.net/docs/server/administration/users#adding-an-external-directory-service). When configuring the service, make sure that the **Login Prefix** configured in the Active Directory Service matches your Active Directory.

## Configure Turbo Client

1. Ensure the Turbo Client system is joined to the domain.
2. Login to Windows as a domain user.
3. Point the Turbo Client to your Turbo Server: `turbo config --domain=https://turboserver.turbo.net`. For all users: `turbo config --domain=https://turboserver.turbo.net --all-users`
4. Login with integrated authentication. You must be logged in as a domain user: `turbo login --auth=integrated`.

Example login script:

```
# Point Turbo Client to your Turbo Server.
turbo config --domain=https://turboserver.turbo.net

# Optionally point Turbo Clint to image share for VDI scenario.
# See (Image Streaming|https://app.turbo.net/docs/server/advanced-topics/image-streaming)
turbo config --image-path=\\networkshare\turboimages

# Authenticate Turbo Client.
turbo login --auth=integrated

# Register shortcuts to Start Menu for Default workspace
turbo subscribe default --register
```

## Troubleshooting

### Integrated login works from Turbo Server system, but not Turbo Client system.

The Turbo Client system reports Error: _Unable to login to http://turboserver.domain as domain\user, because Turbo Server is unable to decode the user’s Kerberos ticket._

To resolve this issue, ensure that you have added the correct SPN record for your Turbo Server to your domain.

```
> setspn -S HTTP/hostname domain\serviceuser
> setspn -S HTTP/hostname.domain domain\serviceuser.
```

### Integrated login fails from any system.

Ensure that you are logged in Windows as a domain user that has been synchronized to Turbo Server via [Active Directory synchronization](https://hub.turbo.net/docs/server/administration/users#adding-an-external-directory-service).

If the above condition is not met, integrated login will fail with a message similar to the following in the server API logs:

```
08/21/2023 19:39:16.1231 - Info     - 0x141C: The user DOMAIN\User1 is attempting to log in with IWA from source IP 52.250.0.201
08/21/2023 19:39:16.1387 - Info     - 0x141C: User.GetUser failed due to unknown user, prefix: 'DOMAIN' name: 'DOMAIN\Use1
08/21/2023 19:39:16.1387 - Info     - 0x141C: The user DOMAIN\User1 failed to log in with IWA from source IP 52.250.0.201
```

Ensure that the **Login Prefix** configured in the Active Directory Service on Turbo Server matches your Active Directory.

If the above condition is not met, integrated login will fail with a message similar to the following in the server API logs:

```
08/21/2023 18:39:53.7836 - Info     - 0x0668: The user DOMAIN\User1 is attempting to log in with IWA from source IP 20.64.153.203
08/21/2023 18:39:53.7992 - Info     - 0x0668: User.GetUser failed due to missing directory service, prefix: 'DOMAIN' name: 'DOMAIN\User1
08/21/2023 18:39:53.7992 - Info     - 0x0668: The user DOMAIN\User1 failed to log in with IWA from source IP 20.64.153.203
```
