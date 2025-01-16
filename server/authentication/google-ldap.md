## Google LDAP

To configure Turbo Server to authenticate against Google LDAP, add an [external directory service](https://hub.turbo.net/docs/server/administration/users#adding-an-external-directory-service).

Refer to the [Google LDAP documentation](https://support.google.com/a/topic/9048334?hl=en&ref_topic=7556686) to set up the Google LDAP service for your Google Workspace.

### Connection Details

Google requires client side certificate to validate the connection over SSL. Obtain the client certificate and key files as described in the [Google LDAP documentation](https://support.google.com/a/answer/9100660?hl=en&ref_topic=9173976).

You must add the client certificate to the Windows Certificate store, as a single combined certificate and key file in pkcs12 format. To combine the cert and key file from google you will need openssl.

```
> openssl pkcs12 -export -in <path-to-cert>.crt -inkey <path-to-key>.key -out <path-to-cert-key>.pfx
```

Next, login to the Hub server as the service user and import the certificate-key file to the Current User windows keystore under Personal Certificates. Restart the Turbo Service to pick up the new certificate.

Connect using the following settings when adding the [external directory service](https://hub.turbo.net/docs/server/administration/users#adding-an-external-directory-service):

**Type:**
Other LDAP

**Host:**
ldap.google.com

**Port:**
636

**Top Directory:**
dc=example,dc=com

**Binding Type:**
SSL

**Synchronization Account:**
Ensure you connect with a specific account if required by your Google LDAP configuration, in addition to SSL certificate authentication.

**Directory Schema**
Consult the [Google LDAP schema documentation](https://support.google.com/a/answer/9188164) to configure the Directory Schema settings. Example settings are provided below.

- Users

  - Filter: (objectClass=inetOrgPerson);(objectClass=posixAccount)
  - Class: inetOrgPerson;posixAccount
  - Login name: uid;cn
  - First name: givenName
  - Last name: sn
  - Full name: displayName;cn

- Groups
  - Filter: (objectClass=posixGroup)
  - Class: posixGroup
  - Name: displayName
  - Description: description
  - Members: member

**Page Size:**
0
