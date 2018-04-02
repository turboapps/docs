## To Turbo Server

Turbo Server is an on-premise application delivery solution. See the quick walkthrough below for instructions on adding an application to your Server.

### Basic Walkthrough

To read more about this process and Turbo Server, please refer to the [full Turbo Server documentation](/docs/deploying/to-turboserver#getting-started).

#### Create a Virtual Application

Adding an Application to Turbo Server requires you to create a virtual version of the Application using the Desktop Scan from Turbo Server or using the TurboStudio packaging tool.

To create a Turbo Virtual Machine (SVM) of standard software like Microsoft Office using the Desktop Scan:

- Go to Applications -> Import from Desktop and follow the wizard.

To create a Turbo Virtual Machine (SVM) for your Application using the TurboStudio:

- Visit https://turbo.net/studio to learn about how your enterprise can obtain a license for TurboStudio.

- Use the TurboStudio to create an SVM using the snapshot or template process. Refer to the Turbo IDE help documentation for detailed instructions on creating virtual Applications.

The evaluation version of TurboStudio creates time trial containers. To create containers that do not expire, obtain a retail license for the TurboStudio.

#### Add the Application to Turbo Server

After the **SVM** is created add the Application to Turbo Server. For more information on managing Applications and Application versions in Turbo Server, refer to Managing Applications. Complete the following steps to add a new Application to Turbo Server:

1. Navigate to the **Applications** page of the Administration Site.

2. Select **Add Application**.

3. Enter the following information for the Application:

	- **Display Name**: Application name that visible to users.
	
	- **Summary**: Brief summary of the Application.

	- **Description**: Detailed description of the Application.
	
	- **Icon**: A 90 x 90 pixel JPG, GIF or PNG image that represents the Application displayed to end users. If this field is left blank a default icon is Applicationlied to the Application. In the image is not 90 x 90, it is adjusted to fit the required dimensions.

	- **Permissions**: The default access level to the Application. You can override this setting by explicit user or group access.

	- **Licensing**: Restrictions on the number of users or devices that can run the Application.

	- **Default Expiration Date**: Restrictions on the time that users are permitted to execute this Application.

	- **Categories**: Select the categories you want the Application to Applicationear in on the Portal Site. For more information about managing categories, refer to Managing Categories.

4. Select **Save**.

After the Application is added to Turbo Server, create a specific Application version and upload the SVM. Complete the following steps to upload the SVM file as a new Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the plus symbol (Add Application version).

3. Enter the following information for the Application version:

	- **Version**: The Application version in Major.Minor.Build.Revision format. Only Major.Minor is required.

	- **Summary**: Brief summary of the Application version; defaults to parent Application summary if left blank.

	- **Description**: Detailed description of the Application version; defaults to parent Application description if left blank.

	- **Icon**: A  90 x 90 pixel JPG, GIF or PNG image that represents the Application version displayed to users. If this field is left blank, it defaults to the swatch for the parent Application.

	- **Turbo VM File**: Upload the Turbo Virtual Machine file (SVM) for this Application version. For information about creating SVMs, refer to Creating Virtual Applications.

	- **Sandbox Sync**: Automatically synchronizes Application settings and state across client computers. This is only Applicationlicable to authenticated users.

4. Select **Save**. The **SVM** file will upload to Turbo Server. Depending on the size of the Application this can take several minutes.

#### Optimize the Application Version (Optional)

Optimizing an Application version typically results in a five to twenty times faster launch. Optimization determines the best order for bytes to be transferred. Turbo recommends optimizing all Application versions over ten megabytes.

Complete the following steps to optimize an Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select **Name** from the **Applications** list.

3. Navigate to **Versions** and select your Application version.

4. Select **Optimize**, located under **Adaptive Delivery**.

5. Select **Profile Application** to open a new window with a **Run** link for each Application entry point.

6. Choose a **Run** link and use the Application as a typical user for about one minute, then close the Application. For the best performance results, the duration of the profile should vary depending on the size of the **SVM**. The duration of a profile should be approximately equal to three seconds for each MB of the **SVM**. For example, one minute for a twenty megabyte **SVM**.

7. Turbo recommends taking a profile from each platform that users will run. For example, if users are launching Applications on Microsoft Windows 7 and Microsoft Vista machines, at least one profile should be taken on each of those platforms. Repeat steps 1-3 on various platforms as needed.

8. Once all profiles are complete navigate back to the **Optimize** page.

9. All created profiles should be visible in the **Profiles** section of the page. These profiles are sorted according to the platforms they were taken on. Select **Update Model** to create a model and optimize the Application version.

10. After the model status changes to **Requested** it typically takes a few minutes to complete. When the model status reads **Complete**, this indicates that the Application version is successfully optimized and will automatically stream to users when launched from the Portal Site. You must refresh the **Optimize** page to view updates to model status.

To add additional profiles to the model, simply navigate back to the **Optimize** page, and click the **Profile Application** link. Any new profiles that are taken will show up in the **Profiles** section as *Unused*. Clicking the **Update Model** link will apply these profiles to the model.

#### Publish the Application

Turbo Server enables administrators to test Application versions prior to publishing. Complete the following to test the Application version:

1. Navigate to the **Applications** page of the Administration Site.

2. Select the Application **Name** from the Applications list.

3. Navigate to the **Versions** section and select your Application version.

4. Select **Test** to open a new window with a Run link for each Application entry point.

5. Choose a **Run** link and the Application version will launch. This behavior is identical to the end user experience.

6. To make the Application visible on the Portal Site, publish the Application version by selecting the **Published** box on the Application version page, then **Save**.
