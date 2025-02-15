# Parallels RAS Integration

Parallels Remote Application Server (RAS) provides virtual application and desktop delivery across multiple devices and platforms. Integration with Turbo enables simplified application deployment and management within your Parallels RAS environment.

::: tip What you'll learn
- How Turbo integrates with Parallels RAS
- How to provision applications from Turbo Hub
- How to manage multiple application versions
- How to handle legacy application compatibility
:::

::: tip Prerequisites
- Parallels RAS environment
- Administrative access to RAS Console
- Turbo account or organization subscription
:::

## Application Provisioning

Turbo integrates directly with Parallels RAS, enabling application provisioning from the Turbo Hub to any server in your farm. Through the RAS Console, administrators can select and deploy applications that are automatically installed and ready for publishing to users.

## Streamlined Deployment

The integration between Turbo and Parallels RAS simplifies application delivery. Applications from the Turbo Hub appear in the Parallels RAS Console alongside traditionally installed applications. When a user first accesses a published application, Parallels RAS automatically configures the Turbo runtime and application on the RDSH servers.

## Legacy Application Support

Many legacy applications weren't designed for multi-user environments and may have issues when multiple instances run on the same server. The Turbo integration resolves these limitations by running each application in its own isolated environment. This enables:

- Running multiple versions of applications side-by-side
- Testing different browser versions simultaneously
- Supporting legacy applications without conflicts
- Eliminating dependency conflicts between applications

## Additional Resources

For more information about using Turbo with Parallels RAS, visit [https://www.parallels.com/products/ras/features/turbo-net](https://www.parallels.com/products/ras/features/turbo-net).
