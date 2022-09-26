import { Button } from '../button'
import { Footer } from '../common'

import { PopconfirmProps } from './types'

const PopconfirmContent = (props: PopconfirmProps) => {
  const {
    title,
    confirmText = '确认',
    cancelText = '取消',
    onCancel,
    onConfirm,
    setVisible
  } = props

  return (
    <div className='popconfirm'>
      <div className='arrow'></div>
      <div className='header'>
        <span className='iconfont icon-info'></span>
        <div className='title'>{title}</div>
      </div>

      <div className='btn'>
        <Button
          size='small'
          plain
          onClick={() => {
            onConfirm?.()
            setVisible?.(false)
          }}>
          {confirmText}
        </Button>
        <Button
          size='small'
          plain
          onClick={() => {
            onCancel?.()
            setVisible?.(false)
          }}>
          {cancelText}
        </Button>
      </div>
    </div>
  )
}

export default PopconfirmContent
