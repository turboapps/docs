# Peer-to-Peer Image Distribution

### How It Works

Peer-to-Peer Image Distribution in Turbo uses torrent technology to efficiently distribute images across your network. Here's how the system works:

1. **Peer-to-Peer Network Structure**
   - Each client can both download and upload simultaneously
   - Clients that complete downloads can become "seeds" and continue sharing
   - Clients can download from both seeds and other downloading clients

2. **Tracker System**
   - The Turbo Server acts as a private tracker
   - Clients must announce themselves to participate in the network
   - Only authenticated clients can participate in the network

3. **Seeding Behavior**
   - The server seeds all images in its image cache
   - Client machines continue seeding when:
     - The `--wait-after-exit` flag is used with `turbo pull`
     - The Sandman service keeps the process running

4. **Download Process**
   - Clients join the network and begin downloading
   - While downloading, clients also upload to other peers
   - After completing downloads, clients can become seeds
   - Seeds contribute to the network by only uploading

### Enabling Peer-to-Peer Image Distribution

#### Server Configuration

1. Access the Turbo Server Admin UI
2. Navigate to **Domain > Servers > [Your Hub server] > Storage**
3. In the **Hub Image Cache** section:
   - Enable **Hub Image Cache**
   - Enable **Peer-to-Peer Image Distribution**
4. Save the changes
5. If the hub cache was not previously enabled, use the **Update Cache** button to populate existing hub images into the cache

#### Client Configuration

To enable Peer-to-Peer Image Distribution on a Turbo client:

```cmd
# Enable peer-to-peer downloads
turbo config --enable=p2pdownload

# Verify the configuration
turbo config --all
```

Look for "Torrent download: Enabled" in the output to confirm the setting.

### Network Requirements

The Turbo Server image seeder uses ports 6881-6889. Ensure these ports are properly configured:

1. Configure Windows Firewall:
   - Open Windows Defender Firewall with Advanced Security
   - Create a new Inbound Rule for ports 6881-6889 (TCP)
   - Allow the connection for all profiles (Domain, Private, Public)

2. Configure external firewalls (if applicable):
   - Add an inbound security rule for TCP traffic on ports 6881-6889
   - Set the source to the appropriate IP range for your clients
   - Set the destination to your Turbo Server's IP address

### Troubleshooting

#### Server-Side Issues

If you're experiencing issues with image torrent downloads hanging, slow distribution speeds, or other peer-to-peer related errors:

1. **Verify Required Processes**
   Check if these processes are running:
   - `Turbo.Repository.Tracker.exe`
   - `Turbo.Repository.Api.exe`
   - `Turbo.Repository.Cli.exe`

2. **Check Network Ports**
   Verify the image seeder is listening on the correct ports:
   ```cmd
   netstat -ano | findstr :688
   ```
   You should see entries for ports in the range 6881-6889.

3. **Test Network Connectivity**
   From an endpoint device, test the connection:
   ```powershell
   Test-NetConnection -ComputerName SERVER_IP -Port 6881
   ```
   Look for `TcpTestSucceeded : True` in the output.

4. **Review Server Logs**
   Check the logs in the Turbo installation directory's Logs folder:
   - `repository-torrent_YYYYMMDD_HHMMSS.log`
   - `repository-tracker_YYYYMMDD_HHMMSS.log`

#### Client-Side Issues

If clients are having trouble with peer-to-peer downloads:

1. **Verify Client Configuration**
   Run `turbo config --all` and check for "Peer-to-peer download: Enabled"

2. **Test Server Connectivity**
   ```powershell
   Test-NetConnection -ComputerName SERVER_IP -Port 6881
   ```

3. **Check Peer Connectivity**
   To test peer-to-peer connections:
   1. On Peer A, run:
      ```cmd
      turbo pull <image> --wait-after-exit
      ```
   2. On Peer B, test the connection:
      ```powershell
      Test-NetConnection -ComputerName PEER_A_IP -Port 6881
      ```

4. **Review Client Logs**
   Check logs in `%LOCALAPPDATA%\Turbo\Logs` for error messages

#### Common Issues

1. **Firewall Blocks**
   - Verify Windows Firewall settings
   - Check corporate firewall policies
   - Ensure antivirus software isn't blocking connections

2. **Network Configuration**
   - Verify IP addresses are correct
   - Check if proxy servers allow peer-to-peer traffic
   - Ensure network policies don't block required ports

3. **Process Issues**
   - Verify all required services are running
   - Check process permissions
   - Ensure sufficient system resources

### Security and Privacy

- Only Turbo images are distributed via the peer-to-peer network
- Peer connections are strictly limited to other authenticated Turbo clients
- A private tracker hosted by the Turbo server is used exclusively
- No external trackers or Distributed Hash Table (DHT) are used

### Best Practices

- Enable Peer-to-Peer Image Distribution on all clients in your network
- Use `--wait-after-exit` with `turbo pull` to continue seeding
- Keep clients and server software up to date
- Monitor network performance and adjust firewall rules as needed

### Limitations

- Performance benefits vary with network conditions and peer count
- Manual `turbo pull` commands only seed while running
- Initial metadata download may add overhead for less popular images
