# Backup and Recovery

The **Backup and Recovery** page outlines the requirements for a complete backup and recovery strategy. 

Note: The **Backup and Recovery** process also covers migrating Turbo Server to a different server.

### Backup

The following items are required to take a complete backup of Turbo Server:

- Hub storage location: The directory where the Hub role storage is located. Default location is **C:\ProgramData\Turbo Server**.

- Databases: The Configuration and Analytics SQL databases.

- Settings.xml: Turbo Server service configuration file.

- Image cache: Images(.svm) pushed to hub will be cached at the location.

It is not required to backup servers hosting only the Application role unless another process is storing data there.

It is not required to backup servers hosting only the Portal role.

It is not required to backup the installation directory and sandbox as it will be recreated during the restore process.

#### Hub Storage

It is critical to backup the Hub storage directory. This is where the application images and user session data are stored. The default location is **C:\ProgramData\Turbo Server\io**.

There are no specific or required methods to capture a backup of the Hub storage directory. However, it is required that the Turbo Server service be stopped while the backup is captured. If the service is running when the backup is captured there is a possibility that a running transaction will cause the Hub backup to be corrupted making a successful restore impossible.

If the Hub storage is low on disk space, you may find it necessary to move the Hub storage to another disk. Use the [Hub Storage Path](../../server/administration/domain.html#managing-a-server) setting to migrate the database. Ensure there are no other programs using the source and destination directories during the migration (after you save the new path setting). 

If a failure occurs during migration, the Hub server will not start. You may attempt to manually complete the migration using the following troubleshooting steps:

1. Stop the Turbo Server service on the Hub server.
2. Open File Explorer to the old Hub storage path, assuming we are working with a partial migration.
3. Ensure the remaining Turbo Hub database files are migrated. The database files are located in the Hub storage path sub directories:
  - b-large-files
  - del
  - search\index
  - sys
  - user
4. Delete the old Hub storage path directory once you are confidient all Turbo database files have been moved to the location. It is highly recommended to move the old path to another location temporarily.
5. Start the Turbo Server service and verify the Hub server starts.
6. Pull a few images to ensure the Hub is working.
7. Delete the old path if it was manually moved to a temporary location to complete the process.

If you are not confident on resolving the issue, please contact support@turbo.net for additional assistence.

#### Databases

It is critical to backup the Configuration and Analytics SQL databases. This is where the Turbo Server configuration and collected analytics data is stored.

There are no specific or required methods to capture a backup of the SQL databases.  However, it is strongly recommended to use native or purpose-built tools to backup the SQL Server databases. 

#### Settings.xml

It is critical to backup the **Settings.xml** file. It contains the configuration data necessary to start the Turbo Server service.  The default location is **C:\ProgramData\Turbo Server\Settings.xml**.

There are no specific or required methods to capture a backup of **Settings.xml.**

#### Image Cache

The image cache is an optional storage location set on the Hub server. The image cache writes any images(.svm) files to the path whenever an image is pushed to the Hub. This allows clients to be configured to look at the image cache location to run images directly instead of downloading and caching the images locally. The image cache should also be backed up and restored in case the image files are lost.

### Recovery

A successful Turbo server restore requires the following elements:

- New Turbo Server instance

- SQL databases restored to an accessible location

- Hub storage directory restored to its original location

- Post-restore tasks

#### Turbo Server Installation

Restoring Turbo Server requires a brand new and empty installation on the new server.

This installation needs to be the same version and should be installed into the same directory as the previous install. The version and install directory of the previous install can be found in the **Settings.xml** file. The default location is **C:\ProgramData\Turbo Server\Settings.xml**. 

Refer to the [Turbo Server Setup](../../server/setup-and-deployment/deploying-on-premises.html) document to complete the installation.

Stop the Turbo Server service of the new installation before moving to the next steps.

#### SQL Databases

Use native or purpose-built tools to complete the SQL database restores.

Refer to the [Turbo Server Setup](../../server/setup-and-deployment/deploying-on-premises.html) document to complete the database installation.

#### Hub Storage Directory

Restore the Hub storage directory to the same location as the previous install. 

Note: Skip to the next step if the previous Hub storage directory is not known.

#### Image Cache Directory

Restore the Hug image cache directory to the same location as the previous install if necessary.

#### Post Restore Tasks

Update or confirm the SQL database connection strings in **Settings.xml**. The default location is **C:\ProgramData\Turbo Server\Settings.xml**.

Start Turbo Server service.

Use this procedure if the Hub storage restore step was skipped due to not knowing the previous location:

- Open the Adminstration Site and navigate to **Domain > Servers**

- Open the **Hub / Portal** server and note the **Hub Storage Path** directory

- Stop the Turbo Server service

- Restore the Hub storage backup to the **Hub Storage Path**.

- Start the Turbo Server service