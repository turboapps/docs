## Creating Layers

Creating a `layer` on top of an existing image is used to apply special settings, files, or registry entries without having to maintain and deploy a duplicated image. A common use case is to layer a brower image with different browser plugins, change the default homepage, or have it launch in kiosk mode.

### Using TurboScript

Turboscript allows creating layers in an interable and repeatable fashion. In this example we will create a layer which modifies the startup file for Python in order to launch Python's built in ide IDLE.

First, create a a turbo.me file and open it in a text editor. Begin the file with the meta data section:

```
###################################
# Meta tags
###################################

# User friendly title which will be displayed on the hub
meta title="Python IDLE"

# Namespace should be your username or organization (https://turbo.net/hub/namespace/name)
meta namespace="python"
meta name="pythonidle"

# Version of the application
meta release="3.7.3"
```

Include the base image by using the `layer` [command](/docs/reference/turboscript/layer):

```
###################################
# Pull dependency images
###################################

layer python/python:3.7.3
```

Finally, set the startup file to the start menu `.lnk` used by Python to launch IDLE:

```
###################################
# Startup File
###################################

startup file ("c:\ProgramData\Microsoft\Windows\Start Menu\Programs\Python 3.7\IDLE (Python 3.7 32-bit).lnk")
```

Run `turbo build turbo.me` to build the image. Try it out using `turbo try python/pythonidle:3.7.3`.

See the [TurboScript](/docs/reference/turboscript) reference page for advanced details. 

### Customizing Layer Using TurboScript

In the previous example we simply set the startup file from the base image to create a layer that behaved in a different way. If the user wanted to change files within the base image in the layer, it is achievable by using TurboScript `copy` [command](/docs/reference/turboscript#layer).

Lets say the user wants to change the default working directory for the Python IDLE layer, so that the application's open/save dialogs will look into the T: (TurboDrive) drive. A solution will be to change the lnk file's `Start in` field. We must edit this file and extract it for rebuilding.

This can be achieved by starting a python container and manually editing the lnk file using Windows File Explorer:

1. `turbo run --isolate=merge-user --startup-file=explorer.exe python/python:3.7.3`
2. Navigate to `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Python 3.7`
3. Right click on the file `IDLE (Python 3.7 32-bit).lnk`
4. Edit the Start in to T:\, or any other folder of your choice.
5. Open another instance of File Explorer, this will be outside of the Turbo Virtual Machine.
6. Copy the `IDLE (Python 3.7 32-bit).lnk` you just edited using the virtual File Explorer instance, and paste it to the native File Explorer folder where you've created the turbo.me file.
7. Close the virtual File Explorer to shutdown the container. If the container does not shutdown, press ctrl+c in the command line to force kill.

Next we modify the TurboScript to replace the startup file with the modifed file:

```
###################################
# Startup File
###################################

copy "IDLE (Python 3.7 32-bit).lnk" "c:\ProgramData\Microsoft\Windows\Start Menu\Programs\Python 3.7\IDLE (Python 3.7 32-bit).lnk"
startup file ("c:\ProgramData\Microsoft\Windows\Start Menu\Programs\Python 3.7\IDLE (Python 3.7 32-bit).lnk")
```

Run `turbo build --overwrite turbo.me` to rebuild the image. This time, `turbo try python/pythonidle:3.7.3` should launch Python IDLE with the working directory set to the specified directory.
