import { MenuItemProps } from './types'

const MenuItem = (props: MenuItemProps) => {
  const { children, level = 1 } = props

  return (
    <li className={`item-li`} style={{ textIndent: 13 * level + 'px' }}>
      <span>{children}</span>
    </li>
  )
}

export default MenuItem
