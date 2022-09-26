export interface HeaderProps {
  title?: string
  onClose?: () => void
}

export interface ContentProps {
  children?: any
}

export interface FooterProps {
  showButton?: boolean
  onConfirm?: () => void
  onCancel?: () => void
}
