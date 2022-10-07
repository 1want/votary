import { useContext } from 'react'
import classNames from 'classnames'
import RadioContext from './checkbox-context'
import { CheckboxProps } from './types'

const Radio = (props: CheckboxProps) => {
  const { ...context } = useContext(RadioContext)
  const classes = classNames([props.disabled && 'is-disabled'])
  const checked = context.checked?.includes(props.value || '')

  const onChange = () => {
    context.choose?.(props.value || '')
  }

  return (
    <div className='radio-item'>
      <input
        className={classes}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <span className='radio-name'>{props.children}</span>
    </div>
  )
}

export default Radio
