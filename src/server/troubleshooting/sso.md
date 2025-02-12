# Single Sign On

This section provides information to help troubleshoot common Single Sign On (SSO) issues.

For information on how to configure Turbo Server to use SSO, please refer to the [Authentication Method](/server/administration/users.html#authentication-method) section.

### Azure Active Directory

#### unsupported_response_type

Occurs when the application registration was not configured with the correct implicit grant type. Please ensure that you have configured your application registration to issue `ID tokens`.

See [Configure Azure AD](/server/authentication/azuread-openid-connect.html#configure-azure-ad) for more information on configuring the implicit grant types.

#### access_denied

Occurs when the application registration was not configured with the correct API permissions. Please ensure that you have configured your application configuration to grant `User.Read` and `Directory.Read.All` permissions.

See [Configure Azure AD](/server/authentication/azuread-openid-connect.html#configure-azure-ad) for more information on configuring the API permissions.

#### In \_validateResponse: jwt is not active

Occurs when the system clock on the server machine is out of sync with the real time. To resolve this issue, correct the system clock and then restart the Turbo service.

#### In collectInfoFromReq: invalid state received in the request

The login response did not return the state that was expected by the Portal.

This may occur for various reasons, for example:

**The login request was invalidated by another login or logout request by the same user**

To resolve, close any browser tabs with active login attempts then click on the Portal Login button to initiate a new login request.

**The login took too long to complete**

To resolve, click on the Portal Login button to initiate a new login request and complete the login before the time limit expires.

By default the login request expires in 1 hour.

**The user exceeded the maximum number of concurrent login requests**

To resolve, close any browser tabs with active login attempts then click on the Portal Login button to initiate a new login request.

By default a user can have a maximum of 5 concurrent login request.

**The Portal service restarted after the user initiated the login request.**

The Portal server stores the expected login response states server-side in an in-memory cache. If the Portal restarts mid login request, the expected login response state will be cleared from memory, and the login request will fail.

To resolve, wait for all Portal service restart to complete then click on the Portal Login button to initiate a new login request.

**The Portal `connect.sid` cookie saved on the client machine is invalid**

The `connect.sid` cookie associates the client browser to the server-side user session cache where the state expected by the login response is stored. If this state becomes invalid for any reason, the login response validation will fail.

This can be resolved by removing the `connect.sid` cookie from the client machine. To remove this cookie from your browser:

**Chrome**: Visit `chrome://settings/siteData` and search for your Portal server's hostname. Click on the matching search result, then click **Remove All** to clear all Portal cookies.

![Chrome Cookies](/images/chrome-cookies.png)

**Firefox**: Visit `about:preferences#privacy` and click **Manage Data** under **Cookies and Site Data**. Search for your Portal server's hostname, then click **Remove All Shown** to clear all Portal cookies.

![Firefox Cookies](/images/firefox-cookies.png)

**Edge**: Visit `edge://settings/siteData` and search for your Portal server's hostname. Click on the matching search result, then click **Remove All** to clear all Portal cookies.

![Edge Cookies](/images/edge-cookies.png)

#### In \_authCodeFlowHandler: failed to redeem authorization code

Occurs when the login request fails to authenticate due to an application registration or Turbo Server configuration error, such as:

- The configured return URL does not match the Portal return URL endpoint.
- The configured secret does not match the application registration's secret.

See [Configure Azure AD](/server/authentication/azuread-openid-connect.html#configure-azure-ad) for more information.

#### Response_type 'id_token' is not enabled for the application.

Error AADSTS700054 occurs when **ID tokens (used in implicit and hybrid flows)** is not enabled. To resolve this issue, enable this token in the application registration under **Authentication > Implicit grant and hybrid flows**.

### Turbo Server

#### Login failed: Missing name ID

<a href="#" id="turbo-server-login-failed-missing-upn-claim" class="hash-link"></a>

The Turbo user could not be created due to a missing name ID.

Turbo Server expects the name ID to be returned in the SAML subject as `nameID`. If this subject does not exist, Turbo Server will fallback to the attribute: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier`.

Additionally, Turbo Server supports **Attribute Mapping** which allows mapping the name ID to an arbitrary attribute name. If a name ID mapping is configured, please make sure that it matches an existing attribute name returned by the IdP.

If you are using AzureAD with SAML 2.0, see [Configure Azure AD](/server/authentication/azuread-saml.html#configure-azure-ad-user-attributes-and-claims) for more information on setting up the claims.

If you are using ADFS with SAML 2.0, see [Configure ADFS](/server/authentication/adfs.html#configure-adfs-create-new-claims) for more information on setting up the claims.

#### Login failed: Missing Email claim

The Turbo user could not be created due to a missing email claim. Turbo Server expects the `email` claim to be returned by the identity service.

If you are using AzureAD with OpenID Connect, see [Configure Azure AD](/server/authentication/azuread-openid-connect.html#configure-azure-ad) for more information on setting up the claims.

#### Login failed: Missing sub claim

The Turbo user could not be created due to a missing sub claim. Turbo Server expects the `sub` claim to be returned by the identity service.

If you are using OpenID Connect, see [OpenID Connect](/server/authentication/openid-connect.html#prerequisites) for more information on the required claims.

#### Failed to load OpenID provider metadata

The Portal was unable to load the OpenID Provider Metadata from the Provider Metadata URL configured in the authentication method. This could be caused by an incorrect URL or a network error.

Please ensure that the correct Provider Metadata URL was provided and that the URL is accessible from the Portal server. If you are using AzureAD with OpenID Connect, see [Configured Turbo Server](/server/authentication/azuread-openid-connect.html#configure-turbo-server).

#### Your SSO tenant with ID "xxxx" is not approved for login.

The Turbo user could not be created or logged in due to an SSO tenant restriction. For more information on changing the accepted tenants list, see [Administering Authentication Method](https://hub.turbo.net/docs/server/administration/users#authentication-method).

#### privateKey is required

<a href="#" id="turbo-server-privatekey-is-required" class="hash-link"></a>

This error indicates a failure in creating or logging in a Turbo user, due to an issue with the authentication request's signature.

The error occurs when the authentication request cannot be signed because the necessary private key for request signing is missing.

To resolve, please verify that the **Request Signing Private Key** value has correctly added. This can be checked in the Turbo Server administration site under **Users > Authentication**.

If your setup does not require request signing, confirm that the **Request Signing** option is disabled in the same section.

#### error:1E08010C:DECODER routines::unsupported

<a href="#" id="turbo-server-error1E08010CDECODER-routinesunsupported" class="hash-link"></a>

This error indicates a failure in creating or logging in a Turbo user, due to an issue with the authentication request's signature.

The error occurs when the authentication request cannot be signed because the necessary private key for request signing is invalid.

To resolve, please verify that the **Request Signing Private Key** value has correctly added. This can be checked in the Turbo Server administration site under **Users > Authentication**.

If your setup does not require request signing, confirm that the **Request Signing** option is disabled in the same section.

#### User creation failed (401)

The Turbo user could not be created due to an authentication failure.

Occurs when the Portal service has a missing or invalid API key. The Portal may have started with invalid settings due to a configuration change or database access error.

To resolve, please restart the **Turbo** service on the Portal server and try again in a few minutes.

#### User creation failed (503)

The Turbo user could not be created due to API service availablility.

Occurs whens the API service is restarting. Please wait a few minutes and try again.

#### Login failed (401)

The user could not be logged in due to an authentication failure.

If you are using Azure AD OpenID, please make sure that the following **API permissions** are added to your application registration:

- **Microsoft Graph > Delegated permissions > User > User.Read**
- **Microsoft Graph > Delegated permissions > Directory > Directory.Read.All**

If you are using SAML authentication, please make sure that your values for the `Signing Certificate Thumbprint` and `Signing Certificate Common Name` are correct and that your signing certificate is installed on the Hub server. See [Configure Turbo Server](/server/authentication/azuread-saml.html#configure-turbo-server) for more information on setting up the signing certificate.

#### Login failed (503)

The user could not be logged in due to API service availability.

Occurs when the API service is restarting. Please wait a few minutes and try again.

#### Login failed (404)

The login failed because the user could not be found in the SSO directory service. The directory service user is created dynamically when logging in from SSO. If the user with the same login name already exists in another directory service then the user create will not occur. Delete the existing user with the same login name and try again.
