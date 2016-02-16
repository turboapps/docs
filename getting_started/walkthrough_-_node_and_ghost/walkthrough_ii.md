## Walkthrough - Node and Ghost

Turbo gives users the tools to easily test and deploy web applications. In this example, we will use the popular **[Ghost](http://ghost.org/)** web blogging application to showcase the features of the Turbo system that make it particularly useful for this purpose.

### Topics Covered

1. Creating a new web application image by combining base images
2. Running a web application image
3. Running multiple instances of a web application with the help of port mapping
4. Copying data from one container to another
5. Layering images (creating a container with multiple images)
6. Reverting a container to its original state

### Create a Ghost Image

Let's start by opening a new command prompt and logging in the Turbo Hub.

```	
# Log in to your Turbo account
C:\> turbo login username password

Logged in as username
```

For this Ghost example, we will need to start our container with some basic utilities, such as wget and 7-zip. We  will also pull and run the NodeJS server, which is required for the Ghost application. For this, we'll use `turbo run`, which will automatically pull the named images and begin running them in a new containerized command prompt.

```
# Create a new container with basic utilities and the Node JS server.
C:\> turbo run wget,7-zip,node:0.10.33

Downloading wget from https://turbo.net/users/gnu
Downloading 7-zip from https://turbo.net/users/7-zip
Downloading node from https://turbo.net/users/node

# This will pull these images into a new containerized command prompt (as shown in the Hello World sample).
```

Let's analyze this command:

```
turbo run

# Unlike the Hello World sample, we skipped the `turbo pull` command. Why?
# `turbo run` will simultaneously download and run images in a new container.

wget,7-zip,node:0.10.33

# Unlike the Hello World sample, we have omitted the "owner/" namespace from image names. Omitting the namespace causes Turbo Studio to first search for the named images on your local machine's image repository.
# If it doesn't find a match locally, Turbo Studio automatically searches for the approved images on the Turbo Hub, as it did in this example.
```

In your container, make a directory for the Ghost web application.

```
# Create "ghost" directory.
(c99f354f) C:\> mkdir c:\ghost

# Change the current directory to "ghost" with `cd` command.
(c99f354f) C:\> cd c:\ghost

(c99f354f) C:\ghost>

# Like the Hello World sample, this directory exists inside your container - not on your local system.
```

Download the Ghost application into your container. Although we use the **--no-check-certificate** flag as a shortcut in this example, you should be validating SSL connections against a real certificate in a production environment.

```
# Using wget, download and install the Ghost web application with the included tools.
(c99f354f) C:\ghost> wget http://ghost.org/zip/ghost-0.5.1.zip --no-check-certificate

'ghost-0.5.1.zip' saved

# Using 7-zip, extract the Ghost application.
(c99f354f) C:\ghost> 7z x ghost-0.5.1.zip

Everything is Ok

# Using NodeJS npm (Node Package Manager) tool, install the ghost application in production mode.
(c99f354f) C:\ghost> npm install
```

When it's all done, `exit` the container.

```
(c99f354f) C:\ghost> exit

# Your native command prompt will output a "Ghost container" ID and exit code:

c99f354fdf7847fe9be2261f8a475e15
Process returned exit code 0x0
```

In your native command prompt, `commit` the container to create the Ghost image.

```
# Like in the Hello World sample, `commit` using your partial container ID and your chosen name for your new image.
C:\>turbo commit c99f354f ghost:0.5.1

Committing container c99f354fdf7847fe9be2261f8a475e15 to image ghost:0.5.1
Commit complete
```

### Running the Ghost Web Application

Once we have created our Ghost image, we can `run` it.

```
C:\> turbo run ghost:0.5.1

# This will initialize a fresh container using our newly created Ghost image.
```

Once in the container, start the Ghost web application with the NodeJS server.

```
# Change to the ghost directory.
(bc53e584) C:\> cd C:\ghost

# Start the NodeJS server.
(bc53e584) C:\ghost> npm start

Ghost is running in development...

# Your blog is now available on http://localhost:2368
```

Set up your Ghost blog account at **http://localhost:2368/admin**.

Go ahead and make your first post! :) Don't forget to save and publish it.

Your Ghost web application can then be used via any browser at **http://localhost:2368**.

![](/components/docs/getting_started/walkthrough_-_node_and_ghost/ghost-first-post.png)

When you are done, press **Ctrl+C** to stop the server, then `exit` the container.

```
# Ctrl+C to shut down. No need to terminate batch file.
Ctrl+C
Terminate batch file (Y/N)? N

# Exit the container to get the ID for your new Ghost container, which now has data in it.
(bc53e584) C:\ghost> exit

bc53e584fbf943098e7d0bf6109737eb
Process returned exit code 0xC000013A
```

This container ID will be used in later sections.

### Running Multiple Instances

