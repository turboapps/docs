## System Center (SCCM)

Microsoft System Center Configuration Manager (SCCM) is a wonderful tool to deploy application containers to desktops in your enterprise. Below shows several methods that SCCM can be used to deploy containers.

### For Standalone Executables

The easiest solution is to deploy a shortcut to a standalone executable container. Standalone executable containers are single .exe files that have the full virtual machine built in. With them you can get the full application experience without installing anything to the machine. You can either point your application shortcut to a copy of the .exe in a local machine location or at shared network location. See [building standalone executables](/docs/studio/working-with-turbo-studio/standalone-executables) for more information.

### For MSIs

Turbo MSIs can be used as an alternative to deploy standalone executables. The benefits are that you have full control over what shortcuts get created as well as the ability to add file associations to your application. See [building MSIs](/docs/studio/working-with-turbo-studio/msi) for more information.

### For Turbo Commands

The Turbo.net Client Runtime platform can register a container to the desktop, honoring all the same settings that you may have already configured for a Turbo MSI deployment. The benefits to using the Turbo.net Client Runtime is that you have full integration with Turbo.net and Turbo Server platforms for patching and flexibility. 

```
# Add the latest Firefox ESR browser to the Start Menu
> turbo installi mozilla/firefox-esr

# Add shortcuts to all the dashboard apps from the 'turbo-user' user account
> turbo subscribe turbo-user

# Add shortcuts to all the dashboard apps from the 'turbo-org' org
> turbo subscribe turbo-org
```

See [installi](/docs/reference#installi), [install](/docs/reference/command-line/installi), and [subscribe](/docs/reference/command-line/subscribe) for more information.

For this method, the Turbo.net Client Runtime must be installed on the machine. Using the **--silent** and **--all-users** command line parameters, the client can be installed with SCCM. See [Turbo Client Installation](/docs/reference/turbo-client#turbo-client-installation) for more information.
