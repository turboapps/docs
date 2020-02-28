## SSL Troubleshooting

### Portal has limited functionality after installing certificates

Unable to login to the portal after installing SSL certificates. Unable to launch applications remotely on application server. Please check the portal logs. The logs contain the following error(s):

```
[ERROR] default - Failed to load JWT public key: Error: self signed certificate in certificate chain
[ERROR] default - Failed to authenticate: self signed certificate in certificate chain
```

Solution:
If the certificate specified is self signed, the Hub and Portal servers must have the self signed certificate installed into the certificate store. If the certificate requires an intermediate certificate, the certificate must be installed into the Intermediate Certificatation Authorities store on both the Hub and Portal servers.


Unable to login to the portal with the following log:

```
[ERROR] default - Failed to authenticate: {User} unable to verify the first certificate
```

Solution:
The SSL chain file is missing or invalid. Use openssl to test the certificate chain:

```
> openssl s_client -showcerts {hubserverhost}:443

CONNECTED(00000005)
depth=0 CN = hubserverhost
verify error:num=20:unable to get local issuer certificate
verify return:1
depth=0 CN = hubserverhost
verify error:num=21:unable to verify the first certificate
verify return:1
```

The error can be further validated using [ssllabs.com](https://www.ssllabs.com/ssltest/analyze.html) by entering the host of the Turbo Server to analyze. Expand the certification paths section to see which part of the certificate chain is missing. If parts of the certificate chain is missing, contact the administrator to obtain the correct certificate chain.

### Portal does not load web pages after installing SSL certificates

Check the proxy-apache.log file in the Turbo Server\Logs folder.

```
[ssl:emerg] [pid 2828:tid 1084] AH02561: Failed to configure certificate s27-2016-2.start.turbo.net:443:0, check C:/c/cert.crt
[ssl:emerg] [pid 2828:tid 1084] SSL Library Error: error:0906D06C:PEM routines:PEM_read_bio:no start line (Expecting: CERTIFICATE) -- Bad file contents or format - or even just a forgotten SSLCertificateKeyFile?
[ssl:emerg] [pid 2828:tid 1084] SSL Library Error: error:140AD009:SSL routines:SSL_CTX_use_certificate_file:PEM lib
AH00016: Configuration Failed
```

You may have a DER encoded file. Use openssl to convert it to the PEM.

openssl x509 -inform der -in certificate.cer -out certificate.crt

### How do I install certificates that are in .pem format?

Change the PEM file extension to CRT. The server is able to read certificates in the PEM format, but asks for the file in CRT extension.

Place the .crt and .key file on the administration site (hub role), and select the certificates under the Domain > Servers settings.
