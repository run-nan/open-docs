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
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'project',
        path: 'project',
        routeBasePath: 'project',
        sidebarPath: require.resolve('./sidebarsProject.js'),
      },
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
            position: 'left',
            label: 'Learning',
            to: 'docs/learning',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Guide',
            sidebarId: 'guide',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Abilities',
            sidebarId: 'abilities',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'API',
            sidebarId: 'api',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Tools',
            sidebarId: 'tools',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'ONES API',
            sidebarId: 'onesAPI',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'FAQ',
            sidebarId: 'faq',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Development',
            sidebarId: 'development',
            docsPluginId: 'project',
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Deploy',
            sidebarId: 'deploy',
            docsPluginId: 'project',
          },
          {
            to: 'changelog',
            label: 'Changelog',
            position: 'left',
            docsPluginId: 'default',
          },
          {
            //首页默认展示item的第一项
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Plugin Development',
                to: '/docs/learning',
                docsPluginId: 'default',
              },
              {
                label: 'ONES Development',
                to: '/project/deploy',
                docsPluginId: 'project',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            docsPluginId: 'default',
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
