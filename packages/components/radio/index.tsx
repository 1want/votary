import { useContext, useState, useEffect, createContext } from 'react'
import './index.css'

type Props = {
  value?: string
  checked?: boolean
  children: any
}

const context = createContext()
let num = 0

const Radio = (props: Props) => {
  const [isChecked, setChecked] = useState(false)
  const { children, value, checked } = props

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const { onChange, num } = useContext(context)
  return (
    <>
      <div className='radio-item'>
        <input name={'radio' + num} type='radio' value={value} />
        <label htmlFor={value} className='radio-name'>
          {children}
        </label>
      </div>
    </>
  )
}

const RadioGroup = props => {
  num++
  const { onChange, children } = props

  return (
    <context.Provider value={{ onChange, num }}>{children}</context.Provider>
  )
}

Radio.Group = RadioGroup

export default Radio
