export interface DialogProps {
  title?: string
  width?: string
  visible: boolean
  showButton?: boolean
  blur?: boolean
  children?: any
  onClose?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}
