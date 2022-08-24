import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'react-ui',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  mode: 'doc',
  outputPath: 'docs-dist'
})
