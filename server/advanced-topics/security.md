### Configure Turbo Server Security

This section explains how to manually configure Turbo Server's security settings on common Microsoft Windows platforms. These settings restrict external connections to the Turbo Server sites and services.

To secure the Turbo Server, enable Microsoft Windows Firewall with Advanced Security. The default settings of Microsoft Windows Firewall with Advanced Security block all external connections to the Administration and Portal Sites (assigned to port 80 by default). After Microsoft Windows Firewall with Advanced Security is enabled, add exceptions to the default settings to provide licensed users with access the Hub Site.

Complete the following steps to enable Microsoft Windows Firewall with Advanced Security for access to the Hub Site:

1. Open the **Control Panel** and select **System and Security**.

2. Open **Administrative Tools**, then select **Windows Firewall with Advanced Security**.

3. Select **Inbound Rules** and choose **New Rule**.

4. Select **Port**.

5. Select TCP and Specific local ports. Add the ports required by your server role as described in [Firewall and Security](https://hub.turbo.net/docs/server/setup-and-deployment/prerequisites#firewall-and-security).

6. Select **Allow the Connection**.

7. Select the domain, private, and public profiles.

8. Add a name and description.
