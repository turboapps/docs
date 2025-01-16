## Monitoring

The following document describes external services that can be used to check the health status of Turbo Server.

### Nagios

Nagios can be used to monitor the health of a Turbo Server environment.

The following configuration monitors the HTTP response times and SSL certificate validity of the Portal.

```
define service {
        use                             local-service
        host_name                       <turbo-server-hostname>
        service_description             HTTP Response Time
        check_command                   check_http!<turbo-server-hostname>!https://<turbo-server-hostname>!5!10!-S
}

define service {
        use                             local-service
        host_name                       <turbo-server-hostname>
        service_description             SSL Certificate Expiration Check
        check_command                   check_http_cert!<turbo-server-hostname>!14
}
```

The HTTP Response Time check will cause a WARNING alert if the response time is over 5 seconds and a CRITICAL alert if over 10 seconds or not responding. The SSL Certificate Expiration Check will cause alerts if the certificate will expire in under 14 days. 

The following configuration monitors the Turbo Server Windows Services.

```
define service {
        use                             generic-service
        host_name                       <turbo-server-hostname>
        service_description             Turbo Server Hub/Portal Service
        check_command                   check_nt!SERVICESTATE!-d SHOWALL -l Turbo
}

define service {
        use                             generic-service
        host_name                       <turbo-server-hostname>
        service_description             Turbo Server Application Service
        check_command                   check_nt!SERVICESTATE!-d SHOWALL -l Turbo.AppServer
}
```

The Windows Service check will cause alerts if the services are not running.

The following configuration monitors the disk space on C drive on Turbo Server.

```
define service {
        use                             generic-service
        host_name                       <turbo-server-hostname>
        service_description             Turbo Server Disk Space
        check_command                   WinCheckDriveSize!c!20%!10%
}
```

The check will cause Warning alerts if the free space on the C drive drops below 20% and Critical alerts if it drops below 10%.

### Datadog

Datadog can be used to monitor the health of a Turbo Server environment.

The following configuration monitors the HTTP response times and SSL certificate validity of the Turbo Server portal instance.

```
- name: <turbo-server-hostname>
  url: https://<turbo-server-hostname>
    seconds_warning: 5
    seconds_critical: 10
  check_certificate_expiration: true
  disable_ssl_validation: false
  days_warning: 14
```

This check will cause a WARNING alert if the response time is over 5 seconds and a CRITICAL alert if over 10 seconds or not responding.  This check also cause an alert if the certificate will expire in under 14 days.

The following configuration monitors the Turbo Server Windows Services.

```
  - services:
    - Turbo
    - Turbo.AppServer
```

The Windows Service check will cause alerts if the services are in a not running state.

The following configuration monitors the disk space on C drive on Turbo Server.

```
{
	"name": "Disk space is low on {{device.name}} / {{host.name}}",
	"type": "query alert",
	"query": "avg(last_15m):avg:system.disk.in_use by {host,device} > 0.9",
	"message": "message @alerts-email@corp.com",
	"options": {
		"include_tags": true,
		"thresholds": {
			"critical": 0.9,
			"warning": 0.8
		},
		"require_full_window": true,
		"notify_no_data": false,
		"renotify_interval": 0,
		"escalation_message": "",
		"no_data_timeframe": null,
		"new_group_delay": 300,
		"silenced": {}
	},
	"priority": null,
	"restricted_roles": null
}
```

The check will cause Warning alerts if the free space on the C drive drops below 20% and Critical alerts if it drops below 10%. The above configuration can be imported via the Datadog UI.
