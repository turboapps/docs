Turbo leverages containerization to offer solutions for testing browsers, applications, and servers.

Turbo is a solution for both manual and automated browser testing. With our manual testing, you can run any version of any browser in a container or build a custom browser container with components like Java and Flash. Our automated testing solution allows you to run tests with [Selenium](http://seleniumhq.org) on our web-based Selenium Grid that utilizes our browser containers on your local machine to minimize your testing environment setup.

For other applications and servers, our containers can make testing your project's latest builds easier by making them more portable and more efficient. As we learned in the [Building](/docs/building) section, images created with the command-line interface or Spoon Studio capture the state of a container at a specific time. This allows you to create and push specific builds or versions of your project that your testers can pull and test without any setup. This makes Turbo a useful tool for continuous integration and nightly beta build testing.

## Manual Browser Testing

Turbo offers 2 tools for manual browser testing.

<!--TODO: revise all this when the new templating goes into place for these tools -->

#### Browser Sandbox

[http://turbo.net/browsers](/browsers)

Turbo's Browser Sandbox makes cross-browser and backwards compatibility testing easy. Just click **Run** for any browser to launch it instantly.

Browsers run within isolated virtual containers, eliminating the need for installs and allowing legacy browsers such as Internet Explorer 6 to run on Windows 7 and 8.

Containerized browsers behave exactly like installed browsers, and because they run locally, you can test web applications hosted on your own development machine or on internal servers. Simply launch the browser from Turbo.net and enter your test URL in the navigation bar.

Turbo browsers support standard browser components like Java applets and ActiveX controls as well as popular browser plugins like Firebug, IE Developer Toolbar, and CSS and JavaScript debugging consoles. 

#### Web Browser

[https://turbo.net/account/projects/new/application/browser](/account/projects/new/application/browser)

Need to test a web application with a Java dependency? Want to see if Flash breaks your website? Web Browser is Turbo's three-step tool for creating custom browser containers. Pick your browser and version, pick the runtimes and plugins you need, and click **Create**. We'll create your custom test environment in minutes, and you can save your new browser to Turbo.net for future use.