# Application Deployment

This guide introduces the different ways to deploy virtualized applications using Turbo technology. Applications can be deployed as:

- Standalone executables (EXE/MSI) for traditional software distribution
- Virtual application packages (.svm) for advanced deployment scenarios

.svm packages can be obtained through several methods:
- Pull pre-packaged applications from our [public hub](https://turbo.net/hub)
- Contact us for custom-built applications (contact [sales@turbo.net](mailto:sales@turbo.net))
- Build your own using [Turbo Studio](/studio/working-with-turbo-studio/)

## Server-Side Deployment

Adding Application Servers enables Turbo applications to run on the server rather than on user devices. This provides:

### Server-Side Execution
- Applications run directly on Turbo Application Servers
- No package download or local installation needed
- Consistent execution environment across all users
- Centralized resource management
- Suitable for:
  - High-performance needs
  - Resource-intensive applications
  - Controlled execution environment

### Universal Access
- HTML5 browser-based streaming
- Native Windows streaming client
- Cross-platform compatibility
- Mobile device support
- Suitable for:
  - BYOD environments
  - Remote work scenarios
  - Cross-platform access
  - Mobile workforce

### Enhanced Security
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

## Implementation Requirements

Consider these factors when implementing server-based deployment:

1. Infrastructure Requirements
   - Network capabilities
   - Server resources
   - Storage requirements
   - Load balancing needs

2. User Access Patterns
   - Peak usage times
   - Concurrent user loads
   - Geographic distribution
   - Device types

3. Management Requirements
   - Update schedules
   - Monitoring needs
   - Backup strategies
   - Disaster recovery plans

## Next Steps

- [Workspace Management](/guides/server/workspaces.md)
- [VDI Integration](/server/setup-and-deployment/VDI.md)
- [Hub Setup](/guides/server/hub-setup.md)
