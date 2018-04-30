## Portable EXEs and MSIs

Turbo Studio can be used to package virtual applications as portable EXEs and MSIs.

### EXE

A popular option for organizations that have an existing endpoint management solution like LANDesk Management Suite &reg;, Microsoft System Center, or Novell ZENworks is to deploy containerized applications as standalone executables. These executables are built on the SVM architecture and work just like a container. 

Deploying applications within containers is convenient for running different versions of applications like Internet Explorer 8 and 11 side-by-side on the same system. 

To produce an executable output, set the **Project Type** to **ISV Application** in Turbo Studio.   Executables can be deployed directly to the users device or to a network share and do not have any dependency requirements.

An enterprise license for Turbo Studio is required to enable executable outputs. Contact our [sales team](mailto:sales@turbo.net) for more information.

### MSI

MSI outputs simply wrap the portable exe into an MSI package to add support for shell integrations such as file associations, Start Menu shortcuts and ProgIds. MSIs are a common deployment option for organizations that are using AdminStudio or for integrating with existing desktop management solutions. 

To build an MSI, go to the **Setup** section of Turbo Studio, enter the MSI details and click **Build MSI**. MSIs can be deployed with existing desktop management tools or directly by the end users. See the [reference](/docs/reference) for details on MSI settings.

An enterprise license for Turbo Studio is required to enable MSI outputs. Contact our [sales team](mailto:sales@turbo.net) for more information.

### Turbo EXE

A Turbo EXE is a portable executable that packages the application with the Turbo client. When an application is published as a Turbo EXE, the application is pushed to the [Hub](/hub) which enables features such as deploying application updates to users. See the [hub docs](/docs/hub) for additional features.

To produce a Turbo exe, set the **Project Type** to **Portable Application** in Turbo Studio. A [Turbo.net](https://turbo.net) account is required.