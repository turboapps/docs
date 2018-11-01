### Container Settings

The following discusses the many configuration features available in Turbo Studio. These features allow you to edit and customize the settings for an image or virtual application configuration.

##### Output Settings

![](/docs/building/working_with_turbo_studio/settings1.png)

- **Startup File** field is to set the path to the application which runs when starting your container. The **Multiple** button shows the **Startup File** manager dialog where additional settings can be specified.
- **Output File** field is the name of the file that is created when your container image configuration is built.
- **Project Type** dropdown allows you to set the type of output to generate. The following values are possible:
    - **Layer (.svm)** is a bare Turbo container image file that can be pushed to Turbo.net Hub, used in Turbo Server, imported into the Turbo.net Client Runtime environment, or used as a dependency in another project.
    - **Portable Application (.exe)** is a packaged executable file which contains the Turbo.net Client Runtime components and integrates with the Turbo.net Hub or an on-premise Turbo Server.
    - **Standalone/ISV Application (.exe)** is a standalone executable file with no dependence on the Turbo.net Client Runtime or Turbo.net Hub. This output type requires an Enterprise or ISV license for Turbo Studio.
- **Options** button shows the **Output Options** dialog. This is used to enable diagnostics for .exe outputs or configure **Portable Executable** settings.

##### Application Properties

![](/docs/building/working_with_turbo_studio/settings2.png)

- **Standard Metadata** fields include information such as product title, publisher, description, icon, web site URL, and version. By default these values are inherited by the startup file and will be displayed here. To override any of the values, uncheck the **Inherit** checkbox. Leave the value as **@INHERIT@** for any values that should continue to be inherited.
- **Custom Metadata** can be used by specialized external executable viewer applications, inventory scanners, and other asset and licensing management systems. For information on custom executable metadata, consult the Microsoft Windows Software Development Kit.

##### Startup Settings

![](/docs/building/working_with_turbo_studio/settings3.png)

