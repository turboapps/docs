### Getting Started - Mocha/Mochify

#### Already Using Mochify? 

If you are already using Mochify with Selenium WebDriver, make sure the following settings are configured in your `.min-wd` file: 

- "hostname": "localhost"
- "port": "4444"

Then, start the Turbo hub and, from your project's root directory, run: 

	mochify --wd

#### New to Mochify? 

If you are new to Mochify and have never used it before, follow the instructions, below, to install Mocha and Mochify and configure them for use on Turbo. 

#### Installing Mocha and Mochify

Mocha can be added to an Node.js project through the Node Package Manager (NPM): 

	npm install mocha

Mochify can similarly be added through NPM: 

	npm install -g mochify

Mochify also has a dependency for `browserify`, which can also be installed through NPM: 

	npm install browserify

If you are using a **packages.json** file to manage your project's dependencies, add "mocha" and "mochify" to the **devDependencies** section of the file. 

```json
"devDependencies": {
	"mocha": "*",
	"mochify": "*",
	"browserify": "*"
}
```

Create a new **.min-wd** file in your project's root directory. Start by copying the JSON, below into this file: 

```json
{
  "hostname"  : "localhost",
  "port"      : 4444,
  "browsers"  : [{
    "name"    : "internet explorer",
    "version" : "9"
  }, {
    "name"    : "chrome"
  }, {
    "name"    : "firefox"
  }]
}
```

You can configure which browsers to test in the **browsers** node. If a version is not specified, Turbo will by default use the most recent version of that browser.

To add additional browsers, add another entry to the **browsers** array. For example, in the below example file we've added Firefox 26 and Chrome 34 as additional browsers to test on. 

```json
{
  "hostname"  : "localhost",
  "port"      : 4444,
  "browsers"  : [{
    "name"    : "internet explorer",
    "version" : "9"
  }, {
    "name"    : "chrome"
  }, {
    "name"    : "firefox"
  }, {
    "name"      : "firefox",
    "version" : "26"
  },
     {
    "name"      : "chrome",
    "version" : "34"
  }]
}
```

#### Run Tests

From your project's root directory, run `mochify --wd` to run all of your tests. 
