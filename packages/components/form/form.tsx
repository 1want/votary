import { forwardRef, useImperativeHandle } from 'react'
import FormContext from './formContext'
import useForm from '../../hooks/useForm'
import { FormProps } from './types'

const Form = forwardRef((props: FormProps, ref) => {
  const { children, onFinish } = props
  const formInstance = useForm()
  // const { submit } = formInstance

  useImperativeHandle(ref, () => ({
    Validate: formInstance.ValidateRules
  }))

  return (
    <FormContext.Provider value={formInstance}>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        {children}
      </form>
    </FormContext.Provider>
  )
})

export default Form
