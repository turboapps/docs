## .NET and Java

Containers let you deploy applications built on frameworks such as .NET and Java without requiring users to install the .NET Framework or Java runtime.

Containerizing also assures that your application will run reliably regardless of what runtimes may already be installed on the endpoint.

### Getting Started

We will begin by downloading the sample applications from GitHub. A nice trick to do this without installing Git is to create a temporary container with turbo try that is only used to clone the repository. The --mount=%CD%\samples flag is used to poke a hole in the container to the samples directory on the native file system so that the containerized Git application can write to it. (The %CD% special path variable represents the current directory.)

```
# Create a samples folder
> mkdir samples

# Download the sample applications from GitHub
> turbo try --mount=%CD%\samples git -- /c git clone https://github.com/turboapps/samples
```

### .NET

This example shows how to make an image for a .NET Framework application using TurboScript, an automated way to build application images.

The script copies the application binaries from the cloned repository to a new container and commits it to an image. The `--mount=%CD%\samples` flag is used to poke a hole in the container isolation so that the cloned repository can be accessed. The `--no-base flag` just marks `microsoft/dotnet:4.5` as a dependency rather than copying it into the image. This greatly reduces the size of the final image.

```
# Build an image using the application binaries from the cloned repository

> turbo build --mount=%CD%\samples --name=dotNetApp --no-base turbo.me
```

Below is the TurboScript used for this example project. You should copy and paste this code into an empty text file named **turbo.me**:

```
# Layer in the required version of the .NET Framework
layer microsoft/dotnet:4.5

# Create a new directory for your application
cmd mkdir C:\myApp

# Copy the application from the mounted path to the application folder
cmd copy %CD%\samples\dotnet-helloworld\DotNetHelloWorld.exe c:\myApp

# Set the startup file for the image to the application executable
startup file c:\myApp\DotNetHelloWorld.exe
```

### Java

Instead of using TurboScript automation, we will demonstrate a different and more interactive process for containerizing the Java sample application.

First, create a new container with the Java Development Kit, specified with the `turbo new jdk:7` command. We will do all of our work in this container, such as copying and running the application. When everything is ready, the container state will be committed to an image.

The `--mount=%CD%\samples` flag is used to poke a hole in the container isolation so that the Java application can be copied from the host file system. The `--detach` flag specifies that the turbo command should not wait for the container to finish.

```
# Start a new Java Development Kit container
> turbo new jdk:7 --detach --mount=%CD%\samples

# Create a folder for the Java application
(3df234f3) > mkdir C:\javaApp

# Copy the Java application from the host file system to the container
(3df234f3) > xcopy /s samples\java-simple-webserver C:\javaApp

# Set the working directory to C:\javaApp
(3df234f3) > pushd C:\javaApp

# Run the server from within the container
(3df234f3) C:\javaApp> "%java_home%\bin\java.exe" -jar SimpleWebServer.jar
```

The Java application is now running on your local machine using port 80, which can be confirmed by opening a web browser to `http://localhost`. You should see a listing of all the files in the `C:\javaApp` folder of the container.

Now that the Java application has been copied to the container and is running correctly, we can proceed to the final step of committing the container state to an image. To do that, shutdown the container using the `turbo stop` command with the container identifier.

```
# Stop the container
> turbo stop 3df234ff3
```

Commit the container state to an image using the `turbo commit` command.

```
# Commit the container
> turbo commit 3df234f3 simple-java-webserver
```

By default, committing will generate a final image that also contains the base `oracle/jdk:7` dependency. This may be desirable for portability if you plan on exporting the image for use with Turbo Studio or Server, or if the base dependency may get deleted later on. However, it will also increase the size of the image. Instead, you may want to soft-link the `oracle/jdk:7` dependency by using the `--no-base` flag. A soft-linked dependency will be pulled automatically and added to the container by our layering mechanism on startup.

```
# Commit with a soft-linked dependency
> turbo commit --no-base 3df234f3 simple-java-webserver
```

### Creating releases

Each time an image is pushed a new version is generated. But usually only certain versions are released to end users. These images can be marked as releases using the `turbo release` command.

To illustrate this idea, we’ll create a `1.0` release from our newly created image.

```
# Create a new release version 1.0 for the image
> turbo release simple-java-webserver 1.0
```

When `turbo images` is executed, you should now see a new entry for **simple-java-webserver:1.0**.

```
> turbo images
ID            Name                   Release   Created                Size
--            ----                   -------   -------                ----
7a85fe8f7ad1  oracle/jdk             7.65      8/22/2014 11:34:19 AM  74.3 MB
9iejrk2a34hd  git/git                1.94      8/21/2014 11:32:00 AM  50.4 MB
3a24fade3ea4  simple-java-webserver            8/22/2014 11:52:32 AM  20.2 MB
3a24fade3ea4  simple-java-webserver  1.0       8/22/2014 11:59:59 AM  20.2 MB
```

### Deploying to the Turbo.net Hub

Now that we have built our image, we can deploy it to end users by pushing it to the [Turbo Hub](https://app.turbo.net/hub).

```
> turbo push simple-java-webserver
```

This will create a new repository in your Turbo.net account called **simple-java-webserver** where the image will be placed.

Note that if you tagged your image in the previous section, use the command: 

```
>turbo push simple-java-webserver:1.0.
```

