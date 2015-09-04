### diff

Contains information about changes in container.

	redirect : {
		"files" : {
			"changes" : [
				{
					type : "A",
					path : "C:\file.ini"
				},
				...
			]
		},
		"registry" : {
			"changes" : [
				{
					type : "A",
					path : "HKCU\Key\Value"
				},
				...
			]
		}
	}

Diff object contains following data:

* `files` - array of changes in file system
* `registry` - array of changes in registry

Each item contains following data:

* `type` - type of change
	* `A` - item added
	* `C` - item changed
	* `D` - item deleted
* `path` - path to changed item

This object is available for following commands:

* `diff` - contains information about changes in container