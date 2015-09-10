## Turbo and Docker

Docker is a new containerization technology built on top of the `LXC` kernel container system, a component of the Linux OS. While there are some similarities between the Docker and Turbo platforms, there are also significant differences.

This section summarizes some of the substantial differences for those that are familiar with Docker.

### Platform

Turbo was designed for the Windows platform and its containerization system is built on top of the Turbo application virtualization engine. Docker was designed for use on Linux environments and is built on top of the LXC application virtualization system. Put another way, the Spoon VM plays the same role for Turbo containers as LXC does for Docker. In fact, LXC can be viewed as a type of application virtualization implementation.

Turbo **supports both desktop and server Windows applications**, and works on **all desktop and server editions of Windows** from Windows XP
forward. Turbo does not require modifications to the base operating system kernel and Turbo does not execute a parallel copy of the base
operating system.

For more information about the differences between application and OS virtualization, see the article [How Turbo is different from hardware virtualization](/docs/getting-started/what-is-turbo#how-does-it-work).

Via the Spoon VM, Turbo containers support many Windows-specific constructs, such as Windows Services, COM/DCOM components, named kernel object isolation, WinSxS side-by-side versioning, shell registration, clipboard data, and other mechanisms that do not directly apply to Linux operating systems. 

Turbo also provides a desktop client with many features (GUI tool to launch applications, file extension associations, Start Menu integration) that allow containerized applications to interact with the user in the same way as traditionally installed desktop applications. Turbo also provides a small browser plugin that allows users to launch and stream containerized applications directly from any web browser.

### Layering

Turbo containers are designed to operate in a *layered* virtual application engine architecture. Layers can be thought of as "transparent sheets" of virtual environment configuration that can be stacked on top of one another to build many distinct configurations out of discrete components.

For example, to build a container for a Java application that uses a MongoDB database, a Turbo user could combine a Java runtime layer with a MongoDB database layer, then stack the application code and content in an application layer on top of its dependency layers. Layers make it extremely easy to re-use shared components such as runtimes, databases, and plugins.

Layers can also be used to apply application configuration information. For example, one might have a layer that specifies the default homepage, favorites, and security settings for a browser. This can be applied on top of a base browser layer to impose those settings onto a non-customized browser environment.

Layers can be applied dynamically and programmatically, so you can present distinct application configurations to specific groups of users without rebuilding the base application container. Continuing the browser example, one might create a base browser layer with a particular configuration layer for the development team, then use the same base browser with a different configuration layer for the sales team.

Turbo layering also enables *partial rollback* during container builds via the `using` command. This is especially useful when an external tool is required *during* the build process, but is *not* desired in the ultimate container. For example:

    using git
	  // pull in content using git
	
	// (git content no longer present in the container)
	// use the content to complete container setup

In this code, the contents of the `git` container will *not* be present in the output container. By contrast, Docker does not distinguish between content that is imported for use only during the build process and content required by the application container at runtime.

#### Multi-base image support

Layering can be used in the `turbo.me` automated build script to build containers on top of *multiple* base images. For example, in TurboScript the following is valid:

    layer java, mongodb, redis

By contrast, Docker does *not* support creation of images from multiple base images. In other words, Turbo supports "multiple inheritance" through source layering, and "polymorphism" through post-layering.

### Continuation

In addition to images and containers, Turbo supports an additional abstraction level called a **state**. Unlike image and container identifiers, which are
arbitrary, a state is identified with a hash value that aggregates the state of all objects within the container at a specific point in time. States are
*volatile* in that they vary continuously as execution occurs in the underlying container, and are indepenent of commit points. By default, the Turbo
container engine captures state information at container startup and shutdown.

Turbo's unique `continue` command allows execution to be continued from a specified state identifier. Importantly, the state identifier encodes all
information about a container and, in particular, allows for continuation of container execution **across different devices**.

When a container is stopped or suspended, the Turbo container engine will report a state identifier for the container, such as `6aac21bf`. You can
then continue execution of the container from that state with the command:

    turbo continue 6aac21bf

and this command can be executed from **any device**, not necessarily the original device hosting the container. Continuation can be used with any
state, not necessarily the latest state, creating the effect of an inter-commit rollback; and multiple continuations can be executed from a single state,
allowing forking of execution, potentially across multiple devices.

### Isolation Modes

Unlike Docker, Turbo containers are *not* required to be completely isolated from the host device resources. Turbo can fully or partially isolate objects as needed at a fine granularity.

The Turbo `mount` command allows a specific path in a container to be mapped to a (possibly different) path in another container *or* on the
host device. This is extremely useful, for example, to allow cached data to be persisted across resets of an application container image.

At an even finer granularity, a Turbo **isolation mode** may be specified on a per-object basis. For example, it is possible to specify that one directory subtree should be fully isolated while another one is visible from the host device. Supported isolation modes include **Full**, **Merge**, **Hide**, and **Write Copy**.

For more information on isolation modes, please see the [Isolation Modes](/docs/building/working-with-turbo-studio#virtual-filesystem) section of this documentation.

### Networking

By default, all Turbo container ports are exposed on the host device network adapter, just as if the containerized application had been executed natively. If desired, all ports can be closed with a single command and then reopened
or remapped on an individual basis. Like Docker, Turbo supports mapping of TCP, UDP, and DNS, as well as container-level remapping and IPC linking.

Importantly, this contrasts with Docker, which *isolates* all ports by default. With Turbo, a server container will work by default on the host device (ports open) and requires a separate command to close or relink the ports. Closing ports may be desired for various reasons, such as minimizing the network surface area in production environments.

### Security Model

Docker relies on root access to the host device at two levels. First, the LXC/`libcontainer` containerization engine that Docker is built on is
implemented within the Linux kernel. Second, the Docker daemon itself runs with root privileges. Containers themselves are not run with root privileges
when used in accordance with recommended practices. The use of code with kernel or root privileges opens the possibility of "break out" into privileged
system resources.

By contrast, Turbo is designed to run entirely in user mode with no privileges. Turbo containerization inherits this ability from the user mode Turbo
app virtualization engine, which operates on top of (rather than within) the OS kernel. This approach has two critical advantages: Turbo can be used by unprivileged users on locked down desktops without elevation, improving accessibility and reducing administrative complexity; and, in the event of malware execution or a vulnerability in the Turbo implementation, the affected process does not have access to root privileges on the device.

### Toolchain

Like Docker, Turbo provides command-line interfaces (`turbo`) and a scripting language (**TurboScript**) for automating build processes. Turbo also provides a number of rich GUI- and web-based tools and services for building, configuring, and managing virtual environments.

**[Turbo Studio](/docs/building/working-with-turbo-studio)** provides a visual design environment and easy-to-use wizards for creating images. Turbo Studio also includes a [Desktop Scan](/docs/building/working-with-turbo-studio#desktop-scan) tool that automatically detects and captures settings for any applications that are locally installed on a desktop.

**[Spoon Server](http://turbo.net/server)** is an on-premises version of Turbo.net that	provides the same functionality in a behind-firewall environment. In addition, Spoon Server provides enterprise-specific such as a web application portal, Active Directory and LDAP integration, centralized management, user data synchronization, license management, and usage analytics.

Turbo also maintains an online database of validated application templates and images for thousands of popular software applications.

### Configuration

In addition to dynamic configuration via a console or script, Turbo also supports configuration via a static XML-based specification that declares the files, registry keys, environment variables, and other virtual machine states that will be presented to the container. 

To assist in building static configurations, Turbo offers a graphical **Turbo Studio** interface, as well as both a graphical- and command line-based *snapshot* configuration.

For more information on Turbo Studio and snapshot tools, see the [Building](/docs/building) section in this documentation.

### Streaming

Turbo, like Docker, supports the use of local containers and the ability to push and pull containers from a central
repository.

In addition, Turbo provides the ability to efficiently *stream* containers over the Internet. The Turbo system includes a predictive streaming engine to launch containers efficiently over wide area networks (WANs) without requiring the endpoint to download the entire VM image. Because many applications can be multiple gigabytes in size, this prevents a large startup latency for remote end users. Turbo predictive streaming uses statistical techniques to predict application resource access patterns based on profiles of previous user interactions. Turbo then adapts the stream data flow based on predictions of subsequent required resources.

Turbo provides a fully hosted application hosting service at [Turbo.net](http://turbo.net), which hosts application streams, provides application and user portals, automatically synchronizes user settings and application state to the cloud, and provides file synchronization and shared folders.For more information, visit the [Turbo.net homepage](http://turbo.net).

### Support

Turbo provides commercial support for all official Turbo repositories. Professional services are also available for organizations
needing assistance with virtualizing specific applications or building customized solutions on top of Turbo.

Turbo technology is integrated into select third-party enterprise application delivery platforms, including [Novell ZENworks Suite](https://www.novell.com/products/zenworks/zenworks-suite/), [Novell ZENworks Application Virtualization](http://novell.com/zav), and [LANDesk Management Suite](http://landesk.com). Novell and LANDesk provide commercial support for Turbo when purchased via these channels.
