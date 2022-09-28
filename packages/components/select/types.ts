export interface SelectProps {
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  children?: any
}

export interface OptionProps {
  value?: string
  children?: any
}
