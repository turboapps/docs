### Introduction

The Turbo Command Line Interface allows advanced users and administrators to execute, modify, and create Turbo applications in an automated manner. Install the [Turbo for Windows](https://turbo.net/downloads) to get started.

### Creating a container

A container is an instance of a Turbo Application. The `new` command creates and starts a new container.

The `clean` image represents a clean OS *image*. A container is an *instance* of an image — in other words, you can start up multiple containers that start off in the state specified by a given image. The container holds all of the data  and other state changes that occur as the user performs actions in the container.

To create a new container from the `clean` image, we use the command `turbo new clean`:

```
> turbo new clean
Using VM 11.8.960 from local
Using image vcredist:2008 from local
Using image clean:25 from local
Running new container clean#8104e501 with visibility private

# A new console running in a container will appear. Consoles running inside a
# Turbo container display the name and first 8 characters of the randomly
# assigned container ID in the prompt.
(clean#8104e501) C:\>

# Verify the clean container is a clean OS instance
(clean#8104e501) C:\>dir
 Volume in drive C has no label.
 Volume Serial Number is DADA-BCA1

 Directory of C:\

07/01/2016 01:14 PM <DIR> .
07/01/2016 01:14 PM <DIR> ..
12/31/1999 05:00 PM <DIR> Users
12/31/1999 05:00 PM <DIR> ProgramData
12/31/1999 05:00 PM <DIR> Program Files
12/31/1999 05:00 PM <DIR> Program Files (x86)
12/31/1999 05:00 PM <DIR> Windows
12/31/1999 05:00 PM <DIR> $Recycle.Bin
12/31/1999 05:00 PM <DIR> Documents and Settings
12/31/1999 05:00 PM <DIR> PerfLogs
12/31/1999 05:00 PM <DIR> Recovery
12/31/1999 05:00 PM <DIR> System Volume Information
 0 File(s) 0 bytes
 12 Dir(s) 113,578,422,272 bytes free
```

Take a moment to compare the directory listing inside the container from the corresponding listings on your host device. Notice there will likely be many files on the host device that don’t appear in the container command prompt. This is because the container has its own version of the filesystem that reflects the settings of the `clean` image!

To exit a container, exit all processes that were started in the container. In our case, only the command prompt process is running in the container.

```
(clean#8104e501) C:\> exit

# The container exit code will be printed
Process exited with status 0
```

### Starting an existing container

The container still exists even though we exited all processes and it was shut down.

We can restart an existing container using the `start` command:

```
> turbo start 8104e501
Using VM 11.8.960 from local
Using image vcredist:2008 from local
Using image clean:25 from local
Running existing container clean#8104e501 with visibility private

# Command prompt to the existing container appears
(clean#8104e501) C:\>
```

In this example, we used the full container identifier. If there is no danger of ambiguity, you can use any prefix of a container identifier to specify the container. For example, we could have used `turbo start 810` so long as there were no other containers with identifiers starting in `810`.

### Deleting a container

Suppose we are done with our container. We can remove it from our local repository using the rm command.

```
> turbo rm clean#8104e501 
Container clean#8104e501 has been removed
```

This is especially useful when creating and tearing down test environments or performing other transient tasks where we’d like to leave our host device in a clean state.

We can remove all containers in the local repository using the `-a` flag:

```
# Remove all containers
> turbo rm -a
All containers have been removed
```

This restores us to a nice clean desktop!

### Running applications from the Hub

Creating an empty container is nice, but really we want to run real applications.

While you can install your own applications into containers, many popular applications now such as Mozilla Firefox.

```
# Run the latest version of Firefox
> turbo run firefox
```

In a few seconds, you will see the Firefox browser window appear!

Take a moment to look at the Start Menu and observe that Firefox has not been installed on the desktop! If you are on a desktop with limited permissions, you may also have noticed that no permissions were required to launch Firefox.

Since no specific version of Firefox was specified, this command runs the latest version of Firefox.

How did the `turbo` command know how to run Firefox? By default, it will connect to the [Turbo.net Hub](https://turbo.net/hub) to resolve  any image names that are not present in the local repository. (We’ll see how to add images to the local repository later.)

The Turbo.net Hub provides thousands of images for popular applications, runtimes, and layers  that will automatically configure and run on demand. You can also publish images into a *private repository*; or to a shared team account with a Turbo.net Team plan. Enterprises can host Turbo repositories on-premises with [TurboServer](https://turbo.net/server).

### Version management

In the example above, no version was specified. In this case the container is called *evergreen* — the latest image version is always run and the container is automatically updated if a new version becomes available. This is a powerful and easy method to keep devices up to date with the latest patches.

We can also run a specific version of an application. To specify an image version, use the `:` operator:

```
# Run version 40 of Firefox
> turbo run firefox:40
```

Because containers are isolated from the host desktop, Turbo can run legacy applications even if newer versions are installed locally or the host is running a newer operating system than the application was originally designed for.

Turbo versions are also based on prefix matching. For example, if versions 8.77 and 8.91 of the `jre` image exist, then the image specifier `jre:8` refers the latest among the versions prefixed with major version 8 — 8.91 in this example. This behavior allows the latest update or patch of a previous major version branch to be applied to an evergreen image.

### Layering

We can also combine together multiple images into a single container using the *layering* operator.

For example, suppose we want to run Firefox with the Java runtime enabled:

```
# Run Firefox with Java enabled
> turbo run jre,firefox:35
```

![](/docs/getting_started/command_line_interface/layered-architecture.png)

Note that if you navigate to the **Options / Plugins** menu in Firefox, the Java plugin is installed!

The layering operator applies each image’s configuration on top of the existing container configuration sequentially from left to right.

We can combine the versioning and layering operators to achieve more combinations:

```
# Run two different Firefox versions with multiple Java versions enabled
> turbo run jre:7.51,firefox:35 --detach
> turbo run jre:8,firefox:38 --detach
```

![](/docs/getting_started/command_line_interface/side-by-side-versioning.png)

Notice that we are able to run multiple versions of Firefox — with multiple versions of Java! — side by side on a single desktop.

In this example, we used the `--detach` flag to allow another command to be executed immediately before the container session closed. The default behavior is often preferred when using the `turbo` command in scripting.

Since detach is a common option, it is also available as a short form argument `-d`. We’ll use the *short form* in the future, and also note other frequent commands that have short forms available.
