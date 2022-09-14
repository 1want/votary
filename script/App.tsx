import '@/icon/assets/iconfont.css'
import { useState } from 'react'
import { Message } from '@/components/message'

import { Button } from '@/components/button'
import { Dialog } from '@/components/dialog'

import { Drawer } from '@/components/drawer'
import { Radio } from '@/components/radio'
import './index.css'

function App() {
  const [dialogVisible, setDialogVisible] = useState(true)
  return (
    <>
      <span onClick={() => setDialogVisible(!dialogVisible)}>
        点击打开Dialog
      </span>

      <Drawer
        direction='right'
        title='ghajkg'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        321
      </Drawer>
    </>
  )
}

export default App
