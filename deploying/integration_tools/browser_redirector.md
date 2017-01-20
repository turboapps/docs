### Browser Redirector

Browser redirection is a service that automatically opens the page or resource a user is trying to visit in an alternate browser. It uses a browser plugin to check URLs against a list of administrator defined rules that specify which websites or web applications are incompatible with the user's current browser. If the URL matches a rule, the web page will launch in the specified virtual browser instead of their installed browser. 

Browser redirection prevents errors when accessing legacy web resources on newer systems, creating a more seamless and efficient web experience for the end user.

#### Installation

Browser Redirector is included in the Turbo client, but requires a command line switch on install to be enabled. Unlike the standard install, the Browser Redirector requires administrator rights during install.  

From and elevated command prompt, run the following command:

```
turbo-client.exe /redirect /allusers
```

Silent installation is available using the `silent` command line flag. Also, for environments where the console should be hidden, there is a `hidegui` command line flag available.

```
turbo-client.exe /redirect /allusers /hidegui /silent
```

**Note that the deploying using the `SYSTEM` account is not supported.**

#### Setting up Redirection Rules

After completing the client install, administrators define a set of rules that will determine which websites should redirect to a specific browser.

These rules are defined in the registry so that they may be deployed efficiently via group policy.

Registry-based rules are located under `HKLM\Software\Wow6432Node\Code Systems\Turbo` in a key called `Redirector`. The `Redirector` key will contain a list of keys. Each key represents a rule, and the name of the key is the URL pattern match for the rule. Under each rule key, there will be a value of `TurboCommand` or `Command` which will define what happens when the URL matches the pattern.  

For example, if you wanted to route all users to Firefox version 35 when they went to Google, the key name would be `google.com` and the `TurboCommand` value would be `new firefox:35`.

There is an optional value `AutoReturn` that can be used if the user should be redirected to a host browser if they navigate to a URL that does not match the rule pattern.

This screenshot shows a fully set up rule key for a `TurboCommand` rule.

![](/docs/deploying/integration_tools/redirect-turbo-cmd.png)

This screenshot shows a fully set up rule key for a `Command` rule.

![](/docs/deploying/integration_tools/redirect-cmd.png)

#### Additional Information

**Applications on a Network Share**

When a virtual browser is located on a network location or anywhere not on the user's hard drive, the user may be prompted with a security warning before the browser is launched. The user must then manually select "Run" the application before the browser launches.

The warning can be suppressed by setting the environment variable SEE\_MASK\_NOZONECHECKS to 1.

![](/docs/deploying/integration_tools/nozonechecks.png)
