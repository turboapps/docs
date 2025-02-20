# Hub Server Troubleshooting

This guide provides information to help troubleshoot common issues you might encounter while installing and managing Turbo Server.

::: tip What you'll find here
- Installation troubleshooting
- Common issues and solutions
- Performance monitoring
- Diagnostic tools and logs
:::

## Setup and Installation Issues

### Database Connection Error

![Setup Failed](/images/setup-failed.png)

If you see "Setup Failed!" with the error: "A network related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify the instance name is correct and that SQL Server is configured to allow remote connections."

This may occur due to:
- Database being unavailable
- SQL Server connection issues
- Embedded database still initializing

**Resolution Steps:**
1. Verify SQL server connectivity with specified credentials
2. For standalone mode, wait a few minutes for embedded database initialization
3. Check if Turbo Server Service is installed and running
4. Try accessing the admin site (typically http://localhost/admin)

### Common Installation Issues

The following table lists common installation issues and their solutions:

| Issue | Solution |
|-------|----------|
| **Turbo Server installation failed** | Timeout when starting/accessing database services. Go to *Control Panel > Administrative Tools > Services* and restart the Turbo Server service. |
| **Service fails to start** | 1. Check for database service timeouts<br/>2. Review required ports for installed roles<br/>3. Check for conflicts with IIS or other services<br/>4. Restart the Turbo Server service |
| **Can't access Admin/Hub Site** | Windows security settings may restrict external connections. See [Configuring Security](/server/advanced-topics/security). |
| **Application not in portal** | Verify application is pushed to correct org account dashboard (turbo.net hub) or namespace (Turbo Server). See *Managing Applications*. |
| **Installing new license** | Click **New License** on the **Admin** page in Administration Site. |
| **Server inaccessible after network change** | Restart Turbo Server service after network configuration changes. |
| **HTML5 cloud launch fails (generic error)** | 1. Review SSL troubleshooting docs<br/>2. Check broker-to-app-server connectivity<br/>3. Verify ports 80/443 access |
| **HTML5 cloud launch fails (service unavailable)** | Verify user is in Remote Desktop Users group when login mode is set to "ask". |
| **Forgot admin password** | Run as administrator:<br/>`Server.exe admin user-group 2 clear`<br/>This allows admin site access without login. Reset password and re-add admin user. |
| **Large image push fails** | Increase Hub heap max setting in `/admin/domain/servers.aspx`. |
| **Compiler Error -1073741502** | Service user lacks ASP.NET cache permissions:<br/>1. Stop Turbo service<br/>2. Delete: `C:\Windows\Microsoft.NET\Framework\{version}\Temporary ASP.NET Files`<br/>3. Restart service |
| **Windows Interactive Login blocks apps** | 1. Use "Notice and Consent" in `/admin/general`<br/>2. Remove group policy<br/>3. Disable registry keys:<br/>`HKLM\Software\Microsoft\Windows NT\CurrentVersion\winlogon\LegalNoticeCaption`<br/>`HKLM\Software\Microsoft\Windows NT\CurrentVersion\winlogon\LegalNoticeText` |
| **DNS resolution error** | Test DNS with ping commands. If failing, switch to public DNS server. |
| **Upgrade service start failure** | Windows Service Control Manager error. Restart computer and retry. |
| **Portal/API requests hang under load** | Update Apache config to increase request threads. See [Network Optimization](/server/optimization#network). |

## Performance Monitoring

### Performance Counters

![Server Diagnostics](/images/admin-server-diagnostics.png)

Turbo Server uses performance counters to track and report server load information. These reports may be viewed on the Turbo Server administration site [Domain page](/server/administration/domain).

If the load information for a server is missing, then the Turbo service user may not have permission to access performance counter data. To grant permission to the Service user:

1. Log on to the application server.
2. Open **Server Manager** and click on **Tools > Computer Management**.
3. From the **Computer Management** window, click on **Local Users and Groups > Users.**
4. Right-click on the service user and click **Properties**.
5. Click on the **Member Of** tab and check that the **Performance Monitor Users** group is listed.
6. If the group is not listed, click **Add** and enter **Performance Monitor Users**, then click OK.

This group is automatically added to the service user during Turbo Server installation.

## Diagnostic Tools

### Enabling Debug Mode

Debug logs help Turbo support diagnose issues:

### Client Logs

Located in: `c:\users\[user]\appdata\local\turbo\logs`

### Server Debug Mode

1. Stop the service:
```powershell
net stop turbo
```

2. Edit `C:\ProgramData\Turbo Server\settings.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<settings>
    <InstallPath>[Path]</InstallPath>
    <InstalledVersion>[Version]</InstalledVersion>
    <DbLibraryConnection>embedded</DbLibraryConnection>
    <DbManagerConnection>embedded</DbManagerConnection>
    <TraceLevel>Debug</TraceLevel>
</settings>
```

3. Start the service:
```powershell
net start turbo
```

### Log File Locations

Default install location: `C:\Program Files\Turbo Server`

| Log Type | Location |
|----------|----------|
| Installation | `[Install Directory]\logs\Setup.log` |
| Service | `[Install Directory]\logs\*.log` |
| Web Services | `[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Turbo Server\Web\logs\*.log`<br/>`[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Turbo Server\Web\Hub\logs\*.log` |
| SQL Server | `[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Microsoft SQL Server\MSSQL.1\MSSQL\LOG` |
| Apache | `[Install Directory]\Sandbox\MODIFIED\@PROGRAMFILESX86@\Apache Software Foundation\Apache2.4\logs\error.log` |
| Portal/Broker | Container logs (xcstream_*.txt)<br/>Export with: `turbo logs [container] --export=c:\path` |
| App Server | `C:\Program Files (x86)\Turbo\ApplicationServer\logs` |

### Managing the Service

Two methods to restart the Turbo Server service:

1. Using Control Panel:
   - Navigate to: *Control Panel > Administrative Tools > Services*
   - Find and restart "Turbo Server" service

2. Using Command Prompt (as Administrator):
   ```powershell
   # Stop service
   net stop turbo
   
   # Start service
   net start turbo
   ```

### Windows Event Viewer
Check Event Viewer for service startup issues and other Windows-related problems.

## Tips

::: warning Important Notes
- Always check logs before making configuration changes
- Back up settings before modifications
- Document troubleshooting steps taken
- Contact support for persistent issues
:::

::: tip Best Practices
- Monitor performance counters regularly
- Keep diagnostic logs for issue tracking
- Maintain regular service maintenance
- Document configuration changes
:::
