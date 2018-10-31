## To a Desktop

Turbo supports deploying containers from the Turbo.net hub to your desktop using the **Sync Device** feature. Add the **latest** version of an application to enable auto-patching of that application. This ensures you get the latest updates to the selected applications as they are released.

### Sync Device

The **Sync Device** feature on the Turbo.net Hub provides the ability to deploy applications directly to your desktop from the Hub in two simple steps: Add applications in the Turbo.net hub, when complete just click **Sync Device** on your user or organization homepage.

![](/docs/deploying/to_a_desktop/addapp9.png)

The **Sync Device** button will update to show the syncing has begun.

![](/docs/deploying/to_a_desktop/addapp10.png)

When complete a prompt appears to confirm **Applications synced to Device** with an instruction that shortcuts have also been created in the start menu.

![](/docs/deploying/to_a_desktop/addapp11.png)

On your machine you will notice that a scheduled task has been created. The scheduled task will perform the application updates. Modify the schedule to ensure the applications are only updated when you want them to. Optionally, **Run** the task to cache the applications. If you do not run the task, launching an application will present a buffer dialog on first launch.

![](/docs/deploying/to_a_desktop/addapp13.png)

### Shell Registration

Containers can also be integrated with the Windows shell. The `install` or 'installi' command will create Start Menu shortcuts, file associations, and shell extensions in the shell for the image so that it behaves similar to an installed application.

```
# Install the VLC container to the shell
> turbo installi --name=vlc videolan/vlc --register-extensions
```

Configuring shortcuts and file associations for an image is done in Turbo Studio. See the [reference](/docs/building/working_with_turbo_studio/#msi) section for more details.