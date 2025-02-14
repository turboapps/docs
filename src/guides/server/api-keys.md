# API Keys

API keys enable automated login to Turbo Server for workspace subscriptions and other programmatic access. They are particularly useful for:
- Automated workspace deployment
- Scripted client configuration
- Non-interactive authentication

## Overview

API keys provide:
- Password-less authentication
- Revocable access
- Granular permissions control
- Audit tracking capabilities

For detailed management and configuration options, see [API Key Management](/server/administration/users.md#api-keys).

## Using API Keys with Subscriptions

API keys are commonly used to automate workspace deployment through subscriptions:

```bash
# Login using API key
turbo login --api-key=<your-api-key> --all-users

# Subscribe to workspace
turbo subscribe workspace --register

# Or subscribe to all available workspaces
turbo subscribe --all --register
```

This enables:
- Automated client setup
- Silent installation
- Unattended updates
- Enterprise-wide deployment

## Best Practices

### Key Management
- Create separate keys for different purposes
- Regularly rotate keys
- Revoke unused keys
- Monitor key usage

### Security
- Store keys securely
- Use environment variables when possible
- Avoid embedding keys in scripts
- Set appropriate permissions

For more information about API key management and security, see the [Server Administration Guide](/server/administration/index.md).
