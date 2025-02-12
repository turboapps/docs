# Folder Variables

Turbo VM maps well known root folders such as **Documents** and **Program Files** based on the host operating system at runtime. 

These variables may also be used in TurboScript and as part of command-line arguments when building images or starting Turbo containers.

*Note:* Folder variables are case sensitive. They must appear in all caps to be recgonized by the command processor.

| Variable | Description |
|----------|-------------|
| **@APPDIR@** | (Application Directory): Folder where the virtual application executable resides. |
| **@WINDIR@** | (Windows): The operating system installation location root as in c:\windows. |
| **@SYSDRIVE@** | (System Drive): The root folder of the drive containing the operating system installation as in c:\. |
| **@PROGRAMFILES@** | (Program Files): The 64-bit Program Files folder. |
| **@PROGRAMFILESX86@** | (Program Files (x86)): The 32-bit Program Files folder. Program Files on 32-bit platform, and Program Files (x86) on 64-bit platform. |
| **@PROGRAMFILESCOMMON@** | (Program Files\Common): The 64-bit Program Files\Common folder. |
| **@PROGRAMFILESCOMMONX86@** | (Program Files (x86)\Common): The 32-bit Program Files folder\Common. Program Files\Common on 32-bit platform, and Program Files (x86)\Common on 64-bit platform. |
| **@APPDATACOMMON@** | (ProgramData): The folder that serves as a common repository for application-specific data shared by all users. |
| **@SYSTEM@** | (Windows\System32): The Windows 64-bit System32 folder. |
| **@SYSWOW64@** | (Windows\SysWOW64): The Windows 32-bit System32 folder. Windows\System32 on 32-bit platform and Windows\SysWOW64 on 64-bit platform. |
| **@APPDATALOCAL@** | (Current User Directory\AppData\Local): The folder that serves as a common repository for application-specific data used by the current, non-roaming user. |
| **@APPDATALOCALLOW@** | (Current User Directory\AppData\LocalLow): The folder that serves as a common repository for application-specific data used by the current, non-roaming user for applications running with the Low integrity level. |
| **@APPDATA@** | (Current User Directory\AppData\Roaming): The folder that serves as a common repository for application-specific data for the current roaming user. |
| **@STARTUP@** | (Current User Directory\Start Menu\Programs\Startup): The folder containing the current user's startup items. |
| **@PROGRAMS@** | (Current User Directory\Start Menu\Programs): The folder containing the user's program groups. |
| **@STARTMENU@** | (Current User Directory\Start Menu): The folder containing the user's Start Menu contents. |
| **@DESKTOP@** | (Current User Directory\Desktop): The current user's Desktop folder. |
| **@TEMPLATES@** | (Current User Directory\Templates): The folder that serves as a common repository for the current user's document templates. |
| **@FAVORITES@** | (Current User Directory\Favorites): The current user's Favorites folder. |
| **@DOCUMENTS@** | (Current User Directory\Documents): The current user's Documents folder. |
| **@MUSIC@** | (Current User Directory\Music): The current user's Music folder. |
| **@PICTURES@** | (Current User Directory\Pictures): The current user's Pictures folder. |
| **@VIDEOS@** | (Current User Directory\Videos): The current user's Videos folder. |
| **@DOWNLOADS@** | (Current User Directory\Downloads): The current user's Downloads folder. |
| **@PROFILE@** | (Current User Directory): The folder that stores the current user's profile data. |
| **@STARTUPCOMMON@** | (All Users Directory\Start Menu\Programs\Startup): The folder containing startup items for all users. |
| **@PROGRAMSCOMMON@** | (All Users Directory\Start Menu\Programs): The folder containing components shared across applications. |
| **@STARTMENUCOMMON@** | (All Users Directory\Start Menu): The folder containing the Start Menu contents for all users. |
| **@DESKTOPCOMMON@** | (All Users Directory\Desktop): The shared Desktop folder. |
| **@TEMPLATESCOMMON@** | (All Users Directory\Templates): The folder that serves as a common repository for shared document templates. |
| **@FAVORITESCOMMON@** | (All Users Directory\Favorites): The shared Favorites folder. |
| **@DOCUMENTSCOMMON@** | (All Users Directory\Documents): The shared Documents folder. |
| **@MUSICCOMMON@** | (All Users Directory\Music): The shared Music folder. |
| **@PICTURESCOMMON@** | (All Users Directory\Pictures): The shared Pictures folder. |
| **@VIDEOSCOMMON@** | (All Users Directory\Videos): The shared Videos folder. |
| **@PROFILECOMMON@** | (All Users Directory): The folder that stores shared profile data. |
