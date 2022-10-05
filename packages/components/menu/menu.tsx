import { MenuProps } from './types'

const Menu = (props: MenuProps) => {
  const { children, uniqueOpened, mode } = props

  return <ul className='menu'>{children}</ul>
}

export default Menu
