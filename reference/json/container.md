### container

	container : {
		"id" : "5f0b6ebc4bea10285ba2b8a6ce78b863",
		"name" : null,
		"visibility" : "public",
		"state" : {
			"id" : "5f0b6ebc4bea10285ba2b8a6ce78b8635f0b6ebc4bea10285ba2b8a6ce78b863"
		}
	}

Container object contains following data:

* `id` - id (hash) of container
* `name` - name of container (usually null)
* `visibility` - visibility of container, public or private
* `state` - available if command did push execute state to turbo server, contains id (hash) of state

This object is available for following commands:

* `clone` - contains newly created container
* `pause` - contains just paused container
* `resume` - contains just resumed container
* `revert` - contains just reverted container
* `run` - contains newly created container
* `start` - contains just started container
* `stop` - contains just stopped container