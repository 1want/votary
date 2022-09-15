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

function App() {
  const click = () => {
    Notification()
  }
  return (
    <div>
      <Button onClick={click}>btn</Button>
    </div>
  )
}

export default App
