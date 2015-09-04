### .NET

In this tutorial, we'll cover how to containerize a .NET application so that it can run on any Windows computer, regardless of the natively-installed version of .NET. We'll then walk through how to integrate Turbo into MSBuild to create an image as part of a standard build process. 

We'll be containerizing a simple [OWIN](http://owin.org/) server using a SpoonScript. 

All source code for this example is available on [Github](https://github.com/matt-black2/SimpleOwinServer). 

**Topics Covered**

- Automated image creation
- Integrating Turbo into MSBuild

#### Build the Image

For this project, we'll need .NET 4.0. To pull the .NET 4 image, run the following command: 

```
> turbo pull microsoft/dotnet:4.0
```

To build the image, we'll construct a SpoonScript. The script should take the compiled Server executable, along with any DLLs, copy them into a new container, and build an image from this container. Below is the **turbo.me** file for the example project used in this tutorial. 

Begin by creating an empty text file named **turbo.me** in the project's root directory.

```
# Should use the relevant version of .NET
layer microsoft/dotnet:4.0.3

# Make a new directory in the container for build outputs
cmd mkdir C:\server

# Copy files from build output 
cmd robocopy %CD%\bin\Release C:\server

# Set the startup file for the image to the executable
boot file %CD%\OwinHelloWorld.exe
```

#### Integrate with MSBuild

The Turbo command-line interface is accessible from any command prompt on the installed system and can be integrated into MSBuild or any other build system just like a native Windows utility. 

In this section, we'll show you how you can set up Turbo to automatically rebuild a project's image each time your project is rebuilt. In this tutorial, we'll be using Visual Studio/MSBuild, though similar principles could be applied to any other IDE or build system. 

The easiest way to integrate with Visual Studio/MSBuild is to add a **Post-build event** to your build. 

To add a Post-build event, right-click on your project in Visual Studio and select **Build Events** from the left-hand menu. 

In the **Post-build event command line** box, add the line: 

```
turbo build -n=$(SolutionName) $(SolutionDir)\turbo.me
```

**Note**: For solutions with multiple projects, we recommend only triggering a post-build event for the last project in the build chain. This may require customizing your SpoonScript to also pull in the build outputs from these other projects. 