import { Button } from '../button'

interface PopconfirmProps {
  title?: string
  confirmText?: string
  cancelText?: string
  onCancel?: () => void
  onConfirm?: () => void
}

const Popconfirm = (props: PopconfirmProps) => {
  const {
    title,
    confirmText = '确认',
    cancelText = '取消',
    onCancel,
    onConfirm
  } = props

  return (
    <div className='popconfirm'>
      <span className='iconfont icon-info'></span>
      <span className='title'>{title}</span>
      <div className='btn'>
        <Button size='small' type='primary'>
          {confirmText}
        </Button>
        <Button size='small'>{cancelText}</Button>
      </div>
    </div>
  )
}

export default Popconfirm
