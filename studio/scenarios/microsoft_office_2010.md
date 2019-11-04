## Microsoft Office 2010

Microsoft Office 2010 is commonly used with legacy plugins or line of business applications. This can be problematic as enterprises rush to migrate their users to the latest version of Office 365 or Office 2016 which are not able to run side-by-side with Office 2010.

Fortunately it is possible to run Office 2010 applications inside a Turbo container allowing them to be isolated from existing installations. Below are the steps required to build your own Office 2010 image.

### Building

In order to make an Office 2010 build, you will need to use Turbo Studio to perform a snapshot. You will need a **clean** machine or VM to do this on (no other applications installed, Office not previously installed). For maximum compatibility it is recommended to use a Windows 7 x64 snapshot machine and Office 2010 x86 installer.

Download the [Microsoft Office 2010 Deployment Kit for App-V](https://www.microsoft.com/en-us/download/details.aspx?id=10386). This contains licensing service components that allow Office 2010 to run in a container. You want the version of the the kit (64- or 32-bit) to match the system architecture (x64 or x86), not the installation type of Office itself.

Extract the files from the deployment kit to your snapshot machine. Install the office licensing service from the extracted deployment kit:

```
> msiexec /i OffVirt.msi PROPLUS=1
```

NOTE: The parameters to pass to **OffVirt.msi** depend on the Office 2010 product you are installing. See [How to sequence Microsoft Office 2010](https://support.microsoft.com/en-us/help/2830069/how-to-sequence-microsoft-office-2010-in-microsoft-application-virtual) for information about the options that are available.

Use Turbo Studio to **Capture Before**.

![](/docs/studio/scenarios/office1.png)

Install Microsoft Office 2010. **NOTE:** this must be done with a KMS or VLK installer. Retail licenses will not work properly.

If there are any additional components or plugins that are to be included in the build, install those now.

Once the installation is complete, run the Office applications that were installed to ensure that initial configuration and licensing is correct.

Use Turbo Studio to **Capture and Diff**.

After the snapshot is complete, the **Microsoft Office Snapshot** wizard will present you with some options to isolate the configuration file. In almost all scenarios you will want the first option, to isolate from the native system. This will allow you to run side-by-side with native versions of Microsoft Office. In scenarios where the Office 2010 container is run with native components and plugins, then it may be required to select the second option. However, this option generally doesn't allow for side-by-side operation with native Office installations.

![](/docs/studio/scenarios/office2.png)

Set the **Project Type** to **ISV Application (.exe)**, save the configuration, and build.

### Testing

To test your Office 2010 build, copy the output .exe to a new machine. You will have to install the **Microsoft Office 2010 Deployment Kit for App-V** in the same manner as you did on the snapshot machine.

