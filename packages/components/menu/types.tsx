export interface MenuProps {
  children?: any
}

export interface MenuItemProps {
  children?: any
  icon?: string
  level?: number
}

export interface SubMenuProps {
  children?: any
  title?: string
  index?: number | string
  icon?: string
  level?: number
}
