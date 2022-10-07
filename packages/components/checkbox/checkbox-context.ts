import { createContext, Context } from 'react'

export interface RadioContextProps {
  choose?: (name: string) => void
  checked?: Array<string>
  onChange?: (e: Array<string>) => void
}

const RadioContext: Context<RadioContextProps> = createContext({})
export default RadioContext
