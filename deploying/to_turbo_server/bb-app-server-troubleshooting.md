### Application Server Troubleshooting

A common point of failure is due to the group policy applied to the application server.

## Group Policy Settings
Once you the application server installed, the administrator must ensure certain group policy settings are correct.

If the broker and app server will be using Turbo profile authentication (not using active directory logon) the app server must have Windows Remote Management (WinRM Service) enabled. Esure that any group policy which disabled WinRM is removed.

In addition, the following settings should be correct:

Windows Components/Remote Desktop Services/ Remote Desktop Connection Client
"Do not allow passwords to be saved" must be disabled 

Windows Components/Remote Desktop Services/Remote Desktop Session Host/Connections
"Allow users to connect remotely by using Remote Desktop Services" must be enabled 

Windows components/RemoteDesktop Services/Remote DesktopSession Host/Security
"Always prompt for password upon connection" must be disabled

## Provision Failures

The following section describes possible solutions to errors that occur during app server installation.

