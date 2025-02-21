# Citrix Integration Guide

Turbo enables rapid deployment of virtualized applications on Citrix Virtual Apps and Desktops (formerly XenApp), providing seamless integration with your existing Citrix infrastructure. This integration allows you to:
- Deploy applications without modifying base images
- Run multiple application versions side-by-side
- Eliminate server silos and consolidate infrastructure
- Automate application deployment and updates

::: tip What you'll learn
- How to install and configure Turbo on Citrix servers
- How to deploy applications using the command line interface
- How to integrate applications with Citrix Studio
- How to manage multiple application versions
:::

::: tip Prerequisites
- Citrix Virtual Apps and Desktops environment
- Administrative access to Citrix servers

:::

## Deployment Options

Turbo apps can be deployed to Citrix Virtual Apps and (Citrix Studio) and to Citrix Virtual Desktops

## Citrix Virtual Apps

Deploy Turbo images to [Citrix Virtual Apps](citrix-apps.md) using the following methods:
- Turbo applications can be added to Citrix Studio using the `turbo installi` or `turbo subscribe` commands.

## Citrix Virtual Desktops

Deploy Turbo images to [Citrix Virtual Desktops](citrix-desktops.md) using the following methods:
- Environments with Turbo Server can `turbo subscribe` a Turbo Workspace on the Citrix Virtual Desktop
- Environments without Turbo Server can use `turbo installi` commands in a custom login script to install Turbo images on Citrix Virtual Desktops

## Example: Side-by-Side Application Deployment

One of the key benefits of Turbo on Citrix is the ability to run multiple application versions side-by-side on the same server. This eliminates the need for separate silos for different application versions.

![Citrix side-by-side IE](/images/citrix1.png)
*Example: Multiple versions of Internet Explorer with different Java versions running simultaneously*

## Next Steps

1. Deploy Turbo images to [Citrix Virtual Apps](citrix-apps.md)
2. Deploy Turbo images to [Citrix Virtual Desktops](citrix-desktops.md)
3. Visit the [Turbo Hub](https://hub.turbo.net/hub) to browse available applications

For additional support or custom deployment scenarios, contact [Turbo Support](https://turbo.net/support).
