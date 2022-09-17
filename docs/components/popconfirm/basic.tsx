import { Popconfirm } from 'votary'

export default () => {
  const onCancel = () => {}
  const onConfirm = () => {}
  return (
    <Popconfirm
      title='你确定要关闭吗'
      confirm-text='关闭'
      cancel-text='取消'
      onCancel={onCancel}
      onConfirm={onConfirm}></Popconfirm>
  )
}
