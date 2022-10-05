import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import { Icon } from '../../icon'
import { SubMenuProps } from './types'

const SubMenu = (props: SubMenuProps) => {
  let level = props.level || 0

  level++

  const { children, title, icon } = props
  const [ref, { height: viewHeight }] = useMeasure()

  const [open, setOpen] = useState(false)
  const propss = useSpring({
    from: { height: 0 },
    to: {
      height: open ? viewHeight : 0
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

      <animated.div
        style={{
          ...propss,
          overflow: 'hidden'
        }}>
        <ul ref={ref} className='sub-content'>
          {/* {children} */}
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
      </animated.div>
    </li>
  )
}

export default SubMenu
