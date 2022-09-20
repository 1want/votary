import { useState } from 'react'
// import { Dialog } from '../../../packages/components/dialog'
import { Dialog } from 'votary'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        title='英雄志'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        昆仑剑出血汪洋，千里直驱黄河黄。
      </Dialog>
    </>
  )
}
