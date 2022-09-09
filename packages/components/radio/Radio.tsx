import classNames from 'classnames'

import { useContext } from 'react'
import RadioContext from './radio-context'

interface RadioProps {
  value?: string
  checked?: boolean
  disabled?: boolean
  children: any
}

const Radio = (props: RadioProps) => {
  const { ...context } = useContext(RadioContext)
  const classes = classNames([props.disabled && 'is-disabled'])
  const checked = context.checked
    ? context.checked === props.value
    : props.checked || false

  const onChange = () => {
    context.toggle?.(props.value || '')
  }

  return (
    <div className='radio-item'>
      <input
        className={classes}
        type='radio'
        checked={checked}
        onChange={onChange}
      />
      <span className='radio-name'>{props.children}</span>
    </div>
  )
}

export default Radio
