import { Popconfirm } from '../../../packages/components/popconfirm'

export default () => {
  const onCancel = () => {
    alert('取消')
  }
  const onConfirm = () => {
    alert('确认')
  }
  return (
    <Popconfirm
      title='你确定要关闭吗?'
      confirm-text='关闭'
      cancel-text='取消'
      onCancel={onCancel}
      onConfirm={onConfirm}>
      点击打开气泡确认框
    </Popconfirm>
  )
}
