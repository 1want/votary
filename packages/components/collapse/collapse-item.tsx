import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import { CollapseItemProps } from './types'

const CollapseItem = (props: CollapseItemProps) => {
  const { children, title } = props
  const [ref, { height: viewHeight }] = useMeasure()

  const [open, setOpen] = useState(false)
  const propss = useSpring({
    from: { height: 0 },
    to: {
      height: open ? viewHeight : 0
    }
  })

  return (
    <li className='v-collapse'>
      <header
        onClick={() => setOpen(prev => !prev)}
        className='v-collapse-item'>
        <span className='sub-menu-title'>{title}</span>
        <span
          className={`iconfont icon-arrow-right${
            open ? ' v-collapse-show' : ''
          }`}></span>
      </header>

      <animated.div
        style={{
          ...propss,
          overflow: 'hidden'
        }}>
        <div ref={ref} className='v-collapse-content'>
          {children}
        </div>
      </animated.div>
    </li>
  )
}

export default CollapseItem
