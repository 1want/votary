import '@/icon/assets/iconfont.css'
import { useState } from 'react'
import { Message } from '@/components/message'

import { Button } from '@/components/button'
import { Dialog } from '@/components/dialog'

import { Drawer } from '@/components/drawer'
import { Radio } from '@/components/radio'
import './index.css'

function App() {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <>
      <Radio.Group
        onChange={e => {
          console.log(e)
        }}>
        <Radio value='1'>3</Radio>
        <Radio value='2'>22</Radio>
      </Radio.Group>
      {/* <span onClick={() => setDialogVisible(!dialogVisible)}>
        点击打开Dialog
      </span>

      <Dialog
        title='ghajkg'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        321
      </Dialog> */}
    </>
  )
}

export default App
