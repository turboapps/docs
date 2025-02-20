# Google Drive

To allow users to connect their Google Drive accounts and access them while running their applications, you must first configure a Google application. This application controls the permissions, branding, and routing for the Google Drive SSO.

## Prerequisites

We recommend that you have a G Suite account. Accessing Google Drive files from Turbo Server requires a restricted scope that is only available to internal G Suite users by default. If you wish to allow integration with public Google accounts, this application will need to go through the Google verification process.

## Setup the Google Application

1. Go to the [Google API Console](https://console.developers.google.com/) and log in as your G Suite user.

2. Click **CREATE PROJECT** and create a new project with your desired project name.

   ![Google Drive app project create](/images/project-create.png)

3. Click on the **Library** tab and search for `Google Drive`. Click **Google Drive API**, then click **Enable** to add Google Drive access to your application.

   ![Google Drive app library add](/images/library-add.png)

4. Click on the **OAuth consent screen** tab, select the `Internal` User Type, then click **Create**.

   \* Internal user selection requires you to be a G Suite user. If you wish to allow external users, your application will need to go through the Google verification process.

   ![Google Drive app creds consent](/images/consent.png)

5. Under **Scopes for Google APIs** add the `../auth/drive` scope.

   ![Google Drive app creds consent 2](/images/consent-scopes.png)

6. Click on the **Credentials** tab then click **CREATE CREDENTIALS** > **OAuth client Id**.

   ![Google Drive app creds create](/images/creds-create.png)

7. For the **Application Type** select `Web application`, and for the **Authorized redirect URIs** enter `https://{Web Service Root}/oauth/googledrive/callback/login`.

   ![Google Drive app creds create 2](/images/creds-create-2.png)

   ![Google Drive app creds create 3](/images/creds-create-3.png)

8. Once created you will receive a Client ID and Client Secret. Save these values for later as they will be used on the Turbo Server administration site.

   ![Google Drive app creds create 4](/images/creds-create-4.png)

## Configure the Turbo Server

Next, Turbo Server must be configured to use the newly created Google application. Once configured, users may connect their Google Drive account from the portal settings.

1. Go to the Turbo Server Administration site **Integrations** > **Storage Providers** page.
2. Click on **Add**.
3. Selected **Google Drive** as the storage type.
4. Enter the Google application client id into the corresponding **Client Id** field.
5. Enter the Google application client secret into the corresponding **Secret** field.
6. **Save** your settings. Setting changes may take a couple minutes to take affect.
