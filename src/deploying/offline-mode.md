# Offline Deployments using Turbo Client

The Turbo Client can be used to deploy applications in offline mode without the need to set up a Turbo Server. In this scenario, the system administrator will need to add, remove, update, register, and manage the available base and application SVM packages using the client CLI.

### Prepare a network share with the base and application SVM packages

In offline mode, there is no Turbo Hub Server for image management, so images will need to be sourced from somewhere else, such as a network share.

Using an online-enabled Turbo Client, pull the base images from Turbo.net Hub.

```
# Install Turbo Client without the offline flag.
> turbo-client-installer.exe

# Turbo Client will point to Turbo.net by default, so this step may be skipped unless your client has been configured to point to a different server.
> turbo config --domain=turbo.net

# Pull the base images to the local client repository.
> turbo pull /xvm,windows/base,windows/clean
Pulling VM version 24.4.10
Pull complete
Pulling image base version 2
Pull complete
Puling image clean version 42
Pull complete
```

You can use [Turbo Studio to package your applications](/studio/working-with-turbo-studio/setup-capture) or pull pre-packaged applications from [Turbo.net Hub](https://hub.turbo.net/hub).

```
# Pull an example application
> turbo pull npp/notepadplusplus-x64
Pulling image notepadplusplus-x64:8.6.5 from https://hub.turbo.net/users/npp
Pull complete
```

Export the SVM packages to your network share, so they can be imported as part of the deployment steps.

```
turbo export /xvm:24.4.10 \\networkpath\turbo-images\xvm_24.4.10.svm
turbo export windows/base:2 \\networkpath\turbo-images\windows_base_2.svm
turbo export windows/clean:42 \\networkpath\turbo-images\windows_clean_42.svm
turbo export npp/notepadplusplus-x64:8.6.5 \\networkpath\turbo-images\npp_notepadplusplus-x64_8.6.5.svm

```

### Deploy and Configure the Turbo Client in Offline Mode

Pass the `--offline` flag to the Turbo Client installer in order to install the client in offline mode. In this mode, any command that requires access to an online resource, such as launching an image that is not present in the local repository, will fail instead of trying to contact and pull the image from a Turbo Server. The Turbo Client also will not check for client updates or workspace updates.

For scripted deployments, append the `--silent` flag for unattended installations and the `--all-users` flag for a system install.

```
turbo-client-installer.exe --offline --all-users --silent
```
See the [Turbo Client Installation documentation](/reference/turbo-client/turbo-client.html#turbo-client-installation) for more installation flags and information.

After the setup has completed, use the [turbo config](/reference/command-line/config) CLI command to configure the client. For offline scenarios, it is common to configure the following:

```
# Lock the client configuration, so users cannot change the settings. 
turbo config --as-override

# Configure the client repository path to a shared read-only path to prevent users from adding or removing images on their own. 
# The `allusers` value specifies the Turbo folder in ProgramData, but this path can be a different drive or even a network share path.
turbo config --image-path=allusers --all-users

```

### Populate the Client Repository with SVM Images

When the Turbo Client is deployed in offline mode, the base and application SVM packages need to be imported manually using the [turbo import](/reference/command-line/import) command from the prepared network share.

```
turbo import svm -n=/xvm:24.4.10 \\networkpath\turbo-images\xvm_24.4.10.svm
turbo import svm -n=windows/base:2 \\networkpath\turbo-images\windows_base_2.svm
turbo import svm -n=windows/clean:42 \\networkpath\turbo-images\windows_clean_42.svm
turbo import svm -n=npp/notepadplusplus-x64:8.6.5 \\networkpath\turbo-images\npp_notepadplusplus-x64_8.6.5.svm

```

Note that if you have configured the client's image path (using `turbo config --all-users --image-path`) to a network share to be used as a shared image repository between multiple users and systems, you only need to import once per image instead of once per system. In this case, it is also recommended to use a high-performance network share or the users will experience reduced application performance.

### Deploy Applications to the System

Once the client repository has been populated, applications can be deployed to the system using the [turbo installi](/reference/command-line/installi) command.

Example command to install the Notepad++ application for all users in offline mode using merge container isolation. The application will be able to read and write to the native filesystem and registry.

```
> turbo installi --offline --all-users npp/notepadplusplus-x64:8.6.5 --isolate=merge
```

Install the Notepad++ application for all users in offline mode using write-copy container isolation with merge access to the user's data folders. The application will be able to read the native filesystem and registry, but any modifications go to the sandbox. Modifications to user data folders, such as the Desktop and Documents folders, will be written to the native filesystem.

```
> turbo installi --offline --all-users npp/notepadplusplus-x64:8.6.5 --isolate=write-copy+merge-user
```

Install the Notepad++ application for all users in offline mode using full container isolation. The application will be isolated from other applications on the system and any modifications will go to the sandbox.

```
> turbo installi --offline --all-users npp/notepadplusplus-x64:8.6.5 --isolate=write-copy+merge-user

```