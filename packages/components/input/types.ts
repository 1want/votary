export interface InputProps {
  type?: string
  leftIcon?: string
  rightIcon?: string
  placeholder?: string
  showPassword?: boolean
  value?: any
  defaultValue?: any
  readOnly?: boolean
  max?: number | string
  maxLength?: number
  minLength?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: any) => void
}
