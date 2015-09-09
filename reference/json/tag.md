### tag

Contains information about one image tag (version).

	tag: {
		"version" : "1.0",
		"isLocal" : false
	}

Tag object contains following data:

* `version` - version string for image
* `isLocal` - if true, image is available locally, if false, image is available on hub

This object is not available by itself in any of turbo commands, but is used in `releases` and `vms` arrays.