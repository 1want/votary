export interface FormProps {
  children?: React.ReactNode
  onFinish?: () => {}
}

export interface FormItemProps {
  label?: string
  name: string
  rules?: Array<object>
  children?: any
}

export interface FormContextType {
  setRules: () => void
  setValue: () => void
  value?: any
}
