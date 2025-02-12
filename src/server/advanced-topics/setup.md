# Turbo Server Setup

Turbo Hub Server enables you to configure settings during setup. Using this process you can control the database connection strings used by Turbo Hub Server and the domain names for the Administration and Hub Sites. Turbo Hub Server supports the use of any connection string format used by Microsoft SQL Server.

Complete the following steps to install Turbo Server:

1. Download the Turbo Hub Server setup file and save it locally.

2. Open a Microsoft Windows Command Prompt and navigate to the directory of the saved setup file.

3. Enter the following command: `Setup.exe /noprovision`. This brings up a file installation wizard. Navigate through the prompts until file installation is complete, and then select **Finish**.

Complete the following steps to manually configure Turbo Server:

1. Return to the Microsoft Windows Command Prompt and navigate to the directory where the installation files are saved. You specified this location in the previous step; the default location is **C:\Program Files\Turbo Server**.

2. To manually configure Turbo Hub Server, type the command: **Server.exe /provision [ADMINISTRATOR EMAIL]**. Add any of the optional command-line arguments from the following table. Omitting any command-line arguments causes the default setting to apply.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Command Line Argument</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Setting</p>
            </div>
         </th>
      </tr>
      <tr>
         <td style="white-space: nowrap">
            <p><code>/dblibrary "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Library;"</code></p>
         </td>
         <td>
            <p>Configures the connection string for the library database where settings and user information is stored.</p>
         </td>
      </tr>
      <tr>
         <td style="white-space: nowrap">
            <p><code>/dbmanager "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Manager;"</code></p>
         </td>
         <td>
            <p>Configures the connection string for the manager database where usage information is stored.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>/wwwsite <span class="nolink">http://www.[MYSITE].com:[PORT]</span></code></p>
         </td>
         <td>
            <p>Assigns the port and fully qualified domain name for the hub site.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><code>/adminsite <span class="nolink">http://www.[MYSITE].com:[PORT]</span></code></p>
         </td>
         <td>
            <p>Assigns the port and fully qualified domain name for administration site.</p>
         </td>
      </tr>
</table>
<br>
The following is a sample command to set all four settings:

```
server.exe /provision admin@acme.com /dblibrary "Integrated Security=true;Data Source=acme;Initial Catalog=Library;" /dbmanager "Integrated Security=true;Data Source=acme;Initial Catalog=Manager;" /wwwsite http://www.acme.com /adminsite http://www.acme.com:81
```

**Note**: The Microsoft SQL Server connection string will depend on the Microsoft SQL Server configuration. For more information about the connection string, contact the database administrator. Before configuring the Turbo Server, confirm that the running user for the Windows service has appropriate access rights to the database. The service runs under the Local System account by default but the running user can be changed in the Windows services settings.

Select **Enter** to submit the command and choose **Y** to proceed.

Fully-qualified domain names can be specified on the **Domain** page of the Administration Site. For more information about modifying servers refer to Managing the Domain.