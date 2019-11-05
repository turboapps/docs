## Common Errors

### Turbo Virtual Machine 0x0003

![](/docs/studio/working_with_turbo_studio/errors1.png)

This error indicates that there is a problem accessing the the container executable from itself. This can occur from security software that limits what applications have access to or if the application was started with a low privilege user which doesn't have access to the folder where the executable resides.

Try adding exclusions to your security software for the application. Also, try enabling the **Launch child processes as user** setting.

### Unable to load a required virtual machine component

![](/docs/studio/working_with_turbo_studio/errors2.png)

This error indicates that the container cannot access files in the environment found in the application directory. The most common reason for this is that the application path is not being resolved correctly. This can happen if there are path resolution rules defined for the container. For example, if there is a **Snapshot Directory** mapping from **@PROGRAMFILES@** to **c:\program files (x86)**, then running the container from **c:\program files** will fail. See [xappl reference](/docs/reference/xappl-configuration) for more information.

### Large Applications

If you attempt to execute an EXE file over 4GB in size you will get the error message:

![](/docs/studio/working_with_turbo_studio/4gbexe1.png)

See the article on handling [Large Applications](/docs/studio/advanced-topics/large-applications) for information on containerizing and optimizing large applications.

