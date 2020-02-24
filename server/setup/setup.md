
## Turbo Server Setup

### Prepare the server roles deployment

As described in the [architecture overview](/docs/server/overview#architecture), there are three server roles to provision: Hub, Portal, and Application Server. Each machine hosting Turbo Server must have at least one server role installed. Typically, for medium-size workloads (less than 200 simultaneous users), Hub and Portal share a machine, and there are one or more Application Servers for streaming the applications. The minimum requirements for Hub/Portal role are listed [here](/docs/server/hub-server/getting-started#system-requirements). Application Server requires Windows Server 2016 and at least 8GB of RAM.

When you need to prepare for a bigger workload (more than 200 simultaneous users), we recommend putting Hub and Portal on separate machines. For performance and high availability reasons, you may provision multiple Portal instances (one instance is capable of handling 300 user sessions). They need to be put behind a load balancer. Such setup is described in a [separate doc](/docs/portal-server/network-and-load-balancing).

### Prepare a Windows account for Turbo services

For security reasons, we recommend using a Windows account other than SYSTEM for running Turbo services. Make sure that the account password does not expire. This account also accesses the SQL Server instance (unless you won't use Windows authentication), so if you are in a domain environment, the Turbo service account should be a domain account. During the setup, the installer makes sure that the account has the necessary "Log on as a service" security policy set on the local machine. **On the Application Server machine, the account must be a member of the Administrators group**.

### Prepare the database server

Turbo Server requires an instance of SQL Server, which is accessible by all the machines running Turbo Server roles. During the setup, the installer asks for [connection strings](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/connection-string-syntax) to two databases:

![](/docs/server/setup/setup-db-config.png)

The default connection string to a Configuration database is `Data Source=.\TURBO;Initial Catalog=Configuration;Integrated Security=True`. `Data Source` is the SQL Server instance address, where `.` is the local machine. If you have SQL Server installed on a different server, place its DNS name or IP address here. `Initial Configuration` is the name of the database. `Integrated Security=True` specifies the way how Turbo services authenticate to the database server. `Integrated Security` is a different name for Windows authentication, and it's the recommended value. To use it, you need to make sure that the service account (configured in the previous paragraph) can authenticate to the database server and has a **db_owner** membership on the Configuration and Analytics databases:

![](/docs/server/setup/db-user-windows.png)

![](/docs/server/setup/db-user-membership.png)

Alternatively, when SQL Server allows the mixed-mode authentication, you may specify a username and password, for example, `Data Source=dbserver;Initial Catalog=ConfigurationUser Id=myUsername;Password=myPassword;`.

### Prepare certificates for web servers

Although both Portal and Hub can server pages using HTTP, we highly recommend configuring HTTPS. Only the Portal machine needs to be publically accessible. However, both Portal and Hub require valid TLS certificates ([Let's Encrypt](https://letsencrypt.org/) certificates are OK). If Hub is on the same machine as Portal, only one certificate is needed as they share the domain address. Otherwise, Hub uses a certificate for its custom domain.

### Open necessary ports

All machines hosting Turbo Server roles could be placed in one internal network. The diagram below describes the communication between them:

```
Hub        <-- HTTPS (443) or HTTP (80)             --> Portal
Portal      -- TCP (5850), TCP (8084), RDP (3389)   --> AppServer
AppServer   -- HTTPS (443) or HTTP (80)             --> Portal
```

Only Portal should be accessed from the Internet and requires HTTP (80) and HTTPS (443) ports to be open. When HTTPS is configured, all traffic from HTTP port is redirected to HTTPS.

### Installation

This section describes the installation steps.

#### Provide the License Certificate

![](/docs/server/setup/setup-license.png)

After buying a Turbo Server license, you should receive from us an XML file, which is the license certificate. If you don't have it, please contact support@turbo.net. Copy the file content and paste it into the text area:

#### Choose the installation folder

![](/docs/server/setup/setup-install-path.png)

When installing the **Hub** role, make sure that the installation path points to a drive with enough space to hold the application images (we recommend at least 500GB).

Similarly, **Application Server** also requires a bigger drive (we recommend at least 200GB) as it caches the recently used images from the Hub. Additionally, make sure the system drive on the Application Server is big enough to store user containers. For files created by users, such as project files or documents, we highly advise using OneDrive (described later); however, there are always some application internal files or configuration settings that land in the container. They usually don't take much data, but we recommend at least 128GB free space on the system drive.

There are no special space requirements for the **Portal** role.

#### Specify the Turbo Server role(s)

![](/docs/server/setup/setup-server-role.png)

It is a crucial step when you decide which server roles are to be installed on a given machine. We highly recommend dedicating a separate machine for the Application Server role. For medium-sized environments, it is accepted to install Hub and Portal roles on the same machine.

#### Configure the webserver URL

![](/docs/server/setup/setup-portal-hub-address.png)

You will see this step only when configuring the Hub or the Portal role. The address in this field is the address at which the Portal/Hub will listen for connections. If the webserver is behind a load balancer, the address in this field should be the public address of the load balancer.

#### Configure the database connection strings

![](/docs/server/setup/setup-db-config.png)

Please check the section above when we prepare the database.

#### Configure the Turbo services account

![](/docs/server/setup/setup-service-account.png)

In this step, provide the credentials for the account the Turbo services should use. Please check the preparation steps if in doubt.

#### Configure the Hub administrator account

![](/docs/server/setup/setup-hub-admin.png)

It is the account you will later use to administer the Turbo Server environment.

After this step, the installation starts and should finish within about five minutes. If you experience any errors, please check the setup logs in the {install-dir}\Logs folder. If it is still unclear why the setup failed, please zip the logs and send them to support@turbo.net.

### Post-installation configuration

Some of the settings are available only after the server is installed, and we describe them in this section. 

#### Authentication

The Users tab in the administrative screen allows the administrator to manage the user accounts as well as change the way Portal authenticates the users.

If you plan to use **custom or Active Directory** accounts, please visit [this page](docs/server/hub-server/administration#managing-users-and-authentication) in our documentation. 

For Azure AD SSO configuration, please check [the Azure Active Directory Integration page](docs/server/hub-server/azure-active-directory-integration).

#### Cloud Storage and other settings

To enable OneDrive mounting in user sessions, you need to register a OneDrive client ID and secret in the Cloud Storage section. The steps how to do that are described [here](/docs/server/hub-server/administration#configuration-and-customization).

#### Licensing servers

If you use software that requires a license server, you may configure network connectivity between the Application Servers and the license server. That will work for streamed (cloud) sessions.

For native launches, we provide a tunneling option (in preview) through Portal. In this scenario, the Portal needs to have connectivity with the license server. The tunnel allows users to runs the licensed applications natively. To learn the details, please contact support@turbo.net.
