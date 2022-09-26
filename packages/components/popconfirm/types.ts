export interface PopconfirmProps {
  title?: string
  confirmText?: string
  cancelText?: string
  onCancel?: () => void
  onConfirm?: () => void
  setVisible?: (bool: boolean) => void
  children?: any
}
