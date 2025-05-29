# Peer-to-Peer Image Distribution

## Overview

Peer-to-Peer Image Distribution in Turbo leverages distributed networking technology to efficiently share images across your network. Instead of downloading images solely from the server, clients can share image data directly with each other, reducing server load and improving distribution speed.

### Benefits
- **Increased Throughput**: When total client download demand exceeds server upload capacity
- **Reduced Server Load**: Distributes bandwidth requirements across peers
- **Network Efficiency**: Optimizes bandwidth usage when many clients download simultaneously
- **Best for Bulk Operations**: Ideal for subscription updates that populate images before end-user access

## Quick Start

**Enable P2P in 3 steps:**

1. **Server Setup**: Enable P2P in Admin UI under Domain > Servers > Storage
2. **Client Setup**: Run `turbo config --enable=p2pdownload` on each client
3. **Verify**: Check `turbo config --all` shows "Peer-to-peer download: Enabled"

## How It Works

### Peer-to-Peer Fundamentals

**Distributed Downloading**
Traditional downloads use a single source (the server), creating a bottleneck. P2P technology allows clients to download from multiple sources simultaneously. Instead of everyone competing for the server's bandwidth, clients share the load by downloading different pieces from different peers.

**Chunk-Based Transfer**
Images are divided into small, fixed-size pieces (chunks). Clients can download these chunks in any order from any available peer. This enables:
- Parallel downloads from multiple sources
- Efficient bandwidth utilization
- Resilience if some peers disconnect
- Faster overall transfer speeds

**Swarm Networks**
A "swarm" is the group of all peers (downloaders and seeds) sharing the same image. The larger the swarm, the more sources available for downloading. Each peer in the swarm can contribute, creating a collaborative distribution network that scales with demand.

**Seeding Concept**
Seeds are peers that have complete copies of an image and only upload to others. Seeding is crucial for network health because:
- Seeds provide reliable sources for new downloaders
- More seeds mean faster downloads for everyone
- Seeds keep popular images available even when the server is busy
- The network becomes more resilient and self-sustaining

### Network Architecture

**Peer-to-Peer Network Structure**
- Each client can simultaneously download from and upload to other clients
- Clients that complete downloads become "seeds" and continue sharing
- Multiple peers can contribute different parts of the same image
- The network becomes more efficient as more peers participate

**Tracker Coordination**
- The Turbo Server acts as a private coordination hub
- The tracker helps peers find each other within the swarm
- Clients must authenticate to participate in the network
- Only authorized clients can join the distribution network
- The tracker maintains swarm health by monitoring peer status

**Seeding Behavior**
- The server automatically seeds all images in its cache
- Client seeding behavior depends on configuration:
  - **Default**: No automatic seeding after individual downloads
  - **Configured Seeding**: P2P downloaded images are seeded indefinitely through the Turbo Client Sandman service
  - **Manual Seeding**: Use `--wait-after-exit` flag with `turbo pull` for temporary seeding

**Download Process**
1. Client requests an image and joins the swarm
2. Tracker provides a list of available peers in the swarm
3. Client begins downloading chunks from multiple peers simultaneously
4. While downloading, client also uploads completed chunks to other peers
5. After completing download, client becomes a seed
6. Seeds contribute by sharing the complete image with new downloaders

## Configuration

### Server Configuration

**Enable P2P Distribution:**

1. Access the Turbo Server Admin UI
2. Navigate to **Domain > Servers > [Your Hub server] > Storage**
3. In the **Hub Image Cache** section:
   - Enable **Hub Image Cache**
   - Enable **Peer-to-Peer Image Distribution**
4. Save the changes
5. If the Hub cache was not previously enabled, click **Update Cache** to populate existing images

**Verify Server Configuration:**
- Check that required services are running
- Confirm network ports are accessible
- Review server logs for any initialization errors

### Client Configuration

**Enable P2P Downloads:**

```cmd
# Enable peer-to-peer downloads
turbo config --enable=p2pdownload

# Verify the configuration
turbo config --all
```

Look for "Peer-to-peer download: Enabled" in the output to confirm the setting.

