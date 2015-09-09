### Common Issues and Troubleshooting

#### Cannot connect to the Turbo Hub

Before proceeding, make sure the Turbo hub is running on your local computer. You can check this by opening **Windows Task Manager** and checking the **Processes** tab for *SpooniumComponent.exe*. 

**Solution 1: Check your Firewall**: This issue may occur if your computer has a restrictive firewall that blocks incoming and outgoing connections to/from your computer. 

If possible, check your firewall and make sure port 4444 is not blocked. This is the port the Turbo hub listens for commands on. If this port is blocked, it must be unblocked before using Turbo.  

#### Cannot Launch the Turbo Hub

Ensure that the Turbo Plugin is installed and running. The Turbo Plugin can be downloaded from [http://start.turbo.net/install](http://start.turbo.net/install). 

To run or restart the Turbo Plugin once installed, go to the **Start Menu** > **All Programs** > **Startup** and select **Turbo.net Sandbox Manager 3.33**. 

#### After clicking **Start Grid**, "Pending" appears but the Grid never launches

This issue occurs when the Turbo Plugin is not activate or installed. If you have not installed the Turbo Plugin, it can be downloaded from [http://start.turbo.net/install](http://start.turbo.net/install). 

If the Turbo Plugin is installed and you continue to see this issue, verify that your browser is not blocking the Turbo Plugin from running on Turbo. 

**Mozilla Firefox**

1. Navigate to [http://turbo.net/selenium](/selenium).
2. To the left of the browser's address bar, a "building block" icon should appear (it looks like a small LEGO). 
3. Click this icon and a small box will appear beneath it with the dialog "Allow *Turbo.net* to run Turbo?" 
4. Select **Allow and Remember** 
5. Refresh the page and click **Start Grid**. 

**Google Chrome**

1. In the address bar, type **chrome://plugins**. 
2. Locate **Turbo Plugin** and check the **Always allowed** box. 
3. Restart Google Chrome to apply this new setting. 

#### Selenium Errors

**Internet Explorer does not launch with Error "IELaunchURL() returned HRESULT 80070012"**

This error occurs due to a bug in Selenium's IEDriverServer. For more information, see this issue report: [https://code.google.com/p/selenium/issues/detail?id=7045](https://code.google.com/p/selenium/issues/detail?id=7045). 

To avoid this error, enable **ForceCreateProcessApi** in your test capabilities. For language-specific instructions, see **Testing Internet Explorer**.