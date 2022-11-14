import { createContext, Context } from 'react'
import { MenuContextProps } from './types'

const MenuContext: Context<MenuContextProps> = createContext({})

export default MenuContext
