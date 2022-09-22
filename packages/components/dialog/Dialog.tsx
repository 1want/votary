import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { Button } from '../button'

interface Props {
  title?: string
  width?: string
  visible: boolean
  showButton?: boolean
  blur?: boolean
  children?: any
  onClose?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

const body = document.getElementsByTagName('body')[0]

const Dialog = (props: Props) => {
  const {
    title,
    width = '30%',
    visible,
    showButton,
    blur = false,
    children,
    onClose,
    onConfirm,
    onCancel
  } = props

  if (visible) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  const classes = classNames(['v-dialog-wrapper', blur && 'blur'])

  const dialogDom = (
    <>
      <CSSTransition
        classNames='v-dialog-mask'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div className={classes} onClick={onClose}></div>
      </CSSTransition>

      <CSSTransition
        classNames='v-dialog'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div
          className='v-dialog-content'
          style={{ width: `${width}` }}
          onClick={e => {
            e.stopPropagation()
          }}>
          <div className='header'>
            <div className='title'>{title}</div>
            <span className='iconfont icon-close' onClick={onClose}></span>
          </div>
          <div className='content'>{children}</div>
          {showButton && (
            <div className='footer'>
              <Button plain onClick={onConfirm}>
                确认
              </Button>
              <Button plain onClick={onCancel}>
                取消
              </Button>
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  )

  return ReactDOM.createPortal(dialogDom, body)
}

export default Dialog
