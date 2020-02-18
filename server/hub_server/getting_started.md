## Getting Started

Turbo Hub Server is an on-premise application delivery platform. In this section you will learn about system requirements and instructions for installing, configuring and running Turbo Hub Server.

### System Requirements

For small to medium size deployments (less than 200 concurrent users), the minimum recommended machine specifications are:

- Microsoft Windows Server 2012R2+. Microsoft Windows Server 2016 recommended for any application server roles.
- At least 4 GB of RAM
- 2.5 GHz or greater processor with at least 2MB L2 cache

Larger enterprise deployments may require additional processing power, memory, and disk space. For sizing and technical guidance, contact Turbo at support@turbo.net.

### Database Requirements

Turbo Hub Server is installed with an embedded SQL Express database. However, we recommend this database only be used for demonstration or testing purposes. When using Turbo Hub Server in production, we recommend connecting Turbo Hub Server to an external SQL database.

### Disk Space Requirements

The initial installation of Turbo Hub Server requires 1.05 GB of free space on your hard drive.

The amount of disk space required varies based on how many applications your server hosts as well as how many users you have. 

Turbo DB uses data deduplication to minimize storage consumption when multiple copies of the same data are stored on the server, so your exact needs may vary based on the content being stored.

### Firewall and Security

The Turbo Server installation automatically creates firewall rules for the selected roles. These rules allow external connections to access the Turbo Server sites and services. The opened ports are listed below:

#### Hub Server

<table>
<tbody>
<tr>
    <th>Port</th>
    <th>Protocol</th>
    <th>Description</th>
</tr>
<tr>
    <td>80</td>
    <td>TCP</td>
    <td>Administration Site HTTP</td>
</tr>
<tr>
    <td>443</td>
    <td>TCP</td>
    <td>Administration Site HTTPS</td>
</tr>
</tbody>
</table>

#### Portal Server

<table>
<tbody>
<tr>
    <th>Port</th>
    <th>Protocol</th>
    <th>Description</th>
</tr>
<tr>
    <td>80</td>
    <td>TCP</td>
    <td>Portal Site HTTP</td>
</tr>
<tr>
    <td>443</td>
    <td>TCP</td>
    <td>Portal Site HTTPS</td>
</tr>
<tr>
    <td>1080</td>
    <td>TCP</td>
    <td>Tnlr Proxy</td>
</tr>
</tbody>
</table>

#### Application Server

<table>
<tbody>
<tr>
    <th>Port</th>
    <th>Protocol</th>
    <th>Description</th>
</tr>
<tr>
    <td>5850</td>
    <td>TCP</td>
    <td>Application Server Rdp Proxy</td>
</tr>
<tr>
    <td>8084</td>
    <td>TCP</td>
    <td>Application Server Service</td>
</tr>
</tbody>
</table>
<br/>


