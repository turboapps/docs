### Snapshotting

Many applications require combinations of filesystem and registry entries. To facilitate containerization of these applications, Turbo Studio can snapshot application installations and automatically configure them based on modifications made to the host system during setup.

#### Process

Snapshots use before and after images of the host machine to determine configuration:

- **Before**: This snapshot is taken prior to installing the application and captures the state of the host device without the target application installed.

- **After**: This snapshot is taken after installing the application and captures all changes to the host device during application installation. Turbo Studio then computes the changes between the before and after snapshots, and inserts these changes into the configuration.

Complete the following steps to use the Snapshot feature:

1. Prepare the host device: remove the target application and all dependencies or copy Turbo Studio onto a clean machine.

2. Capture the before image: select the Virtual Application tab on the ribbon bar and then Capture Before. This may take several minutes to complete.

3. Save the before snapshot (optional): saving the before snapshot enables you to skip this step in subsequent applications from the same clean machine. Select the down arrow underneath Capture Before and choose Save Snapshot. Turbo Studio automatically saves the most recently captured before snapshot; this snapshot is reset once the Capture and Diff is complete.

4. Install your application: also install any other files, settings, runtimes, and components you want to include in the image. Refer to Add Runtimes and Components for more information. If the application setup requests a reboot, save the before snapshot, then proceed with the reboot.

5. Capture the after image: on the Virtual Application tab on the ribbon bar, select Capture and Diff.  This captures the after snapshot, computes the deltas between the two snapshots, and populates the image with the delta entries.

6. Review the filesystem and registry entries: also remove any files or settings which are not required for proper execution of your container. Removing unused entries will reduce image size. Avoid accidental removal of required resources, as it will cause your image to no longer function properly.

#### Capture Application Updates via Snapshot

Container updates can be captured within Turbo Studio via snapshots.

Complete the following steps to capture an update via snapshots:

1. Install the native version of the application on a clean machine.

2. Select Capture Before.

3. Install necessary updates to the native application.

4. Select Capture and Diff to create the after snapshot. This captures the deltas between the original and updated versions.

5. Set the Project Type to Component, then select Build to create the SVM.

This process only captures changes between the original executable and installed updates. You can then apply the resulting SVM to the original virtual package.

For more information on updating containers using SVMs, refer to Create and Use Shared Virtual Components and Specify Additional SVMs for a container.

#### Best Practices

- Performing the snapshot on a clean machine ensures that all dependencies are installed by the application setup. Installing on a machine with existing components can inadvertently include dependencies in the before snapshot and exclude them from the final output.

- If you configure a clean machine using whole-machine virtualization tools such as Microsoft Virtual PC and save a before snapshot based on this image you can snapshot many distinct containers in rapid succession by reverting the whole-machine virtual state and using the same before snapshot.

- Most applications should be configured by performing the snapshot on the earliest (least common denominator) target operating system. A small number of applications may require multi-platform merge for successful deployment across all operating system variants.

- When selecting a folder to save the Capture and Diff snapshot, select Make New Folder in Turbo Studio. This folder will not be included in the snapshot. If the folder is included in the Capture and Diff snapshot, remove it using the Filesystem tab.

- Before beginning the pruning process, save a backup of the Capture and Diff snapshot (snapshot.xappl). Revert to the original Capture and Diff snapshot in the event of an error.

- Run and use the native application to understand what registry keys and folders are updated at runtime. This will help determine the proper isolation settings for folders and registry keys.

- To determine if a folder should be set to full isolation or merge isolation, decide if the user would want access to files created within that folder outside the container environment. If yes, the folder should be set to merge, if no, full.

- Remove uninstall shortcuts during the pruning process.

#### Snapshotting Google Chrome Install

Below is a walkthrough of the steps required to snapshot Google Chrome.

##### Start with a Clean Virtual Machine

![](/docs/building/working_with_turbo_studio/vm1.png)

When using the snapshot method to containerize an application, it is important to start with a clean system so that no components are missed during the capture and diff process. 

The snapshot process can be performed on a virtual machine or a physical machine. Typically a virtual machine is used so that the system can easily be reset in case the process needs to be repeated.

There are many options for virtual machine software including VMWare Workstation, Oracle Virtual Box (free) and Microsoft Virtual PC. In this example I will be using Oracle Virtual Box.

