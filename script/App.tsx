import '@/icon/assets/iconfont.css'

import { useState } from 'react'
// import Button from '@/components/button/button'
import { Message } from '@/components/message'
// import { Button, Message, Input } from '../dist/hello.js'
import { Button } from '@/components/button'
// import Input from '@/components/input'
// import Form from '@/components/form'
// import Divider from '@/components/divider'
// import Dialog from '@/components/dialog'
// import Loading from '@/components/loading'
import { Radio } from '@/components/radio'
import { Select } from '@/components/select'
// import Upload from '@/components/upload'
// import Swiper from '@/components/swiper'
// import Menu, { MenuItem, SubMenu } from '@/components/menu'
import { Layout } from '@/components/layout'

function App() {
  const { Option } = Select
  const { Header, Aside, Main, Footer } = Layout

  return (
    <>
      <Button
        onClick={() => {
          Message({
            title: 'hello'
          })
        }}>
        btn
      </Button>

      <Button
        onClick={() => {
          Message({
            title: 'hello s'
          })
        }}>
        btn2
      </Button>
    </>
  )
}

export default App
