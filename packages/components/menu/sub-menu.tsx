import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import usePosition from '../../hooks/usePosition'
import { Icon } from '../../icon'
import { SubMenuProps } from './types'

const SubMenu = (props: SubMenuProps) => {
  let level = props.level || 0

  level++

  const ref = useRef()

  const { children, title, icon } = props
  // const [ref, { height: viewHeight }] = useMeasure()
  useEffect(() => {
    usePosition(ref)
  }, [])

  const [open, setOpen] = useState(false)
  const propss = useSpring({
    from: { height: 0 },
    to: {
      height: open ? 'viewHeight' : 0
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
        <ul className='sub-content'>
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
