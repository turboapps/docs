# Deployment Guides

This section provides comprehensive guides for deploying virtualized applications using Turbo technology. Applications can be deployed as:

- Standalone executables (EXE/MSI) for traditional software distribution
- Virtual application packages (.svm) for advanced deployment scenarios

.svm packages can be obtained through several methods:
- Pull pre-packaged applications from our [public hub](https://turbo.net/hub)
- Contact us for custom-built applications (contact [sales@turbo.net](mailto:sales@turbo.net))
- Build your own using [Turbo Studio](/studio/working-with-turbo-studio/)

These guides will explore deployment methods from simplest to most advanced, progressively adding components to enable more capabilities.

::: tip What you'll learn
- Understanding deployment methods from basic to advanced
- When to use each deployment approach
- How components work together
- Implementation requirements and considerations
:::

## Deployment Methods Overview

Turbo offers multiple deployment methods that build upon each other as you add components. Start with the simplest approach and add capabilities as your needs grow:

1. **Standalone Applications** (Turbo Studio only)
   - Build self-contained executables/MSIs
   - Deploy through existing tools
   - No additional infrastructure needed
   - Simplest deployment method

2. **Desktop Management** (+ Turbo Client)
   - Direct control over applications
   - Custom or centralized repositories
   - Flexible configuration options
   - Enhanced management capabilities

3. **Workspace Management** (+ Turbo Server)
   - Enterprise-wide deployment
   - Centralized administration
   - Automated updates
   - Ideal for VDI environments

4. **Application Streaming** (+ Application Servers)
   - Server-side application execution
   - Browser-based access
   - Cross-platform compatibility
   - Maximum deployment flexibility

Choose the method that best matches your needs, or combine multiple approaches in hybrid deployments.

## Implementation Guides

### Basic Deployment
- [Building Standalone Applications](/studio/working-with-turbo-studio/standalone-executables.md)
- [Software Distribution Integration](/guides/integrations/system-center.md)

### Desktop Management
- [Turbo Client Guide](/guides/client/turbo-client.md)
- [Image Repository Setup](/guides/server/hub-setup.md)

### Enterprise Deployment
- [Workspace Management](/guides/server/workspaces.md)
- [VDI Integration](/server/setup-and-deployment/VDI.md)
- [Server Deployment](/guides/server/index.md)

## Choosing Your Approach

Consider these factors when selecting a deployment method:

1. Infrastructure Requirements
   - Existing deployment tools
   - Network capabilities
   - Management resources
   - Security requirements

2. User Needs
   - Application access patterns
   - Device types
   - Offline requirements
   - Performance expectations

3. Management Requirements
   - Update frequency
   - Usage tracking
   - Settings control
   - License management

## Detailed Deployment Guides

### 1. Standalone Application Deployment

For environments with existing software distribution systems:
- Package applications as self-contained EXE/MSI files
- Deploy through existing distribution tools
- No Turbo infrastructure required
- Suitable for:
  - Traditional software distribution
  - Simple deployment needs
  - Offline-first scenarios

For details on building standalone executables, see the [Turbo Studio documentation](/studio/working-with-turbo-studio/standalone-executables.md).

### 2. Desktop-Based Deployment

Installing Turbo Client on desktops enables direct management of .svm packages. This method offers two approaches:

#### Using Custom Image Repository
- Store .svm packages on a network share
- Install Turbo Client on desktops
- Import packages using CLI commands:
  ```
  turbo import svm myapp.svm
  turbo installi myapp
  ```
- Configure isolation and integration settings
- Manage package distribution yourself
- Suitable for:
  - Local network deployment
  - Custom image management
  - Full control over repository
  - Offline-capable environments

#### Using Turbo Server Hub
- Install Turbo Client on desktops
- Connect to centralized Hub repository
- Pull packages directly from Hub:
  ```
  turbo login
  turbo pull myapp
  turbo installi myapp
  ```
- Automatic package updates
- Usage analytics and tracking
- Suitable for:
  - Simplified image management
  - Automatic updates
  - Usage monitoring
  - Enterprise environments

Both approaches provide:
- Full desktop integration options
- Flexible isolation settings
- Command-line automation
- Package version control
- Offline execution capability

For implementation details, see [Turbo Client Guide](/guides/client/turbo-client.md).

### 3. Workspace-Based Deployment

Adding Turbo Server enables organization of .svm packages into workspaces for simplified deployment and management:

#### Subscribing to a Workspace
- Group related packages into workspaces
- Manage permissions at workspace level
- Configure standardized settings
- Control package versions
- Example:
  ```
  # Subscribe to workspace containing multiple applications
  turbo subscribe development-tools

  # Update applications
  turbo subscription update development-tools
  
  # Installs applications desktop integration
  turbo subscription register development-tools
  ```
- Suitable for:
  - Role-based deployment
  - Department-specific needs

#### Subscribing to all Workspaces
- Deploy all workspaces to desktops
- Example:
  ```
  # Auto register subscription on user login
  turbo config --enable=AutoRegister --all-users

  # Subscribe to all available workspaces
  turbo subscribe --all --pull --all-users
  ```
- Suitable for:
  - Enterprise-wide deployment
  - Automated management

#### VDI Integration
- Non-Persistent VDI:
  - Deploy via workspace subscription
  - Update gold image
  - Clean state each session
  - Example:
    ```
    # Update the gold image
    turbo subscribe workspace --pull --register
    ```
- Persistent VDI and Labs:
  - Nightly subscription updates
  - Maintain user customizations
  - Example:
    ```
    # Schedule nightly updates
    turbo subscription register workspace --auto-update
    ```

All workspace deployments provide:
- Centralized management
- Usage analytics
- License tracking
- Update control

Learn more about [Workspace Management](/guides/server/workspaces.md).

### 4. Application Server-Based Streaming

Adding Application Servers enables server-side execution with these benefits:

#### Server-Side Execution
- Applications run directly on Turbo Application Servers
- No package download or local installation needed
- Consistent execution environment across all users
- Centralized resource management
- Suitable for:
  - High-performance needs
  - Resource-intensive applications
  - Controlled execution environment

#### Universal Access
- HTML5 browser-based streaming
- Native Windows streaming client
- Cross-platform compatibility
- Mobile device support
- Suitable for:
  - BYOD environments
  - Remote work scenarios
  - Cross-platform access
  - Mobile workforce

#### Enhanced Security
- .svm packages remain secured on server
- Controlled data access and permissions
- Centralized updates and patching
- Complete session isolation
- Security features:
  - Role-based access control
  - Session encryption
  - Activity monitoring
  - Data protection
- Suitable for:
  - High-security environments
  - Data protection requirements
  - Compliance needs
  - Contractor access

All streaming deployments provide:
- Centralized management
- Resource optimization
- Session monitoring
- Usage analytics

For server deployment details, see [Server Deployment Guide](/guides/server/index.md).
