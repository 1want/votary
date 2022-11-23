import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button } from '../button'
import usePosition from '../../hooks/usePosition'
import { PopconfirmProps } from './types'

const Popconfirm = (props: PopconfirmProps) => {
  const {
    children,
    title,
    confirmText = '确认',
    cancelText = '取消',
    onCancel,
    onConfirm
  } = props

  const [visible, setVisible] = useState(false)

  const { ref } = usePosition()

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        ref={ref}
        style={{ position: 'relative' }}>
        {children}
      </div>
      <CSSTransition
        classNames='v-mask'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div className='v-popconfirm'>
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
      </CSSTransition>
    </>
  )
}

export default Popconfirm
