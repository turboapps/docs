# var

The `var` instruction sets value of a variable.

```
var <name>="<value>"
```

The value can be an expression involving strings and other variables.

```
var foo="bar"
var myvar=foo + "baz"
```

A few special variables are implicitly defined:

* `last` - Output of last executed command
* `spoonversion` - Version string of the binary
* `year` - Current year
* `month` - Current month number
* `day` - Curent day number
* `hour` - Current hour
* `minute` - Current minute
* `second` - Current second
* `dateiso` - Current date in `yyyyMMdd` format
* `date` - Current date
* `time` - Current time

For programs started in the build container, variables are available as environment variables.

```
var version = ""
using python
  cmd python getLatestVersion.py
  var version = last

using wget
  cmd wget https://example.com/application-%version%.exe

meta name = "application"
meta tag = version
```
