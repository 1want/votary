import { useState } from 'react'
import classNames from 'classnames'
import SelectContext from './select-context'
import { createNamespace } from '../../utils/createNamespace'
import { Input } from '../input'
import { SelectProps } from './types'

const bem = createNamespace('select')

const Select = (props: SelectProps) => {
  const { value = '', placeholder, onChange, children } = props

  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(value)
  const classes = bem(classNames([show && 'is-focus']))

  return (
    <SelectContext.Provider value={{ checked, onChange, setShow, setChecked }}>
      <div className={classes}>
        <Input
          readOnly
          placeholder={placeholder}
          value={checked}
          onClick={() => {
            setShow(!show)
          }}
          onChange={e => {
            setChecked(e.target.value)
          }}
          onBlur={() => {
            setShow(false)
          }}
          rightIcon='arrow-down'
        />
        <div className={`v-option ${show ? 'show' : 'hidden'}`}>{children}</div>
      </div>
    </SelectContext.Provider>
  )
}

export default Select
