import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Votary',
  mode: 'site',
  outputPath: 'docs-dist',
  base: '/votary',
  hash: true,
  exportStatic: {},
  sitemap: { hostname: 'https://1want.github.io/votary' },
  publicPath: process.env.NODE_ENV === 'production' ? '/votary/' : '/',
  favicon: './logo.png',
  logo: './logo.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  menus: {
    '*': [
      {
        title: '别乱跑噢',
        path: '/'
      }
    ],
    '/guide': [
      {
        title: '指南',
        children: ['guide/introduction', 'guide/install', 'guide/design']
      }
    ],
    '/en-US/guide': [
      {
        title: 'guide',
        children: ['guide/introduction', 'guide/install', 'guide/design']
      }
    ],
    '/en-US/components': [
      {
        title: 'Basic Components',
        children: ['components/button', 'components/icon', 'components/divider']
      },
      {
        title: 'Form Components',
        children: [
          'components/form',
          'components/input',
          'components/select',
          'components/radio',
          'components/checkbox'
          // 'components/upload'
        ]
      },
      {
        title: 'Feedback Components',
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
        title: 'Data Components',
        children: [
          'components/collapse',
          'components/image',
          // 'components/swiper',
          'components/table',
          'components/tag',
          'components/progress'
        ]
      },
      {
        title: 'Navigation Components',
        children: [
          'components/pagination',
          'components/menu',
          'components/breadcrumb'
        ]
      }
    ],
    '/components': [
      {
        title: '基础组件',
        children: ['components/button', 'components/icon', 'components/divider']
      },
      {
        title: '表单组件',
        children: [
          'components/form',
          'components/input',
          'components/select',
          'components/radio',
          'components/checkbox'
          // 'components/upload'
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
          // 'components/swiper',
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
  navs: {
    'zh-CN': [
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
    ],
    'en-US': [
      // null,
      {
        path: '/en-US/guide',
        title: 'guide'
      },
      {
        path: '/en-US/components',
        title: 'component'
      },
      {
        title: 'GitHub',
        path: 'https://github.com/1want/votary'
      }
    ]
  }
})
