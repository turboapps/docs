### Node.js

In this example we'll containerize aIRChat, an open source IRC client built on Node.js.

**Topics Covered:**

- Grab dependencies and start a new container
- Set up a Node.js web application
- Create and push an image to Turbo Hub
- Optional: Automate creation of a Node.js container

#### Pull dependencies and start a container

aIRChat has a few prerequisites. We'll need the Node.js image and the Git image, which are available on the Turbo Hub.

```
# The pull command downloads the images
> turbo pull git
> turbo pull node

# Use the next command to verify the downloads
> turbo images

Name  				Size 		Created
git/git 		32.1MB   	7/16/2014 3:44:27 PM
node/node		10.2MB   	7/16/2014 3:45:10 PM
```

Now start a new container using the `turbo run` command, specifying the Node.js and Gt images and the start-up file `cmd` to launch the container in a new command window.

```
> turbo run git,node cmd
```

#### Configure aIRChat

In the container, first create a folder where we can clone the aIRChat project from GitHub.

```
> cd C:\
> mkdir projects & cd projects
```

Clone the project by using the command `git clone`.

```
> git clone https://github.com/redwire/airchat.git

Cloning into 'airchat'...
remote: Reusing existing pack: 2983, done.
remote: Counting objects: 21, done.
remote: Compressing objects: 100% (18/18), done.
Receiving objects:  99% (remote: Total 3004 (delta 9), reused 0 (delta 0)
Receiving objects: 100% (3004/3004), 8.84MiB | 948.00 KiB/s, done.
Resolving deltas: 100% (1302/1302), done.
Checking connectivity... done.
```

Now install Node.js dependencies with Node Package Manager and launch the web application using Node.js.

```
# CD to the appropriate directory containing the package.json file
> cd .\airchat\Content

# Install dependency packages with the Node Package Manager
> npm install

...lots of installs...

# Launch a Node.js server
> node app.js

connect.multipart() will be removed in connect 3.0
visit https://github.com/senchalabs/connect/wiki/Connect-3.0 for alternatives
connect.limit() will be removed in connect 3.0
Express server listening on port 3000
```

aIRChat is now running on port 3000.  Click [here](http://localhost:3000) to confirm.

Once you've verified that aIRChat is running, stop the Node.js server by entering `Ctrl+C`.

#### Save the container

Enter `exit` to shut down the container. This will save the container and assign it a hash.

To verify the container information, us the `containers` command.

```
> turbo containers

ID  								Images							Command   						Created
1be755fcfafc4cf0b8e1c0667f6d13f0	git/git,node/node   	        C:\Windows\System32\cmd.exe   	7/16/2014 3:54:59 PM
```

If you need to access the container again in its current state to make changes, use `turbo start` command followed by the ID.

```
> turbo start 1be755fcfafc4cf0b8e1c0667f6d13f0
```

When you're finished configuring the container, committing it will create a new merged image.

```
# Specify a name for the new image
> turbo commit 1be755fcfafc4cf0b8e1c0667f6d13f0 aIRChat

decomposing git/git...
decomposing node/node...
merging base images...
commit complete

# Verify that your container was saved as a new image
> turbo images

Name  				Size 			Created
aIRChat 		    120.8MB  		7/16/2014 4:05:12 PM
git/git 		    32.1MB   		7/16/2014 3:44:27 PM
node/node		    10.2MB   		7/16/2014 3:45:10 PM

# Push your container up to the Turbo Hub
> turbo push aIRChat
```

Other Turbo users will now be able to pull and run your image in its saved state.

Visit the [hub](/hub) to see the details of the image you just pushed.

#### Optional: Automated Image Creation

The above container creation and configuration can also be automated using a TurboScript file.

Create a new text file and copy/paste this text:

```
# Specify project dependencies
layer git/git node/node

# Create a new directory for the project
cmd mkdir C:\projects\airchat

# Clone the Github repo
cmd git clone https://github.com/redwire/airchat C:\projects\airchat

# Set new working directory
workdir C:\projects\airchat\content

# Install dependencies with node package manager
cmd npm install

# Set startup file for the container
boot file node app.js
```

See the [TurboScript reference](/docs/reference/turboscript) for more information on TurboScript syntax.

Save the file as TurboScript in **C:\\spoon\aIRChat**.

```
# Now build the script to create a new image called aIRChat
> turbo build -n=aIRChat C:\spoon\aIRChat

# Run the image
> turbo run aIRChat
```

aIRChat is now running on port 3000. This automated method allows you to forego manual entry of commands to create a container.