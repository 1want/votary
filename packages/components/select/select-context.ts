import { createContext, Context } from 'react'

export interface SelectContextProps {
  onChange?: (value: string) => void
  setShow?: (bool: boolean) => void
  setValue?: (value: string) => void
  value?: string
}
const SelectContext: Context<SelectContextProps> = createContext({})
export default SelectContext
