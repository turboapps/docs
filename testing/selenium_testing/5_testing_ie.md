### Testing Internet Explorer

When testing parallel instances of Internet Explorer on Turbo, we recommend setting the following options in your test. 

1. Force Internet Explorer to use the Create Process API
2. Launch Internet Explorer with the -private flag (for **Internet Explorer 8+** only)

Using these settings helps prevent cookies and other session-specific items from being shared between different instances of Internet Explorer. 

If you are not testing multiple instances of Internet Explorer in parallel, we recommend setting the **Ensure Clean Session** capability to **True**. 

#### Configuring Internet Explorer Options

See below for language-specific instructions for how to properly configure your Internet Explorer tests for Turbo. 

**Java**

```java
// Import the ie package
import org.openqa.selenium.ie;

// Create DesiredCapabilities for ie
DesiredCapabilities capabilities = DesiredCapabilities.ie();
// Force Windows to launch IE through Create Process API and in "private" browsing mode
capabilities.setCapability(InternetExplorerDriver.FORCE_CREATE_PROCESS, true);
capabilities.setCapability(InternetExplorerdriver.IE_SWITCHES, "-private");

// If testing serial instances of IE, add IE_ENSURE_CLEAN_SESSION
capabilities.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);

WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
```

**C#**

```csharp
// Add using directive for IE namespace
using OpenQA.Selenium.IE;

// Use this class in leiu of DesiredCapabilities
InternetExplorerOptions ieOptions = new InternetExplorerOptions();

// Force Windows to launch IE through Create Process API and in "private" browsing mode
ieOptions.ForceCreateProcessApi = true
ieOptions.BrowserCommandLineArguments = "-private";
ieOptions.AddAdditionalCapability("version", "10");

// Convert ieOptions to an ICapabilities object and instantiate driver
IWebDriver driver = new RemoteWebDriver(new Uri("http://localhost:4444/wd/hub"), ieOptions.ToCapabilities());
```

**Python**

```python
# Create desired_capabilities
capabilities = webdriver.DesiredCapabilities.INTERNETEXPLORER

# Force Windows to launch IE through Create Process API and in "private" browsing mode
capabilities['ie.forceCreateProcessApi'] = True
capabilities['ie.browserCommandLineArguments'] = '-private'

# Instantiate the driver
driver = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", desired_capabilities=capabilities)
```

#### Internet Explorer Container Configuration

Turbo's Internet Explorer containers are packaged and pre-configured to work with Selenium's Remote WebDriver without any end-user configuration. Each container is pre-configured with the following settings:

- Packaged with the latest IEDriverServer installed in the virtual environment's PATH.
- Protected Mode Enabled in all zones.

For Internet Explorer 10 and 11, Enhanced Protected Mode is Disabled.

For Internet Explorer 11, the registry key **HKLM\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE** was added to the container with DWORD iexplore.exe and value 0.

For more information on these changes, as they relate to the InternetExplorerDriver, see [the Selenium documentation](https://code.google.com/p/selenium/wiki/InternetExplorerDriver).

#### Internet Explorer "Gotchas"

The InternetExplorerDriver in Selenium has some unique features that may cause unexpected test results. Below, we've compiled a list of some of the most commonly encountered "gotchas" we've seen testing Internet Explorer. 

- When testing Internet Explorer, the browser zoom level should always be left at 100%. The IEDriverServer relies on this zoom level for native mouse events - configuring the zoom to be greater or less than 100% may cause inadvertent failures in your tests.
- If you are using a hover command in your tests, do not place your mouse over the Internet Explorer window. Doing so causes the hover to fail.