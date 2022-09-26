export interface DrawerProps {
  direction?: string
  blur?: boolean
  visible: boolean
  title?: string
  showClose?: boolean
  children?: any
  onClose?: () => void
}
