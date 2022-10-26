import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import { createNamespace } from '../../utils/createNamespace'
import SelectContext from './select-context'
import { OptionProps } from './types'

const bem = createNamespace('option-item')

const Option = (props: OptionProps) => {
  const { checked, onChange, setShow, setChecked } = useContext(SelectContext)
  const { value = '', children } = props

  const classes = bem(classNames([checked === children && 'is-select']))

  useEffect(() => {
    if (checked === value) {
      setChecked?.(children)
    }
  }, [])

  const onClick = (e: any) => {
    e.stopPropagation()
    onChange?.(value)
    setShow?.(false)
    setChecked?.(children)
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

export default Option
