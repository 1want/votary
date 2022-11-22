import { Icon } from '../../icon'
import { MenuItemProps } from './types'

const MenuItem = (props: MenuItemProps) => {
  const { children, level = 1, icon } = props

  return (
    <li className={`item-li`} style={{ textIndent: 13 * level + 'px' }}>
      {icon && <Icon name={icon} className='menu-icon'></Icon>}
      <span>{children}</span>
    </li>
  )
}

export default MenuItem
