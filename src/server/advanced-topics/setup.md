# Turbo Server Setup

Turbo Hub Server enables you to configure settings during setup. Using this process you can control the database connection strings used by Turbo Hub Server and the domain names for the Administration and Hub Sites. Turbo Hub Server supports the use of any connection string format used by Microsoft SQL Server.

Complete the following steps to install Turbo Server:

1. Download the Turbo Hub Server setup file and save it locally.

2. Open a Microsoft Windows Command Prompt and navigate to the directory of the saved setup file.

3. Enter the following command: `Setup.exe /noprovision`. This brings up a file installation wizard. Navigate through the prompts until file installation is complete, and then select **Finish**.

Complete the following steps to manually configure Turbo Server:

1. Return to the Microsoft Windows Command Prompt and navigate to the directory where the installation files are saved. You specified this location in the previous step; the default location is **C:\Program Files\Turbo Server**.

2. To manually configure Turbo Hub Server, type the command: **Server.exe /provision [ADMINISTRATOR EMAIL]**. Add any of the optional command-line arguments from the following table. Omitting any command-line arguments causes the default setting to apply.

## Command Line Arguments

| Command Line Argument | Setting |
|----------------------|---------|
| `/dblibrary "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Library;"` | Configures the connection string for the library database where settings and user information are stored. |
| `/dbmanager "Integrated Security=true;Data Source=[SERVER];Initial Catalog=Manager;"` | Configures the connection string for the manager database where usage information is stored. |
| `/wwwsite http://www.[MYSITE].com:[PORT]` | Assigns the port and fully qualified domain name for the hub site. |
| `/adminsite http://www.[MYSITE].com:[PORT]` | Assigns the port and fully qualified domain name for the administration site. |

The following is a sample command to set all four settings:

```
server.exe /provision admin@acme.com /dblibrary "Integrated Security=true;Data Source=acme;Initial Catalog=Library;" /dbmanager "Integrated Security=true;Data Source=acme;Initial Catalog=Manager;" /wwwsite http://www.acme.com /adminsite http://www.acme.com:81
```

**Note**: The Microsoft SQL Server connection string will depend on the Microsoft SQL Server configuration. For more information about the connection string, contact the database administrator. Before configuring the Turbo Server, confirm that the running user for the Windows service has appropriate access rights to the database. The service runs under the Local System account by default but the running user can be changed in the Windows services settings.

Select **Enter** to submit the command and choose **Y** to proceed.

Fully-qualified domain names can be specified on the **Domain** page of the Administration Site. For more information about modifying servers refer to Managing the Domain.