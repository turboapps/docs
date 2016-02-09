## Turbo for Citrix

The Turbo subscription feature provides the ability to select applications from the Turbo.net hub and have them automatically update as new versions are released. This is ideal for RDS and XenApp servers as you can add this to your automated server builds for seamless integration with your existing infrastructure.   To try the Turbo subscription feature for yourself, follow this step-by-step guide.

### Topics Covered

1. Creating an Organization on Turbo.net
2. Setting up a list of applications
3. Subscribing on the client

### Creating an Organization on Turbo.net

![](/components/docs/getting_started/turbo_for_citrix/Step1.png)

Navigate to **[https://www.turbo.net](https://www.turbo.net/)** Click on **Sign In**

![](/components/docs/getting_started/turbo_for_citrix/Step2.png)

Enter your username and password and then click the **Sign In** button.  If you do not have a Turbo account, click the **Sign Up** link to create an account.

![](/components/docs/getting_started/turbo_for_citrix/Corg1.png)

Navigate to **[https://turbo.net/proto/enterprise/signup](https://turbo.net/proto/enterprise/signup)** 

Enter an **Organization name** and **Organization email** and then click **Create Organization**

![](/components/docs/getting_started/turbo_for_citrix/Corg2.png)

Click **Manage Organization**

![](/components/docs/getting_started/turbo_for_citrix/Corg3.png)

Click **Edit** and choose an option to upload your organization's logo

![](/components/docs/getting_started/turbo_for_citrix/Corg4.png)

Enter a **Full Name** and **Email address** for your organization. Optionally enter a **Description**. **Social Accounts** can be entered for **Twitter** and **GitHub**, only enter the organization's account username, a URL is not required. Optionally, you can also enter a URL for your organizations **Website**.

Click **Update**

![](/components/docs/getting_started/turbo_for_citrix/Corg7.png)

Update account information such as **Payment Information** by browsing the options see in the above image.


### Setting up a list of applications

![](/components/docs/getting_started/turbo_for_citrix/Corg6.png)

Navigate to **Hub**. From here you can browse thorough the applications on the Turbo.net hub. Click on **Browsers**Enter your username and password and then click the **Sign In** button.  If you do not have a Turbo account, click the **Sign Up** link to create an account.

![](/components/docs/getting_started/turbo_for_citrix/Corg8.png)

When you identify an application that you would like to add to your subscription, simply hover your mouse over the application and click on the star icon beside its name to mark it as a **favorite**.  You can have both self-updating applications and legacy versions of applications depending on your specific needs.  In the above screenshot, you can see **Chrome Latest** and **Chrome 43** have been selected as favorites.  Select a **Latest** version, such as **Chrome Latest**, to ensure that your version is always the latest available.  Select a specific version, such as **Chrome 43**, to ensure that your version is always the same. 

![](/components/docs/getting_started/turbo_for_citrix/Corg9.png)

Click **Save**

![](/components/docs/getting_started/turbo_for_citrix/Corg10.png)

Navigate to **Home**. All application added appear in this list.

  
### Subscribing on the client

![](/components/docs/getting_started/turbo_for_citrix/Step5.png)

If you have previously installed the **Turbo Client**, uninstall it before proceeding.

Launch the Command Prompt

```	
# Install the Turbo Client for all users
C:\> turbo-plugin.exe --all-users

```

Download the latest **Turbo Client** from **[http://start.turbo.net/install](http://start.turbo.net/install)**. Install **turbo-plugin.exe** with **--all-users** to make the client available for all users on the machine.  This is critical in a shared user environment such as XenApp or RDS. 

```	
# Run Turbo subscribe
C:\> turbo subscribe --all-users <org\user>

```

Enter **turbo subscribe --all-users <org>** in the command prompt to subscribe to your organization's applications.  

Or

Enter **turbo subscribe --all-users <user>** in the command prompt to subscribe to your applications.

The --all-users flag makes your applications available for all users on the machine.

![](/components/docs/getting_started/turbo_for_citrix/Step8.png)

Shortcuts for all subscribed applications will be created in your Start menu. 

![](/components/docs/getting_started/turbo_for_citrix/Step9.png)

In **Citrix Studio**, click **Create Application** to go through the application wizard.

![](/components/docs/getting_started/turbo_for_citrix/Step10.png)

You will find your subscribed applications in the application discovery results.  Simply select those that you desire and complete the wizard. 

![](/components/docs/getting_started/turbo_for_citrix/Step11.png)

Once added, the applications will be available to the assigned users in Citrix StoreFront. 

![](/components/docs/getting_started/turbo_for_citrix/Step12.png)

Once added, the applications will be available to the assigned users in Citrix StoreFront. 

By clicking on the subscribed application in Citrix StoreFront, it will launch just as if it had been installed locally
