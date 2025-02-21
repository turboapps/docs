# SSL

## Testing HTTPS (SSL) with a Self-Signed Certificate

Follow these steps to test Turbo Hub Server with SSL enabled using a self-signed certificate.

1. Configure the container server to use HTTPS/SSL with the Turbo Hub Server command line administration utility.

    ```
    # change hub url to use https
    > server.exe admin --server <server-name> web-address https://[hub-server-host]

    # set certificate files
    > server.exe admin --server <server-name> ssl-certificate-file [path to .crt file]
    > server.exe admin --server <server-name> ssl-certificate-key-file [path to .key file]

    # set the certificate key chain file if required by the certificate
    > server.exe admin --server <server-name> ssl-certificate-chain-file [path to chain .crt file]
    ```

2. On the client machine, double-click on your certificate.crt file to install it in the "Trusted Root Certification Authorities for Windows"

3. Access the hub using the Turbo Client command line tools, Turbo Launcher, or connected Turbo Streaming Server portal.

## Disabling TLS/SSL certificate validation on Portal requests

The Portal performs TLS/SSL certificate validation when making TLS connections, rejecting connections with expired or otherwise invalid certificates.

If you wish to disable certificate validation, you may do so manually with the following steps:
1. RDP onto your Portal server.
2. Open an administrator command prompt and run the command: `<install path>\Server.exe /XShellEx=cmd`, replacing `<install path>` with the install path of your Turbo Server. 
3. In the new command prompt, run the command `notepad C:\portal\build\main.js`.
4. At the top of the file, add the line: `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';`.
5. Save the file, close notepad, and close the command prompts.
6. Open **Services** from the start menu and locate `Turbo Server`. Right-click it and click **Restart**.
7. Wait a few minutes for the Turbo service to restart, then load the portal website and confirm the change.

**WARNING:** Disabling TLS/SSL certificate validation allows the Portal to make insecure HTTPS requests and is strongly discouraged in production environments.

**WARNING:** This change will be lost when upgrading your Turbo Server. Please reapply the change after upgrade. 