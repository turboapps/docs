## Application Security

Application servers provide end users the ability to run Turbo applications remotely in containers. The container model provides limited security against malicious users by preventing users to modify files and registry outside of the containers isolation setting. Additional care must be taken since the user may  upload and attempt to execute arbitrary applications.

AppLocker can be used to prevent malicious applications from executing. Please refer to the [documentation](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/applocker/applocker-overview). You may also choose any off the shelf software that can perform application whitelisting. 

### Network

Application server users may attempt to probe the network using tools that can be run in the Turbo virtual runtime. Ensure that application servers do not have network access to resources that are not intended for the target end user. 

In addition, a user could attempt to download and run Wireshark in the virtual runtime to capture network packets. However, if WinPcap is not installed (driver) then the user cannot capture anything.

If the application server is isolated in their own virtual network, make sure to configure two way https access to the Hub server and SQL server.

#### Securing Remote Access

Turbo uses temporary profiles for running applications on application servers. Temporary profiles are anonymized local machine accounts with randomized passwords that do not require domain authentication, and so application servers are not required to join the domain and will keep the domain secure by design. NTLM is the default authentication method for local machine accounts connecting via RDS.

It may be desirable for an organization to fully disable NTLM authentication for compliance purposes. The following settings allow administrators to disable NTLM when running Turbo remote sessions. Under admin/general/streaming.aspx Network Security section set the following settings:

__Require Network Level Authentication__
Custom: Not enabled

NLA should not be required as RDP authentication must be used when running applications using temp profiles. If the users will authenticate to application servers using AD Kerberos then NLA can be required.

The default Windows value for this setting is `Not Configured`.

__Restrict NTLM: Incoming NTLM traffic__
Custom: Deny all accounts

The default Windows value for this setting is `Allow all`.

__Restrict NTLM: NTLM authentication in this domain__
Custom: Deny all

The default Windows value for this setting is `Disable`.

The following table describes there EnableSspSupport will be used in the native client to connect to cloud RDP sessions.

| Require NLA | Restrict NTLM Traffic | EnableCredSSPSupport |
| ----------- | --------------------- | -------------------- |
| false       | false                 | false*               |
| false       | true                  | false*               |
| true        | false                 | true                 |
| true        | true                  | true*                |
| not set     | any                   | true                 |

*Native clients will always set EnableCredSSPSupport to true when using Kerberos login mode as it is required for Kerberos login.

*Temp profile will not work if both Require NLA and NTLM traffic is restricted settings are set to true. Applications must use Ask or Kerberos login modes to run in the cloud.

*The HTML5 client will not work if both Require NLA and NTLM traffic is restricted settings are set to true. The Server Administrator should disable the Run in Cloud (HTML5) launch mode to ensure users launch using the Run in Cloud (Windowed) mode via the Turbo Client.

If require NLA is not set, EnableCredSSPSupport is true because modern operating systems require NLA by default. Under gpedit > administrative templates > windows components > remote desktop services > remote desktop session host > security > require user authentication for remote connections by using network level authentication:

*If you do not configure this policy setting, the local setting on the target computer will be enforced. On Windows Server 2012 and Windows 8, Network Level Authentication is enforced by default.*

### Securing Execution using AppLocker

AppLocker can be used to enforce that only Turbo runs on the application server. The following configuration allows only the Turbo Client to execute on the application server.

