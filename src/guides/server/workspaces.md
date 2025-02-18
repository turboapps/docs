# Workspace Management

Workspaces in Turbo Server provide a way to organize and manage virtual applications for different user groups. This guide covers workspace configuration and management through the web interface.

::: tip What you'll learn
- Creating and configuring workspaces
- Managing applications in workspaces
- User access control
- Workspace policies
:::

## Overview

Workspaces allow administrators to:
- Group related applications
- Control user access
- Manage application settings
- Configure update policies
- Monitor usage

## Creating Workspaces

1. Access the administration portal:
   ```
   https://[server]/admin
   ```

2. Navigate to **Workspaces** tab

3. Click **Add Workspace** and configure:
   - Name
   - Description
   - Access settings
   - Default policies

## Managing Applications

For detailed application management, see [Workspace Applications](/server/administration/workspaces.md#workspace-applications).

### Adding Applications

1. Open workspace administration
2. Navigate to **Applications** tab
3. Click **Add > Windows Application**
4. Select applications from Hub

### Application Settings

Configure per-application settings through the web interface:

- **General Settings**:
  - Launch parameters
  - Version management
  - Update policies
  - Profile settings
  See [General Settings](/server/administration/workspaces.md#general)
  
- **Isolation Settings**:
  - File system access
  - Network isolation
  - Shell integration
  See [Isolation Settings](/server/administration/workspaces.md#isolation)

- **Network Settings**:
  - Network isolation
  - Tunneling
  - Route configuration
  See [Network Settings](/server/administration/workspaces.md#network)

- **Storage Settings**:
  - Session persistence
  - Device sync
  - Drive visibility
  See [Storage Settings](/server/administration/workspaces.md#storage)

### Licensing Configuration

Configure application licensing:

1. For native applications:
   - Enable Portal tunneling to connect applications to on-premises license servers
   - Configure network routes in [Workspace Applications](/server/administration/workspaces#application-management)
   - Required for applications that need to reach internal license servers

2. For workspace applications:
   - Set custom usage controls through Turbo's licensing system
   - Configure user/device limits and license reservations
   - See [Workspace Applications](/server/administration/workspaces#application-management)

## Access Control

For detailed user and access management, see [Workspace Users](/server/administration/workspaces.md#workspace-users).

### User Management

1. Navigate to **Users** tab
2. Add users or groups
3. Configure permissions:
   - User: Basic access to workspace dashboard
   - Administrator: Full control of workspace
   - Read-only: View-only access to workspace APIs

For details on permission levels and user groups, see [Permissions](/server/administration/workspaces.md#permissions).

## Workspace Settings

For detailed workspace configuration, see [Workspace General](/server/administration/workspaces.md#workspace-general).

### Application Settings

Configure workspace-wide defaults:
- Application version control - See [Application Version](/server/administration/workspaces.md#general)
- Update checks - See [Check for Updates](/server/administration/workspaces.md#general)
- Pre-caching - See [Precache Applications](/server/administration/workspaces.md#workspace-general)

### Security Settings

Configure workspace-level security:
- File system isolation - See [File Isolation](/server/administration/workspaces.md#workspace-general)
- Network access - See [Network Settings](/server/administration/workspaces.md#network)
- Shell integration - See [Shell Integration](/server/administration/workspaces.md#shell-integration)

### Sharing

Configure application sharing:
- Share URLs - See [Sharing a Workspace Application](/server/administration/workspaces.md#sharing-a-workspace-application)
- User access - Control who can access shared applications

## Monitoring

### Usage Tracking

Access through workspace dashboard:
- Application launch volume - See [Workspace Dashboard](/server/administration/workspaces.md#workspace-dashboard)
- Key statistics - See [Workspace Dashboard](/server/administration/workspaces.md#workspace-dashboard)
- Usage summary - See [Workspace Dashboard](/server/administration/workspaces.md#workspace-dashboard)
- Recent activity - See [Workspace Dashboard](/server/administration/workspaces.md#workspace-dashboard)

### Health Monitoring

Monitor through administration portal:
- Test workspace applications - See [Testing Workspace Applications](/server/administration/workspaces.md#testing-workspace-applications)
- Server performance - See [Server Monitoring](/server/monitoring.md)
- Error tracking - See [Troubleshooting](/server/troubleshooting/application)


## Troubleshooting

### Common Issues

1. Access Problems
   - Verify user permissions
   - Check authentication settings
   - Review access policies

2. Application Issues
   - Check version compatibility
   - Verify isolation settings
   - Review launch parameters

3. Performance Problems
   - Monitor resource usage
   - Check network connectivity
   - Review cache settings
