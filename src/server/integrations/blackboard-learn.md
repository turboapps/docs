# Blackboard Learn Integration

Configuring Turbo Server with Blackboard Learn allows students and instructors to access their Portal Dashboard with one click from Blackboard.

Turbo Server uses the open Learning Tools Interoperability (LTI) specification (version 1.0) to communicate with Blackboard.

### Getting Started

Obtain a blackboard license from [https://www.blackboard.com/](https://www.blackboard.com/).

Blackboard requires the following to connect to Turbo Server Application:

- Consumer Key
- Shared Secret
- Tool Provider URL

The values can be obtained from the Turbo Server administrator site. Navigate to **General > Learning Management System**.

### Adding Turbo to Blackboard Learn

Before adding Turbo to an individual course, an administrator account must configure Turbo site-wide from the Blackboard administration site.

From **System Admin**, navigate to **LTI Tool Providers**, listed under Integrations. Select **Register LTI 1.1 Provider**.

Under **Provider Domain Status**, in the Provider Domain box, enter the hostname portion of the Tool Provider URL shown on the Turbo Server administrator site. Set the Provider Domain Status to Approved.

![Bb ProviderDomain](/images/Bb_ProviderDomain.png)

Under Default Configuration, select Set Globally. Fill in the Tool Provider Key and Secret with the values from the Turbo Server administrator site.

Under Institution Policies, configure the following:

- Send user data only over SSL
- User Fields to Send: check all boxes

![Bb PrivacyConfig](/images/Bb_PrivacyConfig.png)

Click **Submit**.

### Add a Turbo Placement (Original UI)

If your organization has any courses set to Original UI, the following steps are required for instructors of those courses to see Turbo. Administrator privileges are required.

From the **LTI Tool Providers page**, open the Options Menu dropdown beside Turbo.

![Bb ToolOptionMenu](/images/Bb_ToolOptionMenu.png)

Select **Manage Placements.** Then select Create Placement. Under Placement Information, set Label to Turbo.net and Handle to something unique for your Blackboard Site.

Turbo supports the following options for Type:

- Course content tool, without grading
- Course tool, with student access
- System tool
- Administrator tool

The Turbo Icon can be downloaded [here](https://start-c.turbo.net/images/turboiconlarge.png "Turbo Icon").

Under Tool Provider Information, enter the **Tool Provider URL** from the Turbo Server administrator site.

![Bb ToolPlacementURL](/images/Bb_ToolPlacementURL.png)

Click **Submit**.

### Activate Turbo on a Course (Original UI)

These steps require at least instructor privileges and do not apply to courses with the Ultra UI. An administrator must have already added Turbo site-wide and created a Course Placement. The administrator and end users must also be enrolled in the course to access Turbo.net.

Navigate to the **Content** page of the desired course

Open the **Tools** dropdown. Select **More tools**.

![Bb ToolsDropdownMenu](/images/Bb_ToolsDropdownMenu.png)

Select **Turbo.net**. Configure as desired and click **Submit**.

### Activate Turbo on a Course (Ultra UI)

These steps require at least instructor privileges and apply only to courses with the Ultra UI. An administrator must have already added Turbo site-wide. The administrator and end users must also be enrolled in the course to access Turbo.net.

Navigate to the Ultra course desired. Click the plus icon and select **Create** to add Course Content.

![BbUltra Create](/images/BbUltra_Create.png)

From the right sidebar, select **Teaching tools with LTI connection**.

Set as Visible to students.

Under **Configuration URL**, enter the Tool Provider URL from the Turbo Server administrator site.

### Troubleshooting

#### Accessing Turbo.net from course content page fails with error "The specified object was not found."

The error occurs after Turbo.net has been added to Blackboard by an administrator and activated on the course.

Solution:
Ensure your user is enrolled in the course. Blackboard prevents unenrolled users (including administrative users) from accessing LTI apps.

#### Accessing Turbo.net from course content page fails with "401 Unauthorized"

The error occurs when the secret does not match.

Solution:
Ensure the secret in the Blackboard administration site matches the secret from the Turbo administration LTI page.
