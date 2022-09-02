import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'votary',
  mode: 'site',
  outputPath: 'docs-dist',
  logo: 'https://cdn-icons-png.flaticon.com/512/6931/6931333.png',
  menus: {
    '/guide': [
      {
        title: '简介',
        path: '/guide'
      },
      {
        title: '安装',
        path: '/guide/install'
      },
      {
        title: '引用',
        path: '/guide/quote'
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
      path: 'https://github.com/umijs/dumi'
    }
  ]
})
