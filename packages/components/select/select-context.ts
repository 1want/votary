import { createContext, Context } from 'react'
import { SelectContextProps } from './types'

const SelectContext: Context<SelectContextProps> = createContext({})

export default SelectContext
