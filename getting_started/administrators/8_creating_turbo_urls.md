### Running Applications Using a Shareable URL

Turbo allows organization administrators to create a URL for end users to run applications without having to log into the dashboard.

First create an API key under the organization. Log into your organization's administrator or owner account and navigate to your organizations Devices & API Keys page. The Devices & API Keys page can be found through the `Profile and Account` link on your organization's dashboard, or directly through the URL `https://turbo.net/orgs/{org-name}/settings/devices-and-api-keys`. Click `Add API Key` to create an API key which will be embed in the Turbo URL as a query parameter. Give it a name you can remember (and possibly revoke later).  

Next, we will obtain a URL to launch and application under the organizations namespace. Navigate to your organization's dashboard (click on your profile dropdown). The organization's dashboard should be at the url `https://turbo.net/orgs/{org-name}`. Right click on the application you would like to run using an anonymous url. Select `Share Application`. A new dialog will open, with the option to select the API key from the previous step. The `Launch Location` dropdown allows the URL to specify whether the application will launch directly in the HTML5 client, or attempt to launch using the native Turbo.net client via the Turbo Protocol. Click `Create Link`, then copy the Share URL to a text editor.  

![](/docs/getting_started/administrators/create-share-link.png)

To test your link, open an incognito browser window without logging into Turbo.net and paste the URL into the browser address bar. The application should run without requiring a login. Please be aware that the Share URLs use an API Key that allows access to your organization's applications and should be kept secure within the organization. 

A list of all of your organization's Share URLs can be found by visiting the the `Sharing` tab on your organization's dashboard. If you wish to revoke a Share URL, you may do so by clicking `Delete` on the appropriate Share URL.

![](/docs/getting_started/administrators/share-table.png)