Imagine that you needed to run or test multiple instances of the same application. In a typical scenario, you would have to create modified images that have individual configurations and would have to maintain these configurations after each update.

However, with the help of port mapping, we can run multiple instances of the Ghost web application image without having to do any of that. Simply map a host port to your application's internal port and you are ready to go. No mess, no fuss.

```
# Create a container that maps port 8080 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8080 ghost:0.5.1
8bc1c8a0774e452391d6be6255d9d13e

# Create a container that maps port 8081 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8081 ghost:0.5.1
8a524a9fd6a047778bc88f3169a90780

# Create a container that maps port 8082 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8082 ghost:0.5.1
cee869387b74474b89bafccb5b590884
```

Note that we used the -d (--detach) flag this time to start a container, get the container ID, and continue using our native command prompt. If we do not use this flag, the native command prompt will block execution of commands until the container is stopped.

In each of the three Ghost containers, start the NodeJS server to make all three instances accessible.

```
# Change the current directory to where Ghost is installed and start the server for each container.
(8bc1c8a0) C:\> cd C:\Ghost & npm start
(8a524a9f) C:\> cd C:\Ghost & npm start
(cee86938) C:\> cd C:\Ghost & npm start
```

At this point, you should have three containers using the same image. Each Ghost instance operates on the 2368 port internally, but is accessible via the 808x port that is assigned to it on the host.

![](/components/docs/getting_started/walkthrough_-_node_and_ghost/multiple.png)

### Saving a Database to a Layer

Now that we have a Ghost database created and filled with some data, let's **copy** it to a new container using the `turbo cp` command. We can convert this container later to an image and use it as a backup, or to layer existing data on top of a clean ghost image.

Saving a database to a layer can help you test different application versions against the same database, back up databases in case an app breaks something, test against new/old database versions, and change a database during development without messing with a "master" database.

First, we will need to create a blank container that will hold the database.

```
# Create a container from clean
C:\> turbo run clean

# Exit the container to get your blank container ID.
(d65260ad) C:\> exit

d65260ad4c504381a34e21358b19307f
Process returned exit code 0x0
```

Next, use the turbo `cp` command to copy the database from the Ghost container (bc53e584 Running the Ghost Web Application) to the blank container.

```
C:\> turbo cp bc53e584:c:\ghost\content\data d65260ad:c:\ghost\content\data

# `Commit` the container as an image.
C:\> turbo commit d65260ad ghost-db

Committing container d65260ad4c504381a34e21358b19307f to image ghost-db
Commit complete
```

Create a new container using the ghost image with the database layered on top of it.

```
# Create a ghost container with ghost-db layered on top of it.
# Since the 2368 port is already taken, we'll also map a new port to the container.
C:\> turbo run --route-add=8083:2368 ghost:0.5.1,ghost-db
```

Start the NodeJS server and verify that the blog has the database.

```
(9a82febf) C:\> cd ghost & npm start
```

![](/components/docs/getting_started/walkthrough_-_node_and_ghost/ghost-first-post-2.png)

### Reverting the Container

We can use the `turbo revert` command to restore a container to its original state.

Let's go back to our original container and try this.

```
# `Revert` the container to its original state using the container ID.
C:\> turbo revert bc53e584

Deleted all changes in container bc53e584fbf943098e7d0bf6109737eb

# `Start` that container again.
C:\> turbo start bc53e584
```

Change directory to Ghost and start the server.

```
(bc53e584) C:\> cd ghost & npm start

# When you visit the website, the Ghost web application should be reverted to its original state.
```

![](/components/docs/getting_started/walkthrough_-_node_and_ghost/ghost-revert.png)

This command is especially useful if your database was somehow corrupted or an unrecoverable error made your web application unusable. Instead of trying to figure out where the problem is and attempting to clean your environment, which can take hours to do, you can simply `revert` the container to its original state with the `turbo revert` command.

### Pulling It All Together

Imagine that you have a live environment with a production, testing, and developing instance of the Ghost web application. You can use the port mapping and layering technique to run all three environments using the same database and the same config on the same machine. This eliminates the need for extra server machines, as well as the risk when deploying due to config mismanagement, and you can easily spin up more instances and tear down unneeded ones.

```
# Create a Ghost 0.5.0 instance using the same database and config on port 9090
C:\> turbo run -d --route-add=tcp://2368:9090 ghost:0.5.0,ghost-db,ghost-config

# Create a Ghost 0.5.1 instance using the same database and config on port 9091
C:\> turbo run -d --route-add=tcp://2368:9091 ghost:0.5.1,ghost-db,ghost-config

# Create a Ghost 0.5.2 instance using the same database and config on port 9092
C:\> turbo run -d --route-add=tcp://2368:9092 ghost:0.5.2,ghost-db,ghost-config
```
