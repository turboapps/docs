#### Administration site login results in the same login form

The server may have had its clock changed causing the credentials to be invalid. Ensure the clock is accurate and restart the server.

#### Unable to connect to SQL Server instance

Connecting to SQL Server remotely requires the following:
- Enable remote connections for the database through SSMS
- Enable TCP/IP in SQL Server Network Configuration
- Open the port (default 1433) in Windows Firewall inbound rules
- SSMS on a remote computer may require the port specified (e.g. TURBOSERVER\turbo,1433)
- Enable both Windows and SQL authentication for the server through SSMS

See [Stack Overflow](https://stackoverflow.com/questions/60623151/cant-connect-to-sql-server-2019-on-home-network) for additional links.