```
<AppLockerPolicy Version="1">
  <RuleCollection Type="Appx" EnforcementMode="NotConfigured" />
  <RuleCollection Type="Dll" EnforcementMode="NotConfigured" />
  <RuleCollection Type="Exe" EnforcementMode="Enabled">
    <FilePathRule Id="921cc481-6e17-4653-8f75-050b80acca20" Name="(Default Rule) All files located in the Program Files folder" Description="Allows members of the Everyone group to run applications that are located in the Program Files folder." UserOrGroupSid="S-1-1-0" Action="Allow">
      <Conditions>
        <FilePathCondition Path="%PROGRAMFILES%\*" />
      </Conditions>
    </FilePathRule>
    <FilePathRule Id="a61c8b2c-a319-4cd0-9690-d2177cad7b51" Name="(Default Rule) All files located in the Windows folder" Description="Allows members of the Everyone group to run applications that are located in the Windows folder." UserOrGroupSid="S-1-1-0" Action="Allow">
      <Conditions>
        <FilePathCondition Path="%WINDIR%\*" />
      </Conditions>
    </FilePathRule>
    <FilePathRule Id="fd686d83-a829-4351-8ff4-27c7de5755d2" Name="(Default Rule) All files" Description="Allows members of the local Administrators group to run all applications." UserOrGroupSid="S-1-5-32-544" Action="Allow">
      <Conditions>
        <FilePathCondition Path="*" />
      </Conditions>
    </FilePathRule>
    <FilePublisherRule Id="a7863604-0cfa-429d-b8b0-3a9716e75757" Name="Signed by O=CODE SYSTEMS CORPORATION, L=SEATTLE, S=WASHINGTON, C=US" Description="" UserOrGroupSid="S-1-5-32-555" Action="Allow">
      <Conditions>
        <FilePublisherCondition PublisherName="O=CODE SYSTEMS CORPORATION, L=SEATTLE, S=WASHINGTON, C=US" ProductName="*" BinaryName="*">
          <BinaryVersionRange LowSection="*" HighSection="*" />
        </FilePublisherCondition>
      </Conditions>
    </FilePublisherRule>
  </RuleCollection>
  <RuleCollection Type="Msi" EnforcementMode="NotConfigured" />
  <RuleCollection Type="Script" EnforcementMode="NotConfigured" />
</AppLockerPolicy>
```

To install run this in an elevated Powershell prompt:

```
Set-AppLockerPolicy -XMLPolicy c:\<path-to>\applocker-turbo-server-working.xml
```

Open Group Policy Editor, navigate to Local Computer Policy > Computer Configuration > Windows Settings > Security Settings > Application Control Policies > Applocker > Executable Rules, and verify the rules have been imported.

Restart the AppIDSvc Windows Service.

To view blocked EXE events open Event Viewer and navigate to Application and Services Logs > Microsoft > Windows > Applocker > EXE and DLL.

Note that the whitelist rule applies specifically to the Remote desktop users group, and that it does not prevent executable running within the Turbo virtual environment. To prevent specific executables in the Turbo environment, add additional FilePathRule rules:

```
<FilePathRule Id="b68894c7-ecc7-4cc0-abe9-2317221bf221" Name="EXE Name Block: C:\*\minergate*.exe" Description="" UserOrGroupSid="S-1-5-32-555" Action="Deny">
  <Conditions>
    <FilePathCondition Path="C:\*\minergate*.exe" />
  </Conditions>
</FilePathRule>    
```

## FAQ

__How are Turbo application verified when end users launch the application?__

Application are configured by the administrator of the workspace. The configurations are hashed using SHA-256 and verified by the Turbo client prior to launching. If a malicious user attempts to tamper the application configuration in any way, the client will detect a hash mismatch and refuse to launch the application.

__What is a device key and why are there locally generated private keys?__

The device key is used by the local machine to register the device (under a specific Turbo user) to Turbo Server. The local private key is used to sign the device's identity to validate itself to Turbo Server. The private key should be kept secure on the local device. In the event the key is leaked, delete the device key registration using the administrative site located at /admin/users/devicekeys.aspx.

__Can end users modify the system drive on application servers?__

Not by default. Turbo uses low privilege local users to run Turbo applications on the application server, and by default those users should not have write access to the system drive. If the application isolation is set to Merge then any user attempt to write to the system drive will attempt to pass through and fail. In full or write-copy isolation mode, the virtual environment will allow users to write to the system drive but is sandboxed within the virtual environment. The user will perceive that the drive is writable, but is not. In addition, an application server can be configured to disallow any modfications to a drive using the standard built in ACL in Windows. Refer to the [Microsoft Windows documentation](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc770962(v=ws.11)) to achieve this.

__How are Turbo applications verified before they are executed on end user devices?__

Users must agree to trusting a domain before running an application from a Turbo Server portal. Once the domain is trusted, the application's image and settings are verified using SHA-256 hash to ensure integrity of the application from the domain. If the hash does not match then the client will prevent the execution of the application.