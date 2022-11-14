import { useState } from 'react'
import MenuContext from './menu-context'
import { MenuProps } from './types'

const Menu = (props: MenuProps) => {
  const { children, uniqueOpened } = props
  const [isOpen, setIsOpen] = useState(null)

  return (
    <MenuContext.Provider value={{ uniqueOpened, setIsOpen, isOpen }}>
      <ul className='v-menu'>{children}</ul>
    </MenuContext.Provider>
  )
}

export default Menu
