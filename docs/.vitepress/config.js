module.exports = {
  title: 'react-ui',
  themeConfig: {
    nav: [
      {
        text: '文档',
        link: '/document'
      },
      {
        text: '组件',
        link: '/'
      }
    ],
    sidebar: {
      '/document': [
        {
          text: '开始',
          items: [
            {
              text: '安装',
              link: '/button'
            }
          ]
        }
      ],
      '/': [
        {
          text: '组件',
          items: [
            {
              text: 'Button',
              link: '/button'
            },
            {
              text: 'Message',
              link: '/message'
            },
            {
              text: 'Form',
              link: '/button'
            },
            {
              text: 'Input',
              link: '/message'
            },
            {
              text: 'Layout',
              link: '/button'
            },
            {
              text: 'Modal',
              link: '/message'
            }
          ]
        },
        {
          text: '工具',
          items: [
            {
              text: 'fn',
              link: '/'
            }
          ]
        }
      ]
    }
  }
}
