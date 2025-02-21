# Citrix Virtual Desktops

Turbo applications can be deployed to Citrix Virtual Dekstops (VDI) using the following methods:
- Environments with Turbo Server can subscribe a Turbo Workspace on the Citrix Virtual Desktop
- Environments without Turbo Server can use the `turbo installi` command to install Turbo images on the Citrix Virtual Desktop

## Initial Setup

Install the Turbo Client on the Citrix Virtual Desktop base image using the [standalone client](/guides/desktop-client/standalone-client) or [offline client](/guides/desktop-client/offline-client) method.

::: tip Note
- A shared and locked-down network image repository is recommended for VDI environments
:::

## Subscribing applications from a Turbo Workspace

In an environment **with** a Turbo Server, subscribing a [Turbo Workspace](/guides/server/workspaces.html) is recommended for deploying applications to a Citrix Virtual Desktop.
Follow the [deploy using subscriptions](/guides/desktop-client/subscriptions.html#deploy-using-subscriptions) guide.

## Installing Turbo applications using the Turbo command line

In an environment **without** a Turbo Server, Turbo application desktop integration, including Start Menu, desktop shortcuts, and file associations, can be enabled with the `turbo installi` command.
The recommended approach in this scenario is to use a custom logon script running the Turbo commands from the [standalone client](/guides/desktop-client/standalone-client.html) guide.