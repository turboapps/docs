Turbo supports deploying containers as standalone executables, MSIs and Spoon Virtual Machines (SVMs). Read this section to find out more about which deployment option and tools best fit your needs.

## To the Hub

The Hub is an online registry of Turbo images and provides a central location to archive and distribute applications. Once an application is packaged into a Turbo image using Turbo Studio or the command-line interface, the image can be uploaded to the Hub and made available publicly or privately to a specified set of users.

Images are pushed to the Hub using the command-line interface. The most common scenario is to create a container via the command line, commit the container to your local registry and then push the image to the Hub. However, it's also possible to start with an SVM output from Turbo Studio and push that to the Hub. Read below for details on each scenario.

#### Containers

Before pushing a container to the Hub, it needs to be committed to the local registry and converted into an image. Here is an example of the process of creating a container and publishing it on the Turbo Hub.

```
# Create a container with Java, Node and Git support
> turbo run oracle/jdk,node/node,git/git

# Shut down the container by typing exit into the new command window
> exit

# Get the container id for the last container
> turbo containers -l

# Commit the container to your local registry
> turbo commit 922e myimage

# Verify that the image is now in your local registry
> turbo images

# Push the image to the Hub
> turbo push myimage
```

Once the push is complete you can verify that the image is available on the Hub by going to the [Hub](/hub) in your browser.

#### SVMs

Here is an example of how you would deploy an SVM to the Hub.

```
# Import the SVM into your local registry with the name "myimage"
> turbo import -n=myimage svm \path\to\app.svm

# Verify that the image is now in your local registry
> turbo images

# Push the image to the Hub
> turbo push myimage
```
Once the push is complete you can verify that the image is available on the Hub by going to the [Hub](/hub) in your browser.

#### Sync Device

The **Sync Device** feature on the Turbo.net Hub provides the ability to select applications from the Hub and have shortcuts created in your start menu and also have the applications automatically update as new versions are released.

Navigate to [Turbo.net](https://turbo.net) and **Sign In**. 

![](/components/docs/deploying/to_the_hub/SYNCDEVICE1.png)

Navigate to the **Hub** tab and click on **Web**.

![](/components/docs/deploying/to_the_hub/ADDAPP1.png)

Hover over Chrome and click **ADD**.

![](/components/docs/deploying/to_the_hub/ADDAPP2.png)

Enter a **Display Name**. In this example the default was accepted.

![](/components/docs/deploying/to_the_hub/ADDAPP3.png)

Navigate to the **Isolation** tab. Select **Merge** from the drop down to allow access to the local files on your system.

![](/components/docs/deploying/to_the_hub/ADDAPP4.png)

Navigate to the **Network** tab. Optionally, enter an **IP route** to explicitly allow or deny access to a site. In this example I have entered **ip://gmail.com**.

![](/components/docs/deploying/to_the_hub/ADDAPP5.png)

In this example I added another route: **ip://*.thepiratebay.se** and set both to **Deny**. This ensures users of this browser will not be able to access the Gmail homepage, they also won't be able to access Pirate Bay or any of it's subdomains.

![](/components/docs/deploying/to_the_hub/ADDAPP6.png)

Navigate to the **Layers** tab. Optionally, add any available image to layer with your browser as a dependency. In this example, I have not selected to add a layer.

![](/components/docs/deploying/to_the_hub/ADDAPP7.png)

Navigate to the **Updates** tab. You can see a history of the versions released for this application. At any time you select a specific older revision and roll back to it on demand. When complete, click **Save**.

![](/components/docs/deploying/to_the_hub/ADDAPP8.png)


Note: Applications can also be expanded to select a specific version. This is will add the version to the subscription but will not automatically update it. This is useful when a legacy version is required.

![](/components/docs/deploying/to_the_hub/ADDAPP12.png)

Repeat this process for any application you would like to subscribe to from the Turbo.net Hub. When ready, click **Sync Device**.

![](/components/docs/deploying/to_the_hub/ADDAPP9.png)

The **Sync Device** button will update to show the syncing has begun.

![](/components/docs/deploying/to_the_hub/ADDAPP10.png)

When complete we receive a prompt to confirm **Applications synced to Device** with an instruction that shortcuts have also been created in the start menu.

![](/components/docs/deploying/to_the_hub/ADDAPP11.png)

On your machine you will notice that a scheduled task has been created. The scheduled task will perform the application updates. Modify the schedule to ensure the applications are only updated when you want them to. Optionally, **Run** the task to cache the applications. If you do not run the task, launching an application will present a buffer dialog on first launch.

![](/components/docs/deploying/to_the_hub/ADDAPP13.png)

