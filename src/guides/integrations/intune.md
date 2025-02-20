# Microsoft Intune Integration

Microsoft Intune provides cloud-based device management and application deployment for enterprise environments. Integrating Turbo with Intune enables centralized deployment and management of virtualized applications across your organization's devices, including Windows PCs, iOS, and Android devices.

::: tip What you'll learn
- How to deploy the Turbo Client through Intune
- How to configure client settings for enterprise deployment
- How to manage application trust and image caching
- How to deploy Turbo mobile apps for iOS and Android
:::

## Prerequisites

Before starting the Microsoft Intune integration with Turbo, ensure you have the following:

* **Turbo Account**: A Turbo account or organization subscription. Sign up at [Turbo.net](https://turbo.net/) if you haven't already.
* **Turbo Hub Server**: Set up a Turbo Hub Server. For optimal performance, it should be in the same region as your Intune-managed devices.
* **Turbo Client MSI**: The MSI installer for Turbo Client (for PC deployment). You can download it from the [Turbo Downloads page](https://turbo.net/download)
* **Azure Active Directory**: Your organization should be set up with Azure Active Directory for user and device management.

Once you have these prerequisites in place, you can proceed with the Intune integration setup.

## Windows PC Deployment

1. Download the latest Turbo Client MSI installer from `https://start.turbo.net/install?msi=`
2. Sign in to the Intune portal
3. In the Intune pane select **Client Apps > Apps > Add**
4. In the **App** type list select **Line-of-business app** and select the Turbo Client MSI installer
5. Select **Configure** and provide the following information:
    * *Name:* Enter the name of the app as it is to be displayed in the company portal
    * *Description:* Enter a description for the app as it is to be displayed in the company portal
    * *Publisher:* Enter **Turbo.net** as the publisher

6. Under the **Command-line arguments** section, enter the text `CMDLINE="params"` where `params` are the desired setup parameters. Any parameters valid for the Turbo EXE client install and `turbo config` command may be provided here.
    * Recommended: Use the `--image-path=allusers` flag to have all users on the device use a shared image cache. This prevents redownload of the application when different users on the same device run the same application.
    * (Optional) Use the `--add-trusted-source=https://myhub.start.turbo.net` flag to have the device automatically trust applications from your Hub. If this is not done at client setup time, the user will be prompted to trust applications published by your organization before an application can execute on the device.
    * Example configuration:
      ```
      CMDLINE="--image-path=allusers --add-trusted-source=https://myhub.start.turbo.net"
      ```

7. Optional: Select **Scope** and select any desired tags
8. Select **Add**
9. Under **Manage**, click **Assignments** and assign the app to the necessary groups

## iOS Deployment

1. Sign in to the Intune portal
2. In the Intune pane select **Client Apps > Apps > Add**
3. In the **App type** list select **iOS**
4. In the **Search the App Store** pane search for **Turbo.net**, select the **Turbo.net** iOS app, and press **Select**
5. (Optional) Select **App information** to edit the auto-populated fields
6. (Optional) Select **Scope** and select any desired tags
7. Select **Add**
8. Under **Manage**, click **Assignments** and assign the app to the necessary groups

## Android Deployment

1. Sign in to the Intune portal
2. In the Intune pane select **Client Apps > Apps > Add**
3. In the **App type** list select **Android**
4. Select **Configure** and provide the following information:
    * *Name:* Enter the name of the app as it is to be displayed in the company portal (usually **Turbo.net**)
    * *Description:* Enter a description for the app as it is to be displayed in the company portal
    * *Publisher:* Enter **Turbo.net** as the publisher
    * *Appstore URL:* Enter `https://play.google.com/store/apps/details?id=net.turbo.android.launcher`
    * *Minimum operating system:* Select **Android 5.0 (Lollipop)**
5. Select **OK** and **Add**
6. Under **Manage**, click **Assignments** and assign the app to the necessary groups

## Troubleshooting

### Windows Client Installation
- If the MSI installation fails, check the Windows Event Viewer for detailed error messages
- Verify the command-line arguments are properly formatted and enclosed in quotes
- Ensure the device has sufficient permissions to write to the shared image cache location

### Mobile App Deployment
- For iOS deployment issues, verify the app is available in your region's App Store
- For Android deployment issues, ensure the Google Play Store is accessible on target devices
- Check Intune deployment status in the portal for specific error messages

For additional assistance, contact [Turbo Support](https://turbo.net/support) with the following information:
- Intune deployment configuration
- Error messages from Intune portal
- Windows Event Viewer logs (for PC deployment issues)
