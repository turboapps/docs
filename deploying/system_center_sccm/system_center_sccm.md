## System Center (SCCM)

Microsoft System Center Configuration Manager (SCCM) is a wonderful tool to deploy application containers to desktops in your enterprise. Below shows several methods that SCCM can be used to deploy containers.

### Distribute Standalone Executables

The easiest solution is to deploy a shortcut to a standalone executable container. Standalone executable containers are single .exe files that have the full virtual machine built in. With them you can get the full application experience without installing anything to the machine. You can either point your application shortcut to a copy of the .exe in a local machine location or at shared network location. See [building standalone executables](/docs/studio/working-with-turbo-studio/standalone-executables) for more information.

### Distribute MSIs

Turbo MSIs can be used as an alternative to deploy standalone executables. The benefits are that you have full control over what shortcuts get created as well as the ability to add file associations to your application. See [building MSIs](/docs/studio/working-with-turbo-studio/msi) for more information.

### Use application images (.svm files)

This option is the most versatile but also requires some configuration effort. Instead of embedding all the application files in the SCCM package, we may use the .svm files hosted either on Hub or a file share. Below, you can find a description of the file share deployment. Firstly, we need to configure the file share server.

#### 1. Configure the file share server

There are two configuration steps for the file share server:

- Install the Turbo.net client: `turbo-client-19.9.2054.0.exe --silent --all-users`
- Make the path C:\ProgramData\Turbo\Containers\repo a shared folder, giving read-access to all the user accounts which will run Turbo applications
- Download the base images:
  - `turbo pull --all-users xvm`
  - `turbo pull --all-users clean`

#### 2. Prepare Turbo.net Client Runtime installation package in SCCM

From <https://turbo.net/download> download the .msi Turbo.net Client installer and create an Application in SCCM with the .msi deployment type:

![](/docs/deploying/system-center-sccm/sccm-2-turbo-app-deployment-type.png)

Next, create a custom Application that configures the newly installed Turbo.net Client. For this purpose, we need a simple install.bat file with the following content (replace `{file-share}` with the shared folder path from the previous point):

```
"C:\Program Files (x86)\Turbo\Cmd\turbo.exe" config --all-users --image-path {file-share}
echo ok > "C:\Program Files (x86)\Turbo\configured.txt"
```

** *Note about the file share address* **

*When you have multiple sites configured in SCCM, you may want to use a separate file share for each one of them. For instance, the right place for a Turbo file share would be the SCCM Distribution Point. However, that complicates the above script, as we need to discover the nearest share dynamically. One option to do so is by [querying the SCCM WMI objects](https://stackoverflow.com/questions/42250238/find-the-sccm-distribution-point-where-the-software-packages-reside).*

Next, we create a custom Application:

![](/docs/deploying/system-center-sccm/sccm-2-turbo-app-deployment-type-script-0.png)

Create the 'Script Installer' deployment type:

![](/docs/deploying/system-center-sccm/sccm-2-turbo-app-deployment-type-script-1.png)

Specify the path to the batch file:

![](/docs/deploying/system-center-sccm/sccm-2-turbo-app-deployment-type-script-2.png)

And the detection rules:

![](/docs/deploying/system-center-sccm/sccm-2-turbo-app-deployment-type-script-3.png)

Finally, on the User Experience tab, make sure the script installs for the system and run the deployment.

#### 3. Prepare and publish the application image

It's time to create the application .svm file. We can do that by using either Studio or Turbo Script. Both methods are covered in other sections of the documentation, so let's focus only on the publishing part. With the .svm file ready, we need to import it by running `turbo import svm --name {app-name} {path-to-svm-file}` on the file share server(s).

#### 4. Prepare the SCCM application package

We are now ready to prepare the SCCM package for our application. We start again by creating a .bat file with a simple command:

```
"C:\Program Files (x86)\Turbo\Cmd\turbo.exe" installi --skip-installed --offline {app-name}
```

And use it in a 'Script Installer' deployment:

![](/docs/deploying/system-center-sccm/sccm-3-custom-app-deployment-type-script-0.png)

The turbo installi command adds keys to the Uninstaller key, so you may use the app key in a Detection Rule configuration:

![](/docs/deploying/system-center-sccm/sccm-3-custom-app-deployment-type-script-1.png)

In the User Experience tab, select 'Install for user' and finish the Application wizard. We are now ready to deploy the package to Distribution Points and client devices.

** *Note* **

*When you use a hub instead of the file share, it is possible to install all the organization images published to a hub with the **subscribe** command, for example:*

```
# Add shortcuts to all the dashboard apps from the 'turbo-user' user account
> turbo subscribe turbo-user

# Add shortcuts to all the dashboard apps from the 'turbo-org' org
> turbo subscribe turbo-org
```

*See [installi](/docs/reference#installi), [install](/docs/reference/command-line/installi), and [subscribe](/docs/reference/command-line/subscribe) for more information.*
