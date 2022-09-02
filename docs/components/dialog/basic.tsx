import Dialog from '../../../packages/components/dialog'
import { useState } from 'react'

// const dialogVisible = false
export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <div>
      <p onClick={() => setDialogVisible(true)}>点击打开Dialog</p>
      <Dialog
        title='shaksha'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        gahkjgha
      </Dialog>
    </div>
  )
}
