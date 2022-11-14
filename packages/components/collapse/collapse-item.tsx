import { useState } from 'react'
import useAnimation from '../../hooks/useAnimation'
import usePosition from '../../hooks/usePosition'
import { CollapseItemProps } from './types'

const CollapseItem = (props: CollapseItemProps) => {
  const { children, title } = props
  const { ref, height } = usePosition()

  const [open, setOpen] = useState(false)
  const styles = useAnimation({
    from: { height: 0 },
    to: {
      height: open ? height : 0
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

      <div
        style={{
          ...styles,
          overflow: 'hidden'
        }}>
        <div ref={ref} className='v-collapse-content'>
          {children}
        </div>
      </div>
    </li>
  )
}

export default CollapseItem
