import React, { cloneElement, useContext } from 'react'
import { Context } from './formContext'

type MyProps = {
  label?: string
  name: string
  rules?: Array<object>
  children?: React.ReactNode
}

const FormItem = (props: MyProps) => {
  const { children, name, rules } = props
  const { setValue, setRules } = useContext(Context)
  // 初始化表单，收集表单里面包含的formItem的名称
  setValue(name, '')
  // 添加表单校验规则
  setRules(name, rules)

  const setProperty = children => {
    return {
      ...children,
      onChange: e => {
        setValue(name, e.target.value)
      }
    }
  }

  const newElement = cloneElement(children, setProperty(children.props))
  return newElement
}

export default FormItem
