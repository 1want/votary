import { forwardRef } from 'react'
import FormContext from './formContext'
import useForm from '../../hooks/useForm'
import { FormProps } from './types'

const Form = forwardRef((props: FormProps, ref) => {
  const { children, onFinish } = props
  const formInstance = useForm()
  const { submit } = formInstance
  ref.current = formInstance

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        submit(onFinish)
      }}>
      <FormContext.Provider value={formInstance}>
        {children}
      </FormContext.Provider>
    </form>
  )
})

// Form.ref = 3

export default Form
