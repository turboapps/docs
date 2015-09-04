## Virtual Machine

**Layering**

The Spoon VM is capable of running multiple images in a single virtual machine container by layering the file system and registry of each image.

This allow's users to create modular components that can be reused by larger projects. 

In this section, the term layer is used interchagibly with image, since a layer within a container is always created by an image.

**Layering Scenarios**

Layering is used to support [Spoon Studio components](/docs/reference/turbo-studio#runtimes-and-components). It is also used when [dependencies](/docs/reference/dependencies) are created.

**Conflicts Between Layers**

In most scenarios, image layers will define unique resources that do not conflict with each other. However, it is possible for the layers to have conflicting resources and settings.

If multiple layers define different isolation modes for the same path, the first layer that defines the isolation mode will be used. 

For example, if a container includes a "git" image with **c:\git** set to full isolation and a "node" image with **c:\git** set to merge isolation, the conflict between the isolation settings will be resolved by the ordering of the layers.

The following command will create a container with the folder **c:\git** set to full isolation.

```
> turbo run git,node
```

The following command will create a container with the folder **c:\git** set to merge isolation.

```
> turbo run node,git
```