# Using Turbo Command Line

Deploy Turbo applications to Citrix XenApp servers using the Turbo command line interface with the following steps.

::: tip Prerequisites
- [Turbo for Windows](https://turbo.net/download) installed for all users
- Administrative access to Citrix XenApp server
- Access to Citrix Studio
:::

## Initial Setup

If users will be streaming the application window rather than the whole desktop, we recommend hiding the Turbo GUI using the `--hide-gui` flag.

```
> start /wait turbo-client.exe --all-users --silent --hide-gui
```

![Citrix start command](/images/citrix2.png)

## Adding Applications to the Start Menu

Turbo application desktop integration, including Start Menu, desktop shortcuts, and file associations, can be enabled with the `turbo installi` command along with the `--all-users` flag. If you omit the version from the application identifier, then the latest version will be used.

```
# Sign in to Turbo.net
> turbo login

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

In this example, we will add applications to Citrix XenApp using Citrix Studio.

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
