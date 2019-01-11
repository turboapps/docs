### Getting Started with Streaming Server

Turbo Streaming Server is an on-premise application delivery platform. In this section you will learn about system requirements and instructions for installing, configuring and running Turbo Streaming Server.

#### Architecture

There are four components of Turbo Streaming Server; the Portal service, the Hub service, the Application Server Pool, and the Broker service. The **Portal service** hosts the application web portal where users can log in to view and launch their applications. The **Hub service** is the source of all the application images that are offered on the web portal. The hub can either point to Turbo.net hub or your own instance of Turbo Hub Server. The **Application Server Pool** is a group of servers where the remove application containers are executed and the streamed to the client. The **Broker service** controls how remote applications are executed in the application server pool.

#### Setup

The Turbo Streaming Server is distributed with Turbo Container images. Running the containers will guide you through configuration on the first launch and then start the web services on your machine. The Portal and Broker services can also be configured to run on a Ubuntu Linux platform depending on your environment requirements. For test or demonstration purposes, all the services can be run on the same machine or VM. In production environments it is recommended to split the services to seperate machines as needed to share the load and offer adequate failover and redundancy.

##### Application Server

The **Application Server** is where remote applications will run when streamed to remote clients. The server must be running Microsoft Windows Server 2012R2 or later. The [application server provisioner container image](https://turbo.net/run/turbo/application-server-provisioner) will enable the RDS role, configure the firewall, WinRM, and other settings to allow remote applications to be executed. This provisioning process must be done on every application server in the pool.

To run the provisioner, download the [Turbo Client](https://turbo.net/downloads) and run with the `--app-server` parameter.

```
> turbo-client.exe --app-server
```

This will install the Turbo Client components for all users and configure the application server for remote applications. 

![](/docs/deploying/to_turbo_server/streaming-setup-1.png)

Note that this process cannot be undone so make sure that the machine is backed up appropriately.

You will be prompted for the credentials of a user who is an admin on the server.

During the provisioning process a reboot may occur. If so, after complete, log back in as the same user and the provisioning process will resume.

When the process is complete, you will see a completion message.

![](/docs/deploying/to_turbo_server/streaming-setup-2.png)

##### Broker Service

The **Broker service** is a web service which controls connections between the portal and the servers in the application server pool.

![](/docs/deploying/to_turbo_server/streaming-setup-3.png)

To run the broker service, first download and install the [Turbo Client](https://turbo.net/downloads) if it is not already present. Then run the [broker service container image](https://turbo.net/run/turbo/broker).

```
> turbo run turbo/broker -d
```

On first launch it will prompt you for configuration parameters. Leaving the prompt empty will automatically use the default value that are enclosed in the parenthesis.

![](/docs/deploying/to_turbo_server/streaming-setup-4.png)

- **Broker server url:** This is the url where the broker will be accessed by both the portal web services and the client. 

- **Hub server url:** This is the url used to access the Hub server. This can point to turbo.net or your own Turbo Hub Server instance.

- **Org name:** The name of the org account on turbo.net that is used to control the application containers that are offered. This won't be prompted when connecting to Turbo Hub Server.

- **Broker admin users:** The users who will have access to the broker admin site. The broker admin site gives visibility to the streaming sessions that are be executed as well as application server load and utilization data.

- **Application server administrator account:** A user who is an administrator on all the application servers in the pool. 

Review the values and confirm by typing **Y**. After this it will prompt you to define the connection information for the servers in the application server pool. 

![](/docs/deploying/to_turbo_server/streaming-setup-5.png)

- **IP or hostname of server:** The IP or hostname of the server to add. This IP or hostname must be accessible from the broker service. Leave this entry blank if there are no more servers to add to the pool.

- **External IP or hostname of server:** The IP or hostname of the server which will be accessible by the client. This may be the same value as the previous prompt.

![](/docs/deploying/to_turbo_server/streaming-setup-6.png)

After the values are confirmed, the broker web service will be started.

##### Portal Service

The **Portal service** is a web service which hosts a web portal for users to access their applications.

![](/docs/deploying/to_turbo_server/streaming-setup-7.png)

To run the portal service, first download and install the [Turbo Client](https://turbo.net/downloads) if it is not already present. Then run the [portal service container image](https://turbo.net/run/turbo/portal).

```
> turbo run turbo/portal -d
```

On first launch it will prompt you for configuration parameters. Leaving the prompt empty will automatically use the default value that are enclosed in the parenthesis.

![](/docs/deploying/to_turbo_server/streaming-setup-8.png)

- **Portal server url:** The url where the portal site will be hosted and accessible to end users.

- **Broker server url:** The url of the broker service.

- **Hub server url:** The url of the hub service. This must match the broker service configuration.

- **Org:** The org account dashboard that will be the source of applications in the portal. This is only shown for Turbo.net Hub.

- **Dashboard:** The name of the namespace that will be the source of applications in the portal. This is only for Turbo Hub Server and is configured in the **Dashboard** administration page.

Review and confirm the values with **Y**. The portal site service will then start.

![](/docs/deploying/to_turbo_server/streaming-setup-9.png)

Once the portal service has started, you will be able to access the portal from the URL that was specified in the configuration. Log in to the portal with a hub user account (either turbo.net account or an account defined in your Turbo Hub Server).

![](/docs/deploying/to_turbo_server/streaming-setup-10.png)

After logging into the poratl, the applications from the org or dashboard will be displayed for remote or local launch.

![](/docs/deploying/to_turbo_server/streaming-setup-11.png)
