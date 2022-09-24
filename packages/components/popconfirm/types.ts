export interface PopconfirmProps {
  title?: string
  confirmText?: string
  cancelText?: string
  onCancel?: () => void
  onConfirm?: () => void
  children?: any
}
