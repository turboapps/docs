# Publishing with Turbo Studio

Turbo Studio can package a standalone application as an [EXE](/guides/deploy-using-exe.html) or in an [MSI](/guides/deploy-using-msi.html) wrapper.

Turbo Studio can also publish SVM images to both **Turbo Server** as well as the **Local Turbo Repository**.

## Publish to Turbo Server Example:

1. Publish your Turbo Image to a Turbo Hub Server by clicking on the **Publish to Turbo Server** button:
![Turbo Studio Publish to Server](/images/studio-publish1.png)

2. Enter the credentials for an Adminstrative user on the Turbo Hub Server as well as the URL for the server, then click **Sign In**:
![Turbo Studio Publish to Server](/images/studio-publish2.png)

3. Fill in the **Namespace, Name and Release** fields, then click **Next**:
![Turbo Studio Publish to Server](/images/studio-publish3.png)

4. Click the **Finish** button:
![Turbo Studio Publish to Server](/images/studio-publish4.png)

5. You will now see your image in the repository on your Turbo Hub page:
![Turbo Studio Publish to Server](/images/studio-publish5.png)

## Publish to Local Turbo Repository Example:

1. Publish your Turbo Image to the local Turbo repository  by clicking on the **Publish to local Repository** button:
![Turbo Studio Publish to Server](/images/studio-publish6.png)

2. Fill in the **Namespace, Name and Release** fields, then click **Next**:
![Turbo Studio Publish to Server](/images/studio-publish7.png)

3. Click the **Finish** button:
![Turbo Studio Publish to Server](/images/studio-publish8.png)

4. Verify the image is imported into the local repository by running the `turbo images` command:
![Turbo Studio Publish to Server](/images/studio-publish9.png)