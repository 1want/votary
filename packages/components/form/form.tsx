import { forwardRef, useImperativeHandle } from 'react'
import FormContext from './formContext'
import useForm from '../../hooks/useForm'
import { FormProps } from './types'

const Form = forwardRef((props: FormProps, ref) => {
  const { children, onFinish } = props
  const { setValue, setRules, ValidateRules, errorInfo } = useForm()
  // const { submit } = formInstance

  useImperativeHandle(ref, () => ({
    Validate: ValidateRules
  }))

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}>
      <FormContext.Provider value={{ setValue, setRules, errorInfo }}>
        {children}
      </FormContext.Provider>
    </form>
  )
})

export default Form
