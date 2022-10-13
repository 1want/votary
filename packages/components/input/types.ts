export interface InputProps {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  showPassword?: boolean
  click?: () => void
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
