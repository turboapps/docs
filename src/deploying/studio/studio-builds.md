# Studio Builds

This section covers deploying virtual applications as standalone executables (EXEs) and Windows Installer packages (MSIs) using Turbo Studio.

::: tip What you'll learn
- Creating standalone executables
- Building MSI packages
- Integration with deployment tools
- Best practices for distribution
:::

## Standalone Executables

Standalone executables are self-contained virtual applications that include all dependencies and the virtual machine runtime. For details, see [Standalone Executables](/studio/working-with-turbo-studio/standalone-executables.md).

### Building Standalone EXEs

1. Open your project in Turbo Studio
2. Configure the **Project Type** to **ISV Application**
3. Set application settings in [Process Configuration](/studio/working-with-turbo-studio/configuration.md#process-settings):
   - Startup File
   - Working Directory
   - Command Line Arguments

4. Configure isolation settings in [Sandbox Configuration](/studio/working-with-turbo-studio/configuration.md#sandbox-settings):
   - File System Isolation
   - Registry Isolation
   - Network Access

5. Set [Security Settings](/studio/working-with-turbo-studio/configuration.md#security-settings) if needed:
   - Required domain
   - Group membership
   - Privilege elevation

6. Build the executable

### Features
- Run anywhere without installation
- No dependencies required
- Full application isolation
- Support for side-by-side versions
- [Command line options](/studio/working-with-turbo-studio/standalone-executables.md#command-line-options)

## MSI Packages

MSI packages wrap standalone executables with Windows Installer functionality. For complete details, see [Desktop Integration](/studio/working-with-turbo-studio/desktop.md).

### Building MSI Packages

1. Complete standalone executable configuration
2. Configure [MSI Settings](/studio/working-with-turbo-studio/desktop.md#msi-configuration):
   - Product Info
   - Install Location
   - Upgrade Behavior

3. Set [Desktop Integration](/studio/working-with-turbo-studio/desktop.md#shortcuts):
   - Shortcuts
   - File Associations ([ProgIDs](/studio/working-with-turbo-studio/desktop.md#progids))
   - Shell Extensions ([Verbs](/studio/working-with-turbo-studio/desktop.md#verbs))

4. Configure [File Associations](/studio/working-with-turbo-studio/desktop.md#extensions)
5. Click **Build MSI**

For a complete walkthrough, see the [MSI Example](/studio/working-with-turbo-studio/desktop.md#msi-example).

### MSI Features
- Standard Windows installation experience
- Group Policy deployment support
- System integration options
- Enterprise deployment ready

## Integration Options

### System Center Configuration Manager (SCCM)
- Deploy as standard applications
- Support for detection methods
- Deployment type configuration
- User device targeting

### Other Deployment Tools
- PDQ Deploy
- LANDesk Management Suite
- Ivanti Endpoint Manager
- Any MSI-compatible deployment system

## Best Practices

### Executable Configuration
1. **Optimization**
   - Remove unnecessary dependencies
   - Configure appropriate [isolation settings](/studio/working-with-turbo-studio/configuration.md#sandbox-settings)
   - Optimize startup performance

2. **Security**
   - Set appropriate [security settings](/studio/working-with-turbo-studio/configuration.md#security-settings)
   - Configure network access rules
   - Enable sandbox protection

3. **Integration**
   - Test [shell integration](/studio/working-with-turbo-studio/desktop.md)
   - Verify file associations
   - Check startup performance

### MSI Deployment
1. **Package Settings**
   - Use consistent naming
   - Include version information
   - Set appropriate defaults

2. **Enterprise Deployment**
   - Test silent installation
   - Verify group policy compatibility
   - Document deployment requirements

3. **Updates**
   - Plan update strategy
   - Consider version management
   - Test upgrade scenarios

## Troubleshooting

### Common Issues
1. **Startup Errors**
   - Check [isolation settings](/studio/working-with-turbo-studio/configuration.md#sandbox-settings)
   - Verify dependencies
   - Review sandbox configuration

2. **Integration Problems**
   - Verify permissions
   - Check system compatibility
   - Review [shell integration settings](/studio/working-with-turbo-studio/desktop.md)

3. **MSI Installation Issues**
   - Check Windows Installer logs
   - Verify system requirements
   - Review installation context

## Enterprise Licensing

An enterprise license for Turbo Studio is required to:
- Build standalone executables
- Create MSI packages
- Enable advanced features

Contact [sales@turbo.net](mailto:sales@turbo.net) for licensing information.
