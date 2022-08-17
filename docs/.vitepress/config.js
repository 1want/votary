module.exports = {
  title: 'mobile-ui',
  themeConfig: {
    nav: [
      {
        text: '🏡Home',
        link: '/'
      },
      {
        text: '🔖Tags',
        link: '/'
      },
      {
        text: '📃Archives',
        link: '/'
      }
    ],
    sidebar: {
      '/': [
        {
          text: '组件',
          items: [
            {
              text: 'button',
              link: '/button'
            },
            {
              text: 'message',
              link: '/'
            }
          ]
        },
        {
          text: '方法',
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
