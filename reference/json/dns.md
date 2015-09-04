### dns

	"dns" : [
		{
			"host" : "www.example.com",
			"address: "127.0.0.1"
		},
		...
	]


Dns contains array of dns objects:

* `host` - name of host to resolve
* `address` - IP address that `host` will be resolved to

This object is available for following commands:

* `netstat` - list of configured dns overrides for given container