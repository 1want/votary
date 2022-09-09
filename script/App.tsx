import '@/icon/assets/iconfont.css'

import { useState } from 'react'
// import Button from '@/components/button/button'
import Message from '@/components/message'
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

function App() {
  const { Option } = Select
  return (
    <div>
      {/* <Radio.Group>
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
        <Radio value='3'>3</Radio>
      </Radio.Group> */}
      <Select defaultValue='香蕉'>
        <Option value='1'>香蕉</Option>
        <Option value='2'>西瓜</Option>
        <Option value='3'>菠萝</Option>
      </Select>
    </div>
  )
}

export default App
