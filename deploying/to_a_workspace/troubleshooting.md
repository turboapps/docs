## Troubleshooting

This section provides information to help troubleshoot common issues you might encounter while using an On-Premises Turbo Portal.

### Enable Diagnostic Mode

Enabling diagnostic mode generates debug output logs. These can be used to help the Turbo support staff diagnose and debug issues.

#### Turbo Client

When troubleshooting an issue related to launching applications from the web, Turbo recommends enabling diagnostic mode for the Turbo Client. Complete the following steps to enable diagnostic mode and capture debug output logs for the Turbo Client:

1. Download and run the DebugView application from: http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx

2. Run **Regedit.exe**, the Microsoft Windows default registry editor tool.

3. Add the following **String** value to the registry key: HKEY_CURRENT_USER\Software\Code Systems\Turbo with the name set to TraceLevel, and the value set to Debug.

4. Restart the Turbo Client by selecting **Start > All Programs > Startup > Turbo Sandbox Manager** ***n.nn***. If multiple versions of the Turbo Sandbox Manager exist, restart each.

5. When the application is launched again with Turbo, the DbgView Output displays debugging logs.


### Locating Log Files

There are several types of logs available for Turbo Server, including logs for the Portal, Application Broker, and Application Server.

#### Portal + Application Broker Logs on Linux

**Portal Logs**

The logs for the Portal service can be accessed with the following command:

    sudo systemctl status portal.turbo.service

**Application Broker Logs**

The logs for the Application Broker service can be accessed with the following command:

    sudo systemctl status remoteapp-web.service

**NGINX Logs**

- Access Logs: /var/log/nginx/prod.turbo.net-access.log;
- Error Logs: /var/log/nginx/prod.turbo.net-error.log;

**Guacd Logs**

The Guacamole proxy translates the Windows RDP protocol into the Guacamole protocol for the HTMl5 guacamole client.
    
    sudo docker logs -f guacd


#### Portal + Application Broker Logs on Windows

**Portal Logs**

The Portal container outputs logs to stdout. You can access these logs with the following command:

    turbo logs --stdout <container>

**Application Broker Logs**

The Application Broker container outputs logs to stdout. You can access these logs with the following command:

    turbo logs --stdout <container>


#### Application Server Logs

**Turbo Cmd Logs**

- C:\Users\{user}\AppData\Local\Turbo\Logs

**RDPProxy Logs**

The RDPProxy translates the Windows RDP protocol into the RXP protocol for the HTMl5 h264 client.

- C:\Users\Administrator\scripts\Logs


#### Windows Event Viewer

The Windows Event Viewer is another useful source of information. If there is an issue with the Application Server configuration or RDP authentication there may be information reported in the Window Event Viewer to help diagnose the problem.