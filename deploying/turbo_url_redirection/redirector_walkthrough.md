## Turbo URL Redirector

The Turbo URL Redirector is a native browser extension that assists in web navigation by processing clicked hyperlinks and URLs entered in the navigation bar. The extension can be configured to open specified domains using a browser available on [Turbo.net](https://turbo.net/) or a local TurboServer.

The Turbo URL Redirector for Internet Explorer is implemented in the **Turbo.net Browser Helper Object** (Turbo-IEBrowserHelper.dll or Turbo-IEBrowserHelper-x64.dll depending on the processor architecture of the host machine) and supports IE versions 8, 9, 10 and 11. The [Turbo.net Extension](https://chrome.google.com/webstore/detail/turbonet-extension/ldibmiofagdkgiphkcokpooepankmacl) provides the same experience for users of Chrome 42 and above. To try the Turbo URL Redirector feature for yourself, follow this step-by-step guide.

### Topics Covered

1. Enabling Turbo URL Redirector
2. Defining Redirection Rules in Turbo.net
3. Defining Redirection Rules in the Windows Registry
4. Deploying Turbo URL Redirection via Group Policy

<a name="enabling-turbo-url-redirection"></a>
### Enabling Turbo URL Redirection

The Turbo URL Redirector is disabled by default, because its installation requires elevated permissions to copy IE Browser Helper binaries to **%ProgramFiles(x86)%**.

To enable the Turbo URL Redirector, execute the following command:

```
> turbo config --enable-redirector
Hub server: https://turbo.net/
Browser redirection is enabled
```

#### Enabling Turbo URL Redirection in Internet Explorer

Launch Internet Explorer.

You may see an Internet Explorer Security alert explaining that the Turbo Sandbox Manager will be opened outside of Protected mode. (Turbo Sandbox Manager is the service responsible for integration of Turbo applications with the Turbo.net website.) Ignore this warning by checking **Do not show me the warning for this program again** and then clicking **Allow**.

Go to **Tools** (Alt + X) and **Manage add-ons** (M).

![](/docs/deploying/turbo_url_redirection/0_enable_redirector.png)

The **Turbo.net Browser Helper** will be displayed in the list of currently loaded add-ons. Change the status of the add-on to **Enabled** if required and close the dialog.

#### Enabling Turbo URL Redirection in Chrome

Install and enable the [Turbo.net Extension](https://chrome.google.com/webstore/detail/turbonet-extension/ldibmiofagdkgiphkcokpooepankmacl).

For information how to enable the extension for all users see [Deploying Turbo URL Redirection via Group Policy](#deploying-turbo-url-redirection-via-group-policy).

### Defining Redirection Rules in Turbo.net

Sign in to the [Turbo.net](https://turbo.net/) website and go to the **Home** tab.

![](/docs/deploying/turbo_url_redirection/1_home_my_applications.png)

Filter the **Web** category using the list on the right.

Select the **Facebook** app and press **Install**.

![](/docs/deploying/turbo_url_redirection/2_web_facebook.png)

Go back to the **Home** tab and click **Customize** to display the **Settings** dialog.

![](/docs/deploying/turbo_url_redirection/3_my_applications_more_customize.png)

Look at the **URL Redirections** section.

![](/docs/deploying/turbo_url_redirection/4_subscription_settings_dialog.png)

The Facebook application defines a default redirection for the facebook.com domain.

(Administrators can define custom browsers and redirection URLs from the Settings menu for other web sites.)

Close the **Settings** dialog.

Go to [www.facebook.com](https://www.facebook.com/) using navigation bar in the native browser or press the [hyperlink](https://www.facebook.com/).

The Turbo URL Redirector will display a notification explaining that the domain will be opened in a separate window and the Facebook app will open in a few moments.

### Defining Redirection Rules in the Windows Registry

Redirection rules can also be set in the Windows registry in cases where Turbo.net subscriptions are not used.

Rules are added to the "HKLM\Software\Code Systems\Turbo\Redirector" hive ("HKLM\Software\Wow6432node\Code Systems\Turbo\Redirector" for 64-bit operating systems).

![](/docs/deploying/turbo_url_redirection/12_registry_rules.png)

Create a key under the **Redirector** hive, setting the name of the new key to the url pattern to match. In the example above, the pattern is "yahoo.com" which matches any url that contains "yahoo.com".

Within the new rule key, registry values are used to describe the command to execute if a url is encountered which matches the pattern. There are two ways to describe the redirection response, with **Command** or **TurboCommand** string values. A **Command** value is set to the full path to the command to execute. In the example above, the command is set to "c:\turbo\ie8-win10.exe". A **TurboCommand** value is set to the command to execute via turbo.exe. An example value would be "run ie8" which would execute "turbo.exe run ie8". For either of these command types, the url which matched the pattern is appeneded to the end of the command to be passed as a parameter.

<a name="deploying-turbo-url-redirection-via-group-policy"></a>
### Deploying Turbo URL Redirection via Group Policy

This section explains how to enable the Turbo URL Redirector for all users of Internet Explorer and Chrome.

Before following the step-by-step guide for each browser ensure that the Turbo URL Redirector is enabled.

```
> turbo config
Hub server: https://turbo.net/
Browser redirection is enabled
```

If the browser redirection feature is disabled, see [enabling Turbo URL Redirection](#enabling-turbo-url-redirection).

#### Enable the Turbo Browser Helper Object for All IE Users

Microsoft Internet Explorer can be configured for all users through Local Group Policy. This section explains how to specify the GPO to silently load and enable the Turbo.net Browser Helper Object. Depending on the policy settings the user may be allowed to disable the add-on afterwards.

First open the Local Group Policy Editor:

```
> gpedit.msc
```

Select the **Add-on Management** node under **Computer Configuration/Administrative Templates/Windows Components/Internet Explorer/Security Features** in the **Local Computer Policy** panel.

![](/docs/deploying/turbo_url_redirection/6_ie_local_group_policy_editor.png)

Double click **Add-on List** in the detailed view.

![](/docs/deploying/turbo_url_redirection/7_ie_add_on_list.png)

Select **Enabled** and click the **Show** button in the **Options** panel.

Add a new entry with **Value name {DEC8F2AC-A81F-4BC9-A973-41EE4C4AF116}** and **Value 1**. The **Value name** corresponds to the class identifier (CLSID) of the Browser Helper Object. The Value is a number indicating whether Internet Explorer should deny or allow the add-on to be loaded. Setting **Value** to 1 means that an add-on should be allowed. Enter a **2** to allow the add-on to be loaded *and* permit the user to manage the add-on through Add-on Manager. We recommend using **1** for most administration scenarios.

Click **OK** to save options and close the dialog.

Press the **Apply** button to update the policy settings and **OK** to close the dialog.

Launch the native IE to verify settings.

If the Turbo Sandbox Manager is not running you may see an Internet Explorer Security alert explaining the process will be opened outside of Protected mode. (Turbo Sandbox Manager is the service responsible for integration of Turbo applications with the Turbo.net website.) You can ignore this warning by checking **Do not show me the warning for this program again** and then clicking **Allow**.

Go to **Tools** (Alt + X) and open **Manage Add-ons** (M).

![](/docs/deploying/turbo_url_redirection/8_ie_enable_redirector.png)

Turbo.net Browser Helper should be included in the list of currently loaded add-ons and be enabled. Note that actions to change the status of the Turbo.net Browser Helper are disabled.

#### Enable the Turbo.net Extension for All Chrome Users

Google Chrome configuration for all Windows domain users can also be defined using Local Group Policy. This section provides step-by-step instructions on adding the Turbo.net Extension to force-install extensions in Chrome. The extension will be installed silently, without user interaction and cannot be uninstalled by the user. All permissions requested by the extension will be granted implicitly, without user interaction.

As of this writing the Turbo.net Extension requires permissions to read and change all data on the visited websites and communicate with cooperating native applications. The extension supports Chrome 42 and above.

First, [Download the IP archive with policy templates from the Chrome website](https://dl.google.com/dl/edgedl/chrome/policy/policy_templates.zip).

(For more information about the policy templates and other supported configuration settings refer to the [documentation for Chrome administrators](http://dev.chromium.org/administrators/policy-templates).)

Unpack the archive to and install templates on the local machine by copying them to **%SystemRoot%\PolicyDefinitions** directory.

Copy **.\policy_templates\windows\admx\chrome.admx** to **%SystemRoot%\PolicyDefinitions**.

Copy **.\policy_templates\windows\admx\locale\chrome.adml** to the **%SystemRoot%\PolicyDefinitions\locale** directory, where the locale alias corresponds to the locale name (**en-US** for United States) of the Windows display language used on the host machine.

Run the Local Group Policy Editor:

```
> gpedit.msc
```

Select **Extensions** node under **Computer Configuration/Administrative Templates/Google/Google Chrome** in the **Local Computer Policy** panel.

![](/docs/deploying/turbo_url_redirection/9_chrome_local_group_policy_editor.png)

Double click on the **Configure the list of force-installed apps and extensions** in the detailed view.

Select **Enabled** and click the **Show** button in the **Options** panel.

Add the following entry to the list of **Extension/app ids and update URLs to be silently installed**.

```
ldibmiofagdkgiphkcokpooepankmacl;https://clients2.google.com/service/update2/crx
```

The first component is the Id of the Turbo.net Extension. The URL points to the standard [Chrome Web Store](https://chrome.google.com/webstore) update service.

![](/docs/deploying/turbo_url_redirection/10_chrome_show_contents.png)

Click **OK** to save options and close the dialog.

Press the **Apply** button to update the policy settings and **OK** to close the dialog.

To verify that local policy settings are applied correctly launch Google Chrome and go to **chrome://extensions** URL.

![](/docs/deploying/turbo_url_redirection/11_chrome_extensions.png)

The Turbo.net Extension should be listed on the page with the **Enabled** checkbox set, but not available for user interaction and a badge informing that the extension was installed by enterprise policy.

The Local Group Policies presented in this article apply equally well to browsers launched with merge or write-copy isolation using Turbo:

```
> turbo try google/chrome --isolate=merge
> turbo try microsoft/ie --isolate=write-copy
```