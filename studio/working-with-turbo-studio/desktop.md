## Desktop Integration

A container image can be configured for integration into your desktop environment using custom shortcuts or file associations. Container images can be deployed to a desktop with the Turbo Client using **install**, **installi**, or **subscribe** commands or through the Turbo Server portal. Standalone executables can be deployed using a Microsoft Installer (MSI) file.

If the configuration was created using **Setup Capture** or **Snapshot** then shortcuts and file associations will automatically be defined from the values that were discovered.

### MSI Configuration

![Turbo Studio Desktop MSI Settings](https://hub.turbo.net/images/docs/msi.png)

The **MSI** panel allows configuration of Microsoft Installer output files. This is only visible for standalone executable project types. The MSI will only install the standalone executable and execute it via the shortcuts and file associations that were defined.

- **Output location** specifies the location where the MSI file will be saved when built.
- **Automatically generate MSI after successful application build** will cause Turbo Studio to automatically build a new MSI whenever a new EXE is built.
- **Product Info** properties will be applied to the installation record in _Programs and Features_ or _Add/Remove Programs_ list.
- **Install application for All Users** controls whether the application is installed to a user's _Application Data_ directory or _Program Files_. If enabled, the MSI will require administrative privileges to install.
- **Application folder** allows customization of the location where application files will be installed.
- **Automatically upgrade earlier application versions** will update the installation record, shortcuts, and file associations that were created with previous versions of the MSI. The **Product Version** field must be updated for this to be applied.
- **Allow side-by-side versions of the same application** will append to the installation record, shortcuts, and file associations that were created with previous versions of the MSI. The **Product Version** field must be updated for this to be applied.
- **Extended Properties** specifies additional property values that are displayed in the installation record.

### Shortcuts

![Turbo Studio Desktop Shortcuts](https://hub.turbo.net/images/docs/shortcuts.png)

Defines that shortcuts that are created when the container is installed to a device. Shortcuts can be created on the desktop, in the programs menu, or in the _SendTo_ folder.

- **Name** specifies the name of the shortcut that is created.
- **Target** specifies the application from the startup file list that is executed when the shortcut is clicked.
- **Edit List...** button brings up the startup file dialog to edit the available startup files.
- **Arguments** specifies that command-line parameters that are passed to the target.
- **Show As** specifies how the application is shown on launch. Options are **Normal**, **Minimized**, and **Maximized**.
- **Description** specifies the description of the shortcut that is displayed on hover.
- **Browse** button allows the selection of an icon file to be assigned.

### ProgIDs

![Turbo Studio Desktop ProgIDs](https://hub.turbo.net/images/docs/progid.png)

A ProgID (short for PROgrammatic IDentifier) is the mechanism in Microsoft Windows where actions (known as **verbs**) can be defined for specific file types.

- **ProgID** specifies the name of the ProgID (ex: "txtfile").
- **Description** specifies the friendly name of the ProgID (ex: "Text Document").
- **Icon...** assigns the associated icon file.

### Verbs

![Turbo Studio Desktop Verbs](https://hub.turbo.net/images/docs/verb.png)

**Verbs** define that actions that can be performed on a file type associated with a ProgID. These verbs will show in the context menu when right-clicking on a file.

- **Verb** specified the name of the verb. Common verbs include **Open**, **Edit**, and **Print**.
- **Default** indicates that this verb is the default action if the file type is opened (double-clicked or pressed enter key).
- **Command** is the friendly name of the verb that will be seen in the context menu for the file.
- **Inherit** uses the behavior defined in the virtual registry for the verb. If unchecked then can set the behavior manually.
- **Target** is the application from the startup file list that is executed.
- **Arguments** is the additional parameters to pass to the target application. The "%1" token is replaced by the path to the file being acted upon. Take care to quote this token appropriately so that paths that contain spaces will be handled correctly.

### Extensions

![Turbo Studio Desktop File Extensions](https://hub.turbo.net/images/docs/extension.png)

The **Extensions** list defines file types and their associated ProgIDs.

- **Extension** specifies the file extension (ex: ".txt").
- **ProgID** specifies the name of the ProgID that was defined with associated verbs to act on the file type.
- **MIME Type** specifies the MIME type label to apply to the file extension. This field is optional.

### MSI Example

Here we will show the steps required to configure a simple container to be deployed via MSI with shortcuts and file associations.

Start by creating an empty container configuration file. Add "c:\windows\syswow64\notepad.exe" from your machine to the **@SYSWOW64@** directory in the **Filesystem** panel. Set the startup file to **@SYSWOW64@\notepad.exe**, set the project type to **Standalone/ISV Application**, and set the output file location. Save the configuration file.

![Turbo Studio MSI Filesystem Example](https://hub.turbo.net/images/docs/msiex1.png)

Go to the **Settings** panel. By default the metadata will be inherited automatically from the startup file.

![Turbo Studio MSI Metadata Example](https://hub.turbo.net/images/docs/msiex2.png)

In our case, we will want to change some of these values to something more appropriate. Unselect the **Inherit properties** checkbox. Set the **Product Title** field to "Notepad Container".

![Turbo Studio MSI Metadata Example](https://hub.turbo.net/images/docs/msiex3.png)

Note that the custom value of the **Product Title** field is shown in the **Open With...** menu in Windows when file associations are configured. If you choose to inherit metadata then the value shown may not be what you want. To override what is displayed in the **Open With...** menu while still inheriting the other values, click the **Custom Metadata...** button and add the **FileDescription** field.

![Turbo Studio MSI Custom Metadata Example](https://hub.turbo.net/images/docs/msiex-4.png)

Go to the **Install** panel. Set the location where the MSI output will be written. Assign **Product Info** values. These values affect where the container files will be deployed on the machine and will show up in the uninstall entry on the machine where the MSI is installed.

![Turbo Studio MSI Project Example](https://hub.turbo.net/images/docs/msiex5.png)

If the container is to be installed for all users on the machine, then select the **Install application for All Users** checkbox. Note that this will require administrative privileges to install.

You can control how different versions of the same container MSI are handled. They can either be allowed to run versions of the container side-by-side or upgrade existing versions. Note that this is controlled by the **Product Version** field on this panel and not by the container version metadata on the **Settings** panel. Also note that for this to work properly, the MSI version must be changed inside Turbo Studio and not updated in an external editor.

Now we will add a shortcut that gets created on the desktop. Click on **Desktop** in the **Shortcuts** tree. Click **Add Shortcut...**. Set the name of the shortcut as it will appear on the desktop, in our example we will use "Notepad Container". The **Target** dropdown list will show all available startup files that can be executed by the shortcut. If there is something that is not included here, click the **Edit List...** button to add a new startup file for it. Select the icon to use for the shortcut and press **ok**.

![Turbo Studio MSI Shortcut Example](https://hub.turbo.net/images/docs/msiex-6.png)

Next we will add a file assocation to allow this container to be easily used to open .txt files from the Windows shell. Click on **ProgIds** and then **Add ProgId...**. A **ProgId** is a programatic identifier that the Windows Shell uses to associate an application with a file type. We will add one here for **textfile** which is the ProgId for all text file types. You can also assign an icon which will be used by associated files.

![Turbo Studio MSI ProgID Example](https://hub.turbo.net/images/docs/msiex-7.png)

Next we will define actions that are available for the file type from the Windows context menu (when you right-click on a file). Common verbs include "open", "edit", or "print" but you can define any that you wish. Click on the newly added **textfile** ProgId and click the **Add Verb...** button. Set the **verb** name to "open" and check the **Default** box. Default verbs will be used when a user double-click the file. Set the **Command** field to what the user will see in the context menu.

If you created your container from a snapshot or otherwise defined the file association settings in the virtual registry, then you can select the **Inherit** checkbox to use that configuration. Otherwise, set the **Target** to a startup file and specify the arguments. In most cases you will want to pass the selected file as a parameter to the application so that it can be opened. Use **%1** as a placeholder for the selected file path. Make note to properly quote this value as paths can contain spaces that may be incorrectly parsed by your application.

![Turbo Studio MSI Verb Example](https://hub.turbo.net/images/docs/msiex-8.png)

The final step is to define a file extension that will use this new ProgId. Click on **Extensions** and then on **Add Extension...**. Set the **Extension** to ".txt" and **ProgId** to "textfile". **MIME Type** is optional.

![Turbo Studio MSI Extension Example](https://hub.turbo.net/images/docs/msiex-9.png)

Now you're done. Save the configuration file and build the container. When the build completes, go to the **Install** panel and click the **Build MSI** button to produce the MSI package for the container. Copy the MSI to a test machine and run it.

![Turbo Studio MSI Install Wizard Example](https://hub.turbo.net/images/docs/msi11.png)

After installation is complete, you will notice that the shortcut that we configured is now on the desktop.

![Turbo Studio MSI Install Complete Example](https://hub.turbo.net/images/docs/msi12.png)

You will notice, however, that the file icon is the default and not what we assigned. This is because Windows 10+ doesn't allow file associations to be changed except by direct user input to prevent malware attacks. Since there were changes to the system file associations, Windows will prompt you the next time the file type is opened to confirm which application should be used. You will notice that "Notepad Container" is now in the list.

![Turbo Studio MSI File Associations Example](https://hub.turbo.net/images/docs/msi13.png)

Select **Notepad Container** from the list and check **Always use this app to open .txt files**. Press **OK**. Now the file will be permenantly linked to your container. You will notice also that the icon is now updated to that of the ProgId icon that we selected earlier. In addition, you will now see all your defined verbs in the file's context menu.

![Turbo Studio MSI Shell Extension Example](https://hub.turbo.net/images/docs/msi14.png)

In the Windows **Programs and Features** panel, you will find an entry for our **Notepad Container** deployment. Uninstalling it from here will remove all shortcuts and file associations that were added.

![Turbo Studio MSI Uninstall Example](https://hub.turbo.net/images/docs/msi15.png)
