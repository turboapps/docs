# Upgrading Turbo Server

The following documentation describes how to upgrade Turbo Server to the latest version.

## Preparing to upgrade

Make sure the administrator who will be running the setup file has SQL database access. Database read and write permissions are required because the setup will upgrade any database schema changes. There will be a brief maintenance window during the upgrade process. Ensure there is sufficient time to perform the upgrade process. Allocate at least approximately 30 minutes for possible maintenance downtime.

## Upgrading steps

1. Download the latest Turbo Server executable [here](https://turbo.net/download).
2. Log in as an administrative user who must have database read and write access to the Turbo Server databases. Alternatively you may change the connection strings to use password security which will allow any user login to access the database during upgrade.
3. Run the Turbo Server setup executable on the Hub server. If you have additional roles installed on other servers then you should run the setup executable on the other servers with no particular order required. It is recommended to upgrade in the following order: hub -> portal -> application servers.
4. Check that the Hub administrative site is accessible, then the Portal. It may take a minute or two after the upgrade to access the sites.