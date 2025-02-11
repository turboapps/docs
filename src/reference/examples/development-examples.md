# Development Examples

This guide provides practical examples of using Turbo with different development frameworks and scenarios.

::: tip What you'll learn
- How to containerize web applications
- Working with .NET applications
- Java application deployment
- Best practices for development workflows
:::

## Web Applications

### ASP.NET Example

Create a containerized ASP.NET application:

```bash
# Create container with .NET, ASP.NET, and git
turbo run microsoft/dotnet,microsoft/aspnet --using=git/git

# Clone sample application
(container) > cd c:\
(container) > git clone https://github.com/turboapps/samples

# Start IIS Express
(container) > start "MiniBlog" "C:\Program Files (x86)\IIS Express\iisexpress.exe" /path:C:\samples\aspnet-MiniBlog\Website
```

### Node.js Example

Create a containerized Node.js application:

```bash
# Create container with Node.js
turbo run node --using=git

# Clone and set up application
(container) > mkdir projects && cd projects
(container) > git clone https://github.com/redwire/airchat.git
(container) > cd airchat/Content
(container) > npm install

# Run the application
(container) > node app.js
```

## Framework Applications

### .NET Application Example

Using TurboScript to build a .NET application image:

```turbo
# turbo.me script
layer microsoft/dotnet:4.5

# Create application directory
cmd mkdir C:\myApp

# Copy application
cmd copy %CD%\samples\dotnet-helloworld\DotNetHelloWorld.exe c:\myApp

# Set startup file
startup file c:\myApp\DotNetHelloWorld.exe
```

Build the image:
```bash
turbo build --mount=%CD%\samples --name=dotNetApp --no-base turbo.me
```

### Java Application Example

Interactive Java application containerization:

```bash
# Create Java container
turbo new jdk:7 --detach --mount=%CD%\samples

# Set up application
(container) > mkdir C:\javaApp
(container) > xcopy /s samples\java-simple-webserver C:\javaApp
(container) > cd C:\javaApp

# Run the application
(container) > "%java_home%\bin\java.exe" -jar SimpleWebServer.jar
```

## Release Management

### Creating Releases

Mark specific versions as releases:

```bash
# Create a release version
turbo release myapp 1.0

# Push a specific release
turbo push myapp:1.0
```

## Server Applications

### Multiple Database Versions

Run multiple SQL Server versions simultaneously:

```bash
# Start two different SQL Server versions
turbo run sqlserver/sqlserver2012-express -d --route-block=tcp,udp -n=sql1
turbo run sqlserver/sqlserver2014-express -d --route-block=tcp,udp -n=sql2

# Connect management studio to both
turbo run sqlserver/ssms2012 -d --link=sql1:sql1 --link=sql2:sql2
```

### Port Mapping for Multiple Instances

Run multiple instances of the same server:

```bash
# Map different host ports to container port 2368
turbo new -d --route-add=tcp://2368:8080 ghost
turbo new -d --route-add=tcp://2368:8081 ghost
turbo new -d --route-add=tcp://2368:8082 ghost
```

### Database Layering

Separate database content from server application:

```bash
# Create container for database content
turbo new clean --no-run

# Copy database from existing container
turbo cp sourceContainer:c:\path\to\data targetContainer:c:\path\to\data

# Commit database layer
turbo commit targetContainer ghost-db

# Use database layer with server
turbo run ghost,ghost-db
```

## Best Practices

1. Use `--no-base` flag to reduce image size when appropriate
2. Leverage the layering system for dependencies
3. Use `--mount` for development workflows
4. Create releases for stable versions

::: tip Development Resources
For more detailed documentation:
- [Command Reference](../command-line/run.md)
- [TurboScript Guide](../turboscript/turboscript.md)
- [Deployment Options](../../deploying/overview/deploying.md)
:::
