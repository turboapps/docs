## Networking

Turbo.net allows applications to access the local network of the client device even when running from the cloud when using the Turbo for PC or Turbo for Mac client.

The HTML5 and mobile clients do not support local network access without a separate network tunnel setup.

Applications launched on the local device, eg **Run on My PC** will automatically interact with the local network.

### Enabling Local Network Access

For security purposes, local network access must be enabled in the Turbo for PC or Turbo for Mac settings before network sharing can be used.

To enable local network access, open the Turbo for PC or Turbo fro Mac application and check the **Allow access to local network** setting.

![](/docs/getting_started/networking/launcher-settings-network.png)

Once the setting is enabled, subsequent launches of cloud-based applications will be able to reference local URLs.

### Accessing localhost

When network sharing is enabled, a potential ambiguity exists when referencing the special `localhost` device name, depending on whether the client device or cloud host is the intended target.

To resolve this ambiguity, Turbo.net uses the following address convention:

* The `localhost` name references the *server* running the application in the cloud.
* The special host name `localhost.turbo.net` references the *client* device.

For example:

![](/docs/getting_started/networking/local-network-access.png)
