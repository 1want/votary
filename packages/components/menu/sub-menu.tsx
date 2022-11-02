import React, { useState } from 'react'
import useAnimation from '../../hooks/useAnimation'
import usePosition from '../../hooks/usePosition'
import { Icon } from '../../icon'
import { SubMenuProps } from './types'

const SubMenu = (props: SubMenuProps) => {
  let level = props.level || 0
  level++

  const { children, title, icon } = props
  const [open, setOpen] = useState(false)
  const { ref, height } = usePosition()
  const styles = useAnimation({
    from: { height: 0 },
    to: {
      height: open ? height : 0
    }
  })

  return (
    <li className='sub-menu'>
      <header
        style={{ textIndent: level > 1 ? 13 * (level - 1) + 'px' : '' }}
        className='sub-menu-header'
        onClick={() => setOpen(prev => !prev)}>
        <div className='left'>
          {icon && <Icon name={icon} className='menu-icon'></Icon>}
          <span className='sub-menu-title'>{title}</span>
        </div>
        <span className='iconfont icon-arrow-down'></span>
      </header>

      <div
        style={{
          ...styles,
          overflow: 'hidden'
        }}>
        <ul ref={ref} className='sub-content'>
          {React.Children.map(children, child => {
            const { props } = child
            if (!React.isValidElement(child)) {
              return null
            }
            const childProps = {
              ...props,
              level
            }
            return React.cloneElement(child, childProps)
          })}
        </ul>
      </div>
    </li>
  )
}

export default SubMenu
