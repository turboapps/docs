This update includes the following major new features:

- Major upgrade to **Domain Federation** supports replication of workspace definitions; identity data such as users, groups, and single sign-on configurations; and repositories from a parent source domain.
- New **Import Repository** option allows an immediate, one-time import of a repository from an external domain.
- New **SSL Network Tunneling** tunnels traffic for defined endpoints from local virtual environments to remote environments over SSL.
- The **Launch API** service is now configurable from the Domain settings page. This makes it easier to integrate Turbo launches with third-party web portals.
- Added additional configuration options to the Domain Settings page, including new resource allocation strategies.
- Added additional configuration options to the Application Settings page, including startup file and networking tunneling options

Other improvements include:

- The Portal server no longer requires restart when updating most portal settings
- Numerous improvements to administration site UI such as new table layouts, pagination, and tooltips.
- Turbo Server install now opens firewall ports required by the Application server and for Tunneling.
- A new navigation bar provides easier access to administrative site reporst and Workspace application settings.
- Updated breadcrumbs on the Domain Servers page.
- Added Federation Status, Import, and Delete actions to the repository page.
- Updated HTML5 client splash text and styles.
- Improved accessibility on all administration pages.

This update also includes fixes for the following issues:

- Failure when deleting a directory service or switching to anonymous authenticastion.
- Uploading a repository icon can fail.
- Error managing user groups if the group has over 2,100 users.
- Error when submitting an Active Directory configuration with an invalid top directory and no test user.
- Navigation issues on the user groups and domain server tables.
- Cross-site navigation failures in certain Hub and Portal topologies.
- Client configuration on the application server should update during service updates, not just installation.
- Improved default selections for many administration UI forms.
- Fixed default launch mode behavior when launching from the Portal.



