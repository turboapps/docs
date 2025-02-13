# Okta with SAML 2.0

Turbo Server can be configured to allow users to log in via Okta Single Sign-On SSO using the SAML 2.0 authentication protocol.

For prerequisites and additional information about the SAML 2.0 authentication protocol, please refer to the [SAML 2.0 Prerequisites](/server/authentication/saml.html#prerequisites) section.

### Configure Okta

The following section describes how to integrate Turbo Server with Okta using SAML 2.0.

From your Okta Administration panel, go to the **Applications** section and click on **Browse App Catalog**, then click **Create New App**.

![Okta 1 App Integration](/images/okta-1-app-integration.png)

Select **SAML 2.0** for Sign-in method and click **Next**.

![Okta 2 Sign-in Method](/images/okta_2_sign-in_method.png)

Enter the **App name** and **App logo** for SAML Integration. These items will be displayed on the Okta login page as well as the Okta dashboard.

![Okta 3 SAML Integration General Settings](/images/okta_3_saml_integration_general_settings.png)

Configure the SAML settings for the SAML Integration.

![Okta 4 SAML Integration Configure SAML](/images/okta_4_saml_integration_configure_saml.png)

- **Single sign-on URL**: Enter the **Return Authentication Endpoint** from your **Turbo Server Admin Portal > Users > Authentication Method** page.
  Example: https://example.company.com/auth/saml/return
  ![Okta 5 Turbo Server Endpoints](/images/okta_5_turbo_server_endpoints.png)

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

![Okta 6 SAML Integration Configure SAML Next Button](/images/okta_6_saml_integration_configure_saml_next_button.png)

Select **I’m an Okta customer adding an internal app** and click **Finish**.

![Okta 7 SAML Integration Feedback](/images/okta_7_saml_integration_feedback.png)

From the **Sign On** tab, download your **SAML Signing Certificate** and then click on **View SAML setup instructions**. You may change the extension of the downloaded certificate file to .CRT or .CER to make it recognizable as a certificate file in Windows.

![Okta 8 SAML Signing Certificates and Setup Instructions](/images/okta_8_saml_signing_certificates_and_setup_instructions.png)

Record the **Identity Provider Single Sign-On URL** and **Identity Provider Issuer** values.

![Okta 18 Setup Instructions](/images/okta_18_setup_instructions.png)

From the **Assignments** tab, grant access to users or groups who should be able to access the Turbo Server SSO.

![Okta 19 Assignments](/images/okta_19_assignments.png)

### Configure Turbo Server

Open the Turbo Server administration site and navigate to the **Users > Authentication Method page**.

![Okta 9 Turbo Server Authentication Method](/images/okta_9_turbo_server_authentication_method.png)

Set the **Authentication Method** to **Single Sign-On**.

Set the **Single Sign-On Method** to **SAML 2.0**.

Configure the following fields:

![Okta 11 Turbo Server Authentication Method Fields](/images/okta_11_turbo_server_authentication_method_fields.png)

- **Application ID**: Enter the Okta App Integration ID. This value is identified in the last segment of the **Identity Provider Issuer** value from Okta that was recorded earlier.  
  Example: exk48qc6p8ixPdn2K697
- **Issuer**: Enter the **Identity Provider Issuer** value from Okta that was recorded earlier.  
  Example: http://www.okta.com/exk48qc6p8ixPdn2K697
- **Entry Point**: Enter the **Identity Provider Single Sign-On URL** value from Okta that was recorded earlier.
- **Logout URL**: Enter the Okta logout URL for your company.  
  Example: https://example.okta.com/login/signout
- **Signing Certificate Thumbprint**: Enter the thumbprint value that is listed in the SAML Signing Certificate under **Details > Thumbprint**.
  ![Okta 12 Certificate Thumbprint](/images/okta_12_certificate_thumbprint.png)
- **Singing Certificate Common Name**: Enter the common name value that is listed in the SAML Signing Certificate under **Details > Subject > CN**.
  ![Okta 13 Certificate Subject Common Name](/images/okta_13_certificate_subject_common_name.png)

### Install SAML Signing Certificate on Turbo Hub

The SAML Signing Certificate is used by Turbo Server to ensure that the SAML response is signed by the expected identity provider. This certificate was downloaded in the previous steps and must be manually installed on the Hub server.

Login to the system where the Turbo Hub role is installed on as an administrator. Install the certificate with the following steps:

1. Select **Run** from the **Start Menu** and enter **mmc**.
2. Click on **File** then click **Add/Remove Snap In**.
3. Select the **Certificates** option then click **Add**.
4. Select **Computer account**, select **Local computer**, and then complete the dialog.
5. Click on the new **Certificates** Snap In, then click **All Tasks > Import...**
   ![Okta 14 MMC Console](/images/okta_14_mmc_console.png)
6. Select **Local Machine** and click **Next**.
   ![Okta 14 Certificate Import Wizard](/images/okta_14_certificate_import_wizard.png)
7. Select your SAML Signing Certificate and click **Next**.
   ![Okta 16 Certificate Import Wizard File Import](/images/okta_16_certificate_import_wizard_file_import.png)
8. Select **Place all certificates in the following store**, select **Trusted Root Certificate Authorities**, and then click **Next**.
   ![Okta 17 Certificate Import Wizard Certificate Store](/images/okta_17_certificate_import_wizard_certificate_store.png)
9. Complete the rest of the import wizard with the default options.

Once installed, Turbo Server portal logins should now complete successfully.

### Troubleshooting

Please refer to the [SAML 2.0 Troubleshooting](/server/authentication/saml.html#troubleshooting) section.
