import Dialog from '../../../packages/components/dialog'
import { useState } from 'react'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <div>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        title='shaksha'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        gahkjgha
      </Dialog>
    </div>
  )
}
