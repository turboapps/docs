# Azure Virtual Desktop Integration

Microsoft Azure Virtual Desktop (AVD) provides cloud-based virtual desktop infrastructure in Azure. This guide covers deploying Turbo applications to AVD session hosts.

::: tip What you'll learn
- How to set up optimal storage for application images in Azure
- How to configure Turbo Client on AVD hosts
- How to deploy applications to session hosts
- How to manage application access through AVD Portal
:::

## Prerequisites

Before starting the Azure Virtual Desktop integration with Turbo, ensure you have the following:

* **Turbo Account**: A Turbo account or organization subscription. Sign up at [Turbo.net](https://turbo.net/) if you haven't already.
* **Turbo Hub Server**: Set up a Turbo Hub Server. For optimal performance, it should be in the same Azure region as your AVD environment.
* **Turbo Client Installer**: The installer for Turbo Client. You can download it from [https://turbo.net/download](https://turbo.net/download).
* **Azure Subscription**: An active Azure subscription with an AVD environment set up.

Once you have these prerequisites in place, you can proceed with the Azure Virtual Desktop integration setup.

## Application Image Storage

For optimal performance and scalability in large-scale deployments (100-300 VMs or more), we recommend using either Azure NetApp Files or directly attached Azure managed disks. These options provide better performance compared to standard network shares and overcome the limitations of shared managed disks.

### Option 1: Azure NetApp Files (Recommended for large-scale deployments)

Azure NetApp Files provides high-performance file storage that can be easily scaled to accommodate large numbers of VMs.

1. Set up Azure NetApp Files:
   - Follow the [Azure NetApp Files setup guide](https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-quickstart-set-up-account-create-volumes)
   - Create a volume with appropriate performance tier and size
   - Ensure the volume is configured to use SMB protocol

2. Use the NetApp Files share:
   - The share can be accessed directly using its UNC path (\\\\storageaccount.file.core.windows.net\sharename)
   - Alternatively, you can mount the share on your session hosts

3. Configure access:
   - Set up appropriate permissions on the SMB share
   - Ensure your session hosts have the necessary access rights to read and write to the share

### Option 2: Directly Attached Azure Managed Disks

For scenarios where NetApp Files is not available or for smaller deployments, using directly attached Azure managed disks can provide good performance.

1. Create managed disks:
   - Use the Azure portal or Azure CLI to create managed disks for your session hosts
   - Size the disks appropriately for your application image storage needs

2. Attach disks to session hosts:
   - Attach the managed disks to your session host VMs during VM creation or as data disks to existing VMs

### Deprecated: Shared Managed Disks

We no longer recommend using shared managed disks for large-scale deployments due to their limitations:
- Max shares range from 2 to 10, depending on the disk tier
- For 100-300 VMs, you would need 10-30 shared disks, increasing complexity and cost

## Turbo Client Configuration

Configure session hosts with these steps:

1. Install and configure Turbo Client:
   ```bash
   turbo-client-setup.exe --all-users --silent --domain=<turbo-server-url> --add-trusted-source=<turbo-server-url> --image-path=<path-to-storage>
   ```
   Replace `<path-to-storage>` with the appropriate path for your chosen storage solution (NetApp share or local disk path).

2. Authenticate with Turbo Server:
   ```bash
   # Using user credentials
   turbo.exe login --all-users

   # Using API key
   turbo.exe login --all-users --api-key=<api-key>
   ```

3. Subscribe to workspace applications:
   ```bash
   turbo.exe subscribe --all-users <workspace>
   ```

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
