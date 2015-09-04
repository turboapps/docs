### Virtual Machine

The runtime environment of Turbo containers is supplied by the **Spoon Virtual Machine** or SVM, a lightweight implementation of core operating system APIs, including the filesystem, registry, process, and threading subsystems. Applications executing within a container interact with a virtualized filesystem, registry, and process environment supplied by the SVM, rather than directly with the host machine.

The virtualization engine handles requests within the container internally or routes requests to the host device filesystem and registry if appropriate. It performs these actions according to the application configuration defined when creating the container, see the [Building](/docs/building) section for more details on creating a container.

In addition to the virtual filesystem and registry, the SVM supports virtualization of system services such as web servers and local database engines, component object model (COM) servers, and network services such as DNS. The SVM also supports advanced operating system features including kernel object namespace isolation and side-by-side (SxS) manifests.

The Turbo virtual microkernel, the engine of the SVM, has been optimized to produce negligible storage and runtime performance overhead. Applications running within a container will run with about the same performance characteristics as if it were running on the host system.