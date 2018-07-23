### Browser Redirector

Browser redirection is a service that automatically opens the page or resource a user is trying to visit in an alternate browser. It uses a browser plugin to check URLs against a list of administrator defined rules that specify which websites or web applications are incompatible with the user's current browser. If the URL matches a rule, the web page will launch in the specified virtual browser instead of their installed browser. 

Browser redirection prevents errors when accessing legacy web resources on newer systems, creating a more seamless and efficient web experience for the end user.

#### Installation

Browser Redirector is included in the Turbo client, but requires a command line switch on install to be enabled. Unlike the standard install, the Browser Redirector requires administrator rights during install.  

From and elevated command prompt, run the following command:

```
turbo-client.exe /redirect /allusers
```

Silent installation is available using the `silent` command line flag. Also, for environments where the console should be hidden, there is a `hidegui` command line flag available.

```
turbo-client.exe /redirect /allusers /hidegui /silent
```

**Note that the deploying using the `SYSTEM` account is not supported.**

#### Setting up Redirection Rules

After completing the client install, administrators define a set of rules that will determine which websites should redirect to a specific browser.

These rules are defined in the registry so that they may be deployed efficiently via group policy.

Registry-based rules are located under `HKLM\Software\Wow6432Node\Code Systems\Turbo` in a key called `Redirector`. The `Redirector` key will contain a list of keys. Each key represents a rule, and the name of the key is the URL pattern match for the rule. Under each rule key, there will be a value of `TurboCommand` or `Command` which will define what happens when the URL matches the pattern.  

For example, if you wanted to route all users to Firefox version 35 when they went to Google, the key name would be `google.com` and the `TurboCommand` value would be `new firefox:35`.

There is an optional value `AutoReturn` that can be used if the user should be redirected to a host browser if they navigate to a URL that does not match the rule pattern.

This screenshot shows a fully set up rule key for a `TurboCommand` rule.

![](/docs/deploying/integration_tools/redirect-turbo-cmd.png)

This screenshot shows a fully set up rule key for a `Command` rule.

![](/docs/deploying/integration_tools/redirect-cmd.png)

#### Applications on a Network Share

When a virtual browser is located on a network location or anywhere not on the user's hard drive, the user may be prompted with a security warning before the browser is launched. The user must then manually select "Run" the application before the browser launches.

The warning can be suppressed by setting the environment variable SEE\_MASK\_NOZONECHECKS to 1.

![](/docs/deploying/integration_tools/nozonechecks.png)

#### Deploying URL Redirection via Group Policy

##### Microsoft Internet Explorer

Microsoft Internet Explorer can be configured for all users through Local Group Policy. This section explains how to specify the GPO to silently load and enable the Turbo.net Browser Helper Object. Depending on the policy settings the user may be allowed to disable the add-on afterwards.

First open the Local Group Policy Editor:
```
> gpedit.msc
```

Select the **Add-on Management** node under "Computer Configuration/Administrative Templates/Windows Components/Internet Explorer/Security Features" in the Local Computer Policy panel.

![](/docs/deploying/integration_tools/redirector1.png)

Double click **Add-on List** in the detailed view.

Select **Enabled** and click the **Show** button in the **Options** panel.

Add a new entry with **Value name** set to "{DEC8F2AC-A81F-4BC9-A973-41EE4C4AF116}" and **Value** set to "1". The **Value name** corresponds to the class identifier (CLSID) of the Browser Helper Object. The **Value** is a number indicating whether Internet Explorer should deny or allow the add-on to be loaded. Setting Value to "1" means that an add-on should be allowed. Enter a "2" to allow the add-on to be loaded and permit the user to manage the add-on through -Add-on Manager-. We recommend using "1" for most administration scenarios.

![](/docs/deploying/integration_tools/redirector2.png)

Click **OK** to save options and close the dialog.

Press the **Apply** button to update the policy settings and **OK** to close the dialog.

Launch the native IE to verify settings.

If the Turbo Sandbox Manager is not running you may see an Internet Explorer Security alert explaining the process will be opened outside of Protected mode. Turbo Sandbox Manager is the service responsible for integration of Turbo applications with the Turbo.net website and is required for the feature to function. You can ignore this warning by checking **Do not show me the warning for this program again** and then clicking **Allow**.

Go to **Tools** (Alt + X) and open **Manage Add-ons** (M).

![](/docs/deploying/integration_tools/redirector3.png)

Turbo.net Browser Helper should be included in the list of currently loaded add-ons and be enabled. Note that actions to change the status of the Turbo.net Browser Helper are disabled.

##### Google Chrome

Google Chrome configuration for all Windows domain users can also be defined using Local Group Policy. This section provides step-by-step instructions on adding the Turbo.net Extension to force-install extensions in Chrome. The extension will be installed silently, without user interaction and cannot be uninstalled by the user. All permissions requested by the extension will be granted implicitly, without user interaction.

As of this writing the Turbo.net Extension requires permissions to read and change all data on the visited websites and communicate with cooperating native applications. The extension supports Chrome 42 and above.

First, Download the [IP archive with policy templates](https://dl.google.com/dl/edgedl/chrome/policy/policy_templates.zip) from the Google Chrome website.
For more information about the policy templates and other supported configuration settings refer to the [documentation for Chrome administrators](http://dev.chromium.org/administrators/policy-templates).

Unpack the archive to and install templates on the local machine by copying them to **%SystemRoot%\PolicyDefinitions** directory.

Copy **.\policy_templates\windows\admx\chrome.admx** to **%SystemRoot%\PolicyDefinitions**.

Copy **.\policy_templates\windows\admx\locale\chrome.adml** to the **%SystemRoot%\PolicyDefinitions\locale** directory, where the locale alias corresponds to the locale name ("en-us" for United States) of the Windows display language used on the host machine.

Run the Local Group Policy Editor:
```
> gpedit.msc
```

Select **Extensions** node under "Computer Configuration/Administrative Templates/Google/Google Chrome" in the Local Computer Policy panel.

![](/docs/deploying/integration_tools/redirector4.png)

Double click on the **Configure the list of force-installed apps and extensions** in the detailed view.

Select **Enabled** and click the **Show** button in the **Options** panel.

Add the following entry to the list of **Extension/app ids and update URLs to be silently installed**: ldibmiofagdkgiphkcokpooepankmacl;https://clients2.google.com/service/update2/crx

The first value is the Id of the Turbo.net Extension. The URL points to the standard Chrome Web Store update service.

![](/docs/deploying/integration_tools/redirector5.png)

Click **OK** to save options and close the dialog.

Press the **Apply** button to update the policy settings and **OK** to close the dialog.

To verify that local policy settings are applied correctly launch Google Chrome and go to **chrome://extensions** URL.

![](/docs/deploying/integration_tools/redirector6.png)

The Turbo.net Extension should be listed on the page with the **Enabled** checkbox set but not available for user interaction and a badge informing that the extension was installed by enterprise policy.

##### Using With Containers

The Local Group Policies presented in this article apply equally well to browsers launched with merge or write-copy isolation using Turbo:

```
> turbo try google/chrome --isolate=merge
> turbo try microsoft/ie --isolate=write-copy
```

Customized web applications for browsing popular web sites such as Facebook, Twitter and WebEx are available in the TurboBrowsers repository. Remember that all Turbo browsers can be customized with specific plugins, IP and site blocking, and many other customizations.