- **Splash Image** can assign an image that is displayed while the container is loading. Startup images improve application branding and are useful when the application requires several seconds to initialize. The **Transparency key** enables the splash image to contain transparent regions which can improve the visual effectiveness of your splash. The splash image can be shown for a specific amount of time or until the first application window appears. The splash image can always be dismissed by clicking it with the mouse.
- **Shims** and **Scripts** settings allow you to run custom code to configure or clean up environments before and after a container is executed. See [Startup/Shutdown Scripts and Shims](/docs/building/working-with-turbo-studio#startupshutdown-scripts-and-shims) for more information.
- **Active Directory** fields enable you to limit where the container can run based on queries to the Active Directory Domain Controller.
- **Platform** allows you to specify the minimum required version of the Windows Operating System where the container will be allowed to run.

##### Process Configuration

![](/docs/building/working_with_turbo_studio/settings4.png)

- **Command line arguments** will be passed to the startup file when the container is executed by default. You can override and specify a fixed set of command line arguments to pass to the startup executable. For example, you can specify Java virtual machine behavior.
- **Application sandbox location** field specifies where the container's runtime sandbox will be stored during execution. This only applies to Standalone Executables and containers which are started using the Turbo Client Runtime will override this with its own behavior. This path can use the folder root tokens (ie. @DESKTOP@, @APPDATA@, etc) as well as the following metadata variables: **@TITLE@**, **@PUBLISHER@**, **@VERSION@**, **@WEBSITE@**, and **@BUILDTIME@**. The container build time is in a format similar to **2008.02.01T08.00**. With the exception of the **@BUILDTIME@** variable (which is set automatically), these variables are based on the values specified in the **Properties** tab of **Settings** panel.
- **Application stub cache location** field specifies where the container stubexe files are stored. By default this is blank and they are stored in the sandbox. Stubexe files are generated .exe files that map to executables which are launched inside the container. In some environment, stubexe files require exclusions for security or anti-virus software so it can be convenient to store them in the same place to reduce the exposure and complexity of exception rules.
- **Application cache location** - todo
- **Working directory** allows you to specify what the default working directory of startup files will be. Options include the directory that the startup file is in (default), the directory that the container was executed from (useful for tooling that might take relative paths to files as parameters), or a specific location.
- **Application type** controls the Windows executable subsystem that is employed when starting the container. The default inherits this value from the startup file itself. This can be overridden to be **Console** or **GUI** if required.
- **Target architecture** controls how wow64 redirection functions inside the virtual environment. If the configuration file was generated from a snapshot of an x86 machine then this should be set to **x86**. Otherwise this should be left as **x64**.
- **Environment variables** allows to define custom environment variables that will be seen by applications inside the container. Options exist to control how variables are merged or overridden inside the container.
- **Virtual services** allow Windows services to be defined inside the container. Windows services are specialized applications that run in the background. They are typically responsible for providing system services such as database services, network traffic handling, web request processing, and other server functionality. Many applications install and require specific services in order to function properly.
- **SVMs** allow runtime dependencies to other SVM files to be defined. These dependencies can be required (ie. in cases where large executables are split between multiple files) or optional (ie. in cases where patch layers may be present).
- **Spawn child processes within virtualized environment** sets the default behavior for how native executables (those that are not inside the container configuratino) are handled in the container. They can either be spawned inside the container and therefore be subject to the configuration of the container environment, or they can be spawned outside the container and therefore not have access to files or registry inside the container.
- **Spawn COM servers within virtualized environment** specifies whether COM servers in the container are isolated from the native environment.
- **Child process exception list** is a list of executable files that will be excluded from the default spawn behavior. This is useful if certain system processes need to be spawned outside the container while everything else is kept inside (ie. print spooler, etc).
- **Virtual environment is read-only** makes it so that all write attempts to files inside the container will return access denied errors. 
- **Delete sandbox on application shutdown** makes it so that the sandbox folder is removed once the container stops. This may have performance implications as there are many files that can be cached in the sandbox between runs.
- **Shutdown process tree on root process exit** make is so that all child processes of the startup file will automatically be killed when the startup file exists.
- **Compress payload** makes it so that the files stored in the container at build time will be compressed. This can greatly reduce the size of the container image or executable file. This may have performance implications as files must be decompressed at runtime.
- **Enable startup executable optimization** makes it so that if there is a single startup file, then it will be run directly rather than being spawned from the virtual machine boostrap executable. This will reduce the number of processes that are required to start the container.
- **Enable Turbo command line arguments** makes it so that the container runtime parameters can be used (ie. /XEnable, /XShellEx, etc). See [building standalone executables](/docs/building/working-with-turbo-studio#standalone-executables) for more information.
- **Enable window class isolation** enables isolation for window classes. Window classes are a fundamental set of attributes that are assigned to an application window in the Windows operating system. These are often used to detect the presence of applications that are already running. 
- **Enhanced DEP compatibility for legacy applications** hides DEP settings on modern operating systems which can allow older applications to run in a container. Be aware of your company security policies before enabling this setting.
- **Enhanced DRM compatibility** allows some DRM software (ie. Armadillo variants) to function inside the container.
- **Trace process starts in debug output** will display a message in the debug output stream whenever a process is started. The debug output stream can be viewed with [dbgview](https://docs.microsoft.com/en-us/sysinternals/downloads/debugview).
- **Force read-share files** makes it so that all files in the container are opened in a way that doesn't block other processes from opening for read.
- **Always launch child processes as current user** makes it so that any processes spawn inside the container will inherit the current user's account privileges rather than any custom privileges that the parent process might assign.
- **Emulate elevated security privileges** makes it so that the processes in the container think they are running as admin when they are not. Since processes are running in a sandbox, writes to secure locations won't require administrative access.
- **Isolate clipboard** makes it so that the Windows clipboard (ie. copy/paste) is isolated within a container. Isolated clipboards cannot copy/paste information between container or with the native system. Only within the same container will this work.

