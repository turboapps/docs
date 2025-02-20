# Licensing

## Turbo Server License

The standard Turbo Server license, **Turbo Server Enterprise Edition**, offers named or simultaneous end-users licensing options. The standard license enables an unlimited number of applications to be hosted on Turbo Server.

Administrators can activate and de-activate users from the Turbo Server administration site as needed. Additionally, the license can be upgraded to accommodate more users or devices.

For more information about managing users refer to [Managing Users and Authentication](/server/administration/users). For instructions on applying a new license to Turbo Server, refer to [General](/server/administration/general).

### Named User Licensing

Under a named user license, there is a limit on the total number of active users. Users have an activation state that influences their access and license, as outlined below:

| Activation State | Occupies License | Can Launch Applications | Can Login |
| ---------- | ---------- | ---------- | ---------- |
| Active       | __Yes__       | __Yes__       | __Yes__       |
| Inactive       | No       | __Yes__ (transitions to Active)       | __Yes__       |
| Disabled       | No       | No       | No       |

The initial activation state varies depending how the user is created:
* For Single Sign-On (SSO), users are initially set to "active".
* For Azure AD synchronization and anonymous logins, users are initially set to "inactive".
* For internal users, administrators can specify the activation state when creating the user.

Inactive users are activated when they run an application, or when they are manually activated by an admin. Users are automatically reset to "inactive" if their account is over 30 days old and they have not launched an application in over 30 days. Administrators and special system users are not subject to automatic deactivation.

## RDS License

Servers with the Application role must have RDS licensing configured, please refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-client-access-license) on how to do so.

Please note that __RDS Per User CALs are not supported with the default Temporary Profile login mode__. Per the [Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-client-access-license), RDS Per User CALs can only be assigned to Active Directory users and temporary profiles use local non-Active Directory users.

If using Temporary Profile login mode, the application servers must be configured with RDS Per Device CALs. 

## Application License

Application licenses can be implemented by the native application, such as connecting to a license server, or controlled by Turbo administrative settings. Turbo allows administrators to limit the number of concurrent and named user or devices on a per application basis. See the [Workspace Applications](/server/administration/workspaces.html#workspace-applications) documentation for details.
