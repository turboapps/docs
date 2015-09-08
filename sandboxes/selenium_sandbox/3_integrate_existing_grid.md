### Integrating Turbo with an Existing Grid

If you or your development team already have an in-house Selenium Grid, you can use Turbo to "fill in the gaps" in your Grid to support browsers that you may not have the capacity or hardware to host internally.

For example, if your in-house Grid is only large enough to host and support the latest versions of each browser, you can use Turbo to add legacy browsers to your Grid. 

After initial configuration and setup, the Turbo hub will automatically provision and run tests on any browser that is not in your internal Grid.

#### Setup Guide

The Turbo hub has the same external API as the standard Selenium hub. You can connect external nodes to the Turbo hub just like you would a normal Selenium hub.

1. Start the Turbo hub
	1. *If using Turbo as part of your CI process*: 
		1. Log on, or RDP in, to your build/test server (must be a Windows machine). 
		2. Open a web browser and navigate to [http://turbo.net/selenium](/selenium). Log in with your Turbo.net username and password.
		3. Click **Start Grid** to start the Turbo hub. If the Turbo.net plugin is not already installed, you will have to install it before Turbo will start. 
	2. *If using Turbo from a development machine*: Log in to [http://turbo.net/selenium](/selenium) with your Turbo.net username and password. Click **Start Grid** and the Turbo hub will start.
2. Connect your internal nodes to the Turbo hub. 
	1. The hub will launch on port 4444 of the machine Turbo was accessed from. You can connect to the hub from a remote node by executing the following command (from the remote node): `java -jar selenium-server-standalone-2.xx.y.jar -role node -hub http://hub-machine:4444/grid/register`. For more information on configuring nodes with additional command line parameters, see [the official Selenium Grid Documentation](https://code.google.com/p/selenium/wiki/Grid2). 

Once your Grid is configured, you can send your tests to it just as you normally would. If the hub cannot find a matching browser on your internal nodes, it will automatically provision a fresh browser from Turbo.net and run the test on it.