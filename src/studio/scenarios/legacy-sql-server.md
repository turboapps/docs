# Legacy SQL Server

Some legacy applications have dependencies on legacy versions of SQL Server. Here it will be shown how to create and configure a SQL Server 2005 Express Edition image using Turbo Studio and the snapshot method.

### Prerequisites

Perform the snapshot on a clean Windows 7 x64 system that has all the latest Windows Updates. It is important to ensure that no Microsoft Visual C++ Redistributable packages are installed as they will be missed during the snapshot. Note that uninstalling the packages will leave behind files and registry keys that will render the resulting snapshot incomplete so they must never have been installed on the machine.

Install Turbo Studio. See [downloads](https://turbo.net/download) for the latest version.

### The Build

1. In Turbo Studio, press the _Capture Before_ snapshot button.

2. Install SQL Server 2005 Express Edition. You can download the installer here: https://www.microsoft.com/en-us/download/confirmation.aspx?id=21844

3. Install SQL Server 2005 Service Pack 4 - [kb2463332](https://www.catalog.update.microsoft.com/search.aspx?q=kb2463332)

4. Configure SQL as needed. For example, you may want to add users with access or pre-configure databases.

5. Stop all SQL related services. The services have a lock on required files that prevents them from being copied to the Files snapshot folder.

```
# in an admin console
> sc stop sqlwriter
> sc stop sqlbrowser

# assuming the default instance name of SQLEXPRESS
> sc stop mssql$SQLEXPRESS
```

6. In Turbo Studio, press the _Catpure and Diff_ snapshot button.

7. Clear out all startup file entries as well as any shortcuts that were picked up by the snapshot. This will avoid starting unnecessary processes and creating undesired shortcuts when using SQL Server Express as a component of other applications.

8. To isolate the instance, edit the .xappl configuration in a text editor and add the following to NamedObjectIsolation ("SQLEXPRESS" is the default name of the instance, if your instance name is different then you will use it below). If the instance is isolated then only application from inside the same container will be able to connect to it.

```
<NamedObjectIsolation enabled="False">
    <Exception regex="SQLEXPRESS" />
    <Exception regex="sql\\query" />
</NamedObjectIsolation>
```

### Troubleshooting

The SQL Server service logs are stored in the following location inside the container **C:\Program Files (x86)\Microsoft SQL Server\MSSQL.1\MSSQL\LOG**.
