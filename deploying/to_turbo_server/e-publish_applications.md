### Manage Applications

In this section you'll learn how to manage containers and deploy them with Turbo Server.

#### Create Applications

In this section you will learn how to create Turbo applications that can deploy from Turbo Server. Turbo applications are created from existing applications by converting them into **SVM** file format. For more information about adding an existing **SVM** file to Turbo Server, refer to Managing Applications.

##### Virtualize Application with Turbo Studio

To be hosted on Turbo Server applications must be converted into Turbo containers (**SVM** files) using the Turbo Studio. The Turbo Studio monitors the installation of your application, analyzes the installation, and constructs a virtual package which you can upload to Turbo Server. Experienced users can convert most applications for Turbo in minutes.

To create an **SVM** using Turbo Studio, Project Type must be set to **Component**. containers with compressed payloads **cannot** be optimized for streaming using Turbe Server. To build a streaming container, **Compress Payload** in Settings must remain unchecked during the build process.

Refer to the Turbo Studio help documentation for detailed instructions on how to create a Turbo application.

#### Publish Applications

In this section you will learn about deploying applications to users with Turbo Server.

##### Publish to the Turbo Server Portal

The Turbo Server Portal Site is the default mechanism for delivering streaming applications to your users. The Portal Site automatically configures during Turbo Server setup and can be customized via the Administration Site.The default location of the site is: http://localhost/.

To make an application visible on the Portal Site, publish an application version on the Administration Site. For more information refer to Managing Applications.

##### Publish to an External Site

Turbo Server supports delivery from custom external websites with additional license certification. Standard Turbo Server licenses allow two sites by default: the Administration and Portal Sites. You can upgrade license certificates to enable application delivery from external sites: contact your Turbo sales representative at sales@turbo.net.

When adding a portal site hosted on another server, you must add that server on the Servers page of the Administration Site. The role of the new server must be set to Portal. When sending users the link to an external site, verify that the link matches the web address entered. For more information about adding a new server refer to Managing Servers.

**Utilizing Embed Code**

After creating an application version, you will find HTML code located on the application version page in the Embed section. A Turbo Feed can be set up for any Turbo Server running in anonymous mode (see Configuration and Customization) with a valid license and published apps. Like the turbo.net live feed, the Server feed can be added to any website by adding a few lines of HTML. An example use of the feed is below.

    <script type="text/javascript">
    Turbo_PortalRoot = 'http://[SERVER]:[PORT]/';
    Turbo_Id = 'Firefox-5.0.0.0';
    </script>
    <script language="javascript" type="text/javascript" src="http://[SERVER]:[PORT]/feed"></script>

**Auto-Launch Applications from the Portal Site**

Applications can be auto-launched on the Portal site by passing an additional parameter in the URL. The standard URL for the application detail page is *http://[Server]/apps/[Application Slug]*. To have the application auto-launch, simply append the **?run=true** parameter to the end of the URL. For example: *http://[Server]/apps/[Application Slug]?run=true*.

**Turbo Parameters**

This section outlines the possible parameters for the Turbo Feed.

<table>
      <tr>
         <th data-column="0">
            <div>
               <p>Parameter Name</p>
            </div>
         </th>
         <th data-column="1">
            <div>
               <p>Javascript Type</p>
            </div>
         </th>
         <th data-column="2">
            <div>
               <p>Required</p>
            </div>
         </th>
         <th data-column="3">
            <div>
               <p>Description</p>
            </div>
         </th>
         <th data-column="4">
            <div>
               <p>Notes</p>
            </div>
         </th>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_PortalRoot<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p><span style="color: rgb(51,51,51);">Yes</span></p>
         </td>
         <td>
            <p>This is the Portal Site URL</p>
         </td>
         <td>
            <p>Non.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_Id<br></strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>Yes</p>
         </td>
         <td>
            <p>This is the Application identifier</p>
         </td>
         <td>
            <p>This is the value that is seen in the portal under the apps root. For example, if the application's URL is <em><a href="http://portal/apps/notepad-7.6" class="external-link" rel="nofollow">http://portal/apps/notepad-7.6</a></em>, the Turbo_Id is notepad-7.6.</p>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Turbo_BackgroundColor</strong></p>
         </td>
         <td>
            <p>String</p>
         </td>
         <td>
            <p>No</p>
         </td>
         <td>
            <p>Specifies what the background color of the frame should be</p>
         </td>
         <td>
            <p>String value hex encoded in the form "rrggbb" (default = "ffffff", white).</p>
         </td>
      </tr>
</table>
<br>

##### Publish Using Third-Party Software

You can integrate Turbo Server third-party web collaboration tools and portal software, such as:

- Microsoft Office SharePoint Server

- Novell Teaming

- IBM WebSphere

Publishing an application to a third-party web portal requires the same license certificate upgrade required for publishing to a custom external site. For more information about license upgrades needed to publish on an external site and how to utilize Turbo embed code refer to Publishing to an External Site. 
