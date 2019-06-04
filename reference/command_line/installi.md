### installi

The `installi` creates Start menu shortcuts for the specified image set.

```
Usage: turbo.exe installi <options> <image> [run flags...]

<options> available:
      --all-users               Install for all users on this machine. Requires admin privilege.
      --format=VALUE            Use the specified format for output. Supported values: json
  -n, --name=VALUE              Name of installed image
      --no-desktop-integration  Don't integrate with the host machine for installed applications
      --no-desktop-shortcuts    Don't create desktop shortcuts for installed applications
      --no-file-associations    Don't register file associations for installed applications
      --no-send-to-shortcuts    Don't create Send To menu shortcuts for installed applications
      --no-shell-extensions     Don't register shell extensions for installed applications
      --no-start-menu-shortcuts Don't create Start menu shortcuts for installed applications
      --offline                 Allows the images to be installed without a hub connection if all images are present locally
      --register-services       Register services for installed applications
      --skip-installed          Skip installation if already installed
      --wait-after-error        Leave process open after error
      --wait-after-exit         Leave process open after it exits
```

Any supplied run flags are passed to the run command when an installed application is executed. For example, `turbo installi 7-zip --vm=1.2.3.4 --diagnostics` will result in shortcuts that have a run command like `turbo run 7-zip --vm=1.2.3.4 --diagnostics [additional installation params]`. These can be used to customize the installation behavior.

Virtual services defined in the images are not installed by default. Virtual services will be installed to the Windows Service Control Manager and will be run as SYSTEM account by default. 

There are a couple ways to organize your images with virtual services:
- Client application with services that are not shared - If the services are not needed to be shared among all users on the machine but rather are only necessary for the user's session (for example, a local SQL database service), then the services should not be installed. They will be spawned automatically on container start or as needed (depending on image configuration).
- Client application with services that are shared - If the services are to be shared by all users on the machine then the services in the images will need to be installed but must be configured in such a way that they are not automatically started when the user's container is executed. Otherwise when a user runs from an installed container's shortcut, the user container will try to spawn the service as well and fail. 
- Shared services without a client application - If an image contains a service without a client (for example, a web server or SQL database), then can install with the services without changes as no shortcuts will be created. 
