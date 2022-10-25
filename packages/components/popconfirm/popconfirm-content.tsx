import * as ReactDOMClient from 'react-dom/client'
import { CSSTransition } from 'react-transition-group'
import { Button } from '../button'
import { PopconfirmProps } from './types'

const PopconfirmContent = (props: PopconfirmProps) => {
  const {
    title,
    confirmText = '确认',
    cancelText = '取消',
    onCancel,
    onConfirm,
    setVisible,
    visible
  } = props

  return (
    <CSSTransition classNames='v-mask' unmountOnExit timeout={400} in={visible}>
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
  )
}

let el = document.getElementsByClassName('message-wrapper')[0]
if (!el) {
  el = document.createElement('div')
  el.className = 'message-wrapper'
  document.body.append(el)
}

ReactDOMClient.createRoot(el).render(<PopconfirmContent />)

export default PopconfirmContent
