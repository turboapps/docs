# Network and Load Balancing

## Installing Redundant Roles

Turbo Server allows installing redundant roles across multiple servers. To install the role on separate servers, run the Turbo Server installer and select the role you would like to install.

The administrator can also add or remove roles on that server after installation. For more information refer to [Managing the Domain](/server/administration/domain#managing-a-server).

It is recommended to install more than one Portal server for failover purposes, or for a large number of concurrent users (see [Portal System Requirements](/server/setup-and-deployment/prerequisites.html#system-requirements)). The number of application servers should depend on the number of concurrent users and the resource requirement of the applications being ran.

For maximum redundancy, a redundant domain should be setup that uses federation to replicate the workspaces and authentication settings from the primary domain.

## Configuring Network

The administrator may want to use a reverse proxy to accesss the internal Turbo Server services. The administrator can configure which URLs the services and clients will use to talk to each other. For more information refer to [Domain Addresses](/server/administration/domain#managing-a-server).

## Configuring Content Delivery Network (CDN)

Turbo SVM images may be delivered over standard content delivery networks. To enable CDN for the Hub block storage, set the [Hub CDN URL](/server/administration/domain.html#managing-a-server).

CDN support works best when delivering Turbo images using the Turbo synchronization protocol. Supporting clients will automatically select the Turbo synchronization protocol for objects over the configured [Hub CDN Max File Size](/server/administration/domain.html#managing-a-server). Please consult your CDN provider to ensure that the correct max file size is configured. If you chose not to specify a max file size, then the automatic protocol selection will not occur. 

For clients that do not support automatic protocol selection, users should have direct download disabled in the [Turbo Client configuration](/client/command-line/config). 

If direct download is used, be aware that certain CDN providers limit the object size which may be exceeded by certain Turbo images. In that case the image must be delivered by the origin server.

Be aware that images delivered over the CDN may be downloaded from the public internet. Ensure that there is no confidential data in the images when delivering them over a CDN.

### Sample CDN Configurations

Here are sample configurations for using Cloudflare, AWS CloudFront, and Azure CDNs with Turbo Server.

#### Cloudflare

Create a CNAME that resolves the URL of the Turbo Server instance and turn __Proxy status__ on. The CNAME will be the __Hub CDN URL__ in Turbo Server.

Create two __Page Rules__ in Cloudflare:

- Cache Level: __Cache Everything__
- Edge Cache TTL: __a month__

Set the __Hub CDN URL__ in Turbo Server to the CNAME address created in Cloudflare. Set the __Hub CDN Max File Size__ to the maximum file size your Cloudflare subscription allows.

Cloudflare

#### AWS Cloudfront

Create a CloudFront distribution with the following options:

- Origin domain: URL of the Turbo Server instance
- Path pattern: __Default (*)__
- Viewer protocol policy: Match the HTTP configuration of the Turbo Server instance
- Allowed HTTP methods: __GET, HEAD__

Set the __Hub CDN URL__ in Turbo Server to the __Distribution domain name__. Set the __Hub CDN Max File Size__ to the maximum file size your CloudFront subscription allows.

#### Azure CDN

Create an Azure CDN resource with the following options:

- Pricing tier: __Standard Microsoft__
- Check __Create a new CDN endpoint__
- Origin type: __Custom origin__
- Origin hostname: URL of the Turbo Server instance

Set the __Hub CDN URL__ in Turbo Server to the __Endpoint hostname__. Set the __Hub CDN Max File Size__ to the maximum file size your Azure subscription allows.

## Load Balancing

To load balance Application Servers, install the Application Server role on the desired servers. Then, configure the load balancing strategy as described in [Domain Settings](/server/administration/domain#managing-a-server).

To load balance Portals, set the Domain URL to an external load balancer.

## Understanding the Domain URL

The Domain URL is the URL for any end user or client to access the Turbo Server services. The Domain URL must be accessible on the network the end user is intended to run Turbo applications from. It should map to the server with the Portal role installed. End users can access the web portal through the domain hostname using a web browser. When logging in with the android or iOS application, the end user should put in the Domain URL under the server setting. For example, if the Domain URL is **https://mydomain.com**, the administrator should assign their dns entry at **mydomain.com** to the Turbo Server farm's Portal role server. End users can then navigate to **https://mydomain.com** to view the web portal.

The command line interface (CLI) should be configured using the Domain URL. Run the command `turbo config --domain=mydomain.com` to set the CLI to the correct domain. For more information refer to [Command Line Reference](/client/command-line/config)

In addition to being used to accessing the web portal, the Domain URL will also be used to query the service topology for the underlying Turbo Server services. The endpoints that are exposed, using the above example, is the **https://mydomain.com/service/settings** and **https://mydomain.com/service/topology**. These endpoints are used to determine what server services are available, such as the Hub's IO service, the login service, and Application Server Broker.

Alternatively, the administrator may leave the Domain URL setting blank to have it be defaulted to the first server with the Portal role installed.

## Troubleshooting

### The HTML5 client fails to launch with websocket tunnel reconnect error.

Ensure your load balancer is not blocking the WebSocket path `/tunnelws/rxp`. See how to [add a WAF exception](https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/define-dashboard/).
