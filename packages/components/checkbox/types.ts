export interface CheckboxProps {
  defaultValue?: string
  checked?: boolean
  disabled?: boolean
  children?: any
  value?: string
}

export interface CheckboxGroupProps {
  value?: Array<string>
  onChange?: (e: Array<string>) => void
  children?: any
}
