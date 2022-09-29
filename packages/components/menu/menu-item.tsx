import { MenuItemProps } from './types'

const Menu = (props: MenuItemProps) => {
  const { children } = props

  return <li>{children}</li>
}

export default Menu
