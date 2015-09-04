## Selenium Testing

Turbo offers a solution for automated browser testing by running [Selenium](/selenium) tests on a variety of browser containers all on your local machine with minimal setup. This lets you avoid the pain and expense of setting up and maintaining a local Selenium Grid.

Running your Selenium tests on Turbo is almost exactly like running them on a local Selenium Grid. What does this mean for you?

1. Porting your tests to run on Turbo requires very few changes.
2. You can use native Selenium APIs - no extra dependencies or libraries to import. 

The key difference is that Turbo takes care of all the Selenium infrastructure and networking for you! Point your tests to the Turbo hub at **http://localhost:4444/wd/hub** and Turbo will automatically provision, stream, and start the test on the required browser.

If you've used a different cloud-based testing service in the past, check out the **Adapting Tests from Other Services** section.

If you're a Selenium veteran, but you've never used Selenium Grid before, you'll need to change a couple lines of code in your tests. 

If you're already using Grid to run your tests, configuring your tests for Turbo is a one-line change. Substitute the URL of your current Selenium Hub with **http://localhost:4444/wd/hub** and you're ready to go!

#### Supported Browsers

- Chrome 27+ 
- Firefox 3+
- Internet Explorer 6+

*Don't see your preferred browser? [Let us know](/contact) and we'll do our best to get it added.*

#### Starting the Turbo Hub

In your web browser, click the **Start Grid** button in the top-left corner of the page. A buffering dialog will appear on your desktop. When the buffering dialog completes, check the **Hub** window on the page. When the Turbo hub is ready, this output will appear in the window: 

```
Jun 26, 2014 3:21:23 PM org.openqa.grid.selenium.GridLauncher main
INFO: Launching a selenium grid server
2014-06-26 15:21:24.064:INFO:osjs.Server:jetty-7.x.y-SNAPSHOT
2014-06-26 15:21:24.088:INFO:osjsh.ContextHandler:started o.s.j.s.ServletContextHandler{/,null}
2014-06-26 15:21:24.094:INFO:osjs.AbstractConnector:Started SocketConnector@0.0.0.0:4444
```

#### Adapting Your Test

To adapt an existing test for use on Turbo, you'll need to change all of your WebDriver instances to use the **RemoteWebDriver** class, instead of a native driver for Firefox, Chrome, or Internet Explorer. 

If you are already using Selenium Grid with RemoteWebDriver, you only have to change the **hub url** of the driver to **http://localhost:4444/wd/hub**. 

Below, we've included approximate comparisons of the driver setup for a test using **FirefoxDriver** versus that same test run on Turbo. 

**Java**

Using FirefoxDriver:

```java
/*
 * Using FirefoxDriver
 */
import org.openqa.selenium.firefox.FirefoxDriver;

WebDriver driver = new FirefoxDriver();

/*
 * Adapted for Turbo
 */
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver

DesiredCapabilities caps = DesiredCapabilities.firefox();
WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), caps);
```

**C#**

```csharp
/*
 * Using FirefoxDriver
 */
using OpenQA.Selenium.Firefox;

IWebDriver driver = new FirefoxDriver();

/*
 * Adapted for Turbo
 */
using OpenQA.Selenium.Remote;

ICapabilities caps = DesiredCapabilities.Firefox();
IWebDriver driver = new RemoteWebDriver(new Uri("http://localhost:4444/wd/hub"), caps);
```

**Python**

```python
"""
Using webdriver.Firefox
"""
from selenium import webdriver

driver = webdriver.Firefox()

"""
Adapted for Turbo
"""
from selenium import webdriver
from selenium import webdriver.common

caps = desired_capabilities.FIREFOX
driver = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", desired_capabilities=caps)
```

#### Choosing a Browser to Test

The Turbo Hub determines which browser you would like to test against using the **DesiredCapabilities** of the WebDriver that the test is using. 

All of the major language bindings have a **DesiredCapabilities** (or **desired_capabilities** in the case of Python) class that have attributes for each browser. Change this attribute to change the browser the test will run against.

```java	
// Java
DesiredCapabilities.firefox(); 				// Mozilla Firefox
DesiredCapabilities.chrome();				// Google Chrome
DesiredCapabilities.ie();					// Internet Explorer
```

```csharp
// C#
DesiredCapabilities.Firefox();  
DesiredCapabilities.Chrome();
DesiredCapabilities.InternetExplorer();
```

```python
# Python
desired_capabilities.FIREFOX
desired_capabilities.CHROME
desired_capabilities.INTERNETEXPLORER
```

To specify a version to test against, add a **version** capability into your existing test capabilities using a property setter or a `setCapability`/`SetCapability` instance method. 

```java
// Java
capabilities.setCapability("version", "30");		// Test against version 30
```

```csharp
// C#
capabilities.SetCapability("version", "30");
```

In Python, you can modify the `desired_capabilities` just like a dictionary: 

```python
capabilities['version'] = '30'
```

#### Adapting Tests from Other Services

If you've used another cloud-based Selenium service in the past, switching over to Turbo is as easy as switching a couple of lines of code. 

**BrowserStack**

When switching from BrowserStack, you'll need to make 2 changes to your existing code: 

1. Delete the **browserstack.user** and **browserstack.key** capabilities from your test's capabilities, along with any other BrowserStack-specific commands or libraries. 
2. Change the RemoteWebDriver hub URL to **http://localhost:4444/wd/hub**. 

If you were passing your BrowserStack credentials through the hub url, the only required change is to change the RemoteWebDriver hub url from **[browser.user]:[browserstack.key]@hub.browserstack.com:80/wd/hub** to **http://localhost:4444/wd/hub**.

**Sauce Labs**

Sauce Labs provides 2 means of authentication when sending tests to their cloud server. If you are passing in your username and access key as DesiredCapabilities, you'll need to delete those capabilities and change the hub URL to **http://localhost:4444/wd/hub**. 

If you are using the user-specific hub URL (**http://USERNAME:ACCESSKEY@ondemand.saucelabs.com:80/wd/hub**), change this to **http://localhost:4444/wd/hub** and you're ready to go!

**Testing Bot**

Testing Bot uses Selenium's **DesiredCapabilities** object as a means of authentication. When switching to Turbo, delete the **api_key** and **api_secret** capabilities from all of your tests - they are not necessary in Turbo.

If you were previously using any of the extension methods provided by the **TestingBotDriver**, those should also be removed from your code, as they may lead to unexpected results.

In addition to deleting Testing Bot-specific capabilities, change the hub URL in your tests from **http://hub.testingbot.com:4444/wd/hub** to **http://localhost:4444/wd/hub**.