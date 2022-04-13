// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ONES 开放平台",
  tagline: "ONES 开放平台",
  url: "https://docs.partner.ones.ai",
  baseUrl: "/",
  favicon: "images/logo.png",
  organizationName: "BangWork", // Usually your GitHub org/user name.
  projectName: "open-docs", // Usually your repo name.
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogTitle: "更新日志",
          blogDescription: "更新日志",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "更新日志",
          path: "changelog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "ones",
        path: "docs-ones",
        routeBasePath: "ones",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/BangWork/open-docs/tree/main/docs-ones",
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "ONES 开放平台",
        logo: {
          alt: "ONES 开放平台",
          src: "images/logo.png",
          srcDark: "images/logo-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            label: "开发",
            sidebarId: "dev",
          },
          {
            type: "docSidebar",
            position: "left",
            label: "API",
            sidebarId: "api",
          },
          {
            type: "docSidebar",
            position: "left",
            label: "介绍",
            sidebarId: "intro",
          },
          {
            type: "docSidebar",
            position: "left",
            label: "常见问题",
            sidebarId: "faq",
          },
          {
            to: "/blog",
            label: "更新日志",
            position: "left",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "相关资源",
            items: [
              {
                label: "ONES Design",
                href: "https://bangwork.github.io/ones-design/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ONES, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],
};

module.exports = config;
