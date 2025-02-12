# Dropbox

To allow users to connect their Dropbox accounts and access them while running their applications, you must first configure a Dropbox app registration. This Dropbox app controls the permissions, branding, and routing for the Dropbox SSO.

### Setup the Dropbox Application

1. Create a [Dropbox app registration](https://www.dropbox.com/developers/apps).

2. Add the following Redirect URI: `https://{Web Service Root}/oauth/dropbox/callback/login`

3. Set the Permission type to: `Full Dropbox`

   ![Dropbox Application Registration](/images/dropbox-app.png)

### Configure the Turbo Server

Next, Turbo Server must be configured to use the newly created Dropbox application. Once configured, users may connect their Dropbox account from the portal settings.

1. Go to the Turbo Server Administration site **Integrations** > **Storage Providers** page.
2. Click on **Add**.
3. Selected **Dropbox** as the storage type.
4. Enter the Drobpox **App key** into the corresponding **Client Id** field.
5. Enter the Dropbox **App Secret** into the corresponding **Secret** field.
6. **Save** your settings. Setting changes may take a couple minutes to take affect.
