### inspect

Contains information about content of image.

	inspect : {
		"dependencies" : [],
		"files" : [],
		"registry" : [],
		"services" : [],
		"startup" : [],
		"dns" : [],
		"ports" : [],
		"env" : []
	}

Inspect object contains following data:

* `dependencies` - array of image objects that are dependencies of current image
* `files` - array of change object describing changes in file system (see also: `diff`)
* `registry` - array of change object describing changes in registry (see also: `diff`)
* `services` - array of names of services embedded in image
* `startup` - list of startup files
* `dns` - list of configured dns overrides, see also `dns` object
* `ports` - list of configured ports mapping, see also `ports` object
* `env` - dictionary of environment variables

#### startup file data

Statup file item:

	{
		"commandLine" : "",
		"dir" : "@PROGRAMFILESX86@\\Mozilla Firefox\",
		"fullPath" : "@PROGRAMFILESX86@\\Mozilla Firefox\\firefox.exe",
		"name" : "firefox.exe",
		"tag" : "firefox"
	}
	
Startup file object contains following data:

* `commandLine` - parameters passed to startup file
* `dir` - directory of startup file
* `fullPath`- full path of startup file (`dir` + `name`)
* `name` - name of executable startup file
* `tag` - tag of startup file

#### environment variables data

Environment variables are stored in json dictionary:

	{
		"name" : [
			{
				"Item1" : "Default", 
				"Item2" : ""
			}
		],
		"name2" :  [
			{
				"Item1" : "Default",
				"Item2" : ""
			}
		]
	}

Each item's key is environment variable name and value is array of:

* `Item1` - name of image layer that contains environment variable definition
* `Item2` - value of environment variable in given layer

#### Availability

This object is available for following commands:

* `inspect`