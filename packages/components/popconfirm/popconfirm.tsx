import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import PopconfirmContent from './popconfirm-content'

import { PopconfirmProps } from './types'

const Popconfirm = (props: PopconfirmProps) => {
  const { children } = props
  const [visible, setVisible] = useState(false)

  return (
    <div
      className='v-popconfirm-content'
      tabIndex={1}
      onBlur={() => {
        setVisible(false)
      }}>
      <div onClick={() => setVisible(true)}>{children}</div>
      <CSSTransition
        classNames='v-mask'
        unmountOnExit
        timeout={400}
        in={visible}>
        <PopconfirmContent {...props} setVisible={setVisible} />
      </CSSTransition>
    </div>
  )
}

export default Popconfirm
