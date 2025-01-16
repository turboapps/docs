## Microsoft .NET Core

.NET Core is a free and open-source managed software framework for Windows, macOS and Linux. It allows you to build managed applications and deploy them across many different platforms. Below are the steps to create a custom .NET Core container image for use with your applications.

### Building

Download the **.NET Core Binaries** from [https://www.microsoft.com/net/download/dotnet-core/2.1](https://www.microsoft.com/net/download/dotnet-core/2.1). These instructions are the same whether you are producing a build for **x86** or **x64** versions of either **SDK** or **Runtime**. Select the variants required for your scenario.

Decompress the .NET Core .zip file to you application build working directory. For this example, we will assume that the working directory is **c:\dotnetcore-build** and our .NET Core files were unzipped to **c:\dotnetcore-build\dotnet-sdk-2.1.811-win-x64**.

Open Turbo Studio and save the empty configuration to **c:\dotnetcore-build\dotnetcore.xappl**. Set the **Startup File** to **@SYSTEM@\cmd.exe**, the **Project Type** to **Layer (.svm)**, and the **Output File** to **c:\dotnetcore-build\dotnetcore.svm**. Note, depending on your scenario and deployment method, your settings may vary.

Make sure that the **Copy added files to configuration folder** option is enabled (see the **Option** menu at the top-left corner of the Turbo Studio interface).

![Turbo Studio Copy Files Setting](https://hub.turbo.net/images/docs/copyfiles.png)

Then select **System Drive** in the **Filesystem** editor window. Click the **Add Folder** button and select **c:\dotnetcore-build\dotnet-sdk-2.1.811-win-x64**. This will add the folder to your configuration, copying the files to the **c:\dotnetcore-build\Files** directory.

![Turbo Studio .NET Core Filesystem](https://hub.turbo.net/images/docs/dotnetcorefs.png)

Next add two environment variables to the configuration. Add **PATH** in **WriteCopy** isolation mode with a value of **@SYSDRIVE@\dotnet-sdk-2.1.811-win-x64** (or whatever the installation path is in your container environment). This value will be added to the existing **PATH** value for applications that run inside the container. Also add **DOTNET_SKIP_FIRST_TIME_EXPERIENCE** in **Full** isolation mode with a value of **true**. This will make first runs execute much faster as unused components will not be pre-cached.

![Turbo Studio .NET Core Environment Variables](https://hub.turbo.net/images/docs/dotnetcoreenvvar.png)

Depending on where this image is deployed, the **Microsoft Visual C++ 2015 Redistributable Update 3** may be required. This can be added to your container environment from the Turbo.net hub with the **microsoft/vcredist:2015** image. For standalone executables, see the article on **Legacy Internet Explorer and Java** for an example of how to add a dependency from the Turbo.net hub.

Save your configuration and build the image.

### Testing

To test your new container image, first import into your local Turbo repository:

```
> turbo import svm c:\dotnetcore-build\dotnetcore.svm --name=dotnetcore
```

Create a new container with this image with the **new** command:

```
> turbo new dotnetcore
```

Start the .NET Core sample MVC website:

```
(container)> cd c:\dotnet-sdk-2.1.302-win-x64
(container)> dotnet new mvc
(container)> dotnet restore
(container)> dotnet publish

# start the webapp on http://localhost:5000
(container)> dotnet run

# note: this can fail with an error about 'Unable to start Kestrel' because a valid certificate was not found.
#       if so, follow their instructions and re-run:
(container)> dotnet dev-certs https
(container)> dotnet dev-certs https --trust
(container)> dotnet run

Using launch settings from C:\dotnet-sdk-2.1.302-win-x64\Properties\launchSettings.json...
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
      User profile is available. Using 'C:\Users\turbouser\AppData\Local\ASP.NET\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\dotnet-sdk-2.1.302-win-x64
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```
