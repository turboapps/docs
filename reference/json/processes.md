### processes

	"processes" : [
		{
			"pid" : "4916",
			"name" : "firefox.exe",
			"containerId" : "ab70ac024a27483a9d56f86f0a255beb",
			"user" : "turbo_user",
			"userTime" : "00:00:05",
			"kernelTime" : "00:00:01",
			"Command" : "\"C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe\" "
		},
		...
	]

Processes contains array of process objects:

* `pid` - id of process
* `name` - name of process
* `containerId` - id of process container
* `userTime` - time or processor used in user space
* `kernelTime` - time or processor used in kernel space
* `Command` - command used to create process

This object is available for following commands:

* `ps` - contains list of running containerized processes