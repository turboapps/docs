## 21.3.2732.2 Migration Guide

Turbo Server **21.3.2732.2** has updated Web Applications to improve customization and consistency with other application types. The follow migration guide details the process required to migrate existing Web Applications when upgrading from Turbo Server **21.1.2640** to **21.3.2732.2** or later. 

If you do not have any Web Applications, do not wish to migrate your Web Applications, or are upgrading from an earlier version, no changes are required.

### Migrating Web Applications using a Virtual Browser

To migrate your existing Web Applications that are configured to use a virtual browser, you must first collect the Web Application information before upgrade, and then create new Web Applications using that information post upgrade. 

#### Before upgrade

Please perform the following steps before upgrading:

1. Open the Workspace administration applications page.
2. Click **Settings** on the desired Web Application.
3. Write down the **Display Name** and **URL**.
4. Write down the repository used by the **Browser**.
5. If you were using a custom icon, right click the icon in the Applications table, click **Save Image As..**, and save it for later.

Repeat this process for each of your Web Applications. Once complete, you may upgrade your Turbo Server.

#### After upgrade

Once your upgrade is complete, please update the repositories used by your browsers. This will allow the repositories to be selected when creating Web Applications.

1. Open the Hub administration page and click on the repository used by your Web Application's browser.
2. Add `browser` to the **Categories** field and click **Save**.

Repeat this process for each of your browser repositories.

Finally, please recreate your Web Applications:

1. Open the Workspace administration applications page.
2. Click on **Add** > **Web Application**.
3. Enter the **Display Name**, **URL**, and **Browser** used by your Web Application.
4. Click **Add**. You will be redirected to the settings page.
5. Upload the icon and click **Save**.

Repeat this process for each of your Web Applications.

### Migrating Web Applications using a Local System Browser

To migrate your existing Web Applications that are configured to use a local system browser, you must create a Link with equivalent settings to your Web Application. Links are availables from the **Links** tab on the dashboard.

#### Before upgrade

Please perform the following steps before upgrading:

1. Open the Workspace administration applications page.
2. Click on the **Links** tab in the right sidebar.
3. Click **Add Link**.
4. Enter the **Display Name**, **URL**, and **Icon** used by your Web Application.
5. Click **Add**.

Repeat this process for each of your Web Applications. Once complete, you may upgrade your Turbo Server.
