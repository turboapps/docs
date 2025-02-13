# Active Directory Federation Services

This section describes the steps required to configure Single Sign-On (SSO) against an ADFS server using the SAML 2.0 authentication protocol. Turbo currently supports ADFS2 and ADFS3.

For prerequisites and additional information about the SAML 2.0 authentication protocol, please refer to the [SAML 2.0 Prerequisites](/server/authentication/saml.html#prerequisites) section.

### Configure ADFS

The following section describes how to integrate Turbo Server with ADFS SSO using SAML 2.0.

#### Create a Relying Party Trust

A relying party trust object specifies identifiers, claims, and rules that allow Turbo Server to interact with the local Federation Service.

To create the relying party trust:

1. Open the ADFS management window and go to **Trust Relationships** > **Relying Party Trusts** settings. Then right-click on the **Relying Party Trusts** and add a new Relying Party:

   ![ADFS add RP](/images/adfs-add-rp.png)

2. In the Wizard choose **Enter data about the relying party manually** setting and click **Next**.

   ![ADFS manual](/images/adfs-manual.png)

3. Fill the Display Name with a meaningful name, for instance, `Turbo Portal`, and click **Next**.

4. Choose **AD FS profile** as we will be using SAML tokens to authenticate and click **Next**.

5. Leave the token encryption certificate data empty and click **Next**.

   ![ADFS no cert](/images/adfs-nocert.png)

6. Set the URLs for WS-Federation and SAML 2.0 to `https://{Web Service Root}/auth/saml/return`, replacing `{Web Service Root}` with your Turbo Server portal host, and click **Next**.

   ![ADFS URLs](/images/adfs-urls.png)

7. In addition to the URL from the previous step, add a relying party trust identifier to be used by the Turbo Client, `https://{Web Service Root}/turbo-client`, and click **Add** and then **Next**.

   ![ADFS Identifiers](/images/adfs-identifiers.png)

8. Click **Next** through the rest of the wizard and **Close** at the end.

#### Create new claims

Once the relying party trust is created, a few claim rules will need to be added to pass the user's name and AD groups to the Turbo Portal.

To add the claims:

1. Open the **Edit Claim Rules** window from the relying party trust.

2. Click on the **Add Rule...** button, choose the **Send LDAP Attributes as Claims** option, and click **Next**.

3. Set **Attribute store** to **Active Directory**, add the Claim Rules from the table below, and click **Finish**:

   | LDAP Attribute                          | Outgoing Claim Type |
   | --------------------------------------- | ------------------- |
   | Display-Name                            | Name                |
   | User-Principal-Name                     | UPN                 |
   | E-Mail-Addresses                        | E-Mail Address      |
   | Token-Groups - Qualified by Domain Name | Group               |

#### Set the Authentication Policy

To configure how users will log into ADFS:

1. Open the Global Authentication Policy settings from the **Authentication Policies** administration panel.

   ![ADFS global policy](/images/adfs-global-policy-1.png)

2. **Forms Authentication** must be enabled for both Extranet and Intranet.

   ![ADFS global policy auth](/images/adfs-global-policy-2.png)

#### Get the Token-Signing Certificate

1. From the ADFS management window go to **Service** > **Certificates**.
2. Double-click on the Token-signing certificate.
3. Click **Details** and copy the thumbprint and common name. These values will be used when configuring the Turbo Server.

### Configure ADFS for Native Clients

Native Client App access can be configured on ADFS using the **Add-AdfsClient** command in an elevated powershell cmdlet.

```powershell
(ps)> Add-AdfsClient -ClientId <CLIENT_ID> -Name <APP_NAME> -RedirectUri <REDIRECT_URI>
```

- **CLIENT_ID** is a GUID. Used guidgen.exe or other method to generate a new value.
- **APP_NAME** is the name of the app. This can be anything but must be unique.
- **REDIRECT_URI** is an unused but required value. This can be anything but must be unique.

Example command:

```powershell
(ps)> Add-AdfsClient -ClientId 54707E09-E6A2-4F22-9C73-638610AFE38A -Name Turbo-Client -RedirectUri http://turbo.net
```

### Configure Turbo Server

Once you have configured ADFS, you are ready to enable SSO on Turbo Server.

Open the Turbo Server administration site and navigate to the Users > Authentication Method page. Change the Authentication Method to **Single Sign-On** and the Single Sign-On Method to **SAML 2.0**.

Fill in the following fields according to the [ADFS configuration](#configure-adfs):

- **Application Id**: The Application ID used to configure your Native Client App, see [Configure ADFS for Native Clients](#configure-adfs-for-native-clients).
- **Issuer**: The issuer of the relying party login request. This must match one of the relying party Identifiers, as configured in your [ADFS relying party](#configure-adfs-create-a-relying-party-trust).
- **Entry Point**: The ADFS login URL. Specified by the SAML 2.0/WS-Federation URL in your ADFS service endpoints (ADFS > Service > Endpoints).
- **Logout URL**: The ADFS logout URL. By default, this URL is constructed by adding `?wa=wsignout1.0` to your Entry Point URL.
- **Signing Certificate Thumbprint**: The ADFS Token-Signing Certificate's thumbprint, see [Get the Certificate](#configure-adfs-get-the-token-signing-certificate).
- **Signing Certificate Common Name**: The ADFS Token-Signing Certificate's common name, see [Get the Certificate](#configure-adfs-get-the-token-signing-certificate).

![ADFS Turbo Config](/images/adfs-turbo-config.png)

### Troubleshooting

Please refer to the [SAML 2.0 Troubleshooting](/server/authentication/saml.html#troubleshooting) section.
