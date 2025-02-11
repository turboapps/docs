## Hub Storage

The Hub Server stores repositories and sessions in a file system based database. The database is located under the path C:\ProgramData\Turbo Server\io (formerly C:\turbo-server\io). Administrators should back up that folder in case of drive failure.

The legacy default folder C:\turbo-server\io is a virtualized folder, which will store files in the Turbo Server installation folder sandbox. In addition, any folder under the installation folder will be virtualized and stored in the sandbox. It is recommended to migrate to a folder outside of any virtualized folders. 

The recommended action to migrate the legacy Hub storage is to clear the Hub storage setting field which will migrate the data to the new default folder (C:\ProgramData\Turbo Server\io). Prior to migration, please ensure that the Hub storage has been backed up in case of unexpected failures, and that there is enough room in the destination drive.