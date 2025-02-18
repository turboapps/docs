# Turbo Server Setup Guide

This comprehensive guide walks you through the complete process of setting up a Turbo Server environment, from initial planning to post-installation configuration. Turbo Server enables centralized management and deployment of virtual applications through a self-hosted infrastructure.

::: tip What you'll learn
- How to plan your Turbo Server deployment
- Step-by-step installation process
- Essential post-installation configuration
- Best practices and common pitfalls to avoid
:::

## Planning Your Deployment

### Understanding Server Roles

Turbo Server consists of three main roles:

1. **Hub Server**: Central repository for applications and user data
   - Stores application images and user session data
   - Handles application versioning and updates
   - Manages licensing and access controls

2. **Portal Server**: User-facing web interface
   - Provides web-based application access
   - Handles user authentication
   - Manages user sessions and connections

3. **Application Server**: Handles application streaming
   - Executes virtualized applications
   - Streams application interfaces to users
   - Manages local resources and performance

### Sizing Your Deployment

Choose your deployment size based on your needs:

#### Demo/Testing Environment
- **Configuration**: All roles on one machine (Standalone installation)
- **Requirements**: 
  - 4+ CPU cores
  - 16GB+ RAM
  - Windows Server 2012R2 or newer

#### Small Production (Up to 100 Users)
- **Configuration**: Hub + Portal on one server, separate Application server(s)
- **Requirements**:
  - Hub/Portal Server:
    - 4+ CPU cores
    - 16GB+ RAM
    - 500GB+ storage
  - Application Server:
    - 4+ CPU cores per 20 concurrent users
    - 16GB+ RAM
    - 200GB+ storage

#### Large Production (100+ Users)
- **Configuration**: Separate servers for each role
- **Requirements**:
  - Hub Server:
    - 8+ CPU cores
    - 32GB+ RAM
    - 1TB+ storage
  - Portal Server(s):
    - 4+ CPU cores
    - 16GB+ RAM per server
    - One server per 200 concurrent users
  - Application Server(s):
    - 4+ CPU cores per 20 concurrent users
    - 16GB+ RAM per server
    - 200GB+ storage per server

## Prerequisites

Before beginning the installation:

- Review the detailed [system requirements](/server/setup-and-deployment/prerequisites.md)
- Ensure you have administrator access to the target system
- Prepare your network environment:
  - Configure required ports:
    - Hub: 80 (optional), 443
    - Portal: 80 (optional), 443
    - Application Server: 80, 443, 3389, 5850
  - Prepare SSL certificates for Portal/Hub
  - Set up SQL Server instance (or Azure SQL)
  - Create service account with appropriate permissions

## Installation Process

### Pre-Installation Steps

1. Download the [Turbo Server installer](https://turbo.net/download)

2. Prepare the service account:
   - Create a Windows account for Turbo services
   - Ensure password doesn't expire
   - For domain environments, use a domain account
   - For Application Servers, add to Administrators group

3. Configure the database:
   - Set up SQL Server instance
   - Create empty databases for Configuration and Analytics
   - Grant service account db_owner permissions

### Choose Your Deployment Method

Select and follow the appropriate guide based on your environment:

- [On-premises deployment](/server/setup-and-deployment/deploying-on-premises.md) for local infrastructure
  - Complete control over hardware and configuration
  - Suitable for environments with existing infrastructure
  - Requires manual server provisioning and maintenance

- [Azure deployment](/server/setup-and-deployment/deploying-to-azure.md) for cloud hosting
  - Simplified scaling and management
  - Built-in high availability options
  - Reduced infrastructure maintenance

The installation guides will walk you through:
1. Server software installation
2. Initial configuration:
   - License activation
   - Role selection
   - Database setup
   - Service account configuration
   - Web service URLs
3. Basic connectivity testing

## Post-Installation Configuration

### 1. Verify Installation

After installation, verify your setup by:
1. Accessing the admin portal
   - Confirm HTTPS access works
   - Verify admin login credentials
2. Check service status for all roles:
   - Review Windows Services
   - Check installation logs in {install-dir}\Logs
3. Test basic connectivity:
   - Portal access from client machines
   - Database connectivity
   - Inter-role communication

### 2. Configure Authentication

1. Plan your authentication strategy:
   - Built-in accounts
   - Active Directory integration
   - SSO with SAML 2.0 or OpenID Connect

2. Configure chosen authentication method:
   - [Active Directory setup guide](/server/administration/users)
   - [SAML 2.0 configuration](/server/authentication/saml)
   - [OpenID Connect setup](/server/authentication/azuread-openid-connect)

### 3. Enable Cloud Storage (Optional)

Configure cloud storage integration to allow users to access their files in cloud and local sessions. See [Cloud Storage](/server/cloud-storage/) for:
- Supported storage providers
- Integration setup
- User access configuration

## Next Steps

Once your server is installed and configured, proceed through these guides to complete your setup:

1. [User Management](user-management.md)
   - Configure users and groups
   - Set up authentication providers
   - Define access policies

2. [Hub Repositories](hub-repos.md)
   - Configure your central application repository
   - Import applications from Turbo.net
   - Set up version management

3. [API Keys](api-keys.md)
   - Generate API access keys
   - Configure API permissions
   - Set up automation integrations

4. [Workspaces](workspaces.md)
   - Create application workspaces
   - Configure workspace settings
   - Assign user access

5. [Application Servers](application-servers.md)
   - Deploy streaming application servers
   - Configure performance settings
   - Set up load balancing

After completing the setup, you can deploy applications using either:

- [Client Subscriptions](/guides/desktop-client/subscriptions.md)
  - Deploy to managed Windows devices
  - Enable offline access
  - Integrate with desktop environment

- [Introduction to Portal](/guides/intro-to-portal.md)
  - Enable browser-based access
  - Support BYOD scenarios
  - Configure HTML5/RDP streaming

::: warning Common Issues
- Ensure all ports are open and not conflicting with other services
- Verify service account has necessary permissions
- Check database connectivity from all server roles
- Review logs for any startup errors
:::

::: tip Need Help?
For additional assistance:
- Review the [troubleshooting guide](/server/troubleshooting/)
- Contact [Turbo Support](mailto:support@turbo.net)
:::
