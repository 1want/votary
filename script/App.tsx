import '@/icon/assets/iconfont.css'
import './index.css'

import { useState } from 'react'
import { Message } from '@/components/message'

import { Button } from '@/components/button'
import { Dialog } from '@/components/dialog'

import { Drawer } from '@/components/drawer'
import { Radio } from '@/components/radio'
import { Progress } from '@/components/progress'
import Notification from '@/components/notification'
import { Popconfirm } from '@/components/popconfirm'

function App() {
  const onCancel = () => {
    console.log('取消')
  }

  const onConfirm = () => {
    console.log('确认')
  }

  return (
    <>
      <Popconfirm
        title='你确定要关闭吗'
        confirm-text='关闭'
        cancel-text='取消'
        onCancel={onCancel}
        onConfirm={onConfirm}></Popconfirm>
    </>
  )
}

export default App
