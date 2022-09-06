import Dialog from '../../../packages/components/dialog'
import Button from '../../../packages/components/button'
import { useState } from 'react'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <div>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        title='我是title'
        showButton
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        落叶
      </Dialog>
    </div>
  )
}
