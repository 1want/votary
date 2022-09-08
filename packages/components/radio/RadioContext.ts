import { createContext, Context } from 'react'

export interface RadioContextProps {
  toggle?: (name: string) => void
  checked?: any
}

const RadioContext: Context<RadioContextProps> = createContext({})
export default RadioContext
