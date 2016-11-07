### Edge Browser Extension

**Microsoft Edge** is the latest browser for the Windows 10 platform. In the **Windows 10 Anniversary Update (build 1607)**, a browser extension feature was added to allow custom functionality to be built by third parties.

*Edge support for third party extensions is very new and limited. Therefore, multiple manual steps are required to enable the Turbo Edge extension. This process should be simplified as Edge extension support matures.*

Follow the steps below to enable the Turbo.net extension.

**Step 1:** Ensure that you have the [latest Turbo.net Client](https://turbo.net/downloads) installed.

**Step 2:** Enable Edge communications to **localhost** via the command below:

```
# Run this command in an elevated, administrator command prompt
> CheckNetIsolation LoopbackExempt -a -n=Microsoft.MicrosoftEdge_8wekyb3d8bbwe
```

All applications which are built with Windows 10 “Modern UI” architecture have disabled access to the local machine network. The Edge browser is built on this architecture so access to **localhost** is disabled. The Turbo.net browser extension requires communication with local services provided by the Turbo client runtime in order to allow coordination with the Turbo Sandbox Manager.

**Step 3:** Enable Edge browser extensions by typing **about:flags** into the browser’s location bar and checking the **Enable extension developer features** checkbox.
*Once enabled, you’ll need to restart the browser.*

![](/docs/reference/turbo_client/edge-enable-ext.png)

**Step 4:** Load the Turbo.net extension by clicking on the Edge **options menu** dropdown and selecting **Extensions**.

![](/docs/reference/turbo_client/edge-ext-menu.png)

This will show the **Extensions** menu.

**Step 5:** Click on **Load Extensions** and select the path to the Turbo.net Edge extension in the client install directory, which may be at one of the following locations depending on your environment:
a) **c:\users\[user]\appdata\local\spoon\[version]\edge**
b) **c:\program files\spoon\[version]\edge**
c) **c:\program files (x86)\spoon\[version]\edge**

![](/docs/reference/turbo_client/edge-load-ext.png)

**Step 6:** Once loaded, the **Turbo.net Extension** will show up in the list of extensions that you have enabled for Edge.
*You will again need to restart your browser in order for the extension to be enabled.*

![](/docs/reference/turbo_client/edge-turbo-ext.png)

**Step 7:** Edge automatically disables extensions for the first 10-seconds when it is started. After that time a banner prompt will be shown on the bottom asking to turn them on. Click the **Turn on anyway** button to enable them.
*Currently this step is required every time you start the Edge browser.*

![](/docs/reference/turbo_client/edge-turnon-ext.png)

At this point you’ll be able to use Turbo.net functionality!

![](/docs/reference/turbo_client/edge-running.png)