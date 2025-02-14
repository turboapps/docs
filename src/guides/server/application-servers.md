# Application Server Deployment

Application servers enable browser-based and native streaming access to your virtualized applications. They extend Turbo Server's capabilities by:
- Providing cross-platform access through HTML5 browsers
- Supporting native Windows streaming client
- Enabling remote application execution
- Centralizing application management

This guide covers deploying application servers as part of your Turbo Server infrastructure.

::: tip What you'll learn
- Application server prerequisites
- Integration with existing infrastructure
- Deployment options and configurations
- Management and monitoring
:::

## Prerequisites

Before deploying application servers, ensure you have:

### Existing Turbo Infrastructure
- Turbo Server installed and configured
- Hub server set up and running
- Workspaces configured with applications
- Network connectivity between servers

### Server Requirements
- Windows Server 2016 or later
- Service account with local administrator rights
- Network access to Hub/Portal servers

For detailed requirements, see [Server Prerequisites](/server/setup-and-deployment/prerequisites.md).

## Integration with Turbo Infrastructure

Application servers work as part of your Turbo Server infrastructure to enable streaming access to applications:

### Hub Integration
- Pulls application images from Hub repository
- Maintains local cache of frequently used applications
- Syncs with Hub for application updates
- Uses Hub authentication and permissions

### Workspace Integration
- Respects workspace access controls
- Enforces workspace policies and settings
- Provides streaming access to workspace applications
- Maintains user session state

### Portal Integration
- Handles user authentication
- Manages application launch requests
- Routes users to available application servers
- Provides HTML5 browser access

## Deployment Options

Application servers can be deployed in several configurations to meet your needs:

### Single Server
- All server roles on one machine
- Suitable for testing and small deployments
- See [On-Premises Deployment](/server/setup-and-deployment/deploying-on-premises.md)

### External Application Server
- Separate application server(s) from Hub/Portal
- Improved scalability and performance
- Load balancing support
- See [External Application Server](/server/setup-and-deployment/deploying-external-application-server.md)

### Cloud Deployment
- Deploy in Azure or other cloud platforms
- Elastic scaling capabilities
- Geographic distribution
- See [Azure Deployment](/server/setup-and-deployment/deploying-to-azure.md)

## Configuration

### Infrastructure Connection
- Configure connection to Hub server
- Set up Portal communication
- Enable workspace access
- See [External Application Server](/server/setup-and-deployment/deploying-external-application-server.md)

### Network Configuration
- Required ports and protocols
- Load balancer setup
- SSL certificates
- See [Network and Load Balancing](/server/network-and-load-balancing.md)

### Cache Configuration
- Local image cache location
- Cache size limits
- Update frequency
- See [Server Optimization](/server/optimization.md)

### Session Management
- User session limits
- Resource allocation
- Connection settings
- See [Server Monitoring](/server/monitoring.md)
