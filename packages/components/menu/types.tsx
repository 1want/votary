export interface MenuProps {
  children?: any
  uniqueOpened?: boolean
  mode?: string
}

export interface MenuItemProps {
  children?: any
  icon?: string
  level?: number
}

export interface SubMenuProps {
  children?: any
  title?: string
  index?: string | number
  icon?: string
  level?: number
}

export interface MenuContextProps {
  currentSubMenu?: number
  uniqueOpened?: boolean
  setCurrentSubMenu?: (index: any) => void
}
