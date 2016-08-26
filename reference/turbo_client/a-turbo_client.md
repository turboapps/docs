## Turbo Client

**Install**

The latest Turbo Client installer can be found at **https://turbo.net/download**. By default this will install the client components to **%localappdir%\spoon** directory. Shortcuts will be added to the programs menu in the **Turbo.net** folder to quickly access **TurboLauncher** and **TurboShell**. In addition, a shortcut will be added to the startup folder to run the Turbo Sandbox Manager process. You can uninstall the Turbo Client or the TurboLauncher specifically from the Windows **Uninstall or change a program** screen (formally **Add/Remove Programs**). 

The latest Chrome browser extension for Turbo.net can be found at **https://chrome.google.com/webstore/detail/turbonet-extension/ldibmiofagdkgiphkcokpooepankmacl** .


**Installing for All Users**

The Turbo Client can be installed for all users on the machine with the `--all-users` flag. This will put the client components in the **%programfiles(x86)%\spoon** directory. If users on the machine already have the Turbo Client installed in their user directories, then these user installs will be updated to point to the all users location. Additional installs of the Turbo Client will be to the all users location, even if the `--all-users` flag is omitted.


**Command Line**

Running the Turbo Client installer with these command line flags can change the install behavior.

<table>
    <tr>
       <th data-column="0">
          <div><p>Flag</p></div>
       </th>
       <th data-column="1">
          <div><p>Behavior</p></div>
       </th>
    </tr>
    <tr>
       <td><p><strong>--all-users</strong></p></td>
       <td><p>Installs the Turbo Client to **%programfiles(x86)%\spoon** so that it is accessible for all users on the machine. This is required for running certain Turbo command for all users (such as `subscribe` or `installi`)</p></td>
    </tr>
    <tr>
       <td><p><strong>--no-auto-start</strong></p></td>
       <td><p>Stops the Turbo Sandbox Manager from starting in the background when logging into your machine. If this flag is used, other components or your web browser will have to start the process on demand and may reduce performance.</p></td>
    </tr>
    <tr>
       <td><p><strong>--server</strong></p></td>
       <td><p>Sets the default server for Client component login. This is used in environments with Turbo Server.</p></td>
    </tr>
    <tr>
       <td><p><strong>--shutdown-period</strong></p></td>
       <td><p>Specifies the number of minutes that the Turbo Sandbox Manager is idle before shutting down.</p></td>
    </tr>
    <tr>
       <td><p><strong>--silent</strong></p></td>
       <td><p>Turbo Client installs without any UI popups.</p></td>
    </tr>
</table>

