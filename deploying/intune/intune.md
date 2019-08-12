## Intune

Intune is an Azure-based device management solution by Microsoft.

This section describes the process for deploying the Turbo client to Intune-managed devices.

### Deploying Turbo.net for PC
 
1. Download the latest Turbo Client MSI installer at `https://start.turbo.net/install?msi=`
2. Sign in to the Intune portal
3. In the Intune pane select Client Apps > Apps > Add
4. In the App type list select Line-of-business app and select the Turbo Client MSI installer
5. Select Configure and provide the following information:
    * *Name:*  Enter the name of the app as it is to be displayed in the company portal
    * *Description:*  Enter a description for the app as it is to be displayed in the company portal
    * *Publisher:* Enter **Turbo.net** as the publisher.
    * *App install context:* Select **User context**
6. Optional:  Select Scope and select the necessary Tags
7. Select Add
8. Under Manage, click Assignments and assign the app to the necessary groups

### Deploying Turbo.net for iOS

1. Sign in to the Intune portal
2. In the Intune pane select **Client Apps > Apps > Add**
3. In the **App type** list select **iOS**
4. In the **Search the App Store** pane search for **Turbo.net**, select the **Turbo.net** iOS app, and press **Select**
5. (Optional) Select **App information** to edit the auto-populated fields
6. (Optional) Select **Scope** and select any desired tags
7. Select **Add**
8. Under **Manage**, click **Assignments** and assign the app to the necessary groups.

### Deploying Turbo.net for Android

To deploy Turbo.net for Android via InTune:

1. Sign in to the Intune portal
2. In the Intune pane select **Client Apps > Apps > Add**
3. In the **App type** list select **Android**
4. Select **Configure** and provide the following information:
    * *Name:*  Enter the name of the app as it is to be displayed in the company portal. Usually this would be **Turbo.net**.
    * *Description:*  Enter a description for the app as it is to be displayed in the company portal.
    * *Publisher:* Enter **Turbo.net** as the publisher.
    * *Appstore URL:* Enter `https://play.google.com/store/apps/details?id=net.turbo.android.launcher`
    * *Minimum operating system:* Select **Android 5.0 (Lollipop)**
5. Select **OK** and **Add**
6. Under **Manage**, click **Assignments** and assign the app to the necessary groups.
