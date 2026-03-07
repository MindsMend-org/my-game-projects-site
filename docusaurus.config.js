module.exports = {
  title: 'Folding Circles 2026',
  tagline: 'Documenting game projects, mechanics, levels, and progress',
  url: 'https://MindsMend-org.github.io', 
  baseUrl: '/my-game-projects-site/', 

  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'MindsMend-org',
  projectName: 'my-game-projects-site',

  // SAFETY NET 1: The Auto-Refresher (Invisible)
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'text/javascript' },
      innerHTML: `
        (function() {
          if (window.location.pathname.includes('/admin')) {
            var check = setInterval(function() {
              if (document.body && (document.body.innerText.includes("Page Not Found") || document.body.innerText.includes("We could not find"))) {
                console.log("CMS not ready, auto-refreshing in 2s...");
                clearInterval(check);
                setTimeout(function() { window.location.reload(); }, 2000);
              }
            }, 1000);
            setTimeout(function() { clearInterval(check); }, 15000);
          }
        })();
      `,
    },
  ],
  
  trailingSlash: false,

  // SAFETY NET 2: The Red Banner (Visible if Auto-Refresh takes too long)
  scripts: [
    {
      src: 'data:text/javascript;base64,d2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgewogIGlmIChkb2N1bWVudC50aXRsZS5pbmNsdWRlcygiUGFnZSBOb3QgRm91bmQiKSB8fCBkb2N1bWVudC5ib2R5LmlubmVyVGV4dC5pbmNsdWRlcygiV2UgY291bGQgbm90IGZpbmQiKSkgewogICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgZGl2LnN0eWxlID0gImJhY2tncm91bmQ6ICNmZjRjNGM7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMTVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyB6LWluZGV4OiA5OTk5OyBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7IjsKICAgIGRpdi5pbm5lclRleHQgPSAi4pqgIENNUyBMT0FESU5HOiBQTEVBU0UgV0FJVCBBIEZFVyBTRUNPTkRTIEFORCBSRUZSRVNIIChGNSkiOwogICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdik7CiAgfQp9Ow==',
    },
  ],

  themeConfig: {
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    navbar: {
      title: 'Folding Circles 2026',
      logo: { alt: 'Folding Circles Logo', src: 'img/logo.svg' },
      items: [
        { type: 'doc', docId: 'projects/index', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: '/my-game-projects-site/admin/',
          label: 'Edit Content',
          position: 'right',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        {
          href: 'https://github.com/MindsMend-org/my-game-projects-site',
          label: 'GitHub', position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            { label: 'Docs', to: '/docs/projects' },
            { label: 'Blog', to: '/blog' },
            { label: 'Edit Content (CMS)', to: '/admin/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/MindsMend-org/my-game-projects-site' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Folding Circles.`,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MindsMend-org/my-game-projects-site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MindsMend-org/my-game-projects-site/edit/master/blog/',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};