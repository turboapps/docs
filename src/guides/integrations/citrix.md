# Citrix Integration Guide

Turbo enables rapid deployment of virtualized applications on Citrix Virtual Apps (formerly XenApp), providing seamless integration with your existing Citrix infrastructure. This integration allows you to:
- Deploy applications without modifying base images
- Run multiple application versions side-by-side
- Eliminate server silos and consolidate infrastructure
- Automate application deployment and updates

::: tip What you'll learn
- How to install and configure Turbo on Citrix servers
- How to deploy applications using the command line interface
- How to integrate applications with Citrix Studio
- How to manage multiple application versions
:::

::: tip Prerequisites
- [Turbo for Windows](https://turbo.net/download/#client) installed for all users
- Administrative access to Citrix Virtual Apps server
- Access to Citrix Studio
:::

## Initial Setup

Install the Turbo Client on the Citrix Virtual Apps server using either the [standalone deployment](/guides/desktop-client/standalone-client) or [offline deployment](/guides/desktop-client/offline-client) method.

```bash
# Silent system-wide installation
start /wait turbo-client.exe --all-users --silent --hide-gui
```

![Citrix start command](/images/citrix2.png)

::: tip Note
The --hide-gui flag is recommended when users will be streaming application windows rather than full desktops
:::

## Adding Applications to Citrix

### Method 1: Using Turbo Subscribe (Recommended with Turbo Server)

1. Configure a [Turbo Workspace](/guides/server/workspaces.html) with your desired applications

2. Follow the [deploy using subscriptions](/guides/desktop-client/subscriptions.html#deploy-using-subscriptions) guide to set up the subscription. The basic command is:

   ```bash
   # Subscribe to workspace, register applications, and pull images
   turbo subscribe myworkspace --all-users --register --pull
   ```

### Method 2: Using Turbo Installi (No Turbo Server Required)

1. Import application images:

   ::: tip Tips
   - When pulling an image, if you omit the version from the application identifier, then the latest version will be used
   - Multiple images can be pulled simultaneously using a comma separated list
   :::

   ```bash
   # Pull from Turbo.net Hub (if internet available)
   turbo pull mozilla/firefox-esr,google/chrome,microsoft/ie:8,jre:6.45 --all-users

   # Import from local folder
   turbo import svm -n=mozilla/firefox-esr C:\temp\firefox-esr.svm --all-users

   # Import from network share
   # Caution: network errors may require re-running the command
   turbo import svm -n=mozilla/firefox-esr \\networkshare\turbo\packages\mozilla_firefox-esr\mozilla_firefox-esr.svm --all-users
   ```

   ![Citrix installi start menu](/images/citrix13.png)

2. Install applications with desired isolation settings:
   ```bash
   # Add Firefox ESR to the Start Menu
   turbo installi --offline --all-users mozilla/firefox-esr -- --isolate=merge

   # Add Chrome to the Start Menu
   turbo installi --offline --all-users google/chrome -- --isolate=write-copy

   # Add IE8 with Java 6 to the Start Menu
   turbo installi --offline --all-users microsoft/ie:8,jre:6.45 -- --isolate=full
   ```

   ![Citrix installi command](/images/citrix3.png)

   The applications will appear in the Start Menu of the server:

   ![Citrix installi start menu](/images/citrix4.png)

### Adding Applications to Citrix Studio

1. Start **Citrix Studio** and go to **Applications > Add Applications**

   ![Citrix studio applications](/images/citrix5.png)

2. Select the option to **Add** applications **From Start Menu...**

   ![Citrix studio add application](/images/citrix6.png)

3. Select the Turbo-installed applications

   ![Citrix studio application selection](/images/citrix7.png)

4. Click through to **Finish** to complete the process

   ![Citrix studio application table](/images/citrix8.png)

## Running Applications

Once added to Citrix Studio, users can access the applications from the Citrix StoreFront website or the Citrix Receiver application.

![Citrix StoreFront](/images/citrix9.png)

Click on an application to launch it.

![Citrix StoreFront launch application](/images/citrix10.png)

## Side-by-Side Application Versions

One of the key benefits of Turbo on Citrix is the ability to run multiple application versions side-by-side on the same server. This eliminates the need for separate silos for different application versions.

![Citrix side-by-side IE](/images/citrix1.png)
*Example: Multiple versions of Internet Explorer with different Java versions running simultaneously*

Since applications run in isolated environments, any combination of browsers, plugins, and runtimes can run side-by-side on the same server:

![Citrix StoreFront side-by-side](/images/citrix11.png)

For example, an **Internet Explorer 8 with Java 6** environment can run alongside an **Internet Explorer 10 with Java 7** environment or another **Internet Explorer 8 with Java 7** environment:

![Citrix StoreFront side-by-side IE](/images/citrix12.png)

This allows elimination of Citrix siloing and consolidation of servers to a single version of Citrix using a single base image.

## Virtual Desktop Deployment

For Virtual Desktop (VDI) environments, refer to our general VDI deployment guides:
- [Standalone Client Deployment](/guides/desktop-client/standalone-client)
- [Offline Client Deployment](/guides/desktop-client/offline-client)
- [Using Subscriptions](/guides/desktop-client/subscriptions)

These guides cover deployment methods that work across various VDI platforms.

## Next Steps

Visit the [Turbo Hub](https://hub.turbo.net/hub) to browse available applications.

For additional support or custom deployment scenarios, contact [Turbo Support](https://turbo.net/support).

## Troubleshooting

### Packaged applications hang or show not responding message when dragging their window

Starting with Citrix Virtual Delivery Agent 7 2402, isolating the `C:\Windows` folder results in the application's window hanging or showing a not responding message when the window is dragged. This behavior occurs because a file written to the path is written to the sandbox, which is isolating communication between the sandbox and the native Citrix service. To resolve the issue, set `C:\Windows` to **Merge** isolation and use **Merge** container isolation to write the file to the native filesystem and allow successful communication between the sandbox and native Citrix service.
