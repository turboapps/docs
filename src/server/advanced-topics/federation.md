# Federation

### Understanding Federation

Federation feature allows distributing hub servers across different regions to achieve faster streaming for end users and allows higher availability by redundancy. Federation works by assigning a `root` server from which the `child` hub servers to copy repositories from.

Federation child communicates with the root server using an API key which is a secret key between the servers. API keys can be disabled and recreated on demand from the admin user interface to ensure repository access to the server is secure. API keys can be configured to grant low privilege tokens which ensure the key is used only to read repository data from the root server.

Federation repositories can be explicitly cached and synchronized on the child hub by adding them from the federation repository page. Federation repositories can also be automatically forwarded to the root server by using request forwarding. Request forwarding is achieved by forwarding https requests to the root hub.

If the root hub is unavailable due to network outage or maintenance, the child hub will continue to service requests against explicitly synchronized repositories without any downtime to the end users. Request forwarding will be temporarily unavailable. If the child hub becomes unavailable, then the end users will only be able to use their locally cached applications.

### Configuring Federation

Follow the [documentation](/server/setup-and-deployment/deploying-on-premises) to setup a Hub Server and your repositories to the hub. The server which will contain the source of the repositories will be called the `root` server.

1. Setup an API Key

    On the root server, navigate to `https://{root}/admin/hub/keys.aspx`. Add an API Key with a descriptive name such as "Federation Key for {child}". `Run as system` setting is not required. Copy the generated API key.

2. Add the federation source to child hub

    On the child hub(s), navigate to `https://{child}/admin/hub/federationsource.aspx`. Change the `Hub` text box to the `root` hub host's URL. Add the previously copied API Key and press save.

3. Add a federated repository

    Navigate to `https://{child}/admin/hub/federation.aspx`. Add a federated repository by using the repository identifier `namespace/name` (example: `mozilla/firefox`), and press save. The repository should begin to synchronize immediately with the status displayed on the federation page.

4. Use the federated repository

    Once the repository has finished synchronizing, you may begin using the repository on the child server from a [workspace](/server/administration/overview.html#managing-workspaces). 

    You can also install the repository image directly using the turbo cli on the user's machine.

    ```
    turbo config --hub={child}
    turbo login {user}
    turbo installi namespace/name
    ```

   The application should be available from the start menu.