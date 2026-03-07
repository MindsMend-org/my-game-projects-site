module.exports = {
  title: 'Folding Circles 2026',
  tagline: 'Documenting game projects, mechanics, levels, and progress',
  url: 'https://MindsMend-org.github.io',          // For GitHub Pages
  baseUrl: '/my-game-projects-site/',               // Required for GitHub Pages

  onBrokenLinks: 'warn',                            // Better for development
  //onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'MindsMend-org',
  projectName: 'my-game-projects-site',

  themeConfig: {
    navbar: {
      title: 'Folding Circles 2026',
      logo: {
        alt: 'Folding Circles Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          activeBaseRegex: '^/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/admin',
          label: 'Edit Content',
          position: 'right',
          target: '_blank',                    // opens in new tab (avoids routing glitch)
          rel: 'noopener noreferrer',
        },
        {
          href: 'https://github.com/MindsMend-org/my-game-projects-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            { label: 'Docs', to: '/docs' },
            { label: 'Blog', to: '/blog' },
            { label: 'Edit Content (CMS)', to: '/admin' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MindsMend-org/my-game-projects-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Folding Circles. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MindsMend-org/my-game-projects-site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MindsMend-org/my-game-projects-site/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};