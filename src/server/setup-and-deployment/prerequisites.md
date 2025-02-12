# Prerequisites

In this section you will learn about system and software requirements for installing the various Turbo Server components. To ensure a smooth installation process, it is important to have a clean machine. Please note that preinstalled programs such as IIS and Java may cause interference with Turbo Server, so it is recommended not to have them installed beforehand.

### System Requirements

Minimum system requirements:
- 64-bit 2.6 GHz CPU with 4 cores or better
- Microsoft Windows Server 2012R2+
- Microsoft Windows 10+ Enterprise multi-session (Azure)
- At least 16 GB of RAM
- .NET Framework 4.8

Additional requirements for __Portal role__:
- Memory usage grows with the number of streamed application connections. In general, the Portal's broker memory limit should be set at 2 GB plus 50 MB of memory per concurrent user.
- A Portal server can support 200 concurrent application sessions. Additional Portal servers should be provisioned behind an external load balancer if the environment is expected to have more than 200 concurrent sessions.

Additional requirements for __Hub role__:
- Memory usage grows with the number and size of applications pushed to the server. It also grows with the number of users pulling applications and session persistence data from the Hub storage. The Hub memory limit should be set at 8 GB plus 50 MB per concurrent user.
- Hard disk usage grows with the number and size of applications pushed to the server as well as the number and size of sessions synchronized with the Hub.

Additional requirements for the __Application role__:
- Hard disk usage grows with the number and size of applications executed on the server as well as the number and size of the user's sessions.
- RDS Licensing must be configured if using Windows Server. Windows 10/11 Multi-Session is also supported for the Application role.
- The server system must meet the hardware requirements for the applications that will be executed on it for application streaming.
    - For example, if your application requires a GPU for rendering, the server must have a compatible GPU card as specified by the application publisher. Common examples include Tesla T4, V100, A40, Quadro P4000, and Quadro 2000.
    - The server should also contain sufficient memory to handle the execution of applications.
- The server system should have adequate hardware to meet the desired application performance.
    - For typical usage of general applications such as Microsoft Office, it is recommended to have 1 CPU core (with hyperthreading) for every 5 active application sessions.
    - For demanding applications that have high CPU utilization over extended periods of time, it is recommended to have 2-4 CPU cores for each active application session.
- If the environment is expected to encounter burst launches (simultaneous launches that occur at exactly the same time), then the application server should be provisioned with more compute resources than if applications are launched one at a time. A common example occurs when a class of 30-50 students launches a course application at the same time.
    - A general *Azure Standard D4s v3 instance (4 vCPUs, 16 GiB memory)* can launch approximately 14 sessions of a typical Microsoft Office application such as Microsoft Excel or Project before running into issues due to insufficient CPU or memory capacity.
    - A general *Azure Standard D4s v3 instance (4 vCPUs, 16 GiB memory)* will take approximately 15-25 seconds per launch for 10 sessions of Microsoft Excel or Project in a staggered launch scenario or 2 minutes in a burst launch scenario.
    - A compute-optimized *Standard F8s v2 instance (8 vCPUs, 16 GiB memory)* will be faster at approximately 30 seconds for the burst launch scenario.
- Please note that estimates are based on a default Azure instance with Turbo Application Server installed. Actual numbers can vary based on environment and additional software installed for functions such as monitoring and security. Test the capacity of your Application Server system when performing estimates on how many servers are needed.

For quick demo or testing: 
- *Standalone* installation option is sufficient with all roles on the same machine.

For proof of concept or production up to 100 users:
- *Farm* installation option.
- Hub and Portal roles on the same server.
- One or more Application servers depending on application requirements and expected load.

For more than 100 users:
- *Farm* installation option.
- Hub role on its own server.
- One or more Portal servers depending on expected load. Each portal server can support 200 concurrent users.
- One or more Application servers depending on application requirements and expected load.

For high availability and redundancy:
- Provision additional servers for the Portal and Application roles for high availability and/or redundancy.

For additional sizing and technical guidance, contact Turbo at support@turbo.net.

### Database Requirements

For production and farm install scenarios, an external database is required. It is recommended to use Microsoft SQL Server or Azure SQL. Microsoft SQL Server Express is also supported, but will require pruning because the Analytics database grows with usage and may exceed the 10GB limit over a very long period of time.

For demonstration and testing scenarios, Turbo Server is installed with an embedded Microsoft SQL 2017 Express database when selecting the standalone install mode.

### Disk Space Requirements

The initial installation of Turbo Server requires 1.05 GB of free space on your hard drive.

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
    <th>Required Externally</th>
</tr>
<tr>
    <td>80</td>
    <td>TCP</td>
    <td>Administration Site HTTP</td>
    <td>Optional</td>
</tr>
<tr>
    <td>443</td>
    <td>TCP</td>
    <td>Administration Site HTTPS</td>
    <td>Yes</td>
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
    <th>Required Externally</th>
</tr>
<tr>
    <td>80</td>
    <td>TCP</td>
    <td>Portal Site HTTP</td>
    <td>Optional</td>
</tr>
<tr>
    <td>443</td>
    <td>TCP</td>
    <td>Portal Site HTTPS</td>
    <td>Yes</td>
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
    <th>Required Externally</th>
</tr>
<tr>
    <td>80</td>
    <td>TCP</td>
    <td>HTTP Service</td>
    <td>No</td>
</tr>
<tr>
    <td>443</td>
    <td>TCP</td>
    <td>HTTPS Service</td>
    <td>No</td>
</tr>
<tr>
    <td>3389</td>
    <td>TCP</td>
    <td>Application Server RDP</td>
    <td>No</td>
</tr>
<tr>
    <td>5850</td>
    <td>TCP</td>
    <td>Application Server RDP Proxy</td>
    <td>No</td>
</tr>
</tbody>
</table>
<br/>

If your Turbo Server is running behind an external firewall that restricts these ports, you may need to configure the external firewall manually. For instructions on opening ports and for recommendations on how to best secure Turbo Server, refer to [Configure Turbo Server Security](/server/advanced-topics/advanced-topics.html#configure-turbo-server-security).

If you have disabled outbound internet traffic from your Turbo Server but want to import the pre-built application packages available on Turbo.net Hub, the following addresses must be allowed:

* https://hub.turbo.net
* https://start.turbo.net
* https://start-c.turbo.net