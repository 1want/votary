export interface RadioProps {
  defaultValue?: string
  checked?: boolean
  disabled?: boolean
  children?: any
  value?: string
}

export interface RadioGroupProps {
  value?: string
  onChange?: (e: string) => void
  children?: any
}
