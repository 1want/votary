import { useState } from 'react'
import MenuContext from './menu-context'
import { MenuProps } from './types'

const Menu = (props: MenuProps) => {
  const { children, uniqueOpened } = props
  const [currentSubMenu, setCurrentSubMenu] = useState()

  return (
    <MenuContext.Provider
      value={{ uniqueOpened, setCurrentSubMenu, currentSubMenu }}>
      <ul className='v-menu'>{children}</ul>
    </MenuContext.Provider>
  )
}

export default Menu
