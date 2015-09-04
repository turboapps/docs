### route

The `route` instruction maps a port in the container to a port on the local machine.

```
route <action> <protocol> <local port>:<container port>
```

By default, container ports are passed through to the local machine. To block all ports in the container from accessing local network interfaces, add the instruction `route block tcp,udp *` to your SpoonScript. 

The `route` instruction requires three inputs: the `action` to take (add/block), the `protocol` to use (tcp/udp), and the `ports` to map. The ports to map can be specified with the wildcard `*` character. 

```
# Block all tcp ports
route block tcp * 
```

The `add/block` input will either `block` a container port from accessing the local network interface at the specified port (or at all ports) or `add` a mapping from a container port to a local port. If a local port is not specified, the container port is mapped to a random port on the local system. 

```
# Map container port 80 to local port 8080
route add tcp 8080:80

# Map container port 20 to random port
route add tcp :20

# Map udp traffic on container port 2000 to local port 3456
route add udp 3456:2000
```

UDP and TCP traffic can be added/blocked in the same `route` instruction by specifying both for protocol. 

```
route add tcp,udp 8080:80

route block tcp,udp *
```