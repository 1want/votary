import React from 'react'
import Input from '../input'

import './index.css'

type Props = {
  type?: string
  leftIcon?: string
  rightIcon?: string
  click?: () => void
  children?: React.ReactNode
}

const Form = (props: Props) => {
  // console.log(props)
  const { children } = props
  console.log(children)
  return <div>{/* <children></children> */}</div>
}

const FormItem = () => {
  return <div>1</div>
}

export { Form, FormItem }
