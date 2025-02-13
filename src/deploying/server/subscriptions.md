# Subscription Management

Subscriptions provide automated deployment and updates of virtual applications to end-user devices through Turbo Server workspaces.

::: tip What you'll learn
- Setting up workspace subscriptions
- Managing application updates
- Desktop integration
- Offline access
:::

## Overview

Workspace subscriptions enable:
- Automatic application deployment
- Version management
- Desktop integration
- Offline access
- Usage tracking

## Setting Up Subscriptions

### Basic Setup

1. Configure the Turbo Client:
   ```bash
   # Configure server domain
   turbo config --domain=hub.company.com

   # Enable auto-registration (optional)
   turbo config --enable=AutoRegister
   ```

2. Subscribe to workspace:
   ```bash
   # Subscribe and register applications
   turbo subscribe myworkspace --register

   # Subscribe for all users
   turbo subscribe myworkspace --register --all-users
   ```

### Subscription Management

```bash
# Update applications to latest versions
turbo subscription update myworkspace

# Register applications (creates desktop integration)
turbo subscription register myworkspace

# Temporarily pause updates
turbo subscription suspend myworkspace

# Resume updates
turbo subscription resume myworkspace

# View subscription details
turbo subscription print myworkspace
```

## Offline Support

Enable offline access to applications:

```bash
# Subscribe with offline support and cache images
turbo subscribe myworkspace --allow-offline --pull

# Register for offline use
turbo subscription register myworkspace --offline
```

## Desktop Integration

Control how applications integrate with the desktop:

```bash
# Register with default settings
turbo subscription register myworkspace

# Register without shortcuts
turbo subscription register myworkspace --no-desktop-shortcuts

# Register without file associations
turbo subscription register myworkspace --no-file-associations
```

In addtion you can configure through [Workspace Shell Integration](/server/administration/workspaces.md#shell-integration).

## Best Practices

### Deployment
- Test subscriptions in a staging environment
- Plan for offline scenarios
- Document subscription policies
- Monitor update status

### Performance
- Use `--pull` to cache applications
- Schedule updates during off-hours
- Configure appropriate cache sizes
- Regular maintenance

### Security
- Review application permissions
- Monitor subscription status
- Regular audits
- Update policy enforcement

## Troubleshooting

### Common Issues

1. Update Problems
   - Check network connectivity
   - Verify client configuration
   - Review subscription status
   - Check disk space

2. Registration Issues
   - Verify permissions
   - Check integration settings
   - Review client logs
   - Test workspace access

3. Offline Access Problems
   - Verify cache configuration
   - Check offline settings
   - Test offline access

### Status Checking

```bash
# View subscription details
turbo subscription print myworkspace
```
