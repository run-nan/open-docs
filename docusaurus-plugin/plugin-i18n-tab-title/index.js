// en first
const DEFAULTVAL = 'ONES Open Platform'
const DEFAULTMAP = {
  'en': 'ONES Open Platform',
  'zh-CN': '开放平台',
}

module.exports = async function myPlugin(context, langKeyMap) {
  return {
    name: 'plugin-i18n-tab-title',
    async contentLoaded() {
      const { currentLocale } = context.i18n
      context.siteConfig.title =
        langKeyMap[currentLocale] ?? DEFAULTMAP[currentLocale] ?? DEFAULTVAL
    },
  }
}
