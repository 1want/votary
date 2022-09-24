import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { DrawerProps } from './types'
import { Mask } from '../mask'

const body = document.getElementsByTagName('body')[0]

const Drawer = (props: DrawerProps) => {
  const {
    direction = 'right',
    blur,
    visible = false,
    title,
    showClose = true,
    onClose,
    children
  } = props

  const dialogDom = (
    <>
      <Mask onClick={onClose} visible={visible} blur={blur}></Mask>
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
              <span className='iconfont icon-close' onClick={onClose}></span>
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
