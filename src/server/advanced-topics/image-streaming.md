# Configure Image Streaming from Hub

By default Application Servers download the application images from Hub before running them. It is however possible to stream the images directly from Hub. To configure the streaming, follow the steps listed below.

## Prepare a file share on Hub

The first step is to create a file share where Hub will store the images. Clients will use it as an image cache. For this document, let's assume we want to use the path D:\image-share. It is available for client machines as a Windows share at an address \\hub\share (hub is the name of Hub in the internal network).

## Configure the image cache on Hub

Now, it’s time to configure Hub. Sign in as an administrator, go to the Server list and click on the server in the hub role. Scroll to the bottom, and there should be an Image Path section. You need to type there the local path of the share folder with images subfolder. In our example, it will be:

![Server enable image cache](/images/hub-enable-image-cache.png)

After saving the settings, Hub will restart, and new images will automatically appear in the image cache.

## Configure the image path on the clients

To enable streaming, we need to configure the clients to use the hub image cache. It is as simple as running: `turbo config --image-path=\\hub\share --all-users`.

_Side note:_

The latest Turbo client (19.12.2108) added new options for configuring the machine-scope client settings. The --all-users flag behavior is inconsistent between various commands. Thus we introduced a TURBOAS environment variable to define the scope of the running commands. For example, to set the image-path globally, you may run the following commands in PowerShell:

```
$env:TRUBOAS=”all-users”
turbo config --image-path=\\hub\share --as-override (if you want to allow users to change this setting, use --as-inherit)
```

## Use the stream (turbo run/installi)

With the image path configured, you may use turbo run or installi on the clients’ machines, and they should directly use the images from the image cache.
