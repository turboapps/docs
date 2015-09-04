## JSON output

Each Turbo command-line interface command can be run with `--format=json` switch to get output in JSON format. It is useful when running Turbo in a scripted environment. When using this switch full output is available when command ends - no progress and partial results are presented during execution, even for commands that take a long time.

### format

Output format is an array of JSON object. For example, here is result of executing `turbo vm --format=json`:
	
	[
		{
			"name" : "vm",
			"arguments" : ["vm", "--format=json"],
			"result" : {
				"exitCode": 0,
				"error" : {
					"errorMessage" : "Something went wrong"
				},
				"vms":
				[
					{
						"version" : "11.7.7",
						"isLocal" : true
					},
					{
						"version" : "11.7.7",
						"isLocal" : false
					}
				]
			},
			"messages" : ["Local head VM version is <i>11.7.7</i> (latest is <i>11.7.7</i>)"]
		}
	]

Each object represents result of one command. Currently `turbo` allows to execute one command at a time so it contains one JSON object.

Each object contains following data:

* `name` - name of executed command
* `arguments` - array of strings that were passed to command
* `result` - object with detailed result of command execution
* `messages` - array of strings that would be output by `turbo` if `--format=json` parameter was not passed

Result object contains `exitCode` with numeric exit code of executed command (value of `%errorlevel%` for this command) and one or more of items described below (depending on command). When command failed result object contains `error` subobject with `errorMessage` containing user-readable error message.