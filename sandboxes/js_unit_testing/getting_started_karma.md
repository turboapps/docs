### Getting Started - Karma

Karma runs on Node.js and is available as an NPM package. It can be installed through the Node Package Manager (npm) by running: 

	npm install karma --save-dev

If you are already using Karma in your project, skip to **Configuring Karma for Turbo**. 

If you do not already have Karma installed in your project, see **Installing Karma**.

#### Installing Karma

This section will outline the recommended Karma installation for Turbo. The instructions here closely mimic those recommended by the Karma project for general installations. 

Start by installing Karma locally in your project's root directory: 

	npm install karma --save-dev

If you are managing your packages through a **packages.json** file, add Karma to the `devDependencies` section. 

```json
{
	"devDependencies": {
		"karma": ">=0.10"
	}
}
```

We highly recommend also installing the **karma-cli** package. Without it, you must type the full path to Karma (usually `"./node_modules/karma/bin/karma"` to run Karma. By doing a global install of **karma-cli**, you can simply type `karma` from any location and it will always run the local version. 

**Note**: If you are using any testing frameworks, such as Jasmine or QUnit, these should also be installed at this time. 

#### Configuring Karma for Turbo
 
After Karma is installed, it must be configured to use Turbo for browser launches. 

First, install the **karma-webdriver-launcher** package through npm: 

	npm install karma-webdriver-launcher

or by adding the **karma-webdriver-launcher** to your project's **package.json** file: 

```json
{
	"devDependencies": {
		"karma": ">=0.10",
		"karma-webdriver-launcher": ">=0.2.0"
	}
}
```

In your project's root directory, open the **karma.conf.js** file. If it doesn't already exist, run the command `karma init karma.conf.js` in your project's root directory. Karma will ask a couple of questions about your particular configuration and generate a new config file based on your answers. 

In your karma.conf.js file, add a **webDriverConfig** variable within the **module.exports** scope. This variable will specify the hostname and port of the Turbo hub. 

```javascript
module.exports = function(karma) {
	var webDriverConfig = {
		hostname: "localhost",
		port: 4444
	}
}
```

In your configuration object, add a new option: **customLaunchers**. Beneath this option, add variables for each browser you want to test with. 

```javascript
module.exports = function(karma) {
	var webDriverConfig = {
		hostname: "localhost",
		port: 4444		
	}

	karma.set({	
		...		
		customLaunchers: {
			'Firefox30': {
				base: 'WebDriver',
				browserName: 'firefox',
				version: 30
			},
			'Chrome32': {
				base: 'WebDriver',
				browserName: 'chrome',
				version: 32
			}
		}
		...
	})
}
```

Finally, add each of these browsers to the **browsers** option in your configuration object. 

```javascript
module.exports = function(karma) {
	var webDriverConfig = {
		hostname: "localhost",
		port: 4444		
	}

	karma.set({	
		...		
		customLaunchers: {
			'Firefox30': {
				base: 'WebDriver',
				config: webDriverConfig,
				browserName: 'firefox',
				version: 30
			},
			'Chrome32': {
				base: 'WebDriver',
				config: webDriverConfig,
				browserName: 'chrome',
				version: 32
			}
		},
		...
		browsers: ['Firefox30','Chrome32']
	})
}
```

Note that each launcher object has a similar structure: 

```javascript
'LAUNCHER-NAME': {
	base: 'WebDriver',
	config: 'webDriverConfig',
	browserName: 'NAME OF BROWSER',
	version: VERSION
}
```

When adding additional launchers to your test, follow this pattern -- always specifying "base" and "config" as **WebDriver** and **webDriverConfig**, respectively. 

#### Run Your Karma Tests

When you are ready to test, run the command `karma start karma.conf.js` from your project's root directory. 
