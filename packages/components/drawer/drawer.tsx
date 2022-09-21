import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

interface Props {
  direction?: string
  visible?: boolean
  title?: string
  showClose?: boolean
  children?: any
  onClose?: () => void
}

const body = document.getElementsByTagName('body')[0]

const Drawer = (props: Props) => {
  const {
    direction = 'right',
    visible,
    title,
    showClose = true,
    onClose,
    children
  } = props

  if (visible) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'visible'
  }

  const dialogDom = (
    <>
      <CSSTransition
        classNames='v-drawer-masks'
        unmountOnExit
        timeout={400}
        in={visible}>
        <div className='v-drawer-mask' onClick={onClose}></div>
      </CSSTransition>

      <CSSTransition
        classNames={`v-drawer-${direction}`}
        unmountOnExit
        timeout={400}
        in={visible}>
        <div
          className={`v-drawer-content ${direction}`}
          onClick={e => {
            e.stopPropagation()
          }}>
          <div className='header'>
            <div className='title'>{title}</div>
            {showClose && (
              <span className='iconfont icon-cross' onClick={onClose}></span>
            )}
          </div>
          <div className='content'>{children}</div>
        </div>
      </CSSTransition>
    </>
  )

  return ReactDOM.createPortal(dialogDom, body)
}

export default Drawer
