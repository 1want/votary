import { createContext, Context } from 'react'
import { FormContextType } from './types'

const FormContext: Context<FormContextType> = createContext({})

export default FormContext
