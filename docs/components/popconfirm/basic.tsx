import { Popconfirm } from 'votary'

export default () => {
  const onCancel = () => {}
  const onConfirm = () => {}
  return (
    <Popconfirm
      title='你选择关闭吗?'
      confirm-text='关闭'
      cancel-text='取消'
      onCancel={onCancel}
      onConfirm={onConfirm}>
      点击打开气泡确认框
    </Popconfirm>
  )
}
