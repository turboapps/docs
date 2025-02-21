# SSL Troubleshooting

## Portal has limited functionality after installing certificates

Unable to login to the portal after installing SSL certificates. Unable to launch applications remotely on application server. Please check the portal logs. The logs contain the following error(s):

```
[ERROR] default - Failed to load JWT public key: Error: self signed certificate in certificate chain
[ERROR] default - Failed to authenticate: self signed certificate in certificate chain
```

Solution:
If the specified certificate is self-signed, the Hub and Portal must have the root certificate installed into the Trusted Root Certification Authorities store. 

If the certificate requires an intermediate certificate, the certificate must be installed into the Intermediate Certificatation Authorities store on both the Hub and Portal servers.

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

IMPORTANT: The chain file should be in crt format. If the cert extension is .p7b you must convert that to crt using the following opensll command:
```
openssl pkcs7 -print_certs -in old.p7b -out new.crt
```

## Portal does not load web pages after installing SSL certificates

Check the proxy-apache.log file in the C:\ProgramData\Turbo\Logs folder.

```
[ssl:emerg] [pid 2828:tid 1084] AH02561: Failed to configure certificate s27-2016-2.start.turbo.net:443:0, check C:/c/cert.crt
[ssl:emerg] [pid 2828:tid 1084] SSL Library Error: error:0906D06C:PEM routines:PEM_read_bio:no start line (Expecting: CERTIFICATE) -- Bad file contents or format - or even just a forgotten SSLCertificateKeyFile?
[ssl:emerg] [pid 2828:tid 1084] SSL Library Error: error:140AD009:SSL routines:SSL_CTX_use_certificate_file:PEM lib
AH00016: Configuration Failed
```

You may have a DER encoded file. Use openssl to convert it to PEM.

```
openssl x509 -inform der -in certificate.cer -out certificate.crt
```

Check the proxy-apache.log file in the C:\ProgramData\Turbo\Logs folder.

```
[ssl:emerg] [pid 1976:tid 1108] AH02577: Init: SSLPassPhraseDialog builtin is not supported on Win32 (key file C:/ssl-certs/cert.key)
[ssl:emerg] [pid 1976:tid 1108] AH02312: Fatal error initialising mod_ssl, exiting.
[ssl:emerg] [pid 1976:tid 1108] AH02564: Failed to configure encrypted (?) private key my.turboserver.com:443:0, check C:/ssl-certs/cert.key
[ssl:emerg] [pid 1976:tid 1108] SSL Library Error: error:0D0680A8:asn1 encoding routines:ASN1_CHECK_TLEN:wrong tag
```

You may have an encrypted KEY file, which is not currently supported by Turbo Server. 

Remove the encryption from the KEY file to resolve this error.

```
> openssl rsa -in encrypted-key.key  -out key.key
```

## Admin portal does not load after installing SSL certificates

Attempting to access the Admin portal shows the following error message:

```
The remote certificate is invalid according to the validation procedure.
```

This error occurs when validation of the SSL certificates fail.

Solution:
Check that the certificates match the configured __Internal Web Service Root__ URL and that they are not expired.

Confirm that your certificates are trusted by the Windows operating system and perform the troubleshooting steps above.

Temporarily disable HTTPS to access the admin site and make configuration changes:

```
# Change directory to Turbo Server install folder
> cd "C:\Program Files (x86)\Turbo Server"

# Get name and web-root of the hub server
> Server.exe admin --server

# Switch from HTTPS to HTTP to regain access to the admin portal
> Server.exe admin --server <hub-name> http://<hub-web-root>
```

## Images fail to push and containers fail to upload

Check the corresponding log in %LOCALAPPDATA%\turbo\logs\. If the logs indicate an SSL failure during sync:

```
02/16/2021 11:27:45.6419 - Debug    - 0x1118: {"log":"*** Sync encountered an error: Received fatal alert: handshake_failure","msSinceStart":1795}
02/16/2021 11:27:45.9703 - Debug    - 0x1118: {"log":"(javax.net.ssl.SSLHandshakeException)\n\njavax.net.ssl.SSLHandshakeException: Received fatal alert: handshake_failure
...
02/16/2021 11:27:45.9703 - Debug    - 0x1118: exit -1
```

Trouble shoot your SSL certificate using [ssllabs.com](https://www.ssllabs.com/ssltest/analyze.html).

## Server does not start after changing certificate or after installation / upgrade 

Check the Proxy-apache.log file in C:\ProgramData\Turbo\Logs folder. The following logs indicate a failure to load the certificate file due to DER file format:
```
[Mon Apr 26 19:48:03.852387 2021] [ssl:info] [pid 9760:tid 1340] AH01887: Init: Initializing (virtual) servers for SSL
[Mon Apr 26 19:48:03.853388 2021] [ssl:info] [pid 9760:tid 1340] AH01914: Configuring server {server}:443 for SSL protocol
[Mon Apr 26 19:48:03.853388 2021] [ssl:debug] [pid 9760:tid 1340] ssl_engine_init.c(1758): AH10083: Init: ({server}:443) mod_md support is unavailable.
[Mon Apr 26 19:48:03.854385 2021] [ssl:emerg] [pid 9760:tid 1340] AH01895: Unable to configure verify locations for client authentication
[Mon Apr 26 19:48:03.854385 2021] [ssl:emerg] [pid 9760:tid 1340] AH02312: Fatal error initialising mod_ssl, exiting.
AH00016: Configuration Failed
```

Open the certificate files using notepad and look for the certificate file which is not in plain text (PEM) format. Convert the certificate file to PEM format using the following openssl command:
```
openssl x509 -inform der -in certificate.crt -out certificate.pem.crt
```

## Self-signed certificate disappears from Windows certificate store

Self-signed certificates added to the Third-Party Root Certification Authorities are periodically deleted when Windows updates its certificate store. To avoid this issue, install self-signed certificates to the Trusted Root Certification Authorities store.

## Generating a self-signed certificate

Self-signed certificates, typically used in testing environments, may be generated using OpenSSL. Use the Subject Alternative Name field to specify the web service roots and Domain URLs for your Turbo Server farm. When prompted for the Common Name, specify the Domain URL or portal web serivce root, if Domain URL is not configured.

The example below would create a self-signed certificate for a farm of one hub server, one portal server, two application servers, and the domain URL:

```
openssl req -x509 -newkey rsa:4096 -nodes -keyout self-signed-key.pem -out self-signed-cert.pem -days 3650 -addext "subjectAltName = DNS:turbo.domain.com,DNS:turbo-portal.domain.com,DNS:turbo-hub.domain.com,DNS:turbo-app1.domain.com,DNS:turbo-app2.domain.com"
```