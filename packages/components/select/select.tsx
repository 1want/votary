import { useState } from 'react'
import SelectContext from './select-context'
import classNames from 'classnames'
import { SelectProps } from './types'
import { createNamespace } from '../../utils/createNamespace'

const bem = createNamespace('select')

const Select = (props: SelectProps) => {
  const { value, placeholder = '请选择', onChange, children } = props

  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(value)
  const classes = bem(classNames([show && 'is-focus']))

  return (
    <SelectContext.Provider value={{ checked, onChange, setShow, setChecked }}>
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
        <div className={`v-option ${show ? 'show' : 'hidden'}`}>{children}</div>
        {checked ? (
          <div className='value'>{checked}</div>
        ) : (
          <div className='placeholder'>{placeholder}</div>
        )}

        <span className='iconfont icon-arrow-down'></span>
      </div>
    </SelectContext.Provider>
  )
}

export default Select
