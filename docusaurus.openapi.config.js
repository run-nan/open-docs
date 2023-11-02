const fs = require('fs')
const path = require('path')
// const { createInfoPageMD } = require('docusaurus-plugin-openapi-docs/lib/markdown')

// const VERSION_BASE_PATH = 'versioned_docs'
const ZH_BASE_PATH = 'i18n/zh-CN/docusaurus-plugin-content-docs'

/**
 * 所有 OpenAPI 文档的源文件路径
 * 会从该路径下的 source 目录读取 OpenAPI 配置文件
 * 生成的文档会根据配置文件名，创建文件夹，放到 api 目录下
 * 配置后，支持如下命令：
 * - npx docusaurus gen-api-docs all
 * - npx docusaurus clean-api-docs all
 */
const openAPIPathConfig = {
  '1.x': 'docs/openapi',
}
const zhOpenAPIPathConfig = {
  '1.x': `${ZH_BASE_PATH}/current/openapi`,
}

// const markdownGenerators = {
//   createInfoPageMD: (...args) => {
//     const md = createInfoPageMD(...args)
//     // info.mdx 会出现两个版本，这里跟文档版本区分开
//     return md.replace(
//       '<span className={"theme-doc-version-badge badge badge--secondary"}>Version:',
//       '<span className={"theme-doc-version-badge badge badge--secondary"}>API Version:',
//     )
//   },
// }

/**
 * @param {Record<string, string>} dirConfig
 */
function generatorConfig(dirConfig, language = 'en') {
  /** @type {Record<string, import('docusaurus-plugin-openapi-docs').Options} */
  const config = {}
  const openAPIFileSuffixRE = /\.ya?ml$/
  /** 不以文件名作为输出文件夹名称的格式 */
  const flatOpenAPIFileSuffixRE = /\.flat\.ya?ml$/

  Object.entries(dirConfig).forEach(([version, dirPath]) => {
    scanAndBuildDir(path.join(dirPath, 'source'), path.join(dirPath, 'api'))

    /** 递归扫描特定文件夹，递归生成配置 */
    function scanAndBuildDir(sourceDir, outputDir) {
      const files = fs.readdirSync(sourceDir, {})
      if (!files.length) return

      files.forEach((fullName) => {
        const stats = fs.statSync(path.join(sourceDir, fullName))
        if (stats.isDirectory()) {
          scanAndBuildDir(path.join(sourceDir, fullName), path.join(outputDir, fullName))
          return
        }

        if (!openAPIFileSuffixRE.test(fullName)) return
        const name = fullName.replace(openAPIFileSuffixRE, '')
        config[`${version}:${name}:${Math.round(10 ** 10 * Math.random())}`] = {
          specPath: path.join(sourceDir, fullName),
          outputDir: flatOpenAPIFileSuffixRE.test(fullName)
            ? outputDir
            : path.join(outputDir, name),
          template: language === 'zh' ? 'openapi.zh.mustache' : 'openapi.mustache',
          // [Error [ValidationError]: "config.canary:auth:2684895739.markdownGenerators" is not allowed]
          // markdownGenerators,
        }
      })
    }
  })

  return config
}

module.exports = {
  docs: {
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
