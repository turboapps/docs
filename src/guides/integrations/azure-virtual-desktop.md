# Azure Virtual Desktop Integration

Microsoft Azure Virtual Desktop (AVD) provides cloud-based virtual desktop infrastructure in Azure. This guide covers deploying Turbo applications to AVD session hosts.

::: tip What you'll learn
- How to set up optimal storage for application images in Azure
- How to configure Turbo Client on AVD hosts
- How to deploy applications to session hosts
- How to manage application access through AVD Portal
:::

::: tip Prerequisites
Before proceeding with this guide, ensure you have:
- **Turbo Hub Server**: Set up a Turbo Hub Server. For optimal performance, it should be in the same Azure region as your AVD environment.
  - Alternatively, you can set up Turbo Client in offline mode to deploy applications without a Turbo Hub Sever.
- **Turbo Client Installer**: The installer for Turbo Client. You can download it from [https://turbo.net/download](https://turbo.net/download).
- **Azure Subscription**: An active Azure subscription with an AVD environment set up.
:::

## Application Image Storage

For optimal performance and scalability in large-scale deployments (100-300 VMs or more), we recommend using either Azure NetApp Files or directly attached Azure managed disks. These options provide better performance compared to standard network shares and overcome the limitations of shared managed disks.

### Option 1: Azure NetApp Files (Recommended for large-scale deployments)

Azure NetApp Files provides high-performance file storage that can be easily scaled to accommodate large numbers of VMs.

1. Set up Azure NetApp Files:
   - Follow the [Azure NetApp Files setup guide](https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-quickstart-set-up-account-create-volumes)
   - Create a capacity pool and volume with appropriate performance tier and size for your environment and performance goals
     - Recommended: start with a **1TiB** volume in a **Premium** capacity pool
     - Monitor performance in your specific VDI environment and consider increasing the pool size if you observe bottlenecks in performance
       - Each 1 TiB in a Performance pool provides 62.5 MiB/s throughput
       - Each 1 TiB in a Standard pool provides 15.63 MiB/s
   - Ensure the volume is configured to use SMB protocol

2. Use the NetApp Files share:
   - The share can be accessed directly using its UNC path, ex: `\\storageaccount.file.core.windows.net\sharename`
   - Alternatively, you can mount the share on your session hosts using a logon script or GPO

3. Configure access:
   - Set up appropriate permissions on the SMB share
     - Administrators should be assigned write access to the shared repository folder, so they can manage the images in it
     - Users should be assigned read-only access to the image repository, so they cannot modify its contents

### Option 2: Directly Attached Azure Managed Disks

For scenarios where NetApp Files is not available or for smaller deployments, using directly attached Azure managed disks or provisioning the VM with a large enough OS disk size can provide good performance.

1. Create managed disks:
   - Use the Azure portal or Azure CLI to create managed disks for your session hosts
   - Size the disks appropriately for your application image storage needs

2. Attach disks to session hosts:
   - Attach the managed disks to your session host VMs during VM creation or as data disks to existing VMs

As an alternative to creating a separate disk, the VM can be provisioned with sufficient space on the OS disk to store the application images.

### Deprecated: Shared Managed Disks

We no longer recommend using shared managed disks for large-scale deployments due to their limitations:
- Max shares range from 2 to 10, depending on the disk tier
- For 100-300 VMs, you would need 10-30 shared disks, increasing complexity and cost

## Turbo Client Configuration for Non-Persistent AVD with Shared Image Repository

In this example, we'll use a NetAPP volume as a shared image repository in an environment using non-persistent AVDs.
The shared repository is placed in a persistent folder, so images will not have to be re-downloaded every time the AVD state is reset.

### Prepare Shared Image Repository

1. Install and configure Turbo Client on a system that has access to the NetApp share with a user who can write to it.

   ```bash
   turbo-client-setup.exe --all-users --silent --domain=https://turbo.mycompany.com --add-trusted-source=turbo.mycompany.com --image-path=\\\\storageaccount.file.core.windows.net\sharename\turboimages
   ```

   - Set the `--domain` and `--add-trusted-source` values to your Turbo Portal address.
   - Set the `--image-path` to a folder that will contain the shared image repository on your NetApp volume.

2. Authenticate with your Turbo Portal using an [API Key](/server/administration/users.html#api-keys).

   ```bash
   # Login using API key
   turbo login --all-users --api-key=<api-key>
   ```

3. Optionally, enable caching for the SVM images for faster application launches and smaller sandbox sizes.  
Caching will export the executable binaries to the assemblies folder under the image repository path.  
This setting requires the **AutoPrecache** setting to be enabled in the client and the **Enable Assembly cache setting** to be enabled in the Workspace Application Settings on the server.

   ```bash
   turbo config --all-users --enable=AutoPrecache
   ```

    Alternatively, you can manually execute the `turbo cache` command if you wish to cache individual images manually.

   ```bash
   turbo cache mozilla/firefox-esr-x64,adobe/photoshop,tableau/tableaupublic-x64
   ```

4. Use the `turbo subscribe` command to populate the shared image repository from your Turbo Server. The subscribe command can pull all images used by a workspace.

   ```bash
   Example: subscribe to the default workspace
   turbo subscribe --all-users --pull default

   Example: subscribe to all workspaces available to the API Key
   turbo subscribe --all-users --pull --all
   ```

### Deploy Applications to AVD

1. When preparing your AVD gold image, install and configure Turbo Client on a system that has access to the NetApp share.  
The AVD systems and users should have read-only access to the shared repository folder, so they cannot add or modify the images.

   ```bash
   turbo-client-setup.exe --all-users --silent --domain=https://turbo.mycompany.com --add-trusted-source=turbo.mycompany.com --image-path=\\\\storageaccount.file.core.windows.net\sharename\turboimages
   ```

2. Authenticate with your Turbo Portal using an [API Key](/server/administration/users.html#api-keys).

   ```bash
   # Using API key
   turbo login --all-users --api-key=<api-key>
   ```

3. Lock down the client configuration, so users cannot change the repository path or other client settings.

   ```
   turbo config --as-override --all-users
   ```

4. Register the shortcuts and file extensions for the applications in the subscription.

   ```bash
   Example: subscribe to the default workspace
   turbo subscribe --all-users --no-pull --register default

   Example: subscribe to all workspaces available to the API Key
   turbo subscribe --all-users --no-pull --register --all
   ```

5. Commit the AVD gold image, so that the new AVD instances will spawn from it.

**Important!**  
When making changes to your Turbo Server that require a new image to be added to the image repository, such as pushing a new application version used by your workspace or adding a new application to your workspace, you will need to repeat the steps in the **Prepare Shared Image Repository** section to refresh the shared image repository. If the image repository is not refreshed, application launches will fail because the AVDs have read-only access to the repository and cannot pull the new images to it.

## Turbo Client Configuration for Non-Persistent AVD with Baked-in Local Image Storage

In this example, we'll bake the local image storage and subscription data into the AVD gold image. In this case, application updates will require that the gold image is opened up and committed with an updated subscription.

1. When preparing your AVD gold image, install and configure Turbo Client.

   ```bash
   # Install client for all users in silent mode.
   turbo-client-setup.exe --all-users --silent
   
   # Set the image path to allusers (C:\ProgramData\Turbo\Containers\Repo)
   # If using the same cmd prompt or script, specify the full turbo.exe path as the PATH will not be updated yet
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --all-users --image-path=allusers

   # Set the Turbo Server URL
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --all-users --domain=https://turbo.mycompany.com
   
   # Enable auto registration of applications on user login
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe config --all-users --enable=AutoRegister
   ```

2. Authenticate to your Turbo Server and subscribe to your workspace.

   ```bash
   # Login with API Key
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe login --all-users --api-key <api-key>

   # When baking the subscription into the gold image, make sure to resume the subscription before updating
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe subscription --all-users --all resume

   # Subscribe to all workspaces that API Key has permission to
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe subscribe --all --pull --all-users

   # Suspend the subscription afterwards to prevent the subscription from attempting to update when the AVD instance is spun up
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe subscription --all suspend --all-users
   
   # Clean up old images
   C:\Program Files (x86)\Turbo\Cmd\turbo.exe gci --all-users
   ```

3. Commit the AVD gold image, so that the new AVD instances will spawn from it.

**Important!**  
When making changes to your Turbo Server, they will not be applied to your AVD environment until you open up your gold image and repeat steps 2-3.  
Suspending the subscription is a necessary step in order to prevent the non-persistent AVD instances from re-pulling all of the subscription updates when their state is reset, which quickly adds up when using large applications and hundreds of AVD instances.

## Offline Turbo Client Configuration

The offline Turbo Client configuration steps are generally the same as the [Deploy Using Client > Offline Client guide](/guides/desktop-client/offline-client.html).

When using AVDs with non-persistence, you can:
- Bake the `turbo installi` commands into the AVD gold image.  
Using this method will bake the application shortcuts into the gold image, so they will be immediately available to users.  
However, changes to the application registration will require updating the gold image.
- Script the `turbo installi` commands to execute on login.  
Using this method will dynamically add the application shortcuts on login, so users will see the applications appear as they are processed.  
Changes to the application registration can be applied to the login script without having to rebuild the gold image.

## Notes

These commands can be executed through:
- Manual setup on custom images
- Image builder configuration (e.g., Packer)
- Azure Custom Script Extension during deployment

## Application Access

1. Access the [AVD Portal](http://aka.ms/avdweb)
2. Verify application deployment through:
   - Turbo Server workspace view
   - Add/Remove Programs on session hosts

![AVD Subscribed Applications](/images/azure-vdi-installed.png)
