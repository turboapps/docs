# Enterprise Deployment with Turbo Server

This section covers enterprise deployment of virtual applications using Turbo Server, providing centralized management and automated deployment through workspaces.

::: tip What you'll learn
- Turbo Server overview and capabilities
- Hub and workspace management
- Application deployment and configuration
- Client subscription setup
:::

## Overview

Turbo Server provides enterprise-grade deployment capabilities:

### Hub Server
- Central repository for virtual applications
- Version management and control
- Access control and permissions
- Federation capabilities

### Workspace Management
- Organize applications by team or function
- Configure access controls and permissions
- Manage application settings
- Define update policies
- Monitor usage analytics

### Application Servers
- Host running applications in the cloud
- Enable non-Windows clients to run virtual applications
- Browser-based access through HTML5
- Load balancing and scaling

## Key Features

### Application Management
- Version control
- Update management
- License tracking
- Usage monitoring

### User Management
- Active Directory integration
- SAML authentication
- Role-based access
- Group policies

### Workspace Control
- Application grouping
- Access permissions
- Settings management
- Update policies

### Monitoring
- Usage analytics
- Performance metrics
- Health monitoring
- Audit logging

## Getting Started

1. Review [system requirements](/server/setup-and-deployment/deploying-on-premises.md)
2. Configure the [Hub Server](/server/administration/hub.md)
3. Set up [workspaces](/server/administration/workspaces.md)
4. Deploy to clients through [subscriptions](subscriptions.md)

## Administration

### Hub Management
Access the Hub administration page to:
- Manage repositories
- Configure access controls
- Set up federation
- Monitor usage

For details, see [Hub Administration](/server/administration/hub.md).

### Workspace Management
Use the Workspace administration page to:
- Add and configure applications
- Set up user permissions
- Configure desktop integration
- Manage application settings

For details, see [Workspace Administration](/server/administration/workspaces.md).

### Application Configuration
Configure applications through the web interface:
- Launch settings
- Isolation options
- Network settings
- Desktop integration
- License management

For details, see [Application Settings](/server/administration/workspaces.md#workspace-applications).

## Client Deployment

### Subscription Setup
1. Configure the Turbo Client:
   ```bash
   # Configure server domain
   turbo config --domain=hub.company.com
   ```

2. Subscribe to workspace:
   ```bash
   # Subscribe and register applications
   turbo subscribe myworkspace --register

   # Subscribe for all users
   turbo subscribe myworkspace --register --all-users
   ```

### Desktop Integration
- Start menu shortcuts
- File associations
- URL handlers
- Shell extensions

Configure through [Workspace Shell Integration](/server/administration/workspaces.md#shell-integration).

## Next Steps

- [Hub Setup](/server/administration/hub.md) - Configure your Hub Server
- [Workspaces](/server/administration/workspaces.md) - Create and manage workspaces
- [Subscriptions](subscriptions.md) - Deploy workspaces to clients
