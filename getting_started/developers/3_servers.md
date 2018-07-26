## Servers

Turbo.net supports both desktop and server applications. For the most part, server application images behave in the same way as desktop application images. However, special configuration considerations often arise with server applications.

### Multiple database server versions

Turbo can be used to run database servers such as SQL Server, MySQL, ElasticSearch, MongoDB, and others.

In this example, we will use Turbo to run multiple versions of the free SQL Server Express database and access them from the database management client.

```
> turbo run sqlserver/sqlserver2012-express -d --route-block=tcp,udp -n=sql1
> turbo run sqlserver/sqlserver2014-express -d --route-block=tcp,udp -n=sql2
> turbo run sqlserver/ssms2012 -d --link=sql1:sql1 --link=sql2:sql2
```

Note that we have used container linking and naming to connect the SSMS management client to the two database instances, and route blocking to prevent the database ports from being accessible on the host device’s network.

Login using the username `sa` and password `password1` to the database servers `sql1` and `sql2`. You can confirm the two databases are manageable through the client and are two distinct versions.

### Multiple instances of a single server

In this example, we’ll use *TCP port mapping*, a special case of network routing, to run multiple instances of the Ghost blogging engine on the same host.

By default, Ghost uses port 2368 to listen to requests. Since only one server can listen on a given port at a time, we need to remap this port to allow multiple Ghost instances to run simultaneously:

```
# Create a container that maps port 8080 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8080 ghost

# Create a container that maps port 8081 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8081 ghost

# Create a container that maps port 8082 on the host to port 2368 on the container.
C:\> turbo new -d --route-add=tcp://2368:8082 ghost
```

The `tcp://` prefix indicates that the routing rule should apply to TCP traffic. The rule `2368:8080` causes the container’s port 2368 to be mapped to the host device port 8080. We can then launch a second and third instance by mapping 2368 to host port 8081 and 8082.

You can check that three distinct Ghost instances are accessible by browsing to localhost:8080, localhost:8081, and localhost:8082. You can also test what happens if you try to launch instances without applying the routing rules!

### Factoring a database into a layer

A useful practice when constructing container architectures is to use layering to factor data from the underlying server application.

For example, suppose that we have a Ghost blog that’s been populated with some data. We would like to move the data into a separate layer. This will allow us to layer in just the database contents on top of any compatible base Ghost image. Saving the database in a distinct layer can help you test different application versions against the same data, back up database contents, or quickly rollback a database to a fixed base state during development.

First, we need to create a blank container that will hold the database:

```
# Create a clean container
> turbo new clean --no-run
```

We do not want to actually run the new container so we used the `--no-run` flag.

Next, use the `turbo cp` command to copy the database from the Ghost container (`bc53e584` in our example) to the blank container:

```
> turbo cp bc53e584:c:\ghost\content\data d65260ad:c:\ghost\content\data
```

Note the `d65260ad:` prefix used for the target folder. This tells the copy command to place the contents into a particular folder. If no container prefix is used, the host device is assumed. The `c:\ghost\content\data` folder is the location for the database contents in this example.

Now that the database container is ready, we commit it into a new image called `ghost-db`:

```
# Commit the container to a new image
> turbo commit d65260ad ghost-db
```

Finally, we can layer `ghost-db` into any base Ghost server container and to pre-populate it with our content:

```
# Create a ghost container with the ghost-db content layered on top of it
> turbo run ghost,ghost-db
```