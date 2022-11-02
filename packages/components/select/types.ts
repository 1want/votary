export interface SelectProps {
  value?: string | number
  placeholder?: string
  onChange?: (value: string) => void
  children?: any
}

export interface OptionProps {
  value?: string | number
  children?: any
}

export interface SelectContextProps {
  onChange?: (value: any) => void
  setShow?: (bool: boolean) => void
  setChecked?: (value: string) => void
  checked?: string | number
}
