import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'react-ui',
  mode: 'doc',
  outputPath: 'docs-dist',
  logo: 'https://img0.baidu.com/it/u=324201646,1175190975&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661446800&t=2dba0fbbeb463080f35bbbfcb67bdc5a',
  menus: {
    '/button': [
      {
        title: '菜单项',
        path: '/button',
        children: [
          // 菜单子项（可选）
          'button/index.md' // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ]
      }
    ]
  }
})
