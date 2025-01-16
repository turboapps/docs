## Using Turbo Citrix Scripts

Turbo containers can also be deployed to XenApp using powershell helper scripts to automate the deployment.

![Citrix scripts](https://hub.turbo.net/images/docs/scripts1.png)

### XenApp 7

For XenApp 7, use the **turbocitrix/xa7-subscribe** container image to add turbo applications to your XenApp server and publish them automatically.

```
# install the turbo client for all users on the machine (this is only necessary once)
> Turbo-Plugin.exe --all-users --silent

# login to your account or org using the defined API key
> turbo login --api-key=WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc 
Logged in as turboorg

# run the container image that contains the powershell helper script
> turbo try turbocitrix/xa7-subscribe -- turboorg -deliveryGroup Default -apikey WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc -waitonexit
Using VM 11.8.817.5 from local
Using image clean:25 from local
Using image vcredist:2008 from local
Using image xa7-subscribe:2016.02.26 from local
Running new container xa7-subscribe#3d2a1d9f with visibility private
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

After those easy commands, we have applications deployed to our XenApp farm!

![Citrix XenApp farm](https://hub.turbo.net/images/docs/scripts2.png)

Go to [Subscribe for XenApp7](https://app.turbo.net/hub/turbocitrix/xa7-subscribe) for more information and full documentation of the script parameters.

### XenApp 6.5

For XenApp 6.5, use the **turbocitrix/xa6-subscribe** container image to add turbo applications to your XenApp server and publish them automatically.

```
> Turbo-Plugin.exe --all-users --silent

> turbo login --api-key=WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc 
Logged in as turboorg

> turbo try turbocitrix/xa6-subscribe -- turboorg -users domain\users -apikey WvUjfpjqtx0as1CczTX5mPZ5pdXgc1w2t91HRzVc3Qc -waitonexit
Using VM 11.8.817.5 from local
Using image clean:25 from local
Using image vcredist:2008 from local
Using image xa6-subscribe:2016.02.26 from local
Running new container xa6-subscribe#4fa191d9f with visibility private
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

You can find more information and full documentation at [Subscribe for XenApp6.5](https://app.turbo.net/hub/turbocitrix/xa7-subscribe).
