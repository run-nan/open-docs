// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const path = require('path')

const openAPIConfig = require('./docusaurus.openapi.config')

// 是否是正式版
const isPublic = process.env.PRODUCTION_ENV === 'production'
// 区分内外部文档
const envDocsConfig = isPublic
  ? {
      exclude: ['**/internal-*.{md,mdx}'],
    }
  : {}

const envThemeConfig = isPublic
  ? {}
  : {
      announcementBar: {
        content:
          '当前正在访问的是内部文档，<a href="https://developer.ones.com/">访问正式文档</a>。',
        backgroundColor: '#F59300',
        textColor: '#fff',
        isCloseable: false,
      },
    }

// 内外部文档导航栏区分配置
const envNavbarItems = isPublic
  ? []
  : [
      {
        to: 'changelog',
        label: 'Changelog',
        position: 'left',
        category: 'quickEntry',
      },
      // 添加内部文档，目前暂时没有先屏蔽
      // {
      //   label: 'Internal',
      //   position: 'left',
      //   items: []
      // },
    ]

// 开放平台快捷入口
const openPlatformNavbarItems = [
  {
    type: 'docSidebar',
    position: 'left',
    label: 'Guide',
    sidebarId: 'guide',
    category: 'quickEntry',
  },
  {
    type: 'docSidebar',
    position: 'left',
    label: 'Abilities',
    sidebarId: 'abilities',
    category: 'quickEntry',
  },
  {
    type: 'docSidebar',
    position: 'left',
    label: 'Reference',
    sidebarId: 'reference',
    category: 'quickEntry',
  },
  {
    type: 'docSidebar',
    position: 'left',
    label: 'Tools',
    sidebarId: 'tools',
    category: 'quickEntry',
  },
  {
    type: 'docSidebar',
    position: 'left',
    label: 'FAQ',
    sidebarId: 'faq',
    category: 'quickEntry',
  },
  ...envNavbarItems,
  {
    type: 'localeDropdown',
    position: 'right',
    items: [
      {
        label: 'eng',
      },
    ],
  },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ONES Open Platform',
  tagline: 'ONES 全面开放基座能力，助力客户与合作伙伴构建企业数字化平台，加速企业发布产品。',
  url: 'https://run-nan.github.io',
  onBrokenLinks: 'warn',
  baseUrl: '/open-docs',
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
    /**
     * 开放平台文档快捷入口前缀
     */
    quickEntryPrefixPath: [
      // 1.x版本
      '/abilities',
      '/reference',
      '/guide',
      '/tools',
      '/faq',
      '/changelog',
      // 0.x 版本
      '/start',
      'config/plugin',
      'dev/style-guide',
      'dev/sample-tutorial',
      'api/config',
      'api/module-type',
      'api/cli',
    ],
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
              badge: false,
            },
          },
          disableVersioning: true, // 只包含当前版本
          ...envDocsConfig,
          ...openAPIConfig.docs,
        },
        // 由于当前禁止了seo，打包不会生成sitemap.xml，但不影响algolia使用
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
        steps: 3,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        // offlineModeActivationStrategies: ["always"],
        swCustom: path.resolve('./sw-runtime-cache/index.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
        ],
      },
    ],
    ...openAPIConfig.plugins,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'robots', content: 'noindex, nofollow' }],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        // respectPrefersColorScheme: true, // 跟随系统主题
      },
      ...envThemeConfig,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
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
              openAPIConfig.navbarItem,
              // 正式版本隐藏 `API Docs`, 未来 OpenAPI 完全覆盖时可去掉
              ...(isPublic
                ? []
                : [
                    {
                      type: 'docSidebar',
                      label: 'API Docs',
                      sidebarId: 'api',
                    },
                  ]),
              {
                type: 'docSidebar',
                label: 'ONES Open Platform',
                sidebarId: 'guide',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'ONES Design',
                to: 'https://bangwork.github.io/ones-design/',
              },
              {
                label: 'Learning map',
                to: 'docs/learning',
              },
            ],
          },
          ...openPlatformNavbarItems,
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'ONES Logo',
          src: 'homepage/logo-footer.svg',
          href: 'https://ones.com',
        },
        copyright: `© ${new Date().getFullYear()} ONES. All rights reserved`,
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
                label: 'Open API',
                to: 'docs/openapi',
              },
              ...(isPublic
                ? []
                : [
                    {
                      label: 'API Docs',
                      to: 'docs/api/readme',
                    },
                  ]),
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
                href: 'https://bangwork.github.io/ones-design/',
              },
              {
                label: 'Learning map',
                to: 'docs/learning',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'bash',
      },
      algolia: {
        // Application ID
        appId: 'N2DTG7C9DS',
        // Search-Only API Key
        apiKey: '7c5554ff7ee867923280a77cb0c11fe3',
        indexName: 'open_docs_prod',
      },
    }),

  themes: [['@docusaurus/theme-mermaid', {}], ...openAPIConfig.themes],

  markdown: {
    mermaid: true,
  },
}

module.exports = config
