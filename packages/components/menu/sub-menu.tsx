import React, { useState, useEffect, useContext } from 'react'
import MenuContext from './menu-context'
import useAnimation from '../../hooks/useAnimation'
import usePosition from '../../hooks/usePosition'
import { Icon } from '../../icon'
import { SubMenuProps } from './types'

const SubMenu = (props: SubMenuProps) => {
  let level = props.level || 0
  level++

  const { children, title, icon, index } = props
  const [open, setOpen] = useState(false)
  const { currentSubMenu, setCurrentSubMenu, uniqueOpened } =
    useContext(MenuContext)

  const { ref, height } = usePosition()
  const styles = useAnimation({
    from: { height: 0 },
    to: {
      height: open ? height : 0
    }
  })
  const changeMenu = () => {
    setOpen(prev => !prev)
    setCurrentSubMenu?.(index)
  }

  useEffect(() => {
    if (!uniqueOpened) return
    if (open && currentSubMenu === index) {
      setOpen(prev => !prev)
    }
  }, [currentSubMenu])

  return (
    <li className='sub-menu'>
      <header
        style={{ textIndent: level > 1 ? 13 * (level - 1) + 'px' : '' }}
        className='sub-menu-header'
        onClick={changeMenu}>
        {icon && <Icon name={icon} className='menu-icon'></Icon>}
        <span className='menu-title'>{title}</span>
        <Icon name='arrow-down'></Icon>
      </header>

      <div
        style={{
          ...styles,
          overflow: 'hidden'
        }}>
        <ul ref={ref} className='sub-content'>
          {React.Children.map(children, child => {
            const { props } = child
            if (!React.isValidElement(child)) return null
            return React.cloneElement(child, {
              ...props,
              level
            })
          })}
        </ul>
      </div>
    </li>
  )
}

export default SubMenu
