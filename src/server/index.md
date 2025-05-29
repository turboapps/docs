# Turbo Server

::: tip What you'll learn
- What Turbo Server is and its key benefits
- Server architecture and components
- Deployment options and supported platforms
:::

## Overview

Turbo Server is an enterprise-grade application virtualization platform that revolutionizes how applications are delivered to end users. It enables instant access to virtualized applications through:
- Web browsers and portals
- Desktop clients (Windows, MacOS)

Unlike traditional application deployment methods, Turbo Server eliminates common hurdles:
- No application installation required
- No system reboots needed
- No administrative privileges necessary
- No complex setup procedures

## Server Deployment

Turbo Server is designed for on-premises deployment, providing:
- Complete control over your environment
- Integration with existing infrastructure
- Enterprise-grade security and management
- [Detailed setup guide](/server/setup-and-deployment/deploying-on-premises)

## Architecture

There are four major server roles in a Turbo Server deployment:

- The **Hub Server** stores all virtualized applications and user session data. The Hub runs in your on-premises environment and can share applications between different Hub servers in your organization.

- The **Portal Server** hosts the web portal where users can log in to view and launch applications, open files, and manage their resources. A portal server also provides API services allowing other client types to interact with the Turbo environment.

- One or more **Application Servers** run virtualized applications and stream sessions to clients. A typical deployment uses multiple application servers in a _pool_ to handle load volumes and provide redundancy. Application servers can be hosted on-premises.

- The **Broker Service** manages application execution in the server pool and routes client requests to the appropriate servers.

If Turbo is used to deliver applications to endpoints or third-party streaming products, only the Hub Server or a standard file server is required.

### Network Diagram

![Turbo Network Diagram (Basic)](/images/turbo_network_diagram__basic_.png)

## Technology

### Application Streaming

Turbo Application Server enables virtualized applications to run on application servers while streaming the interface to client machines.

Native clients are available for Windows and Mac. Web browsers can access applications through RDP streaming using HTML5 technology.

Using application virtualization on the application servers allows for increased user density and less maintenance than traditional remote desktop solutions.

### Features

Turbo Server enables you to accomplish the following goals:

- Host virtualized applications on the web. Stream applications from the Turbo Server portal, custom sites, or third-party portals like Microsoft SharePoint, IBM WebSphere, and Novell Teaming.

- Provide your organization with a single access point to your application portfolio. Instead of installing software on each desktop, publish applications to the Turbo Server portal for immediate access with full functionality.

- Launch applications faster over the Internet and intranets. Applications stream instantly without downloads. Turbo streaming uses standard web protocols without special ports.

- Empower a mobile workforce. Virtualized applications require no installation or administrative privileges, meaning they can run anywhere, even on secure, locked-down desktops like airport and hotel kiosks.

- Run multiple versions of applications side-by-side without conflicts. Applications run in isolated environments, avoiding conflicts and dependency issues common with installed software.

- Migrate with confidence to Microsoft Windows 11 or Windows 10. Turbo enables you to run legacy applications as they stand on newer operating systems, including Microsoft Windows 7 and 8/8.1, without the need to recode, retest, or reinstall.

### Supported Platforms

Turbo Server is compatible with the following platforms:

- Microsoft Windows Server 2022
- Microsoft Windows Server 2019
- Microsoft Windows Server 2016
- Microsoft Windows Server 2012 R2
- Microsoft Windows 11 Enterprise multi-session (Azure)
- Microsoft Windows 10 Enterprise multi-session (Azure)

Turbo Server supports x64 (64-bit) processor architectures.

End users can access Turbo Server from Microsoft Windows 11, Microsoft Windows 10, Microsoft Windows 8.1, Microsoft Windows 8, and Microsoft Windows 7 platforms. Turbo Portal Server supports Microsoft Edge, Chrome, Safari, Firefox, Opera, and other HTML5-compliant browsers.

**Note:** Internet Explorer 11 is partially supported by the server administration site and is not supported by the Portal dashboard. If you are experiencing problems with Internet Explorer 11 on the sever administration site, be sure to disable compatibility mode. This feature is enabled automatically for intranet sites and serves to emulate Internet Explorer 7 which is not supported by the administration site.
