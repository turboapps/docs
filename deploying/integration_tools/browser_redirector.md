### Browser Redirector

Browser redirection is a service that automatically opens the page or resource a user is trying to visit in an alternate browser. It uses a browser plugin to check URLs against a list of administrator defined rules that specify which websites or web applications are incompatible with the user's current browser. If the URL matches a rule, the web page will launch in the specified virtual browser instead of their installed browser. 

Browser redirection prevents errors when accessing legacy web resources on newer systems, creating a more seamless and efficient web experience for the end user.

**Note**: Browser Redirector is currently only available to use with standalone EXEs and MSIs built with TurboStudio.

#### Installation

Browser Redirector is included in the Turbo browser plugin, but requires a command line switch on install to be enabled. Unlike the standard plugin install, the Browser Redirector requires administrator rights during install.  

From and elevated command prompt, run the following command:

```
turbo-plugin.exe /redirect /allusers
```

Silent installation is available using the `silent` command line flag. Also, for environments where the console should be hidden, there is a `hidegui` command line flag available.

```
turbo-plugin.exe /redirect /allusers /hidegui /silent
```

**Note that the deploying using the `SYSTEM` account is not supported.**

#### Setting up Redirection Rules

After completing the plugin install, administrators define a set of rules that will determine which websites should redirect to a specific browser.

These rules are defined in the registry so that they may be deployed efficiently via group policy.

Registry-based rules can be located in `HKCU\Software\Code Systems\Turbo` or `HKLM\Software\Wow6432Node\Code Systems` in a key called `Redirect`. The `Redirect` key will contain a list of keys. These keys may be named any name that is valid within the registry, but it is helpful to name them something indicative of the target site they serve to modify.

The `Redirect` key also must contain a string value that indicates the redirector version number. By default, this will be `1.0`. See the screenshot below for proper setup of the version number value.

![](/docs/deploying/integration_tools/redirect_version.png)

Registry-based rule key values have a specific format that must be followed in order for redirection to function correctly. There are three values within a normal rule key: `Action`, `Match`, and `Path`. All values are string (`REG_SZ`) values.

`Action` defines the instructions for the Redirector to take when a target URL is accessed. For the URL to be opened in a target virtual browser, this command will be `OpenWithSpoon`.

`Match` defines the regular expression for the target URL. Because it is a regular expression, it requires very specific syntax to be used, as follows:

Leading http/https are not required, but may be used for clarification.

Wildcards (\*) may be used, but must be preceded by a period (.) to indicate "any text can go here."
If there is an optional value (for example, http and https versions of a page defined in a single value), the optional string can be enclosed in parentheses and followed by a question mark (?).

These are all well-formed match strings.

```
http(s)?://.*.google.com/

turbo.net/.*

http://turbo.net
```

`Path` defines the absolute location of the virtualized browser executable to open the matched URL. Users will need to have the executable for the target virtualized browser(s) on their machine or on an accessible network share.
 
This screenshot shows a fully set up rule key.

![](/docs/deploying/integration_tools/redirect_rule.png)

#### Additional Information

**Rule Changes**

If any changes to the registry are made while Internet Explorer is open, IE must be restarted before any of these changes will take effect.

**Applications on a Network Share**

When a virtual browser is located on a network location or anywhere not on the user's hard drive, the user may be prompted with a security warning before the browser is launched. The user must then manually select "Run" the application before the browser launches.

The warning can be suppressed by setting the environment variable SEE\_MASK\_NOZONECHECKS to 1.

![](/docs/deploying/integration_tools/nozonechecks.png)