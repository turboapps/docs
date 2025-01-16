## Windows Firewall

Sometimes it is necessary to add **Windows Firewall** rules to allow container applications access to network ports. Below are some suggestions when configuring these rules.

### Using the StubExe Path

If creating a rule that applies to a program path, you will need to use the path to the **stubexe**. The stubexe is a small .exe stub that is written to the sandbox when an application inside the container is launched. It is required by the Windows operating system in order to execute an application.

If I run Mozilla Firefox in a container:

```
> turbo run firefox -d
Using VM 18.7.1306 from local
Using image clean:26 from local
Using image firefox:61.0.1 from local
Using image firefox-base:61.0.1 from local
Running existing container firefox#d9011823
```

I will find the sandbox for this container at **C:\Users\turbouser\AppData\Local\Turbo\Containers\sandboxes\d9011823384b4cbeac39e7d430892fe4**, where **d9011823384b4cbeac39e7d430892fe4** is the container ID. You can find the container ID using the `turbo containers` command or by looking for a directory which matches the container name, in this case **firefox#d9011823**.

```
> tree /f C:\Users\turbouser\AppData\Local\Turbo\Containers\sandboxes\d9011823384b4cbeac39e7d430892fe4\local\stubexe
Folder PATH listing
Volume serial number is 000000FB 5ABB:3E17
C:\USERS\TURBOUSER\APPDATA\LOCAL\TURBO\CONTAINERS\SANDBOXES\D9011823384B4CBEAC39E7D430892FE4\LOCAL\STUBEXE
└───0xBD0FFFB5401D3815
        firefox.exe
        firefox.exe.manifest
```

The folder **0xBD0FFFB5401D3815** is a hash of the file configuration settings so that that the same launch again in the future does not require a new file to be written unnecessarily.

Note, there will be a stubexe for each .exe that is spawned from the container. You will need to make rules for each .exe that it should apply to.

If you are using a standalone executable, the stubexe is also used and will be in the application sandbox in the same folder structure. If your environment has upgraded from using a Spoon Client, then you may need to use the **spoon** directory rather than the one which using a **turbo** link.

### Creating a New Outbound Rule

In Windows Firewall, an **Outbound Rule** is used to control how an application can access outside resources.

Open the **Windows Firewall** from the **Control Panel**.

![Firewall control panel](https://hub.turbo.net/images/docs/firewall1.png)

Click on **Advanced Settings** link.

![Firewall advanced settings](https://hub.turbo.net/images/docs/firewall2.png)

Click on **Outbound Rules** and then **New Rule...**.

![Firewall new outbound rule](https://hub.turbo.net/images/docs/firewall3.png)

Select the **Program** rule type and then next.

![Firewall outbound rule program](https://hub.turbo.net/images/docs/firewall4.png)

Enter the path to the application stubexe and then next.

![Firewall outbound rule program path](https://hub.turbo.net/images/docs/firewall5.png)

For our example we will block all connections from the application. Then press next.

![Firewall outbound rule action](https://hub.turbo.net/images/docs/firewall6.png)

Apply to all networks then press next.

![Firewall outbound rule profile](https://hub.turbo.net/images/docs/firewall7.png)

Give the rule a name and description, then press next.

![Firewall outbound rule name](https://hub.turbo.net/images/docs/firewall8.png)

Now your new rule will be added to those that Windows adds by default.

![Firewall outbound rules](https://hub.turbo.net/images/docs/firewall9.png)

Running firefox again from the same container yields a different result this time.

![Firewall outbound rule Firefox](https://hub.turbo.net/images/docs/firewall10.png)

### Customizing the StubExe Path

By default the stubexe path is inside the sandbox. However, this can make it difficult to configure network rules that apply across your enterprise since it will be a different path for every user. For this case, you can configure where the stubexe is cached using Turbo Studio when you build your container images.

You can set the **Application stub cache location** to any local path.

![Firewall stubExe path](https://hub.turbo.net/images/docs/firewall11.png)

Now the application stubexe will always be cached in a well known location that you can set your universal rules to point to.

![Firewall stubExe](https://hub.turbo.net/images/docs/firewall12.png)

### Adding Rules Programatically

You can use either the PowerShell [New-NetFirewallRule](https://docs.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule?view=win10-ps) cmdlet or call the Windows [netsh](https://support.microsoft.com/en-us/help/947709/how-to-use-the-netsh-advfirewall-firewall-context-instead-of-the-netsh) command directly.
