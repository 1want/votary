import { MenuItemProps } from './types'

const MenuItem = (props: MenuItemProps) => {
  const { children, level } = props

  return (
    <li className={`item-li`} style={{ textIndent: 10 * level + 'px' }}>
      <span>{children}</span>
    </li>
  )
}

export default MenuItem
