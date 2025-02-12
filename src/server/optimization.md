# Optimization

The following document describes optimizations that can be made to improve Turbo Server performance.

### Memory

Memory sharing can be optimized for applications that have large memory requirement. Turbo can utilize Window's dll and exe sharing by using the `precache` command. This will reduce the startup time and memory consumption of applications ran by different users on the application server.

For example, to allow dll and exe memory sharing for the application MATLAB:

```
# Verify the image has been pulled and cached locally
> turbo images
1a2b3c  mathworks/matlab

# Run the precache command
> turbo precache mathworks/matlab
Using VM 20.6.1523 from local
Using image clean:30 from local
Using image matlab from local
Precaching assemblies in mathworks/matlab
Precached 3023 files in 0:00:37.2151653
```

Next, enable the `Enable Assembly Cache` setting under the workspace application's general tab from the admin site.

### Networking

#### Maximum Number of Request Threads

Turbo Server runs an Apache reverse proxy to various web services such as APIs and the Portal site. This proxy is configured with a maximum number of request threads. If the number of concurrent connections exceeds this value, then incoming requests will hang until Apache is able to service them. For example, this may surface to an end user as a hang when accessing the external Portal URL.

Each thread incurs a fixed startup memory cost in addition to a maximum runtime memory usage, which varies based on configuration and workload, so be mindful not to set this setting beyond your server's capacity. To support an even larger number of concurrent requests, we recommend looking into [Load Balancing](/server/network-and-load-balancing/network-and-load-balancing).

Turbo Server administrators may configure this setting through the admin command-line interface using the following command:

```
Server.exe admin global request-threads 2000
```

For more information on using the admin CLI, see [Command Line Management](/server/advanced-topics/command-line-management)

By default, this value is set to **2000** in Turbo Server 21.9 and later. Previous releases defaulted to **150**. 

This value maps to the mpm_winnt [ThreadsPerChild](https://httpd.apache.org/docs/2.4/mod/mpm_common.html#threadsperchild) setting.

### Graphics

Graphic application routing support will be coming soon.