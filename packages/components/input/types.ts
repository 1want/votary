export interface InputProps {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  click?: () => void
  value?: any
  onChange?: (e: HTMLInputElement) => void
}
