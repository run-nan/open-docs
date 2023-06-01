const fs = require('fs')
const { createInfoPageMD } = require('docusaurus-plugin-openapi-docs/lib/markdown')

const VERSION_BASE_PATH = 'versioned_docs'
const ZH_BASE_PATH = 'i18n/zh-CN/docusaurus-plugin-content-docs'

/**
 * 所有 OpenAPI 文档的源文件路径
 * 会从该路径下的 source 目录读取 OpenAPI 配置文件
 * 生成的文档会根据配置文件名，创建文件夹，放到 api 目录下
 * 配置后，支持如下命令（以 issue.yaml 文件为例）：
 * - npx docusaurus gen-api-docs canary:issue
 * - npx docusaurus gen-api-docs canary:zh:issue
 * - npx docusaurus clean-api-docs canary:issue
 * - npx docusaurus clean-api-docs canary:zh:issue
 */
const openAPIPathConfig = {
  canary: 'docs/openapi',
  v1: `${VERSION_BASE_PATH}/version-1.x/openapi`,
}
const zhOpenAPIPathConfig = {
  'canary:zh': `${ZH_BASE_PATH}/current/openapi`,
  'v1:zh': `${ZH_BASE_PATH}/version-1.x/openapi`,
}

const markdownGenerators = {
  createInfoPageMD: (...args) => {
    const md = createInfoPageMD(...args)
    // info.mdx 会出现两个版本，这里跟文档版本区分开
    return md.replace(
      '<span className={"theme-doc-version-badge badge badge--secondary"}>Version:',
      '<span className={"theme-doc-version-badge badge badge--secondary"}>API Version:'
    )
  },
}

/**
 * @param {Record<string, string>} dirConfig
 */
function generatorConfig(dirConfig, language = 'en') {
  /** @type {Record<string, import('docusaurus-plugin-openapi-docs').Options} */
  const config = {}
  const openAPIFileSuffixRE = /\.ya?ml$|\.json$/
  Object.entries(dirConfig).forEach(([version, dir]) => {
    const files = fs.readdirSync(`${dir}/source`, {})
    if (!files.length) return
    files.forEach((fullName) => {
      if (!openAPIFileSuffixRE.test(fullName)) return
      const name = fullName.replace(openAPIFileSuffixRE, '')
      const specPath = `${dir}/source/${fullName}`
      // 输出到同名目录下
      const outputDir = `${dir}/api/${name}`
      config[`${version}:${name}`] = {
        specPath,
        outputDir,
        template: language === 'zh' ? 'openapi.zh.mustache' : 'openapi.mustache',
        markdownGenerators,
      }
    })
  })
  return config
}

module.exports = {
  docConfig: {
    docLayoutComponent: '@theme/DocPage',
    docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
  },
  themes: ['docusaurus-theme-openapi-docs'],
  navbarItem: {
    type: 'docSidebar',
    label: 'Open API',
    sidebarId: 'openapi',
  },
  footerLinkItem: {
    label: 'Open API',
    to: 'docs/openapi',
  },
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          ...generatorConfig(openAPIPathConfig, 'en'),
          ...generatorConfig(zhOpenAPIPathConfig, 'zh'),
        },
      },
    ],
  ],
}
