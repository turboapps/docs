## Large Applications

### Issues with Large Applications

Large applications, particularly those over 1GB in size, pose special deployment and performance issues:

- Windows has a hard-coded limit of 4GB for EXE type files. Attempting to execute a virtual standalone EXE over 4GB will result in an error.
- The Windows loader performs preprocessing on EXE files prior to execution. A very large EXE file may introduce undesired startup latency. Minimizing the executable file size also minimizes application startup time.

### Factoring Large Applications

It is recommended to factor large applications into two or more pieces consisting of a single small EXE file and one more larger SVM files. Turbo can then combine these layers at runtime. This can be done using the **Factor Configuration** tool in Turbo Studio or manually using the steps below.

To split your existing application image:

- Save a copy of your current application as `data.xappl`
- Open `data.xappl` in Turbo Studio

  - Change the **Project Type** to **Layer (SVM)**
    ![Turbo Studio Large Application Project Type](https://hub.turbo.net/images/docs/large-1.png)

  - Change the **Output File** to **data.svm**
    ![Turbo Studio Large Application Output File](https://hub.turbo.net/images/docs/large-2.png)

  - Save the file and build

- Open your existing XAPPL in Turbo Studio

  - Add **@APPDIR@\data.svm** to the **SVM Search Pattern** and **data.svm** to the list of required layers
    ![Turbo Studio Large Application Patch](https://hub.turbo.net/images/docs/large-3.png)

  - Remove everything from **Filesystem** and **Registry** nodes. If you have multiple layers, you can remove all layers other than the **default** layer. If your application is configured to inherit metadata and icons from the startup file, then you will need to keep the startup file .exe in the **Filesystem** node, including its full directory hierarchy.

  ![Turbo Studio Large Application Filesystem](https://hub.turbo.net/images/docs/large-4.png)

  ![Turbo Studio Large Application Registry](https://hub.turbo.net/images/docs/large-5.png)

  - Save the file and build

- To deploy, place your EXE and SVM in the same directory. This can be repeated for multiple SVMs by adding additional file names or a wildcard pattern into the **SVM Search Pattern**

Alternately, external SVMs can be imported explicitly via the command line using the `/XLayerPath=` command line option. This parameter takes a path to additional SVMs to load.

An example of a specified SVM path using full path:

```
# look for 'patches.svm' in the same directory as 'virtual-app.exe'
> virtual-app.exe /XLayerPath=@APPDIR@\patches.svm

# look for 'patches.svm' in a specific location on the local machine
> virtual-app.exe /XLayerPath=c:\path\to\patches.svm
```
