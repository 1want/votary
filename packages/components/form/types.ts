export interface FormProps {
  children?: React.ReactNode
  onFinish?: () => {}
  ref?: any
}

export interface FormItemProps {
  label?: string
  name?: string
  rules?: Array<object>
  children?: any
}

export interface FormContextType {
  setRules: (name: string, rules: Array<object>) => void
  setValue: (name: string, value: string) => void
  value?: any
}
