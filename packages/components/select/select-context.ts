import { createContext, Context } from 'react'

export interface SelectContextProps {
  onChange?: (value: any) => void
  setShow?: (bool: boolean) => void
  setChecked?: (value: string) => void
  checked?: string
}

const SelectContext: Context<SelectContextProps> = createContext({})

export default SelectContext
