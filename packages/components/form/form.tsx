import FormContext from './formContext'
import useForm from '../../hooks/useForm'
import { FormProps } from './types'

const Form = (props: FormProps) => {
  const { children, onFinish } = props
  const formInstance = useForm()
  const { submit } = formInstance

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
}

export default Form
