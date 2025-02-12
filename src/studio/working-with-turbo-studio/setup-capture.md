# Setup Capture

The **Setup Capture** allows an application install to be recorded in order to create the container configuration. This is the recommended method of creating container configurations. The feature is only available on Windows 10+ and Windows Server 2016+ and does not support applications that are required to reboot the machine during the installation process. Use **Snapshot** if these requirements cannot be met for your application.

Note that **Setup Capture** does not capture changes to drives other than the system drive.

Below is a walkthrough of the steps required to setup capture ShareX.

#### Using Setup Capture to Capture the Application Install

Launch **Turbo Studio** and open a blank configuration by clicking **File > New**.

Click **Start Capture** and select an empty folder to store the application files and configuration file.

![Turbo Studio Setup Capture Start](/images/setupcapture.png)

Perform the ShareX installation as normal.

ShareX requires .NET 4.7. Add a .NET 4.7 layer to this application using one of the following methods:

- Install .NET 4.7 during the Setup Capture
- Add a .NET 4.7 layer to the application as a **Component** in Turbo Server

Once the installation is complete click **Stop** on the recording dialog in Turbo Studio.

The **Setup Capture** process records all running process on the system. Therefore it will likely record processes that are not necessary for this application image. Right-clicking on a process name and selecting **Copy Captured Paths** will copy all the paths that will be captured on the clipboard. This can be used to confirm that a process is necessary. For ShareX, select only the **ShareX.exe** and **ShareX-13.2.1-setup.exe** processes on the progress selection dialog and click OK.

After the recording and process selection steps are complete **Turbo Studio** will gather the necessary files and registry settings into the selected folder.

Click **Browse** next to the **Output File** field and select a folder and filename to save the build output. The **Output File** is generally saved in the same folder as the application files and registry settings that was selected above. Click **File > Save** to save the application configuration.

![Turbo Studio Setup Capture Set Output File](/images/setoutput.png)

Click **Build and Run** to build the application at the **Output File** location selected above and do a test launch of the application.

See [Deploying](/deploying/overview/overview) for information about deploying containers on the Turbo platform.
