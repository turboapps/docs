### containerLinks

	"containerLinks" : [
		{
			"containerId" : "5f0b6ebc4bea10285ba2b8a6ce78b863",
			"alias" : "our_database"
		},
		...
	]


ContainerLinks contains array of container link objects:

* `containerId` - id of linked container
* `alias` - name of linked container inside current container

This object is available for following commands:

* `netstat` - list of containers linked to current one