Turbo Studio can be downloaded from [https://turbo.net/studio](https://turbo.net/studio).

In this example we will be creating a snapshot of Google Chrome.

![](/docs/building/working_with_turbo_studio/vm2.png)


##### Using the Wizard to Capture the Application Install

Select the third option in the Wizard, **Snapshot a third-party application or component**.

![](/docs/building/working_with_turbo_studio/snapshot1.png)

Select **Next** on the following screen to capture the "before" snapshot.

![](/docs/building/working_with_turbo_studio/snapshot2.png)

Chrome can be installed in two different locations on the system. The standard location is underneath the Current User profile. There is another enterprise installer available on the Google website for installing Chrome under Program Files.  In this example the enterprise location will be used, but both approaches will be discussed in the following steps.

Launch **Chrome**. 

Close the open tabs and then exit **Chrome** (ensure it is not running in the background by checking the system tray and task manager) .

![](/docs/building/working_with_turbo_studio/snapshot3.png)

Navigate to **Services**. Disable both Google Chrome update services.

![](/docs/building/working_with_turbo_studio/snapshot4.png)

Open **%LOCALAPPDATA%\Google\Chrome\User Data\Default\Preferences** with **Notepad**. Configure the preferences as you see fit. In this example, we set the following configuration:

```
{ 
  "homepage" : "http://www.google.com", 
  "homepage_is_newtabpage" : true, 
  "browser" : { 
	"show_home_button" : true, 
	"check_default_browser" : false
  },

	"download": {
	"directory_upgrade": true,
	"extensions_to_open": "",
	"prompt_for_download": true

  },
  "bookmark_bar" : { 
	"show_on_all_tabs" : true 
  }, 
  "distribution" : { 
	"msi" : true,
	"system_level" : true,
	"verbose_logging" : true,
	"skip_first_run_ui" : true, 
	"show_welcome_page" : true, 
	"import_search_engine" : true, 
	"import_history" : false, 
	"create_all_shortcuts" : false,   
	"do_not_launch_chrome" : true, 
	"make_chrome_default" : false 
  }, 
  "first_run_tabs" : [ 
	"welcome_page", 
	"new_tab_page" 
  ] 
}
```


![](/docs/building/working_with_turbo_studio/snapshot5.png)

Return to the Turbo Studio wizard. Click **Next**.

![](/docs/building/working_with_turbo_studio/snapshot6.png)

Click **Next**.

![](/docs/building/working_with_turbo_studio/snapshot7.png)

Create a folder named **Chrome** and Click **OK**.

![](/docs/building/working_with_turbo_studio/snapshot8.png)

Click **Next**.

![](/docs/building/working_with_turbo_studio/snapshot9.png)

Click **Next**.

![](/docs/building/working_with_turbo_studio/snapshot10.png)

Click **Next**.

![](/docs/building/working_with_turbo_studio/snapshot11.png)

Enter **filename** as **chrome49** and then click **Save**.

![](/docs/building/working_with_turbo_studio/snapshot12.png)

Navigate to **FileSystem** and delete the **Update** folder found in the install directory.

![](/docs/building/working_with_turbo_studio/snapshot13.png)

Delete the **Installer** folder.

![](/docs/building/working_with_turbo_studio/snapshot14.png)

Navigate to Local Application Data (Low Integrity). Delete the **Microsoft** folder, if it exists.

![](/docs/building/working_with_turbo_studio/snapshot15.png)

Navigate to Application Data. Delete the **Microsoft** folder, if it exists.

![](/docs/building/working_with_turbo_studio/snapshot16.png)

Navigate to **Registry** then navigate to **current user root > software**. Delete the **Microsoft** folder.

Repeat this step for:

**local machine root\SOFTWARE\Wow6432Node\Microsoft**
**local machine root\SOFTWARE\Microsoft**

![](/docs/building/working_with_turbo_studio/snapshot17.png)

Navigate to **Registry** then navigate to **current user root > SOFTWARE** and set the **Google** key's **isolation** setting to **Full**.

Repeat this for:
**local machine root\SOFTWARE\Wow6432Node\Google**

![](/docs/building/working_with_turbo_studio/snapshot18.png)

Navigate to **Settings->Process Configuration**.

Check the checkboxes for **Enable windows class isolation** and **Always launch child processes as current user**.

![](/docs/building/working_with_turbo_studio/snapshot19.png)

Set the **project type** to **component** and then click **Build**.

![](/docs/building/working_with_turbo_studio/snapshot20.png)

Click Ok to finish and close Turbo Studio.

![](/docs/building/working_with_turbo_studio/snapshot21.png)

Copy the created **Chrome** foldeer that contains the svm file from your VM to a fileshare. 

Read [http://stage.turbo.net/docs/deploying](http://stage.turbo.net/docs/deploying) for information about deploying the application.

