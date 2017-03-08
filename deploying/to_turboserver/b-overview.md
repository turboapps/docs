## TurboServer

TurboServer is an application deployment tool that enables you to launch applications instantly from websites, portals and client desktops. Unlike traditional deployment methods, applications streamed from TurboServer do not require download, installation, rebooting, administrative privileges, or separate setup steps. Applications hosted on TurboServer launch after less than ten percent of the application is transferred. TurboServer's speed and efficiency are possible thanks to two technologies: Virtualization and Predictive Streaming.

#### Technology

##### Turbo Containers

Unlike other virtualization solutions that require an entire copy of the host operating system, Turbo's container technology only emulates the features required to run application. Turbo containers have the same performance characteristics as native applications, but without any changes to system infrastructure.

The core of Turbo Virtualization Technology is the Turbo Virtual Machine (VM) kernel. Occupying less than a megabyte of storage and almost zero performance overhead, Turbo kernel is a lightweight implementation of core operating system APIs, including file system, registry, process, and threading subsystems. Turbo kernel is implemented entirely within the user-mode space, meaning Turbo applications can run without any driver installation or administrative privileges.

Turbo containers interact with a virtualized file system, registry, and process environment contained in the kernel, rather than directly with the host device operating system. Requests are handled internally within the virtualized environment, but can also be redirected or overridden based on your configuration.

##### Turbo Streaming

Turbo's unique predictive streaming technology enables you to launch containers five to twenty times faster than traditional downloadable applications.

Turbo enables you to break down containers into smaller functional and data units. Turbo then identifies a prefetch (the application's vital data components for launch) and transfers the units first, enabling deployment when only a fraction of the total application is loaded. Once the prefetch is transferred, the application launches immediately. This occurs without any streaming servers or specialized protocols.

You can register applications to the local device after transfers complete. Registration moves content to a permanent location on your local device (making it available offline), and creates all application related Start Menu icons, Desktop shortcuts, and file associations.

#### Features

TurboServer enables you to accomplish the following goals:

- Host containers on the web. You can stream Turbo containers from the TurboServer portal site, custom external sites via HTML, or third-party collaborative web portals such as Microsoft SharePoint, IBM WebSphere, and Novell Teaming.

- Provide your organization with a single access point to your application portfolio. Instead of moving desktop-to-desktop to upgrade or install software, you can publish an application to TurboServer's portal site; this provides licensed end-users with immediate access and full functionality.

- Launch applications faster over the Internet and intranets. Turbo streamed applications launch five to twenty times faster than traditional downloadable applications. Turbo Stream does not require any special ports or proprietary protocols.

- Empower a mobile workforce. Turbo containers require no installation or administrative privileges, meaning they can launch from anywhere, even on secure, locked-down desktops such as airport and hotel kiosks.

- Run multiple versions of applications side-by-side without conflicts or dependencies. Turbo containers run in isolated sandboxed environments. This enables you to avoid conflicts and dependency issues associated with natively-installed applications.

- Migrate with confidence to Microsoft Windows 8. Turbo enables you to run legacy applications as they stand on newer operating systems, including Microsoft Windows 7 and 8/8.1, without the need to recode, retest, or reinstall.

#### Supported Platforms

TurboServer is compatible with the following platforms:

- Microsoft Windows Server 2003 (except R2)
- Microsoft Windows Vista (all editions)
- Microsoft Windows Server 2008 (all editions)
- Microsoft Windows 2008 R2
- Microsoft Windows Server 2012
- Microsoft Windows Server 2012 R2
- Microsoft Windows 7 (all editions)
- Microsoft Windows 8
- Microsoft Windows 8.1

TurboServer supports x86 (32-bit) and x64 (64-bit) processor architectures. End-users can access TurboServer from Microsoft XP, Microsoft Windows 2003, Microsoft Windows Vista, Microsoft Windows 7, Microsoft Windows 8, and Microsoft Windows 8.1 platforms. TurboServer supports Microsoft Internet Explorer, Firefox, Safari, Google Chrome, Opera, and all other browsers built with the Gecko API.

**Note:** Versions of Internet Explorer prior to Internet Explorer 8 are not supported. If you are accessing the Portal Site with a newer version of Internet Explorer, but experiencing problems, be sure to disable compatibility mode. This feature is enabled automatically for intranet sites and serves to emulate Internet Explorer 7 which is not supported by the Portal Site.