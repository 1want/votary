import { MenuProps } from './types'

const Menu = (props: MenuProps) => {
  const { children } = props

  return <div className='menu'>{children}</div>
}

export default Menu
