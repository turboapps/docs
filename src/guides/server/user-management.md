# User Management

This guide covers basic user and group management in Turbo Server. For detailed configuration options and advanced features, see the [Users Administration Guide](/server/administration/users).

## Managing Users

### Creating Internal Users

1. Navigate to the Users page in the Administration Site
2. Click Add in the Users section
3. Enter the required information:
   - Name
   - Login Name
   - Password
   - Status (Enabled/Disabled)

For detailed user management options, see [Creating Users](/server/administration/users#creating-users).

### Managing User Groups

1. Navigate to the Users page
2. Click Add in the User Groups section
3. Configure the group:
   - Name
   - Description (optional)
   - Add members (users or other groups)

Special built-in groups include:
- Server Administrators
- Analysts
- Anonymous
- Everyone

For group management details, see [Managing User Groups](/server/administration/users#managing-user-groups).

## Authentication Options

Turbo Server supports several authentication methods:

### Internal Authentication
- Username and password authentication
- Suitable for testing or small deployments
- See [Authentication Method](/server/administration/users#authentication-method)

### Directory Services
- Active Directory integration
- LDAP support
- User and group synchronization
- See [Directory Services](/server/administration/users#directory-services)

### Single Sign-On
- OpenID Connect (e.g., Azure AD)
- SAML 2.0 (e.g., ADFS, Okta)
- See detailed guides:
  - [Azure AD OpenID](/server/authentication/azuread-openid-connect)
  - [ADFS](/server/authentication/adfs)
  - [SAML](/server/authentication/saml)