**Bandwidth Management:**

Control network usage to prevent congestion:

```cmd
# Limit maximum download speed to 50 MB/s
# Values are set in KB/s (0 = unlimited)
turbo config --p2p-max-download-speed=400000

# Limit maximum upload speed to 50 MB/s
turbo config --p2p-max-upload-speed=400000
```

**Optimize Seeding:**

```cmd
# Keep client seeding after download completes
turbo pull <image> --wait-after-exit

# Check current seeding status
turbo config --show-p2p-status
```

## Network Requirements

### Port Configuration

The Turbo Server P2P coordinator uses **hardcoded ports 6881-6889**. These ports cannot be changed and must be properly configured:

**Windows Firewall:**
1. Open Windows Defender Firewall with Advanced Security
2. Create a new Inbound Rule for ports 6881-6889 (TCP)
3. Allow the connection for all profiles (Domain, Private, Public)

**External Firewalls:**
1. Add inbound rules for TCP traffic on ports 6881-6889
2. Set source to your client IP ranges
3. Set destination to your Turbo Server's IP address

**Network Policies:**
- Ensure corporate proxies allow P2P protocols (proxies commonly block P2P traffic)
- Verify Quality of Service (QoS) rules don't block P2P ports
- Check that network segmentation allows client-to-client communication
- **Cross-Subnet Support**: P2P works across subnets/VLANs with proper firewall configuration
- **VPN/NAT Considerations**: Clients behind VPNs or NAT must have P2P ports accessible for seeding

## Monitoring and Performance

### Performance Metrics

Monitor these key indicators:
- **Throughput Comparison**: Compare total network throughput vs. server-only downloads
- **Server Load**: CPU and bandwidth usage on Turbo Server during peak download periods
- **Concurrent Downloads**: Number of simultaneous client downloads
- **Network Utilization**: Whether total client demand exceeds server upload capacity

**Performance Expectations:**
- P2P provides benefits when total client download bandwidth exceeds server upload capacity
- Image size does not determine P2P effectiveness - throughput demand does
- Greatest benefits occur during bulk operations like subscription updates

### Health Checks

**Server Health:**
```cmd
# Check P2P service status
netstat -ano | findstr :688

# Verify coordinator processes
tasklist | findstr Turbo.Repository
```

**Client Health:**
```cmd
# Test server connectivity
Test-NetConnection -ComputerName SERVER_IP -Port 6881

# Check P2P configuration
turbo config --show-p2p-details
```

## Troubleshooting

### Server-Side Issues

**Service Verification:**
Ensure these processes are running:
- `Turbo.Repository.Tracker.exe` (P2P coordinator)
- `Turbo.Repository.Api.exe` (API service)
- `Turbo.Repository.Cli.exe` (CLI service)

**Network Connectivity:**
```cmd
# Check if P2P coordinator is listening
netstat -ano | findstr :688
```

**Log Analysis:**
Review logs in the Turbo installation directory's Logs folder:
- **Server**: `Turbo.Repository.*.log` files contain P2P seed and tracker events
- **Client**: P2P events are logged in Turbo CLI and Sandman logs

### Client-Side Issues

**Configuration Check:**
```cmd
# Verify P2P is enabled
turbo config --all | findstr "peer-to-peer"

# Test server connectivity
Test-NetConnection -ComputerName SERVER_IP -Port 6881
```

**Peer Connectivity Testing:**
1. On Peer A: `turbo pull <image> --wait-after-exit`
2. On Peer B: `Test-NetConnection -ComputerName PEER_A_IP -Port 6881`

**Log Review:**
Check client logs in `%LOCALAPPDATA%\Turbo\Logs`:
- **Turbo CLI logs**: Contains P2P download events and errors
- **Sandman logs**: Contains P2P seeding activity and issues

### Common Issues and Solutions

**Firewall and Proxy Blocks**
- Verify Windows Firewall exceptions for ports 6881-6889
- Check corporate firewall policies allow P2P protocols
- **Most Common Issue**: Proxies and firewalls that block P2P protocols
- Ensure antivirus software allows P2P connections on required ports

