### ports

	"ports" : [
		{
			"blocked" : "false",
			"mappedPort" : "8080",
			"originalPort" : "80",
			"protocolType" : "tcp"
		},
		...
	]


Ports contains array of port objects:

* `blocked` - if true the port is blocked
* `mappedPort` - value of mapped port
* `originalPort` - value of original port
* `protocolType` - `tcp` or `udp`

This object is available for following commands:

* `netstat` - list of configured ports for given container