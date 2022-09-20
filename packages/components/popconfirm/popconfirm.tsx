import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button } from '../button'

interface PopconfirmProps {
  title?: string
  confirmText?: string
  cancelText?: string
  onCancel?: () => void
  onConfirm?: () => void
  children?: any
}

const Popconfirm = (props: PopconfirmProps) => {
  const {
    title,
    confirmText = '确认',
    cancelText = '取消',
    onCancel,
    onConfirm,
    children
  } = props
  const [visible, setVisible] = useState(false)

  return (
    <div
      className='v-popconfirm-content'
      tabIndex={1}
      onBlur={() => setVisible(false)}>
      <div onClick={() => setVisible(true)}>{children}</div>
      <CSSTransition
        classNames='v-popconfirm'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div className='popconfirm'>
          <div className='arrow'></div>
          <div className='header'>
            <span className='iconfont icon-info'></span>
            <div className='title'>{title}</div>
          </div>

          <div className='btn'>
            <Button
              size='small'
              type='primary'
              plain
              onClick={() => {
                onConfirm?.()
                setVisible(false)
              }}>
              {confirmText}
            </Button>
            <Button
              size='small'
              onClick={() => {
                onCancel?.()
                setVisible(false)
              }}>
              {cancelText}
            </Button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Popconfirm
