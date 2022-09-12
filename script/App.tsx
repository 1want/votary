import '@/icon/assets/iconfont.css'
import { useState } from 'react'
import { Message } from '@/components/message'

import { Button } from '@/components/button'
import { Dialog } from '@/components/dialog'
import './index.css'

function App() {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <>
      <span onClick={() => setDialogVisible(!dialogVisible)}>
        点击打开Dialog
      </span>

      <Dialog
        title='英雄志'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        昆仑剑出血汪洋，千里直驱黄河黄。
      </Dialog>
    </>
  )
}

export default App
