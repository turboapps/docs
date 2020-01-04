## Network and Load Balancing

### Installing Redundant Roles

Turbo Server allows installing redundant roles across multiple servers. To install the role on separate servers, run the Turbo Server installer and select the role you would like to install.

The administrator can also add or remove roles on that server after installation. For more information refer to [Managing Domain](/docs/server/hub-server/administration#managing-domain).

### Configuring Network

The administrator may want to use a reverse proxy to accesss the internal Turbo Server services. The administrator can configure which URLs the services and clients will use to talk to each other. For more information refer to [Domain Addresses](/docs/server/hub-server/administration#domain-addresses).

### Load Balancing

To load balance Application Servers, install the Application Server role on the desired servers. Then, configure the load balancing strategy as described in [Domain Settings](/docs/server/hub-server/administration#domain-settings).

To load balance the server roles, set the URLS as described above to an external load balancer. Built in roles load balancing will be comming soon!

### Understanding the Domain URL

The Domain URL is the URL for any end user or client to access the Turbo Server services. The Domain URL must be accessible on the network the end user is intended to run Turbo applications from. It should map to the server with the Portal role installed. End users can access the web portal through the domain hostname using a web browser. When logging in with the android or iOS application, the end user should put in the Domain URL under the server setting. For example, if the Domain URL is **https://mydomain.com**, the administrator should assign their dns entry at **mydomain.com** to the Turbo Server farm's Portal role server. End users can then navigate to **https://mydomain.com** to view the web portal.

The command line interface (CLI) should be configured using the Domain URL. Run the command `turbo config --domain=mydomain.com` to set the CLI to the correct domain. For more information refer to [Command Line Reference](/docs/reference/command-line/config)

In addition to being used to accessing the web portal, the Domain URL will also be used to query the service topology for the underlying Turbo Server services. The endpoints that are exposed, using the above example, is the **https://mydomain.com/service/settings** and **https://mydomain.com/service/topology**. These endpoints are used to determine what server services are available, such as the Hub's IO service, the login service, and Application Server Broker.

Alternatively, the administrator may leave the Domain URL setting blank to have it be defaulted to the first server with the Portal role installed.