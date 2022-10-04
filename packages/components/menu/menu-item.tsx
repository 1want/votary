import { MenuItemProps } from './types'

const Menu = (props: MenuItemProps) => {
  const { children } = props

  return (
    <li className='item-li'>
      {/* <span className='item-icon'>icon</span> */}
      <span>{children}</span>
    </li>
  )
}

export default Menu
