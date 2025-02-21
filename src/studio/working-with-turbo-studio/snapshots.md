# Snapshot Capture

Many applications require combinations of filesystem and registry entries. To facilitate containerization of these applications, Turbo Studio can snapshot application installations and automatically configure them based on modifications made to the host system during setup.

If possible, the **Setup Capture** method of container creation should be used instead of snapshotting.

Note that **Snapshot** does not capture changes to drives other than the system drive.

## Process

Snapshots use before and after images of the host machine to determine configuration:

- **Before**: This snapshot is taken prior to installing the application and captures the state of the host device without the target application installed.

- **After**: This snapshot is taken after installing the application and captures all changes to the host device during application installation. Turbo Studio then computes the changes between the before and after snapshots, and inserts these changes into the configuration.

Complete the following steps to use the Snapshot feature:

1. Prepare the host device: Install Turbo Studio onto a clean machine. IMPORTANT: Taking a snapshot on a base OS image with application components already installed will result in an unreliable snapshot capture.

2. Capture the before image: Select **Capture Before** on the **Virtual Application** tab on the ribbon bar. This may take several minutes to complete.

3. (Optional) Save the Before Snapshot: Saving the before snapshot enables you to skip this step in subsequent applications from the same clean machine. Select the down arrow underneath **Capture Before** and choose **Save Snapshot**. Turbo Studio automatically saves the most recently captured before snapshot. This snapshot is reset once the **Capture and Diff** is complete.

4. Install your application: Install the appication as you would normally. If the application setup requests a reboot, save the Before Snapshot, then proceed with the reboot.

5. Capture the after image: On the **Virtual Application** tab on the ribbon bar, select **Capture and Diff**.  This captures the After Snapshot, computes the deltas between the two snapshots, and populates the image with the delta entries.

6. Review the filesystem and registry entries:  Remove any files or settings not required for proper execution. Removing unused entries will reduce image size. Be careful to avoid removal of required resources, as it will cause your image to fail to function properly.

## Capture Application Updates via Snapshot

Container updates can be captured within Turbo Studio via snapshots.

Complete the following steps to capture an update via snapshots:

1. Install the native version of the application on a clean machine.

2. Select **Capture Before**.

3. Install necessary updates to the native application.

4. Select **Capture and Diff** to create the after snapshot. This captures the deltas between the original and updated versions.

5. Set the **Project Type** to **Component**, then select **Build** to create the SVM.

This process only captures changes between the original executable and installed updates. You can then apply the resulting SVM to the original virtual package.

## Best Practices

- Performing the snapshot on a clean machine ensures that all dependencies are installed by the application setup. Installing on a machine with existing components can inadvertently include dependencies in the before snapshot and exclude them from the final output.

- If you configure a clean machine using whole-machine virtualization tools such as Microsoft Virtual PC and save a before snapshot based on this image you can snapshot many distinct containers in rapid succession by reverting the whole-machine virtual state and using the same before snapshot.

- Most applications should be configured by performing the snapshot on the earliest (least common denominator) target operating system. A small number of applications may require multi-platform merge for successful deployment across all operating system variants.

- When selecting a folder to save the Capture and Diff snapshot, select Make New Folder in Turbo Studio. This folder will not be included in the snapshot. If the folder is included in the Capture and Diff snapshot, remove it using the Filesystem tab.

- Before beginning the pruning process, save a backup of the Capture and Diff snapshot (snapshot.xappl). Revert to the original Capture and Diff snapshot in the event of an error.

- Run and use the native application to understand what registry keys and folders are updated at runtime. This will help determine the proper isolation settings for folders and registry keys.

- To determine if a folder should be set to full isolation or merge isolation, decide if the user would want access to files created within that folder outside the container environment. If yes, the folder should be set to merge, if no, full.

- Remove uninstall shortcuts during the pruning process.
