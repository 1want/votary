import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Icon } from '../../icon'

import { SubMenuProps } from './types'

const Menu = (props: SubMenuProps) => {
  const { children, title, icon } = props
  const [visible, setVisible] = useState(false)

  return (
    <div className='sub-menu'>
      <div className='sub-menu-header' onClick={() => setVisible(!visible)}>
        <div className='left'>
          <Icon name={icon}></Icon>
          <span className='sub-menu-title'>{title}</span>
        </div>
        <span className='iconfont icon-arrow-down'></span>
      </div>
      <CSSTransition classNames='menu' unmountOnExit timeout={400} in={visible}>
        <ul className='sub-content'>{children}</ul>
      </CSSTransition>
    </div>
  )
}

export default Menu
