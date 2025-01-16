## Networking

Turbo containers have a virtual networking stack that can be customized on a per-container basis. You can also connect containers with one another and with the host device’s network adapters.

### Site whitelisting

The route-block and route-add flags control which domains and protocols are allowed to interact with the container.

A nice application of container networking is to block all IP addresses except specified websites in a browser.

```
> turbo new firefox --route-block=ip --route-add=ip://yahoo.com
```

This will launch a new Firefox browser with all IP addresses blocked except for the IP address associated with  `yahoo.com`. To verify this, try navigating to a a few websites and notice that only Yahoo’s site is accessible!

Routing rules are applied in left-to-right order. The first rule blocks all IP traffic. Subsequent rules can then add back specific routes. In our example, we could have added additional `--route-add` arguments to allow access to additional web sites. The `ip://` prefix indicates that all IP traffic, including both TCP and UDP protocols, should be affected by the routing rule.

### Virtual networks

Suppose we want to run multiple containers on an isolated virtual network such that the containers can communicate with one another.

In this example, we’ll create a WordPress server and then access it with a Firefox web browser.

```
# Launch a WordPress server in a virtual network environment
> turbo run wordpress -d --network=wp --name=web 

# Run a Firefox browser instance in the same virtual network
# environment and connect to the WordPress server
> turbo run --network=wp firefox http://web:8080
```

The `--network` flag creates a *named virtual network*. Containers started in the same virtual network can communicate with one another. The `--name` flag assigns a friendly name to the container which is also used to reference the container via virtual DNS resolution.

Notice that the Firefox browser is able to connect to the WordPress server at the `http://web:8080` address. You may also confirm that the WordPress server is not externally accessible on the device.

### Container linking

It is also possible to connect individual containers together via *container linking*.

We can repeat the example above using the `--link` command:

```
# Launch a WordPress server in a virtual network environment
> turbo run -d --network=wp --name=web wordpress

# It is also possible to map a different domain name than
# the container name by setting up a container-to-container link
> turbo run --link=web:mywordpress.com firefox http://mywordpress.com:8080
```

Container linking provides more fine grained control over container interactions but may be more complicated to use than named virtual networks.

This example also demonstrates the use of container name remapping. In this case, we mapped Firefox to the `web` container as before but modified its DNS entry to `mywordpress.com`.

### Network layering

Network configurations can be stored in images and layered just like any other image. This is very useful when applying the same set of routing rules to multiple images. The Turbo.net Hub also provides pre-configured network routing images.

For example, the following command creates a Firefox browser with social media websites blocked:

```
> turbo run firefox,block-social-routes
```

The `block-social-routes` is a layer provided by the Turbo.net Hub that has route blocking rules defined for popular social media sites.

Notice that the Firefox browser will not navigate to sites like `facebook.com` and `twitter.com`.
