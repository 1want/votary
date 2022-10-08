import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Votary',
  mode: 'site',
  outputPath: 'docs-dist',
  base: '/votary',
  hash: true,
  exportStatic: {},
  // links: [{ rel: 'stylesheet', type: 'text/css', href: './index.css' }],
  sitemap: { hostname: 'https://1want.github.io/votary' },
  publicPath: process.env.NODE_ENV === 'production' ? '/votary/' : '/',
  favicon: './logo.png',
  logo: './logo.png',
  menus: {
    '*': [
      {
        title: '别乱跑噢',
        path: '/'
      }
    ],
    '/guide': [
      {
        title: '简介',
        path: '/guide/introduction'
      },
      {
        title: '安装',
        path: '/guide/install'
      },
      {
        title: '设计资源',
        path: '/guide/design'
      }
    ],
    '/components': [
      {
        title: '基础组件',
        children: [
          'components/button',
          'components/icon',
          'components/layout',
          'components/divider',
          'components/mask'
        ]
      },
      {
        title: '表单组件',
        children: [
          'components/form',
          'components/input',
          'components/select',
          'components/radio',
          'components/checkbox',
          'components/upload'
        ]
      },
      {
        title: '提示组件',
        children: [
          'components/message',
          'components/notification',
          'components/popconfirm',
          'components/drawer',
          'components/dialog',
          'components/loading'
        ]
      },
      {
        title: '展示组件',
        children: [
          'components/collapse',
          'components/image',
          'components/swiper',
          'components/table',
          'components/tag',
          'components/progress'
        ]
      },
      {
        title: '导航组件',
        children: [
          'components/pagination',
          'components/menu',
          'components/breadcrumb'
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
      path: 'https://github.com/1want/votary'
    }
  ]
})
