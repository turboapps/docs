### Snapshotting

Many applications require combinations of filesystem and registry entries. To facilitate containerization of these applications, Spoon Studio can snapshot application installations and automatically configure them based on modifications made to the host system during setup.

#### Process

Snapshots use before and after images of the host machine to determine configuration:

- **Before**: This snapshot is taken prior to installing the application and captures the state of the host device without the target application installed.

- **After**: This snapshot is taken after installing the application and captures all changes to the host device during application installation. Spoon Studio then computes the changes between the before and after snapshots, and inserts these changes into the configuration.

Complete the following steps to use the Snapshot feature:

1. Prepare the host device: remove the target application and all dependencies or copy Spoon Studio onto a clean machine.

2. Capture the before image: select the Virtual Application tab on the ribbon bar and then Capture Before. This may take several minutes to complete.

3. Save the before snapshot (optional): saving the before snapshot enables you to skip this step in subsequent applications from the same clean machine. Select the down arrow underneath Capture Before and choose Save Snapshot. Spoon Studio automatically saves the most recently captured before snapshot; this snapshot is reset once the Capture and Diff is complete.

4. Install your application: also install any other files, settings, runtimes, and components you want to include in the image. Refer to Add Runtimes and Components for more information. If the application setup requests a reboot, save the before snapshot, then proceed with the reboot.

5. Capture the after image: on the Virtual Application tab on the ribbon bar, select Capture and Diff.  This captures the after snapshot, computes the deltas between the two snapshots, and populates the image with the delta entries.

6. Review the filesystem and registry entries: also remove any files or settings which are not required for proper execution of your virtual application. Removing unused entries will reduce image size. Avoid accidental removal of required resources, as it will cause your image to no longer function properly.

#### Capture Application Updates via Snapshot

Virtual application updates can be captured within Spoon Studio via snapshots.

Complete the following steps to capture an update via snapshots:

1. Install the native version of the application on a clean machine.

2. Select Capture Before.

3. Install necessary updates to the native application.

4. Select Capture and Diff to create the after snapshot. This captures the deltas between the original and updated versions.

5. Set the Project Type to Component, then select Build to create the SVM.

This process only captures changes between the original executable and installed updates. You can then apply the resulting SVM to the original virtual package.

For more information on updating virtual applications using SVMs, refer to Create and Use Shared Virtual Components and Specify Additional SVMs for a Virtual Application.

#### Best Practices

- Performing the snapshot on a clean machine ensures that all dependencies are installed by the application setup. Installing on a machine with existing components can inadvertently include dependencies in the before snapshot and exclude them from the final output.

- If you configure a clean machine using whole-machine virtualization tools such as Microsoft Virtual PC and save a before snapshot based on this image you can snapshot many distinct virtual applications in rapid succession by reverting the whole-machine virtual state and using the same before snapshot.

- Most applications should be configured by performing the snapshot on the earliest (least common denominator) target operating system. A small number of applications may require multi-platform merge for successful deployment across all operating system variants.

- When selecting a folder to save the Capture and Diff snapshot, select Make New Folder in Spoon Studio. This folder will not be included in the snapshot. If the folder is included in the Capture and Diff snapshot, remove it using the Filesystem tab.

- Before beginning the pruning process, save a backup of the Capture and Diff snapshot (snapshot.xappl). Revert to the original Capture and Diff snapshot in the event of an error.

- Run and use the native application to understand what registry keys and folders are updated at runtime. This will help determine the proper isolation settings for folders and registry keys.

- To determine if a folder should be set to full isolation or merge isolation, decide if the user would want access to files created within that folder outside the virtual application environment. If yes, the folder should be set to merge, if no, full.

- Remove uninstall shortcuts during the pruning process.