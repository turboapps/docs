## route

The `route` instruction adds a route mapping.

```
route add <route-specifiation>
route block <route-specifiation>
```

The `route add` and `route block` instructions are equivalent to `--route-add` and `--route-block` flags to the `turbo new` command, respectively. They use the same syntax for **route-specifiation**.

Examples:

```
# Block all tcp ports
route block tcp

# Map container port 80 to local port 8080
route add tcp://80:8080

# Block access to IP address 192.168.1.123
route block ip://192.168.1.123
```
