## Cloud Storage Integration

### Setting up OneDrive SSO

To allow users to connect their OneDrive accounts and access them while running their applications, you must first configure a OneDrive app registration. This OneDrive app controls the permissions, branding, and routing for the OneDrive SSO.  

The settings should be entered into /admin/general/files.aspx.

1. Follow the [Microsoft docs](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/app-registration) to set up a OneDrive app registration.  

2. Add the following Redirect URLs: `https://{Web Service Root}/oauth/onedrive/callback/login` and `https://{Web Service Root}/oauth/onedrive/callback/logout`  

3. Enable the following Delegated Permissions: `Files.ReadWrite.All` and `offline_access`  

4. Add `https://{portal-subdomain}.turbo.net` to `cloudStorageManager` in `config.ini`  

5. Enter your **Application Id** into the corresponding oneDriveClientId field.  

6. Enter your **Application Secret** into the corresponding oneDrive keys field.  

### Setting up Dropbox SSO

To allow users to connect their Dropbox accounts and access them while running their applications, you must first configure a Dropbox app registration. This Dropbox app controls the permissions, branding, and routing for the Dropbox SSO.  

1. Create a [Dropbox app registration](https://www.dropbox.com/developers/apps).  

2. Add the following Redirect URI: `https://{Web Service Root}/oauth/dropbox/callback/login`  

3. Set the Permission type to `Full Dropbox`  

4. Add `https://{Web Service Root}` to `cloudStorageManager` in `config.ini`  

5. Enter your **App key** into the corresponding dropboxClientId field.  

6. Enter your **App secret** into the corresponding dropbox keys field.  

### Troubleshooting

TODO