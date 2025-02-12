# Application Deployment

This section covers the different methods for deploying virtualized applications using Turbo technology.

::: tip What you'll learn
- Building and deploying with Studio
- Using Turbo Client
- Centralized management with Server
- Integration with existing platforms
:::

## Deployment Tools

### Turbo Studio
- Build standalone EXEs and MSIs (requires Enterprise license)
- Self-contained virtual applications
- Full desktop integration
- Deploy through existing software distribution systems
- For details, see [Studio Builds](studio/studio-builds.md)

### Turbo Client
- Direct deployment using CLI
- Flexible image management
- Desktop integration options
- Network and filesystem isolation
- Suitable for both individual and enterprise use
- For details, see [Turbo Client](client/turbo-client.md)

### Turbo Server
- Centralized application management
- Workspace organization
- Automated client deployment
- Usage tracking and analytics
- Cross-platform access through HTML5
- For details, see [Server Deployment](server/index.md)

## Platform Integrations

Enhance existing deployment platforms:

### AWS AppStream 2.0
- Cloud-based application streaming
- Elastic scaling capabilities
- Pay-as-you-go pricing
- Works with Turbo Client and Server

### Citrix
- Integration with Citrix infrastructure
- Multiple version support
- Simplified application delivery
- Enhanced isolation capabilities

### Microsoft Platforms
- System Center Configuration Manager (SCCM)
- Microsoft Intune
- Leverage existing deployment tools
- Enterprise-wide management

### Parallels RAS
- Remote application delivery
- Multiple version support
- Simplified provisioning
- Enhanced compatibility

## Deployment Scenarios

| Scenario | Tools | Benefits |
|----------|-------|-----------|
| Software Distribution | Studio | Standalone executables, offline support |
| Image Management | Client | Direct control, flexible deployment |
| Centralized Control | Server | Automated updates, usage tracking |
| Cross-Platform Access | Server + App Servers | Browser access, cloud hosting |
| Mixed Environment | Multiple Tools | Combine approaches based on needs |

### Choosing Tools

Consider these factors when planning your deployment:

1. Distribution Requirements
   - Standalone executables
   - Network deployment
   - Cloud hosting
   - Cross-platform access

2. Management Needs
   - Version control
   - Update management
   - Usage tracking
   - License management

3. Infrastructure
   - Existing deployment platforms
   - Network capabilities
   - Cloud requirements
   - Security policies

4. Client Requirements
   - Windows-only environments
   - Cross-platform needs
   - Browser-based access
   - Offline support

## Integration Benefits

Platform integrations can enhance your deployment by:
- Leveraging existing infrastructure
- Simplifying management
- Extending platform capabilities
- Improving user experience

For example:
- Use Server for central management while deploying through SCCM
- Combine AWS AppStream with Server for elastic scaling
- Enhance Citrix environments with Turbo's isolation capabilities

## Next Steps

Choose your deployment path to learn more:
- [Studio Builds](studio/studio-builds.md) - Create standalone executables and MSIs
- [Turbo Client](client/turbo-client.md) - Deploy using the Turbo Client
- [Server Deployment](server/index.md) - Centralized management and deployment
- [Platform Integrations](integrations/aws-appstream.md) - Enhance existing platforms
