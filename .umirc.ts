import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'votary',
  mode: 'site',
  outputPath: 'docs-dist',
  publicPath: './',
  favicon: './logo.png',
  logo: './logo.png',
  menus: {
    '/guide': [
      {
        title: '简介',
        path: '/guide'
      },
      {
        title: '安装',
        path: '/guide/install'
      }
    ],
    '/components': [
      {
        title: '基础组件',
        children: [
          'components/button',
          'components/layout',
          'components/divider'
        ]
      },
      {
        title: '表单组件',
        children: [
          'components/form',
          'components/input',
          'components/select',
          'components/radio',
          'components/upload'
        ]
      },
      {
        title: '提示组件',
        children: [
          'components/message',
          'components/dialog',
          'components/loading'
        ]
      },
      {
        title: '导航组件',
        children: [
          'components/swiper',
          'components/pagination',
          'components/menu'
        ]
      }
    ]
  },
  navs: [
    // null,
    {
      path: '/guide',
      title: '指南'
    },
    {
      path: '/components',
      title: '组件'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/1want/react-ui'
    }
  ]
})
