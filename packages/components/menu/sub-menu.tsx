import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import { Icon } from '../../icon'
import { SubMenuProps } from './types'

const Menu = (props: SubMenuProps) => {
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
    <div className='sub-menu'>
      <div className='sub-menu-header' onClick={() => setOpen(prev => !prev)}>
        <div className='left'>
          <Icon name={icon}></Icon>
          <span className='sub-menu-title'>{title}</span>
        </div>
        <span className='iconfont icon-arrow-down'></span>
      </div>

      <animated.div
        style={{
          ...propss,
          overflow: 'hidden'
        }}>
        <ul ref={ref} className='sub-content'>
          {children}
        </ul>
      </animated.div>
    </div>
  )
}

export default Menu
