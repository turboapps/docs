## Getting Started - Turbo for Citrix

The Turbo subscription feature provides the ability to select applications from the Turbo.net hub and have them automatically update as new versions are released. This is ideal for RDS and XenApp servers as you can add this to your automated server builds for seamless integration with your existing infrastructure.   To try the Turbo subscription feature for yourself, follow this step-by-step guide.


![](/components/docs/getting_started/turbo_for_citrix/Step1.png)

Navigate to **[https://www.turbo.net](https://www.turbo.net/)** Click on Sign In

![](/components/docs/getting_started/turbo_for_citrix/Step2.png)

Enter your username and password and then click the Sign In button.  If you do not have a Turbo account, click the Sign Up link to create an account.

![](/components/docs/getting_started/turbo_for_citrix/Step3.png)

After logging in, click on any of the available categories under All Applications to browse the applications on the Turbo.net hub. 

![](/components/docs/getting_started/turbo_for_citrix/Step4.png)

When you identify an application that you would like to add to your subscription, simply hover your mouse over the application and click on the star icon beside its name to mark it as a favorite.  You can have both self-updating applications and legacy versions of applications depending on your specific needs.  In the above screenshot, you can see Chrome Latest and Chrome 43 have been selected as favorites.  Select a Latest version, such as Chrome Latest, to ensure that your version is always the latest available.  Select a specific version, such as Chrome 43, to ensure that your version is always the same.   

![](/components/docs/getting_started/turbo_for_citrix/Step5.png)

If you have previously installed the Turbo Client, uninstall it before proceeding.

Launch the Command Prompt

![](/components/docs/getting_started/turbo_for_citrix/Step6.png)

Download the latest Turbo Client from http://start.turbo.net/install.  Install turboplugin.exe with --all-users to make the client available for all users on the machine.  This is critical in a shared user environment such as XenApp or RDS. 

![](/components/docs/getting_started/turbo_for_citrix/Step7.png)

Enter turbo subscribe --all-users <username> in the command prompt to subscribe to your applications.  The --all-users flag makes your applications available for all users on the machine.

![](/components/docs/getting_started/turbo_for_citrix/Step8.png)

Shortcuts for all subscribed applications will be created in your Start menu. 

![](/components/docs/getting_started/turbo_for_citrix/Step9.png)

In Citrix Studio, click Create Application to go through the application wizard.

![](/components/docs/getting_started/turbo_for_citrix/Step10.png)

You will find your subscribed applications in the application discovery results.  Simply select those that you desire and complete the wizard. 

![](/components/docs/getting_started/turbo_for_citrix/Step11.png)

Once added, the applications will be available to the assigned users in Citrix StoreFront. 

![](/components/docs/getting_started/turbo_for_citrix/Step12.png)

Once added, the applications will be available to the assigned users in Citrix StoreFront. 

By clicking on the subscribed application in Citrix StoreFront, it will launch just as if it had been installed locally
