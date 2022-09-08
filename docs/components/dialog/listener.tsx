import { Dialog } from '../../../packages/components/dialog'
import { useState } from 'react'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <div>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        onConfirm={() => {
          alert('确认')
        }}
        onCancel={() => {
          alert('取消')
        }}
        showButton
        title='稻香'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        <p>对这个世界如果你有太多的抱怨</p>
        <p>跌倒了就不敢继续往前走</p>
        <p>为什么人要这么的脆弱堕落</p>
      </Dialog>
    </div>
  )
}
