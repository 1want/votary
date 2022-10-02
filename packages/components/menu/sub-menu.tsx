import { useState } from 'react'
import { useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import { CSSTransition } from 'react-transition-group'
import { Icon } from '../../icon'

import { SubMenuProps } from './types'

const Menu = (props: SubMenuProps) => {
  const { children, title, icon } = props
  const [visible, setVisible] = useState(false)

  const [ref, { height: viewHeight }] = useMeasure()
  const { height } = useSpring({
    from: { height: 0 },
    to: {
      height: visible ? viewHeight : 0
    }
  })

  return (
    <div className='sub-menu'>
      <div className='sub-menu-header' onClick={() => setVisible(!visible)}>
        <div className='left'>
          <Icon name={icon}></Icon>
          <span className='sub-menu-title'>{title}</span>
        </div>
        <span className='iconfont icon-arrow-down'></span>
      </div>

      <ul className='sub-content' style={{ animation: height }}>
        {children}
      </ul>

      {/* <CSSTransition classNames='menu' unmountOnExit timeout={400} in={visible}>
        <ul className='sub-content'>{children}</ul>
      </CSSTransition> */}
    </div>
  )
}

export default Menu
