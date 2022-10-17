export interface InputProps {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  showPassword?: boolean
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
