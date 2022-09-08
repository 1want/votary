import { useState, useContext, createContext } from 'react'
import '../../icon/assets/iconfont.css'
import './index.css'

const context = createContext()

const Select = props => {
  const [show, setShow] = useState(false)
  const [showValue, setValue] = useState()
  const { children, onChange, placeholder } = props

  return (
    <context.Provider value={{ onChange, setShow, setValue }}>
      <div
        className={`select ${show && 'is-focus'}`}
        onClick={() => setShow(!show)}
        data-text={showValue}>
        <div className={`option-box ${show ? 'show' : 'hidden'}`}>
          {children}
        </div>
        <div className='placeholder'>{placeholder}</div>
        <span
          className={`iconfont ${
            show ? 'icon-arrow-up' : 'icon-arrow-down'
          }`}></span>
      </div>
    </context.Provider>
  )
}

const Option = props => {
  const { onChange, setShow } = useContext(context)
  const { value, children } = props
  return (
    <div
      className='option'
      data-value={value}
      onClick={(e: any) => {
        e.stopPropagation()
        onChange(e.target.dataset.value)
        setShow(false)
      }}>
      {children}
    </div>
  )
}

Select.Option = Option

export default Select
