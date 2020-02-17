
## Network and Load Balancing

To enable High Availability for Turbo Server, you need to install hubs and portals on separate machines.

### Load balancer configuration for the portal servers

As the portal is not fully stateless, the load balancer must allow HTTP session persistence (sticky sessions). The `Spoon_UserToken` cookie identifies the user at a given portal server. If you configured portals to use different URLs, you also need to set the Portal URL, which the portals would share. This URL will be the address of the load balancer. All the URLs Turbo Server are available for configuration in the administrative screen (Servers - URLs):

![](/docs/server/portal_server/portal-url.png)

To perform the TLS handshake on the edge server and use HTTP internally, you need to configure portals to listen on HTTP only and set the Portal URL's scheme to https.
