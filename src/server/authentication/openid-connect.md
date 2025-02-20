# OpenID Connect

Turbo Server supports logging in users via Single Sign-On (SSO) using an external identity provider that supports OpenID Connect (OIDC) authentication. The OIDC authentication protocol is supported by many identity providers, such as Azure Active Directory or Google.

## Prerequisites

The following section describes the requirements to use OpenID Connect (OIDC) with Turbo Server.

### Identity Provider Account

You must have access to an identity provider (IdP) that supports the OIDC protocol and an account that has permission to create and configure an application with that IdP.

### Turbo Server Configuration

SSO requires all servers in the farm to use https in order to keep users data secure. Make sure SSL is enabled during installation or install SSL from the Domain > Servers > Server page.

Turbo Server must be configured to use OIDC authentication with configurations obtained from the IdP from the Users > Authentication Method page.

### Identity Provider Scopes and Claims

OpenID Connect obtains claims from the identity provider containing user information during the authentication process. Turbo Server uses the following claims to create or login to the associated Turbo account:

* `email` - Used as the Turbo account username.
* `sub` - Used as the Turbo account username if the email does not exist.
* `given_name` - Used in combination with `family name` as the Turbo account display name.
* `family_name` - Used in combination with `given_name` as the Turbo account display name.
* `groups` - (Optional) User groups to which the Turbo account will be assigned. Some providers supply group information through different means, see the provider-specific setup guides for more information.

Turbo Server sends the following scopes during authentication to authorize access to the required claims: `profile`, `openid`, and `email`.

The identity provider must be configured to accept the requested scopes and return the requested claims.

## How Turbo Users and Groups are Created

When SSO is configured, a Turbo Server user will be created on a successful login if the user does not already exist.

The Turbo accounts' username comes from the `email` claim if it exists, otherwise it comes from the `sub` claim. The Turbo accounts' display name comes from the `given_name`, and `family_name` claims.

User groups received in the `groups` claim will be created and the user assigned to them on each login. Users must be manually removed from the Turbo Server if removed in the external identity provider. 

For more information on these claims, see [Identity Provider Scopes and Claims](#prerequisites-identity-provider-scopes-and-claims). 

Automatically created user groups from SSO will be created in the Single Sign-On directory service. The user's group membership will be automatically removed from the group if removed in the external identity provider on the next sucessful login. If the SSO user is manually added to an internal group, then the user's group membership must also be manually removed.

## Supported Identity Providers

Turbo Server supports SSO against any identity provider that supports OIDC authentication. Setup guides are available for the following identity providers:

- [Azure Active Directory with OpenID Connect](/server/authentication/azuread-openid-connect)

For other identity providers, please refer to the identity provider documentation for information on configuring the claims and scopes listed in the [Identity Provider Scopes and Claims](#prerequisites-identity-provider-scopes-and-claims) section, as well as how to obtain the fields required by the Turbo Server user authentication form.