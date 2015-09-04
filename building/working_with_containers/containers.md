In this section you'll learn a variety of methods for managing and building containers and images with Spoon Studio and the command-line interface. You'll also learn how to integrate containerization with your continuous integration server.

## Working with Containers

### Creating Containers

The `turbo run` command starts new containers. You must specify a base image to provide the virtual filesystem and registry for the container. If no files or registry keys are necessary, use the empty clean image.

```
# Launch a command window in a new container with clean as the base image
> turbo run spoonbrew/clean
```

Operations executed in the new command window are applied to the container, not the host system.

To avoid confusion, the prompt is prepended by the first 8 characters of the container ID when a command window is running in a container.

```
# Host command window
> turbo run spoonbrew/clean

# Container command window
(8dpp9eb5) >
```

Edit and modify the container's virtual filesystem and registry using the same command-line interfaces available in Windows Command Prompt.

### Installing MSI Packages in Containers

Installing MSI packages in containers is supported, but a current limitation of the Spoon VM requires running a virtualized instance of the Windows Installer service with administrative privileges. To make things easier, the container automatically detects when an MSI installer is started and pops up a UAC consent dialog if needed. Accepting the dialog is required for the installer to start.

If the container instance is running as a standard user (i.e. not member of the Administrators group) or the installer is not detected as an MSI by the container, no UAC consent dialog will be shown. If you hit this issue, you can start the whole container elevated using the `--admin` flag as shown below.

```
# Start the container elevated
> turbo run wget --admin

# Download the installer
(493a3d01) > wget http://example.com/installer.msi

# Run it
(493a3d01) > installer.msi
```

### Managing Containers

Once created, track and manage containers with these commands.

```
# List containers with base images, commands, creation date, and status
> turbo containers

ID           Images              Command       Created          Status
03bddd8bef   spoonbrew/clean   cmd           8/14/2014 1:03   Stopped
52hd888xa3   local/server-app    startup.bat   8/14/2014 1:00   Running

# Remove a specific container from the host system
> turbo rm 03bddd8bef

# Remove all containers
> turbo rm -a
```

Note that running containers must be stopped before being removed.

### Processes and Stopping Containers

The life cycle of a container is controlled by the processes within that container. Processes in a container spawn as child processes of the **Spoon VM** executable, which manages the container environment.

When a process within a container exits or completes, the container exits as well.

```
# You can forcefully exit a container from the native command window
> turbo stop <container id>
```

This command kills the **Spoon VM** managing process along with any child processes.

You can also explicitly shut down a container from a command window running in the container by typing `exit` or entering Ctrl+C.

```
# If necessary, restart a closed container and specify the container ID
> turbo start 8dpp9eb5
```

### Debugging

If you experience crashing or other issues with Turbo containers, here are several commands to help you debug and fix these problems.

```
# If your container unexpectedly crashes, enable diagnostic mode
> turbo run --diagnostic <image>

# Then fetch the logs created by the run
> turbo logs
```

This command returns logs of all the standard streams (`STDIN`, `STDOUT`, `STDERR`) for the specified container.

Please note that enabling diagnostic mode will cause your container to run slower than expected. Therefore we recommend only enabling this mode for diagnostic/debugging purposes.

```
# You can also debug by viewing changes to a container's filesystem and registry
> turbo diff 8dpp9eb5

# Similarly you can revert changes to get the container back to a running state or to debug changes
> turbo revert 8dpp9eb5
```

### Building Images from Containers

Once you're finished editing a container, it can be saved and distributed in the form of images. For more information on images, read on [here](/docs/building/working-with-images).

```
# Create a new image from a container, specify the container ID and a name for the new image
> turbo commit 52hd888xa3 test
```

By default, the `commit` command merges sandbox changes with the base images and builds a new image from these merged layers. Specifying the "--no-base" option builds a new image of the sandbox changes without merging the base images.