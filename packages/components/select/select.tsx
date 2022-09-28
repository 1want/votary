import { useState } from 'react'
import SelectContext from './select-context'
import classNames from 'classnames'

import { SelectProps } from './types'

const Select = (props: SelectProps) => {
  const { defaultValue, placeholder = '请选择', onChange, children } = props

  const [show, setShow] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const classes = classNames(['select', show && 'is-focus'])

  return (
    <SelectContext.Provider value={{ value, onChange, setShow, setValue }}>
      <div
        className={classes}
        tabIndex={1}
        onClick={e => {
          e.stopPropagation()
          setShow(!show)
        }}
        onBlur={() => {
          setShow(false)
        }}>
        <div className={`option-box ${show ? 'show' : 'hidden'}`}>
          {children}
        </div>
        {value ? (
          <div className='value'>{value}</div>
        ) : (
          <div className='placeholder'>{placeholder}</div>
        )}
        <span className='iconfont icon-arrow-down'></span>
      </div>
    </SelectContext.Provider>
  )
}

export default Select
