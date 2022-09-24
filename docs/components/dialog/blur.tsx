import { useState } from 'react'
import { Dialog } from 'votary'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        blur
        width='25%'
        title='英雄志'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        断处便是起处，绝处方能逢生。
      </Dialog>
    </>
  )
}
