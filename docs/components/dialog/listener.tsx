import { useState } from 'react'
import { Message, Dialog } from 'votary'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  const confirm = () => {
    setDialogVisible(false)
    Message({
      message: '😴'
    })
  }

  const cancel = () => {
    setDialogVisible(false)
  }

  return (
    <>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        onConfirm={confirm}
        onCancel={cancel}
        title='把酒问月'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        <p>今人不见古时月，今月曾经照古人。</p>
      </Dialog>
    </>
  )
}
