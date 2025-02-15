# Using Turbo Citrix Scripts

Automate application deployment to XenApp using PowerShell helper scripts.

::: tip Prerequisites
- Turbo Client installed for all users
- Administrative access to XenApp server
- Turbo account or organization with API key
:::

![Citrix scripts](/images/scripts1.png)

## XenApp 7 Deployment

For XenApp 7, use the **turbocitrix/xa7-subscribe** image to add and publish Turbo applications automatically to your XenApp server.

```
# Install the Turbo client for all users on the machine (this is only necessary once)
> Turbo-Plugin.exe --all-users --silent

# Login to your account or org using the defined API key
> turbo login --api-key=WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc 
Logged in as turboorg

# Run the PowerShell helper script
> turbo try turbocitrix/xa7-subscribe -- turboorg -deliveryGroup Default -apikey WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc -waitonexit
Using VM 11.8.817.5 from local
Using image clean:25 from local
Using image vcredist:2008 from local
Using image xa7-subscribe:2016.02.26 from local
Running new session xa7-subscribe#3d2a1d9f with visibility private
Checking if Turbo client is installed...
Subscribe to turboorg...
Aptana Studio subscribed
Mozilla Firefox subscribed
7-Zip subscribed
Atom subscribed
Audacity subscribed
Dia subscribed
LibreOffice Writer subscribed
LibreOffice Base subscribed
Beyond Compare subscribed
NPP Notepad++ subscribed
Google Chrome subscribed
LibreOffice Calc subscribed

Aptana Studio published
Mozilla Firefox published
Atom published
Dia published
LibreOffice Writer published
LibreOffice Base published
Beyond Compare published
NPP Notepad++ published
Google Chrome published
LibreOffice Calc published
Deployment successful
```

After running these commands, the applications are deployed to your XenApp farm:

![Citrix XenApp farm](/images/scripts2.png)

For more information and full documentation of the script parameters, visit [Subscribe for XenApp7](https://app.turbo.net/hub/turbocitrix/xa7-subscribe).

## XenApp 6.5 Deployment

For XenApp 6.5, use the **turbocitrix/xa6-subscribe** image to add and publish Turbo applications automatically to your XenApp server.

```
> Turbo-Plugin.exe --all-users --silent

> turbo login --api-key=WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc 
Logged in as turboorg

> turbo try turbocitrix/xa6-subscribe -- turboorg -users domain\users -apikey WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc -waitonexit
Using VM 11.8.817.5 from local
Using image clean:25 from local
Using image vcredist:2008 from local
Using image xa6-subscribe:2016.02.26 from local
Running new session xa6-subscribe#4fa191d9f with visibility private
Checking if Turbo client is installed...
Subscribe to turboorg...
Aptana Studio subscribed
Mozilla Firefox subscribed
7-Zip subscribed
Atom subscribed
Audacity subscribed
Dia subscribed
LibreOffice Writer subscribed
LibreOffice Base subscribed
Beyond Compare subscribed
NPP Notepad++ subscribed
Google Chrome subscribed
LibreOffice Calc subscribed

Aptana Studio published
Mozilla Firefox published
Atom published
Dia published
LibreOffice Writer published
LibreOffice Base published
Beyond Compare published
NPP Notepad++ published
Google Chrome published
LibreOffice Calc published
Deployment successful
```

For more information and full documentation, visit [Subscribe for XenApp6.5](https://app.turbo.net/hub/turbocitrix/xa7-subscribe).
