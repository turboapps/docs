# Setting Up Turbo Server

This comprehensive guide walks you through the complete process of setting up a Turbo Server environment, from initial planning to post-installation configuration.

::: tip What you'll learn
- How to plan your Turbo Server deployment
- Step-by-step installation process
- Essential post-installation configuration
- Best practices and common pitfalls to avoid
:::

## Planning Your Deployment

### Understanding Server Roles

Turbo Server consists of three main roles:

![Server Architecture](/images/compute-infrastructure.png)

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

### Pre-Installation Checklist

- [ ] Server hardware meets [minimum requirements](/server/setup-and-deployment/prerequisites#system-requirements)
- [ ] Clean Windows Server installation (no IIS or conflicting services)
- [ ] Service account created for Turbo services
- [ ] SQL Server instance available (or Azure SQL)
- [ ] SSL certificates prepared for Portal/Hub
- [ ] Required ports available:
  - Hub: 80 (optional), 443
  - Portal: 80 (optional), 443
  - Application Server: 80, 443, 3389, 5850
- [ ] Turbo Server license certificate

## Installation Process

### 1. Prepare the Environment

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

### 2. Run the Installation

1. Launch the Turbo Server installer

2. Enter your license:
   ![License Entry](/images/setup-license.png)
   - Paste your XML license certificate
   - Contact support@turbo.net if you need assistance

3. Choose installation path:
   ![Installation Path](/images/setup-install-path.png)
   - Hub: 500GB+ free space recommended
   - Application Server: 200GB+ free space recommended
   - System drive: 128GB+ free space for user containers

4. Select server roles:
   ![Server Roles](/images/setup-server-role.png)
   - Choose based on your deployment plan
   - For testing: Select all roles
   - For production: Split roles across servers

5. Configure web services:
   ![Web Service Configuration](/images/setup-portal-hub-address.png)
   - Enter public URLs for Portal/Hub
   - Ensure SSL certificates match these domains

6. Set up database connections:
   ![Database Configuration](/images/setup-db-config.png)
   - Enter connection strings for both databases
   - Test connections before proceeding

7. Configure service account:
   ![Service Account](/images/setup-service-account.png)
   - Enter credentials for Turbo services account
   - Ensure account has necessary permissions

8. Create administrator account:
   ![Admin Setup](/images/setup-hub-admin.png)
   - Set up initial admin credentials
   - Save these credentials securely

## Post-Installation Configuration

### 1. Verify Installation

1. Access the admin portal
2. Check service status for all roles
3. Review installation logs in {install-dir}\Logs

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

1. Set up OneDrive integration:
   - Register application in Azure AD
   - Configure client ID and secret
   - Follow [detailed steps](/server/administration/general)

### 4. Configure Licensing (If Required)

1. For streamed applications:
   - Configure network connectivity to license servers
   - Test license server access

2. For native applications:
   - Set up Portal tunneling (preview feature)
   - Contact support@turbo.net for configuration assistance

## Next Steps

After completing the basic setup:

1. [Configure users and groups](user-setup.md)
2. [Set up your application repository](hub-setup.md)
3. [Generate API keys](api-keys.md)
4. [Create workspaces](workspaces.md)
5. [Deploy additional application servers](application-servers.md)

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
