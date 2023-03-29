// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// 是否是正式版
const isPublic = process.env.PRODUCTION_ENV === 'production'

// 正式版本暂只打包构建1.x版本
const versionsConfig = isPublic
  ? {
      lastVersion: '1.x',
      onlyIncludeVersions: ['1.x'],
    }
  : {}

// 正式版本隐藏 `ChangeLog` 和 `docVersion`
const extraNavConfig = isPublic
  ? []
  : [
      {
        to: 'changelog',
        label: 'Changelog',
        position: 'left',
      },
      {
        type: 'docsVersionDropdown',
        position: 'right',
      },
    ]

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'ONES Open Platform',
  tagline: 'ONES 全面开放基座能力，助力客户与合作伙伴构建企业数字化平台，加速企业发布产品。',
  url: 'https://docs.partner.ones.cn',
  onBrokenLinks: 'log',
  baseUrl: '/',
  favicon: 'images/favicon.ico',
  organizationName: 'BangWork', // Usually your GitHub org/user name.
  projectName: 'open-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
      },
    },
  },
  noIndex: true, // prohibit seo
  customFields: {
    PRODUCTION_ENV: process.env.PRODUCTION_ENV,
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
          versions: {
            current: {
              label: '🚧 Canary',
              noIndex: true,
            },
          },
          ...versionsConfig,
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
    ['./docusaurus-plugin/plugin-i18n-tab-title', {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'project',
        path: 'project',
        routeBasePath: 'project',
        sidebarPath: require.resolve('./sidebarsProject.js'),
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        max: 2560,
        min: 1024,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'robots', content: 'noindex, nofollow' }],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        // respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tableOfContents: {
        maxHeadingLevel: 6,
      },
      navbar: {
        logo: {
          alt: 'ONES Open Platform',
          src: 'images/logo.svg',
          // srcDark: 'images/logo-dark.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'API Docs',
                to: '/docs/api/readme',
              },
              {
                label: 'ONES Open Platform',
                to: 'docs/guide/overview',
              },
            ],
          },
          {
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'ONES Design',
                to: 'https://bangwork.github.io/ones-design/?path=/story/ones-design--page',
              },
              // {
              //   label: 'Open source of web code',
              //   to: '/project/development',
              // },
              {
                label: 'Learning map',
                to: 'docs/learning',
              },
              {
                label: 'FAQ',
                to: 'docs/faq/development',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
            items: [
              {
                label: 'eng',
              },
            ],
          },
          ...extraNavConfig,
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'ONES Logo',
          src: 'homepage/logo_footer.svg',
          href: 'https://ones.com',
        },
        links: [
          {
            title: 'Technologies',
            items: [
              {
                label: 'Open capabilities',
                to: 'docs/abilities/basic',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'API Docs',
                to: 'docs/api/readme',
              },
              {
                label: 'ONES Open Platform',
                to: 'docs/guide/overview',
              },
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'ONES CLI',
                to: 'docs/tools/cli',
              },
              {
                label: 'ONES Diagtools',
                to: 'docs/tools/diagtools',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'ONES Design',
                href: 'https://bangwork.github.io/ones-design/?path=/story/ones-design--page',
              },
              {
                label: 'Learning map',
                to: 'docs/learning',
              },
              {
                label: 'FAQ',
                to: 'docs/faq/development/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ONES. All rights reserved`,
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
    ['@docusaurus/theme-mermaid', {}],
  ],

  markdown: {
    mermaid: true,
  },
}

module.exports = config
