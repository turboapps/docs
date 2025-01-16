## Okta with SAML 2.0

Turbo Server can be configured to allow users to log in via Okta Single Sign-On SSO using the SAML 2.0 authentication protocol.

For prerequisites and additional information about the SAML 2.0 authentication protocol, please refer to the [SAML 2.0 Prerequisites](https://hub.turbo.net/docs/server/authentication/saml#prerequisites) section.

### Configure Okta

The following section describes how to integrate Turbo Server with Okta using SAML 2.0.

From your Okta Administration panel, go to the **Applications** section and click on **Browse App Catalog**, then click **Create New App**.

![Okta 1 App Integration](https://hub.turbo.net/images/docs/Okta-1-app-integration.png)

Select **SAML 2.0** for Sign-in method and click **Next**.

![Okta 2 Sign-in Method](https://hub.turbo.net/images/docs/Okta_2_Sign-in_Method.png)

Enter the **App name** and **App logo** for SAML Integration. These items will be displayed on the Okta login page as well as the Okta dashboard.

![Okta 3 SAML Integration General Settings](https://hub.turbo.net/images/docs/Okta_3_SAML_Integration_General_Settings.png)

Configure the SAML settings for the SAML Integration.

![Okta 4 SAML Integration Configure SAML](https://hub.turbo.net/images/docs/Okta_4_SAML_Integration_Configure_SAML.png)

- **Single sign-on URL**: Enter the **Return Authentication Endpoint** from your **Turbo Server Admin Portal > Users > Authentication Method** page.
  Example: https://example.company.com/auth/saml/return
  ![Okta 5 Turbo Server Endpoints](https://hub.turbo.net/images/docs/Okta_5_Turbo_Server_Endpoints.png)

- **Audience URI**: Enter the unique identifier that will be the audience of the SAML response, typically your Turbo Portal URL or Domain URL.
  Example: https://example.company.com

- **Attribute Statements**

  - **Given Name**: The claim that will be used for the user's first name display in Turbo Server. This claim must have the following properties:
    - **Name**: http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname
    - **Name format**: URI Reference
    - **Value**: user.firstName
  - **Surname**: The claim that will be used for the user's last name display in Turbo Server. This claim must have the following properties:
    - **Name**: http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname
    - **Name format**: URI Reference
    - **Value**: user.lastName

- **Group Attribute Statements**
  - **Group**: The group claim that will be used to assign group membership for the user in Turbo Server. This claim must have the following properties:
    - **Name**: http://schemas.xmlsoap.org/claims/group
    - **Name format**: URI Reference

Click **Next**.

![Okta 6 SAML Integration Configure SAML Next Button](https://hub.turbo.net/images/docs/Okta_6_SAML_Integration_Configure_SAML_Next_Button.png)

Select **I’m an Okta customer adding an internal app** and click **Finish**.

![Okta 7 SAML Integration Feedback](https://hub.turbo.net/images/docs/Okta_7_SAML_Integration_Feedback.png)

From the **Sign On** tab, download your **SAML Signing Certificate** and then click on **View SAML setup instructions**. You may change the extension of the downloaded certificate file to .CRT or .CER to make it recognizable as a certificate file in Windows.

![Okta 8 SAML Signing Certificates and Setup Instructions](https://hub.turbo.net/images/docs/Okta_8_SAML_Signing_Certificates_and_Setup_Instructions.png)

Record the **Identity Provider Single Sign-On URL** and **Identity Provider Issuer** values.

![Okta 18 Setup Instructions](https://hub.turbo.net/images/docs/Okta_18_Setup_Instructions.png)

From the **Assignments** tab, grant access to users or groups who should be able to access the Turbo Server SSO.

![Okta 19 Assignments](https://hub.turbo.net/images/docs/Okta_19_Assignments.png)

### Configure Turbo Server

Open the Turbo Server administration site and navigate to the **Users > Authentication Method page**.

![Okta 9 Turbo Server Authentication Method](https://hub.turbo.net/images/docs/Okta_9_Turbo_Server_Authentication_Method.png)

Set the **Authentication Method** to **Single Sign-On**.

Set the **Single Sign-On Method** to **SAML 2.0**.

Configure the following fields:

![Okta 11 Turbo Server Authentication Method Fields](https://hub.turbo.net/images/docs/Okta_11_Turbo_Server_Authentication_Method_Fields.png)

- **Application ID**: Enter the Okta App Integration ID. This value is identified in the last segment of the **Identity Provider Issuer** value from Okta that was recorded earlier.  
  Example: exk48qc6p8ixPdn2K697
- **Issuer**: Enter the **Identity Provider Issuer** value from Okta that was recorded earlier.  
  Example: http://www.okta.com/exk48qc6p8ixPdn2K697
- **Entry Point**: Enter the **Identity Provider Single Sign-On URL** value from Okta that was recorded earlier.
- **Logout URL**: Enter the Okta logout URL for your company.  
  Example: https://example.okta.com/login/signout
- **Signing Certificate Thumbprint**: Enter the thumbprint value that is listed in the SAML Signing Certificate under **Details > Thumbprint**.
  ![Okta 12 Certificate Thumbprint](https://hub.turbo.net/images/docs/Okta_12_Certificate_Thumbprint.png)
- **Singing Certificate Common Name**: Enter the common name value that is listed in the SAML Signing Certificate under **Details > Subject > CN**.
  ![Okta 13 Certificate Subject Common Name](https://hub.turbo.net/images/docs/Okta_13_Certificate_Subject_Common_Name.png)

### Install SAML Signing Certificate on Turbo Hub

The SAML Signing Certificate is used by Turbo Server to ensure that the SAML response is signed by the expected identity provider. This certificate was downloaded in the previous steps and must be manually installed on the Hub server.

Login to the system where the Turbo Hub role is installed on as an administrator. Install the certificate with the following steps:

1. Select **Run** from the **Start Menu** and enter **mmc**.
2. Click on **File** then click **Add/Remove Snap In**.
3. Select the **Certificates** option then click **Add**.
4. Select **Computer account**, select **Local computer**, and then complete the dialog.
5. Click on the new **Certificates** Snap In, then click **All Tasks > Import...**
   ![Okta 14 MMC Console](https://hub.turbo.net/images/docs/Okta_14_MMC_Console.png)
6. Select **Local Machine** and click **Next**.
   ![Okta 14 Certificate Import Wizard](https://hub.turbo.net/images/docs/Okta_14_Certificate_Import_Wizard.png)
7. Select your SAML Signing Certificate and click **Next**.
   ![Okta 16 Certificate Import Wizard File Import](https://hub.turbo.net/images/docs/Okta_16_Certificate_Import_Wizard_File_Import.png)
8. Select **Place all certificates in the following store**, select **Trusted Root Certificate Authorities**, and then click **Next**.
   ![Okta 17 Certificate Import Wizard Certificate Store](https://hub.turbo.net/images/docs/Okta_17_Certificate_Import_Wizard_Certificate_Store.png)
9. Complete the rest of the import wizard with the default options.

Once installed, Turbo Server portal logins should now complete successfully.

### Troubleshooting

Please refer to the [SAML 2.0 Troubleshooting](https://hub.turbo.net/docs/server/authentication/saml#troubleshooting) section.