**Network Configuration**
- Confirm correct IP addresses and DNS resolution
- Test proxy server compatibility
- Verify network policies allow required ports

**Service Issues**
- Restart Turbo services if server processes aren't running
- **Note**: Clients do not run additional P2P executables - P2P functionality is built into existing Turbo client processes
- Check service account permissions
- Verify adequate system resources (CPU, memory, disk)

**Subscription Conflicts**
- Avoid manual `turbo subscribe` commands during automatic updates
- Configure update schedules to prevent conflicts
- Monitor Sandbox Manager service for update status

## Security and Privacy

**Network Security**
- Only Turbo images are distributed via P2P
- Peer connections limited to authenticated Turbo clients
- Private coordination server prevents external access
- No external trackers or distributed hash tables used

**Data Protection**
- Image integrity verified through cryptographic hashes
- Encrypted client authentication prevents unauthorized access
- Network traffic can be monitored and logged

## Best Practices

### Optimal Use Cases
- **Subscription Updates**: Enable P2P for `turbo subscription` commands to populate SVM images before end-user access
- **Bulk Downloads**: Most effective when many clients download the same images simultaneously
- **Peak Load Scenarios**: Deploy when client download demand exceeds server upload capacity

### When NOT to Use P2P
- **Sufficient Server Bandwidth**: When hub server bandwidth can satisfy all client downloads
- **On-Demand Applications**: Not recommended for "on demand" application launch downloads due to potential higher initialization latency
- **Simple Network Requirements**: P2P requires more complex network setup - avoid if unnecessary

### Deployment Strategy
- Start with subscription-based downloads where P2P provides clear benefits
- Monitor server throughput vs. client demand to determine P2P necessity
- Consider network complexity vs. performance benefits before organization-wide rollout

### Operational Excellence
- Use `--wait-after-exit` with `turbo pull` to maximize seeding
- Schedule regular health checks for P2P services
- Keep client and server software updated
- Document network configuration for troubleshooting

### Performance Optimization
- Adjust bandwidth limits based on network capacity
- Coordinate with network team on QoS policies
- Monitor and tune based on usage patterns
- Consider geographic distribution of clients

## Limitations and Considerations

**Performance Factors**
- Benefits occur when total client download demand exceeds server upload capacity
- Initial P2P connection setup may add latency compared to direct server downloads
- Image size does not determine P2P effectiveness - concurrent download volume does

**Network Requirements**
- Requires more complex network configuration than server-only downloads
- **Hardcoded Ports**: Cannot change port range 6881-6889
- Clients behind NAT/VPN must have accessible ports for effective seeding

**Operational Constraints**
- **Default Behavior**: Clients do not automatically seed after individual downloads
- **Seeding Configuration**: Requires specific configuration for ongoing seeding
- Manual `turbo pull` commands only seed while process is running (with `--wait-after-exit`)

**Use Case Limitations**
- Most beneficial for bulk operations, not on-demand single application launches
- Requires sufficient concurrent demand to justify network complexity

## FAQ

**Q: When does P2P provide performance benefits?**
A: When total client download bandwidth demand exceeds the hub server's upload capacity. Benefits are most noticeable during bulk operations like subscription updates.

**Q: Does image size affect P2P performance?**
A: No. P2P benefits depend on concurrent download volume, not individual image size.

**Q: Does P2P work across different network subnets?**
A: Yes, P2P works across subnets/VLANs with proper firewall configuration allowing traffic on ports 6881-6889.

**Q: Do clients automatically seed after downloads?**
A: By default, no. Clients only seed if specifically configured, or when using `--wait-after-exit` with manual pulls.

**Q: Can I change the P2P port range?**
A: No, ports 6881-6889 are hardcoded and cannot be modified.

**Q: Should I enable P2P for on-demand application launches?**
A: No, P2P is not recommended for on-demand launches due to potential higher initialization latency. Use it for subscription updates instead.

**Q: When should I avoid P2P entirely?**
A: When your hub server bandwidth can satisfy all client downloads without P2P, since P2P requires more complex network setup.
