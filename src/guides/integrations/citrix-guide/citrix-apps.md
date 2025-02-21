# Citrix Virtual Apps

Deploy Turbo applications to Citrix Virtual Apps servers using the Turbo command line interface with the following steps.

::: tip Prerequisites
- [Turbo for Windows](https://turbo.net/download/#client) installed for all users
- Administrative access to Citrix Virtual Apps server
- Access to Citrix Studio
:::

## Initial Setup

Install the Turbo Client on the Citrix Virtual Apps server using the [standalone deployment](/guides/desktop-client/standalone-client) or [offline deployment](/guides/desktop-client/offline-client) method.

::: tip Tip
If users will be streaming the application window rather than the whole desktop, we recommend hiding the Turbo GUI using the `--hide-gui` flag.

:::

```
> start /wait turbo-client.exe --all-users --silent --hide-gui
```

![Citrix start command](/images/citrix2.png)

## Adding Applications to the Start Menu

### Using `turbo subscribe`

[Turbo Workspaces](/guides/server/workspaces.html) can be subscribed to the Citrix Virtual Apps server by following the [deploy using subscriptions](/guides/desktop-client/subscriptions.html#deploy-using-subscriptions) guide.

### Using `turbo installi`

Turbo application desktop integration, including Start Menu, desktop shortcuts, and file associations, can be enabled with the `turbo installi` command along with the `--all-users` flag.

1. 	Import the SVM packaged applications on the Citrix Virtual Apps Server that have been created with [Turbo Studio](/studio/) to the client's image repository.
Application SVMs can also be pulled from Turbo.net Hub.

	::: tip Tips
	- When pulling an image, if you omit the version from the application identifier, then the latest version will be used.
	- Multiple images can be pulled simultaneously using a comma separated list.
	:::

	```
	# Pull SVM from Turbo.net Hub
	turbo pull mozilla/firefox-esr,google/chrome,microsoft/ie:8,jre:6.45 --all-users

	# Import SVM from a local folder
	turbo import svm -n=mozilla/firefox-esr C:\temp\firefox-esr.svm --all-users

	# Import SVM from network folder
	# Caution: network errors or intermittent network issues may cause the command to fail and need to be re-run
	turbo import svm -n=mozilla/firefox-esr \\networkshare\turbo\packages\mozilla_firefox-esr\mozilla_firefox-esr.svm --all-users
	```
	
	![Citrix installi start menu](/images/citrix13.png)
	
2.	Install the images using the `turbo installi` command
	```
	# Add the latest Firefox ESR browser to the Start Menu
	> turbo installi --all-users mozilla/firefox-esr

	# Add the latest Google Chrome browser to the Start Menu
	> turbo installi --all-users google/chrome

	# Add Internet Explorer 8 with Java 6.45 to the Start Menu
	> turbo installi --all-users microsoft/ie:8,jre:6.45
	```

	![Citrix installi command](/images/citrix3.png)

	The **Firefox ESR**, **Chrome**, and **IE8 with Java6** applications will appear in the Start Menu of the server.

	![Citrix installi start menu](/images/citrix4.png)

## Adding Applications to the Delivery Platform

Depending on the delivery platform in use, you may also need to add the applications in the delivery system's administration interface.

In this example, we will add applications to Citrix Virtual Apps using Citrix Studio.

1. Start **Citrix Studio** and go to **Applications > Add Applications**

   ![Citrix studio applications](/images/citrix5.png)

2. Select the option to **Add** applications **From Start Menu...**

   ![Citrix studio add application](/images/citrix6.png)

3. Select the **Firefox ESR**, **Chrome**, and **IE8 with Java6** applications

   ![Citrix studio application selection](/images/citrix7.png)

4. Click through to **Finish** to complete the process

   ![Citrix studio application table](/images/citrix8.png)

## Running the Applications

Once added to Citrix Studio, users can access the applications from the Citrix StoreFront website or the Citrix Receiver application.

![Citrix StoreFront](/images/citrix9.png)

Click on an application to launch it.

![Citrix StoreFront launch application](/images/citrix10.png)

Since applications run in isolated environments, any combination of browsers, plugins, and runtimes can run side-by-side on the same server.

![Citrix StoreFront side-by-side](/images/citrix11.png)

For example, an **Internet Explorer 8 with Java 6** environment can run alongside an **Internet Explorer 10 with Java 7** environment or another **Internet Explorer 8 with Java 7** environment.

![Citrix StoreFront side-by-side IE](/images/citrix12.png)

This allows elimination of Citrix siloing and consolidation of servers to a single version of Citrix using a single base image.
