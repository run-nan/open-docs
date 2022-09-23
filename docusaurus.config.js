// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ONES 开放平台',
  tagline: 'ONES 开放平台',
  url: 'https://docs.partner.ones.cn',
  baseUrl: '/',
  favicon: 'images/favicon.ico',
  organizationName: 'BangWork', // Usually your GitHub org/user name.
  projectName: 'open-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.x',
              noIndex: true,
            },
          },
        },
        blog: {
          blogTitle: 'Changelog',
          blogDescription: 'Changelog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Changelog',
          path: 'changelog',
          routeBasePath: 'changelog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        maxHeadingLevel: 6,
      },
      navbar: {
        title: 'ONES Open Platform',
        logo: {
          alt: 'ONES Open Platform',
          src: 'images/logo.png',
          srcDark: 'images/logo-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Plugin Development',
            sidebarId: 'pluginDev',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'ONES Development',
            sidebarId: 'onesDev',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Abilities',
            sidebarId: 'abilities',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'API',
            sidebarId: 'api',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'ONES API',
            sidebarId: 'ones',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Introduction',
            sidebarId: 'intro',
          },
          {
            to: 'changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关资源',
            items: [
              {
                label: 'ONES Design',
                href: 'https://bangwork.github.io/ones-design/',
              },
            ],
          },
          {
            title: '更多产品',
            items: [
              {
                label: 'ONES',
                href: 'https://ones.cn/',
              },
              {
                label: 'Tower',
                href: 'https://ones.cn/products/tower.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ONES, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'bash',
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],
}

module.exports = config
