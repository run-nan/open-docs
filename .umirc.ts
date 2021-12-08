import { defineConfig } from 'dumi'

export default defineConfig({
  title: '开放平台',
  mode: 'site',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  locales: [
    ['zh-Hans', '中文'],
    ['en-US', 'English'],
  ],
  hash: true,
})
