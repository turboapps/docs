## Virtual Machine

### Container Engine

Unlike other virtualization solutions that require an entire copy of the host operating system, Turbo's container technology only emulates the features required to run application. Turbo containers have the same performance characteristics as native applications, but without any changes to system infrastructure.

The core of Turbo virtualization technology is the Turbo Virtual Machine (VM) kernel. Occupying just a few megabytes of storage and minimal performance overhead, Turbo VM is a lightweight implementation of core operating system APIs, including file system, registry, process, and threading subsystems.

Turbo VM is implemented entirely within the user-mode space, meaning Turbo applications can run without any driver installation or administrative privileges.

Turbo containers interact with a virtualized file system, registry, and process environment contained in the kernel, rather than directly with the host device operating system. Requests are handled internally within the virtualized environment, but can also be redirected or overridden based on your configuration.

### Technology Change Tracking

A key benefit to Turbo virtualization technology is the assurance of forward compatibility of applications as new version of the underlying operating system are released.

Turbo VM provides a translation layer that mitigates incompatibilities across diverse operating system variants, providing a consistent environment for the application and its dependencies.

Turbo conducts continuous testing against OS builds distributed on the **Windows Insider Track** and makes VM updates as required. These updates are periodically published to Turbo.net but are *not* pushed to users. Specific VM versions may be pulled and tested by application publishers prior to general availability.

Upon availability of a new **Windows Semi-Annual Channel** release, Turbo validates and publishes the corresponding VM update. Unless otherwise specified by the administrator, users are automatically updated at that time to the latest Turbo VM via the Turbo.net cloud.

### Layering

The Turbo VM is capable of running multiple images in a single virtual machine container by layering the file system and registry of each image.

This allow's users to create modular components that can be reused by larger projects. 

In this section, the term layer is used interchagibly with image, since a layer within a container is always created by an image.

#### Layering Scenarios

Layering is used to support [Turbo Studio components](/docs/reference/turbo-studio#runtimes-and-components). It is also used when [dependencies](/docs/reference/dependencies) are created.

#### Conflicts Between Layers

In most scenarios, image layers will define unique resources that do not conflict with each other. However, it is possible for the layers to have conflicting resources and settings.

If multiple layers define different isolation modes for the same path, the first layer that defines the isolation mode will be used. 

For example, if a container includes a **git** image with **c:\git** set to full isolation and a **nodejs** image with **c:\git** set to merge isolation, the conflict between the isolation settings will be resolved by the ordering of the layers.

The following command will create a container with the folder **c:\git** set to full isolation.

```
> turbo run git,nodejs
```

The following command will create a container with the folder **c:\git** set to merge isolation.

```
> turbo run nodejs,git
```