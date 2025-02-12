# Turbo Virtual Machine

::: tip What you'll learn
- How Turbo's lightweight virtualization works
- Key features of the Turbo VM engine
- Application layering and conflict resolution
:::

## Overview

Turbo's innovative virtualization technology takes a unique approach to running applications. Unlike traditional solutions that require a complete copy of the host operating system, Turbo:
- Emulates only the essential features needed to run applications
- Maintains native-level performance characteristics
- Requires no changes to system infrastructure

## The Turbo VM Engine

At the heart of Turbo's application virtualization technology is the Turbo Virtual Machine (VM) engine. This lightweight system:
- Occupies only a few megabytes of storage
- Introduces minimal performance overhead
- Implements core operating system APIs:
  - File system
  - Registry
  - Process management
  - Threading subsystems

The VM engine operates entirely in user-mode space, enabling applications to run without:
- Driver installations
- Administrative privileges
- System modifications

## How It Works

Virtualized applications interact with virtualized components rather than directly with the host operating system:
- Virtual file system
- Virtual registry
- Isolated process environment

All requests are handled within this contained environment, though they can be:
- Redirected to different locations
- Configured to override default behavior
- Modified based on specific needs

## Forward Compatibility

Turbo virtualization ensures applications remain compatible as operating systems evolve:

- **Translation Layer**: 
  - Handles OS version differences
  - Provides consistent runtime environment
  - Maintains application stability

- **Continuous Updates**:
  - Testing against **Windows Insider Track** builds
  - Regular VM updates published to Turbo.net
  - Optional testing by publishers before release

- **Managed Updates**:
  - Validation with each **Windows Semi-Annual Channel**
  - Automatic VM updates via Turbo.net cloud
  - Administrator control over update deployment

## Application Layering

The Turbo VM engine enables running multiple virtualized applications through sophisticated layering:

- **Modular Design**:
  - Stack multiple application components
  - Reuse common elements across projects
  - Optimize resource usage

- **Layer Management**:
  - Each image creates a distinct layer
  - Layers can be combined flexibly
  - Resources are shared efficiently

Note: The terms "layer" and "image" are used interchangeably, as each layer is created from an image.

## Common Scenarios

### Component Integration
- Support for [Turbo Studio components](/studio/working-with-turbo-studio/configuration.html#layers-settings)
- Management of [dependencies](/reference/dependencies/dependencies)
- Custom configuration stacks

### Handling Layer Conflicts

While layers typically define unique resources, conflicts can occur. Resolution follows these rules:

1. **Isolation Mode Conflicts**:
   - First layer's settings take precedence
   - Order of layers determines final configuration

2. **Example Scenario**:
   When combining **git** and **nodejs** images with conflicting settings for **c:\git**:

   ```bash
   # Results in full isolation for c:\git
   > turbo run git,nodejs

   # Results in merge isolation for c:\git
   > turbo run nodejs,git
   ```
