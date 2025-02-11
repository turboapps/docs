import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Turbo Documentation',
  description: 'Official documentation for Turbo',
  srcDir: './src', // Set the root directory for documentation

  themeConfig: {
    nav: [
      { text: 'About', link: '/about/what-is-turbo/what-is-turbo' },
      { text: 'Getting Started', link: '/getting-started/getting-started/getting-started' },
      { text: 'Hub', link: '/hub/overview/hub' },
      { text: 'Studio', link: '/studio/overview/overview' },
      { text: 'Server', link: '/server/overview/overview' },
      { text: 'Reference', link: '/reference/command-line/command-line-interface' },
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
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/getting-started/getting-started/getting-started' },
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
            { text: 'Developers', link: '/getting-started/developers/net-and-java' },
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
            { text: 'Repositories', link: '/hub/repositories/repositories' },
            { text: 'Templates', link: '/hub/templates/templates' },
            { text: 'Working with Images', link: '/hub/working-with-images/creating-images' },
          ]
        }
      ],
      '/studio/': [
        {
          text: 'Studio',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/studio/overview/overview' },
            { text: 'Working with Turbo Studio', link: '/studio/working-with-turbo-studio/getting-started' },
            { text: 'Working with Containers', link: '/studio/working-with-containers/containers' },
            { text: 'Continuous Integration', link: '/studio/continuous-integration/continuous-integration' },
            { text: 'Scenarios', link: '/studio/scenarios/browser-ad-blocking' },
            { text: 'Advanced Topics', link: '/studio/advanced-topics/large-applications' },
          ]
        }
      ],
      '/server/': [
        {
          text: 'Server',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/server/overview/overview' },
            { text: 'Setup and Deployment', link: '/server/setup-and-deployment/deploying-on-premises' },
            { text: 'Administration', link: '/server/administration/overview' },
            { text: 'Applications', link: '/server/applications/overview' },
            { text: 'Authentication', link: '/server/authentication/adfs' },
            { text: 'Portal', link: '/server/portal/overview' },
            { text: 'Cloud Storage', link: '/server/cloud-storage/end-user' },
            { text: 'Advanced Topics', link: '/server/advanced-topics/advanced-topics' },
            { text: 'Troubleshooting', link: '/server/troubleshooting/admininstration' },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'Command Line', link: '/reference/command-line/command-line-interface' },
            { text: 'TurboScript', link: '/reference/turboscript/turboscript' },
            { text: 'Dependencies', link: '/reference/dependencies/dependencies' },
            { text: 'Turbo Client', link: '/reference/turbo-client/turbo-client' },
            { text: 'Turbo Desktop', link: '/reference/turbo-desktop/turbo-desktop' },
            { text: 'Turbo Play', link: '/reference/turbo-play/turbo-play' },
            { text: 'Turbo Shell', link: '/reference/turbo-shell/turbo-shell' },
          ]
        }
      ],
      '/vm/': [
        {
          text: 'VM',
          collapsed: false,
          items: [
            { text: 'Virtual Machine', link: '/vm/virtual-machine/virtual-machine' },
            { text: 'XML Configuration', link: '/vm/xml-configuration/xml-configuration' },
            { text: 'Advanced Topics', link: '/vm/advanced-topics/dep-compatibility' },
            { text: 'Troubleshooting', link: '/vm/troubleshooting/troubleshooting' },
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
          link: '/deploying/overview/overview'
        }
      ],
    }
  }
})
