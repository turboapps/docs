## SAML 2.0

Turbo Server supports logging in users via Single Sign-On (SSO) using an external identity provider (IdP) that supports SAML 2.0 authentication. The SAML 2.0 authentication protocol is supported by many identity providers, such as AzureAD, ADFS, and WSO2.

### Prerequisites

The following section describes the requirements to use SAML 2.0 with Turbo Server.

#### Identity Provider Account

You must have access to an identity provider (IdP) that supports the SAML 2.0 protocol and an account that has permission to create and configure an application with that IdP.

#### Turbo Server Configuration

Single Sign-On requires all servers in the farm to use https in order to keep users data secure. Make sure SSL is enabled during installation or install SSL from the **Domain > Servers > Server** page.

Turbo Server must be configured to use SAML 2.0 authentication from the **Users > Authentication Method** page using information provided by the IdP.

#### Identity Provider Subject and Attributes

During the authentication process, SAML 2.0 obtains a response from the identity provider containing information about the user. This information is used by Turbo Server to create or log into the associated Turbo account.

The following section describes the required subject fields and attributes that are expected to be returned in the SAML response.

##### Subject Fields

The following subject fields are expected to be returned in the SAML response (under `saml:Subject`):

| Subject Name | Usage                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| saml:NameID  | Used as the Turbo account username. Recommended to be returned in email address format (urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress). |

<br/>

Turbo Server accepts any name ID format the conforms to the following username requirements:

- Maximum of 256 characters
- Does not contain any of the following characters: `\/:*?"<>|`

##### Attributes

The following attributes (aka claims) are expected to be returned in the SAML response (under `saml:AttributeStatement`):

| Attribute Name                                                       | Usage                                                                                                                                                                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname      | The first name for the Turbo account display name.                                                                                                                                                             |
| http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname        | The surname for the Turbo account display name.                                                                                                                                                                |
| http://schemas.xmlsoap.org/claims/group                              | The user groups to which the Turbo account will be assigned.                                                                                                                                                   |
| http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier | Optional. Used as a fallback for the Turbo account username if the nameID subject does not exist. Recommended to be returned in email address format (urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress). |

<br/>

If the attribute names provided by your identity provider differ, Turbo Server offers an **Attribute Mapping** feature. This feature allows Turbo Server to effectively map arbitrary attribute names to the corresponding Turbo user account fields, ensuring flexible and accurate data integration.

#### Service Provider Signing Certificate

Turbo Server uses an SP Signing Certificate (aka Request Signing Certificate) and its associated private key to sign SAML authentication requests sent during login. This signature allows the identity provider to verify that the request originates from the expected service provider.

To set this up, an administrator needs to manually generate a certificate file and its corresponding private key. The private key must be in **PEM** format. After generating these, the private key must be configured on Turbo Server and the certificate must be configured on the identity provider.

Here is an example of how to generate a X.509 certificate and its corresponding private key using OpenSSL, suitable for use as a SP Signing Certificate:

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj "/C=XX/ST=StateName/L=CityName/O=CompanyName/OU=CompanySectionName/CN=CommonNameOrHostname"
```

This command will create a new self-signed X.509 certificate (cert.pem) and private key (key.pem) using RSA with a 4096-bit key. The certificate is set to expire in 3650 days (approximately 10 years), and the -nodes flag ensures that the private key is not encrypted. The subject line is a placeholder and should be replaced with your organization's specific information.

For detailed instructions on this configuration process, please refer to the documentation specific to your identity provider.

#### Identity Provider Signing Certificate

Turbo Server uses the Identity Provider Signing Certificate (aka Signing Certificate) to verify that the SAML response received during login is signed by the expected identity provider.

This certificate file is provided by your identity provider and must be manually installed on the Hub server. Please refer to the provider-specific documentation for more information on locating and installing this certificate.

### How Turbo Users and Groups are created

When SSO is configured, a Turbo Server user will be created on a successful login if the user does not already exist. Users are created using the name identifier, given name, and sur name attributes and claims as specified in the [Identity Provider Attributes and Claims](#prerequisites-identity-provider-subject-and-attributes) section. User groups received in the groups claim will be created and the user assigned to them on each login. Users must be manually removed from the Turbo Server if removed in the external identity provider.

Automatically created user groups from SSO will be created in the Single Sign-On directory service. The user's group membership will be automatically removed from the group if removed in the external identity provider on the next sucessful login. If the SSO user is manually added to an internal group, then the user's group membership must also be manually removed.

### Supported Identity Providers

Turbo Server supports Single Sign-On against any identity provider that supports SAML 2.0 authentication. Setup guides are available for the following identity providers:

- [Azure Active Directory with SAML 2.0](https://hub.turbo.net/docs/server/authentication/azuread-saml)
- [Active Directory Federation Services](https://hub.turbo.net/docs/server/authentication/adfs)
- [Okta with SAML 2.0](https://hub.turbo.net/docs/server/authentication/okta-saml)
- [Duo with SAML 2.0](https://hub.turbo.net/docs/server/authentication/duo-saml)

For other identity providers, please refer to the identity provider documentation for information on configuring the subject and attributes listed in the [Identity Provider Attributes and Claims](#prerequisites-identity-provider-attibutes-and-claims) section, as well as how to obtain the fields required by the Turbo Server user authentication form.

### Troubleshooting

If an error is reported by the Turbo Server after logging into the external identity provider, the first place to check will be the [Hub logs](https://hub.turbo.net/docs/server/troubleshooting/hub-server#locating-log-files).

#### Failed to validate SAML token

Error log located in the [API log file](https://hub.turbo.net/docs/server/troubleshooting/hub-server#locating-log-files):

```
04/07/2020 17:44:42.6736 - Critical - 0x070C: Failed to validate SAML token: System.IdentityModel.Tokens.SecurityTokenValidationException:
The X.509 certificate CN=Microsoft Azure Federated SSO Certificate is not in the trusted people store.
The X.509 certificate CN=Microsoft Azure Federated SSO Certificate chain building failed.
The certificate that was used has a trust chain that cannot be verified.
Replace the certificate or change the certificateValidationMode.
A certificate chain processed, but terminated in a root certificate which is not trusted by the trust provider.
```

The Hub server failed to validate the SAML token. This can be caused by a missing or invalid SAML Signing Certificate. Please ensure that the SAML Signing Certificate has been added to the certificate store.

```
04/07/2020 17:44:42.6736 - Critical - 0x070C: Failed to validate SAML token: System.IdentityModel.Tokens.SecurityTokenException: The issuer of the security token was not recognized by the IssuerNameRegistry. To accept security tokens from this issuer, configure the IssuerNameRegistry to return a valid name for this issuer."
```

The Hub server did not recognize the token issuer identified by the Signing Certificate Thumbprint and Signing Certificate Common Name. This can be caused by missing or invalid Signing Certificate values. Please ensure that the correct values were configured in Turbo Server, and that the Signing Certificate has been added to the certificate store.

#### Microsoft Azure AD with SAML group names appear as GUIDs

Group claims using `sAMAccountName` are not supported for groups created in Azure AD or Office 365. Applications configured in Azure AD to synchronize on-premises group attributes will receive these attributes for synced groups only. If group names are utilized for Turbo workspace application permissions, consider configuring [Azure AD with OpenID](https://hub.turbo.net/docs/server/authentication/azuread-openid-connect). Alternatively, applications can use the group ID string as the permission.