If your Turbo Server is running behind an external firewall that restricts these ports, you may need to configure the external firewall manually. For instructions on opening ports and for recommendations on how to best secure Turbo Server, refer to [Configure Turbo Server Security](/docs/server/hub-server/advanced-topics#configure-turbo-server-security).

### Setup

In this section you will learn how to use the Setup Wizard to automatically configure Turbo Server. For details regarding manual configuration of Turbo Server, refer to [Manually Configure Turbo Server](/docs/server/hub-server/advanced-topics#configure-turbo-server-security).

Complete the following steps to set up Turbo Server:

1. [Download Turbo Server](https://turbo.net/server/download) and run the setup application.

2. Select **Next** to start the installation wizard.

3. Read the End User License Agreement, check the box and select **Next**.

4. Enter the License Certificate from your [Account Licenses](https://turbo.net/settings/licenses) page and select **Next**.

4. Use **Destination Folder** to choose where Turbo Hub Server files are installed and select **Install**.

5. Choose the Server Roles that will be installed on the machine and select **Next**.

6. Enter the web service scheme, hostname, and port where your hub, portal, broker, and public web services will be hosted and select **Next**. The **Administration Site** and **Hub Site** will be accessible from this web service root after the install completes.    

    If Microsoft IIS is already on the machine then port 80 may already be in use. Verify that the ports assigned to the Administration and Hub sites are not already in use.

7. If the **Farm** server role was selected, the **Database Setup** page will request database connection information to an external SQL Server Database. When using an external SQL Server Database, be sure that the "Log On" user for the Turbo Server Windows Service has the appropriate access to the database. It may be necessary to modify the Log On user for the service by editing the service details after installing Turbo Hub Server.
    
	**Note:** Turbo Server supports all versions of Microsoft SQL Server 2005 or newer and Azure SQL. Any connection string format supported by Microsoft SQL Server may be used.
	
8. Enter your **Administration Account** credentials and select **Install**. This administration account will be used to access the Administration Site after install.

9. Select **Install** to begin configuring Turbo Hub Server.

10. After setup is complete the Administration Site automatically opens and displays a web page where you can apply your license. Both evaluation and retail licenses are applied here. To obtain an evaluation license, login or create an account on http://turbo.net. For information on purchasing a retail license, refer to the [Licensing](/docs/server/hub-server/getting-started#licensing) topic.

12. Start using Turbo Hub Server!

### Licensing

The standard Turbo Hub Server license, **Turbo Server Enterprise Edition**, consists of a server license and a custom number of unique or simultaneous end-users. The standard license enables an unlimited number of applications to be hosted on Turbo Hub Server.

Users are typically accounted for with a username and password. However, you can use anonymous users. In this case, each user is defined by the domain of the hosted Turbo Hub Server and a specific username, such as SomeCompany\SomeUser. 

The Turbo Server administrator can activate and deactivate users as needed, or add additional allowed users or devices by upgrading the license. For more information about managing users refer to [Managing Users and Authentication](/docs/server/hub-server/administration#managing-users-and-authentication). For instructions on applying a new license to Turbo Server, refer to [Configuration and Customization](/docs/server/hub-server/administration#configuration-and-customization).

### Administration Site

Turbo Server has an administration site interface that enables Turbo Hub Server administrators to manage and control all aspects of a Turbo Server instance, including:

- Licensing
- Application Image Repositories
- Users

The Administration Site also provides detailed application usage analytics via pre-configured reports. The administration site is automatically configured during Turbo Hub Server setup, and is assigned to path /admin on port 80 by default. For more information about how to administer Turbo Server, refer to [Turbo Server Administration](/docs/server/hub-server/administration).

### Hub Site

The Turbo Hub Server hub site gives users access to application repositories from the Turbo Launcher, Turbo Client command line tools, or from a connected Turbo Streaming Server instance. The Hub Site is assigned to port 80 by default.

#### Logging In

If the server has an **Authentication Type** that enables anonymous access, users can launch applications without logging in. If the server requires users to log in with a username and password, however, users must provide valid credentials to access the hub and application repositories.

If you are a user and need to log in but do not know your username and password, contact your Administrator to retrieve your credentials.
 
#### Signing In and Out via Turbo Launcher

Users can also log in or out via the Turbo Launcher after it is installed on their local machine. Users can bring up the Turbo Launcher by either going to the System Tray or hitting the keys "Alt + Windows." If the user is not logged in already, a login form will be available. If logged in, the user can click on the arrow in the lower-left corner of the Console and select "Sign Out" or "Exit." 

When specifying the server URL in the login form, use one of the conventions, below, as appropriate:

- Using http on the default port (80): http://<server>
- Using http on any other port: http://<server>:<port>
- Using https (SSL) on the default port (443): https://<server>
- Using https (SSL) on any other port: https://<server>:<port>

#### Installing the Turbo Client

The Turbo Client interacts with the Turbo VM kernel to allow container execution. If you want your Turbo Client to automatically be updated for compatibility and feature fixes, download the Windows client installer from http://turbo.net/downloads. If you want to manage updates manually, download the Windows client installer from the hub at http://[hubserver]/Plugin/Install/ (note that the path is case sensitive and requires the trailing slash).

### Upgrading

The new version of Turbo Hub Server will include a new Turbo Client, an updated Hub Site, and many other new features.

When upgrading Turbo Hub Server, the service will restart. Be sure to alert users that the system is under maintenance before upgrading.
