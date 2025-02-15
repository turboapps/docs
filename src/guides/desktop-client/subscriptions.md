# Deploy Using Subscriptions

This guide covers deploying applications using Turbo Server workspaces and subscriptions. While the [Desktop Client deployment guide](index.md) shows how to deploy individual applications, subscriptions provide a more powerful way to manage applications across your organization.

::: tip Prerequisites
Before using subscriptions, you need:
1. A configured Turbo Server installation
2. Workspaces set up with your applications
3. Turbo Desktop Client installed on end-user machines
:::

## Understanding Subscriptions

Subscriptions build upon desktop client deployment by adding centralized management through Turbo Server workspaces. Instead of managing individual applications, administrators organize applications into workspaces, and users subscribe to these workspaces to receive applications and updates automatically.

### Key Benefits

- **Centralized Management**: Control application versions and settings from Turbo Server
- **Automatic Updates**: Users automatically receive application updates
- **Role-Based Access**: Organize applications by department or role
- **Usage Analytics**: Track application usage across your organization
- **Simplified Deployment**: Users get all required applications with a single subscription

## Basic Setup

### Step 1: Configure Client

First, configure the Turbo Client to connect to your server:

```bash
# Configure server domain
turbo config --domain=hub.company.com

# Enable auto-registration for automatic updates (recommended)
turbo config --enable=AutoRegister --all-users

# Lock settings to prevent modifications
turbo config --as-override
```

### Step 2: Subscribe to Workspaces

Users can subscribe to workspaces containing their required applications:

```bash
# Subscribe to a workspace
turbo subscribe development-tools --register

# Subscribe for all users on the machine
turbo subscribe development-tools --register --all-users

# Subscribe to multiple workspaces
turbo subscribe development-tools design-tools office-apps --register
```

The `--register` flag creates desktop integration (shortcuts, file associations) for the applications.

## Managing Subscriptions

### Updates and Maintenance

Keep applications up to date:

```bash
# Update all applications in a workspace
turbo subscription update development-tools

# Update all subscribed workspaces
turbo subscription update --all

# Re-register desktop integration
turbo subscription register development-tools
```

### Controlling Desktop Integration

Fine-tune how applications integrate with the desktop:

```bash
# Minimal desktop integration
turbo subscription register development-tools \
    --no-desktop-shortcuts \
    --no-file-associations

# Register specific features
turbo subscription register development-tools \
    --no-shell-extensions \
    --no-url-handlers
```

For more control, configure integration settings in the [workspace configuration](/server/administration/workspaces.md#shell-integration) on Turbo Server.

## Offline Support

Enable offline access to applications:

```bash
# Subscribe with offline support
turbo subscribe development-tools \
    --allow-offline \    # Enable offline mode
    --pull \            # Cache images locally
    --register          # Create desktop integration

# Register for offline use
turbo subscription register development-tools --offline
```

## Deployment Scenarios

### Standard Office Environment

For typical office deployments:
1. Create workspaces for different departments
2. Users subscribe to their department workspace
3. Applications automatically update when new versions are published

```bash
# Enable automatic updates
turbo config --enable=AutoRegister --all-users
turbo subscribe accounting-apps --register
```

### Development Environment

For development teams:
1. Create workspaces with development tools
2. Include required runtimes and SDKs
3. Configure appropriate isolation settings

```bash
# Subscribe to development workspace
turbo subscribe development-tools \
    --register \
    --allow-offline     # Enable offline development
```

### VDI Environment

For virtual desktop infrastructure:

#### Non-Persistent VDI
Update the gold image with required applications:
```bash
# Update gold image
turbo subscribe workspace --pull --register
```

#### Persistent VDI
Configure automatic updates for persistent desktops:
```bash
# Enable nightly updates
turbo subscription register workspace --auto-update
```

## Best Practices

### Workspace Organization
- Group related applications together
- Consider role-based access needs
- Plan for offline requirements
- Document workspace contents

### Performance
- Use `--pull` to pre-cache applications
- Schedule updates during off-hours
- Monitor storage usage
- Configure appropriate cache sizes

### Security
- Review application permissions
- Monitor subscription status
- Regular security audits
- Update policy enforcement

## Troubleshooting

### Common Issues

1. Update Problems
   - Check network connectivity
   - Verify server access
   - Review subscription status
   - Check disk space

2. Registration Issues
   - Verify permissions
   - Check integration settings
   - Review client logs
   - Test workspace access

### Status Commands

```bash
# View subscription details
turbo subscription print development-tools

# List all subscriptions
turbo subscriptions

# Check registration status
turbo subscription registered development-tools
```

## Next Steps

1. Learn about [workspace management](/server/administration/workspaces.md)
2. Configure [update policies](/server/administration/general.md#updates)
3. Set up [usage analytics](/server/administration/reports.md)
