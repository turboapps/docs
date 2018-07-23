### Using Turbo Command Line

Turbo containers can be deployed to Citrix XenApp servers using the Turbo command line interface. Below are the steps required.

#### Prerequisites

To get started, you will need to [download](https://turbo.net/download) and install Turbo for Windows for all users on the system.

If users will be streaming the application window rather than the whole desktop, we recommend hiding the Turbo GUI using the `--hide-gui` flag.
```
> start /wait turbo-client.exe --all-users --silent --hide-gui
```

![](/docs/deploying/to_citrix/citrix2.png)

#### Adding Applications to the Start Menu

Turbo application desktop integration, including Start Menu, desktop shortcuts, and file associations, can be enabled with the `turbo installi` command along with the `--all-users` flag. If you omit the version from the application identifier, then the latest version will be used.

```
# Sign in to Turbo.net
> turbo login 

# Add the latest Firefox ESR browser to the Start Menu
> turbo installi --all-users mozilla/firefox-esr

# Add the latest Google Chrome browser to the Start Menu
> turbo installi --all-users google/chrome

# Add Internet Explorer 8 with Java 6.45 to the Start Menu
> turbo installi --all-users microsoft/ie:8,jre:6.45</pre>
```

![](/docs/deploying/to_citrix/citrix3.png)

The **Firefox ESR**, **Chrome**,and **IE8 with Java6** applications will appear in the Start Menu of the server.

![](/docs/deploying/to_citrix/citrix4.png)

#### Adding Applications to the Delivery Platform

Depending on the delivery platform in use, you may also need to add the applications in the delivery system's administration interface.

In this example, we will add applications to Citrix XenApp using Citrix Studio.

Start **Citrix Studio** and go to **Applications** &gt; **Add Applications**.

![](/docs/deploying/to_citrix/citrix5.png)

Select the option to **Add** applications **From Start Menu...**

![](/docs/deploying/to_citrix/citrix6.png)

Then select the **Firefox ESR**, **Chrome**, and **IE8 with Java6** applications.

![](/docs/deploying/to_citrix/citrix7.png)

Click through to **Finish** to complete the process.

![](/docs/deploying/to_citrix/citrix8.png)

#### Running the Applications

Once added to Citrix Studio users can access the applications from the  Citrix StoreFront website or the Citrix Receiver application.

![](/docs/deploying/to_citrix/citrix9.png)

Click on an application to launch it.

![](/docs/deploying/to_citrix/citrix10.png)

Since applications are executed in isolated Turbo container environments, any combination of browsers, plugins, and runtimes can run side-by-side on the same server.

![](/docs/deploying/to_citrix/citrix11.png)

For example, an **Internet Explorer 8 with Java 6** environment can run alongside an **Internet Explorer 10 with Java 7** environment or another **Internet Explorer 8 with Java 7** environment.

![](/docs/deploying/to_citrix/citrix12.png)

This allows elimination of Citrix siloing and consolidation of servers to a single version of Citrix using a single base image.
