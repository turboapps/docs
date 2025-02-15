# Windows Virtual Desktop Integration

Microsoft Windows Virtual Desktop (WVD) provides cloud-based virtual desktop infrastructure in Azure. This guide covers deploying Turbo applications to WVD session hosts.

::: tip What you'll learn
- How to set up shared image storage in Azure
- How to configure Turbo Client on WVD hosts
- How to deploy applications to session hosts
- How to manage application access through WVD Portal
:::

::: tip Prerequisites
- Azure subscription with WVD environment
- Administrative access to Azure Portal
- Turbo Server installation
- Network connectivity between WVD and Turbo Server
:::

## Shared Image Storage

A central repository for application images reduces network transfer and optimizes storage on WVD session hosts. Use an Azure managed disk with sharing enabled:

### Azure CLI Setup
```bash
az disk create -g <wvd-resource-group> -n <sharedimagedisk-name> --size-gb 1024 -l <azure-location> --sku Premium_LRS --max-shares
```

### Azure Portal Setup
1. Create a managed disk following [Azure documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-managed-disk-portal#add-a-data-disk)
2. Enable shared disk option
3. Set appropriate max shares value

![Azure Shared Disk](/images/azure-vdi.png)

::: tip Note
Different disk sizes have different max shares limits. See [Azure documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-shared) for details.
:::

### Attach Disk to Session Hosts

Choose one of these methods:

1. Manual Attachment
   - Follow [Azure disk attachment guide](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-managed-disk-portal#add-a-data-disk)

2. Automated Attachment (ARM Template)
   ```json
   "dataDisks": [
       {
           "lun": 0,
           "createOption": "attach",
           "caching": "None",
           "writeAcceleratorEnabled": false,
           "managedDisk": {
               "id": "/subscriptions/b11ccec5-c64c-4633-8e45-5dfd5db5e408/resourceGroups/path/to/shared-image-disk/providers/Microsoft.Compute/disks/<sharedimagedisk>"
           }
       }
   ]
   ```

## Turbo Client Configuration

Configure session hosts with these steps:

1. Install and configure Turbo Client:
   ```bash
   turbo-client-setup.exe --all-users --silent --domain=<turbo-server-url> --add-trusted-source=<turbo-server-url> --image-path=<path-to-sharedimagedisk>
   ```

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

1. Access the [WVD Portal](http://aka.ms/wvdweb)
2. Verify application deployment through:
   - Turbo Server workspace view
   - Add/Remove Programs on session hosts

![WVD Subscribed Applications](/images/azure-vdi-installed.png)
