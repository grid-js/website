const path = require('path');

module.exports = {
  title: 'Grid.js',
  tagline: 'Advanced JavaScript table plugin',
  url: 'https://gridjs.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'grid-js',
  projectName: 'website',
  themeConfig: {
    image: '/img/social.png',
    algolia: {
      appId: 'FIXME',
      apiKey: '15086b8795378f5116d77008d1c3ebf0',
      indexName: 'gridjs',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      hideOnScroll: true,
      title: 'Grid.js',
      logo: {
        alt: 'Grid.js',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/examples/hello-world',
          activeBasePath: 'docs/examples',
          label: 'Examples',
          position: 'left'
        },
        {
          to: 'docs/sponsors', label: 'Support Grid.js', position: 'left'
        },
        {
          to: 'docs/community', label: 'Community', position: 'left'
        },
        {
          to: 'blog', label: 'Blog', position: 'left'
        },
        {
          href: 'https://www.npmjs.com/package/gridjs',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/grid-js/gridjs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
            {
              label: 'Examples',
              to: 'docs/examples/hello-world',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/gridjs',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/K55BwDY',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/grid_js',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/grid-js/gridjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grid.js`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/grid-js/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/grid-js/website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'UA-167499954-1',
        },
      },
    ],
  ],
  themes: [require.resolve('@docusaurus/theme-live-codeblock')],
  plugins: [
    path.resolve(__dirname, './plugins/tailwind')
  ]
};
