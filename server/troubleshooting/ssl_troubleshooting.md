## SSL Troubleshooting

Symptoms:
Unable to login from the portal after installing SSL certificates. Unable to launch applications remotely on application server. Please check the portal logs. The logs contain the following error(s):

```
[ERROR] default - Failed to load JWT public key: Error: self signed certificate in certificate chain
[ERROR] default - Failed to authenticate: self signed certificate in certificate chain
```

Solution:
If the certificate specified is self signed, the Hub and Portal servers must have the self signed certificate installed into the certificate store. If the certificate requires an intermediate certificate, the certificate must be installed into the Intermediate Certificatation Authorities store on both the Hub and Portal servers.
