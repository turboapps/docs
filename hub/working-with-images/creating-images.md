## Creating Images

There are four ways to create an image:

1. Commit a container
2. Automatically create with a build script
3. Build images from XAPPL configuration files created with Turbo Studio
4. Import and convert various file types to images

#### Commit a Container

```
# Before committing a container check that it is stopped
> turbo containers

# Then create a new image from the container
> turbo commit <container-id> <image-name>
```

See a more detailed example [here](../../studio/working-with-containers/containers.html).

#### Automatic Builds

You can automatically build images using a TurboScript, which is a set of instructions that recreate the steps of configuring a container. See more information on [TurboScript](../../reference/turboscript/turboscript.html) verbage and syntax.

```
# Example script to automatically build a 7-Zip image

# Pull dependency images
layer gnu/wget

# Prepare environmnet
cmd mkdir c:\7zip

# Download installation media
workdir C:\7zip
cmd wget http://downloads.sourceforge.net/sevenzip/7z920.exe

# Install 7-Zip
cmd 7z920.exe /S /D=C:\7zip
```

Save the script as a .me file and then use `turbo build` command:

```
# Build the script and specify a name for the new image
> turbo build -n=7-zip:9.20 C:\path\to\build.me

# New image is now saved in the local registry
> turbo images

Name   Tag   ID            Created               Size
7-zip  9.20  95sdf1245239  8/18/2014 2:21:32 PM  25.4MB
```

#### Building from a XAPPL File

XAPPL files are static configuration files originally created using Turbo Studio that specify the files, registry keys, and virtual machine settings for an image. The command-line interface can also build images based on XAPPL configuration files using `turbo build` command.

```
# Build an image and specify a name
> turbo build -n=firefox:30 C:\path\to\firefox30.xappl
```

#### Import

If you have an existing image (file type `.svm`) on your local machine or a network drive (perhaps built with Turbo Studio or a legacy version of Turbo Studio), you can import it to your local registry.

```
# Specify the new name, file type, and path to the image
> turbo import -n=newimage svm C:\path\to\image.svm
```

If the image is not explicitly named, its ID will be used as a default.

The `import` command also supports building from 2 external file types:

1. Microsoft Software Installer (`.msi`)
2. ThinApp Configuration (`package.ini`)

Use the appropriate file type parameter:

```
# MSI
> turbo import msi <path to .msi>

# ThinApp configuration
> turbo import thinapp <path to package.ini> 
```

### Forking, Renaming, and Tagging

Images can be forked using the `turbo fork` command. This creates a link to the specified image with a new name and tag. It does not affect the original image.

```
# Pull an image
> turbo pull account/image

# Check the image
> turbo images

Name            Tag  ID            Created               Size
account/image        14wed2165141  8/18/2014 1:55:23 PM  1.9MB

# Fork to a new image name and tag
> turbo fork account/image tester/test1:1.0

# New image is added
> turbo images

Name            Tag  ID            Created               Size
account/image        14wed2165141  8/18/2014 1:55:23 PM  1.9MB
tester/test1    1.0  14wed2165141  8/18/2014 1:55:23 PM  1.9MB
```

The `turbo tag` command can also retag images.

```
# Specify the image you want to tag and the new tag
> turbo tag tester/test1:1.0 2.0

# Check the tag
> turbo images

Name            Tag  ID            Created               Size
account/image        14wed2165141  8/18/2014 1:55:23 PM  1.9MB
tester/test1    2.0  14wed2165141  8/18/2014 1:55:23 PM  1.9MB
```

### Push to a Remote Repository

Images in a local registry can be copied to a remote repository on the  [Turbo.net Hub](../../hub/overview/hub.html) or an on-premises [Turbo Server](../../server/overview/overview.html) with the `turbo push` command. Images pushed to a Turbo Server can be made available to your team members and end-users.

```
# Specify the image you want to push
> turbo push sample

# Or push to a specific namespace and tag
> turbo push turbotest/sample:latest
```

If unspecified, the image will be pushed to the logged-in user's namespace with the tag head.

Images pushed to the Turbo.net Hub are private by default. For more information on sharing images with your enterprise, see [Turbo Server](../../server/overview/overview.html).

See more information on [using the hub](../../hub/overview/hub.html).
