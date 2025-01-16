## Folder Variables

Turbo VM maps well known root folders such as **Documents** and **Program Files** based on the host operating system at runtime. 

These variables may also be used in TurboScript and as part of command-line arguments when building images or starting Turbo containers.

*Note:* Folder variables are case sensitive. They must appear in all caps to be recgonized by the command processor.

<table>
      <tr>
         <th data-column="0">
            <div><p>Variable</p></div>
         </th>
         <th data-column="1">
            <div><p>Description</p></div>
         </th>
      </tr>
      <tr>
         <td><p><strong>@APPDIR@</strong></p></td>
         <td><p>(Application Directory): Folder where the virtual application executable resides.</p></td>
      </tr>
      <tr>
         <td><p><strong>@WINDIR@</strong></p></td>
         <td><p>(Windows): The operating system installation location root as in c:\windows.</p></td>
      </tr>
      <tr>
         <td><p><strong>@SYSDRIVE@</strong></p></td>
         <td><p>(System Drive): The root folder of the drive containing the operating system installation as in c:\.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMFILES@</strong></p></td>
         <td><p>(Program Files): The 64-bit Program Files folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMFILESX86@</strong></p></td>
         <td><p>(Program Files (x86)): The 32-bit Program Files folder. Program Files on 32-bit platform, and Program Files (x86) on 64-bit platform.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMFILESCOMMON@</strong></p></td>
         <td><p>(Program Files\Common): The 64-bit Program Files\Common folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMFILESCOMMONX86@</strong></p></td>
         <td><p>(Program Files (x86)\Common): The 32-bit Program Files folder\Common. Program Files\Common on 32-bit platform, and Program Files (x86)\Common on 64-bit platform.</p></td>
      </tr>
      <tr>
         <td><p><strong>@APPDATACOMMON@</strong></p></td>
         <td><p>(ProgramData): The folder that serves as a common repository for application-specific data shared by all users.</p></td>
      </tr>
      <tr>
         <td><p><strong>@SYSTEM@</strong></p></td>
         <td><p>(Windows\System32): The Windows 64-bit System32 folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@SYSWOW64@</strong></p></td>
         <td><p>(Windows\SysWOW64): The Windows 32-bit System32 folder. Windows\System32 on 32-bit platform and Windows\SysWOW64 on 64-bit platform.</p></td>
      </tr>
      <tr>
         <td><p><strong>@APPDATALOCAL@</strong></p></td>
         <td><p>(Current User Directory\AppData\Local): The folder that serves as a common repository for application-specific data used by the current, non-roaming user.</p></td>
      </tr>
      <tr>
         <td><p><strong>@APPDATALOCALLOW@</strong></p></td>
         <td><p>(Current User Directory\AppData\LocalLow): The folder that serves as a common repository for application-specific data used by the current, non-roaming user for applications running with the Low integrity level.</p></td>
      </tr>
      <tr>
         <td><p><strong>@APPDATA@</strong></p></td>
         <td><p>(Current User Directory\AppData\Roaming): The folder that serves as a common repository for application-specific data for the current roaming user.</p></td>
      </tr>
      <tr>
         <td><p><strong>@STARTUP@</strong></p></td>
         <td><p>(Current User Directory\Start Menu\Programs\Startup): The folder containing the current user's startup items.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMS@</strong></p></td>
         <td><p>(Current User Directory\Start Menu\Programs): The folder containing the user's program groups.</p></td>
      </tr>
      <tr>
         <td><p><strong>@STARTMENU@</strong></p></td>
         <td><p>(Current User Directory\Start Menu): The folder containing the user's Start Menu contents.</p></td>
      </tr>
      <tr>
         <td><p><strong>@DESKTOP@</strong></p></td>
         <td><p>(Current User Directory\Desktop): The current user's Desktop folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@TEMPLATES@</strong></p></td>
         <td><p>(Current User Directory\Templates): The folder that serves as a common repository for the current user's document templates.</p></td>
      </tr>
      <tr>
         <td><p><strong>@FAVORITES@</strong></p></td>
         <td><p>(Current User Directory\Favorites): The current user's Favorites folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@DOCUMENTS@</strong></p></td>
         <td><p>(Current User Directory\Documents): The current user's Documents folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@MUSIC@</strong></p></td>
         <td><p>(Current User Directory\Music): The current user's Music folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PICTURES@</strong></p></td>
         <td><p>(Current User Directory\Pictures): The current user's Pictures folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@VIDEOS@</strong></p></td>
         <td><p>(Current User Directory\Videos): The current user's Videos folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@DOWNLOADS@</strong></p></td>
         <td><p>(Current User Directory\Downloads): The current user's Downloads folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROFILE@</strong></p></td>
         <td><p>(Current User Directory): The folder that stores the current user's profile data.</p></td>
      </tr>
      <tr>
         <td><p><strong>@STARTUPCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Start Menu\Programs\Startup): The folder containing startup items for all users.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROGRAMSCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Start Menu\Programs): The folder containing components shared across applications.</p></td>
      </tr>
      <tr>
         <td><p><strong>@STARTMENUCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Start Menu): The folder containing the Start Menu contents for all users.</p></td>
      </tr>
      <tr>
         <td><p><strong>@DESKTOPCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Desktop): The shared Desktop folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@TEMPLATESCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Templates): The folder that serves as a common repository for shared document templates.</p></td>
      </tr>
      <tr>
         <td><p><strong>@FAVORITESCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Favorites): The shared Favorites folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@DOCUMENTSCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Documents): The shared Documents folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@MUSICCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Music): The shared Music folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PICTURESCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Pictures): The shared Pictures folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PICTURESCOMMON@</strong></p></td>
         <td><p>(All Users Directory\Pictures): The shared Pictures folder.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROFILECOMMON@</strong></p></td>
         <td><p>(All Users Directory): The folder that stores shared profile data.</p></td>
      </tr>
      <tr>
         <td><p><strong>@PROFILECOMMON@</strong></p></td>
         <td><p>(All Users Directory): The folder that stores shared profile data.</p></td>
      </tr>
</table>      
