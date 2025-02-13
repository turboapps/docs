import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function generateReleaseVersions(product) {
  const releasesPath = path.resolve(__dirname, `../src/releases/${product}`)
  if (!fs.existsSync(releasesPath)) return []
  
  return fs.readdirSync(releasesPath)
    .filter(file => fs.statSync(path.join(releasesPath, file)).isDirectory())
    .sort((a, b) => b.localeCompare(a)) // Sort versions in descending order
    .map(version => ({
      text: version,
      link: `/releases/${product}/${version}/release_notes`
    }))
}

export default defineConfig({
  title: 'Turbo Documentation',
  description: 'Official documentation for Turbo',
  srcDir: './src',
  
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    server: {
      allowedHosts: [
        'docs-stage.turbo.net',
        'docs.turbo.net'
      ]
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Client', link: '/client/' },
      { text: 'Studio', link: '/studio/' },
      { text: 'Server', link: '/server/' },
      { text: 'Deploying', link: '/deploying/' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/getting-started/' },
            { text: 'Getting Started Guide', link: '/getting-started/guide' },
            { text: 'Advanced Usage', link: '/getting-started/advanced' }
          ]
        }
      ],
      '/client/': [
        {
          text: 'Client',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/client/' },
            {
              text: 'Command Line',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/client/command-line/' },
                { text: 'build', link: '/client/command-line/build' },
                { text: 'cache', link: '/client/command-line/cache' },
                { text: 'commit', link: '/client/command-line/commit' },
                { text: 'config', link: '/client/command-line/config' },
                { text: 'containers', link: '/client/command-line/containers' },
                { text: 'continue', link: '/client/command-line/continue' },
                { text: 'copyi', link: '/client/command-line/copyi' },
                { text: 'cp', link: '/client/command-line/cp' },
                { text: 'diff', link: '/client/command-line/diff' },
                { text: 'export', link: '/client/command-line/export' },
                { text: 'fork', link: '/client/command-line/fork' },
                { text: 'gc', link: '/client/command-line/gc' },
                { text: 'gc shortcuts', link: '/client/command-line/gc-shortcuts' },
                { text: 'gcc', link: '/client/command-line/gcc' },
                { text: 'gci', link: '/client/command-line/gci' },
                { text: 'gcl', link: '/client/command-line/gcl' },
                { text: 'help', link: '/client/command-line/help' },
                { text: 'history', link: '/client/command-line/history' },
                { text: 'images', link: '/client/command-line/images' },
                { text: 'import', link: '/client/command-line/import' },
                { text: 'inspect', link: '/client/command-line/inspect' },
                { text: 'install', link: '/client/command-line/install' },
                { text: 'installed', link: '/client/command-line/installed' },
                { text: 'installi', link: '/client/command-line/installi' },
                { text: 'kill', link: '/client/command-line/kill' },
                { text: 'login', link: '/client/command-line/login' },
                { text: 'logout', link: '/client/command-line/logout' },
                { text: 'logs', link: '/client/command-line/logs' },
                { text: 'netstat', link: '/client/command-line/netstat' },
                { text: 'new', link: '/client/command-line/new' },
                { text: 'ps', link: '/client/command-line/ps' },
                { text: 'pull', link: '/client/command-line/pull' },
                { text: 'push', link: '/client/command-line/push' },
                { text: 'release', link: '/client/command-line/release' },
                { text: 'releases', link: '/client/command-line/releases' },
                { text: 'resume', link: '/client/command-line/resume' },
                { text: 'revert', link: '/client/command-line/revert' },
                { text: 'rm', link: '/client/command-line/rm' },
                { text: 'rmi', link: '/client/command-line/rmi' },
                { text: 'run', link: '/client/command-line/run' },
                { text: 'save', link: '/client/command-line/save' },
                { text: 'search', link: '/client/command-line/search' },
                { text: 'sessions', link: '/client/command-line/sessions' },
                { text: 'start', link: '/client/command-line/start' },
                { text: 'stop', link: '/client/command-line/stop' },
                { text: 'subscribe', link: '/client/command-line/subscribe' },
                { text: 'subscription', link: '/client/command-line/subscription' },
                { text: 'subscriptions', link: '/client/command-line/subscriptions' },
                { text: 'suspend', link: '/client/command-line/suspend' },
                { text: 'try', link: '/client/command-line/try' },
                { text: 'uninstall', link: '/client/command-line/uninstall' },
                { text: 'uninstalli', link: '/client/command-line/uninstalli' },
                { text: 'unsubscribe', link: '/client/command-line/unsubscribe' },
                { text: 'version', link: '/client/command-line/version' },
                { text: 'vm', link: '/client/command-line/vm' },
                { text: 'vms', link: '/client/command-line/vms' }
              ]
            },
            { text: 'Examples', link: '/client/examples' },
            { text: 'Security', link: '/client/security' },
            { text: 'Sandbox Manager', link: '/client/sandbox-manager' },
            {
              text: 'TurboScript',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/client/turboscript/' },
                { text: 'batch', link: '/client/turboscript/batch' },
                { text: 'cmd', link: '/client/turboscript/cmd' },
                { text: 'copy', link: '/client/turboscript/copy' },
                { text: 'disable', link: '/client/turboscript/disable' },
                { text: 'echo', link: '/client/turboscript/echo' },
                { text: 'enable', link: '/client/turboscript/enable' },
                { text: 'env', link: '/client/turboscript/env' },
                { text: 'hosts', link: '/client/turboscript/hosts' },
                { text: 'import', link: '/client/turboscript/import' },
                { text: 'isolate', link: '/client/turboscript/isolate' },
                { text: 'layer', link: '/client/turboscript/layer' },
                { text: 'meta', link: '/client/turboscript/meta' },
                { text: 'require', link: '/client/turboscript/require' },
                { text: 'requires', link: '/client/turboscript/requires' },
                { text: 'route', link: '/client/turboscript/route' },
                { text: 'setworkdir', link: '/client/turboscript/setworkdir' },
                { text: 'shellextension', link: '/client/turboscript/shellextension' },
                { text: 'startup', link: '/client/turboscript/startup' },
                { text: 'sync', link: '/client/turboscript/sync' },
                { text: 'using', link: '/client/turboscript/using' },
                { text: 'var', link: '/client/turboscript/var' },
                { text: 'workdir', link: '/client/turboscript/workdir' }
              ]
            },
            { text: 'Turbo Play', link: '/client/turbo-play' },
            {
              text: 'Turbo VM',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/client/turbo-vm/' },
                { text: 'Folder Variables', link: '/client/turbo-vm/folder-variables' },
                { text: 'Runtime Settings', link: '/client/turbo-vm/runtime-settings' },
                { text: 'XML Configuration', link: '/client/turbo-vm/xml-configuration' },
                { text: 'Advanced Topics', link: '/client/turbo-vm/dep-compatibility' },
                {
                  text: 'Troubleshooting',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/client/turbo-vm/troubleshooting/troubleshooting' },
                    { text: 'Analyzing Logs', link: '/client/turbo-vm/troubleshooting/analyzing-logs' },
                    { text: 'Antivirus & Security', link: '/client/turbo-vm/troubleshooting/antivirus-security' },
                    { text: 'Common Errors', link: '/client/turbo-vm/troubleshooting/common-errors' },
                    { text: 'Debugging', link: '/client/turbo-vm/troubleshooting/debugging' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/studio/': [
        {
          text: 'Studio',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/studio/' },
            {
              text: 'Working with Turbo Studio',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/studio/working-with-turbo-studio/' },
                { text: 'Clean Capture System', link: '/studio/working-with-turbo-studio/clean-capture-system' },
                { text: 'Command Line', link: '/studio/working-with-turbo-studio/command-line' },
                { text: 'Configuration', link: '/studio/working-with-turbo-studio/configuration' },
                { text: 'Debugger', link: '/studio/working-with-turbo-studio/debugger' },
                { text: 'Desktop', link: '/studio/working-with-turbo-studio/desktop' },
                { text: 'Import Configuration', link: '/studio/working-with-turbo-studio/import-configuration' },
                { text: 'Setup Capture', link: '/studio/working-with-turbo-studio/setup-capture' },
                { text: 'Snapshots', link: '/studio/working-with-turbo-studio/snapshots' },
                { text: 'Standalone Executables', link: '/studio/working-with-turbo-studio/standalone-executables' },
                { text: 'Studio Azure', link: '/studio/working-with-turbo-studio/studio-azure' }
              ]
            },
            {
              text: 'Working with Containers',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/studio/working-with-containers/' },
                { text: 'IP Routing', link: '/studio/working-with-containers/ip-routing' },
                { text: 'Tips', link: '/studio/working-with-containers/tips' }
              ]
            },
            {
              text: 'Continuous Integration',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/studio/continuous-integration/' },
                { text: 'Using Turbo Studio Snapshot', link: '/studio/continuous-integration/using-turbo-studio-snapshot' }
              ]
            },
            {
              text: 'Scenarios',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/studio/scenarios/' },
                { text: 'Browser Ad Blocking', link: '/studio/scenarios/browser-ad-blocking' },
                { text: 'Integration with Native Apps', link: '/studio/scenarios/integration-with-native-applications' },
                { text: 'Legacy IE and Java', link: '/studio/scenarios/legacy-internet-explorer-and-java' },
                { text: 'Legacy SQL Server', link: '/studio/scenarios/legacy-sql-server' },
                { text: '.NET Core', link: '/studio/scenarios/microsoft-net-core' },
                { text: 'Office 2010', link: '/studio/scenarios/microsoft-office-2010' },
                { text: 'SQL Test Labs', link: '/studio/scenarios/sql-test-lab-environments' },
                { text: 'TurboNet Build Scripts', link: '/studio/scenarios/turbonet-build-scripts' }
              ]
            },
            {
              text: 'Advanced Topics',
              collapsed: true,
              items: [
                { text: 'Large Applications', link: '/studio/advanced-topics/' },
                { text: 'Startup/Shutdown Scripts', link: '/studio/advanced-topics/startupshutdown-scripts-and-shims' }
              ]
            }
          ]
        }
      ],
      '/server/': [
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/server/' },
            {
              text: 'Setup and Deployment',
              collapsed: true,
              items: [
                { text: 'Prerequisites', link: '/server/setup-and-deployment/prerequisites' },
                { text: 'Deploying On-Premises', link: '/server/setup-and-deployment/deploying-on-premises' },
                { text: 'Deploying to Azure', link: '/server/setup-and-deployment/deploying-to-azure' },
                { text: 'External Application Server', link: '/server/setup-and-deployment/deploying-external-application-server' },
                { text: 'VDI', link: '/server/setup-and-deployment/VDI' }
              ]
            },
            {
              text: 'Administration',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/server/administration/index' },
                { text: 'Domain', link: '/server/administration/domain' },
                { text: 'General', link: '/server/administration/general' },
                { text: 'Hub', link: '/server/administration/hub' },
                { text: 'Integrations', link: '/server/administration/integrations' },
                { text: 'Reports', link: '/server/administration/reports' },
                { text: 'Storage', link: '/server/administration/storage' },
                { text: 'Users', link: '/server/administration/users' },
                { text: 'Workspaces', link: '/server/administration/workspaces' }
              ]
            },
            {
              text: 'Applications',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/server/applications/index' },
                { text: 'Access Control', link: '/server/applications/access-control' },
                { text: 'KMS Licensing', link: '/server/applications/kms-licensing' }
              ]
            },
            {
              text: 'Authentication',
              collapsed: true,
              items: [
                { text: 'ADFS', link: '/server/authentication/adfs' },
                { text: 'Azure AD (OpenID)', link: '/server/authentication/azuread-openid-connect' },
                { text: 'Azure AD (SAML)', link: '/server/authentication/azuread-saml' },
                { text: 'Duo (SAML)', link: '/server/authentication/duo-saml' },
                { text: 'Google LDAP', link: '/server/authentication/google-ldap' },
                { text: 'IWA', link: '/server/authentication/iwa' },
                { text: 'Kerberos', link: '/server/authentication/kerberos' },
                { text: 'Okta (SAML)', link: '/server/authentication/okta-saml' },
                { text: 'OpenID Connect', link: '/server/authentication/openid-connect' },
                { text: 'SAML', link: '/server/authentication/saml' }
              ]
            },
            { text: 'Backup and Recovery', link: '/server/backup-and-recovery' },
            {
              text: 'Cloud Storage',
              collapsed: true,
              items: [
                { text: 'End User Guide', link: '/server/cloud-storage/end-user' },
                { text: 'Dropbox', link: '/server/cloud-storage/dropbox' },
                { text: 'File Share', link: '/server/cloud-storage/file-share' },
                { text: 'Files API', link: '/server/cloud-storage/files-api' },
                { text: 'Filr', link: '/server/cloud-storage/filr' },
                { text: 'Google Drive', link: '/server/cloud-storage/google-drive' },
                { text: 'OneDrive', link: '/server/cloud-storage/onedrive' }
              ]
            },
            { text: 'Peer to Peer', link: '/server/peer-to-peer' },
            {
              text: 'Integrations',
              collapsed: true,
              items: [
                { text: 'Blackboard Learn', link: '/server/integrations/blackboard-learn' },
                { text: 'Canvas LMS', link: '/server/integrations/canvas-lms' },
                { text: 'Moodle', link: '/server/integrations/moodle' },
                { text: 'OpenAI', link: '/server/integrations/openai' }
              ]
            },
            { text: 'Licensing', link: '/server/licensing' },
            { text: 'Logs', link: '/server/logs' },
            { text: 'Monitoring', link: '/server/monitoring' },
            { text: 'Network and Load Balancing', link: '/server/network-and-load-balancing' },
            { text: 'Optimization', link: '/server/optimization' },
            {
              text: 'Portal',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/server/portal/index' },
                { text: 'Dashboard', link: '/server/portal/dashboard' },
                { text: 'HTML5 Client', link: '/server/portal/html5-client' },
                { text: 'Running Applications', link: '/server/portal/running-applications' },
                { text: 'User Settings', link: '/server/portal/user-settings' }
              ]
            },
            { text: 'Security', link: '/server/security' },
            {
              text: 'Advanced Topics',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/server/advanced-topics/index' },
                { text: 'Command Line Management', link: '/server/advanced-topics/command-line-management' },
                { text: 'Federation', link: '/server/advanced-topics/federation' },
                { text: 'Hub Storage', link: '/server/advanced-topics/hub-storage' },
                { text: 'Image Streaming', link: '/server/advanced-topics/image-streaming' },
                { text: 'Launch Configuration', link: '/server/advanced-topics/launch-configuration-web-service' },
                { text: 'Security', link: '/server/advanced-topics/security' },
                { text: 'Setup', link: '/server/advanced-topics/setup' },
                { text: 'SSL', link: '/server/advanced-topics/ssl' }
              ]
            },
            {
              text: 'Troubleshooting',
              collapsed: true,
              items: [
                { text: 'Administration', link: '/server/troubleshooting/admininstration' },
                { text: 'Application', link: '/server/troubleshooting/application' },
                { text: 'Application Server', link: '/server/troubleshooting/application-server' },
                { text: 'Application Streaming', link: '/server/troubleshooting/application-streaming' },
                { text: 'End User', link: '/server/troubleshooting/end-user' },
                { text: 'Hub Server', link: '/server/troubleshooting/hub-server' },
                { text: 'Performance', link: '/server/troubleshooting/performance' },
                { text: 'Single Sign On', link: '/server/troubleshooting/sso' },
                { text: 'SSL', link: '/server/troubleshooting/ssl-troubleshooting' }
              ]
            },
            {
              text: 'Upgrading',
              collapsed: true,
              items: [
                { text: 'Upgrading Guide', link: '/server/upgrading/' },
                { text: 'Releases', link: '/server/upgrading/releases' },
                { text: '21.3.2732.2 Migration', link: '/server/upgrading/21-3-2732-2-migration-guide' }
              ]
            }
          ]
        }
      ],
      '/releases/': [
        {
          text: 'Client',
          collapsed: true,
          items: generateReleaseVersions('client')
        },
        {
          text: 'Server',
          collapsed: true,
          items: generateReleaseVersions('server')
        },
        {
          text: 'Studio',
          collapsed: true,
          items: generateReleaseVersions('studio')
        },
        {
          text: 'VM',
          collapsed: true,
          items: generateReleaseVersions('vm')
        }
      ],
      '/deploying/': [
        {
          text: 'Deploying',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/deploying/' },
            {
              text: 'Studio',
              collapsed: true,
              items: [
                { text: 'Building Executables', link: '/deploying/studio/studio-builds' }
              ]
            },
            {
              text: 'Client',
              collapsed: true,
              items: [
                { text: 'Using Turbo Client', link: '/deploying/client/turbo-client' }
              ]
            },
            {
              text: 'Server',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/deploying/server/index' },
                { text: 'API Keys', link: '/deploying/server/api-keys' },
                { text: 'Hub Setup', link: '/deploying/server/hub-setup' },
                { text: 'Workspaces', link: '/deploying/server/workspaces' },
                { text: 'Subscriptions', link: '/deploying/server/subscriptions' }
              ]
            },
            {
              text: 'Platform Integrations',
              collapsed: true,
              items: [
                { text: 'AWS AppStream', link: '/deploying/integrations/aws-appstream' },
                {
                  text: 'Citrix',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/deploying/integrations/citrix-guide/' },
                    { text: 'Command Line', link: '/deploying/integrations/citrix-guide/command-line' },
                    { text: 'Scripts', link: '/deploying/integrations/citrix-guide/scripts' }
                  ]
                },
                { text: 'Intune', link: '/deploying/integrations/intune' },
                { text: 'Parallels RAS', link: '/deploying/integrations/parallels-ras' },
                { text: 'System Center', link: '/deploying/integrations/system-center' }
              ]
            }
          ]
        }
      ]
    }
  }
})
