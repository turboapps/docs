# User Management Setup

This guide covers the basic setup of users and groups in Turbo Server. Learn how to create and manage internal users, set up groups, and understand licensing implications.

::: tip What you'll learn
- Creating and managing internal users
- Setting up user groups
- Understanding user licensing
- Common SSO integration options
:::

## Internal User Management

### Creating Users

1. Access the admin portal
2. Navigate to Users section
3. Click "Add User"
4. Fill in required information:
   - Username
   - Email
   - Password
   - User role (Admin/User)

For detailed user management steps and advanced configuration options, see the [Users Administration Guide](/server/administration/users.md).

### Managing Groups

Groups help organize users and control access to applications:

1. Navigate to Groups section
2. Click "Add Group"
3. Define group properties:
   - Name
   - Description
   - Member users
   - Access permissions

For detailed information about group management and permissions, see the [Users Administration Guide](/server/administration/users.html#creating-user-groups).

### User Licensing

Understanding user license allocation:

- Each user counts towards your license total
- Licenses are consumed when users:
  - Log into the portal
  - Launch applications
  - Access workspaces
- Users are automatically set to inactive after 30 days of no activity, which frees up their license
- Monitor license usage in the admin portal

For comprehensive information about licensing, including user seat allocation, monitoring, and management, see the [Licensing Documentation](/server/licensing.md).

::: warning License Management
Regularly review inactive users and remove them to free up licenses for new users. See the [Users Administration Guide](/server/administration/users.md#managing-inactive-users) for best practices.
:::

## Single Sign-On Integration

For enterprise deployments, we recommend implementing SSO. Common integration options:

### Azure Active Directory
- Supports both OpenID Connect and SAML
- Automatic user provisioning
- See [Azure AD OpenID Connect](/server/authentication/azuread-openid-connect.md) or [Azure AD SAML](/server/authentication/azuread-saml.md)

### ADFS
- Windows-integrated authentication
- SAML-based federation
- See [ADFS Integration](/server/authentication/adfs.md)

### Okta
- SAML-based authentication
- User provisioning options
- See [Okta SAML](/server/authentication/okta-saml.md)

For other authentication options, see the [Authentication Documentation](/server/authentication/).

## Next Steps

After setting up users:
1. Configure the [Hub](hub-setup.md) for application management
2. Set up [API Keys](api-keys.md) for automation
3. Create [Workspaces](workspaces.md) for application access
