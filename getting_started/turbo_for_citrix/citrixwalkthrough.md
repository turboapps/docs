## Turbo for Citrix

The Turbo subscription feature provides the ability to select applications from the Turbo.net hub and have them automatically update as new versions are released. This is ideal for RDS and XenApp servers as you can add this to your automated server builds for seamless integration with your existing infrastructure. To try the Turbo subscription feature for yourself, follow this step-by-step guide.

### Topics Covered

1. Creating an organization
2. Setting up a channel
3. Subscribing to the channel

### Creating an organization on Turbo.net

![](/components/docs/getting_started/turbo_for_citrix/Step1.png)

Navigate to **[https://www.turbo.net](https://www.turbo.net/)** and then Click on **Sign In**.

![](/components/docs/getting_started/turbo_for_citrix/Step2.png)

Enter your username and password and then click the **Sign In** button.  If you do not have a Turbo account, click the **Sign Up** link to create an account.

![](/components/docs/getting_started/turbo_for_citrix/Corg1.png)

Navigate to **[https://turbo.net/proto/enterprise/signup](https://turbo.net/proto/enterprise/signup)** 

Enter an **Organization name** and an **Organization email** and then click **Create Organization**

![](/components/docs/getting_started/turbo_for_citrix/Corg2.png)

Click **Manage Organization**

![](/components/docs/getting_started/turbo_for_citrix/Corg3.png)

Click **Edit** and choose an option to upload your organization's logo

![](/components/docs/getting_started/turbo_for_citrix/Corg4.png)

Enter a **Full Name** and an **Email address** for your organization. Optionally enter a **Website**, **Description**, **Twitter** account and **GitHub** account for your organization. 

Click **Update**

![](/components/docs/getting_started/turbo_for_citrix/Corg7.png)

Update account information such as **Payment Information** using the other options in the organization settings.

### Setting up a channel

Now that the organization is configured, we need to set up the applications that will be part of the subscription.

![](/components/docs/getting_started/turbo_for_citrix/Corg6.png)

From the **Hub**, select **Browsers** and add some browsers to the channel.

![](/components/docs/getting_started/turbo_for_citrix/Corg8.png)

When you identify an application that you would like to add to your subscription, hover your mouse over the application and click **Add**. You can have both self-updating applications and legacy versions of applications depending on your specific needs. In the above image, you can see **Chrome Latest** and **Chrome 43** have been selected. Select a **Latest** version, to receive automatic updates so that Chrome is always patched.  Select a specific version, such as **Chrome 43**, to keep the version unchanged. 

![](/components/docs/getting_started/turbo_for_citrix/Corg9.png)

Click **Save**

![](/components/docs/getting_started/turbo_for_citrix/Corg10.png)

Navigate to **Home** to see the full list of applications in the channel.
  
### Subscribing to the channel

Great, now that the organization is ready and we have a channel configured, let's subscribe to the channel on the XenApp server.

![](/components/docs/getting_started/turbo_for_citrix/Step5.png)

If you have previously installed the **Turbo Client**, uninstall it before proceeding.

Launch the Command Prompt

```	
# Install the Turbo Client for all users
C:\> turbo-plugin.exe --all-users

```

Download the latest **Turbo Client** from **[http://start.turbo.net/install](http://start.turbo.net/install)**. 

Install **turbo-plugin.exe** with **--all-users** to make the client available for all users on the machine.  This is critical in a shared user environment such as XenApp or RDS. 

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
