# Filr

To allow users to connect their Micro Focus Filr accounts and access their My Files while running their applications, you must set up a Filr Server with accounts for your users.

### Prerequisites

The Filr integration requires Filr version 4.3 or higher.

### Setup Filr Server
1. Follow the [Micro Focus documentation to set up a Filr Server](https://www.microfocus.com/documentation/filr/) and Filr accounts for your users.
2. Add the following Redirect URI:
    * `https://{Web Service Root}/oauth/filr/callback/login`

### Configure Turbo Server
Next, Turbo Server must be configured to use the newly created Filr application. Once configured, users may connect their Filr account from the portal settings.

1. Go to the Turbo Server Administration site __Integrations__ > __Storage Providers page__.
2. Click on __Add__.
3. Select __Filr__ as the storage type.
4. Enter the display __Name__ for the Filr Storage Provider.
5. Enter the Filr server URL for __Authentication URL__. Example: `https://filr.mycompany.com`
7. Enter the __Filr Application Id__ into the corresponding __Client ID__ field.
8. Enter the __Filr Application Secret__ into the corresponding __Secret__ field.
9. Enter the full path where the service provider will be mounted. If left blank, the default `T:\{storage type}` will be used.
10. __Save__ your settings. Setting changes may take a couple minutes to take affect.