## Reporting

Though all tests execute locally in containers, test reports and screenshots are logged and saved on your Turbo.net account for easy sharing and access.

If you would not like us to save your test reports for you, this feature can be toggled by checking or unchecking the **Save test reports** check box in the top-right corner of [/selenium](/selenium).

When unchecked, command and screenshot logs will still appear for review after your tests complete, but they will not be saved after your session is ended. 

Reports can also be disabled for the organization as a whole by modifying the privacy settings for the organization. This can be done by the organization owner and overrides the settings for the users within the organization.

#### Sharing Tests

The visibility of your test results can be controlled through two methods:

1. *In the live Grid View*: After a test completes, a **Make Public** link will be displayed in that test's header. Clicking this link will make the report page for that test publicly visible. You can then share the link for that test with any of your teammates or coworkers for review. You can similarly revert the test back to private by clicking the **Make Private** link that appears when the test is publicly-visible.
2. *In the Test Reports table*: Each test has a corresponding **Visibility** property that shows the **Public/Private** state of the test's report. Clicking the lock icon in the **Actions** column will toggle the **Visibility** of that test. 

To share a test, make sure the test's visibility is set to Public. Once this is set, the corresponding report is visible to anyone with the share link.

#### Deleting Tests

If you're running low on storage space, or you'd just like to clear up your account history, you can delete old tests.

To delete a test, go to the Test Reports table and click the X icon corresponding to the test you would like to delete. 

#### Test Reports

Each test report contains a step-by-step breakdown of all the commands run for a given test.

For each command, the following information is recorded:

- The request made to the remote server. This details the specific command, and any associated parameters, that was run.
- The corresponding response from the remote server. This details the result(s) of the command.
A screenshot of the webpage during the command.

In the report, commands are grouped by their associated screenshot. When you see a sequence of commands associated with a single screenshot, this means that the page did not visually change throughout this sequence of commands. 