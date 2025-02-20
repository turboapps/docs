# Citrix Integration Guide

Turbo enables rapid deployment of virtualized applications on Citrix Virtual Apps (formerly XenApp), providing seamless integration with your existing Citrix infrastructure. This integration allows you to:
- Deploy applications without modifying base images
- Run multiple application versions side-by-side
- Eliminate server silos and consolidate infrastructure
- Automate application deployment and updates

::: tip What you'll learn
- How to install and configure Turbo on Citrix servers
- How to deploy applications using the command line interface
- How to integrate applications with Citrix Studio
- How to automate deployments using PowerShell scripts
- How to manage multiple application versions
:::

## Prerequisites

Before starting the Citrix integration with Turbo, ensure you have the following:

* **Turbo Account**: A Turbo account or organization subscription. Sign up at [Turbo.net](https://turbo.net/) if you haven't already.
* **Turbo Hub Server**: Set up a Turbo Hub Server. For optimal performance, it should be in the same network or region as your Citrix environment.
* **Turbo Client Installer**: The installer for Turbo Client. You can download it from [https://turbo.net/download](https://turbo.net/download).
* **Citrix Environment**: A functioning Citrix Virtual Apps (XenApp) environment.
* **Administrative Access**: Administrative access to Citrix servers.
* **Network Access**: Ensure network access from your Citrix servers to the Turbo.net Hub.

Once you have these prerequisites in place, you can proceed with the Citrix integration setup.

## Deployment Options

Turbo offers two methods for deploying applications to Citrix:

### Command Line Deployment
The [command line approach](command-line.md) provides direct control over application deployment and configuration. This method is ideal for:
- Manual deployment of specific applications
- Testing and validation
- Custom deployment configurations
- Small-scale deployments

### Automated Script Deployment
The [PowerShell scripts approach](scripts.md) enables automated deployment at scale. This method is recommended for:
- Large-scale deployments
- Automated application updates
- Standardized deployment processes
- Integration with existing automation workflows

## Example: Side-by-Side Application Deployment

One of the key benefits of Turbo on Citrix is the ability to run multiple application versions side-by-side on the same server. This eliminates the need for separate silos for different application versions.

![Citrix side-by-side IE](/images/citrix1.png)
*Example: Multiple versions of Internet Explorer with different Java versions running simultaneously*

## Next Steps

1. Start with the [command line guide](command-line.md) to understand basic deployment
2. Explore [automated deployment scripts](scripts.md) for scaling your deployment
3. Visit the [Turbo Hub](https://turbo.net/hub) to browse available applications

For additional support or custom deployment scenarios, contact [Turbo Support](https://turbo.net/support).
