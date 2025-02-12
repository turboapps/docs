# hosts

The `hosts` instruction modifies host name resolution within a container. 

```
hosts <ip address|local host name> <host name>
```

The syntax for this command matches that of the hosts file in Windows where the first parameter is a host name or IP address and the second parameter is the name to resolve the host name/IP address to. 

This setting is persisted to the output image so that any containers created from that image will have these DNS settings applied. 

```
# Make the loopback ip resolve to mydomain.net
hosts 127.0.0.1 mydomain.net

# Redirect requests to google.com to localhost
hosts localhost google.com
```
