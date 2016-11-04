### Edge Browser Extension

Microsoft Edge is the latest browser for the Windows 10 platform. In the Windows 10 Anniversary Update (build 1607), a browser extension feature was added to allow custom functionality to be built by 3rd parties. While Edge doesn't support extensions to the same level as Internet Explorer or Chrome browsers, it still allows enough functionality that an extension for Turbo.net can be provided. Follow the steps below to enable the Turbo.net extension.

Ensure that you have the latest Turbo.net Client installed. You can always download the latest client [here](https://turbo.net/downloads).

All applications which are built with Windows 10 "Modern UI" architecture have access to your local machine network disabled. Edge browser is built on this same architecture so access to localhost is disabled. The Turbo.net browser extension requires a connection to a local webservice served by the client runtime in order to allow the various container operations. Enable Edge communications to localhost via the command below:

```
rem Run this command in an elevated, administrator command prompt
> CheckNetIsolation LoopbackExempt -a -n=Microsoft.MicrosoftEdge_8wekyb3d8bbwe
```

You can enable Edge extensions by typing "about:flags" into the browser's location bar and clicking the "Enable extension developer features" checkbox. Once enabled, you'll need to restart the browser.

![](/docs/reference/turbo_client/edge-enable-ext.png)

Load the Turbo.net extension by clicking on the Edge options menu dropdown and selecting "Extensions".  

![](/docs/reference/turbo_client/edge-ext-menu.png)

This will show the Edge extensions menu. Click on "Load Extensions" and select the path to the Turbo.net Edge extension in the client install directory (either "c:\users\[user]\appdata\local\spoon\[version]\edge", "c:\program files\spoon\[version]\edge", or "c:\program files (x86)\spoon\[version]\edge" depending on your environment configuration).

![](/docs/reference/turbo_client/edge-load-ext.png)

Once loaded, the Turbo.net Extension will show up in the list of extensions that you have enabled for Edge. You will again need to restart your browser in order for the extension to be enabled.

![](/docs/reference/turbo_client/edge-turbo-ext.png)

Edge automatically disables extensions for the first 10-seconds when it is started. After that time a banner prompt will be shown on the bottom asking to turn them on. Click the "Turn on anyway" button to enable them. This will be a required step every time you start the Edge browser.

![](/docs/reference/turbo_client/edge-turnon-ext.png)

At this point you'll be able to use Turbo.net container functionality.

![](/docs/reference/turbo_client/edge-running.png)