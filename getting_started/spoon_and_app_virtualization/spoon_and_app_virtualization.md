## Turbo and App Virtualization

The Turbo platform includes both an **application virtualization** engine and a **containerization** engine. The Turbo container implementation is
built *on top of* the Turbo application virtualization (usually called "app virtualization") engine, but includes many additional components.

Turbo's traditional app virtualization tool is called **[Spoon Studio](/studio)**. As with other app virtualization systems, Spoon Studio
is based on a "static" model of virtual application configuration. Virtual machine state is created by capturing snapshots of a physical
(or virtual physical) system. This is similar to the processes used by other products in this category such as Microsoft App-V and VMware ThinApp.
A major disadvantage of this approach is the requirement to have a clean physical or virtual machine available to use as a target
for "sequencing" (App-V) or "capture" (ThinApp).

Turbo containers offer a "dynamic" configuration model -- the user is presented with a clean base image (or a base image
created by combining a set of pre-configured source images) and the user installs, configures, and runs applications within that
container. The container model offers a significant advantage over the traditional app virtualization model in that a clean machine is
not required to create virtual environments. Turbo containers are lightweight and can be quickly instantiated, committed, and shared to the
hub over the web.

In addition, containers support concepts such as commit, push/pull, and rollback, allowing container state to be captured at specific
points in time and shared with collaborators. Turbo also supports a powerful, unique primitive called *continuation*, which allows 
execution container state to be moved between devices. Continuation is linked to a *state identifier* which is a hash value computed from
the dynamic state of a container.

The Turbo containerization system includes:

* **Turbo Command Processor:** The `turbo` console command provides a command-line interface for standard container
  operations such as creating, stopping, committing, and pushing containers.
* **SpoonScript:** SpoonScript is a scripting language that supports automation of container creation and maintenance tasks. SpoonScript
  supports all command-line options plus higher order primitives such as **using**, the ability to modify 
* **SpoonDB:** SpoonDB is a deduplicated storage system optimized to support efficient storage, versioning, rollback, and 
  delta-based transactioning of container and image state. Turbo uses a novel differential synchronization protocol that supports rapid synchronization over wide area networks such as the Internet.
* **Turbo Hub:** The Turbo Hub is an online container repository that allows containers to be easily shared with collaborators. The Turbo
  Hub also provides container state synchronization, allowing continuation of container execution across different devices. (See the `continue`
  command for more information on continuation.)

In addition, the Spoon VM has been substantially enhanced to support the additional primitives required by the containerization engine.
Turbo's application compatibility footprint was expanded to provide support for additional server applications.

*How is Turbo different from App-V or ThinApp?*

Turbo provides an app virtualization engine and associated tooling, as do App-V and ThinApp. However, the underlying implementations
between the three systems are very different. For example, App-V uses device drivers (and therefore requires administrative privileges
on the desktop) and requires additional backend infrastructure such as Active Directory and SQL Server. ThinApp is a user mode
implementation but differs in many details impacting compatibility coverage and available delivery modes. Both App-V and ThinApp require
"sequencing" or "capture" of setups on a clean machine in order to create virtual environment packages.

Neither App-V nor ThinApp offer a containerization system supporting essential container primitives such as image storage,
versioning, rollback, network virtualization, or container linking. While app virtualization engines share some characteristics
in common with containers, such as the ability to run software in an isolated namespace from the host device, containerization requires
additional components such as the container storage system, command processor, scripting engine, and hub, as well as additional core app
virtualization engine capabilities to support dynamic configuration of application packages. Critically, neither App-V nor ThinApp
support the ability to install software within a container without requiring a "sequencing" or "capture" process on an external
operating system instance.

