# Turbo Desktop

Turbo Desktop is a command line interface for registering Turbo Workspaces to a desktop.

A registered desktop will enable [URL protocol handlers](https://hub.turbo.net/docs/server/administration/workspaces.html#workspace-general) and [file associations](https://hub.turbo.net/docs/server/administration/workspaces#workspace-general) as specified in the workspace.

Turbo Desktop is currently available for Windows.

## Command Line

Install Turbo for Windows and run the command `turbodesktop`.

```
Usage: register|unregister <workspace>
Options:
  -a, --all-users=VALUE      Register for all users
  -d, --domain=VALUE         Domain URL of the workspace. Current domain if none provided
  -w, --workspace=VALUE      Workspace to handle the url
  -v, --verb=VALUE           Verb for handle-file
  -h, --help                 Show this message and exit
```

Ensure client is logged in and pointed to the correct domain:

```
turbo config --domain=<your domain>
turbo login <username>
Password: ******
```

Register a workspace in the domain:

```
>turbodesktop register default
Created device key for turboserver1@administrator
Fetching workspace default
Registering file / url associations
Created file association .torrent qBittorrent
Created ProgID Turbo.F4A20eBQ249d09wc8DxCGZl
Created url association: magnet qBittorrent
Created ProgID Turbo.U4A20eBQ249d09wc8DxCGZl
Created file association .pdf Firefox
Created ProgID Turbo.F6Uo0WpSOi0lr9Zl7E1wPez
Created url association: http Firefox
Created url association: https Firefox
Created url association: ipfs Firefox
Created ProgID Turbo.U6Uo0WpSOi0lr9Zl7E1wPez
Created file association .xlsx Excel
Created file association .xls Excel
Created ProgID Turbo.F528EJPsZXwPD4i1QblBcM7
Creating URL Protocol for ProgID zoom
Created url association: zoom Excel
Created ProgID Turbo.U528EJPsZXwPD4i1QblBcM7
Created remote icon from johnsu/qbittorrent for qBittorrent
Created remote icon from mozilla/firefox for Firefox
Created icon for Excel
Successfully registered Default (turboserver1)
```

URL and file assocations are now registered to the device. To unregister, use the `unregister` command.

```
>turbodesktop unregister default
Unregistering Default (turboserver1)
Deleting ProgIDs
Deleted ProgID Turbo.F4A20eBQ249d09wc8DxCGZl
Deleted file association .torrent
Deleted ProgID Turbo.U4A20eBQ249d09wc8DxCGZl
Deleted ProgID Turbo.F6Uo0WpSOi0lr9Zl7E1wPez
Deleted ProgID Turbo.U6Uo0WpSOi0lr9Zl7E1wPez
Deleted ProgID Turbo.F528EJPsZXwPD4i1QblBcM7
Deleted file association .xlsx
Deleted file association .xls
Deleted ProgID Turbo.U528EJPsZXwPD4i1QblBcM7
Deleted URL zoom
Deleting workspace files
Successfully unregistered Default (turboserver1)
```
