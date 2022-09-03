import { useState, useContext, createContext } from 'react'
import './index.css'

const context = createContext()

const Select = props => {
  const [show, setShow] = useState(false)
  const [showValue, setValue] = useState()
  const { children, onChange } = props

  return (
    <context.Provider value={{ onChange, setShow, setValue }}>
      <div
        className={`select ${show && 'is-focus'}`}
        onClick={() => setShow(!show)}
        data-text={showValue}>
        <div className={`option-box ${show ? 'show' : 'hidden'}`}>
          {children}
        </div>
      </div>
    </context.Provider>
  )
}

const Option = props => {
  const { onChange, setShow, setValue } = useContext(context)
  const { value, children } = props
  return (
    <div
      className='option'
      data-value={value}
      onClick={e => {
        e.stopPropagation()
        onChange(e.target.dataset.value)
        setShow(false)
        setValue(e.target.dataset.value)
      }}>
      {children}
    </div>
  )
}

Select.Option = Option

export default Select
