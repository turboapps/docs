### Use Case: Browser Ad Blocking

Ad blocking is important for improving user experience, maximizing performance, and eliminating an important source of security vulnerabilties.

Turbo automatically provides ad blocking in popular web browsers such as Chrome and Firefox. In addition, any application running in a Turbo container can be ad blocked using Turbo container networking.

This article will explain Turbo's built-in browser ad blocking and network routing-based container ad blocking technology.

#### Browser Ad Blocking

Popular web browsers in the Turbo Hub such as Chrome and Firefox come pre-configured with ad blocking.

![](/docs/building/working_with_containers/adblock1.png)

Turbo uses the [uBlock Origin](https://github.com/gorhill/uBlock) plugin, a popular open source system currently installed on millions of devices. Turbo augments the default configuration with data on additional advertising networks. The ad block plugin and databases are automatically updated as part of Turbo's automatic browser patching system -- users or administrators don't need to do anything!

If you wish to use a non-adblocked version of a browser, use the "Base" version in the Hub. For example, the [mozilla/firefox-base](https://turbo.net/hub/mozilla/firefox-base) image is a default Firefox image with no adblocking or other plugins applied.

#### IP-based Ad Blocking

Turbo also provides an alternate approach to ad blocking based on virtual network configuration in the container. Recall that Turbo supports custom IP routing rules within containers. The Turbo Hub provides a pre-configured routing table with known advertising networks and hosts blocked. Applying this layer blocks access to these advertising networks. This allows ad blocking for applications other than web browsers, where ad blocking plugin interfaces are not available.

Applications containing advertising in the Turbo.net Hub have this layer enabled by default. Examples include Skype and uTorrent.

To enable network-based ad blocking on your own applications, right-click on the application and press the **Settings** context menu button in the **Applications** tab of the dashboard. Then select the **Network** tab and click the **Add** button next to the **Block Ad Networks** layer:

![](/docs/building/working_with_containers/adblock2.png)

Finally, click **Save**.

The **Block Ad Networks** layer is an aggregation of multiple databases of advertising network hosts and IP addresses. These are updated nightly by TurboBuild and pushed automatically when automatic patching is enabled. Additional manual customizations can be applied on top of the layer by clicking on the **Custom** sub-tab.

#### Customizing IP Blocking

Administrators can easily build custom network blocking rules and apply them to organization containers.

For a small group of hosts which is unlikely to change, use the **route block** TurboScript instruction to add blocked hosts or IP addresses.

```
route block ip://ads.com
```

See the [Skype](https://github.com/turboapps/turbome/blob/master/skype/turbo.me) or [uTorrent](https://github.com/turboapps/turbome/blob/master/skype/turbo.me) TurboScripts for more detailed examples.

If there are a large number of hosts to block, it is easiest to define routing rules in a route file. A simple _route file_ is below:

```
[settings]
PreResolveHostNames=false

[ip-block]
*.host1.com
*.host2.com
```

The declaration **PreResolveHostNames=false** instructs Turbo to skip resolving DNS names until the first time they are used. This significantly reduces the time required for launching an application when the configuration contains thousands of hosts.

Before submitting an application image, you may want to verify how an application behaves when hosts are blacklisted. The Turbo command line interface provides **--route-block** and **--route-file** options for this purpose:

```
> turbo try google/chrome --route-block=ip://host.com
> turbo try google/chrome --route-file=routes.ini
```

Once the changes have been tested, they can be applied with the **turbo commit** command using the same flags.

#### Blocking Adult Content

The **Block Adult Content** routes layer can be used with any Turbo container, including web browsers, email clients, instant messengers, or any other applications. The layer contains a set of IP routing rules that automatically block connections to adult content sites.

The host list in the **Block Adult Content** routes layer is updated automatically by TurboBuild based on published databases of adult content sites. Updates are propagated automatically to subscribed devices if automatic updates are enabled.

To enable network-based adult content blocking on your own applications, right-click on the application and press the **Settings** context menu button in the **Applications** tab of the dashboard. Then select the **Network** tab and click the **Add** button next to the **Block Adult Content** layer.

The layer can also be applied using the command line interface. To use the layer, insert **block-adult-routes** into the image list. For example, to run Chrome with adult sites blocked, use the command:

```
> turbo run block-adult-routes,chrome
```

#### Blocking Social Networks

The **Block Social Networks** routes layer can be used to block access to popular social networking sites (Facebook, Twitter, YouTube, etc) from any Turbo web browser. A full list of the blocked sites are listed [here](https://raw.githubusercontent.com/turboapps/turbome/master/turbobrowsers/block-ad-routes/social-networks/routes.txt).

As with ad and adult content blocking, you can add this layer from your turbo.net dashboard with **Block Social Networks** layer or from the command line:

```
> turbo run block-social-routes,chrome
```

