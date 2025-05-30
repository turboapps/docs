# Troubleshooting

Once your container package is built, it is time to test on the platforms that you expect to encounter. When issues surface there are several things that can be done to track down the cause. 

### Viewing the Container Environment

Some problems are caused because the xappl configuration didn't render an environment as was expected. To determine if files and registry keys are as they should be, instances of Windows command prompt or registry editor can be started in the container.

To start a command prompt instance in a virtual application's container environment:

```
> turbo run <image> --startup-file=cmd.exe
-OR-
> virtual-app.exe /XShellEx=cmd.exe
```

This will start a command prompt inside the application's container. Now you can move around the file system to see exactly what the application's in the container can see. Make special considerations for paths that have 32-bit vs 64-bit implications (ie. "program files" vs "program files (x86)"), especially when troubleshooting environments with mixed process architectures.

Note, it is easy to forget that a command prompt is for the container rather than for your native system. To prevent confusion it is recommended to set the title of the command prompt by executing `title in container` which will put "in container" as the prompt title.

To start a registry editor instance in the virtual application's container environment:
```
> turbo run <image> --startup-file=c:\Windows\system32\regedt32.exe
-OR-
> turbo run <image> --startup-file=c:\Windows\syswow64\regedt32.exe
-OR-
> virtual-app.exe /XShellEx=c:\Windows\system32\regedt32.exe
-OR-
> virtual-app.exe /XShellEx=c:\Windows\syswow64\regedt32.exe
```

This will start an instance of the registry editor inside the container environment. Note that Windows only allows one instance of the registry editor to be running so close down all other instances before running this command or else you may not be viewing what you think you are.

The 32-bit vs 64-bit registry is also something to be aware of with the registry editor. Select the registry editor to launch based on the architecture of the process that you are investigating.

### Turbo.net Professional Services

Turbo has a team of knowledgable support engineers to help you build your packages. We can help you through any problems that you face. Email our team at [support team](mailto:support@turbo.net). See [Support Programs](https://turbo.net/datasheets/Turbo.net-Support-Programs.pdf) for more information on the services that we offer.
