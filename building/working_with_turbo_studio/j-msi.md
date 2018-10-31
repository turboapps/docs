### MSI

You can build your standalone executable into a MSI that is ready to deploy in your environment. The MSI can be configured to include applicaion shortcuts and file associations.

#### MSI Settings

![](/docs/building/working_with_turbo_studio/msi1.png)

The following is a table of descriptions of the settings that you can use for MSI outputs from Turbo Studio.

<table>
	<tr>
		<th>Setting</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><b>Output location</b></td>
		<td>Name and location of the MSI file output.</td>
	</tr>
	<tr>
		<td><b>Product Info</b></td>
		<td>Meta data that will go into Add/Remove Programs when the application is installed.<ul><li>Product Name</li><li>Product Version</li><li>Company Name</li></ul></td>
	</tr>
	<tr>
		<td><b>Installation Parameters</b></td>
		<td>Specifies where to install the application and if it will be installed for all users or in the current user profile.</td>
	</tr>
	<tr>
		<td><b>Shortcuts</b></td>
		<td>List of Start Menu and Desktop shortcuts that are created when the MSI is installed.</td>
	</tr>
	<tr>
		<td><b>ProgIds</b></td>
		<td>List of ProgIds that are created on the host system when the MSI is installed.</td>
	</tr>
	<tr>
		<td><b>Extensions</b></td>
		<td>List of file extensions that are configured on the host system when the MSI is installed.</td>
	</tr>
</table>

#### MSI Example

Here we will show the steps required to configure a simple container to be deployed via MSI with shortcuts and file associations. 

Start by creating an empty container configuration file. Add "c:\windows\syswow64\notepad.exe" from your machine to the *@SYSWOW64@* directory in the *Filesystem* panel. Set the startup file to *@SYSWOW64@\notepad.exe*, set the project type to *Standalone/ISV Application*, and set the output file location. Save the configuration file.

![](/docs/building/working_with_turbo_studio/msi2.png)

Go to the *Settings* panel. By default the metadata will be inherited automatically from the startup file.

![](/docs/building/working_with_turbo_studio/msi3.png)

In our case, we will want to change some of these values to something more appropriate. Unselect the *Inherit properties* checkbox. Set the *Product Title* field to "Notepad Container".

![](/docs/building/working_with_turbo_studio/msi4.png)

Note that the custom value of the *Product Title* field is shown in the *Open With...* menu in Windows when file associations are configured. If you choose to inherit metadata then the value shown may not be what you want. To override what is displayed in the *Open With...* menu while still inheriting the other values, click the *Custom Metadata...* button and add the *FileDescription* field.

![](/docs/building/working_with_turbo_studio/msi5.png)

Go to the *Install* panel. Set the location where the MSI output will be written. Assign *Product Info* values. These values affect where the container files will be deployed on the machine and will show up in the uninstall entry on the machine where the MSI is installed. 

![](/docs/building/working_with_turbo_studio/msi6.png)

If the container is to be installed for all users on the machine, then select the *Install application for All Users* checkbox. Note that this will require administrative privileges to install. 

You can control how different versions of the same container MSI are handled. They can either be allowed to run versions of the container side-by-side or upgrade existing versions. Note that this is controlled by the *Product Version* field on this panel and not by the container version metadata on the *Settings* panel. Also note that for this to work properly, the MSI version must be changed inside Turbo Studio and not updated in an external editor.

Now we will add a shortcut that gets created on the desktop. Click on *Desktop* in the *Shortcuts* tree. Click *Add Shortcut...*. Set the name of the shortcut as it will appear on the desktop, in our example we will use "Notepad Container". The *Target* dropdown list will show all available startup files that can be executed by the shortcut. If there is something that is not included here, click the *Edit List...* button to add a new startup file for it. Select the icon to use for the shortcut and press *ok*.

![](/docs/building/working_with_turbo_studio/msi7.png)

Next we will add a file assocation to allow this container to be easily used to open .txt files from the Windows shell. Click on *ProgIds* and then *Add ProgId...*. A *ProgId* is a programatic identifier that the Windows Shell uses to associate an application with a file type. We will add one here for *textfile* which is the ProgId for all text file types. You can also assign an icon which will be used by associated files.

![](/docs/building/working_with_turbo_studio/msi8.png)

Next we will define actions that are available for the file type from the Windows context menu (when you right-click on a file). Common verbs include "open", "edit", or "print" but you can define any that you wish. Click on the newly added *textfile* ProgId and click the *Add Verb...* button. Set the *verb* name to "open" and check the *Default* box. Default verbs will be used when a user double-click the file. Set the *Command* field to what the user will see in the context menu. 

If you created your container from a snapshot or otherwise defined the file association settings in the virtual registry, then you can select the *Inherit* checkbox to use that configuration. Otherwise, set the *Target* to a startup file and specify the arguments. In most cases you will want to pass the selected file as a parameter to the application so that it can be opened. Use *%1* as a placeholder for the selected file path. Make note to properly quote this value as paths can contain spaces that may be incorrectly parsed by your application.

![](/docs/building/working_with_turbo_studio/msi9.png)

The final step is to define a file extension that will use this new ProgId. Click on *Extensions* and then on *Add Extension...*. Set the *Extension* to ".txt" and *ProgId* to "textfile". *MIME Type* is optional.

![](/docs/building/working_with_turbo_studio/msi10.png)

Now you're done. Save the configuration file and build the container. When the build completes, go to the *Install* panel and click the *Build MSI* button to produce the MSI package for the container. Copy the MSI to a test machine and run it.

![](/docs/building/working_with_turbo_studio/msi11.png)

After installation is complete, you will notice that the shortcut that we configured is now on the desktop.

![](/docs/building/working_with_turbo_studio/msi12.png)

You will notice, however, that the file icon is the default and not what we assigned. This is because Windows 10 doesn't allow file associations to be changed except by direct user input to prevent malware attacks. Since there were changes to the system file associations, Windows will prompt you the next time the file type is opened to confirm which application should be used. You will notice that "Notepad Container" is now in the list.

![](/docs/building/working_with_turbo_studio/msi13.png)

Select *Notepad Container* from the list and check *Always use this app to open .txt files*. Press *OK*. Now the file will be permenantly linked to your container. You will notice also that the icon is now updated to that of the ProgId icon that we selected earlier. In addition, you will now see all your defined verbs in the file's context menu.

![](/docs/building/working_with_turbo_studio/msi14.png)

In the Windows *Programs and Features* panel, you will find an entry for our *Notepad Container* deployment. Uninstalling it from here will remove all shortcuts and file associations that were added.
