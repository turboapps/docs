import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Turbo Documentation',
  description: 'Official documentation for Turbo',
  srcDir: './src', // Set the root directory for documentation

  themeConfig: {
    // Enable the default search feature
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/getting-started/getting-started' },
      { text: 'Hub', link: '/hub/overview/hub' },
      { text: 'Deploying', link: '/deploying/overview/overview' },
      { text: 'Studio', link: '/studio/overview/overview' },
      { text: 'Server', link: '/server/overview/overview' },
      { text: 'VM', link: '/vm/virtual-machine/virtual-machine' },
      { text: 'Reference', link: '/reference/command-line/command-line-interface' },
      { text: 'About', link: '/about/what-is-turbo/what-is-turbo' }
    ],
    sidebar: {
      '/about/': [
        {
          text: 'About',
          collapsed: false,
          items: [
            { text: 'What is Turbo', link: '/about/what-is-turbo/what-is-turbo' },
            { text: 'Turbo and Docker', link: '/about/turbo-and-docker/turbo-and-docker' },
            { text: 'Turbo and App Virtualization', link: '/about/turbo-and-app-virtualization/turbo-and-app-virtualization' },
            { text: 'Contribute to Turbo', link: '/about/contribute-to-turbo/contribute-to-turbo' },
          ]
        }
      ],
      '/getting-started/': [
        {
          collapsed: false,
          items: [
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/getting-started/getting-started/getting-started' },
                { text: 'Running Applications', link: '/getting-started/getting-started/running-applications' },
              ]
            },
            {
              text: 'Administrators',
              collapsed: false,
              items: [
                { text: 'Advanced Topics', link: '/getting-started/administrators/advanced-topics' },
                { text: 'Automation', link: '/getting-started/administrators/automation' },
                { text: 'Creating Images', link: '/getting-started/administrators/creating-images' },
                { text: 'Desktop Integration', link: '/getting-started/administrators/desktop-integration' },
                { text: 'Networking', link: '/getting-started/administrators/networking' },
                { text: 'Turbo on Citrix and RDS', link: '/getting-started/administrators/turbo-on-citrix-and-rds' },
              ]
            },
            { text: 'Advanced Settings', link: '/getting-started/advanced-settings/advanced-settings' },
            {
              text: 'Developers',
              collapsed: false,
              items: [
                { text: '.NET and Java', link: '/getting-started/developers/net-and-java' },
                { text: 'Servers', link: '/getting-started/developers/servers' },
                { text: 'Web Applications', link: '/getting-started/developers/web-applications' },
              ]
            },
            { text: 'Printing', link: '/getting-started/printing/printing' },
            { text: 'Using Files', link: '/getting-started/using-files/using-files' },
          ]
        }
      ],
      '/hub/': [
        {
          text: 'Hub',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/hub/overview/hub' },
            { text: 'Command Line Interface', link: '/hub/command-line-interface/command-line-interface' },
            {
              text: 'Repositories',
              collapsed: false,
              items: [
                { text: 'Repositories', link: '/hub/repositories/repositories' },
                { text: 'Repository Settings', link: '/hub/repositories/repository-settings' },
              ]
            },
            { text: 'Templates', link: '/hub/templates/templates' },
            {
              text: 'Working with Images',
              collapsed: false,
              items: [
                { text: 'Creating Images', link: '/hub/working-with-images/creating-images' },
                { text: 'Creating Layers', link: '/hub/working-with-images/creating-layers' },
              ]
            },
          ]
        }
      ],
      '/studio/': [
        {
          text: 'Studio',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/studio/overview/overview' },
            {
              text: 'Working with Turbo Studio',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/studio/working-with-turbo-studio/getting-started' },
                { text: 'Clean Capture System', link: '/studio/working-with-turbo-studio/clean-capture-system' },
                { text: 'Command Line', link: '/studio/working-with-turbo-studio/command-line' },
                { text: 'Configuration', link: '/studio/working-with-turbo-studio/configuration' },
                { text: 'Debugger', link: '/studio/working-with-turbo-studio/debugger' },
                { text: 'Desktop', link: '/studio/working-with-turbo-studio/desktop' },
                { text: 'Import Configuration', link: '/studio/working-with-turbo-studio/import-configuration' },
                { text: 'Setup Capture', link: '/studio/working-with-turbo-studio/setup-capture' },
                { text: 'Snapshots', link: '/studio/working-with-turbo-studio/snapshots' },
                { text: 'Standalone Executables', link: '/studio/working-with-turbo-studio/standalone-executables' },
                { text: 'Studio Azure', link: '/studio/working-with-turbo-studio/studio-azure' },
              ]
            },
            {
              text: 'Working with Containers',
              collapsed: false,
              items: [
                { text: 'Containers', link: '/studio/working-with-containers/containers' },
                { text: 'IP Routing', link: '/studio/working-with-containers/ip-routing' },
                { text: 'Tips', link: '/studio/working-with-containers/tips' },
              ]
            },
            {
              text: 'Continuous Integration',
              collapsed: false,
              items: [
                { text: 'Continuous Integration', link: '/studio/continuous-integration/continuous-integration' },
                { text: 'Using Turbo Studio Snapshot', link: '/studio/continuous-integration/using-turbo-studio-snapshot' },
              ]
            },
            {
              text: 'Scenarios',
              collapsed: false,
              items: [
                { text: 'Browser Ad Blocking', link: '/studio/scenarios/browser-ad-blocking' },
                { text: 'Integration with Native Applications', link: '/studio/scenarios/integration-with-native-applications' },
                { text: 'Legacy Internet Explorer and Java', link: '/studio/scenarios/legacy-internet-explorer-and-java' },
                { text: 'Legacy SQL Server', link: '/studio/scenarios/legacy-sql-server' },
                { text: 'Microsoft .NET Core', link: '/studio/scenarios/microsoft-net-core' },
                { text: 'Microsoft Office 2010', link: '/studio/scenarios/microsoft-office-2010' },
                { text: 'SQL Test Lab Environments', link: '/studio/scenarios/sql-test-lab-environments' },
                { text: 'TurboNet Build Scripts', link: '/studio/scenarios/turbonet-build-scripts' },
              ]
            },
            {
              text: 'Advanced Topics',
              collapsed: false,
              items: [
                { text: 'Large Applications', link: '/studio/advanced-topics/large-applications' },
                { text: 'Startup/Shutdown Scripts and Shims', link: '/studio/advanced-topics/startupshutdown-scripts-and-shims' },
              ]
            },
          ]
        }
      ],
      '/server/': [
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/server/overview/overview' },
            {
              text: 'Setup and Deployment',
              collapsed: false,
              items: [
                { text: 'Prerequisites', link: '/server/setup-and-deployment/prerequisites' },
                { text: 'Deploying On-Premises', link: '/server/setup-and-deployment/deploying-on-premises' },
                { text: 'Deploying to Azure', link: '/server/setup-and-deployment/deploying-to-azure' },
                { text: 'Deploying External Application Server', link: '/server/setup-and-deployment/deploying-external-application-server' },
                { text: 'VDI', link: '/server/setup-and-deployment/VDI' },
              ]
            },
            {
              text: 'Administration',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/server/administration/overview' },
                { text: 'Domain', link: '/server/administration/domain' },
                { text: 'General', link: '/server/administration/general' },
                { text: 'Hub', link: '/server/administration/hub' },
                { text: 'Integrations', link: '/server/administration/integrations' },
                { text: 'Reports', link: '/server/administration/reports' },
                { text: 'Storage', link: '/server/administration/storage' },
                { text: 'Users', link: '/server/administration/users' },
                { text: 'Workspaces', link: '/server/administration/workspaces' },
              ]
            },
            {
              text: 'Applications',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/server/applications/overview' },
                { text: 'Access Control', link: '/server/applications/access-control' },
                { text: 'KMS Licensing', link: '/server/applications/kms-licensing' },
              ]
            },
            {
              text: 'Authentication',
              collapsed: false,
              items: [
                { text: 'ADFS', link: '/server/authentication/adfs' },
                { text: 'Azure AD OpenID Connect', link: '/server/authentication/azuread-openid-connect' },
                { text: 'Azure AD SAML', link: '/server/authentication/azuread-saml' },
                { text: 'Duo SAML', link: '/server/authentication/duo-saml' },
                { text: 'Google LDAP', link: '/server/authentication/google-ldap' },
                { text: 'IWA', link: '/server/authentication/iwa' },
                { text: 'Kerberos', link: '/server/authentication/kerberos' },
                { text: 'Okta SAML', link: '/server/authentication/okta-saml' },
                { text: 'OpenID Connect', link: '/server/authentication/openid-connect' },
                { text: 'SAML', link: '/server/authentication/saml' },
              ]
            },
            {
              text: 'Portal',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/server/portal/overview' },
                { text: 'Dashboard', link: '/server/portal/dashboard' },
                { text: 'HTML5 Client', link: '/server/portal/html5-client' },
                { text: 'Running Applications', link: '/server/portal/running-applications' },
                { text: 'User Settings', link: '/server/portal/user-settings' },
              ]
            },
            {
              text: 'Cloud Storage',
              collapsed: false,
              items: [
                { text: 'End User', link: '/server/cloud-storage/end-user' },
                { text: 'Dropbox', link: '/server/cloud-storage/dropbox' },
                { text: 'File Share', link: '/server/cloud-storage/file-share' },
                { text: 'Files API', link: '/server/cloud-storage/files-api' },
                { text: 'Filr', link: '/server/cloud-storage/filr' },
                { text: 'Google Drive', link: '/server/cloud-storage/google-drive' },
                { text: 'OneDrive', link: '/server/cloud-storage/onedrive' },
              ]
            },
            {
              text: 'Advanced Topics',
              collapsed: false,
              items: [
                { text: 'Advanced Topics', link: '/server/advanced-topics/advanced-topics' },
                { text: 'Command Line Management', link: '/server/advanced-topics/command-line-management' },
                { text: 'Federation', link: '/server/advanced-topics/federation' },
                { text: 'Hub Storage', link: '/server/advanced-topics/hub-storage' },
                { text: 'Image Streaming', link: '/server/advanced-topics/image-streaming' },
                { text: 'Launch Configuration Web Service', link: '/server/advanced-topics/launch-configuration-web-service' },
                { text: 'Security', link: '/server/advanced-topics/security' },
                { text: 'Setup', link: '/server/advanced-topics/setup' },
                { text: 'SSL', link: '/server/advanced-topics/ssl' },
              ]
            },
            {
              text: 'Troubleshooting',
              collapsed: false,
              items: [
                { text: 'Administration', link: '/server/troubleshooting/admininstration' },
                { text: 'Application Server', link: '/server/troubleshooting/application-server' },
                { text: 'Application Streaming', link: '/server/troubleshooting/application-streaming' },
                { text: 'Application', link: '/server/troubleshooting/application' },
                { text: 'End User', link: '/server/troubleshooting/end-user' },
                { text: 'Hub Server', link: '/server/troubleshooting/hub-server' },
                { text: 'Performance', link: '/server/troubleshooting/performance' },
                { text: 'SSL Troubleshooting', link: '/server/troubleshooting/ssl-troubleshooting' },
                { text: 'SSO', link: '/server/troubleshooting/sso' },
              ]
            },
            { text: 'Backup and Recovery', link: '/server/backup-and-recovery/backup-and-recovery' },
            { text: 'Image Distribution', link: '/server/image-distribution/peer-to-peer' },
            {
              text: 'Integrations',
              collapsed: false,
              items: [
                { text: 'Blackboard Learn', link: '/server/integrations/blackboard-learn' },
                { text: 'Canvas LMS', link: '/server/integrations/canvas-lms' },
                { text: 'Moodle', link: '/server/integrations/moodle' },
                { text: 'OpenAI', link: '/server/integrations/openai' },
              ]
            },
            { text: 'Licensing', link: '/server/licensing/licensing' },
            { text: 'Logs', link: '/server/logs/logs' },
            { text: 'Monitoring', link: '/server/monitoring/monitoring' },
            { text: 'Network and Load Balancing', link: '/server/network-and-load-balancing/network-and-load-balancing' },
            { text: 'Optimization', link: '/server/optimization/optimization' },
            {
              text: 'Security',
              collapsed: false,
              items: [
                { text: 'Security', link: '/server/security/security' },
                { text: 'Password Policy', link: '/server/security/password-policy' },
              ]
            },
            {
              text: 'Upgrading',
              collapsed: false,
              items: [
                { text: 'Upgrading', link: '/server/upgrading/upgrading' },
                { text: 'Releases', link: '/server/upgrading/releases' },
                { text: '21.3.2732.2 Migration Guide', link: '/server/upgrading/21-3-2732-2-migration-guide' },
              ]
            },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          collapsed: false,
          items: [
            {
              text: 'Command Line',
              collapsed: false,
              items: [
                { text: 'Command Line Interface', link: '/reference/command-line/command-line-interface' },
                { text: 'Build', link: '/reference/command-line/build' },
                { text: 'Cache', link: '/reference/command-line/cache' },
                { text: 'Commit', link: '/reference/command-line/commit' },
                { text: 'Config', link: '/reference/command-line/config' },
                { text: 'Containers', link: '/reference/command-line/containers' },
                { text: 'Continue', link: '/reference/command-line/continue' },
                { text: 'Copyi', link: '/reference/command-line/copyi' },
                { text: 'Cp', link: '/reference/command-line/cp' },
                { text: 'Diff', link: '/reference/command-line/diff' },
                { text: 'Export', link: '/reference/command-line/export' },
                { text: 'Fork', link: '/reference/command-line/fork' },
                { text: 'GC Shortcuts', link: '/reference/command-line/gc-shortcuts' },
                { text: 'GC', link: '/reference/command-line/gc' },
                { text: 'GCC', link: '/reference/command-line/gcc' },
                { text: 'GCI', link: '/reference/command-line/gci' },
                { text: 'GCL', link: '/reference/command-line/gcl' },
                { text: 'Help', link: '/reference/command-line/help' },
                { text: 'History', link: '/reference/command-line/history' },
                { text: 'Images', link: '/reference/command-line/images' },
                { text: 'Import', link: '/reference/command-line/import' },
                { text: 'Inspect', link: '/reference/command-line/inspect' },
                { text: 'Install', link: '/reference/command-line/install' },
                { text: 'Installed', link: '/reference/command-line/installed' },
                { text: 'Installi', link: '/reference/command-line/installi' },
                { text: 'Kill', link: '/reference/command-line/kill' },
                { text: 'Login', link: '/reference/command-line/login' },
                { text: 'Logout', link: '/reference/command-line/logout' },
                { text: 'Logs', link: '/reference/command-line/logs' },
                { text: 'Netstat', link: '/reference/command-line/netstat' },
                { text: 'New', link: '/reference/command-line/new' },
                { text: 'PS', link: '/reference/command-line/ps' },
                { text: 'Pull', link: '/reference/command-line/pull' },
                { text: 'Push', link: '/reference/command-line/push' },
                { text: 'Release', link: '/reference/command-line/release' },
                { text: 'Releases', link: '/reference/command-line/releases' },
                { text: 'Resume', link: '/reference/command-line/resume' },
                { text: 'Revert', link: '/reference/command-line/revert' },
                { text: 'Rm', link: '/reference/command-line/rm' },
                { text: 'Rmi', link: '/reference/command-line/rmi' },
                { text: 'Run', link: '/reference/command-line/run' },
                { text: 'Save', link: '/reference/command-line/save' },
                { text: 'Search', link: '/reference/command-line/search' },
                { text: 'Sessions', link: '/reference/command-line/sessions' },
                { text: 'Start', link: '/reference/command-line/start' },
                { text: 'Stop', link: '/reference/command-line/stop' },
                { text: 'Subscribe', link: '/reference/command-line/subscribe' },
                { text: 'Subscription', link: '/reference/command-line/subscription' },
                { text: 'Subscriptions', link: '/reference/command-line/subscriptions' },
                { text: 'Suspend', link: '/reference/command-line/suspend' },
                { text: 'Try', link: '/reference/command-line/try' },
                { text: 'Uninstall', link: '/reference/command-line/uninstall' },
                { text: 'Uninstalli', link: '/reference/command-line/uninstalli' },
                { text: 'Unsubscribe', link: '/reference/command-line/unsubscribe' },
                { text: 'Version', link: '/reference/command-line/version' },
                { text: 'VM', link: '/reference/command-line/vm' },
                { text: 'VMs', link: '/reference/command-line/vms' },
              ]
            },
            {
              text: 'TurboScript',
              collapsed: false,
              items: [
                { text: 'TurboScript', link: '/reference/turboscript/turboscript' },
                { text: 'Batch', link: '/reference/turboscript/batch' },
                { text: 'CMD', link: '/reference/turboscript/cmd' },
                { text: 'Copy', link: '/reference/turboscript/copy' },
                { text: 'Disable', link: '/reference/turboscript/disable' },
                { text: 'Echo', link: '/reference/turboscript/echo' },
                { text: 'Enable', link: '/reference/turboscript/enable' },
                { text: 'Env', link: '/reference/turboscript/env' },
                { text: 'Hosts', link: '/reference/turboscript/hosts' },
                { text: 'Import', link: '/reference/turboscript/import' },
                { text: 'Isolate', link: '/reference/turboscript/isolate' },
                { text: 'Layer', link: '/reference/turboscript/layer' },
                { text: 'Meta', link: '/reference/turboscript/meta' },
                { text: 'Require', link: '/reference/turboscript/require' },
                { text: 'Requires', link: '/reference/turboscript/requires' },
                { text: 'Route', link: '/reference/turboscript/route' },
                { text: 'Setworkdir', link: '/reference/turboscript/setworkdir' },
                { text: 'Shellextension', link: '/reference/turboscript/shellextension' },
                { text: 'Startup', link: '/reference/turboscript/startup' },
                { text: 'Sync', link: '/reference/turboscript/sync' },
                { text: 'Using', link: '/reference/turboscript/using' },
                { text: 'Var', link: '/reference/turboscript/var' },
                { text: 'Workdir', link: '/reference/turboscript/workdir' },
              ]
            },
            { text: 'Dependencies', link: '/reference/dependencies/dependencies' },
            {
              text: 'Turbo Client',
              collapsed: false,
              items: [
                { text: 'Turbo Client', link: '/reference/turbo-client/turbo-client' },
                { text: 'Turbo Client Security', link: '/reference/turbo-client/turbo-client-security' },
              ]
            },
            { text: 'Turbo Desktop', link: '/reference/turbo-desktop/turbo-desktop' },
            { text: 'Turbo Play', link: '/reference/turbo-play/turbo-play' },
            {
              text: 'Turbo Shell',
              collapsed: false,
              items: [
                { text: 'Turbo Shell', link: '/reference/turbo-shell/turbo-shell' },
                { text: 'Commit', link: '/reference/turbo-shell/commit' },
                { text: 'Push', link: '/reference/turbo-shell/push' },
              ]
            },
          ]
        }
      ],
      '/vm/': [
        {
          text: 'VM',
          collapsed: false,
          items: [
            {
              text: 'Virtual Machine',
              collapsed: false,
              items: [
                { text: 'Virtual Machine', link: '/vm/virtual-machine/virtual-machine' },
                { text: 'Folder Variables', link: '/vm/virtual-machine/folder-variables' },
                { text: 'Runtime Settings', link: '/vm/virtual-machine/runtime-settings' },
              ]
            },
            { text: 'XML Configuration', link: '/vm/xml-configuration/xml-configuration' },
            { text: 'Advanced Topics', link: '/vm/advanced-topics/dep-compatibility' },
            {
              text: 'Troubleshooting',
              collapsed: false,
              items: [
                { text: 'Troubleshooting', link: '/vm/troubleshooting/troubleshooting' },
                { text: 'Analyzing Logs', link: '/vm/troubleshooting/analyzing-logs' },
                { text: 'Antivirus Security', link: '/vm/troubleshooting/antivirus-security' },
                { text: 'Common Errors', link: '/vm/troubleshooting/common-errors' },
                { text: 'Debugging', link: '/vm/troubleshooting/debugging' },
              ]
            },
          ]
        }
      ],
      '/releases/': [
        {
          text: 'Releases',
          collapsed: false,
          items: [
            { text: 'Client', link: '/releases/client/25.1.19.1661/release_notes' },
            { text: 'Server', link: '/releases/server/24.11.2671/release_notes' },
            { text: 'Studio', link: '/releases/studio/25.1.5/release_notes' },
            { text: 'VM', link: '/releases/vm/25.1.11/release_notes' },
          ]
        }
      ],
      '/deploying/': [
        {
          text: 'Deploying',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/deploying/overview/overview' },
            { text: 'AWS AppStream 2.0', link: '/deploying/aws-appstream/aws-appstream-2.0' },
            {
              text: 'Citrix',
              collapsed: false,
              items: [
                { text: 'Citrix', link: '/deploying/citrix/citrix' },
                { text: 'Using Turbo Citrix Scripts', link: '/deploying/citrix/using-turbo-citrix-scripts' },
                { text: 'Using Turbo Command Line', link: '/deploying/citrix/using-turbo-command-line' },
              ]
            },
            { text: 'Intune', link: '/deploying/intune/intune' },
            { text: 'Offline Mode', link: '/deploying/offline-mode/offline-mode' },
            { text: 'Parallels RAS', link: '/deploying/parallels-ras/parallels-ras' },
            { text: 'Portable EXEs and MSIs', link: '/deploying/portable-exes-and-msis/portable-exes-and-msis' },
            { text: 'System Center SCCM', link: '/deploying/system-center-sccm/system-center-sccm' },
            {
              text: 'Tips',
              collapsed: false,
              items: [
                { text: 'API Keys', link: '/deploying/tips/api-keys' },
                { text: 'Windows Firewall', link: '/deploying/tips/windoww-firewall' },
              ]
            },
            {
              text: 'To a Desktop',
              collapsed: false,
              items: [
                { text: 'To a Desktop', link: '/deploying/to-a-desktop/to-a-desktop' },
                { text: 'Setting Default Apps', link: '/deploying/to-a-desktop/setting-default-apps' },
              ]
            },
            { text: 'To Turbo Server', link: '/deploying/to-turbo-server/to-turbo-server' },
            { text: 'To TurboNet', link: '/deploying/to-turbonet/to-turbonet' },
            { text: 'Turbo Client', link: '/deploying/turbo-client/turbo-client' },
          ]
        }
      ],
    }
  }
})
