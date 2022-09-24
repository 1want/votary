import { Popconfirm } from 'votary'

export default () => {
  const onCancel = () => {}
  const onConfirm = () => {}
  return (
    <Popconfirm
      title='去码头整点薯条'
      confirm-text='确认'
      cancel-text='取消'
      onCancel={onCancel}
      onConfirm={onConfirm}>
      点击打开气泡确认框
    </Popconfirm>
  )
}
