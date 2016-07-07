## Walkthrough - ASP.NET
Turbo also supports running ASP.NET applications within a container. In this example, we will clone an ASP.NET application, MiniBlog, from GitHub, deploy it in a container and test it with Firefox.

### Topics Covered
1. Creating a container using multiple base images
2. Deploying an ASP.NET website
3. Running IIS Express within a container
4. Testing with Firefox in the container
5. Pause testing and resume on another machine

### Start the Container

```
# Create a new container with .NET, ASP.NET, Firefox and git
C:\> turbo run microsoft/dotnet,microsoft/aspnet,mozilla/firefox,git/git

Downloading dotnet from https://turbo.net/users/microsoft
Downloading aspnet from https://turbo.net/users/microsoft
Downloading firefox from https://turbo.net/users/mozilla
Downloading git from https://turbo.net/users/git
Running container 249c4f3e with visibility public (use '--private' for a private container)

# Note that the startup file is selected based on the git image since that is last in the list.
```

### Configure the ASP.NET Application

```
(249c4f3e) C:\> cd c:\
(249c4f3e) C:\> git clone https://github.com/madskristensen/MiniBlog.git

# This clones the project into a folder in the container and not on your local system.

# Start the ASP.NET application console
(249c4f3e) C:\> start "MiniBlog" "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:C:\MiniBlog\Website
```

The IIS output will be logged in a new console window.

```
Copied template config file 'C:\Program Files (x86)\IIS Express\AppServer\applicationhost.config' to 'C:\Users\Administrator\appdata\local\temp\iisexpress\appli
cationhost2014112420457848.config'
Updated configuration file 'C:\Users\Administrator\appdata\local\temp\iisexpress\applicationhost2014112420457848.config' with given cmd line info.
Starting IIS Express ...
Successfully registered URL "http://localhost:8080/" for site "Development Web Site" application "/"
Registration completed
IIS Express is running.
Enter 'Q' to stop IIS Express
```

### Test the Application

```
# Begin testing with Firefox
(249c4f3e) C:\> "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
```

Go to `http://localhost:8080` and test the application.

![](/docs/getting_started/walkthrough_-_asp.net/miniblog.png)

Login using demo/demo.

![](/docs/getting_started/walkthrough_-_asp.net/miniblog-signin.png)

Create a new post.

![](/docs/getting_started/walkthrough_-_asp.net/savedpost.png)

### Resume Testing on a New Machine 
Stop the IIS service and exit the container.

```
Container 249c4f3e stopped in state f478518f (continue execution with `turbo continue f478518f`)
249c4f3ed9f343bbb74a738a4af24892
Process exited with status 0
```

Go to a new machine and login to [Turbo.net](http://turbo.net).  Go to your containers and click the **Continue** button for the container that you want to resume.

![](/docs/getting_started/walkthrough_-_asp.net/continue-from-spoonnet.png)

```
Creating container 249c4f3e and continuing execution in state f478518f
Running container 249c4f3e with visibility public (use `--private` for a private container)
Fetching Spoon VM version 11.6.378
Downloading dotnet from https://turbo.net/users/microsoft
Downloading aspnet from https://turbo.net/users/microsoft
Downloading firefox from https://turbo.net/users/mozilla
Downloading git from https://turbo.net/users/git
Upgrading Clean to version 4.0
```

Verify that the web application is in the same state even though you are on a completely different system.

```
249c4f3e C:\> start "MiniBlog" "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:C:\MiniBlog\Website
249c4f3e C:\> "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"
```

Go to `http://localhost:8080` and you can see that the post we created earlier is still there.

![](/docs/getting_started/walkthrough_-_asp.net/same-post-new-system.png)


### Next Steps 
In this demo we saw a few important capabilities of containers. First, we were able to create a container for an ASP.NET application with IIS running in the container. Next we were able to test the container and the state of the container was automatically synchronized to the Turbo.net Hub on shutdown. Then we went to a new system, went to the Turbo.net Hub and continued the container from the saved state.

The next step would be to build a container with more testing capabilities like Selenium and use the container state to send bugs to the application developers.
