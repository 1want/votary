import React, { cloneElement, useContext } from 'react'
import { Context } from './formContext'
import './index.css'

type MyProps = {
  label?: string
  name: string
  rules?: Array<object>
  children?: React.ReactNode
}

const FormItem = (props: MyProps) => {
  const { children, name, rules, label } = props
  const { setValue, setRules } = useContext(Context)
  // 初始化表单，收集表单里面包含的formItem的名称
  setValue(name, '')
  // 添加表单校验规则
  setRules(name, rules)

  const setProperty = children => {
    return {
      ...children,
      onChange: (e: HTMLInputElement) => {
        setValue(name, e.target.value)
      }
    }
  }

  const newElement = cloneElement(children, setProperty(children.props))
  return (
    <div className='form-item'>
      <span className={`label ${rules && 'rules'}`}>{label}:</span>
      {newElement}
    </div>
  )
}

export default FormItem
