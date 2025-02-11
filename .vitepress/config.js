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
  srcDir: './src', // Set the root directory for documentation
  
  // Configure asset handling
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
  },

  themeConfig: {
    // Enable the default search feature
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Studio', link: '/studio/' },
      { text: 'Server', link: '/server/' },
      { text: 'Deploying', link: '/deploying/' },
      { text: 'VM', link: '/vm/' },
      { text: 'Reference', link: '/reference/command-line/' }
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
                { text: 'Large Applications', link: '/studio/advanced-topics/large-applications' },
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
            { text: 'Setup and Deployment', link: '/server/setup-and-deployment/deploying-on-premises' },
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
            { text: 'Portal', link: '/server/portal/index' },
            { text: 'Security', link: '/server/security' },
            { text: 'Advanced Topics', link: '/server/advanced-topics/index' },
            { text: 'Troubleshooting', link: '/server/troubleshooting/admininstration' },
            { text: 'Upgrading', link: '/server/upgrading/upgrading' }
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
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/reference/command-line/' },
                { text: 'build', link: '/reference/command-line/build' },
                { text: 'cache', link: '/reference/command-line/cache' },
                { text: 'commit', link: '/reference/command-line/commit' },
                { text: 'config', link: '/reference/command-line/config' },
                { text: 'containers', link: '/reference/command-line/containers' },
                { text: 'continue', link: '/reference/command-line/continue' },
                { text: 'copyi', link: '/reference/command-line/copyi' },
                { text: 'cp', link: '/reference/command-line/cp' },
                { text: 'diff', link: '/reference/command-line/diff' },
                { text: 'export', link: '/reference/command-line/export' },
                { text: 'fork', link: '/reference/command-line/fork' },
                { text: 'gc', link: '/reference/command-line/gc' },
                { text: 'gcc', link: '/reference/command-line/gcc' },
                { text: 'gci', link: '/reference/command-line/gci' },
                { text: 'gcl', link: '/reference/command-line/gcl' },
                { text: 'help', link: '/reference/command-line/help' },
                { text: 'history', link: '/reference/command-line/history' },
                { text: 'images', link: '/reference/command-line/images' },
                { text: 'import', link: '/reference/command-line/import' },
                { text: 'inspect', link: '/reference/command-line/inspect' },
                { text: 'install', link: '/reference/command-line/install' },
                { text: 'installed', link: '/reference/command-line/installed' },
                { text: 'installi', link: '/reference/command-line/installi' },
                { text: 'kill', link: '/reference/command-line/kill' },
                { text: 'login', link: '/reference/command-line/login' },
                { text: 'logout', link: '/reference/command-line/logout' },
                { text: 'logs', link: '/reference/command-line/logs' },
                { text: 'netstat', link: '/reference/command-line/netstat' },
                { text: 'new', link: '/reference/command-line/new' },
                { text: 'ps', link: '/reference/command-line/ps' },
                { text: 'pull', link: '/reference/command-line/pull' },
                { text: 'push', link: '/reference/command-line/push' },
                { text: 'release', link: '/reference/command-line/release' },
                { text: 'releases', link: '/reference/command-line/releases' },
                { text: 'resume', link: '/reference/command-line/resume' },
                { text: 'revert', link: '/reference/command-line/revert' },
                { text: 'rm', link: '/reference/command-line/rm' },
                { text: 'rmi', link: '/reference/command-line/rmi' },
                { text: 'run', link: '/reference/command-line/run' },
                { text: 'save', link: '/reference/command-line/save' },
                { text: 'search', link: '/reference/command-line/search' },
                { text: 'sessions', link: '/reference/command-line/sessions' },
                { text: 'start', link: '/reference/command-line/start' },
                { text: 'stop', link: '/reference/command-line/stop' },
                { text: 'subscribe', link: '/reference/command-line/subscribe' },
                { text: 'subscription', link: '/reference/command-line/subscription' },
                { text: 'subscriptions', link: '/reference/command-line/subscriptions' },
                { text: 'suspend', link: '/reference/command-line/suspend' },
                { text: 'try', link: '/reference/command-line/try' },
                { text: 'uninstall', link: '/reference/command-line/uninstall' },
                { text: 'uninstalli', link: '/reference/command-line/uninstalli' },
                { text: 'unsubscribe', link: '/reference/command-line/unsubscribe' },
                { text: 'version', link: '/reference/command-line/version' },
                { text: 'vm', link: '/reference/command-line/vm' },
                { text: 'vms', link: '/reference/command-line/vms' }
              ]
            },
            {
              text: 'TurboScript',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/reference/turboscript/turboscript' },
                { text: 'batch', link: '/reference/turboscript/batch' },
                { text: 'cmd', link: '/reference/turboscript/cmd' },
                { text: 'copy', link: '/reference/turboscript/copy' },
                { text: 'disable', link: '/reference/turboscript/disable' },
                { text: 'echo', link: '/reference/turboscript/echo' },
                { text: 'enable', link: '/reference/turboscript/enable' },
                { text: 'env', link: '/reference/turboscript/env' },
                { text: 'hosts', link: '/reference/turboscript/hosts' },
                { text: 'import', link: '/reference/turboscript/import' },
                { text: 'isolate', link: '/reference/turboscript/isolate' },
                { text: 'layer', link: '/reference/turboscript/layer' },
                { text: 'meta', link: '/reference/turboscript/meta' },
                { text: 'require', link: '/reference/turboscript/require' },
                { text: 'requires', link: '/reference/turboscript/requires' },
                { text: 'route', link: '/reference/turboscript/route' },
                { text: 'setworkdir', link: '/reference/turboscript/setworkdir' },
                { text: 'shellextension', link: '/reference/turboscript/shellextension' },
                { text: 'startup', link: '/reference/turboscript/startup' },
                { text: 'sync', link: '/reference/turboscript/sync' },
                { text: 'using', link: '/reference/turboscript/using' },
                { text: 'var', link: '/reference/turboscript/var' },
                { text: 'workdir', link: '/reference/turboscript/workdir' }
              ]
            },
            { text: 'Dependencies', link: '/reference/dependencies/dependencies' },
            { text: 'Examples', link: '/reference/examples/development-examples' },
            { text: 'Turbo Client', link: '/reference/turbo-client/turbo-client' },
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
            { text: 'Introduction', link: '/vm/' },
            { text: 'Folder Variables', link: '/vm/folder-variables' },
            { text: 'Runtime Settings', link: '/vm/runtime-settings' },
            { text: 'XML Configuration', link: '/vm/xml-configuration' },
            { text: 'Advanced Topics', link: '/vm/dep-compatibility' },
            {
              text: 'Troubleshooting',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/vm/troubleshooting/troubleshooting' },
                { text: 'Analyzing Logs', link: '/vm/troubleshooting/analyzing-logs' },
                { text: 'Antivirus & Security', link: '/vm/troubleshooting/antivirus-security' },
                { text: 'Common Errors', link: '/vm/troubleshooting/common-errors' },
                { text: 'Debugging', link: '/vm/troubleshooting/debugging' }
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
            { text: 'AWS AppStream', link: '/deploying/aws-appstream' },
            {
              text: 'Citrix',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/deploying/citrix-guide/' },
                { text: 'Command Line', link: '/deploying/citrix-guide/command-line' },
                { text: 'Scripts', link: '/deploying/citrix-guide/scripts' }
              ]
            },
            {
              text: 'Desktop',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/deploying/desktop-guide/' },
                { text: 'Default Apps', link: '/deploying/desktop-guide/default-apps' }
              ]
            },
            { text: 'Intune', link: '/deploying/intune' },
            { text: 'Offline Mode', link: '/deploying/offline-mode' },
            { text: 'Parallels RAS', link: '/deploying/parallels-ras' },
            { text: 'Portable EXEs', link: '/deploying/portable-exes' },
            { text: 'System Center', link: '/deploying/system-center' },
            { text: 'Turbo Server', link: '/deploying/turbo-server' },
            { text: 'Turbo Client', link: '/deploying/turbo-client' },
            {
              text: 'Tips',
              collapsed: true,
              items: [
                { text: 'API Keys', link: '/deploying/tips/api-keys' },
                { text: 'Windows Firewall', link: '/deploying/tips/windoww-firewall' }
              ]
            }
          ]
        }
      ],
    }
  }
})
