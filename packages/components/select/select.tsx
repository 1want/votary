import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import SelectContext from './select-context'
import { createNamespace } from '../../utils/createNamespace'
import { Input } from '../input'
import { SelectProps } from './types'

const bem = createNamespace('select')

const Select = (props: SelectProps) => {
  const { value, placeholder, onChange, children } = props

  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(value)
  const classes = bem(classNames([show && 'is-focus']))

  useEffect(() => {
    if (value) {
      children.forEach((item: any) => {
        if (item.props.value === value) {
          setChecked(item.props.children)
        }
      })
    }
  }, [])

  return (
    <SelectContext.Provider value={{ checked, onChange, setShow, setChecked }}>
      <div
        className={classes}
        onClick={() => {
          setShow(!show)
        }}>
        <Input
          readOnly
          placeholder={placeholder}
          value={checked || ''}
          onChange={e => {
            setChecked(e.target.value)
          }}
          onBlur={() => {
            setShow(false)
          }}
          rightIcon='arrow-down'
        />
        <CSSTransition
          classNames='v-mask'
          unmountOnExit
          timeout={400}
          in={show}>
          <div className='v-option' onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </SelectContext.Provider>
  )
}

export default Select
