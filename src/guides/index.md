# Deployment Guides

This section provides comprehensive guides for deploying virtualized applications using Turbo technology. Whether you're deploying standalone executables, managing desktop installations, or setting up enterprise-wide workspaces, these guides will help you choose and implement the right deployment strategy.

## Overview

Turbo offers multiple deployment methods that build upon each other, allowing you to start simple and add capabilities as your needs grow:

### Standalone Executables
The simplest deployment method uses standalone executables (EXE/MSI) built with Turbo Studio. These self-contained packages can be distributed through existing software deployment tools without requiring additional infrastructure. This approach is ideal for organizations with established software distribution systems or when offline deployment is required. See our guides for deploying [standalone EXE applications](/guides/deploy-using-exe) and [MSI installers](/guides/deploy-using-msi), or the [Turbo Studio documentation](/studio/working-with-turbo-studio/) for details on building standalone executables.

### Desktop Client Deployment
For more control over application delivery and updates, use the Turbo Desktop Client to deploy applications directly to end-user machines. This method provides direct management of application images, flexible desktop integration, and support for both online and offline environments. The [Desktop Client deployment guide](/guides/desktop-client/) walks through setting up repositories, managing images, and configuring applications for end-user access.

### Enterprise Server Deployment
For large-scale deployments, Turbo Server provides centralized management and automated delivery. The server handles workspace organization, subscription management, and application streaming. It adds enterprise features like usage analytics, security controls, and automated updates. The [Server deployment guide](/guides/server/) covers installation, configuration, and management of the Turbo Server environment.

Organizations deploying Turbo Server can choose between two primary delivery methods:

**Client Subscription** provides the richest desktop integration experience, ideal for managed environments like corporate workstations, university computer labs, or VDI infrastructure. Users get seamless access to applications with full desktop integration and offline capabilities.

**Portal Access** is perfect for unmanaged devices and BYOD scenarios like personal devices, remote work, or contractor access. Users can access applications through any web browser using the HTML5 client, or optionally install them locally on Windows devices. The [Introduction to Using Portal](/guides/intro-to-portal) guide helps users get started with this flexible access method.

## Platform Integration

Turbo integrates seamlessly with enterprise platforms to enhance existing deployment workflows. Our integration guides cover major virtual desktop and management platforms:

### Virtual Desktop Infrastructure
Deliver Turbo applications through your VDI platform using our guides for [Citrix Virtual Apps](/guides/integrations/citrix.html), [Azure Virtual Desktop](/guides/integrations/azure-virtual-desktop), and [AWS AppStream](/guides/integrations/aws-appstream). These integrations enable consistent application delivery across virtual desktop environments.

### Management Platforms
Deploy and manage Turbo applications through enterprise management tools using our guides for [Microsoft Intune](/guides/integrations/intune) and [System Center Configuration Manager](/guides/integrations/system-center). These integrations help incorporate Turbo into your existing management workflows.

## Choosing Your Approach

When selecting a deployment method, consider your organization's needs:

**Standalone Executables** work best when you need simple offline deployment through existing distribution tools. They're ideal for individual applications or environments with established software deployment processes.

**Desktop Client** deployment provides more control and flexibility. It's perfect for development environments, custom repositories, and scenarios requiring granular control over application settings. This method balances simplicity with management capabilities.

**Enterprise Server** deployment suits large organizations needing centralized management, automated updates, and detailed analytics. It provides the most comprehensive feature set but requires additional infrastructure.

For most organizations, we recommend starting with Desktop Client deployment to gain familiarity with Turbo's virtualization capabilities. As your needs grow, you can transition to Enterprise Server deployment for additional management features and automation. When deploying Turbo Server, consider your end-user environment to choose between client subscription for managed devices or portal access for BYOD scenarios.
