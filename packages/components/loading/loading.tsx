import { CSSTransition } from 'react-transition-group'
import { LoadProps } from './types'

const Loading = (props: LoadProps) => {
  const { visible, onClose } = props

  return (
    <CSSTransition classNames='v-mask' unmountOnExit timeout={400} in={visible}>
      <div
        className='v-mask'
        onClick={e => {
          e.stopPropagation()
          onClose?.()
        }}>
        <span className='v-loading iconfont icon-loading'></span>
      </div>
    </CSSTransition>
  )
}

export default Loading
