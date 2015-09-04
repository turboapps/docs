### Testing Internal Sites

Testing internal websites with Turbo is just as easy as testing public websites.

All browsers and test scripts run on your local machine, so there is no need for any special proxy configuration or modifications to the URL when testing an internal site.  

The security benefit of this is that no browser data or network traffic passes through Turbo servers. The only data stored on the server is the test results, which can be viewed in your online account. You can turn off test result storage by unchecking the **Save test reports** check box in the top-right corner of the [http://turbo.net/selenium](/selenium). 

Below is some example code demonstrating how you would run your test against an internal site running at **http://my-internal-server:8080**.

```java
// Java
driver.navigate().to("http://my-internal-server:8080");
```

```csharp
// C#
driver.Navigate().GoToUrl("http://my-internal-server:8080");
```

```python
# Python
driver.get("http://my-internal-server:8080")
```