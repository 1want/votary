import React from 'react'
import { Context } from './formContext'
import useForm from '@/hooks/useForm'

import './index.css'

type Props = {
  children?: React.ReactNode
  onFinish?: () => {}
}

const Form = (props: Props) => {
  const { children, onFinish } = props
  const formInstance = useForm()
  const { submit } = formInstance

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        submit(onFinish)
      }}>
      <Context.Provider value={formInstance}>{children}</Context.Provider>
    </form>
  )
}

export default Form
