# Hub

![Server admin hub](/images/admin-hub.png)

All application repositories on Turbo Server are managed from the **Images** page of the Administration Site.

For more information on adding application repositories to the Hub, see [Deploying to Turbo Server](/deploying/to-turbo-server/to-turbo-server)

### Managing Repositories

![Server admin edit repository](/images/admin-repos-edit.png)

On the repository edit page, a repository display name can be modified. This shows up in the **Images** page list. The repository ID field cannot be modified and is assigned when the first container image is pushed to the hub.

The **versions** list shows all available images that are available for this repository. They can be referenced by their tag or their ID (ex, "mozilla/firefox:64.0" or "mozilla/firefox#44397e23bf46a08a8a567ba13b2c215668d451c9dde41b030706779dc977cc02"). Accessing a repository without a tag or ID will use the latest available image (ex, "mozilla/firefox"). Note that any repository updates may take up to 24hrs to be automatically retrieved by the Turbo Client.

The **Dependencies** and **Used By** lists shows all images referenced by and referencing this repository image. Dependencies are downloaded on-demand when creating a new session. For more information on dependencies, see [Dependencies](/reference/dependencies/dependencies)

The **Pre-cache** setting specifies whether to cache the repository on application servers. Pre-cached repositories are pulled onto the application servers every 10 minutes. A [workspace](/server/administration/workspaces.html#workspace-general) may also pre-cache the repository.

The **Federation** section allows enabling or disabling repository federation from a configured federation source. The selected federation source's settings will be used to determine the federation behavior. If you wish to create a new federation source, please see [Federation](/server/administration/hub.html#federation).

### Importing Repositories

![Server admin import repository](/images/import-repo.png)

With the Import Repository feature, you can import repositories from an external Hub server, such as the Turbo.net Hub, into your local Turbo Server Hub. To import a repository, click the **Add Repository** dropdown on the **Images** page and click **Import Repository**. The import page has the following options available:

- **Hub Source URL**: The Hub server from which the repository will be imported. By default only app.turbo.net is available, however if you have domain federation enabled the source domain will also be available.

  If your Turbo Server is running behind a firewall or proxy you may need to whitelist app.turbo.net to import repositories from the public Turbo Hub.

- **Repository Id**: The name of the external repository. For example, `mozilla/firefox`.
- **Release**: Only revisions with this release are imported from the external repository. Leave blank to import without release restrictions.
- **Revision History Length**: The number of revisions to pull from the remote repository. The default value is 1 revision. Revisions are imported in descending release order.
- **API Key**: The API key used to access private repositories from the source Hub. This field is not required for public repositories.

After setting the properties, click **Import**. The import may take a few minutes to complete depending on the size of the repository. After the import is complete you will see the new repository in your main repository list on the **Images** page.

Imported repositories will enable federation from the import source URL by default. Federation may be disabled from the repository settings page.

### Managing Web Applications

![web apps](/images/web_apps.png)

A Web Application is a software program that runs on an external website that is opened in the active browser or a new virtual browser environment. All web applications on Turbo Server are managed from the **Web Applications** page of the Administration Site. To add a web application, click the **Add** button on the **Web Applications** page.

The web application edit page has the following options available. These settings will be inherited when the web application is added to a workspace. For more details, see [Workspace Applications](/server/administration/workspaces.html#workspace-applications).

- **Name**: The name that will be displayed to end-users on the Portal dashboard.
- **URL**: The target URL that is opened when launching the web application.
- **Open In New Tab**: Whether the URL will be opened in a new tab.
- **Icon**: The icon that will be displayed to end-users on the Portal dashboard.

### API Keys

![Server admin hub api keys](/images/admin-api-keys.png)

**API Keys** allow you to login to your hub with a code other than with a username/password. This is useful when configuring automation or in other scenarios where a plain text password is not desirable. If an API Key has been compromised, it can be refreshed to a new value or deleted to immediately revoke access.

Additional, you can configure a **Configuration API Key** used by the [Launch Configuration Service](/server/advanced-topics/advanced-topics.html#using-the-launch-configuration-web-service) to post custom application configurations. Configurations posted with this API key are publicly accessibly. This setting is recommended if you will be using an external portal instead of the Turbo Portal.

The length of time (in milliseconds) that a configuration is valid after it is added to the launch configuration service can be configured with that **Configuration Cache Expiration** setting. This timeout is reset any time the application configuration is accessed, such as during an application launch.

![Server admin add API key](/images/admin-api-keys-add.png)

When adding an API Key, give it a name that describes the general usage of the key. It is also recommended to have distinct keys for distinct usages so that if one is compromised or updated, all usages will not require update. **Run as System** controls whether the key is given administrative privileges to push new images or delete repositories. Without this setting, the API key will only have read access to repositories.

### Federation

The **Federation** page allows you to configure repository federation sources, which can be selected during repository import or applied to individual repositories to reduce setup time and keep repositories in sync across domains. Repositories that have federation enabled will periodically check the source domain for updates and pull any changes.

Please be aware that any setting changes to a federated repository will be overwritten by the repository settings on the source domain.

Federation sources can be configured with the following settings:

- **Source Domain URL**: The federation source domain URL from which repositories will be replicated.
- **API Key (Optional)**: The API key used to access repositories from the federation source. This API key must be configured as a system-level key on the source server. This setting is not required for public hubs. For more information, see [API Keys](/server/administration/hub.html#api-keys).
- **Default Synchronization Frequency**: The frequency at which this server will check the federation source for updates.
