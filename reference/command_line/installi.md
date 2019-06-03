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
      --no-services             Don't register services for installed applications
      --no-shell-extensions     Don't register shell extensions for installed applications
      --no-start-menu-shortcuts Don't create Start menu shortcuts for installed applications
      --offline                 Allows the images to be installed without a hub connection if all images are present
                                  locally
      --skip-installed          Skip installation if already installed
      --wait-after-error        Leave process open after error
      --wait-after-exit         Leave process open after it exits
```

Any supplied run flags are passed to the run command when an installed application is executed. For example, `turbo installi 7-zip --vm=1.2.3.4 --diagnostics` will result in shortcuts that have a run command like `turbo run 7-zip --vm=1.2.3.4 --diagnostics [additional installation params]`. These can be used to customize the installation behavior.
