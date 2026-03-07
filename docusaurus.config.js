module.exports = {
  title: 'Folding Circles 2026',
  tagline: 'Documenting game projects, mechanics, levels, and progress',
  url: 'https://MindsMend-org.github.io', 
  // IMPORTANT: If you aren't using a custom domain, baseUrl must match your repo name
  baseUrl: '/my-game-projects-site/', 

  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'MindsMend-org',
  projectName: 'my-game-projects-site',
  
  // Required for GitHub Pages deployment
  trailingSlash: false,

  themeConfig: {
    // Add this to fix the v3 Prism theme error
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    navbar: {
      title: 'Folding Circles 2026',
      logo: {
        alt: 'Folding Circles Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc', // Changed from 'to' to 'type: doc' for better v3 routing
          docId: 'projects/index',
          label: 'Docs',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: '/admin',
          label: 'Edit Content',
          position: 'right',
          target: '_blank',
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
            { label: 'Docs', to: '/docs/projects' }, // Point directly to projects
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
      'classic', // v3 shorthand for @docusaurus/preset-classic
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