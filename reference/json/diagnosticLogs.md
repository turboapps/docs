### diagnosticLogs

	"diagnosticLogs" : [
		{
			"pid" : "15",
			"Command" : "cmd.exe"
		},
		...
	]


DiagnosticLogs contains array of steam logs objects. Each one contains data about process for which diagnostics logs are available:

* `pid` - pid of process
* `Command` - command of process

This object is available for following commands:

* `logs`